---
name: Nuclear Rockets
kind: future
definition: "A spacecraft in space is propelled by a nuclear thermal rocket engine, in which a fission reactor heats a propellant such as hydrogen and expels it through a nozzle, with the engine fired at power in orbit or beyond. Nuclear electric propulsion (a reactor powering electric thrusters) and radioisotope power sources don't count."
requires: [modular-reactors]
icon: {prompt: "A slender spacecraft with a glowing reactor core at its tail, pushing a bright blue-white plume of hot hydrogen across a starry sky above the curve of Earth"}
trl:
  level: 5
  as_of: 2026-11-26
  rationale: "Full-size nuclear thermal engines were run on the ground in the 1960s, from the first Kiwi-A reactor test in 1959 to the flight-like NERVA XE-Prime engine in 1969, which on its own would suggest TRL 6. No such engine has been built or run since NERVA ended in 1973, the DRACO flight demonstration (2023) was cancelled in 2025 before it flew, with DARPA citing 'infrastructure barriers' to ground testing, and NASA's current flight plan (2026) is for nuclear electric, not thermal, propulsion. Following the rule to score lower when in doubt, the technology is scored 5: proven in realistic ground tests, but with no current prototype."
trl_history: []
milestones:
  - date: 1959-07-01
    text: "Los Alamos runs the first test of Kiwi-A, a non-flying reactor built to test nuclear rocket principles, at Jackass Flats in Nevada, showing that a reactor can heat hydrogen to the temperatures needed for propulsion."
    status: done
    sources: ["https://en.wikipedia.org/wiki/Project_Rover", "https://www.nasa.gov/rocket-systems-area-nuclear-rockets/"]
  - date: 1969-03-01
    text: "The NERVA XE-Prime engine, the closest to flight configuration of the program, is fired dozens of times on a Nevada test stand during 1969 at about 1,100 MW (date approximate: test series around March to September 1969); NERVA is cancelled in 1973 before any flight test."
    status: done
    sources: ["https://www.nasa.gov/rocket-systems-area-nuclear-rockets/", "https://en.wikipedia.org/wiki/NERVA"]
  - date: 2023-07-26
    text: "DARPA and NASA contract Lockheed Martin, with BWXT building the reactor, to design and build DRACO, an experimental nuclear thermal rocket vehicle meant to fly in orbit in 2027."
    status: done
    sources: ["https://www.darpa.mil/news/2023/draco-experimental-vehicle"]
  - date: 2025-05-30
    text: "NASA's fiscal 2026 budget request reveals that DRACO has been cancelled before flying and proposes no money for NASA's own nuclear thermal or nuclear electric propulsion research; DARPA later cites launch economics and 'infrastructure barriers' to ground testing."
    status: done
    sources: ["https://thespacereview.com/article/5028/1"]
  - date: 2026-03-24
    text: "NASA announces Space Reactor-1 Freedom, a nuclear electric (not thermal) propulsion spacecraft with a 20 kWe reactor, to launch to Mars in December 2028."
    status: done
    sources: ["https://www.ans.org/news/2026-03-25/article-7879/nasa-announces-plan-for-space-nuclear-propulsion-by-2028/"]
  - text: "A new nuclear thermal rocket reactor or engine is run at power in a ground test, the first since the NERVA program."
    status: pending
  - text: "A spacecraft in space is propelled by a nuclear thermal rocket engine, with a fission reactor heating propellant that is expelled through a nozzle, fired at power in orbit or beyond."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2031
    median: 2037
    high: 2045
    definition_notes: "No public forecast gives a date range. DRACO planned a flight about four years after its 2023 contract and was cancelled before reaching it; no nuclear thermal flight programme is funded as of November 2026, and NASA's 2028 reactor flight is nuclear electric. A new programme would need several years of reactor and fuel work and a ground test first, so a flight before the early 2030s looks unlikely."
  - source: manifold
    url: https://manifold.markets/JoshuaWilkes/will-a-nuclear-thermal-engine-be-su-bfefbc85f9bc
    retrieved: 2026-11-26
    median: 2034
    definition_notes: "Read from two binary markets by the same creator: 'Will a nuclear thermal engine be successfully used to power a spacecraft before 2030?' at 28% (32 traders) and '... before 2035?' at 51% (32 traders, last traded 2025-12-24, so somewhat stale), so the implied median falls in 2034. The markets ask only whether an engine is successfully used to power a spacecraft, close to this definition. Binary markets, not a date distribution, so no range is given. A related market, 'Will a nuclear propelled rocket be tested in space before 2027?' (https://manifold.markets/jack/will-a-nuclear-thermal-rocket-reach), stood at 2% (28 traders)."
---

A nuclear thermal rocket uses a fission reactor instead of combustion to heat its propellant, usually hydrogen. Because hydrogen is so light, the exhaust leaves roughly twice as fast as from the best chemical engines, which could cut trip times to Mars and widen launch windows. The idea is old and well tested on the ground: the United States ran Kiwi and NERVA reactors and engines in Nevada from 1959 to the early 1970s, but never flew one. Interest returned with DARPA and NASA's DRACO demonstrator, contracted in 2023 to fly in 2027, but it was cancelled in 2025 before it flew, as cheaper chemical launch weakened the case and DARPA cited barriers to testing a reactor on the ground. NASA's next nuclear spacecraft, announced in 2026, uses nuclear electric propulsion instead, which is a different technology. Nuclear thermal flight now depends on a new programme being funded and on solving how to ground-test a reactor engine safely today.
