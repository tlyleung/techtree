# Tech Tree

A technology tree of real human history in the style of the Civilization games, continued into the future. The site will be **technologytree.org**.

The history half is the familiar way in: Agriculture, the Wheel, Writing and so on, laid out in eras. The main point is the future half. Each emerging technology gets its own page with a readiness level (TRL 1–9), dated and sourced milestones, and a projected arrival date from public forecasts.

**Status:** planning. There's no site code yet. See [PLAN.md](PLAN.md) for the vision, decisions, architecture and phased roadmap.

## Repository

| Path | What it is |
| --- | --- |
| [`PLAN.md`](PLAN.md) | The project plan: decisions, architecture, layout rules, content schema, phases, risks and costs. |
| [`data/civs/`](data/civs/) | Tech trees from seven strategy games, transcribed as JSON, for reference when building our own tree. |

## Game trees (`data/civs/`)

These were transcribed from in-game screenshots and the printed Alpha Centauri poster, then checked against the [Civilization fandom wiki](https://civilization.fandom.com/wiki/). Each file describes the version of the game in its screenshot, which isn't always the final patch.

| File | Game | Nodes | Links |
| --- | --- | ---: | ---: |
| `civ5.json` | Civilization V (base game, patch .332) | 74 | 105 |
| `civ5-gods-and-kings.json` | Civilization V: Gods & Kings | 80 | 132 |
| `civ5-brave-new-world.json` | Civilization V: Brave New World | 81 | 135 |
| `civ6-technology.json` | Civilization VI technology tree (2016 base game) | 68 | 88 |
| `civ6-civics.json` | Civilization VI civics tree (2016 base game) | 50 | 65 |
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
  - `level`: Alpha Centauri's tier within a category;
  - `kind`, `parent`, `tier` and `badge` in Beyond Earth, whose top-level `"layout": "web"` marks it as a radial web rather than columns. `kind` is `branch` or `leaf`, `parent` is a leaf's branch, `tier` is the official tier (0–5), and `badge` is the number shown in game.

All files are acyclic, and every link points to an existing node.

## Credits and use

The game trees describe the technology trees of Civilization V, Civilization VI, Civilization: Beyond Earth and Sid Meier's Alpha Centauri by Firaxis Games. They're kept as reference only. The site will use generic technology names and its own structure, writing and art, not the games' assets.
