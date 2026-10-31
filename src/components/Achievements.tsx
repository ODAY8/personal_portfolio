"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Eye, X } from "lucide-react";
import { ACHIEVEMENTS, type AchievementItem } from "@/data/experience";

export default function Achievements() {
  const [previewItem, setPreviewItem] = useState<AchievementItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && previewItem) {
        setPreviewItem(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [previewItem]);

  return (
    <section
      id="certificates"
      aria-labelledby="achievements-heading"
      className="border-t border-b border-[#1f2124]/15 bg-[#dbd4c6] py-24 text-[#1f2124] md:py-36"
    >
      <div className="editorial-wrap">
        {/* Section Heading */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:mb-20 lg:grid-cols-12">
          <div className="flex items-center gap-4 lg:col-span-4">
            <span className="section-index-badge">05</span>
            <div>
              <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
                Certificates &amp; Achievements
              </p>
              <p className="font-mono-tech mt-1 text-[10px] uppercase tracking-[0.08em] text-[#52565c]">
                08 Documented Entries
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <h2
              id="achievements-heading"
              className="m-0 text-[clamp(38px,5.2vw,74px)] leading-[0.94] font-semibold tracking-[-0.055em] text-[#1f2124]"
            >
              Certificates &amp;{" "}
              <em className="font-serif-editorial font-normal italic text-[#2b5464]">
                Achievements.
              </em>
            </h2>
            <p className="mt-5 max-w-[580px] text-[15px] leading-[1.7] text-[#2c3035]">
              Learning, building, and participating — technical certifications,
              internship completion, international conferences, and global AI
              hackathons.
            </p>
          </div>
        </div>

        {/* Restrained Numbered Editorial List with Thin Horizontal Dividers */}
        <div className="border-t border-[#1f2124]">
          {ACHIEVEMENTS.map((item) => (
            <article
              key={item.id}
              className="grid grid-cols-1 items-start gap-5 border-b border-[#1f2124]/20 py-8 transition-colors duration-200 hover:bg-[#eee9df]/80 lg:grid-cols-12 lg:gap-8 lg:px-4"
            >
              {/* Col 1: Number + Category + Date */}
              <div className="flex flex-wrap items-center justify-between gap-3 lg:col-span-3 lg:flex-col lg:items-start lg:justify-start lg:gap-1.5">
                <div className="flex items-center gap-3">
                  <span className="font-mono-tech text-[11px] font-medium text-[#2b5464]">
                    {item.number}
                  </span>
                  <span className="font-mono-tech border border-[#1f2124]/25 bg-[#eee9df] px-2.5 py-0.5 text-[9px] uppercase tracking-[0.09em] text-[#1f2124]">
                    {item.category}
                  </span>
                </div>

                {item.dateOrYear && (
                  <time className="font-mono-tech text-[10px] uppercase tracking-[0.08em] text-[#52565c] lg:pl-7">
                    {item.dateOrYear}
                  </time>
                )}
              </div>

              {/* Col 2: Title, Organization, Short Description & Focus */}
              <div className="lg:col-span-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="m-0 text-[20px] font-semibold tracking-[-0.025em] text-[#1f2124] sm:text-[22px]">
                    {item.title}
                  </h3>
                  {item.organization && (
                    <span className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.08em] text-[#2b5464]">
                      — {item.organization}
                    </span>
                  )}
                </div>

                <p className="mt-2 mb-0 text-[14px] leading-[1.65] text-[#2c3035]">
                  {item.description}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {item.achievement && (
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.07em] text-[#1f2124]">
                      <strong>Achievement:</strong> {item.achievement}
                    </span>
                  )}
                  {item.track && (
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.07em] text-[#1f2124]">
                      <strong>Track:</strong> {item.track}
                    </span>
                  )}
                  {item.focus && (
                    <span className="font-mono-tech text-[10px] uppercase tracking-[0.06em] text-[#52565c]">
                      Focus: {item.focus}
                    </span>
                  )}
                </div>
              </div>

              {/* Col 3: Verification Status & Certificate Viewing Actions */}
              <div className="flex flex-wrap items-center justify-between gap-2.5 lg:col-span-3 lg:flex-col lg:items-end lg:justify-start">
                {item.verifiedSupported && (
                  <span className="font-mono-tech inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.08em] text-[#1f2124]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#2e6f40]" />
                    <span>Verified Document</span>
                  </span>
                )}

                <div className="flex flex-wrap items-center gap-2">
                  {item.certificateImage ? (
                    <button
                      type="button"
                      onClick={() => setPreviewItem(item)}
                      className="font-mono-tech inline-flex min-h-[38px] items-center gap-2 border border-[#1f2124] bg-[#eee9df] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df] cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>View Certificate</span>
                    </button>
                  ) : (
                    <span
                      title={
                        item.missingFilePathHint
                          ? `Add certificate file at ${item.missingFilePathHint}`
                          : "Certificate file can be added when available"
                      }
                      className="font-mono-tech inline-flex min-h-[36px] items-center border border-[#1f2124]/20 bg-[#e6e0d4]/80 px-3 py-1.5 text-[9px] uppercase tracking-[0.08em] text-[#52565c]"
                    >
                      Certificate on request
                    </span>
                  )}

                  {item.verificationUrl && (
                    <a
                      href={item.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-tech inline-flex min-h-[38px] items-center gap-1.5 border border-[#2b5464] bg-[#2b5464] px-3 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[#eee9df] transition-colors hover:bg-[#21424f]"
                    >
                      <span>{item.verificationLabel || "Verify"}</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Verified Certificate Lightbox Modal */}
      <AnimatePresence>
        {previewItem && previewItem.certificateImage && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={previewItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPreviewItem(null)}
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
                    {previewItem.organization
                      ? `${previewItem.organization} • `
                      : ""}
                    {previewItem.category}
                    {previewItem.dateOrYear
                      ? ` • ${previewItem.dateOrYear}`
                      : ""}
                  </span>
                  <h3 className="mt-1 mb-0 text-[20px] font-semibold">
                    {previewItem.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewItem(null)}
                  aria-label="Close certificate preview"
                  className="grid h-9 w-9 shrink-0 place-items-center border border-[#1f2124] bg-[#eee9df] hover:bg-[#1f2124] hover:text-[#eee9df] cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="overflow-hidden border border-[#1f2124]/20 bg-[#eee9df]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewItem.certificateImage}
                  alt={previewItem.certificateAlt || previewItem.title}
                  className="max-h-[70vh] w-full object-contain"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p className="m-0 text-[13px] text-[#52565c]">
                  {previewItem.description}
                </p>
                {previewItem.verificationUrl && (
                  <a
                    href={previewItem.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-tech inline-flex items-center gap-1.5 border border-[#1f2124] bg-[#1f2124] px-4 py-2 text-[10px] uppercase text-[#eee9df] hover:bg-[#2b5464]"
                  >
                    <span>
                      {previewItem.verificationLabel || "External Listing"}
                    </span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
