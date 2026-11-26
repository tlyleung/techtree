---
name: AI Scientists
kind: future
definition: "An AI system chooses the hypothesis and designs the experiments behind a discovery in the natural sciences, with humans only running instruments or carrying out its protocols, and the discovery is the headline result of a paper in Nature, Science or Cell that credits the AI with both the hypothesis and the experimental design, and is independently replicated. Mathematical proofs are tracked separately, as the machine mathematics milestone below."
requires: [machine-learning]
icon: {prompt: "A robotic arm pipetting glowing samples beneath a holographic web of hypotheses, in a quiet empty laboratory at night"}
trl:
  level: 5
  as_of: 2026-11-26
  rationale: "Pieces of the loop work outside their developers' control: the robot scientist Adam generated and tested hypotheses about yeast genes on its own in 2009, an AI-discovered target and AI-designed molecule (rentosertib) showed a signal of effect in a phase 2a trial and entered phase 3 in 2026, The AI Scientist wrote a machine-learning paper that passed workshop peer review (2025), and Google's AI co-scientist independently proposed a bacterial mechanism that human experiments had confirmed (2025). In each case people chose, ran or judged the experiments. In September 2026 an OpenAI model produced a claimed proof of the Navier-Stokes problem that mathematicians consulted by NPR believe correct, but that is mathematics, and its independence from human work is disputed. No AI has yet originated and designed an experimentally confirmed, headline natural-science discovery, so the score stays below 6."
trl_history: []
milestones:
  - date: 2009-04-03
    text: "King and colleagues report in Science that the robot scientist Adam autonomously generated functional-genomics hypotheses about baker's yeast and tested them with laboratory automation; the team confirmed its conclusions by manual experiments."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/19342587/"]
  - date: 2024-10-09
    text: "Demis Hassabis and John Jumper of Google DeepMind share half of the 2024 Nobel Prize in Chemistry (the other half went to David Baker) for AlphaFold's protein structure prediction; the prize honours the humans who built the AI tool, not a discovery the AI made on its own."
    status: done
    sources: ["https://www.nobelprize.org/prizes/chemistry/2024/press-release/"]
  - date: 2025-03-12
    text: "Sakana AI reports that one of three papers the team submitted, each written end to end by The AI Scientist-v2 (idea, code, experiments, analysis and text), passed peer review at an ICLR 2025 workshop; the paper was withdrawn before publication by prior agreement, and the system was later described in Nature."
    status: done
    sources: ["https://sakana.ai/ai-scientist-first-publication/", "https://www.nature.com/articles/s41586-026-10265-5"]
  - date: 2025-09-09
    text: "A Cell paper reports that Google's AI co-scientist, asked a question Imperial College researchers had answered experimentally but not yet published, ranked their confirmed mechanism of gene transfer in bacteria (cf-PICIs hijacking phage tails) as its top hypothesis; FutureHouse's Robin had earlier (May 2025 preprint) proposed and, in a lab-in-the-loop setup, validated ripasudil as a candidate for dry macular degeneration. In the co-scientist test, the experiments had been done by people beforehand."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/40930092/", "https://arxiv.org/abs/2505.13400"]
  - date: 2026-09-08
    text: "OpenAI announces that its internal model, run as about 10,000 agents for 88 hours, produced a 166-page proof resolving the Navier-Stokes Millennium Prize problem; mathematicians consulted by NPR believe it technically correct but hard to learn from, and NYU's Tristan Buckmaster disputes how independent it was of his and Levent Alpöge's approach."
    status: done
    sources: ["https://www.npr.org/2026/09/22/nx-s1-5968588/openai-navier-stokes-problem-mathematicians-learn-little"]
  - date: 2026-09-09
    text: "Insilico Medicine starts a 320-patient, 52-week phase 3 trial of rentosertib, a TNIK inhibitor for idiopathic pulmonary fibrosis whose target and molecule were both found with generative AI, after a 2025 phase 2a trial in Nature Medicine showed it was safe and gave a signal of improved lung function; primary completion is estimated for October 2029."
    status: done
    sources: ["https://clinicaltrials.gov/study/NCT07687459", "https://pubmed.ncbi.nlm.nih.gov/40461817/"]
  - text: "A research paper whose hypothesis, experiments, analysis and writing were all done by an AI system is accepted through normal peer review in the main track of NeurIPS, ICML or ICLR, or in Nature or Science (AI researchers)."
    status: pending
  - text: "A proof of a Clay Millennium Prize problem produced by an AI system is published in a refereed journal or recognised by the Clay Mathematics Institute (machine mathematics)."
    status: pending
  - text: "A drug whose biological target and molecule were both identified by AI systems, per the sponsor's published account, receives marketing approval from the FDA, EMA or NMPA (AI drug discovery)."
    status: pending
  - text: "A self-driving lab, with an AI choosing hypotheses and experiments without human direction, makes a discovery published as the main result of a Nature or Science paper (self-driving labs)."
    status: pending
  - text: "A regulator approves a new drug or device on evidence in which a computer simulation replaced a required human trial arm (simulated trials)."
    status: pending
  - text: "A Nobel Prize is awarded for a discovery made primarily by an AI system, with the AI, or its operators specifically for the AI's work, named in the citation (AI Nobel Prize)."
    status: pending
  - text: "An AI system chooses the hypothesis and designs the experiments behind a natural-science discovery that is the headline result of a Nature, Science or Cell paper crediting the AI with both, and the result is independently replicated."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2027
    median: 2029
    high: 2035
    definition_notes: "No public forecast gives a date range for this definition. Manifold's 'AI: major scientific discovery by 2030' (https://manifold.markets/Gigacasting/ai-major-scientific-discovery-by-20), which asks for Nobel-worthy work in a legitimate field, stood at 90% on 2026-11-26 (51 traders), and 'Will AI make an unambiguously novel scientific discovery in 2026?' (https://manifold.markets/level2/will-ai-make-an-unambiguously-novel) at 79% (25 traders); both are looser than this page's test, count mathematics and don't require an AI-designed experiment or replication. The estimate sets a later median because a headline paper plus independent replication adds a year or more after any discovery, and a long upper tail because journals and replicators may be slow to credit an AI with the hypothesis and design. For the mathematics branch, Manifold's 'When will the Navier-Stokes problem be solved?' (https://manifold.markets/strutheo/when-will-the-navierstokes-problem), resolved by Clay or equivalent recognition, gave 10% before 2027 and 88% before 2029 (44 traders)."
---

An AI scientist would do the creative part of research itself: notice a gap in current knowledge, propose an explanation, design the experiment that could prove it wrong, and interpret the result, with people and robots only carrying out its plans. If that works, the pace of discovery would no longer be limited by the number of trained researchers, and fields from drug discovery to materials could move far faster.

Pieces of this already exist. The robot scientist Adam generated and tested hypotheses about yeast genes in 2009, an AI-found drug target and molecule reached human trials, an AI-written machine-learning paper has passed workshop peer review, AI systems have proposed hypotheses that human experiments confirmed, and in 2026 an OpenAI model produced a claimed proof of the Navier-Stokes Millennium problem that experts believe correct, though its credit is disputed. Mathematics may be the first field where machines produce major results. In laboratory science, the decisive step, an AI-conceived, AI-designed experiment that yields a confirmed headline discovery, is still ahead.
