#!/usr/bin/env node
// Check src/content/tech/*.md against the layout rules in PLAN.md.
// Exits 1 if any rule fails. `npm run build` runs this first.
//
// Usage: node scripts/lint.ts [--grid]
import fs from "node:fs";
import * as yaml from "js-yaml";
import { check, eraOrder, sortNodes, type TechNode } from "../src/lib/columns.ts";

const dir = "src/content/tech";
const eras = eraOrder(yaml.load(fs.readFileSync("src/content/eras.yaml", "utf8")) as { id: string; from: number | null }[]);

// Check the fields the layout needs, so the lint never passes a file the
// build's schema (src/content.config.ts) would reject.
const invalid: string[] = [];
const nodes: TechNode[] = fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => {
  const m = fs.readFileSync(`${dir}/${f}`, "utf8").replace(/\r\n?/g, "\n").match(/^---\n([\s\S]*?)\n---/);
  const d = (m ? yaml.load(m[1]) : null) as Record<string, unknown> | null;
  const id = f.replace(/\.md$/, "");
  if (!d || typeof d !== "object") { invalid.push(`${id}: no frontmatter`); return null; }
  const bad = [
    typeof d.name !== "string" && "name",
    !["history", "future"].includes(d.kind as string) && "kind (history or future)",
    typeof d.era !== "string" && "era",
    !Number.isInteger(d.year) && "year (a whole number)",
    d.requires !== undefined && !(Array.isArray(d.requires) && d.requires.every((r) => typeof r === "string")) && "requires (a list of ids)",
  ].filter(Boolean);
  if (bad.length) { invalid.push(`${id}: missing or invalid ${bad.join(", ")}`); return null; }
  return { id, name: d.name as string, era: d.era as string, year: d.year as number, requires: (d.requires as string[] | undefined) ?? [] };
}).filter((n): n is TechNode => n !== null);
if (invalid.length) {
  for (const e of invalid) console.log("FAIL", e);
  console.log(`${invalid.length} invalid files`);
  process.exit(1);
}

const sorted = sortNodes(nodes, eras);
const r = check(sorted, eras);
if (process.argv.includes("--grid") && r.columns.size) {
  const per = new Map<number, TechNode[]>();
  for (const n of sorted) per.set(r.columns.get(n.id)!, [...(per.get(r.columns.get(n.id)!) ?? []), n]);
  for (const [c, ns] of [...per].sort((a, b) => a[0] - b[0]))
    console.log(`${String(c).padStart(2)} ${ns[0].era.padEnd(12)} ${ns.length}  ${ns.map((n) => n.name).join(", ")}`);
  console.log();
}
for (const w of r.warnings) console.log("WARN", w);
for (const e of r.errors) console.log("FAIL", e);
const widest = Math.max(0, ...[...r.columns.values()].reduce((m, c) => m.set(c, (m.get(c) ?? 0) + 1), new Map<number, number>()).values());
const ncols = r.columns.size ? Math.max(...r.columns.values()) + 1 : 0;
console.log(`${nodes.length} technologies, ${r.links.length} links, ${ncols} columns, widest column ${widest}: ` +
  `${r.errors.length} failures, ${r.warnings.length} warnings`);
process.exit(r.errors.length ? 1 : 0);
