"use client";

import { motion } from "framer-motion";

const stages = [
  {
    number: "Stage 01",
    verb: "Map",
    tagline: "Define your origination universe.",
    bullets: [
      "Every account, every decision-maker, every viable buyer in your total addressable market",
      "ICP definition down to title, company size, industry, geography",
      "Triple-verified contact data, enriched before any outreach begins",
      "Living database, refreshed continuously as your market shifts",
    ],
  },
  {
    number: "Stage 02",
    verb: "Engage",
    tagline: "Cold email outbound at scale, in your firm's voice.",
    bullets: [
      "Dedicated email infrastructure — domains, mailboxes, deliverability monitoring, all owned and operated by us",
      "Copywriting that reads like a researched, human message — never templated, never generic",
      "Multi-touch sequencing calibrated to your buyer's cadence, tested and iterated weekly",
      "Volume that no in-house team can match, with the precision of one-to-one outreach",
    ],
  },
  {
    number: "Stage 03",
    verb: "Convert",
    tagline: "Qualified conversations on your calendar.",
    bullets: [
      "Reply handling and objection management before anything reaches your time",
      "Qualification calls to filter intent, fit, and budget",
      "Direct calendar integration — booked meetings, not unread leads",
      "Weekly reporting with conversation-level detail and pipeline visibility",
    ],
  },
];

export default function Approach() {
  return (
    <section id="approach" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-eyebrow text-[#666666] mb-4">02 / Approach</p>
          <h2 className="font-serif text-h2 text-[#0A0A0A] mb-6">
            An outbound engine your firm doesn&apos;t have time to build.
          </h2>
          <p className="text-body text-[#666666] max-w-prose">
            One specialized service, engineered around how B2B buyers actually buy. We don&apos;t run a generic outbound playbook — we operate cold email infrastructure at a scale and precision that produces qualified conversations on your calendar, not lead lists in your inbox.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-[#E5E5E0]">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.verb}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${index === 0 ? "" : "md:pl-8"} ${index === 2 ? "" : "md:pr-8"}`}
            >
              <p className="text-eyebrow text-[#1A2332] mb-3">{stage.number}</p>
              <h3 className="font-serif text-4xl md:text-5xl text-[#0A0A0A] mb-2">
                {stage.verb}
              </h3>
              <p className="text-body text-[#666666] mb-6">{stage.tagline}</p>
              <ul className="space-y-4">
                {stage.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-sm text-[#666666] border-t border-[#E5E5E0] pt-4"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
