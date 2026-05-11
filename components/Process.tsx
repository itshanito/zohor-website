"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    time: "Day 1",
    title: "Infrastructure",
    description:
      "Domains registered, mailbox warmup begins. Runs in parallel to every other workstream from hour one.",
  },
  {
    number: "02",
    time: "Week 1",
    title: "Strategy",
    description:
      "Kickoff call. Lock in ICP, positioning, target criteria, and messaging direction.",
  },
  {
    number: "03",
    time: "Week 2",
    title: "Build",
    description:
      "Lists assembled and verified. Copy written. Sequences loaded. Final review with you before launch.",
  },
  {
    number: "04",
    time: "Week 3",
    title: "Live",
    description:
      "Outbound goes live. Replies start landing. First qualified conversations get booked.",
  },
  {
    number: "05",
    time: "Week 4+",
    title: "Optimize",
    description:
      "Weekly reporting, weekly iteration. Messaging, targeting, and sequence adjustments based on live reply data.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-eyebrow text-[#666666] mb-4">04 / Process</p>
          <h2 className="font-serif text-h2 text-[#0A0A0A] mb-6">
            From intake to booked conversations.
          </h2>
          <p className="text-body text-[#666666] max-w-prose">
            A transparent cadence. No black box, no mystery, no &quot;trust the process.&quot;
          </p>
        </motion.div>

        {/* Desktop: Horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-5 gap-0 border-t border-[#E5E5E0]">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`pt-6 ${index < steps.length - 1 ? "border-r border-[#E5E5E0] pr-6" : ""} ${index > 0 ? "pl-6" : ""}`}
            >
              <p className="text-meta text-[#1A2332] mb-1">{step.number}</p>
              <p className="text-eyebrow text-[#666666] mb-3">{step.time}</p>
              <h3 className="font-serif text-xl text-[#0A0A0A] mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-[#666666]">{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-[#E5E5E0] py-6 flex gap-6"
            >
              <div className="flex-shrink-0 w-16">
                <p className="text-meta text-[#1A2332]">{step.number}</p>
                <p className="text-xs text-[#666666] uppercase tracking-wider">
                  {step.time}
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-[#0A0A0A] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#666666]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
