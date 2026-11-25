---
name: Neural Lace
kind: future
definition: "A brain interface placed without opening the skull (for example through the blood vessels) both reads from and writes to the brain, letting a person exchange information with a computer at 40 bits per second or more in each direction, about the information rate of speech, in daily use for at least a year."
requires: [brain-implants, medical-microbots]
icon: {prompt: "A fine glowing silver mesh woven through the folds of a human brain, threads of light rising from it into a soft cloud above"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "Each property exists only on its own. A stent-electrode placed through a vein has let paralysed people control computers since 2020, but it only reads, with few channels; electrical stimulation has written touch sensations into the brain (2021) and implanted arrays decoded attempted speech at 62 words a minute (2023), but both needed open-skull surgery; and injectable mesh electronics recorded from mouse brains in 2015. No system combines minimally invasive placement with high-bandwidth reading and writing, even in animals, so it scores 3."
trl_history: []
milestones:
  - date: 2015-06-08
    text: "Lieber's group at Harvard injects flexible mesh electronics through a fine needle into mouse brains, where they unfold, integrate with the tissue and record neural activity."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/26053995/"]
  - date: 2020-10-28
    text: "Synchron reports the first human implants of its Stentrode, an electrode array delivered through a blood vessel, which let two people with paralysis control digital devices wirelessly."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/33115813/"]
  - date: 2021-05-21
    text: "A bidirectional interface in Pittsburgh reads motor cortex and writes touch sensations into somatosensory cortex by microstimulation, halving a tetraplegic participant's times on a robotic-arm task."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/34016775/"]
  - date: 2023-08-23
    text: "A Stanford speech interface decodes a person's attempted speech from implanted microelectrode arrays at 62 words per minute, with a 24% word error rate on a 125,000-word vocabulary."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/37612500/"]
  - text: "A regulator permits an implanted brain-computer interface to be sold to healthy people with no medical indication."
    status: pending
  - text: "A brain interface placed without opening the skull (for example through the blood vessels) both reads from and writes to the brain, letting a person exchange information with a computer at 40 bits per second or more in each direction, about the information rate of speech, in daily use for at least a year."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2045
    median: 2060
    high: 2085
    definition_notes: "No public forecast asks this question. Manifold markets on nearer events, retrieved 2026-11-26, give 63% that Neuralink is available to people without a disability in the US by 2035 (65 traders, https://manifold.markets/TonyJackson/will-neuralink-be-available-for-peo) and 42% that non-invasive brain-computer interfaces become common by 2040 (27 traders, https://manifold.markets/GabeGarboden/will-noninvasive-brain-computer-int). Those concern implants placed by surgery or wearable devices, not a minimally invasive interface that writes to the brain at speech-like rates, which needs advances in delivery (through vessels, or nanoscale devices) and in safe high-channel stimulation. The 40 bits per second threshold comes from Coupé et al., Science Advances 2019 (about 39 bits/s across 17 languages, https://pubmed.ncbi.nlm.nih.gov/32047854/)."
  - source: kurzweil
    citation: "The Singularity Is Nearer (2024), ch. 1, 'Where Are We in the Six Stages?'"
    url: "https://cdn.penguin.co.uk/dam-assets/books/9781847928290/9781847928290-sample.pdf"
    retrieved: 2026-11-26
    median: 2035
    definition_notes: "Kurzweil writes that 'a key capability in the 2030s will be to connect the upper ranges of our neocortices to the cloud'; recorded as 2035, the middle of that decade. He doesn't give a bandwidth or say how invasive the link would be, though elsewhere (the Q&A for The Singularity Is Near, https://singularity.com/qanda.html) he describes billions of nanobots in the brain's capillaries, though there for scanning the brain rather than as an interface."
---

A neural lace would be a brain–computer interface that needs no open-skull surgery: a mesh, a stent or swarms of tiny devices threaded into the brain through its blood supply, able both to read what you intend and to write information back in. The name comes from Iain M. Banks's science fiction. The hope is that thinking with a computer could become as natural as speaking, and for Ray Kurzweil it is how people will merge their minds with AI.

The pieces are arriving separately. Stents carrying electrodes have been placed through veins in patients with paralysis, implanted arrays now turn attempted speech into text at conversational speeds, and microstimulation can create sensations of touch. But today's high-bandwidth systems need surgery on the skull, the minimally invasive ones carry few channels, and writing rich information into the brain remains crude. A healthy person streaming thoughts to the cloud is still a distant goal.
