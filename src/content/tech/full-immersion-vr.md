---
name: Full-Immersion VR
kind: future
definition: "A person experiences a virtual environment through direct neural stimulation of sight, hearing and touch together, and in blinded trials cannot reliably tell it from a matching real environment."
requires: [neural-lace]
icon: {prompt: "A figure with closed eyes standing in a dark room, a vivid sunlit forest unfolding from fine threads of light around their head"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "Single senses can be evoked crudely by stimulating the nervous system: cochlear implants have given deaf people a sense of sound since the first approval in 1984, retinal implants give light perception to blind patients (approved 2013), cortical microstimulation produces touch felt on the hand (2016), and dynamic stimulation of visual cortex lets people recognise traced letters (2020), with a 96-electrode array letting a blind woman identify some letters (2021). These are low-resolution, one sense at a time, and far from realistic, and the first approved retinal implant lost its maker's support by 2020; no system has combined senses into a single virtual scene."
trl_history: []
milestones:
  - date: 1984-11-26
    text: "The US FDA approves the 3M/House cochlear implant, which stimulates the auditory nerve electrically to give deaf adults a sense of sound."
    status: done
    sources: ["https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?id=P830069"]
  - date: 2013-02-13
    text: "The US FDA approves the Argus II retinal prosthesis, which stimulates the retina to give people blinded by retinitis pigmentosa basic visual perception, under a humanitarian device exemption."
    status: done
    sources: ["https://www.accessdata.fda.gov/cdrh_docs/pdf11/H110002A.pdf"]
  - date: 2016-10-13
    text: "Flesher and colleagues show that microstimulation of the somatosensory cortex of a man with spinal cord injury evokes touch, including feelings of pressure, felt at specific places on his hand."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/27738096/"]
  - date: 2020-05-14
    text: "Beauchamp and colleagues trace shapes on the visual cortex by stimulating electrodes in sequence, letting sighted and blind participants recognise letter shapes, blind participants at up to 86 a minute."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/32413298/"]
  - date: 2021-12-01
    text: "Fernández and colleagues report that a 96-electrode array in the visual cortex of a blind woman evoked phosphenes that let her identify some letters and recognise object boundaries over six months."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/34665780/"]
  - date: 2022-02-15
    text: "IEEE Spectrum reports that Second Sight phased out the Argus II from 2019 and wound down operations in 2020, leaving more than 350 implanted people without upgrades or reliable repairs."
    status: done
    sources: ["https://spectrum.ieee.org/bionic-eye-obsolete"]
  - text: "A person perceives one virtual scene through direct neural stimulation of sight, hearing and touch at the same time."
    status: pending
  - text: "A person experiences a virtual environment through direct neural stimulation of sight, hearing and touch together, and in blinded trials cannot reliably tell it from a matching real environment."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2050
    median: 2068
    high: 2100
    definition_notes: "No public forecast with a date range matches this test. Today's best neural stimulation gives tens to hundreds of crude points of light or touch; matching real vision, hearing and touch needs input at vastly higher resolution across several brain areas, and probably a high-bandwidth interface such as a neural lace, the prerequisite here. For calibration on optimistic forecasts: in LessWrong's assessment of Ray Kurzweil's predictions for 2019, several of his least accurate predictions concerned virtual reality (https://www.lesswrong.com/posts/NcGBmDEe5qXB7dFBF/assessing-kurzweil-predictions-about-2019-the-results)."
---

Full-immersion virtual reality would feed a virtual world straight into the senses, bypassing eyes, ears and skin, so convincingly that it feels real. Unlike today's headsets, it would need no screens, and it could let people with lost senses experience the world again, as well as opening up new kinds of art, training and companionship.

The building blocks are real but primitive. Retinal and cortical implants give blind people spots of light and, in recent experiments, recognisable letters. Stimulating the touch area of the brain lets a paralysed man feel pressure on his hand, and cochlear implants have restored hearing for decades. But each works one sense at a time, at a tiny fraction of natural resolution, and through a few dozen to a few hundred electrodes. Fooling the brain completely would need interfaces of a different order, reaching millions of neurons across several senses at once. That makes this one of the more distant goals on the tree, though steady progress in neural prosthetics shows the path.
