---
name: Cancer Vaccines
kind: future
definition: "The FDA, EMA or another stringent regulator (such as the UK's MHRA or Japan's PMDA) approves an individualized neoantigen cancer vaccine, made for each patient from the sequence of their own tumour, on the evidence of a randomized trial."
requires: [vaccination, genetics]
icon: {prompt: "A single glowing vial labelled with a strand of DNA, beside a sequenced tumour sample, as tiny immune cells swarm toward a dark cancer cell"}
trl:
  level: 6
  as_of: 2026-11-26
  rationale: "Personalised neoantigen vaccines raised tumour-specific immune responses in early trials (2017), cut recurrence in a randomized phase 2b trial in melanoma (KEYNOTE-942, 2024), and in August 2026 Merck and Moderna's intismeran met its primary endpoint in the 1,137-patient phase 3 INTerpath-001 trial. By the rubric's biology column a successful phase 3 trial is TRL 7 and approval is TRL 8; this page's test is approval by a stringent regulator, set above the usual TRL 7 marker because the phase 3 step has already been passed, and a future page scores at most 6, so the score is capped at 6 until that approval comes. Russia's 2025 approval of NeoOncovac for clinical use came without published randomized results and does not meet the test."
trl_history: []
milestones:
  - date: 2017-07-05
    text: "Two studies in Nature (Ott et al. and Sahin et al.) report that vaccines built from each patient's own tumour mutations triggered strong T-cell responses in small groups of melanoma patients."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/28678778/", "https://pubmed.ncbi.nlm.nih.gov/28678784/"]
  - date: 2023-05-10
    text: "A phase 1 trial of BioNTech and Genentech's autogene cevumeran, published in Nature, shows that personalised mRNA vaccines made in real time from resected pancreatic tumours triggered neoantigen-specific T cells in half of 16 patients, and that responders had longer recurrence-free survival."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/37165196/"]
  - date: 2024-01-18
    text: "The randomized phase 2b KEYNOTE-942 trial, published in The Lancet, finds that the personalised mRNA vaccine mRNA-4157 (intismeran) plus pembrolizumab lowered the risk of melanoma recurrence or death compared with pembrolizumab alone."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/38246194/"]
  - date: 2025-11-21
    text: "Russia's National Medical Research Radiological Centre and the Gamaleya Center announce approval for clinical use of NeoOncovac, a personalised mRNA vaccine for melanoma; the announcement cites no trial results."
    status: done
    sources: ["https://new.nmicr.ru/en/news/for-the-first-time-in-the-world-approval-has-been-granted-for-the-use-of-a-personalized-mrna-vaccine/"]
  - date: 2026-08-19
    text: "Merck and Moderna announce that the phase 3 INTerpath-001 trial of intismeran plus pembrolizumab in 1,137 patients with resected melanoma met its primary endpoint of recurrence-free survival."
    status: done
    sources: ["https://www.ajmc.com/view/moderna-merck-mrna-cancer-vaccine-succeeds-in-late-stage-trial", "https://ascopost.com/news/august-2026/interpath-001-trial-of-mrna-based-individualized-neoantigen-therapy-meets-primary-and-key-secondary-endpoints-in-patients-with-high-risk-resected-melanoma/"]
  - date: 2026-10-23
    text: "Full INTerpath-001 results at the ESMO Congress show a 42% lower risk of recurrence or death with the vaccine combination; overall survival data are not yet mature. Moderna's 6 November 2026 results release says the companies are working toward regulatory submissions."
    status: done
    sources: ["https://www.healio.com/news/hematology-oncology/20261023/personalized-mrna-vaccine-reduced-melanoma-recurrence-risk-42-after-surgery", "https://www.sec.gov/Archives/edgar/data/1682852/000168285226000194/exhibit9912026q3pressrelea.htm"]
  - text: "Merck and Moderna submit intismeran for approval to the FDA or EMA."
    status: pending
  - text: "Cancer blood tests: a regulator approves a single blood test that screens healthy people for many (20 or more) cancer types at once. (On 23 September 2026 an FDA advisory panel voted 7 to 2, with one abstention, that the benefits of GRAIL's Galleri outweigh its risks, but split 6 to 4 on effectiveness; no FDA decision had been announced by 26 November 2026.)"
    status: pending
  - text: "The FDA, EMA or another stringent regulator approves an individualized neoantigen cancer vaccine, made for each patient from the sequence of their own tumour, on the evidence of a randomized trial."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2027
    median: 2028
    high: 2030
    definition_notes: "No public forecast gives a date range for this event. As of late November 2026 no filing for intismeran had been announced: Moderna's third-quarter release of 6 November 2026 says only that Moderna and Merck are working toward regulatory submissions (https://www.sec.gov/Archives/edgar/data/1682852/000168285226000194/exhibit9912026q3pressrelea.htm); a filing around the turn of 2026/27 and a standard or priority review would put a US decision in late 2027 or 2028. Manifold's market on FDA approval of any personalised cancer mRNA vaccine before 2028 (https://manifold.markets/yaboi69/will-fda-approve-any-type-of-person) stood at 47% (28 traders) on 2026-11-26, consistent with a median around the end of 2027 or 2028. The high end allows for regulators waiting for overall-survival data, or for manufacturing and inspection questions specific to a one-patient-per-batch product."
---

A personalised cancer vaccine is made for one patient. Doctors sequence the tumour, software picks the mutations most likely to be visible to the immune system, and a manufacturer encodes them in a custom mRNA vaccine within weeks. Given after surgery, alongside checkpoint immunotherapy, it trains T cells to hunt down any cancer cells left behind, aiming to stop the disease from coming back.

The idea has moved quickly from theory to evidence. Small studies in melanoma (2017) and pancreatic cancer (2023) showed strong immune responses, a randomized phase 2b trial reported fewer melanoma relapses, and in 2026 Merck and Moderna's intismeran succeeded in a large phase 3 trial, cutting the risk of recurrence or death by 42%. Russia has already authorised its own personalised melanoma vaccine, though without published trial results. What remains is approval by a major regulator, the manufacturing scale to make thousands of one-off vaccines, and evidence that patients live longer. If those come, the same platform could be tried against many other cancers.
