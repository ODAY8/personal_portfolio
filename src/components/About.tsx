"use client";

import React from "react";
import { IDENTITY } from "@/data/experience";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-[#1f2124]/15 bg-[#ded7c8] py-24 text-[#1f2124] md:py-36"
    >
      <div className="editorial-wrap">
        {/* Top Section Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Section Label */}
          <div className="flex items-start gap-4 lg:col-span-4">
            <span className="section-index-badge">01</span>
            <div>
              <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
                About me
              </p>
              <p className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.1em] text-[#2b5464]">
                Identity &amp; Engineering Philosophy
              </p>
            </div>
          </div>

          {/* Main Lead Heading */}
          <div className="lg:col-span-8">
            <h2
              id="about-heading"
              className="m-0 text-[clamp(38px,5vw,70px)] leading-[1.04] font-semibold tracking-[-0.05em] text-[#1f2124]"
            >
              Curiosity drives me.{" "}
              <em className="font-serif-editorial font-normal italic text-[#2b5464]">
                Engineering moves me.
              </em>
            </h2>
          </div>
        </div>

        {/* Detailed Narrative + Personal Profile Grid */}
        <div className="mt-14 grid grid-cols-1 gap-12 border-t border-[#1f2124]/15 pt-12 lg:mt-20 lg:grid-cols-12">
          {/* Left Column: Personal Portrait & Education */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-4">
            <figure className="m-0 overflow-hidden border border-[#1f2124]/20 bg-[#eee9df] p-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#1f2124]/15 bg-[#d5cebe]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/portrait.jpg"
                  alt="Portrait of Mohamed Abdirahman"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="font-mono-tech mt-3 flex items-center justify-between text-[10px] uppercase tracking-[0.09em] text-[#52565c]">
                <span className="text-[#1f2124]">{IDENTITY.fullName}</span>
                <span>{IDENTITY.location}</span>
              </figcaption>
            </figure>

            <div className="border-l-2 border-[#2b5464] bg-[#eee9df] p-5">
              <p className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#2b5464]">
                Academic Foundation
              </p>
              <p className="mt-2 text-[14px] leading-[1.6] text-[#1f2124]">
                {IDENTITY.education}
              </p>
            </div>
          </div>

          {/* Middle Column: Narrative Paragraphs */}
          <div className="flex flex-col justify-between gap-8 lg:col-span-4">
            <div className="space-y-5 text-[15px] leading-[1.8] text-[#2c3035] md:text-[16px]">
              {IDENTITY.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx} className="m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="border-t border-[#1f2124]/15 pt-6">
              <p className="font-mono-tech mb-3 text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                Areas of Engineering Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {IDENTITY.professionalInterests.map((interest) => (
                  <span
                    key={interest}
                    className="font-mono-tech border border-[#1f2124]/20 bg-[#eee9df] px-3 py-1.5 text-[10px] uppercase tracking-[0.06em] text-[#1f2124]"
                  >
                    {interest.replace(/\.$/, "")}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Key Details List */}
          <div className="flex flex-col justify-between lg:col-span-4">
            <div>
              <p className="font-mono-tech mb-4 text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                At a Glance
              </p>
              <div className="divide-y divide-[#1f2124]/15 border-t border-b border-[#1f2124]/15">
                {IDENTITY.aboutDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex flex-col gap-1 py-4"
                  >
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.1em] text-[#2b5464]">
                      {detail.label}
                    </span>
                    <span className="font-mono-tech text-[12px] uppercase tracking-[0.05em] text-[#1f2124]">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-l-2 border-[#2b5464] pl-4">
              <p className="font-serif-editorial m-0 text-[24px] italic leading-[1.2] text-[#1f2124]">
                &ldquo;{IDENTITY.philosophy}&rdquo;
              </p>
              <p className="font-mono-tech mt-2 text-[10px] uppercase tracking-[0.1em] text-[#52565c]">
                — {IDENTITY.fullName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
