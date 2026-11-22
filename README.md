# Tech Tree

A technology tree of real human history in the style of the Civilization games, continued into the future. The site will be **technologytree.org**.

The history half is the familiar way in: Agriculture, the Wheel, Writing and so on, laid out in eras. The main point is the future half. Each emerging technology gets its own page with a readiness level (TRL 1–9), dated and sourced milestones, and a projected arrival date from public forecasts.

**Status:** Phase 1. The history tree is built as an Astro site; deployment to the domain is next. See [PLAN.md](PLAN.md) for the vision, decisions, architecture and phased roadmap.

## Running it

Needs Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev     # local site at http://localhost:4321
npm run lint    # check the tree against the layout rules; add --grid to see the columns
npm run build   # lint, then build the static site into dist/
```

Each technology is a Markdown file in `src/content/tech/`. To change the tree, edit a file's `requires` list (ids are file names) and run `npm run lint`.

## Repository

| Path | What it is |
| --- | --- |
| [`PLAN.md`](PLAN.md) | The project plan: decisions, architecture, layout rules, content schema, phases, risks and costs. |
| [`data/civs/`](data/civs/) | Seven tech trees from four strategy games, transcribed as JSON, for reference when building our own tree. |
| [`src/content/tech/`](src/content/tech/) | The history tree: one Markdown file per technology (93 technologies, 112 links), each with an era, a rough year, its prerequisites and an icon idea. The years are unsourced guesses. |
| [`src/content/eras.yaml`](src/content/eras.yaml) | The eras and their year ranges. |
| [`src/lib/columns.ts`](src/lib/columns.ts) | The column solver and layout rules, shared by the lint and the site build. |
| [`scripts/lint.ts`](scripts/lint.ts) | Checks the tree against the layout rules in PLAN.md (`npm run lint`). |
| [`data/history-tree.json`](data/history-tree.json) | The Phase 0 merged tree that the Markdown files were imported from (by `scripts/import-history.mjs`). Frozen; edit the Markdown files instead. |
| [`data/merge-synonyms.yaml`](data/merge-synonyms.yaml) | Maps game technology names to the merged tree's names. |
| [`scripts/merge_report.py`](scripts/merge_report.py) | Lists what each game technology became and which links differ from the games. Needs PyYAML. |

## Game trees (`data/civs/`)

These were transcribed from in-game screenshots and the printed Alpha Centauri poster, then checked against the [Civilization fandom wiki](https://civilization.fandom.com/wiki/). Each file describes the version of the game in its screenshot, which isn't always the final patch.

| File | Game | Nodes | Links |
| --- | --- | ---: | ---: |
| `civ5.json` | Civilization V (base game, patch .332) | 74 | 110 |
| `civ5-gods-and-kings.json` | Civilization V: Gods & Kings | 80 | 132 |
| `civ5-brave-new-world.json` | Civilization V: Brave New World | 81 | 135 |
| `civ6-technology.json` | Civilization VI technology tree (2016 base game) | 68 | 88 |
| `civ6-civics.json` | Civilization VI civics tree (2016 base game) | 50 | 66 |
| `civ-beyond-earth.json` | Civilization: Beyond Earth | 85 | 97 |
| `alpha-centauri.json` | Sid Meier's Alpha Centauri | 77 | 136 |

### Format

```json
{
  "game": "Civilization V: Brave New World",
  "tree": "technology",
  "groups": [{ "name": "Ancient" }],
  "nodes": [{ "name": "Agriculture", "group": "Ancient", "column": 0 }],
  "links": [{ "source": "Agriculture", "target": "Pottery" }]
}
```

- **`groups`** are the eras in display order. Alpha Centauri uses its research categories (Explore, Build, Conquer, Discover) instead, and Beyond Earth uses the visual rings of its web.
- **`nodes`** are identified by `name`. `column` is the node's position from left to right in the screenshot.
- **`links`** go from a prerequisite (`source`) to the technology it unlocks (`target`).
- Some games add their own node fields:
  - `cost`, as printed;
  - `unlocks`: callouts and unlock lines;
  - `boost`: Civ VI's boost conditions;
  - `level`: Alpha Centauri's tech level (1–16), counted across the whole tree;
  - `kind`, `parent`, `tier` and `badge` in Beyond Earth, whose top-level `"layout": "web"` marks it as a radial web rather than columns. `kind` is `branch` or `leaf`, `parent` is a leaf's branch, `tier` is the official tier (0–5), and `badge` is the research turns left shown in the screenshot's save (absent on researched techs). In Beyond Earth a tech needs only **one** of its linked techs, so a node's incoming links are alternatives rather than joint prerequisites. The game's links are undirected; here a link between branches points from the lower tier to the higher (the direction is arbitrary for the few within one tier), and a link to a leaf comes from its branch.

All files are acyclic, and every link points to an existing node.

## Credits and use

The game trees describe the technology trees of Civilization V, Civilization VI, Civilization: Beyond Earth and Sid Meier's Alpha Centauri by Firaxis Games. These files are reference and aren't published. The site's history tree is our own merge of the Brave New World, Civ VI technology and tech-like Civ VI civics trees (see Phase 0 in [PLAN.md](PLAN.md)). It reuses generic technology names (Agriculture, Writing and so on), drops game-only ones, and is corrected against real history. The games' writing, icons and art aren't used.
