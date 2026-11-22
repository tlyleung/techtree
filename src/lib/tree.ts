// Build-time tree: lint rules and columns from columns.ts, then ELK orders
// nodes within columns, places them and routes links (see PLAN.md, Layout).
import ELK from "elkjs/lib/elk.bundled.js";
import { getCollection, type CollectionEntry } from "astro:content";
import { check, eraOrder, sortNodes, type Link, type TechNode } from "./columns.ts";

export type Direction = "RIGHT" | "DOWN";
export interface Box { id: string; x: number; y: number; w: number; h: number }
export interface Route { source: string; target: string; points: { x: number; y: number }[] }
export interface Band { id: string; name: string; lo: number; hi: number }
export interface Drawing { dir: Direction; width: number; height: number; boxes: Box[]; routes: Route[]; bands: Band[] }

export const CARD = {
  RIGHT: { w: 200, h: 44 },
  DOWN: { w: 112, h: 64 },
};

async function draw(nodes: TechNode[], links: Link[], columns: Map<string, number>, eras: { id: string; name: string }[], dir: Direction): Promise<Drawing> {
  const { w, h } = CARD[dir];
  const res = await new ELK().layout({
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": dir,
      "elk.edgeRouting": "ORTHOGONAL",
      "elk.randomSeed": "1",
      "elk.partitioning.activate": "true",
      "elk.layered.spacing.nodeNodeBetweenLayers": dir === "RIGHT" ? "64" : "40",
      "elk.spacing.nodeNode": dir === "RIGHT" ? "14" : "10",
      "elk.layered.spacing.edgeNodeBetweenLayers": "16",
      "elk.layered.spacing.edgeEdgeBetweenLayers": "8",
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
    return { source: links[i][0], target: links[i][1], points: [s.startPoint, ...(s.bendPoints ?? []), s.endPoint] };
  });

  // Era bands span their nodes along the flow axis, meeting halfway between eras.
  const along = (b: Box) => (dir === "RIGHT" ? [b.x, b.x + b.w] : [b.y, b.y + b.h]);
  const raw = eras.map((e) => {
    const bs = nodes.filter((n) => n.era === e.id).map((n) => along(byId.get(n.id)!));
    return { id: e.id, name: e.name, lo: Math.min(...bs.map((b) => b[0])), hi: Math.max(...bs.map((b) => b[1])) };
  }).filter((b) => Number.isFinite(b.lo));
  const pad = 24;
  const bands = raw.map((b, i) => ({
    ...b,
    lo: i === 0 ? b.lo - pad : (raw[i - 1].hi + b.lo) / 2,
    hi: i === raw.length - 1 ? b.hi + pad : (b.hi + raw[i + 1].lo) / 2,
  }));
  return { dir, width: res.width!, height: res.height!, boxes, routes, bands };
}

export interface Tree {
  techs: CollectionEntry<"tech">[];
  byId: Map<string, CollectionEntry<"tech">>;
  eras: CollectionEntry<"eras">[];
  requires: Map<string, string[]>;
  unlocks: Map<string, string[]>;
  ancestors: Map<string, Set<string>>;
  descendants: Map<string, Set<string>>;
  drawings: Record<Direction, Drawing>;
}

let cached: Promise<Tree> | null = null;

/** The whole tree, laid out once per build. Throws if a lint rule fails. */
export function getTree(): Promise<Tree> {
  cached ??= build();
  return cached;
}

async function build(): Promise<Tree> {
  const all = await getCollection("eras");
  const eraIds = eraOrder(all.map((e) => ({ id: e.id, from: e.data.from })));
  const eras = eraIds.map((id) => all.find((e) => e.id === id)!);
  const techs = await getCollection("tech");
  const nodes = sortNodes(techs.map((t) => ({
    id: t.id, name: t.data.name, era: t.data.era.id, year: t.data.year, requires: t.data.requires.map((r) => r.id),
  })), eraIds);
  const r = check(nodes, eraIds);
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
  const eraList = eras.map((e) => ({ id: e.id, name: e.data.name }));
  const [right, down] = await Promise.all([
    draw(nodes, r.links, r.columns, eraList, "RIGHT"),
    draw(nodes, r.links, r.columns, eraList, "DOWN"),
  ]);
  return {
    techs: nodes.map((n) => byId.get(n.id)!), byId, eras, requires, unlocks,
    ancestors: closure(requires), descendants: closure(unlocks),
    drawings: { RIGHT: right, DOWN: down },
  };
}

export function formatYear(y: number): string {
  if (y < 0) return `c. ${(-y).toLocaleString("en")} BCE`;
  if (y < 1000) return `c. ${y} CE`;
  return `c. ${y}`;
}
