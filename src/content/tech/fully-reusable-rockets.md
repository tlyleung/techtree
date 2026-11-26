---
name: Fully Reusable Rockets
kind: future
definition: "An orbital rocket reaches orbit with an upper stage that has already been to orbit and been recovered intact, launched on a booster that has also flown before and been recovered intact. Partly reused systems such as the Space Shuttle, which discarded its external tank on every flight, don't count."
requires: [reusable-boosters]
icon: {prompt: "A scorched, stainless-steel rocket upper stage held between two giant tower arms at dusk, ready to fly again"}
trl:
  level: 6
  as_of: 2026-11-26
  rationale: "Every piece has now been shown at full scale, but not together. Super Heavy boosters have been caught by the launch tower (2024) and reflown (2025), Starship first reached orbit on Flight 14 (September 2026), and on Flight 15 in November 2026 an upper stage returned from orbit and was caught intact for the first time. No recovered upper stage has flown again, and the Flight 15 booster was lost, so the full cycle the definition describes has not happened yet."
trl_history: []
milestones:
  - date: 1981-04-12
    text: "NASA launches STS-1, the first Space Shuttle flight; the orbiter Columbia lands at Edwards Air Force Base two days later. The Shuttle reused its orbiter but discarded its external tank on every flight, so it was only partly reusable."
    status: done
    sources: ["https://www.nasa.gov/mission/sts-1/"]
  - date: 2017-03-30
    text: "SpaceX launches SES-10 on a Falcon 9 whose first stage had flown before, the first reuse of an orbital-class booster; the stage lands on a drone ship a second time."
    status: done
    sources: ["https://www.cbsnews.com/news/spacex-launches-comsat-in-historic-flight-with-used-booster/", "https://en.wikipedia.org/wiki/SES-10"]
  - date: 2024-10-13
    text: "On Starship Flight 5, a returning Super Heavy booster is caught by the launch tower's mechanical arms for the first time."
    status: done
    sources: ["https://www.nbcnews.com/news/us-news/spacex-starship-rocket-launch-rcna175191"]
  - date: 2025-05-27
    text: "Starship Flight 9 launches on a previously flown Super Heavy booster (B14), the first reuse of a Super Heavy."
    status: done
    sources: ["https://www.space.com/space-exploration/launches-spacecraft/spacex-launches-starship-flight-9-to-space-in-historic-reuse-of-giant-megarocket-video", "https://en.wikipedia.org/wiki/Starship_flight_test_9"]
  - date: 2026-09-28
    text: "On Flight 14, a Starship upper stage reaches sustained Earth orbit for the first time and deploys Starlink satellites; neither stage is recovered."
    status: done
    sources: ["https://www.aljazeera.com/news/2026/9/28/spacexs-showpiece-starship-rocket-reaches-orbit-for-first-time", "https://en.wikipedia.org/wiki/Starship_flight_14"]
  - date: 2026-11-14
    text: "On Flight 15, Starship Ship 42 completes about 14 orbits, deploys Starlink satellites and is caught by the tower arms at Starbase, the first catch of an upper stage returning from orbit; the Flight 15 booster is lost after an early engine shutdown."
    status: done
    sources: ["https://www.aljazeera.com/news/2026/11/15/spacexs-starship-captured-by-launchpad-arms-in-dramatic-first", "https://en.wikipedia.org/wiki/Starship_flight_15"]
  - text: "Both stages of the same orbital flight are recovered intact."
    status: pending
  - text: "An orbital rocket reaches orbit with an upper stage that has already been to orbit and been recovered intact, launched on a booster that has also flown before and been recovered intact."
    status: pending
    demonstrates: true
forecasts:
  - source: manifold
    primary: true
    url: "https://manifold.markets/OlegEterevsky/when-will-spacex-first-reuse-starsh"
    retrieved: 2026-11-26
    low: 2027
    median: 2027
    high: 2028
    definition_notes: "Manifold market 'When will SpaceX first reuse Starship 2nd stage?' (33 traders), a set of cumulative date answers. On 2026-11-26 it gave 2% before 2027, 29% before April 2027, 47% before October 2027, 61% before 2028, 70% before April 2028, 77% before July 2028 and 82% before 2029. The market closes on 2028-01-01, so answers after that date are traders' estimates that can't be settled within the market's life. The 25th percentile falls in Q1 2027, the median in Q4 2027 and the 75th percentile in Q2 2028. The market resolves when a landed Starship leaves the pad a second time; it doesn't require orbit or a reused booster, so it is slightly easier than this page's definition, and it covers SpaceX only."
---

A fully reusable rocket would fly to orbit and come back whole, both the booster and the upper stage, ready to be refuelled and launched again like an airliner. Since the hardware is most of the cost of a launch, that could cut the price of reaching orbit many times over, which matters for everything from satellite networks to bases on the Moon and Mars.

Partial reuse is already routine. The Space Shuttle reused its orbiter but threw away its fuel tank each flight, and SpaceX has landed and reflown Falcon 9 first stages since 2017. Upper stages are harder, because they come back from orbital speed and must survive re-entry. SpaceX's Starship is closest: its Super Heavy boosters have been caught by the launch tower and reflown, and in November 2026 a Starship upper stage was caught after orbiting the Earth. What remains is to fly a recovered ship again, with a recovered booster beneath it.
