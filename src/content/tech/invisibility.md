---
name: Invisibility
kind: future
definition: "A wearable or portable cloak, passive or active, hides a person-sized object from human observers in daylight across the visible spectrum and from all horizontal viewing angles, so that in an independent, pre-registered test observers a few metres away cannot tell when the object is present better than chance."
requires: [utility-fog]
icon: {prompt: "A shimmering human-shaped outline in a sunlit forest, the trees behind seen clearly through it with faint rainbow distortion at its edges"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "Each part of the problem has a lab proof of concept, but none works in full: a metamaterial cloak hid an object from microwaves in two dimensions (2006); active optical camouflage made a retroreflective coat look transparent from one viewpoint (2003); and ray-optics cloaks hid a cat and a fish from the eye (2013) and scale to large objects, but only for limited viewing directions (2013, 2014). Physical bounds published in 2016 rule out passive cloaks that fully suppress a large object's scattering across visible light, so an all-angle person-sized cloak would need either an approach that fools the eye without hiding the object from all measurements or an active design, and no such system has been integrated. Lab demonstrations of the core effects give a 3."
trl_history: []
milestones:
  - date: 2003-10-01
    text: "Inami, Kawakami and Tachi present 'optical camouflage' at the ISMAR 2003 conference in Tokyo: a coat of retroreflective material onto which a projector casts the background, so the wearer looks transparent to an observer at the matching viewpoint."
    status: done
    sources: ["https://star.rcast.u-tokyo.ac.jp/old/content/files/pdf/conference/workshop/29.%20Optical%20Camouflage%20Using%20Retro-reflective%20Projection%20Technology.pdf", "https://doi.org/10.1109/ISMAR.2003.1240754"]
  - date: 2006-05-25
    text: "Pendry, Schurig and Smith publish in Science the theory of transformation optics, showing how metamaterials could guide electromagnetic waves around a region and cloak it; Leonhardt publishes a similar scheme the same day."
    status: done
    sources: ["https://pubmed.ncbi.nlm.nih.gov/16728597/", "https://www.sciencenews.org/article/invisibility-uncloaked"]
  - date: 2006-10-19
    text: "A Duke University team working with Pendry demonstrates the first working cloak, a metamaterial device less than five inches across that hides an object from a narrow beam of microwaves, in two dimensions only."
    status: done
    sources: ["https://today.duke.edu/2006/10/cloakdemo.html", "https://doi.org/10.1126/science.1133628"]
  - date: 2013-10-24
    text: "Chen and colleagues report in Nature Communications ray-optics cloaks that drop the requirement to preserve the phase of light, which the eye cannot see, and use them to hide a cat and a fish from human observers in natural light."
    status: done
    sources: ["https://www.nature.com/articles/ncomms3652"]
  - date: 2014-11-18
    text: "Choi and Howell at the University of Rochester publish a cloak built from ordinary lenses that works across visible light, scales to large objects and hides them over a range of viewing directions, but only in the small-angle (paraxial) limit and with edge effects."
    status: done
    sources: ["https://arxiv.org/abs/1409.4705", "https://doi.org/10.1364/OE.22.029465"]
  - date: 2016-07-05
    text: "Monticone and Alù publish in Optica physical bounds on passive cloaking, showing that broadband suppression of scattering gets drastically harder as objects grow relative to the wavelength, and that hiding a human body this way from visible light is essentially impossible."
    status: done
    sources: ["https://www.sciencedaily.com/releases/2016/07/160705160214.htm", "https://doi.org/10.1364/OPTICA.3.000718"]
  - text: "A cloak hides a person-sized object in visible light from human observers over a full 360 degrees of horizontal viewing angles in an independently replicated experiment."
    status: pending
  - text: "A wearable or portable cloak, passive or active, hides a person-sized object from human observers in daylight across the visible spectrum and from all horizontal viewing angles, so that in an independent, pre-registered test observers a few metres away cannot tell when the object is present better than chance."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2070
    median: 2120
    high: 2250
    definition_notes: "No forecast market or expert survey asks this question; a Manifold search found no invisibility-cloak markets. Ray-optics cloaks already hide animals and large objects from the eye, but only for limited viewing directions, and active camouflage works only from a matched viewpoint. Published bounds rule out passive cloaks that fully suppress a person-sized object's scattering across visible light, though they do not rule out ray-optics cloaks that fool the eye at limited angles. Extending either approach to every horizontal angle in a wearable device is the hard, undemonstrated step. The wide range reflects real doubt that the test can be met at all."
---

An invisibility cloak would bend or recreate light so that an observer sees straight through a hidden object to the scene behind it. Physicists showed in 2006 that specially engineered materials could, in principle, steer light around a region of space, and the idea moved quickly from science fiction to the lab. Beyond the obvious military uses, the same ideas promise new kinds of lenses and antennas that radio waves pass around.

Progress has been real but partial. The first metamaterial cloak hid a small object from microwaves, and only in two dimensions. Simpler cloaks built from glass and lenses, which ignore properties of light the eye cannot see, have since hidden a cat and a fish and can scale to large objects, but each works only from a limited range of directions. Projection-based camouflage can make a coat look transparent, but from one viewpoint. Physical limits rule out passive materials that hide a person from every kind of measurement across visible light, so a cloak that fools the eye from every side, perhaps with powered, active parts, remains to be shown.
