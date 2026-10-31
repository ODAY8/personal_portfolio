"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Eye, X } from "lucide-react";
import {
  EXPERIENCE_TIMELINE,
  FEATURED_INTERNSHIP,
  IDENTITY,
} from "@/data/experience";

export default function Experience() {
  const [certificateModal, setCertificateModal] = useState<{
    title: string;
    organization: string;
    period: string;
    image: string;
    alt: string;
  } | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && certificateModal) {
        setCertificateModal(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [certificateModal]);

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="editorial-wrap border-t border-[#1f2124]/15 py-24 md:py-36"
    >
      {/* Editorial Section Heading */}
      <div className="mb-14 grid grid-cols-1 items-start gap-8 lg:mb-20 lg:grid-cols-12">
        <div className="flex items-center gap-4 lg:col-span-4">
          <span className="section-index-badge">04</span>
          <div>
            <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
              Internship &amp; Journey
            </p>
            <p className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.08em] text-[#52565c]">
              {IDENTITY.title}
            </p>
          </div>
        </div>

        <div className="lg:col-span-8">
          <h2
            id="experience-heading"
            className="m-0 text-[clamp(40px,5.4vw,76px)] leading-[0.92] font-semibold tracking-[-0.055em] text-[#1f2124]"
          >
            The journey{" "}
            <em className="font-serif-editorial font-normal italic text-[#2b5464]">
              so far.
            </em>
          </h2>
          <p className="mt-5 max-w-[580px] text-[15px] leading-[1.7] text-[#52565c]">
            Professional internship training, research and development, academic
            engineering foundation, and global AI hackathons.
          </p>
        </div>
      </div>

      {/* =====================================================================
          PROMINENT INTERNSHIP EXPERIENCE CARD — SUMMER INTERNSHIP 2026
      ===================================================================== */}
      <article
        aria-labelledby="featured-internship-title"
        className="mb-16 border border-[#1f2124]/30 bg-[#dbd4c6] p-7 text-[#1f2124] sm:p-10 lg:mb-20 lg:p-12"
      >
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Left 4 Cols: Category, Duration & Organization */}
          <div className="flex flex-col justify-between gap-5 border-b border-[#1f2124]/15 pb-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="font-mono-tech bg-[#2b5464] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#eee9df]">
                {FEATURED_INTERNSHIP.category}
              </span>
              <time className="font-mono-tech border border-[#1f2124]/25 bg-[#eee9df] px-2.5 py-1 text-[10px] uppercase tracking-[0.08em] text-[#1f2124]">
                {FEATURED_INTERNSHIP.duration}
              </time>
            </div>

            <div>
              <h3
                id="featured-internship-title"
                className="m-0 text-[30px] font-semibold tracking-[-0.04em] text-[#1f2124] sm:text-[36px]"
              >
                {FEATURED_INTERNSHIP.title}
              </h3>
              <p className="font-mono-tech mt-2 text-[11px] uppercase tracking-[0.08em] text-[#2b5464]">
                {FEATURED_INTERNSHIP.organization}
              </p>
            </div>
          </div>

          {/* Right 8 Cols: Description, Focus Areas & View Certificate Action */}
          <div className="flex flex-col justify-between gap-6 lg:col-span-8">
            <p className="m-0 text-[15.5px] leading-[1.75] text-[#2c3035] sm:text-[16.5px]">
              {FEATURED_INTERNSHIP.description}
            </p>

            <div className="flex flex-col justify-between gap-5 border-t border-[#1f2124]/15 pt-5 sm:flex-row sm:items-center">
              <div className="flex flex-wrap gap-2">
                {FEATURED_INTERNSHIP.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="font-mono-tech border border-[#1f2124]/20 bg-[#eee9df] px-3 py-1 text-[10px] uppercase tracking-[0.06em] text-[#1f2124]"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() =>
                  setCertificateModal({
                    title: FEATURED_INTERNSHIP.title,
                    organization: FEATURED_INTERNSHIP.organization,
                    period: FEATURED_INTERNSHIP.duration,
                    image: FEATURED_INTERNSHIP.certificateImage,
                    alt: FEATURED_INTERNSHIP.certificateAlt,
                  })
                }
                className="font-mono-tech inline-flex min-h-[42px] shrink-0 items-center justify-between gap-3 border border-[#1f2124] bg-[#1f2124] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.09em] text-[#eee9df] transition-all hover:-translate-y-0.5 hover:border-[#2b5464] hover:bg-[#2b5464] cursor-pointer"
              >
                <Eye className="h-3.5 w-3.5" />
                <span>View Internship Certificate</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* =====================================================================
          VERTICAL ENGINEERING & ACADEMIC TIMELINE
      ===================================================================== */}
      <div className="relative border-t border-[#1f2124]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 bottom-0 left-[23.5%] hidden w-[1px] bg-[#1f2124]/15 lg:block"
        />

        {EXPERIENCE_TIMELINE.map((item) => (
          <article
            key={item.id}
            className="group relative grid grid-cols-1 items-start gap-6 border-b border-[#1f2124]/18 py-9 transition-colors duration-200 hover:bg-[#eee9df] lg:grid-cols-12 lg:gap-10"
          >
            {/* Left Column: Index, Period & Category */}
            <div className="flex items-center justify-between lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:gap-2">
              <div className="flex items-center gap-3">
                <span className="font-mono-tech text-[10px] text-[#52565c]">
                  {item.index}
                </span>
                <time className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.08em] text-[#1f2124]">
                  {item.period}
                </time>
              </div>
              <span className="font-mono-tech inline-block border border-[#1f2124]/20 bg-[#eee9df] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.1em] text-[#52565c]">
                {item.type}
              </span>
            </div>

            {/* Timeline Square Marker on Desktop */}
            <span
              aria-hidden="true"
              className="absolute top-11 left-[23.5%] hidden h-2.5 w-2.5 -translate-x-1/2 border border-[#1f2124] bg-[#e6e0d4] transition-colors group-hover:border-[#2b5464] group-hover:bg-[#2b5464] lg:block"
            />

            {/* Middle Column: Organization & Role */}
            <div className="lg:col-span-4 lg:pl-4">
              <h3 className="m-0 text-[21px] font-semibold tracking-[-0.03em] text-[#1f2124]">
                {item.organization}
              </h3>
              <p className="font-mono-tech mt-1.5 text-[11px] uppercase leading-[1.6] tracking-[0.05em] text-[#2b5464]">
                {item.role}
              </p>
              <p className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.08em] text-[#52565c]">
                {item.location}
              </p>
            </div>

            {/* Right Column: Verified Description & Optional Certificate / Listing Button */}
            <div className="flex flex-col justify-between gap-4 lg:col-span-5">
              <p className="m-0 text-[14.5px] leading-[1.75] text-[#2c3035]">
                {item.description}
              </p>

              {(item.certificateImage || item.externalUrl) && (
                <div className="flex flex-wrap items-center gap-2.5">
                  {item.certificateImage && (
                    <button
                      type="button"
                      onClick={() =>
                        setCertificateModal({
                          title: item.role,
                          organization: item.organization,
                          period: item.period,
                          image: item.certificateImage!,
                          alt: item.certificateAlt || item.role,
                        })
                      }
                      className="font-mono-tech inline-flex items-center gap-2 border border-[#1f2124] bg-[#eee9df] px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df] cursor-pointer"
                    >
                      <Eye className="h-3 w-3" />
                      <span>View Certificate</span>
                    </button>
                  )}

                  {item.externalUrl && (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-tech inline-flex items-center gap-1.5 border border-[#1f2124]/30 px-3 py-1.5 text-[10px] uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464] hover:text-[#eee9df]"
                    >
                      <span>{item.externalLabel || "View Listing"}</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Certificate Viewer Modal for Internship / Experience */}
      <AnimatePresence>
        {certificateModal && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={certificateModal.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCertificateModal(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2124]/80 p-4 backdrop-blur-xs"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-[780px] overflow-y-auto border border-[#1f2124] bg-[#e6e0d4] p-5 text-[#1f2124] shadow-2xl sm:p-7"
            >
              <div className="mb-4 flex items-start justify-between gap-4 border-b border-[#1f2124]/20 pb-3.5">
                <div>
                  <span className="font-mono-tech text-[10px] uppercase tracking-[0.08em] text-[#2b5464]">
                    {certificateModal.organization} • {certificateModal.period}
                  </span>
                  <h3 className="mt-1 mb-0 text-[21px] font-semibold">
                    {certificateModal.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setCertificateModal(null)}
                  aria-label="Close certificate preview"
                  className="grid h-9 w-9 shrink-0 place-items-center border border-[#1f2124] bg-[#eee9df] hover:bg-[#1f2124] hover:text-[#eee9df] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="overflow-hidden border border-[#1f2124]/20 bg-[#eee9df]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={certificateModal.image}
                  alt={certificateModal.alt}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
