---
name: Synthetic Telepathy
kind: future
definition: "Two people exchange arbitrary, unscripted sentences in both directions directly between implanted or wearable neural interfaces, with no speech, typing, screen or other movement, faster than they could by typing, with the received words perceived directly through neural stimulation."
requires: [neural-lace]
icon: {prompt: "Two human silhouettes facing each other, a thin thread of glowing light passing between their foreheads"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "The reading half works well for attempted speech: implanted neuroprostheses decoded it at 62 words per minute (2023) and at 97.5% accuracy in daily conversation (2024), and imagined sentences were decoded in real time from motor cortex in 2025. The writing half does not: brain-to-brain links have passed information one bit at a time (2014, BrainNet in 2019), and no system has delivered language into a brain except as slow binary codes. Until both halves work together at the level of language, the whole technology is at proof-of-concept stage."
trl_history: []
milestones:
  - date: 2014-08-19
    text: "Grau and colleagues send words encoded as binary streams between people far apart, read with EEG and delivered as light flashes by transcranial magnetic stimulation, the first human brain-to-brain communication."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/25137064/"]
  - date: 2019-04-16
    text: "BrainNet links three people's brains with EEG and magnetic stimulation so that two senders can tell a receiver, one bit at a time, whether to rotate a Tetris-like block, with 81% group accuracy."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/30992474/"]
  - date: 2023-08-23
    text: "Willett and colleagues report an implanted speech neuroprosthesis that decodes a man with ALS's attempted speech at 62 words per minute, with a 23.8% word error rate on a 125,000-word vocabulary."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/37612500/"]
  - date: 2024-08-15
    text: "Card and colleagues report a speech neuroprosthesis that reached 97.5% accuracy over 8.4 months and let a man with ALS converse at about 32 words per minute for over 248 hours."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/39141853/"]
  - date: 2025-08-14
    text: "Kunz and colleagues show that inner speech is represented in the motor cortex of four participants and that imagined sentences can be decoded in real time, without any attempt to speak."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/40816265/"]
  - text: "A brain-to-brain link transmits whole words, rather than single bits, from one person's decoded neural activity into another's perception through neural stimulation."
    status: pending
  - text: "Two people exchange arbitrary, unscripted sentences in both directions directly between neural interfaces, without speech, typing, screen or movement, faster than typing, with received words perceived through neural stimulation."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2045
    median: 2058
    high: 2080
    definition_notes: "No public forecast with a date range matches this test. Decoding speech from the brain already approaches conversational use, so the bottleneck is input: the best cortical stimulation so far conveys traced letter shapes at up to 86 forms a minute (Beauchamp et al., Cell 2020), below typing speed and in a handful of people. The estimate allows two to three decades for high-bandwidth language input to the brain, followed by a two-way demonstration. Manifold's 'Will Neuralink successfully enable telepathy by 2030?' (about 69% from 65 traders on 2026-11-26) is not used: it resolves on two Neuralink patients sending any kind of signal or information to each other, a much weaker bar, and it gives a probability, not a date range. Metaculus question 23937 (https://www.metaculus.com/questions/23937/) is stricter, but its values were not available when this page was drafted."
---

Synthetic telepathy means two people sharing thoughts as words, directly from one brain to another, with no voice or keyboard in between. It would turn the brain-computer interface from a medical aid into a new way of talking, and could give back full conversation to people who have lost speech.

Half of it is arriving quickly. Implanted speech neuroprostheses now turn the attempted speech of people with ALS into text at conversational rates and with high accuracy, and imagined sentences can now be decoded too. The other half, putting language into a brain, is far behind. Experiments since 2014 have linked brains to brains, but only by passing single bits as flashes of light from magnetic stimulation, and the best stimulation of the visual cortex lets blind participants recognise traced letter shapes at up to 86 a minute. A real telepathic conversation needs both halves at the level of whole sentences, in both directions, faster than typing. That is likely to take decades rather than years, but every part of the problem is now under active study.
