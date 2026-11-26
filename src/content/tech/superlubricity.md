---
name: Superlubricity
kind: future
definition: "A bearing or sliding contact at engineering scale (contact area of at least one square millimetre, carrying a realistic load) runs in ordinary humid air for at least a year of operation with a friction coefficient below 0.001 and no significant wear, as reported in a peer-reviewed study or by an independent test."
requires: [quantum-computing]
icon: {prompt: "Two stacked sheets of hexagonal graphene lattice gliding apart over each other with almost no resistance, rendered as glowing honeycomb layers"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "Superlubricity was predicted in 1990 and shown at the nanoscale in graphite in 2004. Microscale graphite contacts have since slid 100 km in air without wear (2021); in 2024 a friction coefficient of 0.0035 was measured on a 16 square-micrometre contact in humid air, with superlubric sliding on a 3 mm ball contact; and in 2026 single graphite contacts up to 0.2 by 0.2 mm (0.04 square millimetres) showed friction coefficients near zero under loads up to 0.5 N. The pieces now work together in the lab at sub-millimetre scale, but no contact of a square millimetre or more has shown friction below 0.001 in ordinary humid air, and none has run for a year, so the score is 4."
trl_history: []
milestones:
  - date: 1990-06-15
    text: "Motohisa Hirano and Kazumasa Shinjo publish a theory of atomic-scale friction in Physical Review B predicting that friction between certain clean crystal surfaces can vanish, an effect they named superlubricity."
    status: done
    sources: ["https://journals.aps.org/prb/abstract/10.1103/PhysRevB.41.11837"]
  - date: 2004-03-24
    text: "Dienwiebel and colleagues in Leiden show with a friction force microscope that ultralow friction in graphite comes from rotated, mismatched graphite layers, the first clear experimental demonstration of superlubricity."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/15089689/"]
  - date: 2015-05-14
    text: "Argonne National Laboratory researchers report engineering-scale superlubricity, a friction coefficient of about 0.004, when graphene wrapped around nanodiamonds slides against diamond-like carbon in dry conditions; in a humid environment the effect is lost."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/25977372/", "https://www.sciencedaily.com/releases/2015/06/150610152229.htm"]
  - date: 2021-06-24
    text: "Researchers in China report wear-free sliding of a micrometre-sized graphite flake on diamond-like carbon in ambient air at up to 2.5 m/s over 100 km, with friction in the superlubric regime."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/35070329/"]
  - date: 2024-10-24
    text: "Researchers in China report humidity-insensitive superlubricity at 2-80% humidity, with a friction coefficient of 0.0035 on a 16 square-micrometre contact, stable after the surfaces had been exposed to air for 365 days, and superlubric sliding without detectable wear on a 3 mm ball-supported contact at 60% humidity."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/39448581/"]
  - date: 2026-02-17
    text: "Han and colleagues report in Physical Review Letters robust structural superlubricity in single graphite contacts up to 0.2 by 0.2 mm, with friction nearly independent of load from 1 mN to 0.5 N and differential friction coefficients as low as about one in a million, against a previous best for macroscale solid superlubricity of about 0.001; the test atmosphere is not stated in the preprint, and sliding was slow (10 micrometres per second)."
    status: done
    sources: ["https://arxiv.org/abs/2601.00190", "https://doi.org/10.1103/bv6j-q22p"]
  - text: "A contact of at least 1 square millimetre shows a friction coefficient below 0.001 in ordinary humid air under a realistic load."
    status: pending
  - text: "A bearing or sliding contact at engineering scale (contact area of at least one square millimetre, carrying a realistic load) runs in ordinary humid air for at least a year of operation with a friction coefficient below 0.001 and no significant wear, as reported in a peer-reviewed study or by an independent test."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2032
    median: 2040
    high: 2060
    definition_notes: "No public forecast or survey covers this. Two gaps remain: scale (from the 0.04 square-millimetre graphite contacts of 2026 to at least 1 square millimetre, in humid air and at practical speeds) and durability (a year of operation). Graphite contacts grew from micrometre flakes (2021, 2024) to a fifth of a millimetre (2026); the estimate allows roughly a decade for the next factor of five in size plus humidity tolerance, and several more years for durability testing. The 2026 near-zero result, if confirmed in humid air, would argue for the earlier end of the range."
---

Superlubricity is the near-disappearance of friction between two surfaces. It happens when two atomically flat crystal lattices, such as layers of graphite, sit at mismatched angles: their atoms can't lock together, so they glide past each other. Friction and wear waste energy and wear out machines, so bearings, gears and micro-machine parts that barely rub could save energy and last far longer.

The effect is well established at small scale. Physicists predicted it in 1990 and saw it in graphite in 2004, and microscale flakes have since slid 100 km in open air without wear. Scaling up has been the obstacle: real surfaces are rough, contain defects and grain boundaries, and attract water, all of which bring friction back. That barrier is starting to move. In 2026, single graphite contacts a fifth of a millimetre across showed near-zero friction under substantial loads. A contact of a square millimetre or more, working in humid air for a year, has not yet been shown.
