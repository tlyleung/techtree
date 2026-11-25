---
name: Zettascale Computing
kind: future
definition: "A single supercomputer sustains at least 10^21 double-precision (FP64) floating-point operations per second on the HPL benchmark, as recorded on the TOP500 list. Peak or low-precision AI figures, and aggregates of separate machines, don't count."
requires: [computers, transistor]
icon: {prompt: "Endless aisles of glowing blue server racks receding into darkness under a vast cathedral-like roof, cooling mist drifting between them"}
trl:
  level: 3
  as_of: 2026-11-26
  rationale: "The architecture is proven at a smaller scale: HPL passed a petaflop in 2008 and an exaflop in 2022, and the fastest machine today, LineShine, sustains 2.2 exaflops, about 1/450 of the target. Cloud AI clusters advertised at up to 16 zettaflops of low-precision peak show that hardware can be assembled at this scale, but not in FP64 or as one sustained run. Even at the best Green500 efficiency (about 73 gigaflops per watt, November 2026), a zettaflop of FP64 would draw about 14 gigawatts, so the essential piece, roughly a hundredfold gain in efficiency, exists only as a concept."
trl_history: []
milestones:
  - date: 2008-06-01
    text: "IBM's Roadrunner at Los Alamos becomes the first supercomputer to pass a petaflop on HPL (1.026 petaflops) on the June 2008 TOP500 list."
    status: done
    sources: ["https://top500.org/lists/top500/2008/06/"]
  - date: 2022-05-30
    text: "Frontier at Oak Ridge National Laboratory tops the TOP500 at 1.102 exaflops, the first true exascale machine on the list."
    status: done
    sources: ["https://top500.org/news/ornls-frontier-first-to-break-the-exaflop-ceiling/", "https://top500.org/lists/top500/2022/06/"]
  - date: 2025-10-14
    text: "Oracle announces OCI Zettascale10, AI clusters of up to 800,000 Nvidia GPUs spanning multiple data centres that it says deliver up to 16 zettaflops of peak AI (low-precision) performance, not a sustained FP64 result."
    status: done
    sources: ["https://www.oracle.com/news/announcement/ai-world-oracle-unveils-next-generation-oci-zettascale10-cluster-for-ai-2025-10-14/"]
  - date: 2025-11-02
    text: "Starcloud-1 carries an Nvidia H100, a data-centre-class GPU, into orbit, the first test of AI computing hardware of this class in space."
    status: done
    sources: ["https://spectrum.ieee.org/nvidia-h100-space"]
  - date: 2026-06-23
    text: "LineShine, at the National Supercomputing Centre in Shenzhen, debuts at No. 1 on the TOP500 with 2.198 exaflops on HPL, drawing about 42 megawatts."
    status: done
    sources: ["https://top500.org/news/lineshine-debuts-no-1-top500-enters-new-global-exascale-era/", "https://top500.org/lists/top500/2026/11/"]
  - text: "Orbital data centres: a commercial service runs AI computing in orbit from a facility drawing at least 1 MW of solar power."
    status: pending
  - text: "Reversible computing: a commercially sold processor using reversible (adiabatic) logic recovers most of its switching energy and beats a conventional chip on the same process node on energy per operation, as independently verified."
    status: pending
  - text: "A single supercomputer sustains at least 10^21 double-precision (FP64) floating-point operations per second on the HPL benchmark, as recorded on the TOP500 list."
    status: pending
    demonstrates: true
forecasts:
  - source: maintainer
    primary: true
    citation: "Drafted with the research agent and approved by the maintainer on 2026-11-26"
    retrieved: 2026-11-26
    low: 2033
    median: 2037
    high: 2045
    definition_notes: "No public forecast gives a date range for FP64 zettascale. The top HPL result took 14 years to grow a thousandfold from a petaflop (June 2008) to an exaflop (May 2022); repeating that from 2022 gives about 2036, and four years after Frontier the top result has only doubled, which argues for later. Gigawatt-scale AI investment could bring it earlier if a giant cluster runs HPL in FP64. Manifold's 'Will any supercomputer reach 1 zettaFLOP before 2035?' (https://manifold.markets/IsaacKing/will-any-supercomputer-reach-1-zett) stood at 75% (24 traders) in November 2026. It is anchored on the TOP500 trend, so it is close to this definition, but it is ahead of this estimate because its description assumes about ten years per thousandfold gain (which from 2022 gives about 2032), against the 14 years actually taken from petaflop to exaflop and the slower pace since; it is also thinly traded, and its wording might let a low-precision claim resolve it."
---

A zettascale computer would perform a thousand billion billion calculations every second, a thousand times more than today's exascale supercomputers. Machines like that would let scientists simulate the climate at the scale of individual clouds, model whole cells atom by atom, and design fusion reactors and materials largely in software.

The phrase is already used loosely: AI clusters built from hundreds of thousands of graphics chips are sold as "zettascale" on the strength of peak, low-precision arithmetic. This page sets the harder bar used for scientific supercomputers, a sustained run of the standard double-precision benchmark. The fastest such result, from China's LineShine in 2026, is 2.2 exaflops, so the field is roughly nine doublings short. Power is the main obstacle: built from today's most efficient chips, a zettascale machine would need as much electricity as a mid-sized country, so it will probably wait for new chip technology, better cooling or radically more efficient designs.
