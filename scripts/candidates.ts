#!/usr/bin/env node
// Check data/candidates.yaml (future-technology candidates; see "Generating
// future candidates" in PLAN.md) and summarise it by band. With --html, also
// write the sortable shortlist table the maintainer picks from.
//
// Usage: node scripts/candidates.ts [--html out.html]
import fs from "node:fs";
import * as yaml from "js-yaml";
import { z } from "astro/zod";
import { bandDates } from "../src/lib/schema.ts";

const BANDS = ["late-2020s", "2030s", "2040s", "2050-2075", "2075-2100", "beyond-2100"] as const;
const ERAS = yaml.load(fs.readFileSync("src/content/eras.yaml", "utf8")) as { id: string; name: string; from: number | null; to: number | null }[];
const BAND_NAMES = BANDS.map((id) => {
  const e = ERAS.find((x) => x.id === id);
  if (!e) throw new Error(`band ${id} is missing from eras.yaml`);
  return `${e.name} · ${bandDates(e)}`;
});
const TARGETS = [8, 14, 14, 12, 7, 5];
const BRANCHES = ["computing", "ai", "energy", "space", "biology", "medicine", "materials", "transport",
  "manufacturing", "environment", "communication", "other"] as const;
const SOURCES = ["kurzweil", "paperclips", "metaculus", "manifold", "iea", "survey", "alpha-centauri",
  "beyond-earth", "other"] as const;

const candidate = z.strictObject({
  id: z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/),
  name: z.string().min(1),
  definition: z.string().min(1),
  type: z.enum(["node", "milestone", "forecast"]),
  of: z.string().optional(),
  branch: z.enum(BRANCHES),
  band_guess: z.enum(BANDS),
  requires: z.array(z.string()).default([]),
  missing_history: z.array(z.string()).default([]),
  aspiration: z.number().int().min(1).max(3),
  evidence: z.number().int().min(1).max(3),
  sources: z.array(z.strictObject({
    source: z.enum(SOURCES),
    ref: z.string().min(1),
    date_claimed: z.number().int().optional(),
  })).min(1),
  forecast: z.strictObject({
    url: z.url(),
    retrieved: z.coerce.date(),
    low: z.number().int().optional(),
    median: z.number().int(),
    high: z.number().int().optional(),
  }).optional(),
  notes: z.string().optional(),
  // The maintainer's decision: a deep page, a short page, later, or dropped.
  pick: z.enum(["deep", "short", "later", "drop"]).optional(),
}).superRefine((c, ctx) => {
  if (c.type !== "node" && !c.of) ctx.addIssue({ code: "custom", message: `a ${c.type} needs 'of'` });
  if (c.type === "node" && c.of) ctx.addIssue({ code: "custom", message: "a node can't have 'of'" });
});
type Candidate = z.infer<typeof candidate>;

const path = "data/candidates.yaml";
const parsed = z.array(candidate).safeParse(yaml.load(fs.readFileSync(path, "utf8")));
if (!parsed.success) {
  for (const i of parsed.error.issues) console.log("FAIL", i.path.join("."), i.message);
  process.exit(1);
}
const all = parsed.data;

// Ids on the site: history for lineage, and existing future nodes for 'of'.
const site = new Map<string, string>();
for (const f of fs.readdirSync("src/content/tech").filter((f) => f.endsWith(".md"))) {
  const kind = fs.readFileSync(`src/content/tech/${f}`, "utf8").match(/^kind:\s*(\w+)/m)?.[1] ?? "?";
  site.set(f.replace(/\.md$/, ""), kind);
}
const errors: string[] = [];
const ids = new Map<string, Candidate>();
for (const c of all) {
  if (ids.has(c.id)) errors.push(`${c.id}: duplicate id`);
  if (site.has(c.id)) errors.push(`${c.id}: already on the site`);
  ids.set(c.id, c);
}
for (const c of all) {
  if (c.of && !ids.has(c.of) && !site.has(c.of)) errors.push(`${c.id}: 'of' ${c.of} is not a candidate or site node`);
  for (const r of c.requires) if (!ids.has(r) && !site.has(r)) errors.push(`${c.id}: requires unknown ${r}`);
  if (c.type === "node" && !c.requires.length) errors.push(`${c.id}: a node needs at least one requires`);
}
// Every node must lead back to history through candidates or site nodes.
const reachesHistory = (id: string, seen = new Set<string>()): boolean => {
  if (site.get(id) === "history") return true;
  if (seen.has(id)) return false;
  seen.add(id);
  return (ids.get(id)?.requires ?? []).some((r) => reachesHistory(r, seen));
};
for (const c of all) if (c.type === "node" && !reachesHistory(c.id)) errors.push(`${c.id}: doesn't lead back to history`);

const nodes = all.filter((c) => c.type === "node" && c.pick !== "drop");
console.log("band                         nodes  target  picked");
BANDS.forEach((b, i) => {
  const inBand = nodes.filter((c) => c.band_guess === b);
  const picked = inBand.filter((c) => c.pick === "deep" || c.pick === "short").length;
  console.log(`${BAND_NAMES[i].padEnd(28)} ${String(inBand.length).padStart(6)} ${String(TARGETS[i]).padStart(7)} ${String(picked).padStart(7)}`);
});
const other = all.length - all.filter((c) => c.type === "node").length;
console.log(`${all.length} candidates: ${all.filter((c) => c.type === "node").length} nodes, ${other} milestones or forecasts`);
for (const e of errors) console.log("FAIL", e);

const i = process.argv.indexOf("--html");
if (i > 0) fs.writeFileSync(process.argv[i + 1], html(all));
process.exit(errors.length ? 1 : 0);

function html(cs: Candidate[]): string {
  const esc = (s: string) => s.replace(/[&<>"]/g, (ch) => `&${{ "&": "amp", "<": "lt", ">": "gt", '"': "quot" }[ch]};`);
  const link = (ref: string) => /^https?:\/\//.test(ref) ? `<a href="${esc(ref)}">${esc(new URL(ref).hostname.replace(/^www\./, ""))}</a>` : esc(ref);
  const attached = new Map<string, Candidate[]>();
  for (const c of cs) if (c.of) attached.set(c.of, [...(attached.get(c.of) ?? []), c]);
  const PICKS = [["", "—"], ["deep", "Deep page"], ["short", "Short page"], ["later", "Later"], ["drop", "Drop"]];
  const rows = cs.filter((c) => c.type === "node").map((c) => {
    const band = BANDS.indexOf(c.band_guess);
    const extra = attached.get(c.id) ?? [];
    const kurz = [c, ...extra].flatMap((x) => x.sources).filter((s) => s.source === "kurzweil" && s.date_claimed).map((s) => s.date_claimed!);
    const kinds = [...new Set([c, ...extra].flatMap((x) => x.sources.map((s) => s.source)))];
    const f = c.forecast;
    const forecast = f ? [f.low, f.median, f.high].map((v, k) => v === undefined ? "" : k === 1 ? `<strong>${v}</strong>` : String(v)).filter(Boolean).join("–") : "";
    const details = [
      c.notes && `<p class="notes">${esc(c.notes).replace(/\n/g, "<br>")}</p>`,
      extra.length && `<ul class="attached">${extra.map((x) => `<li><span class="kind">${x.type}</span> ${esc(x.name)}: ${esc(x.definition)}</li>`).join("")}</ul>`,
      `<p class="refs">${c.sources.map((s) => `${link(s.ref)}${s.date_claimed ? ` (${s.date_claimed})` : ""}`).join(" · ")}</p>`,
    ].filter(Boolean).join("");
    return `<tr data-id="${c.id}" data-band="${band}">
<td><select id="pick-${c.id}" aria-label="Decision for ${esc(c.name)}">${PICKS.map(([v, l]) => `<option value="${v}"${(c.pick ?? "") === v ? " selected" : ""}>${l}</option>`).join("")}</select></td>
<td class="tech"><strong>${esc(c.name)}</strong><div class="def">${esc(c.definition)}</div><details><summary>Notes and sources</summary>${details}</details></td>
<td>${c.branch}</td>
<td data-sort="${band}">${BAND_NAMES[band]}</td>
<td data-sort="${c.aspiration}" class="dots" aria-label="${c.aspiration} of 3">${"●".repeat(c.aspiration)}<span class="off">${"●".repeat(3 - c.aspiration)}</span></td>
<td data-sort="${c.evidence}" class="dots" aria-label="${c.evidence} of 3">${"●".repeat(c.evidence)}<span class="off">${"●".repeat(3 - c.evidence)}</span></td>
<td data-sort="${f?.median ?? 9999}" class="num">${forecast}</td>
<td data-sort="${kurz[0] ?? 9999}" class="num">${kurz.join(", ")}</td>
<td>${kinds.join(", ")}${extra.length ? ` <span class="extra">+${extra.length}</span>` : ""}</td>
<td>${esc([...c.requires, ...(c.missing_history ?? []).map((m) => `(${m})`)].join(", "))}</td>
</tr>`;
  }).join("\n");
  const nodeCount = cs.filter((c) => c.type === "node").length;
  return `<title>Future Tech Shortlist</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>
/* Layout: the site's paper palette; a sticky tally of picks against band targets above one sortable table. */
:root {
  --bg: #f6f2ea; --surface: #fffdf8; --ink: #1f1c16; --muted: #6c6556; --line: #d8d0bf;
  --accent: #a8481f; --future: #2f6f86; --future-soft: #e4edf0; --row: #efe9dd; --deep: #2f6f86; --short: #7a8c5a;
  --serif: "Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif;
  --sans: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
}
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) {
  --bg: #14130f; --surface: #1e1c17; --ink: #ece6d8; --muted: #a39b89; --line: #3a362c;
  --accent: #e3895a; --future: #7fb8cc; --future-soft: #1a2427; --row: #24221c; --deep: #7fb8cc; --short: #a9bb86; color-scheme: dark; } }
:root[data-theme="dark"] {
  --bg: #14130f; --surface: #1e1c17; --ink: #ece6d8; --muted: #a39b89; --line: #3a362c;
  --accent: #e3895a; --future: #7fb8cc; --future-soft: #1a2427; --row: #24221c; --deep: #7fb8cc; --short: #a9bb86; color-scheme: dark; }
* { box-sizing: border-box; }
body { background: var(--bg); color: var(--ink); font: 15px/1.5 var(--sans); }
body::before { content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 10; background: var(--bg); }
main { max-width: 1440px; margin: 0 auto; padding-block: 28px 56px; padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }
h1 { font: 600 30px/1.15 var(--serif); margin: 0 0 6px; text-wrap: balance; }
.intro { margin: 0 0 18px; color: var(--muted); max-width: 72ch; }
.tally { position: sticky; top: env(safe-area-inset-top, 0px); z-index: 2; background: var(--bg); padding-block: 12px; border-bottom: 1px solid var(--line); display: grid; gap: 10px; }
.bands { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 8px; }
.band { background: var(--surface); border: 1px solid var(--line); border-radius: 10px; padding: 8px 10px; min-width: 0; }
.band b { display: block; font: 600 12px/1.2 var(--sans); letter-spacing: 0.04em; text-transform: uppercase; color: var(--muted); }
.band .n { font: 600 20px/1.3 var(--serif); font-variant-numeric: tabular-nums; }
.band .n small { font: 13px var(--sans); color: var(--muted); }
.meter { height: 5px; border-radius: 3px; background: var(--future-soft); overflow: hidden; display: flex; }
.meter i { display: block; height: 100%; }
.meter .d { background: var(--deep); } .meter .s { background: var(--short); }
.band.full .n { color: var(--future); } .band.over .n { color: var(--accent); }
.controls { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
.controls input[type=search] { flex: 1 1 220px; min-width: 0; padding: 7px 10px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: inherit; font: inherit; }
.controls select, td select { padding: 6px 8px; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); color: inherit; font: inherit; }
.summary { color: var(--muted); font-variant-numeric: tabular-nums; }
#status { font-size: 13px; color: var(--muted); }
button { padding: 7px 12px; border: 1px solid var(--accent); border-radius: 8px; background: transparent; color: var(--accent); font: 600 14px var(--sans); cursor: pointer; }
button:focus-visible, select:focus-visible, input:focus-visible, summary:focus-visible, th:focus-visible { outline: 2px solid var(--future); outline-offset: 2px; }
.wrap { overflow-x: auto; margin-top: 4px; }
table { border-collapse: collapse; width: 100%; min-width: 1060px; }
th, td { text-align: left; vertical-align: top; padding: 10px 12px 10px 0; border-bottom: 1px solid var(--line); }
th { font: 600 12px/1.3 var(--sans); letter-spacing: 0.04em; text-transform: uppercase; color: var(--muted); cursor: pointer; user-select: none; white-space: nowrap; }
th[aria-sort=ascending]::after { content: " ▲"; } th[aria-sort=descending]::after { content: " ▼"; }
tr.deep td:first-child { box-shadow: inset 3px 0 var(--deep); } tr.short td:first-child { box-shadow: inset 3px 0 var(--short); }
tr.deep td, tr.short td { background: var(--row); } tr.drop td { opacity: 0.5; }
td:first-child { padding-left: 8px; }
.tech { min-width: 340px; max-width: 520px; }
.tech strong { font: 600 16px/1.3 var(--serif); }
.def { color: var(--muted); font-size: 14px; margin-top: 2px; }
details { margin-top: 4px; font-size: 13px; }
summary { color: var(--future); cursor: pointer; }
.notes, .refs { margin: 6px 0 0; color: var(--muted); }
.refs a { color: var(--future); }
.attached { margin: 6px 0 0; padding-left: 18px; color: var(--muted); }
.kind { font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; color: var(--future); }
.dots { color: var(--accent); letter-spacing: 1px; white-space: nowrap; } .dots .off { color: var(--line); }
.num { font-variant-numeric: tabular-nums; white-space: nowrap; }
.extra { font-size: 12px; color: var(--future); }
@media (max-width: 760px) { .bands { grid-template-columns: repeat(3, minmax(0, 1fr)); } h1 { font-size: 24px; } }
@media (prefers-reduced-motion: no-preference) { .meter i { transition: width 0.2s; } }
</style>
<main>
<h1>Future technology shortlist</h1>
<p class="intro">${nodeCount} candidates for technologytree.org, gathered from Kurzweil, Universal Paperclips, Manifold and Metaculus, the IEA and late-game Civ-style trees. Each is a field-level node in the style of the Civ games; narrower wins are filed under it as milestones (open "Notes and sources"). Choose about 55, roughly half deep pages and half short ones, against the band targets below. Five future pages are already on the site, so the launch makes about 60. ● Excites is how much it would stir a general reader; ● Evidence is how much dated, sourced progress there is to write from. Nothing here is verified yet; that happens during research.</p>
<div class="tally">
<div class="bands" id="bands"></div>
<div class="controls">
<input type="search" id="filter" placeholder="Filter by name, branch, source…" aria-label="Filter candidates">
<select id="show" aria-label="Show"><option value="all">All candidates</option><option value="picked">Deep and short</option><option value="open">Undecided</option></select>
<span class="summary" id="summary"></span>
<button id="copy" type="button">Copy decisions</button>
<span id="status" role="status"></span>
</div>
</div>
<div class="wrap"><table><thead><tr><th tabindex="0">Decision</th><th tabindex="0">Technology</th><th tabindex="0">Branch</th><th tabindex="0">Band</th><th tabindex="0">Excites</th><th tabindex="0">Evidence</th><th tabindex="0">Forecast</th><th tabindex="0">Kurzweil</th><th tabindex="0">Sources</th><th tabindex="0">Requires</th></tr></thead>
<tbody>
${rows}
</tbody></table></div>
</main>
<script>
const BANDS = ${JSON.stringify(BAND_NAMES)}, TARGETS = ${JSON.stringify(TARGETS)};
const tbody = document.querySelector("tbody"), rows = [...tbody.rows];
const sel = (r) => r.querySelector("select");
const status = document.getElementById("status");
let db = null;

function render() {
  const bands = document.getElementById("bands");
  bands.innerHTML = "";
  let deep = 0, short = 0;
  BANDS.forEach((name, i) => {
    const inBand = rows.filter((r) => r.dataset.band == i);
    const d = inBand.filter((r) => sel(r).value === "deep").length, s = inBand.filter((r) => sel(r).value === "short").length;
    deep += d; short += s;
    const n = d + s, t = TARGETS[i], scale = Math.max(t, n);
    const el = document.createElement("div");
    el.className = "band" + (n > t ? " over" : n === t ? " full" : "");
    el.innerHTML = '<b></b><div class="n">' + n + ' <small>of ' + t + '</small></div><div class="meter"><i class="d" style="width:' + (d / scale * 100) + '%"></i><i class="s" style="width:' + (s / scale * 100) + '%"></i></div>';
    el.querySelector("b").textContent = name;
    bands.append(el);
  });
  document.getElementById("summary").textContent = (deep + short) + " of 55 chosen · " + deep + " deep · " + short + " short";
  rows.forEach((r) => { r.className = sel(r).value; });
  applyFilter();
}
function applyFilter() {
  const q = document.getElementById("filter").value.toLowerCase(), show = document.getElementById("show").value;
  rows.forEach((r) => {
    const v = sel(r).value;
    r.hidden = (q && !r.textContent.toLowerCase().includes(q)) || (show === "picked" && v !== "deep" && v !== "short") || (show === "open" && v !== "");
  });
}
tbody.addEventListener("change", async (e) => {
  const r = e.target.closest("tr");
  render();
  if (!db) return;
  const ref = db.collection("picks").doc(r.dataset.id);
  status.textContent = "Saving…";
  try { e.target.value ? await ref.set({ pick: e.target.value }) : await ref.delete(); status.textContent = "Saved"; }
  catch (err) { status.textContent = "Couldn't save: " + (err && err.message || "try again"); }
});
document.getElementById("filter").addEventListener("input", applyFilter);
document.getElementById("show").addEventListener("change", applyFilter);
const ths = [...document.querySelectorAll("th")];
ths.forEach((th, col) => {
  const sort = () => {
    const dir = th.getAttribute("aria-sort") === "ascending" ? -1 : 1;
    ths.forEach((h) => h.removeAttribute("aria-sort"));
    th.setAttribute("aria-sort", dir === 1 ? "ascending" : "descending");
    const order = ["deep", "short", "later", "", "drop"];
    const key = (r) => col === 0 ? order.indexOf(sel(r).value) : (r.cells[col].dataset.sort ?? r.cells[col].textContent.toLowerCase());
    rows.sort((a, b) => { const x = key(a), y = key(b); const nx = Number(x), ny = Number(y); return (Number.isNaN(nx) || Number.isNaN(ny) ? String(x).localeCompare(String(y)) : nx - ny) * dir; });
    rows.forEach((r) => tbody.append(r));
  };
  th.addEventListener("click", sort);
  th.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); sort(); } });
});
document.getElementById("copy").addEventListener("click", async () => {
  const text = rows.filter((r) => sel(r).value).map((r) => r.dataset.id + ": " + sel(r).value).join("\\n");
  try { await navigator.clipboard.writeText(text); status.textContent = "Copied"; }
  catch { status.textContent = "Couldn't copy; select the decisions in the table instead"; }
});
render();

(async () => {
  const timer = setTimeout(() => { if (!db) status.textContent = "Decisions aren't being saved here"; }, 10000);
  db = await (window.claude && window.claude.use ? window.claude.use("db") : null);
  clearTimeout(timer);
  if (!db) { status.textContent = "Sign in to save decisions; until then use Copy decisions"; return; }
  db.collection("picks").onSnapshot((snap) => {
    const saved = new Map(snap.docs.map((d) => [d.id, (d.data() || {}).pick || ""]));
    rows.forEach((r) => { const v = saved.get(r.dataset.id); if (v !== undefined || snap.docChanges().some((c) => c.doc.id === r.dataset.id && c.type === "removed")) sel(r).value = v || ""; });
    render();
  }, (err) => { status.textContent = "Couldn't load saved decisions: " + err.message; });
})();
</script>
`;
}
