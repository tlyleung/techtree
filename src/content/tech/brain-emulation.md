---
name: Brain Emulation
kind: future
definition: "The whole brain of an individual mammal that has learned a task is scanned and emulated in a computer, and in a peer-reviewed study the emulation, driving a real or simulated body, shows that animal's learned behaviour, which untrained animals lack."
requires: [zettascale-computing]
icon: {prompt: "A translucent mouse brain made of glowing blue wiring floating above a circuit board, a small mouse silhouette mirrored in light beside it"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "The core idea works only in an insect: a model of the whole fruit-fly central brain built from its connectome (2024) predicted neurons involved in feeding and grooming, which experiments in real flies confirmed. For mammals, only a cubic millimetre of mouse cortex has been mapped at synapse level with its activity (2025), a small fraction of a mouse brain, and no simulation has reproduced an individual animal's learned behaviour. The worm wiring diagram has existed since 1986 without a widely accepted worm emulation. Proof of concept on a toy problem, TRL 3."
trl_history: []
milestones:
  - date: 1986-11-12
    text: "White, Southgate, Thomson and Brenner publish the wiring diagram of the nervous system of the worm C. elegans, reconstructed from electron micrographs."
    status: done
    sources: ["https://doi.org/10.1098/rstb.1986.0056"]
  - date: 2024-10-02
    text: "The FlyWire consortium publishes in Nature the wiring diagram of a whole adult fruit-fly brain: about 139,000 neurons and 50 million chemical synapses."
    status: done
    sources: ["https://www.nature.com/articles/s41586-024-07558-y"]
  - date: 2024-10-02
    text: "Shiu and colleagues publish in Nature a computational model of the entire fruit-fly central brain (more than 125,000 neurons), built from its connectome, that predicts which neurons take part in feeding and grooming circuits, predictions the team confirms in living flies."
    status: done
    sources: ["https://www.nature.com/articles/s41586-024-07763-9"]
  - date: 2025-04-09
    text: "The MICrONS Consortium publishes in Nature a synapse-level map of about a cubic millimetre of mouse visual cortex, combined with recordings of the same neurons' activity."
    status: done
    sources: ["https://www.nature.com/articles/s41586-025-08790-w"]
  - date: 2024-05-10
    text: "Shapson-Coe and colleagues publish in Science a nanoscale reconstruction of a cubic millimetre of human temporal cortex, with about 57,000 cells and 150 million synapses."
    status: done
    sources: ["https://doi.org/10.1126/science.adk4858"]
  - text: "A simulation of the complete C. elegans nervous system, built from measured parameters, reproduces the living worm's behaviours well enough that experts accept it as an emulation."
    status: pending
  - text: "A peer-reviewed simulation built from a complete adult fruit-fly connectome drives a simulated body through several natural behaviours. (Eon Systems publicised an unreviewed version in March 2026, reported on 16 March; at least one expert, Steve Furber, says it does not operate as a fly's brain does.)"
    status: pending
    sources: ["https://www.theregister.com/2026/03/16/digital_fruit_fly_brain_model/"]
  - text: "A synapse-resolution wiring diagram of an entire mouse brain (about 70 million neurons) is published."
    status: pending
  - text: "The full synapse-level wiring diagram of an entire adult human brain is imaged and reconstructed."
    status: pending
  - text: "The whole brain of an individual mammal that has learned a task is scanned and emulated in a computer, and in a peer-reviewed study the emulation, driving a real or simulated body, shows that animal's learned behaviour, which untrained animals lack."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2042
    median: 2056
    high: 2075
    definition_notes: "No public forecast targets a mammal. The Manifold market below counts any trainable animal, however simple, and puts a median near 2046, which is a lower bound for a mammal; a human emulation would come later still. A whole mouse connectome alone is widely expected to take a decade or more, and emulation also needs the cell and synapse properties a wiring diagram does not record, so the estimate sits between the two."
  - source: manifold
    url: "https://manifold.markets/OlegEterevsky/when-will-brain-upload-be-demonstra"
    retrieved: 2026-11-26
    low: 2037
    median: 2046
    definition_notes: "Multiple-choice market with cumulative 'before year X' answers (51 traders): before 2034 15%, 2038 30%, 2042 38%, 2046 46%, 2050 74%. The 25th and 50th percentiles are interpolated between answers; no answer goes past 2050, so the 75th percentile can't be read. The answers trade independently and are not all consistent (before 2029 is priced above before 2030). It counts any animal that can be trained, including worms and flies, so it is a weaker test than this page's."
---

Brain emulation means copying a brain's structure in enough detail, down to every neuron and synapse, that a computer simulation of it behaves like the original. Done for a mammal, it would show that a mind can be read out of tissue and run on a machine, a first step toward studying brains without limits and, perhaps one day, toward human mind uploading.

The field moved from theory to data in the past decade. Scientists have had the wiring diagram of a tiny worm since 1986, and in 2024 they completed the whole brain of a fruit fly, about 139,000 neurons; a model of its central brain correctly predicted neurons behind feeding and grooming. A mammal is a far bigger step. The largest mouse map so far covers about a cubic millimetre of cortex, a small fraction of the brain, and a wiring diagram alone leaves out much of what a simulation needs.
