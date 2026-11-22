---
name: Fault-Tolerant Quantum Computer
kind: future
definition: "A quantum computer runs an error-corrected circuit of at least 100 logical qubits and at least one million logical operations, including non-Clifford (T) gates, with real-time decoding, no post-selection and a logical error rate of at most two in a million per operation, and produces a result on a useful problem, such as a chemistry or materials simulation, that a peer-reviewed paper shows is beyond the best classical methods."
requires: [computers, lasers]
icon: {prompt: "A gold-plated dilution refrigerator chandelier hanging in a dark lab, a glowing lattice of qubits at its base"}
trl:
  level: 4
  as_of: 2026-11-22
  rationale: "The parts of a fault-tolerant machine now work together in the lab: surface-code memories below threshold with real-time decoding (Willow, 2024), universal fault-tolerant logic elements on hundreds of atoms (Harvard, 2025), dozens of encoded logical qubits beating unencoded ones (Helios, 2026) and magic-state cultivation (Google, 2026). The largest encoded runs with non-Clifford gates (Helios; IBM and UChicago, 2026) still rely on error detection and post-selection, at fidelities far from what long algorithms need. No system runs a long algorithm on many error-corrected logical qubits near one error in a million, so this is a lab breadboard (TRL 4), not a representative prototype."
trl_history: []
milestones:
  - date: 1995-10-01
    text: "Peter Shor publishes the first quantum error-correcting code, showing that quantum information can in principle be protected from decoherence."
    status: done
    sources: ["https://journals.aps.org/pra/abstract/10.1103/PhysRevA.52.R2493"]
  - date: 2023-02-22
    text: "Google shows a distance-5 surface-code logical qubit slightly outperforming distance-3 ones, the first sign that making a code bigger reduces its error rate."
    status: done
    sources: ["https://www.nature.com/articles/s41586-022-05434-1"]
  - date: 2023-12-06
    text: "Harvard, MIT and QuEra run a programmable logical processor on up to 280 neutral atoms, with fault-tolerant logical entanglement and circuits on up to 48 error-detected logical qubits."
    status: done
    sources: ["https://www.nature.com/articles/s41586-023-06927-3"]
  - date: 2024-11-18
    text: "Microsoft and Atom Computing entangle 24 logical qubits (using an error-detecting code with atom-loss correction) on a 256-atom neutral-atom processor and run the Bernstein-Vazirani algorithm on up to 28 logical qubits, reported in a preprint."
    status: done
    sources: ["https://arxiv.org/abs/2411.11822"]
  - date: 2024-12-09
    text: "Google's Willow chip runs surface-code memories below the error-correction threshold: going from distance 5 to 7 cuts the logical error rate by a factor of 2.14 (to 0.143% per cycle), the 101-qubit distance-7 logical qubit outlives its best physical qubit by 2.4 times, and a separate distance-5 memory stays below threshold with real-time decoding."
    status: done
    sources: ["https://www.nature.com/articles/s41586-024-08449-y"]
  - date: 2025-11-10
    text: "Harvard-led team demonstrates the key elements of a universal fault-tolerant architecture on up to 448 atoms, including below-threshold surface codes, transversal logic and deep circuits with dozens of logical qubits."
    status: done
    sources: ["https://www.nature.com/articles/s41586-025-09848-5", "https://arxiv.org/abs/2506.20661"]
  - date: 2026-02-25
    text: "Quantinuum reports, in a preprint, computations on 48 error-corrected (and up to 94 error-detected) logical qubits on its 98-qubit Helios processor that outperform the same computations run unencoded, with post-selection."
    status: done
    sources: ["https://arxiv.org/abs/2602.22211"]
  - date: 2026-07-28
    text: "IBM and the University of Chicago run an encoded 64-qubit circuit with 314 T gates on 76 physical qubits using error-detecting spacetime codes, claiming it is beyond classical simulation; gate errors fall 10 times only after post-selection, and the fidelity lower bound is 0.349 (IBM's press release describes the run as 70 logical qubits)."
    status: done
    sources: ["https://arxiv.org/abs/2607.25941"]
  - date: 2026-10-15
    text: "Google demonstrates magic-state cultivation on Willow, producing the non-Clifford resource states needed for universal fault-tolerant computing with about 40 times fewer errors than uncultivated states, at 99.99% fidelity or better while keeping 8% of attempts."
    status: done
    sources: ["https://blog.google/innovation-and-ai/models-and-research/quantum-computing/magic-state-cultivation-quantum-computing/", "https://doi.org/10.1126/science.aee7961"]
  - text: "A quantum computer runs an error-corrected circuit of at least 100 logical qubits and at least one million logical operations, including non-Clifford (T) gates, with real-time decoding, no post-selection and a logical error rate of at most two in a million per operation, and produces a result on a useful problem, such as a chemistry or materials simulation, that a peer-reviewed paper shows is beyond the best classical methods."
    status: pending
    demonstrates: true
forecasts:
  - source: metaculus
    primary: true
    url: "https://www.metaculus.com/questions/3684/"
    retrieved: 2025-12-01
    low: 2029
    median: 2034
    high: 2045
    definition_notes: "The question asks when a quantum computer running Shor's algorithm (or similar) will factor a previously unfactored RSA number. The smallest unfactored RSA challenge number is far larger than anything run so far, so this needs a much bigger machine than our 100-logical-qubit test and should resolve later than our definition. Values are the community prediction (25th percentile, median, 75th percentile; 128 forecasters) from a Wayback Machine snapshot of 2025-12-01, because Metaculus blocks scripted access; no later snapshot exists, so current values may differ. The question resolves ambiguous if every RSA challenge number is first factored classically."
  - source: other
    name: "IBM roadmap target (Starling)"
    url: "https://newsroom.ibm.com/2025-06-10-IBM-Sets-the-Course-to-Build-Worlds-First-Large-Scale,-Fault-Tolerant-Quantum-Computer-at-New-IBM-Quantum-Data-Center"
    retrieved: 2026-11-22
    median: 2029
    definition_notes: "A company's own delivery target, not an independent forecast: IBM plans Starling, with 200 logical qubits running 100 million operations, by 2029. That exceeds our test's scale, but company roadmaps often slip."
---

## Overview

A quantum computer stores information in qubits, which are fragile: stray heat, stray fields and imperfect control flip them far more often than bits in an ordinary chip. Quantum error correction spreads one "logical" qubit across many physical qubits and measures them repeatedly to catch and undo errors as they happen. A fault-tolerant quantum computer is one where this works well enough, and at large enough scale, to run long algorithms correctly. Our test asks for at least 100 logical qubits, a million logical operations, at most two errors per million operations, no post-selection, and a useful result beyond classical reach.

## Why it matters

The best-known quantum algorithms, such as Shor's factoring algorithm and accurate simulations of molecules and materials, need far more reliable operations than noisy, uncorrected machines can run. Fault tolerance is the gate between scientific demonstrations and quantum computers that change chemistry, materials research and cryptography. For cryptography, a 2025 estimate put breaking 2048-bit RSA at under a million noisy physical qubits running for under a week, assuming physical gate error rates of 0.1%.

## Where it stands

Since 2023 the field has shown each building block in the lab. Google's surface codes now improve as they grow, the threshold behaviour theory predicted in the 1990s. Neutral-atom groups at Harvard, QuEra, Microsoft and Atom Computing have run logical circuits on tens of logical qubits. Quantinuum has shown encoded computations beating unencoded ones on 48 error-corrected logical qubits (94 with error detection only), and IBM and the University of Chicago ran an encoded circuit with hundreds of T gates; both relied on post-selection. Google has made, at small scale, the magic states that universal logic needs. The best multi-qubit results reach roughly one error in 10,000 to 100,000 per logical operation, and only with post-selection or error detection on small circuits. What is missing is one machine that does all of this at once, at scale, without post-selection, for long enough to run a useful algorithm.

## Key players

- **Google Quantum AI** (superconducting qubits; Willow processor).
- **IBM**, which in June 2025 announced Starling, a planned 200-logical-qubit machine to run 100 million operations by 2029, followed by the 2,000-logical-qubit Blue Jay.
- **Quantinuum** (trapped ions; Helios).
- **QuEra and Harvard/MIT**, and **Microsoft with Atom Computing** (neutral atoms).

## Further reading

- Google Quantum AI, [Quantum error correction below the surface code threshold](https://www.nature.com/articles/s41586-024-08449-y), *Nature* (2024).
- Bluvstein et al., [A fault-tolerant neutral-atom architecture for universal quantum computation](https://www.nature.com/articles/s41586-025-09848-5), *Nature* (2025).
- Craig Gidney, [How to factor 2048 bit RSA integers with less than a million noisy qubits](https://arxiv.org/abs/2505.15917) (2025).
- IBM, [Starling roadmap announcement](https://newsroom.ibm.com/2025-06-10-IBM-Sets-the-Course-to-Build-Worlds-First-Large-Scale,-Fault-Tolerant-Quantum-Computer-at-New-IBM-Quantum-Data-Center) (2025).
