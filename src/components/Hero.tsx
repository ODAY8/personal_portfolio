"use client";

import React from "react";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { IDENTITY } from "@/data/experience";
import { MARQUEE_ITEMS } from "@/data/skills";

/**
 * Bespoke Swiss-architectural abstract technology & systems blueprint artwork
 * tailored specifically for Mohamed Abdirahman's AI & Systems focus.
 * Uses a calm, eye-comfortable warm stone & slate-teal palette.
 */
function AbstractTechArtwork() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full overflow-hidden border border-[#1f2124]/20 bg-[#eee9df] p-4"
    >
      {/* Top technical header bar */}
      <div className="font-mono-tech mb-3 flex items-center justify-between border-b border-[#1f2124]/12 pb-2 text-[9px] uppercase tracking-[0.12em] text-[#52565c]">
        <span className="flex items-center gap-2 text-[#1f2124]">
          <span className="inline-block h-2 w-2 bg-[#2b5464]" />
          SYS.ARCH // INTELLIGENT TOPOLOGY
        </span>
        <span>REV 2026.04</span>
      </div>

      {/* Vector Abstract Systems & Neural Geometry Canvas */}
      <div className="relative h-[152px] w-full overflow-hidden border border-[#1f2124]/12 bg-[#e6e0d4]">
        <svg
          viewBox="0 0 440 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="tech-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="#1f2124"
                strokeOpacity="0.06"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="440" height="160" fill="url(#tech-grid)" />

          {/* Architectural coordinate axes */}
          <line
            x1="0"
            y1="80"
            x2="440"
            y2="80"
            stroke="#1f2124"
            strokeOpacity="0.14"
            strokeDasharray="3 3"
          />
          <line
            x1="220"
            y1="0"
            x2="220"
            y2="160"
            stroke="#1f2124"
            strokeOpacity="0.14"
            strokeDasharray="3 3"
          />

          {/* Left: Isometric System Stack */}
          <g transform="translate(24, 28)">
            <polygon
              points="48,6 92,26 48,46 4,26"
              fill="#1f2124"
              stroke="#1f2124"
              strokeWidth="1.2"
            />
            <polygon
              points="48,28 92,48 48,68 4,48"
              fill="#2b5464"
              fillOpacity="0.92"
              stroke="#1f2124"
              strokeWidth="1.2"
            />
            <polygon
              points="48,50 92,70 48,90 4,70"
              fill="#eee9df"
              stroke="#1f2124"
              strokeWidth="1.2"
            />
            <line
              x1="48"
              y1="6"
              x2="48"
              y2="90"
              stroke="#8c4a27"
              strokeWidth="1"
              strokeDasharray="2 2"
            />
          </g>

          {/* Center: Concentric Inference & Architecture Core */}
          <g transform="translate(220, 80)">
            <circle
              cx="0"
              cy="0"
              r="52"
              stroke="#1f2124"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            <circle
              cx="0"
              cy="0"
              r="37"
              stroke="#2b5464"
              strokeOpacity="0.55"
              strokeWidth="1.2"
              strokeDasharray="4 3"
            />
            <circle cx="0" cy="0" r="20" fill="#1f2124" />
            <circle cx="0" cy="0" r="5.5" fill="#7aa6b8" />
            <circle
              cx="37"
              cy="-10"
              r="4.5"
              fill="#8c4a27"
              stroke="#eee9df"
              strokeWidth="1"
            />
            <circle
              cx="-31"
              cy="20"
              r="4"
              fill="#eee9df"
              stroke="#1f2124"
              strokeWidth="1.2"
            />
          </g>

          {/* Signal & Pipeline Pathways */}
          <path
            d="M 116 54 C 152 54, 166 80, 200 80"
            stroke="#1f2124"
            strokeWidth="1.5"
          />
          <path
            d="M 116 76 C 152 76, 166 94, 200 86"
            stroke="#2b5464"
            strokeWidth="1.4"
          />
          <path
            d="M 240 80 C 280 80, 298 44, 336 44"
            stroke="#1f2124"
            strokeWidth="1.4"
          />
          <path
            d="M 240 84 C 280 84, 298 112, 336 112"
            stroke="#1f2124"
            strokeWidth="1.2"
            strokeDasharray="3 2"
          />

          {/* Right: Structured Service & Telemetry Modules */}
          <g transform="translate(336, 26)">
            <rect
              x="0"
              y="4"
              width="80"
              height="30"
              fill="#1f2124"
              stroke="#1f2124"
              strokeWidth="1"
            />
            <rect x="8" y="15" width="7" height="7" fill="#7aa6b8" />
            <line x1="21" y1="15" x2="68" y2="15" stroke="#eee9df" strokeWidth="2" />
            <line x1="21" y1="23" x2="50" y2="23" stroke="#7aa6b8" strokeWidth="2" />

            <rect
              x="0"
              y="46"
              width="80"
              height="24"
              fill="#eee9df"
              stroke="#1f2124"
              strokeWidth="1"
            />
            <line x1="10" y1="58" x2="52" y2="58" stroke="#1f2124" strokeWidth="2" />
            <rect x="60" y="53" width="12" height="10" fill="#2b5464" />

            <rect
              x="0"
              y="78"
              width="80"
              height="24"
              fill="#eee9df"
              stroke="#1f2124"
              strokeWidth="1"
            />
            <line x1="10" y1="90" x2="44" y2="90" stroke="#1f2124" strokeWidth="2" />
            <rect x="60" y="85" width="12" height="10" fill="#8c4a27" />
          </g>
        </svg>
      </div>

      {/* Bottom technical caption strip */}
      <div className="font-mono-tech mt-2.5 flex items-center justify-between text-[9px] uppercase tracking-[0.09em] text-[#52565c]">
        <span>AI PIPELINES · BACKEND · MOBILE</span>
        <span className="font-medium text-[#2b5464]">SYSTEMS BLUEPRINT</span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-title"
        className="editorial-wrap relative min-h-[calc(100vh-80px)] pt-12 pb-20 md:pt-20 md:pb-28"
      >
        {/* Top Architectural Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1f2124]/15 pb-5">
          <div className="flex flex-wrap items-center gap-4">
            <p className="eyebrow-line m-0 text-[#1f2124]">
              {IDENTITY.heroEyebrow}
            </p>
            <span className="font-mono-tech inline-flex items-center gap-1.5 border border-[#1f2124]/20 bg-[#eee9df] px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-[#1f2124]/85">
              <MapPin className="h-3 w-3 text-[#2b5464]" aria-hidden="true" />
              {IDENTITY.location}
            </span>
          </div>

          <div className="font-mono-tech hidden items-center gap-6 text-[10px] uppercase tracking-[0.12em] text-[#52565c] lg:flex">
            <span>DISCIPLINE // SOFTWARE &amp; AI ENGINEERING</span>
            <span className="text-[#1f2124]">PORTFOLIO EDITION 2026</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <h1
          id="hero-title"
          className="mt-9 mb-10 max-w-[1140px] text-[clamp(40px,6.4vw,96px)] leading-[0.95] font-semibold tracking-[-0.05em] text-[#1f2124]"
        >
          I turn ideas into{" "}
          <em className="font-serif-editorial font-normal italic text-[#2b5464]">
            intelligent software
          </em>{" "}
          and build products that solve{" "}
          <em className="font-serif-editorial font-normal italic">
            real-world problems.
          </em>
        </h1>

        {/* Identity Strip + Editorial Bottom Grid */}
        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-[#1f2124]/15 pt-9 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Abstract Technology Artwork + Professional Identity & Philosophy */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-5">
            <AbstractTechArtwork />

            <div className="flex flex-col gap-4 border-l-2 border-[#2b5464] pl-4">
              <div>
                <p className="font-mono-tech mb-1 text-[10px] uppercase tracking-[0.14em] text-[#52565c]">
                  Professional Positioning
                </p>
                <p className="font-mono-tech m-0 text-[12px] font-medium uppercase tracking-[0.06em] text-[#1f2124]">
                  {IDENTITY.title}
                </p>
              </div>

              <div className="inline-flex w-fit items-center gap-2 border border-[#1f2124]/20 bg-[#dbd4c6] px-3.5 py-1.5 text-[#1f2124]">
                <span className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.09em]">
                  &ldquo;{IDENTITY.philosophy}&rdquo;
                </span>
              </div>
            </div>
          </div>

          {/* Right Editorial Column: Supporting Text, CTAs, and Scroll Indicator */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-7 lg:flex-row lg:items-end lg:pl-6">
            <div className="flex h-full max-w-[540px] flex-col justify-between">
              <div>
                <p className="m-0 text-[17px] leading-[1.7] font-medium text-[#1f2124] md:text-[18.5px]">
                  {IDENTITY.heroSupporting}
                </p>
                <p className="mt-4 text-[14.5px] leading-[1.75] text-[#52565c]">
                  {IDENTITY.introduction[0]} {IDENTITY.introduction[1]}
                </p>
              </div>

              {/* Primary & Secondary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="font-mono-tech group inline-flex min-h-[48px] items-center justify-between gap-5 border border-[#1f2124] bg-[#1f2124] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#eee9df] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2b5464] hover:bg-[#2b5464]"
                >
                  <span>Explore My Work</span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href="#contact"
                  className="font-mono-tech group inline-flex min-h-[48px] items-center justify-between gap-4 border border-[#1f2124] bg-[#eee9df] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.1em] text-[#1f2124] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  <span>Get In Touch</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            {/* Architectural Vertical Scroll Pill */}
            <a
              href="#work"
              aria-label="Scroll to selected work"
              className="group flex h-[60px] w-[60px] shrink-0 items-center justify-center border border-[#1f2124]/30 bg-[#eee9df] text-[#1f2124] transition-all duration-250 hover:translate-y-1 hover:border-[#1f2124] hover:bg-[#1f2124] hover:text-[#eee9df]"
            >
              <ArrowDown className="h-5 w-5 stroke-[1.5]" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Straight Architectural Specification Ticker */}
      <section
        aria-label="Core engineering domains"
        className="w-full overflow-hidden border-t border-b border-[#1f2124]/25 bg-[#dbd4c6] text-[#1f2124]"
      >
        <div className="marquee-track-anim font-mono-tech text-[11px] font-medium tracking-[0.14em] uppercase">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <React.Fragment key={`${item}-${idx}`}>
              <span>{item}</span>
              <span
                className="inline-block h-1.5 w-1.5 bg-[#2b5464]"
                aria-hidden="true"
              />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
}
