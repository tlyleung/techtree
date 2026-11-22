---
name: Artificial General Intelligence
kind: future
definition: "A single unified AI system is publicly shown to pass a two-hour adversarial Turing test using text, images and audio, score at least 90% on the MMLU exam benchmark and 90% top-1 on APPS interview-level coding problems, and, controlling a robot, assemble a 1:8 scale model car from its human-readable instructions."
requires: [the-internet]
icon: {prompt: "A robot hand assembling a small model car beside a glowing chat window on a workbench"}
trl:
  level: 3
  as_of: 2026-11-22
  rationale: "Language models meet or surpass the knowledge part of the test (MMLU 90% in 2023) and show strong reasoning (IMO gold in 2025; ARC-AGI-3 scores of 81% under ARC Prize's standard conditions and near 100% with provider-designed harnesses in 2026), and short Turing tests have been passed. No public source reports the APPS coding criterion met. The least mature pieces are at proof of concept: the two-hour adversarial Turing test has never been run, and robot models (for example Gemini Robotics 2.5) are separate systems shown on about 200 tasks and an industrial pilot, with no fine assembly from instructions and nothing integrated into one system that attempts the whole test. Scored 3 on the least mature piece, and lower when in doubt."
trl_history: []
milestones:
  - date: 2020-05-28
    text: "OpenAI's GPT-3 paper shows that scaling a 175-billion-parameter language model gives strong few-shot performance on many tasks without task-specific training."
    status: done
    sources: ["https://arxiv.org/abs/2005.14165"]
  - date: 2023-12-06
    text: "Google reports Gemini Ultra scoring 90.0% on MMLU (with chain-of-thought prompting over 32 samples), the first model to pass the benchmark's human-expert level and one part of this page's test."
    status: done
    sources: ["https://blog.google/technology/ai/google-gemini-ai/"]
  - date: 2024-12-20
    text: "A pre-release version of OpenAI's o3, trained partly on ARC-AGI-1 public training data, scores 75.7% (and 87.5% with about 172 times the compute) on the ARC-AGI-1 semi-private set in testing by the ARC Prize Foundation, which says passing ARC-AGI does not equate to AGI."
    status: done
    sources: ["https://arcprize.org/blog/oai-o3-pub-breakthrough"]
  - date: 2025-03-31
    text: "In pre-registered five-minute, three-party Turing tests, GPT-4.5 with a persona prompt is judged human 73% of the time, more often than the real humans."
    status: done
    sources: ["https://arxiv.org/abs/2503.23674"]
  - date: 2025-07-21
    text: "A Gemini Deep Think model scores 35 of 42 at the International Mathematical Olympiad, certified as gold-medal standard by IMO coordinators, working in natural language within the time limit."
    status: done
    sources: ["https://deepmind.google/discover/blog/advanced-version-of-gemini-with-deep-think-officially-achieves-gold-medal-standard-at-the-international-mathematical-olympiad/"]
  - date: 2026-03-24
    text: "The ARC Prize Foundation publishes ARC-AGI-3, interactive puzzle environments that humans solve completely but on which frontier AI systems score below 1%."
    status: done
    sources: ["https://arxiv.org/abs/2603.24621"]
  - date: 2026-09-03
    text: "OpenAI releases GPT-6 Astra; the ARC Prize Foundation measures 62.7% on ARC-AGI-3 with its Standard harness and 99.9% (high effort) with its Provider Adapter harness, which uses OpenAI's context-management features. OpenAI's Greg Brockman tells the launch briefing \"Welcome to the AGI era\"; the ARC Prize Foundation says it is not claiming the model is AGI, and other experts disagree."
    status: done
    sources: ["https://openai.com/index/gpt-6-astra/", "https://arcprize.org/blog/astra", "https://axios.com/2026/09/03/openai-astra-gpt-6-agi-brockman", "https://ia.acs.org.au/article/2026/openai-says-the-agi-era-is-here-experts-disagree.html"]
  - date: 2026-11-10
    text: "Google DeepMind's Gemini Robotics 2.5 is shown on about 200 manipulation tasks and reaches 96% success in a proof-of-concept Mercedes-Benz parts-kitting pilot with an Apptronik humanoid."
    status: done
    sources: ["https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/"]
  - date: 2026-11-17
    text: "The ARC-AGI-3 leaderboard's best score under the Standard harness reaches 81.2% (Claude Fable 5.2), and GPT-6.2 Astra scores 100% with the Provider Adapter harness."
    status: done
    sources: ["https://arcprize.org/leaderboard"]
  - text: "A single unified AI system is publicly shown to pass a two-hour adversarial Turing test, score at least 90% on MMLU and on APPS interview-level problems, and assemble a 1:8 scale model car from its instructions with a robot."
    status: pending
    demonstrates: true
forecasts:
  - source: metaculus
    primary: true
    url: "https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/"
    retrieved: 2026-11-18
    low: 2028
    median: 2030
    high: 2036
    definition_notes: "Our test follows this question's criteria (two-hour adversarial Turing test, assembly of a circa-2021 Ferrari 312 T4 1:8 scale model, 90% mean accuracy on MMLU, 90% top-1 on APPS interview-level problems, all in one unified system). The question can also resolve on a confident credible statement by the developers or a vote of a small resolution committee; our page needs a public demonstration. OpenAI's \"AGI era\" claim of September 2026 had not resolved the question as of this snapshot. Community prediction (about 1,850 forecasters): 25th percentile February 2028, median June 2030, 75th percentile March 2036."
  - source: metaculus
    url: "https://www.metaculus.com/questions/3479/date-weakly-general-ai-is-publicly-known/"
    retrieved: 2026-11-11
    low: 2026
    median: 2027
    high: 2029
    definition_notes: "Metaculus's 'weakly general AI' question: a much easier test with no robotics (a Loebner Silver Prize-style Turing test, 90% on Winogrande, 75th percentile on SAT maths from page images, and exploring all 24 rooms of Montezuma's Revenge in under 100 hours of play). Community prediction (about 1,730 forecasters): 25th percentile September 2026, median August 2027, 75th percentile September 2029. Unresolved when retrieved, so its lower quartile has already passed."
  - source: survey
    name: "Thousands of AI Authors on the Future of AI (AI Impacts, 2023 survey of 2,778 researchers)"
    url: "https://arxiv.org/abs/2401.02843"
    retrieved: 2026-11-22
    median: 2047
    definition_notes: "Aggregate 50% year for 'high-level machine intelligence': unaided machines outperforming humans at every possible task. That is broader than our test. The survey gives 10% by 2027; full automation of all occupations was put much later (50% by 2116). Surveyed in late 2023, before most milestones on this page."
  - source: kurzweil
    url: "https://cdn.penguin.co.uk/dam-assets/books/9781847928290/9781847928290-sample.pdf"
    citation: "The Singularity Is Nearer (2024), ch. 1 and ch. 2; first made in The Age of Spiritual Machines (1999)"
    median: 2029
    definition_notes: "Kurzweil predicts an AI will pass a valid Turing test by 2029, under rules he set in a bet with Mitch Kapor that are stricter than most versions. It covers only the conversational part of our test, with no robotics."
---

## Overview

Artificial general intelligence (AGI) is an AI system that can do most cognitive work humans can, across fields, instead of excelling at one narrow task. There is no agreed definition, so this page uses a concrete test adapted from a long-running Metaculus question. One unified system must pass a two-hour adversarial Turing test, reach expert-level scores on broad knowledge and coding benchmarks, and control a robot that builds a detailed model car from its instructions.

## Why it matters

A system that could do this would be able to take on a large share of skilled human work, in offices and, through robots, in the physical world. Forecasters watch AGI closely because it could speed up science and the economy and is central to debates over AI safety and governance. Researchers disagree sharply about how close it is and about what should count as reaching it.

## Where it stands

Language models have moved fast. Google reported that Gemini Ultra passed the human-expert level on the MMLU exam benchmark in 2023. GPT-4.5 was judged more human than real people in five-minute Turing tests in 2025, and AI earned gold-medal scores at the 2025 International Mathematical Olympiad. ARC-AGI-3, a set of puzzle games published in March 2026 to be hard for AI, went from below 1% to 62.7% with OpenAI's GPT-6 Astra in September under the benchmark's Standard harness, and to 81.2% by November. With harnesses that use each provider's own context-management features, scores reached 99.9% to 100%. At Astra's launch OpenAI's Greg Brockman declared "the AGI era"; the ARC Prize Foundation said it was not claiming the model is AGI, and other experts disagreed. Metaculus's AGI question, which can resolve on a credible developer statement, stayed open.

Two parts of the test are still missing. No one has run a long, adversarial Turing test of the kind the definition asks for. And robot control is still separate from the general chat models: Google DeepMind's Gemini Robotics 2.5 handles about 200 tasks and has been piloted in a factory, but nothing like assembling a fine-scale kit from printed instructions has been shown. MMLU is now saturated and may be contaminated by training data, and benchmark scores overstate real-world reliability, so this page tracks the test rather than the claims.

## Key players

OpenAI, Google DeepMind, Anthropic, Meta, xAI and DeepSeek build the leading frontier models. Robotics efforts include Google DeepMind with Apptronik, and a range of humanoid start-ups. The ARC Prize Foundation and academic groups such as UC San Diego's Turing test researchers provide independent measurements.

## Further reading

- Metaculus, [When will the first general AI system be devised, tested, and publicly announced?](https://www.metaculus.com/questions/5121/date-of-artificial-general-intelligence/)
- Katja Grace et al., [Thousands of AI Authors on the Future of AI](https://arxiv.org/abs/2401.02843) (2024).
- ARC Prize Foundation, [ARC-AGI-3: A New Challenge for Frontier Agentic Intelligence](https://arxiv.org/abs/2603.24621) (2026).
- Cameron Jones and Benjamin Bergen, [Large Language Models Pass the Turing Test](https://arxiv.org/abs/2503.23674) (2025).
- Ray Kurzweil, *The Singularity Is Nearer* (2024).
