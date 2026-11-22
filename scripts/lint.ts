#!/usr/bin/env node
// Check src/content/tech/*.md against the schema and the layout rules in
// PLAN.md. Exits 1 if any rule fails. `npm run build` runs this first.
//
// Usage: node scripts/lint.ts [--grid]
import fs from "node:fs";
import * as yaml from "js-yaml";
import { check, type TechNode } from "../src/lib/columns.ts";
import { toNodes } from "../src/lib/nodes.ts";
import { eraSchema, techSchema, type Tech } from "../src/lib/schema.ts";

const dir = "src/content/tech";
const invalid: string[] = [];
const issues = (where: string, e: { issues: { path: PropertyKey[]; message: string }[] }) =>
  e.issues.forEach((i) => invalid.push(`${where}: ${i.path.length ? i.path.join(".") + ": " : ""}${i.message}`));

const eraResult = eraSchema.array().safeParse(yaml.load(fs.readFileSync("src/content/eras.yaml", "utf8")));
if (!eraResult.success) issues("eras.yaml", eraResult.error);

const techs: { id: string; data: Tech }[] = [];
for (const f of fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort()) {
  const id = f.replace(/\.md$/, "");
  const m = fs.readFileSync(`${dir}/${f}`, "utf8").replace(/\r\n?/g, "\n").match(/^---\n([\s\S]*?)\n---/);
  if (!m) { invalid.push(`${id}: no frontmatter`); continue; }
  const r = techSchema.safeParse(yaml.load(m[1]));
  if (r.success) techs.push({ id, data: r.data });
  else issues(id, r.error);
}
if (invalid.length) {
  for (const e of invalid) console.log("FAIL", e);
  console.log(`${invalid.length} schema failures`);
  process.exit(1);
}

const { nodes, eras } = toNodes(techs, eraResult.data!);
const r = check(nodes, eras.map((e) => e.id));
if (process.argv.includes("--grid") && r.columns.size) {
  const per = new Map<number, TechNode[]>();
  for (const n of nodes) per.set(r.columns.get(n.id)!, [...(per.get(r.columns.get(n.id)!) ?? []), n]);
  for (const [c, ns] of [...per].sort((a, b) => a[0] - b[0]))
    console.log(`${String(c).padStart(2)} ${ns[0].era.padEnd(12)} ${ns.length}  ${ns.map((n) => n.name).join(", ")}`);
  console.log();
}
for (const w of r.warnings) console.log("WARN", w);
for (const e of r.errors) console.log("FAIL", e);
const widest = Math.max(0, ...[...r.columns.values()].reduce((m, c) => m.set(c, (m.get(c) ?? 0) + 1), new Map<number, number>()).values());
const future = nodes.filter((n) => n.future).length;
console.log(`${nodes.length} technologies (${future} future), ${r.links.length} links, widest column ${widest}: ` +
  `${r.errors.length} failures, ${r.warnings.length} warnings`);
process.exit(r.errors.length ? 1 : 0);
