"use client";

import { motion } from "framer-motion";

export default function Coverage() {
  return (
    <section className="section-padding bg-[#FAFAF7]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-eyebrow text-[#666666] mb-4">05 / Coverage</p>
          <h2 className="font-serif text-h2 text-[#0A0A0A]">
            Your entire market, on a 90-day cycle.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-body text-[#666666] mb-6">
              We don&apos;t generate leads. We map your full total addressable market, set the optimal outreach cadence for your buyer, and run continuous campaigns that work through your entire TAM every three to nine months.
            </p>
            <p className="text-body text-[#666666] mb-8">
              Every qualified prospect in your market will hear from you. Systematically. Repeatedly. Calibrated to the rhythm of how they actually buy — until they&apos;re ready.
            </p>
            <p className="font-serif text-xl text-[#0A0A0A] border-l-2 border-[#1A2332] pl-6">
              This is what separates an outbound engine from an outbound campaign. Campaigns end. Engines compound.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full">
              <div className="border border-[#E5E5E0] p-8">
                <p className="text-eyebrow text-[#666666] mb-6">TAM Coverage Cycle</p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-[#E5E5E0] pb-4">
                    <span className="text-sm text-[#666666]">Month 1–3</span>
                    <span className="font-serif text-lg text-[#0A0A0A]">33% TAM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#E5E5E0] pb-4">
                    <span className="text-sm text-[#666666]">Month 4–6</span>
                    <span className="font-serif text-lg text-[#0A0A0A]">66% TAM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-[#666666]">Month 7–9</span>
                    <span className="font-serif text-lg text-[#0A0A0A]">100% TAM</span>
                  </div>
                </div>
                <p className="text-xs text-[#666666] mt-6 pt-4 border-t border-[#E5E5E0]">
                  Then repeat. Continuously.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
