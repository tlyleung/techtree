---
name: Fusion Power
kind: future
definition: "A fusion power plant exports more electrical energy to a public grid than the whole plant draws, measured over a continuous one-hour period (counting any on-site generators or storage as drawn, not exported), as confirmed by the grid operator or an independent measurement."
requires: [nuclear-fusion]
icon: {prompt: "A compact ring-shaped fusion plant glowing at dusk, with power lines running from it to a distant city"}
trl:
  level: 3
  as_of: 2026-11-22
  rationale: "The fusion core has been shown in integrated experiments: target gain above 1 at NIF since 2022 (4.13 in 2025) and JET's 2023 energy record, alongside a 20-tesla superconducting magnet for compact tokamaks (2021). But these come from different designs, and every whole system has fallen far short of electrical breakeven: NIF's lasers draw about 300 MJ from the grid per shot, and JET took in more heating than it produced. The least mature essential pieces, capturing fusion energy as electricity and, for deuterium-tritium plants, breeding tritium, have not been shown with fusion energy at all; no machine has converted fusion energy into electricity, and SPARC is still being assembled. Scored 3 on those pieces, and lower when in doubt."
trl_history: []
milestones:
  - date: 2021-09-05
    text: "MIT and Commonwealth Fusion Systems ramp a large high-temperature superconducting magnet to 20 tesla, the main technical risk for the compact SPARC tokamak."
    status: done
    sources: ["https://news.mit.edu/2021/MIT-CFS-major-advance-toward-fusion-energy-0908"]
  - date: 2022-12-05
    text: "The National Ignition Facility achieves ignition: 2.05 MJ of laser energy yields 3.15 MJ of fusion energy, although the lasers draw about 300 MJ of electricity per shot."
    status: done
    sources: ["https://www.llnl.gov/article/49306/lawrence-livermore-national-laboratory-achieves-fusion-ignition", "https://www.energy.gov/articles/doe-national-laboratory-makes-history-achieving-fusion-ignition", "https://www.aip.org/fyi/2022/national-ignition-facility-achieves-long-sought-fusion-goal"]
  - date: 2023-10-03
    text: "JET sets a fusion energy record of 69 MJ in a 5.2-second pulse during its final deuterium-tritium campaign, still with more heating energy in than fusion energy out."
    status: done
    sources: ["https://www.ipp.mpg.de/5405892/jet_rekord_2024", "https://www.gov.uk/government/news/jets-final-tritium-experiments-yield-new-fusion-energy-record"]
  - date: 2024-07-03
    text: "ITER proposes a new baseline, pending ITER Council approval, that schedules the start of research operations for 2034 and moves deuterium-tritium operation to 2039, four years later than the 2016 plan's 2035."
    status: done
    sources: ["https://www.iter.org/node/28514", "https://iter.org/sites/default/files/media/2024-07/baseline_press_conference_summary_july-2024_b.pdf"]
  - date: 2025-04-07
    text: "NIF sets a record yield of 8.6 MJ from 2.08 MJ of laser energy, a target gain of 4.13."
    status: done
    sources: ["https://annual.llnl.gov/sites/annual/files/2026-02/llnlannual25-3-national-ignition-facility.pdf"]
  - date: 2026-01-06
    text: "Commonwealth Fusion Systems installs the first of SPARC's 18 toroidal field magnets; SPARC is built to show net fusion energy (Q > 1)."
    status: done
    sources: ["https://techcrunch.com/2026/01/06/commonwealth-fusion-systems-installs-reactor-magnet-lands-deal-with-nvidia"]
  - text: "A fusion power plant exports more electrical energy to a public grid than the whole plant draws, measured over a continuous one-hour period (counting any on-site generators or storage as drawn, not exported), as confirmed by the grid operator or an independent measurement."
    status: pending
    demonstrates: true
forecasts:
  - source: metaculus
    primary: true
    url: "https://www.metaculus.com/questions/363/100-megawatt-fusion-based-electrical-facility/"
    retrieved: 2025-10-17
    low: 2034
    median: 2042
    high: 2057
    definition_notes: "Asks when the first 100 MW fusion-based electrical generation facility (hot fusion, at least 100,000 K) comes into service. It needs a larger plant than our test, which a 50 MW plant such as Helion's planned Orion could pass, so it may resolve later. But it doesn't require a grid connection, net output or any duration, so a plant rated at 100 MW gross that isn't net-positive could arguably resolve it earlier. It resolves ambiguous if nothing happens before 2100, so its quartiles exclude 'not this century'. Values are the community 25th percentile, median and 75th percentile (248 forecasters) as of October 2025, from an archived copy (https://web.archive.org/web/20251017015045/https://www.metaculus.com/questions/363/100-megawatt-fusion-based-electrical-facility/); Metaculus blocks scripted access, so they couldn't be refreshed."
---

## Overview

Fusion power means generating electricity from fusion reactions, the process that powers the Sun, in a plant connected to the grid. The hard part is not making fusion happen, which laboratories have done since the 1930s. It is getting more useful energy out of a whole plant than it takes to run: the magnets or lasers, the heating systems, the cryogenics, and the conversion of heat or plasma energy into electricity.

## Why it matters

A working fusion plant would provide steady, low-carbon power from abundant fuel, with no long-lived high-level waste of the kind fission produces and no risk of a runaway reaction, though neutrons make the plant's structure radioactive and tritium needs careful handling. For forecasters, the useful distinction is between three thresholds. Scientific gain means the fusion energy out exceeds the heating energy delivered to the target or plasma. Engineering gain means the plant makes more electricity than it uses. Commercial power means it does so reliably enough to sell. Headlines often run these together.

## Where it stands

Only the first threshold has been crossed, and only in inertial confinement. The National Ignition Facility first reached a target gain above 1 in December 2022 and raised it to about 4 in April 2025. Its lasers, though, still draw tens of times more electricity from the grid than the fusion releases. Magnetic confinement holds the record for total fusion energy, set by JET in 2023, but no tokamak has yet reached Q > 1. ITER, the flagship international tokamak, now plans to begin deuterium-tritium operation in 2039, and it is not designed to generate electricity. Private machines are the nearest tests. Commonwealth Fusion Systems expects to finish SPARC in 2027. Helion's Polaris is meant to recover electricity directly from the plasma; in February 2026 Helion announced deuterium-tritium fusion at 150 million °C on Polaris, but it published no data and the claim hasn't been independently verified. Neither has yet shown net electricity, and private fusion timelines have often slipped.

## Key players

- **Commonwealth Fusion Systems**: SPARC in Massachusetts, and a planned ARC plant in Virginia, with Google agreeing to buy 200 MW of its output.
- **Helion Energy**: the Polaris prototype, and the Orion plant under construction in Washington state, contracted to supply Microsoft from 2028.
- **ITER Organization**: the tokamak project in France, backed by more than 30 nations.
- **Lawrence Livermore National Laboratory**: the National Ignition Facility.
- **UKAEA and EUROfusion**: JET, and the planned STEP and DEMO plants.

## Further reading

- LLNL, [Lawrence Livermore National Laboratory achieves fusion ignition](https://www.llnl.gov/article/49306/lawrence-livermore-national-laboratory-achieves-fusion-ignition) (2022).
- ITER, [2024 baseline press conference summary](https://iter.org/sites/default/files/media/2024-07/baseline_press_conference_summary_july-2024_b.pdf).
- CNBC, [Microsoft agrees to buy electricity from Helion in 2028](https://www.cnbc.com/2023/05/10/microsoft-agrees-to-buy-power-from-sam-altman-backed-helion-in-2028.html) (2023).
- Google, [Our latest bet on a fusion-powered future](https://blog.google/outreach-initiatives/sustainability/our-latest-bet-on-a-fusion-powered-future/) (2025).
