"use client";

const footerLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 bg-white border-t border-[#E5E5E0]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <a href="#" className="font-serif text-xl text-[#0A0A0A] mb-4 md:mb-0">
            zohor
          </a>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#666666] hover:text-[#0A0A0A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="text-sm text-[#666666] mb-8">
          Outbound origination for B2B companies.
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-[#E5E5E0]">
          <p className="text-xs text-[#666666] mb-4 md:mb-0">
            © {new Date().getFullYear()} zohor. All rights reserved.
          </p>
          <a
            href="mailto:hani@zohor.io"
            className="text-xs text-[#666666] hover:text-[#0A0A0A] transition-colors"
          >
            hani@zohor.io
          </a>
        </div>
      </div>
    </footer>
  );
}
