// Pan, zoom, sticky era labels and prerequisite-chain highlighting for one
// .tree-view. Drag or two-finger scroll to pan; pinch, ctrl+scroll or the
// buttons to zoom. Hovering or focusing a node highlights its full chain.

const MIN_K = 0.25, MAX_K = 2.5, MARGIN = 24, HEADER = 40;

export function setupTreeView(root: HTMLElement) {
  const svg = root.querySelector<SVGSVGElement>("svg.tree")!;
  const viewport = svg.querySelector<SVGGElement>(".viewport")!;
  const labels = [...root.querySelectorAll<HTMLElement>(".bands-header span[data-lo]")];
  const todayLabel = root.querySelector<HTMLElement>(".bands-header .today-label");
  const right = root.dataset.dir === "RIGHT";
  const W = Number(root.dataset.w), H = Number(root.dataset.h);
  let k = 1, tx = 0, ty = 0;

  const size = () => ({ w: root.clientWidth, h: root.clientHeight });

  function clamp() {
    const { w, h } = size();
    k = Math.min(MAX_K, Math.max(MIN_K, k));
    // Keep at least part of the tree on screen; header space on the band axis.
    const top = right ? HEADER : 0;
    const keep = (at: number, span: number, view: number) => span + 2 * MARGIN <= view
      ? Math.min(Math.max(at, MARGIN), view - span - MARGIN)
      : Math.min(MARGIN, Math.max(at, view - span - MARGIN));
    tx = keep(tx, W * k, w);
    ty = keep(ty - top, H * k, h - top) + top;
  }

  function apply() {
    clamp();
    viewport.setAttribute("transform", `translate(${tx},${ty}) scale(${k})`);
    const { w, h } = size();
    for (const el of labels) {
      const lo = Number(el.dataset.lo) * k + (right ? tx : ty);
      const hi = Number(el.dataset.hi) * k + (right ? tx : ty);
      // Measure the label with and without its dates once (a hidden label
      // measures 0), then drop the dates when the band is too narrow for them.
      const measure = () => right ? el.offsetWidth : el.offsetHeight;
      if (!el.dataset.len) {
        el.style.display = "";
        el.classList.remove("short");
        const len = measure();
        el.classList.add("short");
        if (len) { el.dataset.len = String(len); el.dataset.short = String(measure()); }
      }
      const full = Number(el.dataset.len) + 16 <= hi - lo;
      el.classList.toggle("short", !full);
      const len = Number(full ? el.dataset.len : el.dataset.short);
      // Sticky: stay at the start of the view while the band is on screen.
      const at = Math.min(Math.max(lo + 8, 8), hi - len - 8);
      // Hide a label when its band is too narrow to hold it at this zoom (so
      // neighbours never overlap), or too little of the band is on screen.
      const visible = hi - lo >= len + 16 && hi - len - 16 > 0 && lo < (right ? w : h);
      el.style.display = visible ? "" : "none";
      if (right) { el.style.left = `${at}px`; el.style.top = "8px"; }
      else { el.style.top = `${at}px`; el.style.left = "8px"; }
    }
    if (todayLabel) {
      // Centred on the line, below the band labels.
      const at = Number(todayLabel.dataset.at) * k + (right ? tx : ty);
      if (right) { todayLabel.style.left = `${at - todayLabel.offsetWidth / 2}px`; todayLabel.style.top = "36px"; }
      else { todayLabel.style.top = `${at - todayLabel.offsetHeight / 2}px`; todayLabel.style.left = "auto"; todayLabel.style.right = "60px"; }
    }
  }

  function fit() {
    const { w, h } = size();
    if (!w || !h) return;
    if (right) {
      k = Math.min(1, (h - HEADER - MARGIN) / H);
      tx = MARGIN;
      ty = HEADER + (h - HEADER - H * k) / 2;
    } else {
      k = Math.min(1, (w - 2 * MARGIN) / W);
      tx = (w - W * k) / 2;
      ty = MARGIN + 28;
    }
    apply();
  }

  /** Opening view: fit on desktop; on phones, readable size at the top. */
  function start() {
    if (right) return fit();
    const { w } = size();
    k = 0.9;
    const first = svg.querySelector<SVGRectElement>(".node rect")!.getBBox();
    tx = w / 2 - (first.x + first.width / 2) * k;
    ty = MARGIN + 28;
    apply();
  }

  function zoomAt(factor: number, px: number, py: number) {
    const nk = Math.min(MAX_K, Math.max(MIN_K, k * factor));
    tx = px - ((px - tx) * nk) / k;
    ty = py - ((py - ty) * nk) / k;
    k = nk;
    apply();
  }

  // Pointer: one pointer pans, two pinch. A drag beyond a few pixels
  // suppresses the click so links don't open after panning.
  const pointers = new Map<number, { x: number; y: number }>();
  let moved = 0, pinch = 0;
  svg.addEventListener("pointerdown", (e) => {
    pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    moved = 0;
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch = Math.hypot(a.x - b.x, a.y - b.y);
    }
  });
  svg.addEventListener("pointermove", (e) => {
    const prev = pointers.get(e.pointerId);
    if (!prev) return;
    const cur = { x: e.clientX, y: e.clientY };
    pointers.set(e.pointerId, cur);
    if (pointers.size === 1) {
      tx += cur.x - prev.x;
      ty += cur.y - prev.y;
      moved += Math.abs(cur.x - prev.x) + Math.abs(cur.y - prev.y);
      if (moved > 4) {
        svg.classList.add("dragging");
        if (!svg.hasPointerCapture(e.pointerId)) svg.setPointerCapture(e.pointerId);
      }
      apply();
    } else if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const r = svg.getBoundingClientRect();
      if (pinch) zoomAt(dist / pinch, (a.x + b.x) / 2 - r.left, (a.y + b.y) / 2 - r.top);
      pinch = dist;
      moved = 99;
    }
  });
  const end = (e: PointerEvent) => {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = 0;
    svg.classList.remove("dragging");
    // Clear the drag once its click (if any) has been cancelled.
    if (!pointers.size) setTimeout(() => { moved = 0; }, 0);
  };
  svg.addEventListener("pointerup", end);
  svg.addEventListener("pointercancel", end);
  // detail is 0 for keyboard clicks, which are never part of a drag.
  svg.addEventListener("click", (e) => { if (moved > 4 && e.detail !== 0) { e.preventDefault(); e.stopPropagation(); } }, true);

  svg.addEventListener("wheel", (e) => {
    e.preventDefault();
    const r = svg.getBoundingClientRect();
    if (e.ctrlKey || e.metaKey) zoomAt(Math.exp(-e.deltaY * 0.01), e.clientX - r.left, e.clientY - r.top);
    else {
      // A plain mouse wheel scrolls along the tree's long axis.
      const dx = e.shiftKey ? e.deltaY : e.deltaX, dy = e.shiftKey ? 0 : e.deltaY;
      if (right && !e.deltaX && !e.shiftKey) tx -= dy; else { tx -= dx; ty -= dy; }
      apply();
    }
  }, { passive: false });

  root.querySelectorAll<HTMLButtonElement>("[data-zoom]").forEach((b) => b.addEventListener("click", () => {
    const { w, h } = size();
    if (b.dataset.zoom === "fit") fit();
    else zoomAt(b.dataset.zoom === "in" ? 1.25 : 0.8, w / 2, h / 2);
  }));

  // Highlighting.
  const nodes = [...svg.querySelectorAll<SVGAElement>(".node")];
  const edges = [...svg.querySelectorAll<SVGPathElement>(".edges path")];
  const byId = new Map(nodes.map((n) => [n.dataset.id!, n]));
  const dir = root.dataset.dir;
  function highlight(id: string | null) {
    svg.classList.toggle("focusing", !!id);
    for (const n of nodes) n.classList.remove("on", "self");
    for (const p of edges) { p.classList.remove("on"); p.setAttribute("marker-end", `url(#arrow-${dir})`); }
    if (!id) return;
    const node = byId.get(id)!;
    const up = new Set((node.dataset.up || "").split(" ").filter(Boolean));
    const down = new Set((node.dataset.down || "").split(" ").filter(Boolean));
    node.classList.add("on", "self");
    for (const x of [...up, ...down]) byId.get(x)?.classList.add("on");
    for (const p of edges) {
      const s = p.dataset.s!, t = p.dataset.t!;
      if ((up.has(s) && (t === id || up.has(t))) || ((s === id || down.has(s)) && down.has(t))) {
        p.classList.add("on");
        p.setAttribute("marker-end", `url(#arrow-on-${dir})`);
      }
    }
  }
  for (const n of nodes) {
    n.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") highlight(n.dataset.id!); });
    n.addEventListener("pointerleave", (e) => { if (e.pointerType === "mouse") highlight(null); });
    // Pan to keyboard focus only; a mouse press also focuses the link, and
    // panning then would move the tree under the cursor as a drag starts.
    n.addEventListener("focus", () => { highlight(n.dataset.id!); if (n.matches(":focus-visible")) reveal(n.dataset.id!); });
    n.addEventListener("blur", () => highlight(null));
  }

  /** Pan so a node is on screen. */
  function reveal(id: string, center = false) {
    const node = byId.get(id);
    if (!node) return;
    const box = node.querySelector("rect")!.getBBox();
    const { w, h } = size();
    const x0 = tx + box.x * k, x1 = x0 + box.width * k, y0 = ty + box.y * k, y1 = y0 + box.height * k;
    const top = right ? HEADER : MARGIN + 28;
    if (center || x0 < MARGIN || x1 > w - MARGIN) tx += w / 2 - (x0 + x1) / 2;
    if (center || y0 < top || y1 > h - MARGIN) ty += (h + top) / 2 - (y0 + y1) / 2;
    apply();
  }

  // While hidden (e.g. the list tab on phones) the view has no size, and
  // clamping to it would lose the position, so wait until it's shown.
  let pendingHash = false;
  new ResizeObserver(() => {
    if (!root.clientWidth || !root.clientHeight) return;
    if (!root.dataset.ready) { root.dataset.ready = "1"; start(); focusHash(); }
    else if (pendingHash) { apply(); focusHash(); }
    else apply();
  }).observe(root);

  // /#id centres and highlights that technology.
  function focusHash() {
    if (!root.clientWidth || !root.clientHeight) { pendingHash = true; return; }
    pendingHash = false;
    const id = decodeURIComponent(location.hash.slice(1));
    if (id && byId.has(id)) { reveal(id, true); highlight(id); }
  }
  addEventListener("hashchange", focusHash);
}
