#!/usr/bin/env node
// One-off: turn data/history-tree.json into src/content/tech/<id>.md and
// src/content/eras.yaml. After the import, the Markdown files are the source.
// Refuses to overwrite existing files unless run with --force.
//
// Usage: node scripts/import-history.mjs [--force]
import fs from "node:fs";
import * as yaml from "js-yaml";

const force = process.argv.includes("--force");
const tree = JSON.parse(fs.readFileSync("data/history-tree.json", "utf8"));
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const requires = {};
for (const l of tree.links) (requires[l.target] ??= []).push(slug(l.source));

fs.mkdirSync("src/content/tech", { recursive: true });
const eras = tree.groups.map((g) => ({ id: slug(g.name), name: g.name, from: g.from ?? null, to: g.to ?? null }));
const erasPath = "src/content/eras.yaml";
if (fs.existsSync(erasPath) && !force) throw new Error(`${erasPath} exists; use --force`);
fs.writeFileSync(erasPath, yaml.dump(eras, { flowLevel: 1 }));

let written = 0;
for (const n of tree.nodes) {
  const path = `src/content/tech/${slug(n.name)}.md`;
  if (fs.existsSync(path) && !force) throw new Error(`${path} exists; use --force`);
  const front = {
    name: n.name,
    kind: "history",
    era: slug(n.era),
    year: n.year,
    requires: requires[n.name] ?? [],
    icon: { prompt: n.icon ?? null },
  };
  fs.writeFileSync(path, `---\n${yaml.dump(front, { flowLevel: 1, lineWidth: -1 })}---\n`);
  written++;
}
console.log(`wrote ${written} technologies and ${eras.length} eras`);
