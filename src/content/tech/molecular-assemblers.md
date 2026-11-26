---
name: Molecular Assemblers
kind: future
definition: "A synthetic (non-biological) programmable machine builds an object at least 1 mm across, or a working copy of its own key parts, by placing individual atoms or molecules with atomic precision under positional control, not by self-assembly or natural cellular machinery."
requires: [swarm-robotics]
icon: {prompt: "A tiny robotic arm of glowing blue atoms placing a single bright atom onto a growing diamond lattice, seen as if under a vast microscope"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "The core ideas work only on toy problems, and separately. Probe microscopes have placed single atoms since 1990, purely mechanical placement of silicon atoms was shown in 2003, a single placed atom worked as a transistor in 2012, and an automated tip wrote 8,000 bits atom by atom in 2016, but only on surfaces and usually at cryogenic temperatures. A programmable molecular machine directed a chemical synthesis in 2017, yet nothing yet builds three-dimensional structures atom by atom, let alone a millimetre-scale object. Scored 3 rather than 4 because these pieces have never been combined in one system."
trl_history: []
milestones:
  - date: 1981-09-01
    text: "K. Eric Drexler argues in PNAS that designed protein machinery could position reactive groups to atomic precision, opening a path to building devices to complex atomic specifications."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/16593078/"]
  - date: 1990-04-05
    text: "Eigler and Schweizer at IBM use a scanning tunnelling microscope at 4 K to position individual xenon atoms on a nickel surface, with atomic precision, building simple structures of their own design atom by atom."
    status: done
    sources: ["https://www.nature.com/articles/344524a0"]
  - date: 2003-05-02
    text: "Oyabu and colleagues remove and redeposit selected silicon atoms on a silicon surface by purely mechanical force from an atomic force microscope tip, with no voltage applied."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/12786084/"]
  - date: 2012-02-19
    text: "Fuechsle and colleagues in Australia place a single phosphorus atom in silicon with a scanning tunnelling microscope, to within one lattice site, and make it work as a transistor at liquid-helium temperatures."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/22343383/"]
  - date: 2016-07-18
    text: "A Delft team builds a rewritable 1-kilobyte memory by moving chlorine vacancies one at a time, with the tip reading and writing automatically; the structures are stable up to 77 K."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/27428273/"]
  - date: 2017-09-20
    text: "Leigh's group at Manchester reports a molecular robot that can be programmed to move a substrate between sites and so make any one of four stereoisomers of a product."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/28933436/"]
  - text: "Food assembled molecule by molecule from simple feedstocks by nanomachines is sold commercially."
    status: pending
  - text: "A synthetic (non-biological) programmable machine builds an object at least 1 mm across, or a working copy of its own key parts, by placing individual atoms or molecules with atomic precision under positional control, not by self-assembly or natural cellular machinery."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2040
    median: 2060
    high: 2100
    definition_notes: "No aggregate gives a date distribution for this test. Small Manifold markets are more optimistic: a general Drexlerian assembler before 2035 at 35% (14 traders), a complex nanoscale self-replicating assembler before 2040 at 53% (36 traders) and complex atomically precise manufacturing before 2040 at 42% (13 traders), all retrieved 2026-11-26 (https://manifold.markets/eccentricity/will-a-general-molecular-assembler, https://manifold.markets/MatthewBarnett/will-a-complex-nanoscale-selfreplic, https://manifold.markets/MatthewBarnett/will-complex-atomically-precise-man-42ff346c2493). The estimate is later because no system yet builds in three dimensions atom by atom, feasibility itself is disputed (the Drexler-Smalley debate), and the wide high end allows that it may need far more advanced AI or never happen in this form."
  - source: kurzweil
    citation: "The Singularity Is Near (2005), as summarised in Kurzweil's own Q&A on the book's website: nanotechnology-based manufacturing 'in the 2020s'"
    url: "https://singularity.com/qanda.html"
    retrieved: 2026-11-26
    median: 2025
    definition_notes: "Kurzweil predicted table-top devices that rearrange matter at the molecular level to make almost anything, during the 2020s; recorded as 2025, the middle of the decade. It has not happened."
---

A molecular assembler is a machine that builds things the way a printer lays down ink, except that each dot is a single atom or molecule placed exactly where the design says. Eric Drexler argued in 1981, and at length in Engines of Creation (1986), that such machines could eventually make almost any stable structure, from flawless diamond parts to computers far denser than today's, out of cheap raw materials. If it worked, manufacturing would become mostly a matter of software and feedstock.

Parts of the idea are real. Physicists have moved individual atoms with microscope tips since 1990, and chemists now build small molecular machines that can be programmed to steer a reaction. But all of this happens on surfaces, usually at cryogenic temperatures, one atom or molecule at a time. Nobody has shown how to build three-dimensional objects this way at useful speed, and some chemists doubt it can be done at all. It remains one of the boldest and most contested goals on the tree.
