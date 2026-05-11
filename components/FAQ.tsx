"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How is this different from a generic lead-gen agency?",
    answer:
      "We operate a single, specialized service for B2B companies who need structured origination. No paid ads, no SEO, no content marketing, no LinkedIn management. Cold email outbound, done at a level most firms can't operate internally.",
  },
  {
    question: "What size company is this for?",
    answer:
      "B2B companies past product-market fit who have a clearly defined ICP and a meaningful TAM. Typically Series A and beyond, or bootstrapped companies doing $1M+ ARR who are ready to invest in structured pipeline generation.",
  },
  {
    question: "How fast do we see results?",
    answer:
      "First qualified conversations typically land within 30–60 days of kickoff. Infrastructure runs in parallel from day one, so no time is wasted on warmup.",
  },
  {
    question: "Do you work with competitors in the same space?",
    answer:
      "No. We take one client per category to protect positioning and avoid pipeline conflict.",
  },
  {
    question: "What do you need from us to start?",
    answer:
      "A defined ICP, a clear offer, and access to a stakeholder who can sign off on messaging direction. We handle everything else.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-[#E5E5E0]">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-serif text-lg text-[#0A0A0A] pr-8">{question}</span>
        <span className="text-[#666666] text-xl flex-shrink-0">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-body text-[#666666] pb-6">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16"
        >
          <p className="text-eyebrow text-[#666666] mb-4">06 / FAQ</p>
          <h2 className="font-serif text-h2 text-[#0A0A0A]">Common questions.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-[#E5E5E0]"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-[#666666]"
        >
          Something we missed?{" "}
          <a
            href="mailto:hani@zohor.io"
            className="text-[#0A0A0A] underline hover:no-underline"
          >
            hani@zohor.io →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
