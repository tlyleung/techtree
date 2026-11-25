# technologytree.org: Plan

This plan turns a 2017–18 D3 prototype into a public site on **technologytree.org**. The prototype drew a Civ V–style tree with elbow links and a force-directed layout. Its code isn't in this repo. The repo keeps the game trees in [`data/civs/`](data/civs/), and our own merged history tree as one Markdown file per technology in [`src/content/tech/`](src/content/tech/), imported from [`data/history-tree.json`](data/history-tree.json) (see [README.md](README.md)).

## Vision

**technologytree.org tracks how close future technologies are, at a level forecasters can trust.** The real-history tree, in the style of the Civilization games, is the familiar way in. The main point is how it continues into the future: every future technology has its own page with a readiness level, the evidence behind that level, and a projected arrival date.

## Decisions

| Topic | Decision |
| --- | --- |
| Audience | Futurists and forecasters. Credibility and sourcing come first. |
| Role of history | History is context and the on-ramp, with lighter rigour than the future section. |
| History tree | **Merge** the Civ V: Brave New World tree, the Civ VI technology tree and the tech-like Civ VI civics into one tree of 93 nodes (`data/history-tree.json`), dropping game-only nodes and fixing the dependencies that are most wrong. See [Phase 0](#phase-0-merged-history-tree). Technology names such as Agriculture are generic; the games' writing and art aren't used. |
| Progress measure | **TRL 1–9** as the headline, backed by **dated, sourced milestones**. |
| History vs future | A technology counts as **history once it has been demonstrated for the first time**. Until then it is future. |
| Lineage | Every future technology must **lead back through its prerequisites to a history node**. |
| Future layout | Position nodes by **projected date**. |
| History of scores | **Keep every past TRL and forecast** so the site can chart "TRL over time" and how forecasts have moved. |
| Tree shape | At most **8 nodes per column**, with the layout calculated at build time to minimise crossings. Desktop flows left to right; mobile flows top to bottom and opens in a focus view. See [Layout](#layout). |
| Date source | A public forecast (e.g. Metaculus) where one exists; otherwise the maintainer's own estimate, labelled as such. Always shown as a range. A node can carry **several forecasts**; one is chosen as **primary** and sets the node's position. **Kurzweil** is a named forecast source with his graded track record shown. |
| Date bands | Bands get **wider further into the future** (e.g. 2030s and 2040s, then 2050–2075, 2075–2100, beyond 2100). |
| Future ideas | Gathered from Kurzweil's books, Universal Paperclips, Metaculus, readiness databases (IEA) and late-game trees in Alpha Centauri and Beyond Earth, then curated into nodes. See [Generating future candidates](#generating-future-candidates). |
| Editing | The maintainer writes the content. The public proposes changes through **GitHub pull requests**. Content is Markdown in git. |
| Upkeep | A scheduled **AI watcher** opens PRs proposing milestone and TRL updates. A human approves every change. |
| Icons | A circle with the technology's initial for now. Consistent **painted medallions** come in a later phase. |
| Tone | **Aspirational but accurate.** The site should rekindle excitement about technology. That comes from which technologies are chosen and how far ahead the tree reaches, never from looser evidence. |
| Launch scope | The merged history tree with short pages, plus **about 60 future technologies**, so the future reads as a frontier and not an epilogue, growing towards about 100 (as big as history). About 30 get **deep pages** (sourced milestones, independent check, a market or survey forecast where one exists), mostly in the bands up to the 2040s. About 30 get **short pages** for the far bands: a tight definition, an honest low TRL, a few sourced milestones and a labelled maintainer estimate with a wide range, still independently checked. |
| Future eras | Each date band has an **opinionated era name** that claims what defines it, shown with its dates: **Intelligence** (2026–2030), **Robotic** (2030s), **Abundance** (2040s), **Planetary** (2050–2075), **Post-Scarcity** (2075–2100) and **Interstellar** (after 2100). |
| Band targets | Roughly 8 Intelligence, 14 Robotic, 14 Abundance, 12 Planetary, 7 Post-Scarcity and 5 Interstellar. The Intelligence band matters most: near-term technologies show momentum. |
| Names | **Snappy, in the style of the Civ games**: one to three words naming the capability, not the event (Air Taxis, Spin Gravity, Neural Lace, not "First Commercial eVTOL Passenger Service"). Long enough to recognise, short enough for a card (about 22 characters at most). The definition carries the precise test. Nodes are **field-level**, as in Civ (Brain Implants, Energy Abundance); narrow wins such as Artificial Sight or Tandem Solar are milestones on them, which keeps the tree clean and makes each page richer. |
| Cost | As close to $0 as possible on top of the domain. |

## Architecture

- **Static site:** [Astro](https://astro.build) with content collections. Each technology is one Markdown file whose frontmatter is checked against a schema when the site builds.
- **Tree rendering:** the graph is built from all content files at build time, laid out once (see [Layout](#layout)), and drawn as SVG with pan and zoom in the browser. Links are drawn as horizontal elbows with rounded corners, from the right edge of the prerequisite to the left edge of the technology it unlocks. Every node links to its page.
- **Hosting:** **GitHub Pages**, deployed by the official Astro GitHub Actions workflow (`withastro/action`) on every push to `main`. Actions deploys ignore a `CNAME` file, so the custom domain is set in the repo's **Settings → Pages** (with Enforce HTTPS) *before* DNS points at GitHub, which prevents a domain takeover. Astro's `site` is set to `https://technologytree.org`. Jekyll isn't needed: GitHub Pages serves any static output. There are no preview deploys for PRs; contributors build locally, and previews can be added later if needed.
- **Repo:** public on GitHub. Each page has an "Edit this page on GitHub" link.
- **Forecast snapshots:** forecasts are fetched by a script and committed as data, with the date they were retrieved. Pages never fetch forecasts live. The Metaculus API needs an account token (stored as a repo secret), and with a default token most community forecasts come back empty, so the plan needs an access grant from Metaculus or a manual-entry fallback where the maintainer copies the numbers by hand with the retrieval date.
- **AI watcher:** a scheduled GitHub Actions job calls Claude (with web search) for each future technology, compares what it finds against the current milestones, and opens one PR per proposed change, with sources. It authenticates with a GitHub App installation token or a fine-grained personal token, not the default `GITHUB_TOKEN`: by default that token can't open PRs, and PRs it opens don't trigger CI without manual approval.

## Layout

The Civ V trees are clean because they were **designed by hand**. `civ5-brave-new-world.json` has 18 columns with at most 7 nodes per column. 127 of its 135 links connect neighbouring columns, 7 skip one column, and only Optics → Compass skips two. It has no redundant links. Civ VI is looser: 47 of its 88 links skip at least one column. Adding real history and future technologies will break these properties unless the build enforces them.

### Algorithm

The layout is calculated **at build time** with a layered-graph method (Sugiyama-style). It replaces the prototype's force simulation, which positioned nodes differently on every load, so the layout is now the same every time.

1. **Layering.** History nodes go in columns by prerequisite depth, grouped into era bands. Future nodes go in **date bands** (e.g. 2030s, 2040s) based on the forecast median. Each date band is treated like an era band: it holds as many columns as it needs, with nodes depth-layered inside it, so two future nodes in the same band can still depend on each other. A **"today" line** separates the two halves.
2. **Balancing columns (our code).** A node can sit anywhere between its latest prerequisite and its earliest dependent. The layout uses that slack to keep every column within the width limit, as in Coffman–Graham layering, and to **shorten long links** (for example, moving Optics right so Optics → Compass skips one column instead of two). For history this is a small constraint problem, solved with difference constraints (Bellman–Ford) in `src/lib/columns.ts`: each link spans 1 or 2 columns, era bands stay contiguous, and each column holds at most 8 nodes. Date bands follow history and are each packed greedily into as few columns as possible (prerequisites first, then the longest chain, then the earliest forecast), since links into a later band only have to point rightward. No layout library enforces these as hard rules, and sharing one solver means the lint and the site always agree.
3. **Reducing crossings, placing and routing ([elkjs](https://github.com/kieler/elkjs), ELK Layered).** The columns from step 2 are passed to ELK as **partitions** (`elk.partitioning.activate`, with each node's `elk.partitioning.partition` set to its column). No two nodes in a column are linked, so each partition becomes exactly one ELK layer. ELK then orders nodes within columns, places them vertically and routes links orthogonally, going around nodes for links that skip a column. It runs with a fixed `elk.randomSeed`, so the output is the same on every build. The same graph is laid out with `elk.direction` `RIGHT` for desktop and `DOWN` for mobile.
4. **Drawing.** Our code draws ELK's link routes as rounded elbows with arrowheads.

A test on the 93-node merged tree (November 2026, elkjs 0.9.3) kept every node in its column in both directions, produced 34 crossings, took about 0.4 s and gave identical output across runs. Two findings from it:

- `elk.layered.layering.layerChoiceConstraint` is ignored outside ELK's Eclipse integration, so it can't pin columns. Interactive layering from given x positions also works, and is the fallback if partitioning ever breaks.
- Links that looked shared were parallel lines 8px apart. Phase 1 tuning spread them to 12px and starts each link inside its card, so none starts at a rounded corner.

### Lint rules (CI fails if broken)

| Rule | Limit |
| --- | --- |
| Nodes per column | ≤ **8** |
| Columns a link may skip | ≤ **1** within history or within one date band. Links into the future from history or from an earlier date band are exempt, because a far-future node necessarily skips the nearer bands; they're routed around the nodes in between. |
| Link direction | Every link points **strictly rightward** (to a later column), except flagged date conflicts. |
| Redundant links (A→C when A→B→C exists) | none |
| Future nodes trace back to history | required |
| Projected date earlier than a prerequisite's | warning, shown on the tree as a conflict |
| Prerequisite cycles | none |

When a rule fails, the fix is editorial: merge nodes, split a date band, or rethink a dependency. A rule fails in the contributor's PR, not on the live site.

### Desktop vs mobile

- **Desktop and landscape:** the full tree flows **left to right** (time on the x-axis), with pan, zoom and an era/date-band header that stays visible while scrolling.
- **Mobile and portrait:** the same layered layout turned to flow **top to bottom**. The 8-node limit is what makes a column fit across a phone screen. Cards are smaller there: the icon, name, year or date band, and a TRL badge.
- **Mobile default is a focus view:** one technology with **one level** of prerequisites above and **one level** of what it unlocks below, tapping through the tree, plus a list by era and date band. The full tree stays available with pinch to zoom.
- **Keeping it readable:** links are drawn quietly by default. Hovering or tapping a node highlights its full prerequisite chain and what it unlocks, and dims everything else.
- Both orientations come from the same column assignment and ordering, so nodes keep their relative positions when the device rotates.

### Content layout

```
src/content/tech/          # one Markdown file per technology; the file name is its id (exists)
  agriculture.md
  fusion-power.md
  ...
src/content/eras.yaml      # eras with their year ranges (exists)
src/content.config.ts      # content schema (exists)
src/lib/columns.ts         # column solver and lint rules, shared by the lint and the build (exists)
src/lib/tree.ts            # build-time layout: columns, then elkjs (exists)
scripts/lint.ts            # `npm run lint`; `npm run build` runs it first (exists)
scripts/import-history.mjs # one-off import from data/history-tree.json (exists, already run)
data/civs/                 # reference game trees (exists)
data/history-tree.json     # Phase 0 merged tree, frozen after the Phase 1 import (exists)
data/merge-synonyms.yaml   # matches the same technology across game trees (exists)
scripts/merge_report.py    # what each game technology became, for sign-off (exists)
data/candidates.yaml     # future-technology candidates
data/forecasts/          # dated forecast snapshots, written by script
docs/trl-rubric.md       # public scoring rubric
```

### Technology schema

Defined in `src/lib/schema.ts`, which the build and the lint share. It is strict: an unknown or misspelt key fails the build. The file name (e.g. `fusion-power.md`) is the id.

```yaml
---
name: Fusion Power
kind: future            # history | future
# era: industrial       # history only: an era id
# year: 1837            # history only: year of first demonstration (negative = BCE)
definition: "A power plant delivers net electricity to a grid from fusion for at least an hour."  # future: the first-demonstration test, roughly TRL 7
requires: [nuclear-fusion, superconductors]
icon:
  prompt: "Glowing plasma torus inside a tokamak ring"   # for the later medallion phase
  image: null
trl:
  level: 4
  as_of: 2026-11-01
  rationale: "Ignition shown in the lab; no device yet near sustained net electricity."
trl_history:            # every past TRL is kept, for "over time" charts
  - { level: 3, as_of: 2021-06-01 }
  - { level: 4, as_of: 2022-12-05 }
milestones:
  - date: 2022-12-05
    text: "NIF achieves fusion ignition (target gain > 1)"
    status: done          # done | pending; done needs a date and a source
    sources: ["https://..."]
  - text: "Sustained net electricity to a grid"
    status: pending
    demonstrates: true    # the first demonstration; once done and sourced, the node must move to history
forecasts:               # one or more; `primary` sets the node's position
  - source: metaculus     # metaculus | manifold | survey | kurzweil | maintainer | other
    primary: true
    url: "https://..."
    retrieved: 2026-11-01
    low: 2040             # 25th percentile / lower bound
    median: 2050
    high: 2065
    definition_notes: "Question resolves on X; our node defines it as Y."
    history:              # filled from the dated snapshots in data/forecasts/
      - { retrieved: 2025-11-01, low: 2042, median: 2055, high: 2070 }
  - source: kurzweil
    citation: "The Singularity Is Nearer (2024), ch. N"
    median: 2045
---
Body: overview, why it matters, prerequisites explained, key players, further reading.
```

## Generating future candidates

Coming up with ideas is cheap; curating them is the work. This doesn't need an agent swarm or a custom harness. Parallel agents are only used for the deep research in step 4.

1. **Gather** raw candidates into `data/candidates.yaml` (name, one-line definition, source, any date the source claims):
   - **Kurzweil:** *The Age of Spiritual Machines* (1999; predictions for 2009, 2019, 2029 and 2099), *The Singularity Is Near* (2005), *The Singularity Is Nearer* (2024). Cite chapters and record the ideas; don't reproduce his text.
   - **Universal Paperclips:** its research projects (e.g. swarm computing, Von Neumann probes, matter conversion, Coherent Extrapolated Volition). Check every name against the game, and cite the original real-world concept as well as the game.
   - **Metaculus:** technology questions. These come with a date source already.
   - **Readiness databases:** the IEA Clean Energy Technology Guide, which publishes TRLs.
   - **Game trees:** the late-game technologies in `data/civs/alpha-centauri.json` and `data/civs/civ-beyond-earth.json`.
2. **Normalise** each candidate into one of:
   - a **node**, with a first-demonstration test that can be checked;
   - a **milestone** on a node (most of Kurzweil's predictions, e.g. "$1,000 of compute matches a human brain");
   - a **forecast** for a node (any dated prediction).

   Then merge synonyms, drop anything too vague to test, and connect each node back to a history node.
3. **Shortlist** in a sortable table with columns for branch, has forecast, Kurzweil date, sources and lineage. The maintainer chooses about 60 for launch, against the band targets.
4. **Research in depth**, one agent per chosen node. Each agent drafts the Markdown page (milestones with sources, TRL rationale, forecasts). A **second, independent agent checks** every citation and date. A link checker in CI confirms that every source URL loads. Hosts that block scripted clients (Metaculus, which serves a Cloudflare challenge, and many publishers that return 403) are excluded and checked by hand or through their APIs. The checker also runs on a schedule, so links that rot later get caught. Run this as a batch only when the maintainer asks.
5. **Later ideas** arrive through a "Propose a technology" GitHub issue template and the AI watcher.

### Grading Kurzweil

Kurzweil's 1999 predictions for 2009 and 2019 have been graded already: by him in 2010, and independently on LessWrong. Gather those gradings and show his record on a methodology page, so readers can weigh his future dates.

## Phases

### Phase 0: Merged history tree

Merge the game trees into one history tree of our own before any site code, so Phase 1 launches the tree we want instead of a game's.

- [x] Take the history trees as input: Civ V: Brave New World, the Civ VI technology tree, and the **tech-like Civ VI civics**. Gods & Kings and base Civ V are mostly subsets of Brave New World. Alpha Centauri and Beyond Earth are science fiction and feed the future candidates in Phase 2 instead.
- [x] Keep a civic only if it passes the same test as a technology: a method, device or practice with a datable first demonstration (e.g. Civil Engineering, Mass Media, Social Media). Leave out institutions, ideologies and policies (e.g. Code of Laws, Feudalism, Totalitarianism). Space Race and Nuclear Program are candidates if renamed as the technologies behind them (spaceflight, nuclear fission).
- [x] Match technologies across games: the same name is the same technology, and a small synonym table in `data/merge-synonyms.yaml` handles near-matches.
- [x] Combine prerequisites from all sources, remove redundant links, and break cycles. Where the games disagree, real history decides, not either game.
- [x] Fix dependencies that exist only for game balance, and drop game-only nodes (Future Tech, and e.g. Mobile Tactics and Combined Arms unless they map to a real technology).
- [x] Give every node an era, a rough year and an icon idea, starting from the prototype's years and icon ideas for the Brave New World nodes. Eras follow from the year: Ancient before 1000 BCE, Classical to 500, Medieval to 1450, Renaissance to 1750, Industrial to 1900, Modern to 1945, Atomic to 1970, then Information. Years stay rough here; Phase 3 sources them.
- [x] Write the result to `data/history-tree.json` (93 nodes, 112 links).
- [x] Write a lint script (first `scripts/lint_history.py`, ported to `scripts/lint.ts` in Phase 1), which checks the merged tree against the Phase 1 lint rules (≤ 8 per column, links skip ≤ 1 column, links point rightward, no cycles, no redundant links). It assigns columns by solving the span and era-band limits as difference constraints, so a failure means no layout can satisfy the rules, not just that the first attempt missed.
- [x] Maintainer sign-off, using `scripts/merge_report.py`.

**Done when** `data/history-tree.json` passes the lint rules and the maintainer has signed off on every node and link.

### Phase 1: Base site

- [x] Set up the Astro project (Astro 7, Node 24) and the content collection schema.
- [x] Write a one-off script that turns `data/history-tree.json` into one Markdown file per node (name, era, prerequisites, rough year, icon idea).
- [x] Calculate the layout at build time: our solver assigns columns, then elkjs (pinned by partitioning) reduces crossings, places nodes and routes links. Add the lint rules to CI (`npm run build` runs the lint first; `.github/workflows/check.yml` runs it on PRs).
- [x] Render the tree (era columns, elbow links, initial-in-circle icons) with pan and zoom, flowing left to right on desktop and top to bottom on mobile. Era labels stay visible while panning, and hovering or focusing a node highlights its full chain.
- [x] Build the mobile focus view: phones in portrait open on a list by era, and each technology page shows one level of prerequisites and one level of what it leads to. The full tree is one tab away.
- [x] Generate a page per node with the name, era, year, prerequisites and what it leads to.
- [ ] Deploy to GitHub Pages through the Actions workflow (`.github/workflows/deploy.yml`). Set Pages' source to GitHub Actions, set technologytree.org in Settings → Pages and enforce HTTPS before pointing DNS at GitHub.
- [x] Tune the layout: links are spread 12px apart and start inside their cards, and columns are further apart. Merging links (Civ-style trunks) was tried and rejected: 9 more crossings, and junctions where links from different technologies share a line. Top-aligning short columns (Brandes–Köpf `LEFTUP`) made the tree about 55% taller, so short columns stay centred.

**Done when** the merged tree is live on the domain and every node opens its own page.

### Phase 2: Future schema and rubric

- [x] Write `docs/trl-rubric.md`: what each TRL means for hardware, software, biology, and broad goals such as "AGI". It's published at `/methodology/`. Future technologies score TRL 1–6, because each one's definition marks roughly TRL 7 and meeting it moves the node to history; the schema enforces this.
- [x] Finalise the milestone and forecast schema (`src/lib/schema.ts`, shared by the build and the lint). Done milestones need a date and a source; a maintainer's estimate and every primary forecast must be a range; each future node has exactly one primary forecast.
- [x] Design the **"today" line** where era columns (history) meet the date bands (future): a dashed accent line with a "Today" label, with the future bands shaded cooler. A node shows its primary forecast's range (e.g. 2032–2042) and a TRL badge, and its card is dashed.
- [x] Add a **conflict flag** for when a node's projected date is earlier than one of its prerequisites'. The node is placed in the prerequisite's band, and the link is drawn dashed amber with ⚠ on the card and a note on the page. The lint reports it as a warning.
- [x] Store **past TRLs and forecasts** in `trl_history` and `forecasts[].history`, ready for "over time" charts. The collection schema is strict, so unknown keys fail the build.
- [x] Define the rule for moving a node to history: once its first demonstration (the milestone with `demonstrates: true`) is done and sourced, the lint fails until the node becomes `kind: history` with an era and year.
- [ ] Gather and normalise future candidates into `data/candidates.yaml` (steps 1–2 of [Generating future candidates](#generating-future-candidates)), then build the shortlist table.
- [x] Research **5 future technologies end to end** to test the format, including the second-agent citation check: fusion power, AGI, a fault-tolerant quantum computer, lab-grown transplant organs and a crewed Mars landing. Every draft needed fixes after the check.

**Done when** 5 future pages exist that a sceptical forecaster would accept as fairly sourced.

### Phase 3: Launch

- [ ] Choose the ~60 launch technologies from the shortlist and research them in batches (draft, then independent verification): ~30 deep pages and ~30 short pages.
- [ ] Publish Kurzweil's graded track record on the methodology page.
- [ ] Research and source the **year of first demonstration** for each history node. The years imported from `data/history-tree.json` are unsourced rough guesses and only a starting point.
- [ ] Add a short page to each history node.
- [ ] Write the forecast-snapshot script and give each snapshot its retrieval date.
- [ ] Add the "Edit on GitHub" links, CONTRIBUTING.md (sourcing rules, schema, TRL rubric), and the About and methodology pages.
- [ ] Choose licences: code (e.g. MIT) and content (e.g. CC BY-SA 4.0).

**Done when** the site is publicly announced.

### Phase 4: AI watcher

- [ ] Add a weekly GitHub Actions job that checks each future technology for new milestones or TRL changes. Give it a GitHub App or fine-grained token, and require the lint and link-check checks to pass before merging.
- [ ] Have it open a PR for each proposed change, with sources and the reasoning.
- [ ] Have it refresh the forecast snapshots.
- [ ] Set a cost cap and a dry-run mode.

**Done when** the watcher runs unattended and its PRs are good enough to merge after review.

### Phase 5: Painted medallion icons

- [ ] Write an `icon.prompt` for every node: one short scene that sums up the technology (e.g. "Person plowing a field"). The history nodes start from the imported `icon.prompt` ideas.
- [ ] Make or commission about 10 **anchor icons** that define the style.
- [ ] Build a generation pipeline: a locked style prompt, a fixed model, and the anchor icons as style references, using each node's `icon.prompt`.
- [ ] Post-process every icon the same way: circle crop, a standard rim and frame, a lighting overlay, and a palette normalised to the era.
- [ ] Review each icon by hand and regenerate rejects.
- [ ] Use the site's own style, not copies of Civ icons.

**Done when** every node has an icon that looks like it belongs to the same set.

## Risks

| Risk | Mitigation |
| --- | --- |
| TRL is fuzzy for broad goals (AGI, fusion) | Publish the rubric. Always show the rationale and the milestones next to the number. |
| A forecast question's definition differs from the node's | Record `definition_notes` and link the question. Fall back to the maintainer's estimate when the mismatch is too large. |
| A forecast date comes before a prerequisite's | Flag it on the tree rather than hiding it. |
| Two x-axes (era columns and dates) look disjointed | Design the "today" line in Phase 2, before adding content. |
| The tree gets too wide or tangled as it grows | Calculate the layout at build time and enforce the lint rules (≤ 8 per column, links skip ≤ 1 column except into a later date band, links point rightward, no redundant links) in CI. |
| The full tree is unusable on phones | Use a top-to-bottom layout and default to the focus view on mobile. |
| The AI watcher reports hype as a milestone | Require sources and human approval for every PR. Never merge automatically. |
| Content workload stalls the project | Split launch into ~30 deep and ~30 short future pages, and research in batches. History pages stay short. |
| Civ IP | The history tree reuses generic technology names from the games and a merged shape of our own (Phase 0). The `data/civs/` files themselves aren't published, and the games' writing, icons and art are never used. |
| AI research invents sources or dates | A second agent independently checks every citation, a CI link checker runs, and a human reviews before merging. |
| Copyright on Kurzweil's books and the Paperclips game | Record the ideas, dates and citations only; never reproduce text. Credit the original concepts. |
| Forecast reuse terms and access | Metaculus's API needs a token, most community forecasts need an access grant, and commercial use needs a written agreement. Ask for access early, follow their attribution rules, and keep the manual-entry fallback. |

## Cost estimate

| Item | Monthly |
| --- | --- |
| Domain | Already owned |
| GitHub Pages hosting, public repo and Actions | $0 |
| AI watcher (Claude API, ~60 technologies a week) | About $10–30 |
| Icon generation (one-off, ~300 icons with rerolls) | About $20–60 in total |

## Open questions

- Which ~60 future technologies make the launch list?

### Resolved

- **Date bands:** 2026–2030, 2030s, 2040s, 2050–2075, 2075–2100 and after 2100, in `src/content/eras.yaml`, named Intelligence, Robotic, Abundance, Planetary, Post-Scarcity and Interstellar. A band holds as many columns as it needs (the 8-node limit is per column), so bands never split. Empty bands take no columns, so a link never has to skip an empty band. Links from history or an earlier band into a later band may skip columns, and each band is packed into as few columns as it can.

- The history tree is a **merge** of Brave New World, the Civ VI technology tree and the tech-like Civ VI civics (Phase 0).
- Date bands get wider further into the future.
- The mobile focus view shows one level of prerequisites and one level of unlocks.
- Future ideas come from Kurzweil, Universal Paperclips, Metaculus, the IEA and late-game Civ-style trees, through the curation process above. Deep research runs one agent per node plus a verification agent; no swarm is needed for coming up with ideas.
- History vs future cutoff: **first demonstration**.
- Future nodes must **lead back to a history node**.
- **Keep** past TRL and forecast values.
- Hosting: **GitHub Pages**, still built with Astro. Jekyll isn't required.
