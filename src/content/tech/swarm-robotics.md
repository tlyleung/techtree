---
name: Swarm Robotics
kind: future
definition: "At least 10,000 physical robots, each deciding its own actions from onboard sensing and local communication with no central controller, jointly complete a real-world physical task outside the lab, such as building a structure, searching an area or moving material. Pre-planned choreography, such as drone light shows, doesn't count."
requires: [medical-microbots]
icon: {prompt: "Thousands of small identical robots flowing like a flock of starlings over a construction site, together lifting a half-built stone arch"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "Decentralised swarms have worked in the lab at scale: 1,024 Kilobots self-assembled into shapes by local rules alone (2014), and termite-inspired robots built specified structures from local rules (2014, with three robots). Outside the lab, only small swarms have shown it, such as ten palm-sized drones flying autonomously through a bamboo forest (2022). The largest robot formations, such as the 33,615-drone display of 2026, are choreographed rather than self-organising, so the combination of scale, autonomy and a real task has not been shown."
trl_history: []
milestones:
  - date: 1987-07-27
    text: "Craig Reynolds presents 'boids' at SIGGRAPH '87, showing that lifelike flocking emerges from three local rules (separation, alignment and cohesion) with no leader."
    status: done
    sources: ["http://www.red3d.com/cwr/boids/", "https://www.cs.princeton.edu/courses/archive/spr01/cs598b/papers/reynolds87.pdf"]
  - date: 2014-02-14
    text: "Werfel, Petersen and Nagpal report in Science TERMES, termite-inspired climbing robots that build a user-specified structure using only local sensing and coordinating through the structure itself; the physical demonstration used three robots."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/24531967/"]
  - date: 2014-08-15
    text: "Rubenstein, Cornejo and Nagpal report in Science that a swarm of 1,024 Kilobots self-assembled into complex two-dimensional shapes through local interactions alone."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/25124435/"]
  - date: 2022-05-04
    text: "Zhou, Gao and colleagues in Hangzhou, China, report in Science Robotics a swarm of ten palm-sized drones flying through a dense bamboo forest with onboard sensing and planning, without external infrastructure."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/35507682/", "https://www.aaas.org/news/flight-planning-system-lets-tiny-drones-swarm-dense-forests-and-busy-airspace"]
  - date: 2026-05-20
    text: "Chinese companies fly 33,615 drones at once in Dujiangyan, Sichuan, setting the Guinness record for 'most remote controlled multirotors/drones airborne simultaneously'; the record page describes 'distributed control', but displays like this follow pre-planned choreography."
    status: done
    sources: ["https://www.guinnessworldrecords.com/world-records/373319-most-unmanned-aerial-vehicles-uavs-airborne-simultaneously-5-kg-or-less"]
  - text: "A swarm of at least 1,000 robots with no central controller completes a real-world task outside the lab."
    status: pending
  - text: "At least 10,000 physical robots, each deciding its own actions from onboard sensing and local communication with no central controller, jointly complete a real-world physical task outside the lab, such as building a structure, searching an area or moving material."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2035
    median: 2045
    high: 2060
    definition_notes: "No public forecast or survey covers this. Searches of Manifold found no relevant market. The estimate weighs fast-falling drone costs and active military interest in autonomous swarms (which could bring an earlier but poorly documented demonstration) against the absence of any decentralised swarm above about a thousand robots, even in the lab, twelve years after the Kilobots."
---

Swarm robotics borrows a trick from ants, bees and flocking birds: instead of one complex machine or a central computer directing every move, many simple robots follow local rules and react to their neighbours, and useful group behaviour emerges. A swarm can keep working when individual robots fail, and could be cheap enough to scale to thousands, which suits jobs such as searching a disaster zone, monitoring crops or oceans, or building structures where people can't easily go.

The principle is well established. Computer flocks date from the 1980s, and in 2014 a thousand small Kilobots arranged themselves into shapes with no one in charge. In the field, small swarms of autonomous drones have flown through forests. Today's huge drone light shows, with tens of thousands of aircraft, prove the hardware can be built in volume, but they follow a script. Getting ten thousand robots to organise themselves on a real job is the remaining leap.
