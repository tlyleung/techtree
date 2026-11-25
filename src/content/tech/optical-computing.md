---
name: Optical Computing
kind: future
definition: "A programmable, general-purpose processor whose logic operations (not only its data links or matrix arithmetic) are carried out mainly with light runs a standard general-purpose benchmark suite either faster than the best electronic processor of its day, or with better performance per watt while at least a tenth as fast, with the result independently confirmed."
requires: [zettascale-computing, lasers]
icon: {prompt: "Beams of coloured laser light crossing and splitting through a lattice of tiny glass prisms on a dark chip, forming a glowing logic circuit"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "Optical logic works only as lab proof of concept: a crude Bell Labs processor in 1990, and a cascadable all-optical NOR gate (enough for any logic) at room temperature in 2024. Photonic chips have moved from a 2017 neural-network demonstration to a 2025 processor that runs ResNet and BERT at near-electronic precision, but these accelerate only linear algebra and depend on electronics for control and nonlinear steps. With no general-purpose optical processor of any size, the score is 3."
trl_history: []
milestones:
  - date: 1990-02-01
    text: "In late January or early February 1990, AT&T Bell Labs and Alan Huang unveil an experimental digital optical processor built from lasers, lenses and optical switches, described as the first computing machine of its kind."
    status: done
    sources: ["https://time.com/archive/6714122/technology-harnessing-the-speed-of-light/"]
  - date: 2017-06-12
    text: "Shen and colleagues at MIT run a simple neural network (vowel recognition) on a programmable silicon nanophotonic circuit."
    status: done
    sources: ["https://www.nature.com/articles/nphoton.2017.93"]
  - date: 2021-01-06
    text: "An integrated photonic tensor core, fed by an on-chip optical frequency comb, performs parallel convolutions at trillions of multiply-accumulate operations per second."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/33408373/"]
  - date: 2024-06-25
    text: "Skoltech researchers demonstrate cascadable all-optical NOT and universal NOR gates at room temperature, switching in about a picosecond."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/38918407/"]
  - date: 2025-04-09
    text: "Lightmatter reports a photonic processor that runs full AI models, including ResNet and BERT, at near-electronic precision, alongside a large-scale photonic accelerator from Lightelligence in the same issue of Nature."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/40205212/", "https://pubmed.ncbi.nlm.nih.gov/40205213/"]
  - text: "An optical processor runs arbitrary stored programs on a complete instruction set with its logic done in light."
    status: pending
  - text: "A programmable, general-purpose processor whose logic operations (not only its data links or matrix arithmetic) are carried out mainly with light runs a standard general-purpose benchmark suite either faster than the best electronic processor of its day, or with better performance per watt while at least a tenth as fast, with the result independently confirmed."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2040
    median: 2060
    high: 2090
    definition_notes: "No public forecast covers general-purpose optical computing; Manifold's nearest market (a 'novel computing medium' in consumer electronics by 2030, 41%, 25 traders, retrieved 2026-11-26, https://manifold.markets/LucasThelen/will-a-novel-computing-medium-enter) counts photonic accelerators and other media, so it is much looser. The estimate reflects that only individual optical gates exist after decades of work, that photonics is winning first in interconnects and linear-algebra accelerators, and that optical logic may never beat electronics for general computing, which the wide high end allows for."
---

An optical computer would do its logic with light instead of electrons. Photons travel without resistive heating and can cross without interfering, so light could in principle compute faster, in more parallel streams and with less energy than transistors. Ever since Bell Labs showed a crude optical processor in 1990, the idea has promised a way past the limits of silicon.

The reality is narrower. Light already carries long-distance data, and photonic chips now accelerate the matrix arithmetic at the heart of AI, running real models at near-electronic precision in 2025. But those chips still rely on electronics for control and every nonlinear step. The hard part is optical logic: switches in which one beam of light reliably controls another, cascaded by the millions. Labs have built single all-optical gates, including a room-temperature universal gate in 2024, but nothing close to a general-purpose processor. This page tracks that full step, which may take decades or prove a niche.
