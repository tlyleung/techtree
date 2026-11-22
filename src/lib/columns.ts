// Column assignment and lint rules for the tree (see "Layout" in PLAN.md).
// Shared by scripts/lint.ts and the site build, so they always agree.
// Plain TypeScript with no non-erasable syntax, so Node can run it directly.

export const MAX_PER_COLUMN = 8;
export const MAX_SPAN = 2; // a link may skip at most one column

export interface TechNode {
  id: string;
  name: string;
  era: string; // history: its era; future: its date band
  year: number; // history: first demonstration; future: primary forecast median
  requires: string[];
  future?: boolean;
}

export type Link = [source: string, target: string];

export interface Checked {
  columns: Map<string, number>;
  links: Link[];
  broken: Link[];
  conflicts: Link[]; // prerequisite dated after the technology it leads to
  errors: string[];
  warnings: string[];
}

type Vertex = string;
interface Edge { u: Vertex; v: Vertex; w: number; why: Link | null }

/**
 * Assign columns with difference constraints (Bellman-Ford). Each link spans
 * 1..MAX_SPAN columns (links in `unbounded` only need to point rightward),
 * each era is a contiguous block of columns, and `fixed` pins nodes to
 * columns. Returns the columns, or the links on a contradictory cycle.
 */
export function solve(
  ids: string[], eras: string[], eraOf: Map<string, string>, links: Link[],
  fixed: [string, number][] = [], unbounded: Set<string> = new Set(),
): { columns: Map<string, number> } | { cycle: Link[] } {
  // Node ids are prefixed so they can't collide with the helper vertices.
  const Z = "#Z";
  const S = eras.map((_, i) => `#S${i}`).concat(`#S${eras.length}`);
  const node = (id: string) => `n:${id}`;
  const edges: Edge[] = [];
  const le = (v: Vertex, u: Vertex, w: number, why: Link | null = null) => edges.push({ u, v, w, why });

  le(S[0], Z, 0);
  le(Z, S[0], 0);
  for (let i = 0; i < eras.length; i++) le(S[i], S[i + 1], -1);
  for (const id of ids) {
    const i = eras.indexOf(eraOf.get(id)!);
    le(S[i], node(id), 0);
    le(node(id), S[i + 1], -1);
  }
  for (const [s, t] of links) {
    if (!unbounded.has(`${s}>${t}`)) le(node(t), node(s), MAX_SPAN, [s, t]);
    le(node(s), node(t), -1, [s, t]);
  }
  for (const [id, c] of fixed) {
    le(node(id), Z, c);
    le(Z, node(id), -c);
  }

  const verts = [Z, ...S, ...ids.map(node)];
  const dist = new Map(verts.map((v) => [v, 0]));
  const pred = new Map<Vertex, [Vertex, Link | null]>();
  let changed: Vertex | null = null;
  for (let pass = 0; pass < verts.length; pass++) {
    changed = null;
    for (const { u, v, w, why } of edges) {
      if (dist.get(u)! + w < dist.get(v)!) {
        dist.set(v, dist.get(u)! + w);
        pred.set(v, [u, why]);
        changed = v;
      }
    }
    if (changed === null) {
      const base = dist.get(Z)!;
      return { columns: new Map(ids.map((id) => [id, dist.get(node(id))! - base])) };
    }
  }
  // Walk back far enough to be on the negative cycle, then collect its links.
  let v = changed!;
  for (let i = 0; i < verts.length; i++) v = pred.get(v)![0];
  const cycle: Link[] = [];
  let u = v;
  do {
    const [p, why] = pred.get(u)!;
    if (why) cycle.push(why);
    u = p;
  } while (u !== v);
  return { cycle };
}

const sameLink = (a: Link, b: Link) => a[0] === b[0] && a[1] === b[1];

/** Links from history to the future cross the "today" line and may skip date bands. */
export function crossesToday(nodes: TechNode[]): Set<string> {
  const future = new Map(nodes.map((n) => [n.id, !!n.future]));
  const out = new Set<string>();
  for (const n of nodes) for (const s of n.requires) if (n.future && !future.get(s)) out.add(`${s}>${n.id}`);
  return out;
}

/** Return the columns and the links that can't meet the span limit. */
export function layout(nodes: TechNode[], eras: string[]): { columns: Map<string, number>; broken: Link[] } {
  const ids = nodes.map((n) => n.id);
  const eraOf = new Map(nodes.map((n) => [n.id, n.era]));
  const year = new Map(nodes.map((n) => [n.id, n.year]));
  const links: Link[] = nodes.flatMap((n) => n.requires.map((s) => [s, n.id] as Link));
  const unbounded = crossesToday(nodes);
  const broken: Link[] = [];
  const without = (drop: Link[]) => links.filter((l) => !drop.some((d) => sameLink(d, l)));

  let columns: Map<string, number>;
  for (;;) {
    const r = solve(ids, eras, eraOf, without(broken), [], unbounded);
    if ("columns" in r) { columns = r.columns; break; }
    // Prefer a link whose removal resolves everything; otherwise drop the
    // link on the contradiction that spans the most years.
    const fixes = r.cycle.filter((l) => "columns" in solve(ids, eras, eraOf, without([...broken, l]), [], unbounded));
    const pool = fixes.length ? fixes : r.cycle;
    const span = (l: Link) => year.get(l[1])! - year.get(l[0])!;
    broken.push(pool.reduce((a, b) => (span(b) > span(a) ? b : a)));
  }

  // Width: pin nodes from overfull columns elsewhere while that lowers the
  // overflow and the other constraints still hold. The sum of squares breaks
  // ties, so nodes can leave full columns to make room for a later move.
  const ok = without(broken);
  const counts = (c: Map<string, number>) => {
    const k = new Map<number, number>();
    for (const id of ids) k.set(c.get(id)!, (k.get(c.get(id)!) ?? 0) + 1);
    return k;
  };
  const overflow = (c: Map<string, number>): [number, number] => {
    let over = 0, sq = 0;
    for (const k of counts(c).values()) { over += Math.max(0, k - MAX_PER_COLUMN); sq += k * k; }
    return [over, sq];
  };
  const less = (a: [number, number], b: [number, number]) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]);

  const fixed: [string, number][] = [];
  for (let iter = 0; iter < ids.length; iter++) {
    const cur = overflow(columns);
    if (cur[0] === 0) break;
    const count = counts(columns);
    let best: { columns: Map<string, number>; pin: [string, number] } | null = null;
    outer: for (const id of ids) {
      if (count.get(columns.get(id)!)! < MAX_PER_COLUMN) continue;
      for (const d of [1, -1, 2, -2, 3, -3]) {
        const pin: [string, number] = [id, columns.get(id)! + d];
        const r = solve(ids, eras, eraOf, ok, [...fixed, pin], unbounded);
        if ("columns" in r && less(overflow(r.columns), cur)) {
          best = { columns: r.columns, pin };
          break outer;
        }
      }
    }
    if (!best) break;
    columns = best.columns;
    fixed.push(best.pin);
  }
  return { columns, broken };
}

function findCycle(nodes: TechNode[]): string[] | null {
  const pre = new Map(nodes.map((n) => [n.id, n.requires]));
  const state = new Map<string, 1 | 2>();
  const visit = (id: string, stack: string[]): string[] | null => {
    if (state.get(id) === 2) return null;
    if (state.get(id) === 1) return [...stack, id];
    state.set(id, 1);
    for (const p of pre.get(id) ?? []) {
      const c = visit(p, [...stack, id]);
      if (c) return c;
    }
    state.set(id, 2);
    return null;
  };
  for (const n of nodes) {
    const c = visit(n.id, []);
    if (c) return c;
  }
  return null;
}

function redundant(nodes: TechNode[]): Link[] {
  const pre = new Map(nodes.map((n) => [n.id, n.requires]));
  const anc = new Map<string, Set<string>>();
  const ancestors = (id: string): Set<string> => {
    if (!anc.has(id)) {
      const a = new Set<string>();
      for (const p of pre.get(id) ?? []) { a.add(p); for (const x of ancestors(p)) a.add(x); }
      anc.set(id, a);
    }
    return anc.get(id)!;
  };
  const out: Link[] = [];
  for (const n of nodes)
    for (const s of n.requires)
      if (n.requires.some((p) => p !== s && ancestors(p).has(s))) out.push([s, n.id]);
  return out;
}

/** Run every lint rule and lay out the columns. */
export function check(nodes: TechNode[], eras: string[]): Checked {
  const errors: string[] = [];
  const warnings: string[] = [];
  const byId = new Map(nodes.map((n) => [n.id, n]));
  if (byId.size !== nodes.length) errors.push("duplicate technology ids");
  const links: Link[] = [];
  for (const n of nodes) {
    if (!eras.includes(n.era)) errors.push(`${n.id}: unknown era ${n.era}`);
    if (new Set(n.requires).size !== n.requires.length) errors.push(`${n.id}: lists a prerequisite twice`);
    for (const s of n.requires) {
      if (!byId.has(s)) errors.push(`${n.id}: requires unknown technology ${s}`);
      else links.push([s, n.id]);
    }
  }
  const empty = { columns: new Map<string, number>(), links, broken: [], conflicts: [], errors, warnings };
  if (errors.length) return empty;
  const cycle = findCycle(nodes);
  if (cycle) {
    errors.push(`prerequisite cycle: ${cycle.join(" -> ")}`);
    return empty;
  }

  const name = (id: string) => byId.get(id)!.name;
  const conflicts: Link[] = [];
  for (const [s, t] of links) {
    const a = byId.get(s)!, b = byId.get(t)!;
    if (a.future && !b.future) errors.push(`a history technology can't require a future one: ${a.name} -> ${b.name}`);
    else if (eras.indexOf(a.era) > eras.indexOf(b.era))
      errors.push(`era goes backwards: ${a.name} (${a.era}) -> ${b.name} (${b.era})`);
    if (a.year > b.year) {
      conflicts.push([s, t]);
      warnings.push(`date conflict: ${a.name} (${a.year}) -> ${b.name} (${b.year})`);
    }
  }
  // Every future technology must lead back to history.
  const rooted = new Map<string, boolean>();
  const toHistory = (id: string): boolean => {
    if (!rooted.has(id)) {
      const n = byId.get(id)!;
      rooted.set(id, !n.future || n.requires.some(toHistory));
    }
    return rooted.get(id)!;
  };
  for (const n of nodes) if (n.future && !toHistory(n.id)) errors.push(`${n.name} doesn't lead back to a history technology`);
  for (const [s, t] of redundant(nodes)) errors.push(`redundant link: ${name(s)} -> ${name(t)}`);

  // Eras and date bands with no technologies take no columns, so a link
  // doesn't have to skip an empty band.
  const { columns, broken } = layout(nodes, eras.filter((e) => nodes.some((n) => n.era === e)));
  const per = new Map<number, string[]>();
  for (const n of nodes) per.set(columns.get(n.id)!, [...(per.get(columns.get(n.id)!) ?? []), n.name]);
  for (const [c, ns] of [...per].sort((a, b) => a[0] - b[0]))
    if (ns.length > MAX_PER_COLUMN)
      errors.push(`column ${c} has ${ns.length} technologies (max ${MAX_PER_COLUMN}): ${ns.join(", ")}`);
  const unbounded = crossesToday(nodes);
  for (const [s, t] of links) {
    const span = columns.get(t)! - columns.get(s)!;
    if (span < 1) errors.push(`link not rightward: ${name(s)} -> ${name(t)}`);
    else if (span > MAX_SPAN && !unbounded.has(`${s}>${t}`))
      errors.push(`link can't fit (skips ${span - 1} columns): ${name(s)} -> ${name(t)}`);
  }
  return { columns, links, broken, conflicts, errors, warnings };
}

/**
 * Era ids in display order: history eras, then future date bands; within
 * each, by start year, an open start first, ties by file order.
 */
export function eraOrder(eras: { id: string; from: number | null; future?: boolean }[]): string[] {
  const key = (e: { from: number | null; future?: boolean }): [number, number] => [e.future ? 1 : 0, e.from ?? -Infinity];
  return eras
    .map((e, i) => ({ e, i }))
    .sort((a, b) => {
      const [fa, ya] = key(a.e), [fb, yb] = key(b.e);
      return fa - fb || (ya === yb ? a.i - b.i : ya < yb ? -1 : 1);
    })
    .map(({ e }) => e.id);
}

/** Stable input order, so the layout doesn't depend on file order. */
export function sortNodes(nodes: TechNode[], eras: string[]): TechNode[] {
  return [...nodes].sort((a, b) =>
    eras.indexOf(a.era) - eras.indexOf(b.era) || a.year - b.year || a.id.localeCompare(b.id));
}
