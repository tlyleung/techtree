---
name: Superconductors
kind: future
definition: "A material is shown by at least two independent groups to superconduct, with zero resistance and the Meissner effect, at 0 °C (273 K) or above and at ambient pressure."
requires: [electricity, chemistry]
icon: {prompt: "A small dark ceramic disc floating above a magnet in warm daylight, with no frost or cold vapour around it"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "Superconductivity near room temperature has been seen only under enormous pressure: 203 K in sulfur hydride (2015) and about 250 K, confirmed, in lanthanum hydride at about 170 GPa (2019); a 2025 single-group claim of 298 K at about 260 GPa is unreplicated. At ambient pressure the best result is 151 K in a pressure-quenched cuprate (2026, one group), far short of 273 K. Claimed near-ambient results (the Dias group's hydrides in 2020 and 2023, LK-99 in 2023) were retracted or refuted, so no experiment shows the effect under the target conditions and the goal rests on theory and materials searches: TRL 2."
trl_history: []
milestones:
  - date: 2015-08-17
    text: "Drozdov, Eremets and colleagues report conventional superconductivity at 203 K in sulfur hydride squeezed in a diamond anvil cell, beating the cuprates and pointing to hydrogen-rich materials."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/26280333/"]
  - date: 2019-05-22
    text: "The same Mainz group reports superconductivity at about 250 K (−23 °C) in lanthanum hydride at about 170 GPa, after Somayazulu and colleagues reported evidence of superconductivity above 260 K in the same system in January 2019."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/31118520/", "https://doi.org/10.1103/PhysRevLett.122.027001"]
  - date: 2020-10-14
    text: "Dias and colleagues claim superconductivity at 288 K (15 °C) in a carbonaceous sulfur hydride at 267 GPa; Nature retracts the paper in September 2022, and retracts the group's 2023 claim of near-ambient superconductivity in a lutetium hydride in November 2023."
    status: done
    sources: ["https://www.nature.com/articles/d41586-022-03066-z", "https://pubmed.ncbi.nlm.nih.gov/37935926/"]
  - date: 2023-08-16
    text: "Replication efforts show that LK-99, claimed in July 2023 preprints as a room-temperature, ambient-pressure superconductor, is not a superconductor."
    status: done
    sources: ["https://www.nature.com/articles/d41586-023-02585-7"]
  - date: 2025-09-29
    text: "Ma's group at Jilin University reports in a preprint superconductivity with an onset of up to 298 K (25 °C) in a lanthanum-scandium hydride at about 250-260 GPa; it has not been independently replicated."
    status: done
    sources: ["https://arxiv.org/abs/2510.01273"]
  - date: 2026-03-09
    text: "Chu's group at the University of Houston reports in PNAS an ambient-pressure transition temperature of 151 K in a mercury cuprate stabilised by quenching it from high pressure, above the 133 K or so record that had stood since 1993; it is a single-group result."
    status: done
    sources: ["https://doi.org/10.1073/pnas.2536178123", "https://arxiv.org/abs/2603.12437"]
  - text: "An independent group confirms superconductivity above 150 K at ambient pressure, replicating the 2026 pressure-quench result or beating it."
    status: pending
  - text: "A material is shown by at least two independent groups to superconduct, with zero resistance and the Meissner effect, at 0 °C (273 K) or above and at ambient pressure."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2035
    median: 2055
    high: 2100
    definition_notes: "Metaculus question 18169 asks almost exactly this, but its values could not be read (the site blocked automated access), so it is left out. Manifold markets retrieved 2026-11-26 give a room-temperature, ambient-pressure superconductor 14% before 2030 (894 traders, https://manifold.markets/AaronLehmann/will-a-roomtemperature-atmospheric), 29% before 2036 (31 traders, https://manifold.markets/RemNi/will-we-get-room-temperature-superc-9cd12d2b6612) and 36% before 2040 (37 traders, https://manifold.markets/RemNi/will-we-get-room-temperature-superc-b54305af5198); a separate before-2040 market gives 32% (21 traders, https://manifold.markets/MartinRandall/will-a-roomtemperature-atmospheric-51fcfa820daa). That puts the median after 2040 and the 25th percentile around the mid-2030s. The median of 2055 and the wide high end reflect that no known mechanism guarantees such a material exists."
---

A room-temperature superconductor would carry electricity with no resistance at all, without the liquid-helium or liquid-nitrogen cooling today's superconductors need. It could make power lines lossless, MRI scanners and fusion magnets cheaper, and maglev trains, compact motors and new electronics practical. It is one of the most sought-after results in physics.

The record has crept upward for a century. Copper-oxide ceramics, discovered in 1986, hold the ambient-pressure record: about 133 K (−140 °C) since 1993, and 151 K in a 2026 single-lab result using a pressure-quench trick. Hydrogen-rich compounds have gone much higher, to about 250 K, but only when crushed to more than a million times atmospheric pressure; a 2025 claim of 25 °C in such a compound awaits replication. The field has also seen false dawns: a 2020 claim of superconductivity at 15 °C was retracted, and the LK-99 excitement of 2023 collapsed within weeks. Physics does not rule the goal out, but no confirmed candidate exists yet.
