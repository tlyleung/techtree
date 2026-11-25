---
name: Dyson Swarm
kind: future
definition: "Solar collectors built and placed in independent orbits around the Sun together capture at least 1% of the Sun's total power output, as measured by the collectors' combined intercepted power."
requires: [space-solar-power, self-replication, asteroid-mining]
icon: {prompt: "A golden sun surrounded by a loose glittering cloud of thousands of thin mirror-like panels in sweeping orbits, a small blue planet in the foreground"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "The concept dates from Dyson's 1960 paper and is still only analysed, not built. Its building blocks work at tiny scale: thin-film solar cells generated power on JAXA's IKAROS solar sail in interplanetary space (2010), and Caltech's SSPD-1 beamed power wirelessly in orbit (2023). But nothing yet makes collectors in space, and the swarm's least mature piece, self-replicating industry that could build collectors covering millions of times Earth's surface area (1% of a sphere at Earth's distance from the Sun is about 5 million Earth surfaces), has no lab prototype, so the score is 2."
trl_history: []
milestones:
  - date: 1960-06-03
    text: "Freeman Dyson proposes in Science that an advanced civilisation would capture much of its star's light, turning it into infrared waste heat that astronomers could search for."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/17780673/", "https://doi.org/10.1126/science.131.3414.1667"]
  - date: 2010-06-10
    text: "JAXA confirms that thin-film solar cells on its fully deployed IKAROS solar sail are generating power about 7.7 million km from Earth."
    status: done
    sources: ["https://global.jaxa.jp/press/2010/06/20100611_ikaros_e.html"]
  - date: 2023-03-03
    text: "Caltech's Space Solar Power Demonstrator, SSPD-1, transmits power wirelessly between its own transmitters and receivers in orbit; the experiment also beams a small but detectable amount of power to a receiver on Earth (announced on 1 June 2023)."
    status: done
    sources: ["https://www.caltech.edu/about/news/in-a-first-caltechs-space-solar-power-demonstrator-wirelessly-transmits-power-in-space"]
  - date: 2024-05-06
    text: "Project Hephaistos searches about five million stars in Gaia, 2MASS and WISE data for the infrared signature of partial Dyson spheres and finds seven M-dwarf candidates worth further study, none confirmed."
    status: done
    sources: ["https://arxiv.org/abs/2405.02927", "https://doi.org/10.1093/mnras/stae1186"]
  - text: "A space solar power satellite delivers at least a megawatt of power to Earth continuously."
    status: pending
  - text: "A factory in space manufactures solar collectors from asteroid or lunar material without parts shipped from Earth."
    status: pending
  - text: "Solar collectors built and placed in independent orbits around the Sun together capture at least 1% of the Sun's total power output."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2120
    median: 2200
    high: 2400
    definition_notes: "A ladder of Manifold yes/no markets asks 'Will there be a Dyson Sphere around the Sun before ...?'; retrieved 2026-11-26 they stood at 7.2% for 2040 (47 traders; https://manifold.markets/RemNi/will-there-be-a-dyson-sphere-around-0b0b9fe48958), 11% for 2060 (49 traders; https://manifold.markets/RemNi/will-there-be-a-dyson-sphere-around), 19% for 2100 (83 traders; https://manifold.markets/RemNi/will-there-be-a-dyson-sphere-around-51d476bf5275) and 22.5% for 2110 (27 traders; https://manifold.markets/RemNi/will-there-be-a-dyson-sphere-around-d3e1ad8967f8). Their median therefore lies after 2110 but cannot be read from them. Their 1% threshold matches ours, but they count a structure capable of harnessing 1% rather than measured capture, and they require it to be distributed at least in a ring around the Sun. The estimate assumes self-replicating industry (placed 2075-2100) is needed and that scaling it across the inner Solar System takes decades to centuries more."
---

A Dyson swarm is a vast cloud of solar collectors orbiting the Sun, capturing a meaningful share of its light for a civilisation's use. Freeman Dyson suggested in 1960 that any long-lived technological society would eventually do this, and that astronomers could find such societies by the infrared glow of their waste heat. Capturing even one percent of the Sun's output would give humanity energy on a scale far beyond anything available on Earth.

The parts work only in miniature. Thin-film solar cells have powered a solar sail in deep space, and a Caltech prototype has beamed a trickle of power from orbit. What does not exist is the industry: a swarm would need collectors made in space from asteroid or planetary material, almost certainly by self-replicating factories, at a scale no one has yet attempted. Astronomers searching for other civilisations' swarms have found a handful of unexplained candidate stars but nothing confirmed. For now the Dyson swarm is a well-defined goal rather than a project.
