---
name: Mind Uploading
kind: future
definition: "A scan of a specific human brain is run as a simulation that reproduces that person's memories and behaviour well enough to pass tests set by people who knew them."
requires: [brain-emulation, neural-lace]
icon: {prompt: "A translucent human head dissolving into streams of glowing neurons that flow into a lattice of light inside a dark server hall"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "Forty years after the worm's wiring diagram was mapped (1986), models built on it reproduce only specific basic behaviours, according to the 2025 State of Brain Emulation Report. Scanning has reached whole small brains: the complete wiring diagram of an adult fruit fly (2024) and a cubic millimetre of mouse visual cortex matched to recorded activity (2025), but only a cubic millimetre of human cortex (2024). A simulation built from the fly wiring diagram predicted which neurons drive feeding and grooming (2024), yet no emulation of any animal has been shown to reproduce that individual's memories. The concept is clearly specified but its core effect is undemonstrated even on a toy brain, so the score is 2."
trl_history: []
milestones:
  - date: 1986-11-12
    text: "White, Brenner and colleagues publish the full wiring diagram of the 302-neuron nervous system of the worm C. elegans, reconstructed from electron micrographs."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/22462104/"]
  - date: 2024-05-10
    text: "Harvard and Google researchers reconstruct a cubic millimetre of human temporal cortex at nanoscale resolution: about 57,000 cells and 150 million synapses in 1.4 petabytes of data."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/38723085/"]
  - date: 2024-10-02
    text: "The FlyWire consortium publishes the wiring diagram of a whole adult fruit-fly brain, with 139,255 neurons and about 50 million synapses."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/39358518/"]
  - date: 2024-10-02
    text: "Shiu and colleagues build a simulation of the entire fruit-fly brain from that wiring diagram and show it predicts neurons involved in feeding and grooming, confirmed in live flies."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/39358519/"]
  - date: 2025-04-09
    text: "The MICrONS consortium releases a cubic millimetre of mouse visual cortex with more than 200,000 cells and 0.5 billion synapses mapped by electron microscopy, matched to recorded activity of about 75,000 neurons in the same awake mouse."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/40205214/"]
  - date: 2025-10-17
    text: "The State of Brain Emulation Report 2025 reassesses the field since 2008: worm models reproduce basic behaviours and whole fly-brain models predict circuit functions, but no recording method yet captures more than 90% of an organism's neurons at single-spike resolution."
    status: done
    sources: ["https://arxiv.org/abs/2510.15745"]
  - text: "The wiring of a whole mouse brain is mapped at synaptic resolution."
    status: pending
  - text: "An emulation built from a scan of one animal's brain reproduces a memory that the animal learned while alive."
    status: pending
  - text: "A scan of a specific human brain is run as a simulation that reproduces that person's memories and behaviour well enough to pass tests set by people who knew them."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2065
    median: 2085
    high: 2150
    definition_notes: "No public forecast checked for this page was usable as a date range. The estimate follows this tree's prerequisites: brain emulation (median 2056) and neural lace (median 2060) come first, and copying one particular person adds the hard steps of scanning an individual human brain whole, at synaptic and molecular detail, and showing the result keeps that person's memories. Progress since the 1986 worm connectome has been slow at the emulation step, so the estimate allows decades after generic brain emulation, and the wide high end allows that it may need far more advanced scanning or never work as a single scan."
  - source: kurzweil
    citation: "The Singularity Is Near (2005), ch. 4, 'Uploading the Human Brain'"
    median: 2039
    definition_notes: "Kurzweil calls 'the end of the 2030s' a conservative projection for successful uploading, confirmed by a 'Ray Kurzweil' or 'Jane Smith' Turing test in which a judge cannot tell the upload from the original person. The year 2039 is our reading of 'end of the 2030s'."
---

Mind uploading would copy a particular person's mind into a computer by scanning their brain in enough detail and running the result as a simulation that thinks, remembers and behaves as they did. It would be one of the most consequential technologies imaginable: a route around biological death, minds that could run faster or be backed up, and a direct test of what memory and identity physically are.

The scanning half has moved quickly. Researchers have mapped every connection in a fruit fly's brain and in a cubic millimetre of mouse cortex, and a simulation built from the fly map already predicts which neurons drive simple behaviours. A human brain, though, has roughly 600,000 times as many neurons as a fly's, and the wiring diagram alone may not capture everything memory depends on, such as synapse strengths and molecular states. No emulation of any animal has yet been shown to remember what the animal learned, so the human version remains a long-range goal.
