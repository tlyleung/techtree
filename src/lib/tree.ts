// Build-time tree: lint rules and columns from columns.ts, then ELK orders
// nodes within columns, places them and routes links (see PLAN.md, Layout).
import ELK from "elkjs/lib/elk.bundled.js";
import { getCollection, type CollectionEntry } from "astro:content";
import { check, type Link, type TechNode } from "./columns.ts";
import { toNodes } from "./nodes.ts";
import { bandDates, type Era, type Tech } from "./schema.ts";
export { bandDates };

export type Direction = "RIGHT" | "DOWN";
export interface Box { id: string; x: number; y: number; w: number; h: number }
export interface Route { source: string; target: string; points: { x: number; y: number }[] }
export interface Band { id: string; name: string; lo: number; hi: number; future: boolean }
export interface Drawing {
  dir: Direction; width: number; height: number; boxes: Box[]; routes: Route[]; bands: Band[];
  today: number | null; // position of the "today" line along the flow axis, if any future technologies
}

export const CARD = {
  RIGHT: { w: 200, h: 52 },
  DOWN: { w: 124, h: 72 },
};

async function draw(nodes: TechNode[], links: Link[], columns: Map<string, number>, eras: Era[], dir: Direction): Promise<Drawing> {
  const { w, h } = CARD[dir];
  const res = await new ELK().layout({
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": dir,
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.randomSeed": "1",
      "elk.partitioning.activate": "true",
      "elk.layered.spacing.nodeNodeBetweenLayers": dir === "RIGHT" ? "88" : "48",
      "elk.spacing.nodeNode": dir === "RIGHT" ? "14" : "10",
      "elk.layered.spacing.edgeNodeBetweenLayers": "16",
      "elk.layered.spacing.edgeEdgeBetweenLayers": "12",
      "elk.spacing.edgeEdge": "12",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
    },
    children: nodes.map((n) => ({
      id: n.id, width: w, height: h,
      layoutOptions: { "elk.partitioning.partition": String(columns.get(n.id)) },
    })),
    edges: links.map(([s, t], i) => ({ id: `e${i}`, sources: [s], targets: [t] })),
  });

  const boxes: Box[] = res.children!.map((c) => ({ id: c.id, x: c.x!, y: c.y!, w: c.width!, h: c.height! }));
  const byId = new Map(boxes.map((b) => [b.id, b]));
  const routes: Route[] = res.edges!.map((e, i) => {
    const s = e.sections![0];
    // Start each link a little inside its card (cards are drawn on top), so
    // links that leave near a rounded corner don't start with a gap.
    const inset = dir === "RIGHT" ? { x: s.startPoint.x - 12, y: s.startPoint.y } : { x: s.startPoint.x, y: s.startPoint.y - 12 };
    return { source: links[i][0], target: links[i][1], points: [inset, s.startPoint, ...(s.bendPoints ?? []), s.endPoint] };
  });

  // Era bands span their nodes along the flow axis, meeting halfway between eras.
  const along = (b: Box) => (dir === "RIGHT" ? [b.x, b.x + b.w] : [b.y, b.y + b.h]);
  const raw = eras.map((e) => {
    const bs = nodes.filter((n) => n.era === e.id).map((n) => along(byId.get(n.id)!));
    return { id: e.id, name: e.name, dates: e.future ? bandDates(e) : undefined, future: e.future, lo: Math.min(...bs.map((b) => b[0])), hi: Math.max(...bs.map((b) => b[1])) };
  }).filter((b) => Number.isFinite(b.lo));
  const pad = 24;
  const bands = raw.map((b, i) => ({
    ...b,
    lo: i === 0 ? b.lo - pad : (raw[i - 1].hi + b.lo) / 2,
    hi: i === raw.length - 1 ? b.hi + pad : (b.hi + raw[i + 1].lo) / 2,
  }));
  const first = bands.findIndex((b) => b.future);
  const today = first > 0 ? bands[first].lo : null;
  return { dir, width: res.width!, height: res.height!, boxes, routes, bands, today };
}

export interface Tree {
  techs: CollectionEntry<"tech">[]; // in layout order
  byId: Map<string, CollectionEntry<"tech">>;
  node: Map<string, TechNode>; // era (or date band) and year (or forecast median) per id
  eras: Era[]; // history eras, then future date bands
  requires: Map<string, string[]>;
  unlocks: Map<string, string[]>;
  ancestors: Map<string, Set<string>>;
  descendants: Map<string, Set<string>>;
  conflicts: Set<string>; // "source>target" links where the prerequisite is dated later
  drawings: Record<Direction, Drawing>;
}

let cached: Promise<Tree> | null = null;

/** The whole tree, laid out once per build. Throws if a lint rule fails. */
export function getTree(): Promise<Tree> {
  cached ??= build();
  return cached;
}

async function build(): Promise<Tree> {
  const techs = await getCollection("tech");
  const { nodes, eras } = toNodes(techs, (await getCollection("eras")).map((e) => e.data));
  const r = check(nodes, eras.map((e) => e.id));
  if (r.errors.length) throw new Error(`Tree fails the layout rules (run npm run lint):\n${r.errors.join("\n")}`);

  const byId = new Map(techs.map((t) => [t.id, t]));
  const requires = new Map(nodes.map((n) => [n.id, n.requires]));
  const unlocks = new Map(nodes.map((n) => [n.id, [] as string[]]));
  for (const [s, t] of r.links) unlocks.get(s)!.push(t);
  const closure = (next: Map<string, string[]>) => {
    const memo = new Map<string, Set<string>>();
    const go = (id: string): Set<string> => {
      if (!memo.has(id)) {
        const out = new Set<string>();
        for (const p of next.get(id)!) { out.add(p); for (const x of go(p)) out.add(x); }
        memo.set(id, out);
      }
      return memo.get(id)!;
    };
    for (const n of nodes) go(n.id);
    return memo;
  };
  const [right, down] = await Promise.all([
    draw(nodes, r.links, r.columns, eras, "RIGHT"),
    draw(nodes, r.links, r.columns, eras, "DOWN"),
  ]);
  return {
    techs: nodes.map((n) => byId.get(n.id)!), byId, node: new Map(nodes.map((n) => [n.id, n])), eras,
    requires, unlocks, ancestors: closure(requires), descendants: closure(unlocks),
    conflicts: new Set(r.conflicts.map(([s, t]) => `${s}>${t}`)),
    drawings: { RIGHT: right, DOWN: down },
  };
}

export function formatYear(y: number): string {
  if (y < 0) return `c. ${(-y).toLocaleString("en")} BCE`;
  if (y < 1000) return `c. ${y} CE`;
  return `c. ${y}`;
}

/** Short date for cards: the year for history, the forecast range for the future. */
export function dateLabel(t: Tech): string {
  if (t.kind === "history") return formatYear(t.year!);
  const f = t.forecasts.find((x) => x.primary)!;
  return `${f.low}–${f.high}`;
}
