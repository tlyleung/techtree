---
name: The Singularity
kind: future
definition: "Machine intelligence created in a single year totals a billion times the computing capacity of all human brains combined (Kurzweil's own 2045 criterion), with that capacity running systems that are themselves superintelligent rather than idle hardware."
requires: [superintelligence]
icon: {prompt: "A glowing spiral of circuitry and light rising from a darkened city skyline into a bright point in the night sky"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "The idea is well formulated, from Good's 1965 'intelligence explosion' to Vinge's 1993 essay and Kurzweil's compute-based test, but its essential piece, superintelligent machines, does not yet exist. Hardware is growing fast (the first exascale supercomputer in 2022; AI computing capacity added each quarter growing about 2.5 times a year in 2026), yet it remains many orders of magnitude short of the criterion, so the score stays at concept stage."
trl_history: []
milestones:
  - date: 1965-01-01
    text: "I. J. Good publishes 'Speculations Concerning the First Ultraintelligent Machine', arguing that a machine able to design better machines would set off an 'intelligence explosion' and be 'the last invention that man need ever make'."
    status: done
    sources: ["http://incompleteideas.net/papers/Good65ultraintelligent.pdf"]
  - date: 1993-03-30
    text: "Vernor Vinge presents 'The Coming Technological Singularity' at NASA's VISION-21 symposium, naming the singularity and predicting superhuman intelligence within about thirty years."
    status: done
    sources: ["https://edoras.sdsu.edu/~vinge/misc/singularity.html"]
  - date: 2022-02-11
    text: "Epoch researchers show that the compute used to train machine learning systems has doubled roughly every six months since the start of deep learning, far faster than Moore's law."
    status: done
    sources: ["https://arxiv.org/abs/2202.05924"]
  - date: 2022-05-30
    text: "Oak Ridge's Frontier becomes the first supercomputer to pass one exaflop/s on the TOP500 benchmark, with 1.102 exaflop/s."
    status: done
    sources: ["https://www.top500.org/news/ornls-frontier-first-to-break-the-exaflop-ceiling/"]
  - date: 2026-10-29
    text: "Epoch AI estimates that about 6.3 million H100-equivalents of AI computing capacity were added in the second quarter of 2026, with quarterly additions growing about 2.5 times a year."
    status: done
    sources: ["https://epoch.ai/data-insights/ai-computing-capacity-additions-doubling"]
  - text: "A machine intelligence is shown to surpass the best humans at essentially all cognitive tasks (superintelligence)."
    status: pending
  - text: "Machine intelligence created in a single year totals a billion times the computing capacity of all human brains combined, running superintelligent systems."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2045
    median: 2056
    high: 2100
    definition_notes: "No public forecast uses Kurzweil's compute test. The estimate extrapolates hardware: Epoch AI puts AI computing capacity added in Q2 2026 at about 6.3 million H100-equivalents, growing about 2.5 times a year; at roughly 2x10^15 8-bit operations per second per H100, that is about 5x10^22 per second added a year. Taking Kurzweil's figure of roughly 10^16 calculations per second per brain, the test needs about 10^35 per second added in a year, about two trillion times today's additions; at 2.5 times a year that takes about 30 years. Growth is already slowing: Epoch puts it at roughly 6 times in 2023, down to about 2.5 times a year since 2024. Energy is the harder limit: at an H100's roughly 700 W, 10^35 operations per second would draw about 3x10^22 W, some 10^5 times the sunlight Earth intercepts (about 1.7x10^17 W), so the test needs efficiency gains of 10^4 to 10^5 times, not just more chips, and may never be met on Earth. Faster AI-driven progress pulls the date toward Kurzweil's 2045; slowing chip, energy or investment growth pushes it toward the end of the century or beyond. The test also needs superintelligence, which this page treats as a prerequisite."
  - source: kurzweil
    citation: "The Singularity Is Near (2005), ch. 3"
    url: "https://aiimpacts.org/kurzweil-the-singularity-is-near/"
    retrieved: 2026-11-26
    median: 2045
    definition_notes: "Kurzweil's own date for this test: computing produced each year a billion times more powerful than all human intelligence, in the mid-2040s. Confirmed via AI Impacts' summary of the book (p. 120); he repeats 2045 in The Singularity Is Nearer (2024)."
  - source: manifold
    url: "https://manifold.markets/Alana/how-many-years-until-the-singularit"
    retrieved: 2026-11-26
    median: 2033
    definition_notes: "A numeric market (51 traders) on years from December 2022 until 'a recursively self-improving AI outpowers the combined might of human civilization'; its current expected value, about 10.3 years, gives early 2033; the market closes in 2049. That is a much weaker, loosely judged test than ours, and the market gives no range."
---

The Singularity is the point at which machine intelligence grows so fast, and so far beyond our own, that the future becomes hard to predict from where we stand. The mathematician I. J. Good described the mechanism in 1965: a machine smarter than us could design a still smarter one, and so on. Vernor Vinge gave it its name in 1993, and Ray Kurzweil turned it into a date, 2045, and a test we use here: the computing power built each year for machine intelligence reaching a billion times that of every human brain combined.

If it happened, it would be the largest change in human history, for good or ill, which is why it sits at the far edge of so many forecasts. Today the hardware is growing remarkably quickly. Supercomputers passed the exaflop mark in 2022, and the world now adds computing capacity equal to millions of top-end AI chips each quarter. But the test is still many orders of magnitude away, and it depends on superintelligence, which no one has yet built. Whether the Singularity arrives on Kurzweil's schedule turns mostly on whether that growth can continue for another three decades.
