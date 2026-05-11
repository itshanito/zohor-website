"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "The SDR you can't justify.",
    description:
      "$150K+ all-in. Six-month ramp. And the risk they don't work out. The seat stays empty, or it gets filled and churns. Origination falls back on founders and partners who should be closing, not prospecting.",
    metric: "Cost",
    value: "$150K+",
  },
  {
    number: "02",
    title: "The inbound engine you don't have time to build.",
    description:
      "Content, SEO, brand, paid acquisition — 18 to 24 months before any of it produces meaningful pipeline. Your runway doesn't wait that long, and your competitors aren't waiting either.",
    metric: "Timeline",
    value: "18–24 mo",
  },
  {
    number: "03",
    title: "The network that plateaued.",
    description:
      "Referrals and warm intros got you here. They won't get you to the next revenue tier. After a few years, the Rolodex is tapped. There's no second channel and no obvious way to build one.",
    metric: "Ceiling",
    value: "5–10 yrs",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="section-padding bg-[#FAFAF7]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-eyebrow text-[#666666] mb-4">01 / The Problem</p>
          <h2 className="font-serif text-h2 text-[#0A0A0A] mb-6">
            Three structural forces that close the door on pipeline.
          </h2>
          <p className="text-body text-[#666666] max-w-prose">
            Most B2B companies hit the same ceiling. Founder-led origination plateaus, in-house hiring is too expensive and too slow, and inbound takes years to compound. The result — deals that should be yours, going to firms with better coverage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-[#E5E5E0] pt-6"
            >
              <p className="text-meta text-[#1A2332] mb-4">{pillar.number}</p>
              <h3 className="font-serif text-h3 text-[#0A0A0A] mb-4">
                {pillar.title}
              </h3>
              <p className="text-body text-[#666666] mb-8">{pillar.description}</p>
              <div className="border-t border-[#E5E5E0] pt-4">
                <p className="text-eyebrow text-[#666666] mb-1">{pillar.metric}</p>
                <p className="font-serif text-xl text-[#0A0A0A]">{pillar.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-serif italic text-center text-[#1A2332] text-lg md:text-xl max-w-3xl mx-auto"
        >
          — Root cause: no structured, repeatable origination function that runs independent of your founders&apos; time and network.
        </motion.p>
      </div>
    </section>
  );
}
