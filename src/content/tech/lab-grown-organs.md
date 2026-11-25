---
name: Lab-Grown Organs
kind: future
definition: "A solid organ (kidney, liver, heart, lung or pancreas) built in the lab from human cells, on a scaffold or from stem cells, as a whole organ or an organ-structured graft with its own blood supply, is implanted in patients in place of their failed organ and meets its primary endpoint in a pivotal trial (or gains regulatory approval), with recipients relying on it for at least a year. Cell infusions, such as islet or liver-cell transplants, don't count."
requires: [genetics]
icon: {prompt: "A pale, translucent kidney-shaped scaffold slowly filling with pink living tissue inside a glass bioreactor, fed by thin tubes"}
trl:
  level: 4
  as_of: 2026-11-22
  rationale: "Engineered whole organs have worked only in animals, and only briefly: a recellularised rat kidney made urine after transplantation (2013), and revascularised pig-liver scaffolds stayed perfused for up to 15 days when implanted in pigs (2019). The nearest human evidence, a bioengineered liver used outside the body for about two days in a five-patient phase 1 study (2025-26), shows safety but is not a transplant, and no implantable solid organ has entered a human trial. Hollow engineered tissues used in patients (bladder tissue, the approved Symvess vessel) are a simpler technology and don't raise the score; the bladder's later phase 2 trial failed."
trl_history: []
milestones:
  - date: 2006-04-04
    text: "Atala and colleagues report in The Lancet that engineered bladder tissue, grown from seven patients' own cells (aged 4 to 19) on collagen-based scaffolds and used to enlarge their bladders, worked after implantation, with follow-up of up to five years."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/16631879/", "https://www.news-medical.net/news/2006/04/04/17101.aspx"]
  - date: 2008-01-13
    text: "Ott and colleagues strip rat hearts of their cells, reseed the scaffold with cardiac and endothelial cells, and show the construct beating and pumping at about 2% of adult heart function in a bioreactor."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/18193059/"]
  - date: 2013-04-14
    text: "A bioengineered rat kidney, made by reseeding a decellularised scaffold, is transplanted into rats, perfused by their circulation and produces rudimentary urine."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/23584091/"]
  - date: 2013-07-03
    text: "Takebe and colleagues grow liver buds from human induced pluripotent stem cells that, transplanted into mice, connect to the blood supply within 48 hours, perform liver functions and rescue mice from lethal liver failure."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/23823721/"]
  - date: 2013-10-29
    text: "A phase 2 trial of Tengion's Neo-Bladder, the commercial version of the engineered bladder, fails: it brings no significant improvement in bladder capacity or compliance, and serious adverse events exceed the safety threshold."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/24184366/"]
  - date: 2019-10-14
    text: "Mayo Clinic and Miromatrix report pig-liver scaffolds lined with human endothelial cells that, implanted into immunosuppressed pigs, stay perfused with blood for up to 15 days, against a previous best of three."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/31611679/"]
  - date: 2024-12-19
    text: "The US FDA approves Humacyte's Symvess, an acellular tissue-engineered blood vessel for extremity arterial injury, the first engineered vessel of its kind approved."
    status: done
    sources: ["https://www.fda.gov/news-events/press-announcements/fda-approves-first-acellular-tissue-engineered-vessel-treat-vascular-trauma-extremities", "https://www.fda.gov/media/185033/download"]
  - date: 2025-06-24
    text: "United Therapeutics and Intermountain Health announce the first patient treated in a phase 1 trial of miroliverELAP, a bioengineered liver (pig scaffold seeded with human liver and endothelial cells) that supports a failing liver from outside the body."
    status: done
    sources: ["https://www.ksl.com/article/51334714/intermountain-health-patient-first-to-be-treated-with-external-bioengineered-liver"]
  - date: 2026-01-26
    text: "United Therapeutics reports that the miroliverELAP phase 1 study met its primary endpoint, survival during treatment (at least 44 hours), in five patients with acute liver failure, with no unexpected serious adverse events, and plans a phase 2 study."
    status: done
    sources: ["https://ir.unither.com/press-releases/2026/01-26-2026-120028746", "https://www.fiercebiotech.com/medtech/united-therapeutics-bioengineered-temporary-liver-shows-promise-phase-1-trial", "https://clinicaltrials.gov/study/NCT06285253"]
  - text: "A bioengineered solid organ grown from human cells is first implanted in a living patient in a clinical trial."
    status: pending
  - text: "A solid organ (kidney, liver, heart, lung or pancreas) built in the lab from human cells, on a scaffold or from stem cells, as a whole organ or an organ-structured graft with its own blood supply, is implanted in patients in place of their failed organ and meets its primary endpoint in a pivotal trial (or gains regulatory approval), with recipients relying on it for at least a year. Cell infusions, such as islet or liver-cell transplants, don't count."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-23"
    retrieved: 2026-11-22
    low: 2038
    median: 2045
    high: 2055
    definition_notes: "No public forecast or expert survey gives a date range for this event. The estimate assumes a first human implant of an engineered solid organ around 2030-2035 (United Therapeutics gives no first-in-human date for its kidney) and about a decade from there to a successful pivotal trial. Humacyte's vessel took twelve years from first implants (December 2012) to approval (December 2024), but it is an acellular tube, so that is a generous lower bound for a living solid organ. For comparison, Metaculus question 6806 (https://www.metaculus.com/questions/6806/) asks whether anyone will live 100 days after receiving a lab-grown heart, liver, kidney or lung before 2035; it counts heavily bioengineered pig organs and needs only one patient, and its community forecast was 75% in October 2025 (archived copy). A 2020 expert horizon scan put bioengineered replacement organs 5 to 10 years away, which has proved optimistic."
---

## Overview

A lab-grown transplant organ is a kidney, liver, heart, lung or pancreas built from human cells rather than taken from a donor. The two main routes are to strip a donor organ (often a pig's) of its cells, leaving a protein scaffold that is then reseeded with human cells, or to grow organ tissue from stem cells, either as self-organising organoids or by bioprinting. This page counts only solid organs implanted to replace a failed one. Hollow or thin structures (bladders, tracheas, blood vessels), cell infusions (such as stem-cell-derived pancreatic islets) and gene-edited pig organs (xenotransplantation) are separate technologies, mentioned here only to show where the field stands.

## Why it matters

Donor organs are scarce, and recipients need lifelong immune-suppressing drugs. An organ grown from a patient's own cells could in principle avoid both problems and end transplant waiting lists. Forecasters should note that xenotransplantation, using gene-edited pig organs, is competing for the same patients.

## Where it stands

Engineered hollow tissues have been used in people for twenty years. Atala's 2006 bladder tissue and Humacyte's Symvess vessel, approved in 2024, show that engineered scaffolds can work in the body, but progress hasn't been smooth: the phase 2 trial of the commercial bladder failed in 2013. Solid organs are much harder. They are dense and need a branching blood supply to keep every cell alive. Whole engineered organs have so far worked only in animals, and briefly: urine from a rebuilt rat kidney, and pig-liver scaffolds that stayed perfused for two weeks. The closest human result is miroliverELAP, a bioengineered liver that supports patients from outside the body for about two days. A 2022 systematic review described bio-artificial organs as still at the preclinical stage. No implantable lab-grown solid organ has yet been put into a patient.

## Key players

- **United Therapeutics and its Miromatrix subsidiary:** miroliverELAP, and mirokidney, which the company describes as a fully transplantable bioengineered kidney in development.
- **Wake Forest Institute for Regenerative Medicine** (Anthony Atala): engineered bladders and other tissues.
- **Harald Ott's lab at Massachusetts General Hospital:** decellularised heart, kidney and lung scaffolds.
- **Takanori Takebe and colleagues:** liver buds grown from stem cells.
- **Humacyte:** engineered blood vessels, an adjacent technology that has reached approval.

## Further reading

- Metaculus, [Will lab-grown organs be used in humans by 2035?](https://www.metaculus.com/questions/6806/)
- de Jongh et al., [Early-phase clinical trials of bio-artificial organ technology: a systematic review of ethical issues](https://pmc.ncbi.nlm.nih.gov/articles/PMC9659568/), *Transplant International* (2022).
- Song et al., [Regeneration and experimental orthotopic transplantation of a bioengineered kidney](https://pubmed.ncbi.nlm.nih.gov/23584091/), *Nature Medicine* (2013).
- Atala et al., [Tissue-engineered autologous bladders for patients needing cystoplasty](https://pubmed.ncbi.nlm.nih.gov/16631879/), *The Lancet* (2006).
