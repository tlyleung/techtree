---
name: Medical Microbots
kind: future
definition: "Untethered micro-robots smaller than 1 mm are steered through a living patient's blood vessels to deliver therapy in a registered clinical trial."
requires: [robot-surgeons]
icon: {prompt: "A swarm of tiny silver spheres gliding through a red-lit blood vessel toward a dark clot, guided by faint magnetic field lines"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "Untethered devices have been steered through the arteries of living animals since 2007, when a clinical MRI scanner guided a 1.5 mm bead in a pig's carotid artery. ETH Zurich's 2025 Science paper navigated drug-carrying microrobot capsules with a clinical electromagnetic system in pigs and a sheep, and an unpublished 2026 study under peer review reported faster clot-busting in pigs. All of this is animal work; no first-in-human trial of blood-borne microrobots has been reported."
trl_history: []
milestones:
  - date: 2007-03-14
    text: "Martel and colleagues at Polytechnique Montréal use a standard clinical MRI scanner to propel, track and steer a 1.5 mm ferromagnetic bead along a planned path in the carotid artery of a living pig."
    status: done
    sources: ["https://doi.org/10.1063/1.2713229"]
  - date: 2015-01-08
    text: "Gao, Wang and colleagues at UC San Diego report the first in vivo test of artificial micromotors: zinc-based motors propelled by stomach acid deliver and retain a cargo on the stomach wall of living mice, then dissolve."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/25549040/"]
  - date: 2025-11-13
    text: "Landers, Nelson and colleagues at ETH Zurich report in Science dissolvable magnetic microrobot capsules, released by catheter and steered by a clinical electromagnetic navigation system, that reach their target in more than 95% of tests and are navigated in the blood vessels of pigs and the cerebrospinal fluid of a sheep."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/41231973/", "https://www.eurekalert.org/news-releases/1105315"]
  - date: 2026-11-09
    text: "Simone Schürle's group at ETH Zurich, with Charité in Berlin, reports in an unpublished study under peer review that magnetic microbots about 8 micrometres long help a clot-busting drug clear clots six times faster in a vessel model and restore blood flow to twice the area in live pigs."
    status: done
    sources: ["https://ethz.ch/en/news-and-events/eth-news/news/2026/11/dissolving-blood-clots-with-flow-generating-microbots.html", "https://singularityhub.com/2026/11/16/tiny-magnetic-robots-help-dissolve-blood-clots-six-times-faster-than-with-drugs-alone/"]
  - text: "Artificial mechanical red blood cells (respirocytes), carrying far more oxygen than haemoglobin, function in a living mammal."
    status: pending
  - text: "Untethered micro-robots smaller than 1 mm are steered through a living patient's blood vessels to deliver therapy in a registered clinical trial."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2028
    median: 2031
    high: 2036
    definition_notes: "No Metaculus or Manifold question covers this. The ETH Zurich team, which describes its 2025 system as clinically ready and built on an approved navigation platform, says its next goal is human trials 'as quickly as possible' (no date given). Swissinfo (14 November 2025, https://www.swissinfo.ch/eng/healthcare-innovation/scientists-develop-tiny-robots-that-can-swim-through-your-blood-to-fight-strokes/90332305) describes that device as less than two millimetres wide, so a first trial of it might not even meet our sub-millimetre size test. The low end assumes a first trial within a few years of the 2025 large-animal results; the median allows for further miniaturisation and regulatory work. The high end allows for the usual slips between large-animal studies and a first registered trial, and for regulators treating a new class of implant cautiously."
  - source: kurzweil
    citation: "The Singularity Is Nearer (2024), ch. 6, as adapted in Fortune, 25 June 2024"
    url: "https://fortune.com/well/article/a-i-radically-lengthen-lifespan-ray-kurzweil/"
    retrieved: 2026-11-26
    median: 2030
    definition_notes: "Kurzweil writes that 'the 2030s will bring' medical nanorobots, his 'third bridge' to radical life extension, and that by the end of the 2030s they will largely overcome disease and ageing. His nanorobots are far more capable than our sub-millimetre test; 2030 is the start of the decade he names."
---

Medical microbots are tiny machines, from a few micrometres to under a millimetre across, that travel through the body to deliver drugs exactly where they are needed, clear blocked vessels or take samples. Most are steered from outside by magnetic fields and tracked by X-ray or MRI. They could let doctors treat a stroke clot or a tumour with a fraction of the drug dose, and with less damage than surgery.

The idea is old: futurists such as Ray Kurzweil have long pictured nanorobots patrolling the bloodstream, and his 2024 book places them in the 2030s. Real progress has come from magnetically guided capsules rather than molecular machines. In 2025 an ETH Zurich team showed drug-carrying microrobots navigating the blood vessels of pigs using a clinical navigation system, and in 2026 another ETH group reported, in a study still under peer review, faster clot-busting in pigs. No microrobot has yet been steered through a human patient's bloodstream in a trial, but the ETH researchers say that is their next goal.
