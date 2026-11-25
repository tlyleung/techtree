---
name: Self-Replication
kind: future
definition: "An automated factory builds a working copy of itself, including at least 90% of its machinery by mass (robots, motors and control electronics included), from raw or simply processed bulk materials with only minor human help, and the copy goes on to make another."
requires: [humanoid-robots, swarm-robotics]
icon: {prompt: "A compact robotic factory on a grey plain assembling a twin of itself beside it, sparks flying, with a third copy taking shape in the distance"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "Self-reproduction has been shown in the lab only in partial form: Cornell's modular robots copied themselves from supplied cubes (2005), and a RepRap 3D printer printed the plastic parts of a working child machine (2008), which people assembled with bought-in motors, electronics and metal rods. Designs for closing the loop on materials go back to NASA's 1980 lunar-factory study, but no machine yet makes its own motors and electronics from bulk feedstock, so the score is 3 rather than 4."
trl_history: []
milestones:
  - date: 1966-01-01
    text: "John von Neumann's Theory of Self-Reproducing Automata, completed by Arthur Burks, is published, setting out the logic of a machine that can build a copy of itself."
    status: done
    sources: ["https://www.computerhistory.org/collections/catalog/102722604"]
  - date: 1982-11-01
    text: "NASA publishes Advanced Automation for Space Missions (CP-2255), the report of its 1980 summer study, which includes a design for a self-replicating lunar factory."
    status: done
    sources: ["https://ntrs.nasa.gov/citations/19830007077"]
  - date: 2005-05-12
    text: "Zykov, Lipson and colleagues at Cornell show modular robots made of cubes that build copies of themselves from a supply of cubes."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/15889080/"]
  - date: 2008-05-29
    text: "A RepRap 3D printer at the University of Bath prints the plastic parts of a child machine, which people assemble with bought-in motors, electronics and metal rods; the child works."
    status: done
    sources: ["https://reprap.org/wiki/About", "https://www.sciencedaily.com/releases/2008/06/080605211522.htm"]
  - text: "A machine makes a working copy of itself that includes its own motors and electronics, accounting for at least half its mass, from bulk feedstock."
    status: pending
  - text: "An automated factory builds a working copy of itself, including at least 90% of its machinery by mass (robots, motors and control electronics included), from raw or simply processed bulk materials with only minor human help, and the copy goes on to make another."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2060
    median: 2085
    high: 2130
    definition_notes: "No forecasting platform or survey asks about a self-replicating factory. Nearby Manifold markets, retrieved 2026-11-26, concern nanoscale assemblers or space probes rather than a factory on Earth. The estimate assumes general-purpose robots arrive in the late 2020s to 2040s, but making chips, motors and precision parts from bulk material is spread across hundreds of specialised facilities today, and squeezing that into one automated loop is likely to take decades more. It is earlier than this tree's draft von Neumann probes estimate (median 2150), which assumes an Earth-based self-copying factory comes first."
---

A self-replicating factory is a set of machines that can build a complete, working copy of itself from raw materials, with the copy able to do the same. John von Neumann worked out the logic (published in 1966), and NASA's 1980 study sketched a lunar factory that would grow itself from local rock. The payoff would be enormous: industrial capacity that multiplies like a living population, cheap infrastructure anywhere, and a path to building in space without lifting everything from Earth.

Small steps have been taken. Cornell's modular robots copied themselves from prepared blocks in 2005, and in 2008 the open-source RepRap printer made the plastic parts of a working child machine, which people then assembled with bought-in motors and electronics. But the hard part remains: motors, chips and precision parts still come from global supply chains involving thousands of specialised machines and people. Closing that loop in one automated system is the real test, and nobody is close yet.
