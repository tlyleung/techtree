---
name: Superintelligence
kind: future
definition: "A single AI system outperforms the best human experts at nearly every economically and scientifically important cognitive task, as shown by independent evaluations: for example, its work is preferred over that of leading professionals in blind expert grading across the large majority of occupations tested, and it matches or beats top researchers at producing new, verified scientific results."
requires: [artificial-general-intelligence, ai-scientists]
icon: {prompt: "A vast luminous lattice of thought towering over a small human silhouette at a chessboard, both lit by the same soft light"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "AI has beaten the best humans in narrow domains, such as Go (2016) and protein structure prediction (2020), and a general-purpose model reached gold-medal level at the 2025 International Mathematical Olympiad. On broad professional work, OpenAI's GDPval went from the best model matching or beating professionals on just under half of tasks (2025) to GPT-5.5 at 84.9% wins or ties (April 2026), and GPT-6 Astra (September 2026) was reported to help solve open maths problems. These are integrated systems tested on realistic tasks, but the strongest results are lab-reported, combine wins with ties, and compare against experienced professionals rather than the best experts, while Astra scored 62.7% on ARC-AGI-3 under the standard harness where humans solve every environment. That is lab validation, TRL 4, one above the prerequisite AGI page, whose least mature pieces (a long adversarial Turing test and robotics) lie partly outside this cognitive-only test."
trl_history: []
milestones:
  - date: 2016-03-15
    text: "DeepMind's AlphaGo wins the final game of its match against Lee Sedol in Seoul, taking the series 4-1 against one of the world's strongest Go players."
    status: done
    sources: ["https://www.koreatimes.co.kr/business/tech-science/20160315/alphago-wins-final-game-after-neck-and-neck-race", "https://deepmind.google/research/alphago/"]
  - date: 2020-11-30
    text: "DeepMind's AlphaFold achieves a median score of 92.4 GDT in the CASP14 blind assessment, accuracy that CASP's organisers recognise as a solution to the protein-folding problem."
    status: done
    sources: ["https://deepmind.google/blog/alphafold-a-solution-to-a-50-year-old-grand-challenge-in-biology/"]
  - date: 2025-07-21
    text: "Google DeepMind announces that an advanced version of Gemini Deep Think solved five of six problems at the 2025 International Mathematical Olympiad, a gold-medal score officially graded by IMO coordinators."
    status: done
    sources: ["https://deepmind.google/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/"]
  - date: 2025-09-25
    text: "OpenAI publishes GDPval, blind expert grading of real work tasks from 44 occupations; the best model tested, Claude Opus 4.1, was rated as good as or better than industry professionals on just under half of tasks."
    status: done
    sources: ["https://openai.com/index/gdpval/"]
  - date: 2026-04-23
    text: "OpenAI reports that GPT-5.5 matches or beats industry professionals on 84.9% of GDPval tasks (OpenAI's own evaluation; wins and ties combined), ahead of Claude Opus 4.7 at 80.3% in the same table."
    status: done
    sources: ["https://openai.com/index/introducing-gpt-5-5/"]
  - date: 2026-09-03
    text: "OpenAI releases GPT-6 Astra, which it says scores 98% on FrontierMath Tier 4 and has helped solve long-standing open problems in mathematics; the ARC Prize Foundation measures 62.7% on ARC-AGI-3 with its standard harness (humans solve all environments) and 99.9% with a provider-designed harness, and says it is not claiming the model is AGI. OpenAI president Greg Brockman calls it the start of the AGI era, a claim other experts dispute."
    status: done
    sources: ["https://openai.com/index/gpt-6-astra/", "https://arcprize.org/blog/astra", "https://ia.acs.org.au/article/2026/openai-says-the-agi-era-is-here-experts-disagree.html"]
  - text: "In an evaluation run independently of the developer across many occupations, an AI system's work is preferred (wins, not ties) over that of experienced professionals on most tasks."
    status: pending
  - text: "A single AI system outperforms the best human experts at nearly every economically and scientifically important cognitive task, as shown by independent evaluations: for example, its work is preferred over that of leading professionals in blind expert grading across the large majority of occupations tested, and it matches or beats top researchers at producing new, verified scientific results."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2031
    median: 2038
    high: 2052
    definition_notes: "No readable public forecast gives a range for this test. The estimate sits between the sources below: a Manifold ladder (median about 2032) that resolves on a looser announcement-based test, and the 2023 AI Impacts survey (50% by 2047 for machines beating human workers at every task), which predates the 2025-26 results on this page. It also allows for AGI first (Metaculus median 2030 on the AGI page) and time after it, for independent evaluation against the best experts rather than lab-reported wins-or-ties against professionals, and for producing new science. In the same survey, the median respondent gave only 10% for machines vastly better than humans at all professions within two years of human-level AI."
  - source: manifold
    url: "https://manifold.markets/RemNi/will-we-get-asi-before-2033"
    retrieved: 2026-11-26
    low: 2029
    median: 2032
    definition_notes: "Read from a ladder of binary markets by one creator with the same criteria ('Will we get ASI before 2027' through 'before 2036'; 46-114 traders each). On 2026-11-26: before 2029, 19%; before 2030, 29%; before 2033, 51%; before 2036, 66%. So the 25th percentile falls in 2029 and the median in 2032; the ladder stops before the 75th percentile. ASI is defined as surpassing humans in virtually all domains, but it resolves when such a system is 'created and publicly announced', a looser bar than independent evaluation."
  - source: survey
    name: "Thousands of AI Authors on the Future of AI (AI Impacts, 2023 survey of 2,778 researchers)"
    url: "https://arxiv.org/abs/2401.02843"
    retrieved: 2026-11-26
    median: 2047
    definition_notes: "Aggregate 50% year for 'high-level machine intelligence': unaided machines that can do every task better and more cheaply than human workers (feasibility, not adoption). Close to this test, but measured against ordinary workers rather than the best experts, and including physical tasks. 10% by 2027. Surveyed in late 2023."
---

Superintelligence means AI that is not merely as capable as people but better than the best of them at almost every kind of thinking work, from research and engineering to law, medicine and strategy. If it arrives and goes well, it could speed up science and the economy dramatically; if it goes badly, the risks could be severe, which is why many AI researchers take the safety question seriously.

Progress has been fast. Specialist systems beat the best humans at Go and transformed protein structure prediction, and in 2025 a general-purpose model reached gold-medal level at the International Mathematical Olympiad. By April 2026 OpenAI reported that its best model matched or beat professionals on 85% of real work tasks in its own GDPval test, and in September OpenAI's president declared "the AGI era" with GPT-6 Astra. Sceptics point out that these results are mostly self-reported, count ties as successes and compare against experienced professionals rather than the very best, and that Astra still falls short of humans on the ARC-AGI-3 puzzles under standard conditions. Independent evidence of beating top experts across nearly every field is still missing.
