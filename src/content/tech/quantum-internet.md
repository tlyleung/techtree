---
name: Quantum Internet
kind: future
definition: "Entanglement is distributed between quantum memories more than 100 km apart through a chain of quantum repeaters (at least one intermediate memory node performing entanglement swapping), at a rate higher than any repeaterless scheme could achieve over the same fibre loss (exceeding the PLOB bound)."
requires: [lasers, telecommunications]
icon: {prompt: "Glowing threads of light linking small crystal nodes across a dark map of cities, each node pulsing in step with its distant partner"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "The essential pieces have each been shown separately: a memory beating the direct-transmission limit in the lab (2020), entanglement swapping through an intermediate node in a three-node lab network (2021), a trapped-ion repeater node swapping entanglement across 50 km of spooled fibre between photons rather than memories (2023), and memory-memory entanglement over deployed metropolitan fibre (2024) and 10 km of spooled fibre with storage outlasting link set-up (2026). They haven't yet been combined into a repeater chain over long distances, so by the rule that parts count only once integrated, the system is scored 4 rather than 5."
trl_history: []
milestones:
  - date: 1998-03-20
    text: "Briegel, Dür, Cirac and Zoller propose the quantum repeater, which uses entanglement purification and swapping between intermediate nodes to overcome the exponential loss of photons in fibre."
    status: done
    sources: ["https://arxiv.org/abs/quant-ph/9803056"]
  - date: 2020-03-23
    text: "A Harvard team uses a single silicon-vacancy spin memory in diamond to perform quantum communication at a rate surpassing the ideal direct-transmission limit, a key repeater component, in a lab proof of principle."
    status: done
    sources: ["https://www.nature.com/articles/s41586-020-2103-5"]
  - date: 2021-04-16
    text: "QuTech in Delft reports the first three-node entanglement-based quantum network of solid-state qubits, including entanglement swapping through an intermediate node, in the lab."
    status: done
    sources: ["https://doi.org/10.1126/science.abg1919", "https://arxiv.org/abs/2102.04471"]
  - date: 2023-05-22
    text: "Innsbruck researchers demonstrate a trapped-ion quantum repeater node that entangles itself with photons over two 25 km fibre spools and swaps the entanglement to span 50 km; the endpoints are photons, not memories."
    status: done
    sources: ["https://doi.org/10.1103/PhysRevLett.130.213601"]
  - date: 2024-05-15
    text: "Two Nature papers show memory-memory entanglement over deployed metropolitan fibre: Harvard and AWS entangle two nuclear-spin memories through a 35 km fibre loop in the Boston area, and USTC entangles three atomic-ensemble memory nodes across a network in Hefei."
    status: done
    sources: ["https://www.nature.com/articles/s41586-024-07252-z", "https://www.nature.com/articles/s41586-024-07308-0"]
  - date: 2026-02-02
    text: "Jian-Wei Pan's group at USTC reports in Nature trapped-ion memories whose entanglement across 10 km of spooled fibre survives longer than it takes to establish, a repeater building block, used for device-independent key distribution."
    status: done
    sources: ["https://doi.org/10.1038/s41586-026-10177-4", "https://arxiv.org/abs/2602.08472"]
  - text: "Two memory-based links are joined by entanglement swapping at a middle node over deployed fibre, spanning more than 50 km end to end."
    status: pending
  - text: "Entanglement is distributed between quantum memories more than 100 km apart through a chain of quantum repeaters, at a rate higher than any repeaterless scheme could achieve over the same fibre loss."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2029
    median: 2033
    high: 2040
    definition_notes: "No Metaculus or Manifold question on a repeater chain was found (Metaculus's API needs a login). Memory links now span metropolitan distances (including Delft-The Hague over 25 km of deployed fibre, Science Advances 2024) and swapping works in the lab and across 50 km of spooled fibre, so the remaining step is integration and higher rates; groups in China, the US and the Netherlands are all working toward it, but beating the repeaterless bound at more than 100 km needs memories and photon interfaces well beyond today's efficiency."
---

A quantum internet would link quantum devices by sharing entanglement rather than sending ordinary bits. That would allow communication whose security rests on physics, networks of quantum sensors and clocks, and eventually joining quantum computers together. The obstacle is loss: single photons fade in fibre, and quantum states can't be copied and amplified like classical signals. The proposed answer, the quantum repeater, divides a long link into short segments, stores entanglement in memories at intermediate nodes and stitches the segments together. Each ingredient now works on its own. A memory has beaten the direct-transmission limit in the lab, a three-node network in Delft has swapped entanglement through a middle node, an ion-trap repeater node in Innsbruck has bridged 50 km of fibre, and memories have been entangled across city fibre in Boston and Hefei. In 2026 a Chinese team kept entanglement alive over 10 km for longer than it took to create. What remains is to chain these pieces into a repeater that outperforms plain fibre over 100 km or more.
