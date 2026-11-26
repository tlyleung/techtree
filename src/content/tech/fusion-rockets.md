---
name: Fusion Rockets
kind: future
definition: "A spacecraft in space is propelled by an onboard fusion engine whose fusion reactions release more energy than is supplied to drive them (gain above 1), and the engine produces sustained, measured thrust from those reactions."
requires: [energy-abundance]
icon: {prompt: "A slender spacecraft in deep space trailing a long violet-white plasma exhaust from a ring-shaped magnetic nozzle, Mars small in the distance"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "Fusion rockets exist as analysed concepts: NASA-funded studies of a fusion-driven rocket (2013) and the Direct Fusion Drive (2017) estimate thrust and mission performance, and the University of Washington team reports lab tests of separate parts of its process, but no experiment has yet produced fusion in a propulsion device, let alone measured thrust from it. Fusion with target gain above 1 has been shown only at the National Ignition Facility (2022), a building-sized laser facility unrelated to flight hardware. With the core effect undemonstrated in a lab, the score is 2."
trl_history: []
milestones:
  - date: 2013-04-04
    text: "The University of Washington reports that John Slough's NASA-funded team has tested separate parts of a fusion-driven rocket in the lab, in which magnetic fields crush metal rings onto plasma to cause fusion, and has proposed using it for a fast crewed trip to Mars."
    status: done
    sources: ["https://www.washington.edu/news/2013/04/04/rocket-powered-by-nuclear-fusion-could-send-humans-to-mars/", "https://www.nasa.gov/general/the-fusion-driven-rocket-nuclear-propulsion-through-direct-conversion-of-fusion-energy/"]
  - date: 2017-04-06
    text: "NASA's Innovative Advanced Concepts programme funds a phase II study of Princeton Satellite Systems' Direct Fusion Drive for a Pluto orbiter, after phase I modelling suggested 2.5 to 5 newtons of thrust per megawatt of fusion power."
    status: done
    sources: ["https://www.nasa.gov/general/fusion-enabled-pluto-orbiter-and-lander/"]
  - date: 2022-12-05
    text: "The National Ignition Facility produces 3.15 megajoules of fusion energy from 2.05 megajoules of laser energy delivered to the target, the first controlled fusion experiment to pass scientific breakeven."
    status: done
    sources: ["https://www.llnl.gov/article/49306/lawrence-livermore-national-laboratory-achieves-fusion-ignition"]
  - text: "A ground test measures thrust produced by fusion reactions in a propulsion device."
    status: pending
  - text: "A spacecraft in space is propelled by an onboard fusion engine whose fusion reactions release more energy than is supplied to drive them (gain above 1), and the engine produces sustained, measured thrust from those reactions."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2045
    median: 2062
    high: 2085
    definition_notes: "No public aggregate gives a date distribution for this event. The estimate assumes the first net-energy fusion power plants arrive in the 2030s to 2040s and that a compact, flight-qualified fusion engine with gain above 1 takes a further one to three decades, since no device has yet produced fusion and thrust together. The Manifold ladder below is more optimistic. This page's definition adds a gain above 1 to the original test ('propelled in space by thrust from fusion'), because a small plasma thruster with a trace of fusion and far more energy in than out would otherwise count."
  - source: manifold
    url: "https://manifold.markets/RemNi/will-we-get-fusion-drives-before-20"
    retrieved: 2026-11-26
    low: 2041
    median: 2045
    definition_notes: "The linked market is the first of a ladder of eight binary markets by one creator with the same criteria, read together (before 2040: 24%, 2041: 25%, 2042: 26%, 2043: 29%, 2044: 34%, 2045: 42%, 2046: 50%, 2047: 52%); the 25th and 50th percentiles are where the ladder crosses 25% and 50%. Each market has only 6 to 15 traders and no 75th percentile can be read. The markets ask for more than this page's test: a fusion drive with gain at least 1 running for 24 hours on a spacecraft of at least 10 tonnes at an average 1,000 newtons."
---

A fusion rocket would use the energy released by fusing light nuclei, such as isotopes of hydrogen, to drive exhaust out of a magnetic nozzle far faster than any chemical rocket can: NASA-funded modelling of the Direct Fusion Drive implies an exhaust speed of about 100 kilometres per second (a specific impulse of about 10,000 seconds). That performance would make crewed trips to Mars much shorter and let heavy robotic orbiters reach Pluto and beyond, opening the outer solar system to regular exploration.

The physics is real but the engineering is early. NASA has funded several fusion-propulsion concept studies, and teams have tested individual pieces in the lab, but no experiment has yet produced fusion inside a propulsion device or measured thrust from it. The best fusion result so far, at the National Ignition Facility in 2022, came from a laser facility the size of a large building. A fusion rocket also needs a reactor small and light enough to fly, which means it probably follows the first fusion power plants rather than preceding them.
