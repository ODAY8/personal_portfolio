"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { IDENTITY } from "@/data/experience";

interface NavLinkItem {
  id: string;
  index: string;
  label: string;
  href: string;
}

const NAV_LINKS: NavLinkItem[] = [
  { id: "home", index: "00", label: "Home", href: "#home" },
  { id: "about", index: "01", label: "About", href: "#about" },
  { id: "expertise", index: "02", label: "Expertise", href: "#expertise" },
  { id: "work", index: "03", label: "Work", href: "#work" },
  { id: "experience", index: "04", label: "Experience", href: "#experience" },
  { id: "certificates", index: "05", label: "Certificates", href: "#certificates" },
  { id: "contact", index: "06", label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollPosition = window.scrollY + 220;
      if (window.scrollY < 180) {
        setActiveSection("home");
        return;
      }

      for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
        const item = NAV_LINKS[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setActiveSection(id);

    if (id === "home" || href === "#top" || href === "#home") {
      window.scrollTo({
        top: 0,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
      return;
    }

    const target = document.getElementById(id);
    if (target) {
      const headerOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: shouldReduceMotion ? "auto" : "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#e6e0d4]/95 backdrop-blur-md"
          : "bg-[#e6e0d4]"
      }`}
    >
      <div className="header-wrap flex h-[80px] items-center justify-between border-b border-[#1f2124]/15">
        {/* Left: Architectural Boxed Monogram + Full Name Wordmark */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home", "home")}
          aria-label={`${IDENTITY.fullName}, home`}
          className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1f2124]"
        >
          <span className="font-mono-tech inline-flex h-9 w-10 items-center justify-center border border-[#1f2124] bg-[#1f2124] text-[12px] font-medium tracking-[0.08em] text-[#eee9df] transition-colors group-hover:border-[#2b5464] group-hover:bg-[#2b5464]">
            MA
          </span>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold tracking-[-0.02em] text-[#1f2124]">
              {IDENTITY.fullName}
            </span>
            <span className="font-mono-tech hidden text-[9px] uppercase tracking-[0.12em] text-[#52565c] sm:inline-block">
              SWE · AI · INTERN
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation with Subtle Index Numbers */}
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {NAV_LINKS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                aria-current={isActive ? "page" : undefined}
                className={`font-mono-tech relative py-1.5 text-[11px] font-medium uppercase tracking-[0.09em] transition-colors duration-200 ${
                  isActive
                    ? "text-[#1f2124]"
                    : "text-[#52565c] hover:text-[#1f2124]"
                }`}
              >
                <span className="mr-1 text-[9px] text-[#2b5464]">
                  {item.index}
                </span>
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : "active-nav-underline"}
                    className="absolute right-0 -bottom-0.5 left-0 h-[2px] bg-[#2b5464]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right: Framed Availability Badge + Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact", "contact")}
            className="font-mono-tech hidden items-center gap-2 border border-[#1f2124]/20 bg-[#eee9df] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.09em] text-[#1f2124] transition-colors hover:border-[#2b5464] md:flex"
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#2e6f40]"
              aria-hidden="true"
            />
            <span>Available for work</span>
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] border border-transparent p-2 text-[#1f2124] focus:outline-none focus-visible:border-[#1f2124] lg:hidden"
          >
            <span
              className={`block h-[1.5px] w-5 bg-[#1f2124] transition-transform duration-200 ${
                mobileMenuOpen ? "translate-y-[3.25px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 bg-[#1f2124] transition-transform duration-200 ${
                mobileMenuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation-drawer"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[#1f2124]/20 bg-[#e6e0d4] lg:hidden"
          >
            <nav
              aria-label="Mobile navigation"
              className="header-wrap flex flex-col divide-y divide-[#1f2124]/10 py-4"
            >
              {NAV_LINKS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    aria-current={isActive ? "page" : undefined}
                    className={`font-mono-tech flex items-center justify-between py-3.5 text-[12px] uppercase tracking-[0.1em] ${
                      isActive ? "font-semibold text-[#2b5464]" : "text-[#1f2124]/80"
                    }`}
                  >
                    <span>
                      <span className="mr-2 text-[10px] text-[#2b5464]">
                        {item.index}
                      </span>
                      {item.label}
                    </span>
                    <span aria-hidden="true">→</span>
                  </a>
                );
              })}
              <div className="flex items-center gap-2 pt-4 pb-1">
                <span
                  className="h-2 w-2 rounded-full bg-[#2e6f40]"
                  aria-hidden="true"
                />
                <span className="font-mono-tech text-[10px] uppercase tracking-[0.09em] text-[#52565c]">
                  Available for work · {IDENTITY.location}
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
