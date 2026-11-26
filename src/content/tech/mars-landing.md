---
name: Mars Landing
kind: future
definition: "A spacecraft carrying at least one human lands on the surface of Mars, and at least one crew member is alive and in contact with Earth 30 days after touchdown."
requires: [moon-base]
icon: {prompt: "Astronaut in a white suit standing beside a tall landed rocket on red Martian dust under a butterscotch sky"}
trl:
  level: 3
  as_of: 2026-11-22
  rationale: "Each essential function has been shown on its own, mostly at small scale: year-long crew stays in low Earth orbit, robotic Mars landings of about one tonne, oxygen made from Martian air by MOXIE and crewed flight beyond low Earth orbit on Artemis II. A heavy launcher designed for full reuse reached orbit on Starship Flight 14, and its upper stage was first recovered from orbit on Flight 15. But the least mature essential pieces are still at proof of concept: no vehicle has landed anywhere near the 20+ tonnes a crewed lander needs, ship-to-ship refuelling in orbit has not been done, and Mars-class life support and surface systems have not been integrated even on the ground. Scored 3, not 4, because those pieces have not been shown working together."
trl_history: []
milestones:
  - date: 2013-05-31
    text: "Curiosity's radiation detector measures the dose on the trip to Mars (about 1.8 millisieverts a day), showing that a round trip with current propulsion could exceed NASA's career limit for astronauts."
    status: done
    sources: ["https://www.jpl.nasa.gov/news/data-from-nasa-rovers-voyage-to-mars-aids-planning/"]
  - date: 2016-03-02
    text: "Scott Kelly returns from a 340-day mission on the International Space Station, part of NASA's study of how the body copes with Mars-length spaceflight."
    status: done
    sources: ["https://www.nasa.gov/news-release/nasa-astronaut-scott-kelly-returns-safely-to-earth-after-one-year-mission"]
  - date: 2021-02-18
    text: "Perseverance, a 1,026 kg rover, lands on Mars using terrain-relative navigation; NASA notes that recent Mars landers have delivered 0.3 to 1 tonne, against more than 20 tonnes for a crewed lander."
    status: done
    sources: ["https://www.nasa.gov/news-release/touchdown-nasas-mars-perseverance-rover-safely-lands-on-red-planet/", "https://www.nasa.gov/wp-content/uploads/2024/12/acr24-mars-edl-challenges.pdf"]
  - date: 2021-04-20
    text: "MOXIE on Perseverance makes about 5 grams of oxygen from Martian carbon dioxide, the first oxygen extracted from the Martian atmosphere."
    status: done
    sources: ["https://www.nasa.gov/news-release/nasas-perseverance-mars-rover-extracts-first-oxygen-from-red-planet/"]
  - date: 2024-03-14
    text: "Starship's third test flight moves cryogenic propellant between tanks inside one ship in space, a first step towards the orbital refuelling a Mars trip would need."
    status: done
    sources: ["https://www.nasa.gov/missions/artemis/nasa-artemis-mission-progresses-with-spacex-starship-test-flight/"]
  - date: 2026-04-10
    text: "Artemis II returns four astronauts from a 10-day lunar flight that took them 252,756 miles from Earth at its farthest."
    status: done
    sources: ["https://www.nasa.gov/gallery/artemis-ii-splashdown-and-return/"]
  - date: 2026-09-28
    text: "Starship reaches orbit for the first time on Flight 14 and deploys 26 Starlink satellites, in a mission shortened after an engine failure; neither stage is recovered."
    status: done
    sources: ["https://www.opb.org/article/2026/09/28/spacexs-starship-launches-on-first-orbital-mission-from-texas/", "https://www.space.com/space-exploration/launches-spacecraft/spacexs-starship-just-turned-10-years-old-when-will-it-go-to-mars"]
  - date: 2026-11-14
    text: "On Flight 15, a Starship upper stage returns from orbit and is caught by the launch tower, the first recovery of the upper stage from orbit; the booster's catch is called off, and no propellant transfer is attempted."
    status: done
    sources: ["https://www.natureworldnews.com/articles/73881/20261117/half-double-catch-worked-starship-flight-15-brings-ship-home-from-orbit-first-time.htm", "https://en.wikipedia.org/wiki/Starship_flight_15"]
  - text: "Two Starships dock in orbit and transfer propellant from one to the other."
    status: pending
  - text: "An uncrewed vehicle large enough to carry a crew lands intact on Mars."
    status: pending
  - text: "A spacecraft carrying at least one human lands on Mars, and at least one crew member is alive and in contact with Earth 30 days after touchdown."
    status: pending
    demonstrates: true
forecasts:
  - source: metaculus
    primary: true
    url: "https://www.metaculus.com/questions/3515/when-will-the-first-humans-land-successfully-on-mars/"
    retrieved: 2026-11-14
    low: 2038
    median: 2046
    high: 2061
    definition_notes: "Resolves on the date the first crewed vehicle touches down on Mars with at least one crew member surviving the landing. Our definition also requires a crew member to be alive 30 days later, so it is slightly stricter. Values are the recency-weighted community forecast's 25th percentile, median and 75th percentile (388 forecasters, aggregate from 2026-11-13), read from a Wayback Machine copy of the question page captured 2026-11-14, because Metaculus blocks scripted access."
  - source: manifold
    url: "https://manifold.markets/abcdef/when-will-the-first-humans-land-on"
    retrieved: 2026-11-22
    median: 2042
    definition_notes: "Numeric market that resolves to the year humans land on Mars (2099 if not this century); no survival condition. The market gives a single value (2041.7, rounded), not a median or range, from 32 traders; because it resolves to 2099 if no landing happens this century, that value is skewed later."
---

## Overview

A crewed Mars landing means putting people on the surface of Mars and keeping them alive there. Our test asks for more than a touchdown: at least one crew member must still be alive and in contact with Earth 30 days later. That shows the lander, the surface habitat and life support all work. It does not wait for the return home, which could come two years after landing.

## Why it matters

Mars would be the first place beyond the Moon where humans have stood, and the first step towards any lasting presence off Earth. It is also much harder than the Moon. Mars has enough atmosphere to burn up a lander but too little to slow a heavy one down. Launch windows open only every 26 months. Messages take minutes to arrive, and a crew cannot abort home quickly. For forecasters, it is a useful marker of how far heavy launch, life support and resource use on other worlds have come.

## Where it stands

The pieces exist mostly in small or separate form. Astronauts have lived in orbit for about a year at a time, and Curiosity measured the radiation dose on the way to Mars. Robotic landers have reached about one tonne. NASA says a crewed lander needs more than 20 tonnes, beyond anything flown. MOXIE showed oxygen can be made from Martian air, a few grams at a time. In 2026 Artemis II flew four people around the Moon, and SpaceX's Starship reached orbit for the first time. In November, on Flight 15, its upper stage was recovered from orbit for the first time. Starship has not yet refuelled from another ship in orbit, which its Mars plans depend on. In February 2026 Elon Musk said SpaceX was [shifting its focus to the Moon](https://www.nbcnews.com/science/space/spacex-prioritizes-moon-before-mars-musk-says-rcna258168), with Mars work to start within five to seven years, and SpaceX missed the late-2026 Mars window. The next window opens in late 2028.

## Key players

- **SpaceX**: Starship, a launcher and lander designed for full reuse and with Mars in mind.
- **NASA**: Moon to Mars architecture, which treats lunar missions under Artemis as practice for Mars.
- **China**: in 2021 a senior official at its main rocket maker proposed a first crewed Mars mission in 2033, a plan not since confirmed as an official programme. China's next concrete Mars step is the Tianwen-3 sample-return mission.

## Further reading

- NASA, [Moon to Mars architecture white papers](https://www.nasa.gov/architecture-white-papers), including the paper on Mars entry, descent and landing challenges.
- NASA, [Round-trip Mars mission mass challenges](https://www.nasa.gov/wp-content/uploads/2024/01/round-trip-mars-mission-mass-challenges.pdf).
- Space.com, [SpaceX's Starship just turned 10 years old. When will it go to Mars?](https://www.space.com/space-exploration/launches-spacecraft/spacexs-starship-just-turned-10-years-old-when-will-it-go-to-mars) (October 2026).
- NBC News, [SpaceX prioritizes the Moon before Mars, Musk says](https://www.nbcnews.com/science/space/spacex-prioritizes-moon-before-mars-musk-says-rcna258168) (February 2026).
- CNBC, [China plans to send its first crewed mission to Mars in 2033](https://www.cnbc.com/2021/06/24/china-plans-to-send-its-first-crewed-mission-to-mars-in-2033.html) (2021).
