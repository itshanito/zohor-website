"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    tag: "Enterprise Deal",
    result: "$110,000",
    client: "Signed with a Quant Trading Firm in NYC",
    description:
      "Secured an enterprise deal with a quant firm that accounts for roughly 10% of all US trading volume. Cold email disrupted their ongoing competitor evaluation mid-process. They switched to our market intelligence platform.",
    highlight: "Started from zero contact. CFO engaged via cold outreach.",
  },
  {
    tag: "Corporate Subscriptions",
    result: "$162,000",
    client: "Global Media Brand",
    description:
      "$162,000 in closed-won revenue across Big Four accounting, major tech, and financial services. Cold outreach penetrated accounts that traditional media sales had failed to crack.",
    highlight: "New corporate buyers from firms the client had never reached across the Middle East, North America and APAC.",
  },
  {
    tag: "Enterprise Pipeline",
    result: "Enterprise Penetration",
    client: "Global Insurance Intelligence Provider",
    description:
      "First-month enterprise meetings with untapped global accounts. Cold outbound opened doors to multinational firms across sectors they hadn't previously reached — no warm intros, no existing relationships.",
    highlight: "Booked: Analog Devices, Orbia, Al Khaleej Sugar Co, SLB.",
  },
  {
    tag: "Product Adoption",
    result: "150+ Enterprise Trials",
    client: "AI Tool Launch, Major News Provider",
    description:
      "Drove early adoption for a new B2B AI chatbot. Cold email generated the critical mass of users needed to validate the product commercially.",
    highlight: "Trialists included Blackstone, Capgemini, PwC, Disney.",
  },
];

export default function Results() {
  return (
    <section id="results" className="section-padding bg-[#FAFAF7]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-eyebrow text-[#666666] mb-4">03 / Results</p>
          <h2 className="font-serif text-h2 text-[#0A0A0A] mb-6">
            Proof. Not promises.
          </h2>
          <p className="text-body text-[#666666] max-w-prose">
            Representative engagements. Specific outcomes from outbound done at the right altitude.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.tag}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-[#E5E5E0] p-6 md:p-8"
            >
              <p className="text-eyebrow text-[#1A2332] mb-4">{study.tag}</p>
              <p className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-2">
                {study.result}
              </p>
              <p className="text-sm text-[#666666] mb-6">{study.client}</p>
              <p className="text-body text-[#666666] mb-6">{study.description}</p>
              <div className="border-t border-[#E5E5E0] pt-4">
                <p className="text-sm text-[#0A0A0A]">{study.highlight}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
