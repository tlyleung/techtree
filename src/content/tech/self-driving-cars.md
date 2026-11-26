---
name: Self-Driving Cars
kind: future
definition: "A member of the public can buy (or lease) a production car that is permitted to drive itself on public roads with nobody in the driver's seat and no remote or in-car supervisor required, throughout at least one whole metropolitan area. Remote assistance that answers occasional queries from the car, as robotaxi fleets use, is allowed; continuous remote monitoring or chase cars are not."
requires: [machine-learning, satellite-navigation]
icon: {prompt: "A family car gliding through a city street at dusk with an empty driver's seat, its owners relaxing in the back, headlights reflecting on wet asphalt"}
trl:
  level: 6
  as_of: 2026-11-26
  rationale: "Driverless cars are proven as fleets: Waymo has run fully driverless rides for the public since 2020 and expanded across many US metros by 2026, and Tesla began rides with nobody in a few of its Model Y robotaxis in Austin in January 2026, initially shadowed by chase cars. But no car a consumer owns may drive itself without a driver ready to take over; the best on sale, Mercedes' Drive Pilot, is a Level 3 system certified in 2023. The fleet services are representative prototypes of the owned car in a real environment, so the score is 6."
trl_history: []
milestones:
  - date: 2005-10-09
    text: "Stanford's robot car Stanley is awarded the DARPA Grand Challenge prize as the first vehicle to finish the 132-mile desert course with no human intervention."
    status: done
    sources: ["https://cs.stanford.edu/group/roadrunner/stanley.html"]
  - date: 2020-10-08
    text: "Waymo opens its fully driverless ride-hailing service, with no safety driver on board, to members of the public in the Phoenix area."
    status: done
    sources: ["https://waymo.com/blog/2020/10/waymo-is-opening-its-fully-driverless-service-in-phoenix/"]
  - date: 2023-01-26
    text: "Mercedes-Benz's Drive Pilot becomes the first SAE Level 3 system certified for US public roads, in Nevada: on suitable freeways at up to 40 mph, the driver may hand over driving but must take back control when asked."
    status: done
    sources: ["https://electrek.co/2023/01/26/mercedes-benz-drive-pilot-sae-level-3-autonomous-driving-certified-us/"]
  - date: 2026-01-22
    text: "Tesla starts offering robotaxi rides in Austin with no safety monitor in the car, using Model Y cars, though only a few, initially shadowed by chase cars carrying safety monitors."
    status: done
    sources: ["https://electrek.co/2026/01/22/tesla-starts-robotaxi-rides-without-safety-monitor-in-austin-what-you-need-to-know/"]
  - date: 2026-10-27
    text: "Waymo adds nearly 250 square miles of driverless coverage across Los Angeles, Nashville, Orlando, San Diego and the San Francisco Bay Area, after opening public service in San Antonio, San Diego and Tampa earlier in October."
    status: done
    sources: ["https://gcn.com/waymo-expands-driverless-service-five-cities/22846/"]
  - text: "Tesla lets owners add their cars to its managed robotaxi fleet to run unsupervised inside its robotaxi zones (the company's target, given in October 2026, is the second quarter of 2027); as described, this would probably not meet this page's test, since the car would not drive its owner wherever they want to go."
    status: pending
  - text: "A member of the public can buy (or lease) a production car that is permitted to drive itself on public roads with nobody in the driver's seat and no remote or in-car supervisor required, throughout at least one whole metropolitan area. Remote assistance that answers occasional queries from the car, as robotaxi fleets use, is allowed; continuous remote monitoring or chase cars are not."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2028
    median: 2029
    high: 2033
    definition_notes: "No public forecast matches the test closely enough to use as primary. Tesla said in October 2026 that unsupervised driving in customer-owned cars would come in the second quarter of 2027, but described it as owners adding their cars to its managed robotaxi fleet inside its small robotaxi zones (https://electrek.co/2026/10/21/tesla-unsupervised-fsd-q2-2027-robotaxi-fleet/), which would probably not meet this test; its past targets have also slipped repeatedly, so the low is 2028. Manifold's 'I can buy a level 4 self-driving car in the U.S or Europe' (https://manifold.markets/DanielDugas/i-can-buy-a-level-4-selfdriving-car, 17 traders, checked 2026-11-26) gives 49% to 2026-2030 and 37% to 2031 or never, which supports a median around 2029 with a long upper tail; the market is stale, though, still putting 13.5% on 2023-2025, which have passed."
  - source: manifold
    url: "https://manifold.markets/dreev/when-will-visiononly-level-4-selfdr"
    retrieved: 2026-11-26
    low: 2027
    median: 2028
    high: 2031
    definition_notes: "Asks when camera-only (no lidar) Level 4 driving is widely deployed, defined as 100 million autonomous miles with no at-fault fatalities, by anyone, including robotaxi fleets; it does not require a consumer-owned car. Read from the market's cumulative probabilities on 2026-11-26 (14 traders): 5% before 2027, 50% before 2028, 76% before 2032, so the 25th percentile falls in 2027, the median at the turn of 2027/28 (counted as 2028) and the 75th percentile in 2031."
---

A self-driving car you own would take you, and drive itself home, with nobody at the wheel. For most people that would turn commuting time into free time, give mobility to those who cannot drive, and, if the systems prove safer than people, prevent many of the deaths and injuries caused by human error.

The core technology already works in fleets. Waymo has carried the public with no one in the driver's seat since 2020 and now covers large parts of many US cities. Tesla began driverless robotaxi rides in Austin in 2026 using cameras alone, in cars much like the ones it sells. What is missing is the personally owned version: a car that its owner may legally leave to drive itself, unsupervised, across a whole city. The cars sold today, including Tesla's, still need an attentive driver, and Mercedes' Level 3 system works only in narrow conditions. Tesla says owners can add their cars to its robotaxi fleet in 2027, which is not the same thing, and its previous deadlines have passed unmet.
