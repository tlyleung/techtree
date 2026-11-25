---
name: Robot Surgeons
kind: future
definition: "A robot performs every operative step of a complete soft-tissue operation (for example, removing a gallbladder) on a living human patient, with no human control of the instruments; surgeons may only supervise and stop it. The case is reported in a peer-reviewed journal or a regulator's record. Robots that automate one step under a surgeon's control, such as bone milling, waterjet tissue removal or suturing, don't count."
requires: [robotics]
icon: {prompt: "Slender robotic arms working alone over an operating table under a cool surgical lamp, a surgeon watching from behind glass"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "Robots have done single soft-tissue tasks autonomously in live pigs (STAR's bowel anastomoses in 2016 and, laparoscopically, in 2022), and SRT-H performed the whole clipping-and-cutting phase of a gallbladder removal without intervention, but only on gallbladders removed from dead pigs (2025). No complete operation has been done autonomously in a living animal, and in people there has been no complete soft-tissue operation and no autonomous dissection or suturing. Robots do execute pre-planned cuts in patients, ROBODOC milling bone from 1992 and the FDA-authorised AQUABEAM resecting a planned volume of prostate tissue with a waterjet from 2017, but those are single, image-planned steps within a surgeon-led operation."
trl_history: []
milestones:
  - date: 1992-11-07
    text: "At Sutter General Hospital in Sacramento, the ROBODOC robot carves the cavity in a patient's thigh bone for a hip implant, the first robot to cut bone in a human operation; surgeons do the rest of the procedure by hand."
    status: done
    sources: ["https://web.archive.org/web/20251209235952/https://www.upi.com/Archives/1992/11/09/Robodoc-performs-first-successful-surgery-on-human/2913721285200/"]
  - date: 2016-05-04
    text: "The Smart Tissue Autonomous Robot (STAR) performs supervised autonomous intestinal anastomosis in living pigs, with more consistent suturing than expert surgeons and conventional robot-assisted surgery."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/27147588/"]
  - date: 2017-12-21
    text: "The US FDA grants a De Novo authorisation to PROCEPT BioRobotics' AQUABEAM System, which uses a motor-driven, high-velocity waterjet to resect a predetermined volume of prostate tissue according to an image-guided treatment plan."
    status: done
    sources: ["https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/denovo.cfm?id=DEN170024", "https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN170024.pdf"]
  - date: 2022-01-26
    text: "An upgraded STAR performs autonomous laparoscopic small-bowel anastomosis in pigs that survive a week, with an operator choosing among the robot's surgical plans."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/35080901/"]
  - date: 2025-07-09
    text: "Johns Hopkins' SRT-H, a language-guided learning system, performs the clipping-and-cutting phase of gallbladder removal fully autonomously on eight ex vivo pig gallbladders with 100% success."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/40632876/"]
  - text: "A robot autonomously performs a complete soft-tissue operation on a living animal."
    status: pending
  - text: "A robot autonomously performs a soft-tissue dissection or suturing step in a human patient in a trial with ethical and regulatory oversight."
    status: pending
  - text: "A robot performs every operative step of a complete soft-tissue operation (for example, removing a gallbladder) on a living human patient, with no human control of the instruments; surgeons may only supervise and stop it. The case is reported in a peer-reviewed journal or a regulator's record."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2029
    median: 2032
    high: 2038
    definition_notes: "No public forecast gives a date range for this event. The closest is Manifold's 'Will a robot complete a surgery with no human intervention before 2030?' (https://manifold.markets/JamesF/will-a-robot-complete-a-surgery-wit), at 45% on 2026-11-26 (46 traders); it allows any surgery, supervised, and isn't limited to human patients, so it is looser than this page's definition. A sister market on a robot doing over 75% of a procedure autonomously in a human patient before 2030 stood at 32% (35 traders). The stricter market (https://manifold.markets/Favilar/will-hospitals-have-surgical-robots) is closest to this page's test and implies a median well after 2030. A complete operation, not 75% of one, sets the median later still, around 2032: none has yet been done autonomously in a live animal, and a first human case needs ethics and regulatory approval."
---

A robot surgeon would carry out an entire operation by itself, cutting, dissecting and stitching while a human surgeon watches and can intervene. Today's surgical robots, such as the da Vinci, are remote-controlled instruments: a surgeon moves every tool. Autonomy could make routine operations more consistent and bring expert-level surgery to hospitals that lack specialists.

Progress has come step by step. ROBODOC milled bone automatically in hip replacements in 1992, and since 2017 the AQUABEAM system has removed planned prostate tissue with a robot-guided waterjet, but these are single pre-planned steps, far easier than dissecting and stitching soft tissue that moves and bleeds. In 2016 and 2022 the STAR robot stitched pig intestines on its own, better than human surgeons on several measures, and in 2025 Johns Hopkins' SRT-H completed the key phase of a gallbladder removal without help, though only on tissue from dead pigs. The next steps are a complete operation in a living animal, then the first supervised case in a person.
