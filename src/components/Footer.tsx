"use client";

import React from "react";
import { IDENTITY } from "@/data/experience";

const FOOTER_NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="header-wrap border-t border-[#1f2124]/15 py-10 text-[#1f2124]">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
        {/* Left: Boxed Monogram, Name & Philosophy */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <a
            href="#top"
            onClick={handleBackToTop}
            aria-label="Back to top"
            className="font-mono-tech inline-flex h-9 w-10 items-center justify-center border border-[#1f2124] bg-[#1f2124] text-[12px] font-medium tracking-[0.08em] text-[#eee9df] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464]"
          >
            MA
          </a>
          <div>
            <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.1em] text-[#1f2124]">
              © {currentYear} {IDENTITY.fullName}
            </p>
            <p className="font-mono-tech mt-0.5 text-[10px] uppercase tracking-[0.08em] text-[#52565c]">
              {IDENTITY.philosophy}
            </p>
          </div>
        </div>

        {/* Middle: Section Navigation Links */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-5 sm:gap-7"
        >
          {FOOTER_NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#1f2124]/80 transition-colors hover:text-[#2b5464]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: External Profiles, Email & Back to Top */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={IDENTITY.contact.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#1f2124] transition-colors hover:text-[#2b5464]"
          >
            Resume ↗
          </a>
          <a
            href={`mailto:${IDENTITY.contact.emailPlaceholder}`}
            className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#1f2124] transition-colors hover:text-[#2b5464]"
          >
            Email ↗
          </a>
          <a
            href={IDENTITY.contact.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#1f2124] transition-colors hover:text-[#2b5464]"
          >
            LinkedIn ↗
          </a>
          <a
            href={IDENTITY.contact.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#1f2124] transition-colors hover:text-[#2b5464]"
          >
            GitHub ↗
          </a>
          <a
            href="#top"
            onClick={handleBackToTop}
            className="font-mono-tech border border-[#1f2124]/30 bg-[#eee9df] px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] text-[#1f2124] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464] hover:text-[#eee9df]"
          >
            Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
