"use client";

import React from "react";
import { SKILL_CATEGORIES } from "@/data/skills";

export default function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="editorial-wrap py-24 md:py-36"
    >
      {/* Editorial Section Heading */}
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:mb-20 lg:grid-cols-12">
        <div className="flex items-center gap-4 lg:col-span-4">
          <span className="section-index-badge">02</span>
          <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
            Technical Expertise
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2
            id="expertise-heading"
            className="m-0 text-[clamp(38px,5.2vw,74px)] leading-[0.94] font-semibold tracking-[-0.055em] text-[#1f2124]"
          >
            Tools, technologies &amp;{" "}
            <em className="font-serif-editorial font-normal italic text-[#2b5464]">
              things I build with.
            </em>
          </h2>
          <p className="mt-5 max-w-[600px] text-[15px] leading-[1.7] text-[#52565c]">
            A practical index of languages, frameworks, AI models, and developer
            infrastructure I have worked with and explored while building
            software systems and digital products.
          </p>
        </div>
      </div>

      {/* Architectural 2-Column Specification Matrix */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
        {SKILL_CATEGORIES.map((category, idx) => (
          <article
            key={category.id}
            className={`group flex flex-col justify-between border border-[#1f2124]/18 bg-[#eee9df] p-7 transition-colors duration-200 hover:border-[#2b5464] ${
              idx < 2 ? "lg:col-span-3" : "lg:col-span-2"
            }`}
          >
            <div>
              <div className="flex items-center justify-between border-b border-[#1f2124]/12 pb-3.5">
                <span className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.12em] text-[#2b5464]">
                  DOMAIN // {category.index}
                </span>
                <span className="font-mono-tech text-[10px] text-[#52565c]">
                  {category.technologies.length} TOOLS
                </span>
              </div>

              <h3 className="mt-4 mb-2 text-[21px] font-semibold tracking-[-0.03em] text-[#1f2124]">
                {category.title}
              </h3>
              <p className="m-0 text-[13.5px] leading-[1.6] text-[#52565c]">
                {category.subtitle}
              </p>
            </div>

            {/* Technology Pills */}
            <div className="mt-6 flex flex-wrap items-center gap-2 pt-2">
              {category.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono-tech inline-flex items-center border border-[#1f2124]/20 bg-[#e6e0d4] px-3 py-1.5 text-[10.5px] uppercase tracking-[0.06em] text-[#1f2124] transition-colors duration-200 hover:border-[#2b5464] hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
