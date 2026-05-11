"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF7]/80 backdrop-blur-md border-b border-[#E5E5E0]"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="font-serif text-xl md:text-2xl text-[#0A0A0A]">
            zohor
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#666666] hover:text-[#0A0A0A] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0A0A0A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="https://calendly.com/haniabreurashed/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm border border-[#0A0A0A] px-4 py-2 hover:bg-[#0A0A0A] hover:text-[#FAFAF7] transition-colors"
          >
            Schedule a consultation
          </a>
        </div>
      </div>
    </nav>
  );
}
