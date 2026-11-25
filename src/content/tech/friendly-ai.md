---
name: Friendly AI
kind: future
definition: "A general-purpose AI system is deployed whose objective is derived, by a published and reproducible procedure, from the extrapolated and reconciled preferences of a large human population (what they would want on reflection, not only what they say now)."
requires: [artificial-general-intelligence, philosophy]
icon: {prompt: "A gentle robotic hand and a human hand together holding a small glowing sapling"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "Yudkowsky named the goal in 2001 and stated it as coherent extrapolated volition in 2004, but gave no algorithm for it. Parts of the pipeline exist: training on human preferences (2017), training on written principles (Constitutional AI, 2022), drafting those principles from about 1,000 members of the public (2023), and an AI mediator that found common ground among thousands of people (2024). None of these extrapolates what people would want on reflection, the essential and least mature piece, which remains a concept."
trl_history: []
milestones:
  - date: 2001-06-15
    text: "Eliezer Yudkowsky publishes 'Creating Friendly AI 1.0', setting out the design of an AI whose goals are benevolent, which he calls Friendly AI."
    status: done
    sources: ["https://intelligence.org/files/CFAI.pdf"]
  - date: 2004-05-01
    text: "Eliezer Yudkowsky publishes 'Coherent Extrapolated Volition', proposing that a friendly AI should act on what humanity would want if we knew more and thought faster."
    status: done
    sources: ["https://intelligence.org/files/CEV.pdf"]
  - date: 2017-06-12
    text: "Christiano and colleagues show that deep reinforcement learning agents can learn complex goals from non-expert humans' preferences between pairs of behaviours, without a hand-written reward."
    status: done
    sources: ["https://arxiv.org/abs/1706.03741"]
  - date: 2022-12-15
    text: "Anthropic introduces Constitutional AI, training an assistant to follow a written list of principles with AI feedback instead of human labels for harm."
    status: done
    sources: ["https://arxiv.org/abs/2212.08073"]
  - date: 2023-10-17
    text: "Anthropic and the Collective Intelligence Project have about 1,000 Americans draft a constitution through a public input process and train a model on it."
    status: done
    sources: ["https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input"]
  - date: 2024-10-18
    text: "Tessler and colleagues show that an AI mediator, drawing on participants' opinions and critiques, writes group statements that 5,734 participants prefer to human mediators' and that help groups converge, replicated in a representative UK virtual citizens' assembly."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/39418380/"]
  - text: "A published procedure extrapolates a population's considered preferences, beyond what they state now, and is used to train an AI system."
    status: pending
  - text: "A general-purpose AI system is deployed with an objective derived by a published, reproducible procedure from the extrapolated and reconciled preferences of a large human population (what they would want on reflection, not only what they say now)."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2045
    median: 2062
    high: 2100
    definition_notes: "No public forecast asks this question. The estimate assumes the prerequisite, artificial general intelligence, arrives first, and that turning 'extrapolated volition' into a published, auditable procedure is a hard open problem in philosophy as well as engineering, so it comes decades later. The range is wide because there is no technical roadmap, and the test may never be met in this form even if AI turns out well."
---

Friendly AI is an artificial intelligence whose goals are, by design, good for humanity: not just obedient, but aimed at what people would want if they understood more and thought it through. Eliezer Yudkowsky named Friendly AI in 2001 and proposed "coherent extrapolated volition" as its goal in 2004, and the idea has shaped AI-safety thinking ever since. If advanced AI arrives, how its goals are chosen may matter more than almost anything else about it.

Today's AI systems are trained on human preferences in simpler ways. Assistants learn from people's ratings, follow written principles known as constitutions, and in one 2023 experiment followed a constitution drafted by about a thousand members of the public; in 2024 an AI mediator helped thousands of people find common ground. These are real steps toward AI shaped by many voices, but none attempts the hard part: working out what people would want on reflection, and reconciling it fairly across a whole population. That remains an open question for philosophers and engineers alike.
