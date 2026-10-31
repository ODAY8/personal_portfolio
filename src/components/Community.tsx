"use client";

import React from "react";
import { Users } from "lucide-react";
import { COMMUNITY_INITIATIVE, IDENTITY } from "@/data/experience";

export default function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="editorial-wrap border-b border-[#1f2124]/15 py-24 md:py-32"
    >
      {/* Section Heading */}
      <div className="mb-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="flex items-center gap-4 lg:col-span-4">
          <span className="section-index-badge">06</span>
          <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
            Community &amp; Initiatives
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2
            id="community-heading"
            className="m-0 text-[clamp(36px,4.8vw,68px)] leading-[0.95] font-semibold tracking-[-0.05em] text-[#1f2124]"
          >
            Technology should be{" "}
            <em className="font-serif-editorial font-normal italic text-[#2b5464]">
              accessible to everyone.
            </em>
          </h2>
        </div>
      </div>

      {/* Focused Editorial Initiative Showcase */}
      <article className="grid grid-cols-1 gap-8 border border-[#1f2124]/30 bg-[#eee9df] p-8 text-[#1f2124] sm:p-12 lg:grid-cols-12 lg:items-center lg:gap-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1f2124]/15 pb-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center bg-[#2b5464] text-[#eee9df]">
              <Users className="h-5 w-5" />
            </span>
            <div>
              <span className="font-mono-tech block text-[10px] uppercase tracking-[0.14em] text-[#2b5464]">
                COMMUNITY INITIATIVE
              </span>
              <span className="font-mono-tech text-[11px] text-[#52565c]">
                Founded by {IDENTITY.fullName}
              </span>
            </div>
          </div>

          <div>
            <h3 className="m-0 text-[42px] font-bold tracking-[-0.05em] text-[#1f2124] sm:text-[50px]">
              {COMMUNITY_INITIATIVE.name}
            </h3>
            <p className="font-serif-editorial mt-2 text-[24px] italic text-[#2b5464]">
              &ldquo;{COMMUNITY_INITIATIVE.tagline}&rdquo;
            </p>
          </div>
        </div>

        <div className="space-y-6 lg:col-span-8">
          <div className="space-y-4 text-[15px] leading-[1.75] text-[#2c3035] sm:text-[16px]">
            {COMMUNITY_INITIATIVE.paragraphs.map((p, idx) => (
              <p key={idx} className="m-0">
                {p}
              </p>
            ))}
          </div>

          <div className="border-t border-[#1f2124]/15 pt-5">
            <p className="font-mono-tech mb-3 text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
              Initiative Focus Areas
            </p>
            <div className="flex flex-wrap gap-2">
              {COMMUNITY_INITIATIVE.focusAreas.map((area) => (
                <span
                  key={area}
                  className="font-mono-tech border border-[#1f2124]/20 bg-[#e6e0d4] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.08em] text-[#1f2124]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
