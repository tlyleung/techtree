// Turn validated technology files into layout nodes. Shared by the lint and
// the build, so both see the same eras, bands and years.
import { bandFor, primaryMedian, type Era, type Tech } from "./schema.ts";
import { eraOrder, sortNodes, type TechNode } from "./columns.ts";

export function orderEras(eras: Era[]): Era[] {
  const ids = eraOrder(eras);
  return ids.map((id) => eras.find((e) => e.id === id)!);
}

/**
 * History technologies sit in their era. Future technologies sit in the date
 * band of their primary forecast's median, or, if that's earlier than a
 * prerequisite's band (a date conflict, flagged by the lint), in the latest
 * prerequisite's band so links still point rightward. Overdue forecasts
 * (median before the first band) go in the first band.
 */
export function toNodes(techs: { id: string; data: Tech }[], erasIn: Era[]): { nodes: TechNode[]; eras: Era[] } {
  const eras = orderEras(erasIn);
  const ids = eras.map((e) => e.id);
  const bands = eras.filter((e) => e.future);
  const byId = new Map(techs.map((t) => [t.id, t]));
  const placed = new Map<string, TechNode>();

  const place = (id: string, seen: Set<string> = new Set()): TechNode | undefined => {
    if (placed.has(id)) return placed.get(id);
    const t = byId.get(id);
    if (!t || seen.has(id)) return undefined; // unknown ids and cycles are reported by check()
    seen.add(id);
    const d = t.data;
    let node: TechNode;
    if (d.kind === "history") {
      node = { id, name: d.name, era: d.era!, year: d.year!, requires: d.requires };
    } else {
      const median = primaryMedian(d) ?? bands[0]?.from ?? 0;
      let band = bandFor(median, eras) ?? bands[0];
      for (const r of d.requires) {
        const p = place(r, seen);
        if (p?.future && ids.indexOf(p.era) > ids.indexOf(band.id)) band = eras[ids.indexOf(p.era)];
      }
      node = { id, name: d.name, era: band?.id ?? "", year: median, requires: d.requires, future: true };
    }
    placed.set(id, node);
    return node;
  };

  for (const t of techs) place(t.id);
  return { nodes: sortNodes([...placed.values()], ids), eras };
}
