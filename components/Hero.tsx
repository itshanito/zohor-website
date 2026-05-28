"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 md:pt-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-none"
        >
          <p className="text-eyebrow text-[#666666] mb-6 md:mb-8">
            B2B Outbound Origination
          </p>

          <h1 className="font-serif text-display text-[#0A0A0A] mb-6 md:mb-8">
            We build and run your outbound engine
            <br className="hidden md:block" />
            <span className="block md:inline"> — without the headcount.</span>
          </h1>

          <p className="text-body text-[#666666] max-w-prose mb-8 md:mb-12">
            Leads, infrastructure, copy, deliverability — we handle the entire cold email system. Full access, full transparency, and only the replies worth your time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24">
            <a
              href="https://calendly.com/haniabreurashed/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0A0A0A] text-[#FAFAF7] text-sm hover:bg-[#1A2332] transition-colors"
            >
              Schedule a consult
            </a>
            <a
              href="#approach"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#0A0A0A] text-[#0A0A0A] text-sm hover:bg-[#0A0A0A] hover:text-[#FAFAF7] transition-colors"
            >
              See our approach
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:divide-x divide-[#E5E5E0] border-t border-[#E5E5E0] pt-8 w-fit"
        >
          <div className="md:pr-8">
            <p className="text-meta text-[#666666] mb-1">30–60d</p>
            <p className="text-sm text-[#0A0A0A]">To first qualified conversation</p>
          </div>
          <div className="md:pl-8">
            <p className="text-meta text-[#666666] mb-1">1:1</p>
            <p className="text-sm text-[#0A0A0A]">Partner-level access</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-6 md:left-20 hidden md:block"
      >
        <span className="text-sm text-[#666666] animate-bob inline-block">— Scroll</span>
      </motion.div>
    </section>
  );
}
