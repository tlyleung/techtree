---
name: Space Solar Power
kind: future
definition: "A satellite collects sunlight in orbit and beams it down, by microwave or laser, to a ground receiver that delivers at least 1 kW of usable electrical power to a load or grid."
requires: [fully-reusable-rockets]
icon: {prompt: "A wide golden solar array floating above Earth, sending a soft beam of light down to a receiving dish on a desert plain at dusk"}
trl:
  level: 4
  as_of: 2026-11-26
  rationale: "Beaming has been shown in the two settings separately: kilowatts transmitted over 500 m (Mitsubishi, 2015) and 800 W delivered over 8.6 km (DARPA, 2025) on the ground, and a tiny, detectable amount of power from orbit by Caltech's MAPLE experiment (2023). No system has yet sent usable power from orbit to the ground, and a planned kilowatt-class orbital demonstration has not been confirmed, so the technology is scored 4."
trl_history: []
milestones:
  - date: 1968-11-22
    text: "Peter Glaser proposes in Science collecting solar power on large satellites in orbit and beaming it to Earth by microwaves."
    status: done
    sources: ["https://doi.org/10.1126/science.162.3856.857"]
  - date: 2015-03-12
    text: "Mitsubishi Heavy Industries transmits 10 kW of microwave power, part of which is received 500 m away and lights LEDs, in a ground test for Japan's space solar power research."
    status: done
    sources: ["https://www.mhi.com/news/1503121879.html"]
  - date: 2023-06-01
    text: "Caltech reports that MAPLE, a microwave transmitter array on its Space Solar Power Demonstrator satellite, has beamed power wirelessly in space and sent detectable power to a receiver on Earth for the first time."
    status: done
    sources: ["https://www.caltech.edu/about/news/in-a-first-caltechs-space-solar-power-demonstrator-wirelessly-transmits-power-in-space"]
  - date: 2025-05-16
    text: "DARPA's POWER programme delivers more than 800 W for 30 seconds from a laser 8.6 km away in New Mexico, a distance record for optical power beaming."
    status: done
    sources: ["https://www.darpa.mil/news/2025/darpa-program-distance-record-power-beaming"]
  - text: "Aetherflux's kilowatt-class demonstration satellite beams infrared laser power from low Earth orbit to a ground station (planned for 2026; not confirmed by November 2026)."
    status: pending
  - text: "A satellite collects sunlight in orbit and beams it to a ground receiver that delivers at least 1 kW of usable electrical power to a load or grid."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2029
    median: 2033
    high: 2042
    definition_notes: "Aetherflux has said its first satellite will send up to about a kilowatt from orbit, but power received on the ground after conversion and beam losses will be lower, so a small first demo may not meet a 1 kW delivered threshold. A dedicated follow-up, or a larger demonstrator from a government programme, looks plausible in the early 2030s."
  - source: manifold
    url: https://manifold.markets/OlegEterevsky/when-will-power-transmission-from-o
    retrieved: 2026-11-26
    low: 2027
    median: 2033
    definition_notes: "Multiple-choice market 'When will power transmission from orbit to surface be first demonstrated?' (22 traders; created 2024-05-12, last traded 2026-01-01, so stale; closes 2030-01-01), read as a cumulative distribution: 15% before 2027, 36% before 2028, 48% before 2030, 50% before 2034, 59% before 2040. The 25th percentile falls in 2027 and the median in 2033; the 75th percentile is beyond 2040, so no high is given. It sets no power threshold, only that the receiver must produce more power than it uses; the creator, writing after Caltech's 2023 result, says space-to-ground transmission hasn't been tested yet, so that result is effectively excluded."
---

Space solar power means collecting sunlight on satellites, where it shines almost constantly and is never clouded over, and beaming the energy down to receivers on the ground. Proposed by Peter Glaser in 1968, it promises clean power around the clock that could be steered to wherever it's needed, from grids to disaster zones and remote bases. Its challenges are cost, the sheer size of the arrays and the efficiency of converting power to a beam and back. The pieces are being proved one at a time. On the ground, Mitsubishi sent 10 kW by microwave toward a receiver 500 m away in 2015, and in 2025 a laser delivered 800 W over 8.6 km. In 2023 Caltech's small demonstrator sent the first detectable power from orbit to Earth, at a tiny scale. The next step, beaming usable power from orbit, is what startups such as Aetherflux are attempting with small laser satellites, though its planned 2026 demonstration had not been confirmed by late 2026.
