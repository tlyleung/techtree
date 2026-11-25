---
name: Gene Editing Cures
kind: future
definition: "A regulator (FDA, EMA, MHRA or equivalent) approves a gene-editing therapy that edits DNA inside the patient's body, such as a CRISPR or base editor delivered by lipid nanoparticles to the liver. Therapies that edit cells outside the body and reinfuse them, like Casgevy, don't count."
requires: [genetics]
icon: {prompt: "A tiny golden lipid bubble carrying a glowing pair of molecular scissors toward a liver cell, where a strand of DNA is being neatly cut and repaired"}
trl:
  level: 6
  as_of: 2026-11-26
  rationale: "In vivo editing has gone from the first human results (NTLA-2001, 2021) to a successful phase 3 trial: Intellia's HAELO study of lonvo-z cut hereditary angioedema attacks by 87% versus placebo (April 2026), and the FDA accepted its application with a decision due in March 2027. By the rubric's biology column a successful phase 3 trial is TRL 7 and regulatory approval is TRL 8; this page's test is approval, set above the usual TRL 7 marker because the phase 3 step has already been passed, and a future page scores at most 6, so the score is capped at 6 until a regulator acts. The 2025 clinical hold on Intellia's nex-z after severe liver injury, lifted in early 2026, is a reminder that safety is not settled."
trl_history: []
milestones:
  - date: 2021-06-26
    text: "Gillmore and colleagues report in the New England Journal of Medicine the first clinical results of CRISPR editing inside the body: one infusion of NTLA-2001 lowered the disease-causing TTR protein in six people with transthyretin amyloidosis."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/34215024/"]
  - date: 2025-05-15
    text: "Musunuru and colleagues report in the New England Journal of Medicine that an infant with severe CPS1 deficiency was treated, under expanded access, with a base editor designed for his own mutation and delivered by lipid nanoparticles to the liver: the first bespoke in vivo gene-editing treatment."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/40373211/"]
  - date: 2025-10-29
    text: "The FDA places Intellia's phase 3 trials of nex-z, an in vivo CRISPR therapy for transthyretin amyloidosis, on clinical hold after a patient develops grade 4 liver transaminase elevations and raised bilirubin; the patient dies on 5 November 2025, of septic shock from a perforated duodenal ulcer according to the investigator, after a course that included acute liver injury."
    status: done
    sources: ["https://www.sec.gov/Archives/edgar/data/1652130/000119312525256378/d98865d8k.htm", "https://www.sec.gov/Archives/edgar/data/1652130/000119312526008307/d15047d8k.htm"]
  - date: 2026-03-02
    text: "The FDA lifts the clinical hold on Intellia's MAGNITUDE trial of nex-z, after lifting the hold on MAGNITUDE-2 on 27 January 2026."
    status: done
    sources: ["https://www.sec.gov/Archives/edgar/data/1652130/000119312526084309/d101756d8k.htm", "https://www.sec.gov/Archives/edgar/data/1652130/000119312526023387/d29201d8k.htm"]
  - date: 2026-04-27
    text: "Intellia reports that its phase 3 HAELO trial of lonvo-z, a one-time in vivo CRISPR therapy for hereditary angioedema, met its primary and key secondary endpoints, with an 87% reduction in attacks versus placebo, and starts a rolling FDA application."
    status: done
    sources: ["https://www.sec.gov/Archives/edgar/data/0001652130/000119312526179401/d138980dex991.htm", "https://www.hcplive.com/view/single-dose-lonvoguran-ziclumeran-cuts-hae-attacks-87-phase-3-trial"]
  - date: 2026-09-08
    text: "The FDA accepts Intellia's application for lonvo-z with priority review, setting a decision date of 10 March 2027."
    status: done
    sources: ["https://www.hcplive.com/view/lonvo-z-bla-accepted-fda-priority-review-hae"]
  - text: "Multiplex CRISPR gene therapy: the FDA approves a therapy that edits more than one gene in the patient's cells using CRISPR."
    status: pending
  - text: "A regulator (FDA, EMA, MHRA or equivalent) approves a gene-editing therapy that edits DNA inside the patient's body, such as a CRISPR or base editor delivered by lipid nanoparticles to the liver."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2027
    median: 2027
    high: 2028
    definition_notes: "No public forecast gives a date range for this event. The estimate rests on lonvo-z: positive phase 3 results, an accepted application with priority review, a PDUFA date of 10 March 2027 and no advisory committee planned. Most applications that reach this stage are approved on or near the date, so 2027 is the central case; the high end allows for a complete response letter and resubmission, for instance over liver safety. Manifold's ACX 2026 market (https://manifold.markets/DaftPunkRock/acx-2026-will-the-us-uk-or-eu-appro), which mirrors Metaculus question 41169 and counts any gene-editing approval by the FDA, MHRA or European Commission for a condition other than sickle cell disease and beta thalassaemia, including ex vivo therapies, stood at 10% (30 traders) on 2026-11-26, consistent with nothing happening this year."
---

Gene-editing cures fix or switch off a faulty gene directly inside the body, usually with a single infusion. The first approved CRISPR therapy, Casgevy (2023), works differently: doctors remove a patient's blood stem cells, edit them in a lab, and return them after chemotherapy, a gruelling and expensive process. Editing in place, with the editor packed into lipid nanoparticles that the liver absorbs, could make one-time treatments far simpler and reach many more diseases.

The field is close. In 2021 Intellia showed that a single dose could edit liver cells in people, and in 2025 doctors in Philadelphia treated a baby with a base editor designed for his own mutation, under expanded access rather than as an approved product. In 2026 Intellia's lonvo-z succeeded in a phase 3 trial for hereditary angioedema, and the FDA is due to decide on it by March 2027. There are real risks: the FDA halted trials of Intellia's other in vivo therapy in 2025 after severe liver injury in a patient who later died, though it lifted the holds in 2026. Approval of lonvo-z would still mark the moment gene editing inside the body became a medicine rather than an experiment.
