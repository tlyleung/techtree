---
name: Space Elevator
kind: future
definition: "A tether anchored to Earth's surface and reaching beyond geostationary orbit (about 35,800 km up) carries a climber with a payload from the ground to orbit."
requires: [self-replication]
icon: {prompt: "A hair-thin ribbon rising from an ocean platform at the equator straight up through the clouds, a small climber glinting halfway, the curve of the Earth below"}
trl:
  level: 2
  as_of: 2026-11-26
  rationale: "The concept is well analysed: Artsutanov (1960), Pearson (1975) and Edwards's NIAC study (2003) worked out the physics and a design, but every design depends on a cable material that doesn't yet exist. Edwards's design calls for about 100 GPa; the best nanotube bundles reach 80 GPa (43 GPa on an engineering basis), and only over centimetres (2018), so laboratory samples fall short in both strength and length. STARS-Me (2018) was launched to test a climber on a tether of about 10 m in orbit, but no result has been published. With the essential piece, the cable, short of a proof of concept, the system scores 2."
trl_history: []
milestones:
  - date: 1960-07-31
    text: "Yuri Artsutanov proposes in Komsomolskaya Pravda ('To the Cosmos by Electric Train') lowering a cable from a geostationary satellite to the ground, the first published tension-cable space elevator."
    status: done
    sources: ["https://isec.org/history"]
  - date: 1975-09-01
    text: "Jerome Pearson's 'The orbital tower', in Acta Astronautica, introduces the space elevator to the spaceflight engineering literature as a launcher using the Earth's rotational energy."
    status: done
    sources: ["https://doi.org/10.1016/0094-5765(75)90021-1"]
  - date: 2003-03-01
    text: "Bradley Edwards's NASA Institute for Advanced Concepts final report presents what it describes as the first real quantitative evaluation of a space elevator, and concludes that everything except the high-strength cable material, about 100 GPa, could be built with existing technology."
    status: done
    sources: ["https://nss.org/wp-content/uploads/2017/07/2003-Space-Elevator-NIAC-phase2.pdf"]
  - date: 2018-05-14
    text: "Tsinghua University researchers report centimetre-long carbon nanotube bundles with a tensile strength of 80 GPa (43 GPa on an engineering basis), far stronger than any other fibre."
    status: done
    sources: ["https://www.nature.com/articles/s41565-018-0141-z"]
  - date: 2018-09-22
    text: "Japan launches Shizuoka University's STARS-Me to the International Space Station, two cubesats joined by a tether about ten metres long, to test a motorised climber moving along a cable in space; no result has been published."
    status: done
    sources: ["https://www.sciencenews.org/article/japan-has-launched-miniature-space-elevator", "https://www.space.com/42041-space-elevator-test-stars-me.html"]
  - text: "A carbon nanotube or graphene cable at least one kilometre long is made with a tensile strength above 50 GPa."
    status: pending
  - text: "A tether anchored to Earth's surface and reaching beyond geostationary orbit (about 35,800 km up) carries a climber with a payload from the ground to orbit."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2100
    median: 2175
    high: 2300
    definition_notes: "No public forecast gives a usable date range. Manifold's decade market (https://manifold.markets/SimoneRomeo/in-what-decade-will-we-have-space-e, 28 traders, retrieved 2026-11-26) gives 2030s 11%, 2040s 14%, 2050s 15% and 'later or never' 59%, so its median falls in the open-ended last bucket. Manifold binary markets disagree: 54% before 2075 (https://manifold.markets/RemNi/will-earth-have-a-space-elevator-be-a1d0a1f956a2, 18 traders) but only 29% by 2150 (https://manifold.markets/Tomoffer/will-we-have-a-terrestrial-space-el-920d2bf3bb3c, 32 traders). The estimate assumes the kilometre-scale cable arrives late this century at the earliest, followed by decades of building a 100,000 km structure. Edwards's 2003 estimate of an elevator in 15 years has already failed."
---

A space elevator is a cable stretched from the equator to a counterweight beyond geostationary orbit, held taut by the Earth's spin, which climbers ride to space instead of burning rockets. If it worked, it could cut the cost of reaching orbit far below that of rockets, and open the solar system to freight on a scale rockets can't match.

The physics has been understood since the 1960s, and Bradley Edwards's 2003 NASA study found that almost every part could be built with known technology. The exception is the cable. It must be much stronger for its weight than steel or Kevlar, and carbon nanotubes are the leading candidate. The best nanotube bundles approach the needed strength, but only over a few centimetres; long fibres lose most of it to defects. Small tether experiments in orbit, like Japan's STARS-Me, aim to test climbers on a scale of metres. The next real step is a strong cable a kilometre long, and the full elevator lies well beyond that.
