---
name: Mars Colony
kind: future
definition: "Humans live on Mars continuously for at least five years, with crews rotating or settled, and the settlement makes its own breathing oxygen, water and rocket propellant from local resources."
requires: [mars-landing, moon-base]
icon: {prompt: "A cluster of domed habitats and greenhouses glowing at dusk on a red Martian plain, with a tall rocket standing nearby"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "The needed functions exist only as separate proofs of concept. People have lived continuously on the ISS since 2000, its life support now recovers 98% of water (2023), and a four-person crew lived 378 days in a simulated Mars habitat (2024), but all with supplies from Earth. On Mars itself, MOXIE made oxygen from the atmosphere in 2021, at grams per hour. No one has yet landed on Mars, and making water and propellant there has not been demonstrated, so the colony scores no higher than proof of concept."
trl_history: []
milestones:
  - date: 2000-11-02
    text: "The Expedition 1 crew boards the International Space Station, beginning continuous human presence in space that has lasted ever since."
    status: done
    sources: ["https://www.nasa.gov/history/the-international-space-station-marks-25-years-of-continuous-human-presence/"]
  - date: 2021-04-20
    text: "MOXIE, on NASA's Perseverance rover, makes oxygen from the carbon dioxide of the Martian atmosphere, the first production of a resource on another planet."
    status: done
    sources: ["https://www.nasa.gov/news-release/nasas-perseverance-mars-rover-extracts-first-oxygen-from-red-planet/", "https://pubmed.ncbi.nlm.nih.gov/36044563/"]
  - date: 2023-06-20
    text: "NASA reports that the space station's life support, with its new brine processor, recovers 98% of the crew's water, the level judged necessary for long missions."
    status: done
    sources: ["https://www.nasa.gov/missions/station/iss-research/nasa-achieves-water-recovery-milestone-on-international-space-station"]
  - date: 2024-07-06
    text: "NASA's first CHAPEA crew leaves a 3D-printed simulated Mars habitat in Houston after 378 days, including simulated Marswalks, crop growing and communication delays."
    status: done
    sources: ["https://www.nasa.gov/missions/analog-field-testing/chapea/first-mars-crew-completes-yearlong-simulated-red-planet-nasa-mission"]
  - date: 2026-02-08
    text: "Elon Musk says SpaceX will prioritise building a 'self-growing city' on the Moon ahead of its long-stated goal of settling Mars."
    status: done
    sources: ["https://scientificamerican.com/article/elon-musk-says-spacex-to-prioritize-landing-on-the-moon-instead-of-mars-city/"]
  - text: "Humans first land on Mars."
    status: pending
  - text: "Propellant made on Mars from local resources fuels a launch from the Martian surface."
    status: pending
  - text: "Humans live on Mars continuously for at least five years, with crews rotating or settled, and the settlement makes its own breathing oxygen, water and rocket propellant from local resources."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2050
    median: 2065
    high: 2090
    definition_notes: "Manifold traders give 34% that a human sets foot on Mars by 2040 (63 traders, https://manifold.markets/JamesG/will-a-human-step-foot-on-mars-by-2-f5665ef8d096) and 28% that a permanent colony exists by 2040 (32 traders, https://manifold.markets/VerySeriousPoster/will-humans-establish-a-permanent-c), retrieved 2026-11-26. The estimate assumes a first landing in the 2040s and one to two decades more to build up five years of continuous occupation with propellant made on site. The two Manifold date distributions below bracket it: one asks a looser question (100 people at once, on Mars or in orbit) and one a stricter one (people intending to stay for life)."
  - source: manifold
    url: "https://manifold.markets/saulmunn/when-will-there-be-people-living-pe"
    retrieved: 2026-11-26
    low: 2062
    median: 2096
    high: 2172
    definition_notes: "'When will there be people living permanently on Mars?' (18 traders) resolves when at least two people live there intending to stay for life, which is stricter than our test. Percentiles are interpolated linearly within its date bins (before 2030 2%, 2030-39 7%, 2040-59 16%, 2060-99 29%, 2100-2179 24%, 2180-2260 5%, later 17%)."
  - source: manifold
    url: "https://manifold.markets/AVS/when-will-the-total-number-of-human-31ae9d5cff7c"
    retrieved: 2026-11-26
    low: 2041
    median: 2055
    high: 2086
    definition_notes: "'When will the total number of humans on Mars and its orbit reach 100 for the first time?' (7 traders) needs no continuous stay or local production, so it is looser than our test. Percentiles are interpolated linearly within its decade bins (2030s 18%, 2040s 20%, 2050s 14%, 2060s 6%, 2070s 7%, 2080s 8%, 2090s 9%, 2100 or never 12%); the market is thin and still gives 6% to the 2020s."
---

A Mars colony would be the first place beyond Earth where people live for years at a time, making their own air, water and fuel instead of waiting for deliveries. Supporters see it as a hedge against catastrophe on Earth and the start of a multi-planet civilisation; sceptics point to the radiation, the dust, the thin cold air and the cost.

The groundwork is real but scattered. People have lived continuously in orbit since 2000, recycling nearly all their water. NASA's MOXIE instrument turned Martian carbon dioxide into oxygen, and volunteers have spent a year sealed in a mock Mars base in Houston. SpaceX is testing Starship, a fully reusable rocket designed with Mars in mind, though in 2026 the company put the Moon ahead of Mars. But no human has yet travelled farther than the Moon, and making water and rocket fuel on Mars at useful scale has never been tried. The first landing must come first, and a settlement that stays for five years is a further step.
