"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="section-padding bg-[#FAFAF7]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-eyebrow text-[#666666] mb-6">
            Accepting new engagements
          </p>
          <h2 className="font-serif text-h2 text-[#0A0A0A] mb-6">
            Build your origination function.
          </h2>
          <p className="text-body text-[#666666] mb-8">
            30-minute consultation. No deck, no pitch. We&apos;ll tell you within the call whether we&apos;re a fit.
          </p>
          <a
            href="https://calendly.com/haniabreurashed/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#0A0A0A] text-[#FAFAF7] text-sm hover:bg-[#1A2332] transition-colors mb-12"
          >
            Schedule a consultation →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 md:divide-x divide-[#E5E5E0] border-t border-[#E5E5E0] pt-8 max-w-md mx-auto"
        >
          <div className="text-center md:pr-8">
            <p className="text-eyebrow text-[#666666] mb-1">Response</p>
            <p className="text-sm text-[#0A0A0A]">within 24 hours</p>
          </div>
          <div className="text-center md:pl-8">
            <p className="text-eyebrow text-[#666666] mb-1">Location</p>
            <p className="text-sm text-[#0A0A0A]">Remote, global</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
