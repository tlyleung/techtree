---
name: Computronium
kind: future
definition: "At least one tonne of engineered matter, most of it doing computation rather than support, operates as a working computer whose measured system-level energy cost is within a factor of 1,000 of the Landauer limit (kT ln 2 per irreversible bit operation at its operating temperature)."
requires: [picotechnology]
icon: {prompt: "A dense block of dark crystal lattice glowing from within with countless tiny points of light, faint heat shimmer rising from its surface"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "The physical limits are known: Landauer's 1961 bound on the energy cost of erasing a bit was confirmed in a single-particle experiment (2012) and again in nanomagnetic memory bits (2016), and Lloyd (2000) worked out the ultimate limits for a kilogram of matter. Single-bit operations have been measured near the limit, but no working computer comes close, let alone a tonne of matter: the most efficient supercomputer on the November 2026 Green500 list delivers 73.3 billion floating-point operations per joule, about 1.4e-11 joules per operation, billions of times the Landauer energy of about 3e-21 joules per bit at room temperature. A floating-point operation involves many bit operations, so the gap per bit is smaller, but it is still many orders of magnitude. The concept is formulated and analysed but there is no experimental prototype, so the score is 2."
trl_history: []
milestones:
  - date: 1961-07-01
    text: "Rolf Landauer argues in the IBM Journal of Research and Development that erasing information is a dissipative process with a minimum heat cost, setting a lower bound on the energy of computation."
    status: done
    sources: ["https://doi.org/10.1147/rd.53.0183"]
  - date: 2000-08-31
    text: "Seth Lloyd publishes in Nature the ultimate physical limits to computation, bounding the speed and memory of an 'ultimate laptop' of one kilogram in one litre."
    status: done
    sources: ["https://www.nature.com/articles/35023282", "https://arxiv.org/abs/quant-ph/9908043"]
  - date: 2012-03-07
    text: "Bérut and colleagues report in Nature the first experimental verification of Landauer's principle, measuring the heat dissipated when a one-bit memory made of a trapped colloidal particle is erased."
    status: done
    sources: ["https://www.nature.com/articles/nature10872"]
  - date: 2016-03-04
    text: "Hong and colleagues report in Science Advances that the minimum energy dissipated in switching a nanomagnetic memory bit is consistent with the Landauer limit of kT ln 2."
    status: done
    sources: ["https://doi.org/10.1126/sciadv.1501492"]
  - date: 2025-11-01
    text: "The KAIROS supercomputer in Toulouse becomes the most energy-efficient system on the Green500 list, at 73.3 gigaflops per watt, and still holds the top spot on the November 2026 list."
    status: done
    sources: ["https://top500.org/lists/green500/2025/11/", "https://top500.org/lists/green500/2026/11/"]
  - text: "A chip-scale computer runs useful programs at a measured system-level energy cost within a factor of 1,000 of the Landauer limit."
    status: pending
  - text: "A Matrioshka brain: nested shells of computronium around a star capture most of its output to power computation."
    status: pending
  - text: "At least one tonne of engineered matter, most of it doing computation rather than support, operates as a working computer whose measured system-level energy cost is within a factor of 1,000 of the Landauer limit."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2100
    median: 2150
    high: 2300
    definition_notes: "No forecast market or expert survey asks this question; Manifold mentions computronium only in AI-outcome markets with no date. The range assumes computronium needs mature molecular assemblers (placed 2050-2075) plus a further leap of many orders of magnitude in energy efficiency from today's best computers, built at tonne scale. Reversible computing could in principle dissipate less than kT ln 2 per logical operation; such designs meet the test, because it sets a ceiling on energy per operation rather than a floor."
---

Computronium is matter arranged to compute as efficiently as physics allows. The term describes an end point rather than a device: a substrate where nearly every atom stores or processes information, with energy losses close to the theoretical minimum. It matters because computation underlies almost everything on this tree, from artificial intelligence to simulated worlds, and the gap between today's computers and the physical limits is enormous.

The limits are well understood. Rolf Landauer showed in 1961 that erasing a bit has a minimum heat cost, and an experiment confirmed it in 2012. Seth Lloyd later calculated what a single kilogram of matter could compute in principle. Single bits have since been switched near that limit, but today's most efficient supercomputers spend billions of times the Landauer energy per floating-point operation, so there is vast room for improvement. Getting there will likely need atom-precise manufacturing, new kinds of logic such as reversible or optical computing, and ways to shed heat from dense hardware. Nothing yet comes close.
