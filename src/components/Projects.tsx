"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Eye,
  Github,
  Layers,
  Lock,
  QrCode,
  ShieldAlert,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { PROJECTS, type ProjectItem } from "@/data/projects";

/**
 * Custom Swiss-architectural system visuals tailored for Mohamed Abdirahman's
 * engineering projects—using a warm, eye-comfortable, low-glare stone and slate-teal palette.
 */
function ProjectCoverVisual({ project }: { project: ProjectItem }) {
  switch (project.visualTheme) {
    case "edgepilot":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#22282d] p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                "linear-gradient(to right, #8ab0bf 1px, transparent 1px), linear-gradient(to bottom, #8ab0bf 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#eee9df]">
            <span className="border border-[#eee9df]/25 bg-[#1b2024] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#8ab0bf]/40 bg-[#2b5464] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 w-full max-w-[460px] border border-[#eee9df]/25 bg-[#1b2024] p-5 text-[#eee9df] shadow-xl">
            <div className="font-mono-tech flex items-center justify-between border-b border-[#eee9df]/15 pb-3.5 text-[10px] tracking-[0.08em]">
              <span className="flex items-center gap-2 text-[#9ec0ce]">
                <Sparkles className="h-3.5 w-3.5 text-[#9ec0ce]" />
                EDGEPILOT // SAFETY INTELLIGENCE
              </span>
              <span className="text-[#72b587]">● PIPELINE ACTIVE</span>
            </div>

            <div className="divide-y divide-[#eee9df]/12 py-1">
              <div className="font-mono-tech grid grid-cols-[62px_1fr_auto] items-center gap-2.5 py-3 text-[10px]">
                <span className="font-semibold text-[#9ec0ce]">VISION</span>
                <code className="truncate text-[#dcd7cd]">
                  gemini.analyze_frame(stream)
                </code>
                <span className="text-[#9ec0ce]">98%</span>
              </div>
              <div className="font-mono-tech grid grid-cols-[62px_1fr_auto] items-center gap-2.5 py-3 text-[10px]">
                <span className="font-semibold text-[#9ec0ce]">RISK</span>
                <code className="truncate text-[#dcd7cd]">
                  risk_engine.score(safety_event)
                </code>
                <span className="text-[#9ec0ce]">DET</span>
              </div>
              <div className="font-mono-tech grid grid-cols-[62px_1fr_auto] items-center gap-2.5 py-3 text-[10px]">
                <span className="font-semibold text-[#9ec0ce]">GROQ</span>
                <code className="truncate text-[#dcd7cd]">
                  groq.recommend_action(incident)
                </code>
                <span className="text-[#9ec0ce]">DASHBOARD</span>
              </div>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {["GEMINI VISION", "RISK ENGINE", "GROQ LLM", "FASTAPI"].map(
                (t) => (
                  <span
                    key={t}
                    className="font-mono-tech border border-[#eee9df]/20 bg-[#252c32] px-2.5 py-1 text-[8px] text-[#d5d0c5]"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      );

    case "everkeep":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#dbd4c6] p-6 sm:p-10">
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#1f2124]">
            <span className="border border-[#1f2124] bg-[#eee9df] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#1f2124] bg-[#1f2124] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 flex items-center justify-center gap-5">
            <div className="flex h-[250px] w-[168px] flex-col justify-between rounded-[20px] border-2 border-[#1f2124] bg-[#eee9df] p-5 text-[#1f2124] shadow-[8px_8px_0_#1f2124]">
              <div className="mx-auto h-1 w-9 bg-[#1f2124]/40" />
              <div>
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center border border-[#1f2124] bg-[#2b5464] text-[#eee9df]">
                  <Lock className="h-4 w-4" />
                </div>
                <p className="font-mono-tech text-[8.5px] uppercase tracking-[0.1em] text-[#52565c]">
                  PERSONAL LIFE VAULT
                </p>
                <strong className="mt-1 block text-[21px] leading-[0.95] font-bold tracking-[-0.04em]">
                  EverKeep Vault
                </strong>
              </div>
              <div className="space-y-1.5 border-t border-[#1f2124]/15 pt-3">
                <div className="font-mono-tech flex justify-between text-[8px]">
                  <span>RLS STORAGE</span>
                  <span className="font-semibold text-[#1f2124]">PRIVATE</span>
                </div>
                <div className="font-mono-tech flex justify-between text-[8px]">
                  <span>TEST SUITE</span>
                  <span className="font-semibold text-[#2b5464]">400 PASS</span>
                </div>
              </div>
            </div>

            <div className="hidden w-[180px] border border-[#1f2124] bg-[#1f2124] p-4 text-[#eee9df] sm:block">
              <p className="font-mono-tech text-[8.5px] uppercase tracking-[0.12em] text-[#9ec0ce]">
                LAYERED ARCHITECTURE
              </p>
              <ul className="font-mono-tech mt-2.5 space-y-2 text-[9px] text-[#eee9df]/90">
                <li className="border-b border-[#eee9df]/15 pb-1.5">
                  01. Presentation UI
                </li>
                <li className="border-b border-[#eee9df]/15 pb-1.5">
                  02. Provider State
                </li>
                <li className="border-b border-[#eee9df]/15 pb-1.5">
                  03. Service &amp; Repo
                </li>
                <li>04. Supabase RLS</li>
              </ul>
            </div>
          </div>
        </div>
      );

    case "handover":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#d8d0c1] p-6 sm:p-10">
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#1f2124]">
            <span className="border border-[#1f2124] bg-[#eee9df] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#1f2124] bg-[#2b5464] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 grid w-full max-w-[430px] grid-cols-[1fr_44px_1fr] items-center gap-2">
            <div className="flex min-h-[188px] flex-col justify-between border border-[#1f2124] bg-[#eee9df] p-4 shadow-[6px_6px_0_#1f2124]">
              <span className="font-mono-tech w-fit bg-[#1f2124] px-2 py-1 text-[8.5px] font-medium uppercase text-[#eee9df]">
                CUSTODIAN A
              </span>
              <div className="my-3 grid place-items-center border border-dashed border-[#1f2124]/35 py-3">
                <QrCode className="h-9 w-9 text-[#1f2124]" />
              </div>
              <b className="font-mono-tech text-[8.5px] uppercase">
                QR HANDOVER TOKEN
              </b>
            </div>

            <div className="grid place-items-center gap-1 text-center">
              <span className="font-mono-tech grid h-8 w-8 place-items-center border border-[#1f2124] bg-[#2b5464] text-[8px] font-medium text-[#eee9df]">
                TX
              </span>
              <b className="text-[16px] text-[#1f2124]">→</b>
            </div>

            <div className="flex min-h-[188px] flex-col justify-between border border-[#1f2124] bg-[#1f2124] p-4 text-[#eee9df] shadow-[6px_6px_0_#2b5464]">
              <span className="font-mono-tech text-[8.5px] uppercase tracking-[0.1em] text-[#9ec0ce]">
                CUSTODIAN B
              </span>
              <strong className="mt-3 text-[15px] leading-tight">
                Atomic Custody Record
              </strong>
              <div className="my-2 space-y-1.5">
                <span className="block h-1.5 w-full bg-[#33414a]" />
                <span className="block h-1.5 w-3/4 bg-[#7aa6b8]" />
              </div>
              <small className="font-mono-tech text-[8px] uppercase text-[#9ec0ce]">
                SUPABASE POSTGRES RLS
              </small>
            </div>
          </div>
        </div>
      );

    case "foodrescue":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#d6dbd4] p-6 sm:p-10">
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#1f2124]">
            <span className="border border-[#1f2124] bg-[#eee9df] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#1f2124] bg-[#1f2124] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 w-full max-w-[390px] border border-[#1f2124] bg-[#eee9df] p-5 text-[#1f2124] shadow-[8px_8px_0_#1f2124]">
            <div className="flex items-center justify-between border-b border-[#1f2124]/15 pb-3">
              <span className="font-mono-tech text-[9px] font-medium uppercase tracking-[0.1em]">
                FOOD RESCUE // V2 SMART MANAGEMENT
              </span>
              <span className="font-mono-tech bg-[#2b5464] px-2 py-0.5 text-[8px] font-semibold uppercase text-[#eee9df]">
                LIVE
              </span>
            </div>
            <div className="mt-3.5 grid grid-cols-2 gap-2.5">
              <div className="border border-[#1f2124]/20 bg-[#e6e0d4] p-2.5">
                <span className="font-mono-tech text-[8px] uppercase text-[#52565c]">
                  AI VISION &amp; EXPIRY
                </span>
                <p className="mt-1 text-[12px] font-semibold">
                  Shelf-Life Prediction
                </p>
              </div>
              <div className="border border-[#1f2124]/20 bg-[#e6e0d4] p-2.5">
                <span className="font-mono-tech text-[8px] uppercase text-[#52565c]">
                  VERIFICATION
                </span>
                <p className="mt-1 text-[12px] font-semibold">
                  QR Handover Scan
                </p>
              </div>
            </div>
            <div className="mt-2.5 flex items-center justify-between border border-[#1f2124] bg-[#1f2124] px-3 py-2 text-[#eee9df]">
              <span className="font-mono-tech text-[9px] uppercase text-[#9ec0ce]">
                DONOR → NGO / SHELTER
              </span>
              <span className="font-mono-tech text-[8px] uppercase">
                PRISMA 7 + POSTGRES
              </span>
            </div>
          </div>
        </div>
      );

    case "phishguard":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#dbd5c9] p-6 sm:p-10">
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#1f2124]">
            <span className="border border-[#1f2124] bg-[#eee9df] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#1f2124] bg-[#8c4a27] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 w-full max-w-[390px] border border-[#1f2124] bg-[#eee9df] shadow-[8px_8px_0_#1f2124]">
            <div className="flex h-8 items-center justify-between border-b border-[#1f2124] bg-[#1f2124] px-3 text-[#eee9df]">
              <div className="flex gap-1.5">
                <i className="block h-2 w-2 bg-[#7aa6b8]" />
                <i className="block h-2 w-2 bg-[#eee9df]/40" />
              </div>
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.08em]">
                PHISHGUARD // THREAT ENGINE
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between border border-[#1f2124]/20 bg-[#e6e0d4] px-3 py-2">
                <code className="font-mono-tech truncate text-[10px] text-[#1f2124]">
                  https://auth-verify-session.net/login
                </code>
                <ShieldAlert className="h-4 w-4 shrink-0 text-[#8c4a27]" />
              </div>
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-[9px] uppercase text-[#52565c]">
                    HEURISTIC &amp; URL SCAN
                  </span>
                  <span className="font-mono-tech bg-[#8c4a27] px-2 py-0.5 text-[8px] font-semibold uppercase text-[#eee9df]">
                    SUSPICIOUS LINK
                  </span>
                </div>
                <span className="block h-2 w-full bg-[#d2cab9]" />
                <span className="block h-2 w-4/5 bg-[#2b5464]" />
                <span className="block h-2 w-3/5 bg-[#d2cab9]" />
              </div>
            </div>
          </div>
        </div>
      );

    case "biasmap":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#262b30] p-6 sm:p-10">
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#eee9df]">
            <span className="border border-[#eee9df]/30 bg-[#1b2024] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#8ab0bf]/40 bg-[#2b5464] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 w-full max-w-[390px] border border-[#1f2124] bg-[#eee9df] p-5 text-[#1f2124] shadow-[8px_8px_0_#2b5464]">
            <div className="flex items-center justify-between border-b border-[#1f2124]/15 pb-3">
              <span className="font-mono-tech flex items-center gap-2 text-[10px] font-medium uppercase">
                <Terminal className="h-3.5 w-3.5 text-[#2b5464]" />
                BIASMAP // BACKEND SERVICES
              </span>
              <span className="font-mono-tech text-[9px] uppercase text-[#52565c]">
                DOCKER + EXPRESS
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              <div className="border border-[#1f2124]/25 bg-[#e6e0d4] p-3">
                <span className="font-mono-tech text-[8px] uppercase text-[#52565c]">
                  API LAYER
                </span>
                <p className="font-mono-tech mt-1 text-[11px] font-semibold">
                  Node.js / Express
                </p>
              </div>
              <div className="border border-[#1f2124]/25 bg-[#e6e0d4] p-3">
                <span className="font-mono-tech text-[8px] uppercase text-[#52565c]">
                  DATA STORE
                </span>
                <p className="font-mono-tech mt-1 text-[11px] font-semibold">
                  PostgreSQL + pg
                </p>
              </div>
              <div className="col-span-2 border border-[#1f2124] bg-[#1f2124] p-3 text-[#eee9df]">
                <div className="font-mono-tech flex items-center justify-between text-[9px]">
                  <span className="text-[#9ec0ce]">CONTAINER ORCHESTRATION</span>
                  <span>docker-compose.yml</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "mms":
      return (
        <div className="relative grid h-full w-full place-items-center overflow-hidden bg-[#ddd6c8] p-6 sm:p-10">
          <div className="font-mono-tech absolute top-4 right-4 left-4 z-10 flex items-center justify-between text-[10px] text-[#1f2124]">
            <span className="border border-[#1f2124] bg-[#eee9df] px-2.5 py-1">
              INDEX // {project.number}
            </span>
            <span className="border border-[#1f2124] bg-[#1f2124] px-2.5 py-1 uppercase tracking-[0.08em] text-[#eee9df]">
              {project.visualTag}
            </span>
          </div>

          <div className="relative z-10 mt-6 w-full max-w-[360px] border border-[#1f2124] bg-[#eee9df] p-5 text-[#1f2124] shadow-[8px_8px_0_#1f2124]">
            <div className="flex items-center justify-between border-b border-[#1f2124]/15 pb-3">
              <span className="font-mono-tech text-[9px] uppercase tracking-[0.1em] text-[#52565c]">
                MMS STUDENT COMPANION
              </span>
              <span className="font-mono-tech bg-[#2b5464] px-2 py-0.5 text-[8px] font-medium uppercase text-[#eee9df]">
                FLUTTER + SUPABASE
              </span>
            </div>
            <div className="mt-3.5 grid grid-cols-2 gap-2">
              {[
                "CGPA Calculator",
                "Attendance Tracker",
                "Daily Timetable",
                "Holiday & Faculty",
              ].map((mod, i) => (
                <div
                  key={mod}
                  className="border border-[#1f2124]/20 bg-[#e6e0d4] p-2.5"
                >
                  <span className="font-mono-tech block text-[8px] text-[#2b5464]">
                    0{i + 1}
                  </span>
                  <span className="mt-0.5 block text-[12px] font-semibold tracking-[-0.02em]">
                    {mod}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
  }
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const featuredPrimary = PROJECTS[0]; // 01 EdgePilot AI
  const featuredPair = PROJECTS.slice(1, 3); // 02 EverKeep & 03 HandOver
  const remainingProjects = PROJECTS.slice(3); // 04 Food Rescue, 05 PhishGuard, 06 BiasMap, 07 MMS

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="editorial-wrap border-t border-[#1f2124]/15 py-24 md:py-36"
    >
      {/* Section Heading */}
      <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:mb-24 lg:grid-cols-12">
        <div className="flex items-center gap-4 lg:col-span-4">
          <span className="section-index-badge">03</span>
          <p className="font-mono-tech m-0 text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
            Selected work
          </p>
        </div>

        <div className="lg:col-span-8">
          <h2
            id="work-heading"
            className="m-0 text-[clamp(44px,5.8vw,82px)] leading-[0.9] font-semibold tracking-[-0.055em] text-[#1f2124]"
          >
            Selected{" "}
            <em className="font-serif-editorial font-normal italic text-[#2b5464]">
              work.
            </em>
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-[#52565c]">
            A collection of products, experiments, and engineering projects
            built around solving real problems.
          </p>
        </div>
      </div>

      {/* =====================================================================
          TIER 1: FEATURED HERO SHOWCASE — 01 EDGEPILOT AI
      ===================================================================== */}
      <article className="group mb-20 border border-[#1f2124] bg-[#eee9df] lg:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Left 7 Cols: Large Cover Visual */}
          <div className="min-h-[360px] border-b border-[#1f2124] sm:min-h-[430px] lg:col-span-7 lg:border-r lg:border-b-0">
            <ProjectCoverVisual project={featuredPrimary} />
          </div>

          {/* Right 5 Cols: Editorial Project Story & Actions */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:col-span-5">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.12em] text-[#2b5464]">
                  {featuredPrimary.category}
                </span>
                <span className="font-mono-tech border border-[#1f2124]/25 px-2.5 py-0.5 text-[10px] uppercase">
                  FEATURED 01
                </span>
              </div>

              <div className="mt-4 flex items-start justify-between gap-4 border-b border-[#1f2124]/20 pb-5">
                <div>
                  <h3 className="m-0 text-[32px] font-semibold tracking-[-0.04em] text-[#1f2124] sm:text-[38px]">
                    {featuredPrimary.name}
                  </h3>
                  {featuredPrimary.context && (
                    <p className="font-mono-tech mt-1 text-[11px] uppercase tracking-[0.08em] text-[#52565c]">
                      Context: {featuredPrimary.context}
                    </p>
                  )}
                </div>
                <span
                  aria-hidden="true"
                  className="text-[24px] text-[#2b5464] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>

              <p className="mt-5 text-[15px] leading-[1.7] text-[#2c3035]">
                {featuredPrimary.description}
              </p>

              {/* Understated Technology Pills */}
              <ul
                aria-label={`${featuredPrimary.name} technologies`}
                className="mt-6 flex flex-wrap gap-2 p-0 list-none"
              >
                {featuredPrimary.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono-tech border border-[#1f2124]/20 bg-[#e6e0d4] px-3 py-1 text-[10px] uppercase tracking-[0.06em] text-[#1f2124]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Action Links */}
            <div className="mt-8 flex flex-wrap gap-2.5 pt-4">
              {featuredPrimary.liveUrl && (
                <a
                  href={featuredPrimary.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-tech inline-flex min-h-[44px] flex-1 items-center justify-between gap-3 border border-[#1f2124] bg-[#1f2124] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#eee9df] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464]"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {featuredPrimary.githubUrl && (
                <a
                  href={featuredPrimary.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-tech inline-flex min-h-[44px] flex-1 items-center justify-between gap-3 border border-[#1f2124] bg-transparent px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  <span>View GitHub</span>
                  <Github className="h-3.5 w-3.5" />
                </a>
              )}
              {featuredPrimary.hackathonUrl && (
                <a
                  href={featuredPrimary.hackathonUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-tech inline-flex min-h-[44px] w-full items-center justify-between gap-3 border border-[#1f2124]/30 bg-[#e6e0d4] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:border-[#1f2124] hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  <span>Hackathon Listing (Lablab.ai)</span>
                  <Award className="h-3.5 w-3.5" />
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(featuredPrimary)}
                className="font-mono-tech inline-flex min-h-[44px] w-full items-center justify-between gap-3 border border-[#2b5464] bg-[#2b5464] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#eee9df] transition-colors hover:bg-[#21424f] cursor-pointer"
              >
                <span>Inspect System &amp; Project Details</span>
                <Eye className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* =====================================================================
          TIER 2: PRIORITY PAIR — 02 EVERKEEP & 03 HANDOVER
      ===================================================================== */}
      <div className="mb-20 grid grid-cols-1 gap-12 lg:mb-28 lg:grid-cols-12 lg:gap-10">
        {featuredPair.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between border border-[#1f2124]/20 bg-[#eee9df] p-6 sm:p-7 lg:col-span-6"
          >
            <div>
              {/* Cover Visual */}
              <div className="h-[340px] w-full border border-[#1f2124] sm:h-[370px]">
                <ProjectCoverVisual project={project} />
              </div>

              {/* Project Copy Header */}
              <div className="flex items-start justify-between gap-5 border-b border-[#1f2124]/18 pt-6 pb-5">
                <div>
                  <span className="font-mono-tech text-[10px] font-medium uppercase tracking-[0.11em] text-[#2b5464]">
                    {project.category}
                  </span>
                  <h3 className="mt-1.5 mb-2 text-[28px] font-semibold tracking-[-0.04em] text-[#1f2124]">
                    {project.name}
                  </h3>
                  <p className="m-0 max-w-[500px] text-[14px] leading-[1.65] text-[#52565c]">
                    {project.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-[22px] text-[#2b5464] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>

              {/* Achievement Banner if present (EverKeep 400 automated tests) */}
              {project.achievement && (
                <div className="mt-4 flex items-center gap-2.5 border border-[#1f2124]/20 bg-[#e6e0d4] px-3.5 py-2.5">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2e6f40]" />
                  <span className="font-mono-tech text-[11px] font-medium text-[#1f2124]">
                    {project.achievement}
                  </span>
                </div>
              )}

              {/* Engineering Highlights Preview */}
              <div className="mt-4">
                <p className="font-mono-tech mb-2 text-[10px] uppercase tracking-[0.1em] text-[#52565c]">
                  Engineering Highlights
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="font-mono-tech border border-[#1f2124]/15 bg-[#e6e0d4] px-2.5 py-1 text-[10px] text-[#1f2124]/85"
                    >
                      {highlight.replace(/\.$/, "")}
                    </span>
                  ))}
                </div>
              </div>

              {/* Technology Stack Pills */}
              <ul
                aria-label={`${project.name} technologies`}
                className="mt-4 flex flex-wrap gap-2 p-0 list-none"
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono-tech border border-[#1f2124]/20 bg-[#eee9df] px-3 py-1 text-[9px] uppercase tracking-[0.06em] text-[#1f2124]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Actions */}
            <div className="mt-6 flex flex-wrap gap-2.5 pt-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-tech inline-flex min-h-[42px] flex-1 items-center justify-between gap-3 border border-[#1f2124] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="font-mono-tech inline-flex min-h-[42px] flex-1 items-center justify-between gap-3 border border-[#1f2124] bg-[#1f2124] px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.08em] text-[#eee9df] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464] cursor-pointer"
              >
                <span>Project Details</span>
                <Layers className="h-3.5 w-3.5" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* =====================================================================
          TIER 3: EDITORIAL SHOWCASE GRID — 04 FOOD RESCUE, 05 PHISHGUARD, 06 BIASMAP, 07 MMS
      ===================================================================== */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {remainingProjects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col justify-between border border-[#1f2124]/20 bg-[#eee9df] p-6"
          >
            <div>
              <div className="h-[300px] w-full border border-[#1f2124]">
                <ProjectCoverVisual project={project} />
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[#1f2124]/18 pt-5 pb-4">
                <div>
                  <span className="font-mono-tech text-[9px] font-medium uppercase tracking-[0.11em] text-[#2b5464]">
                    {project.category}
                  </span>
                  <h3 className="mt-1 mb-2 text-[24px] font-semibold tracking-[-0.035em] text-[#1f2124]">
                    {project.name}
                  </h3>
                  <p className="m-0 text-[13.5px] leading-[1.6] text-[#52565c]">
                    {project.description}
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-[20px] text-[#2b5464] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </div>

              {project.features && (
                <div className="mt-3.5">
                  <p className="font-mono-tech mb-1.5 text-[9px] uppercase tracking-[0.1em] text-[#52565c]">
                    Key Features
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.features.map((feat) => (
                      <span
                        key={feat}
                        className="font-mono-tech border border-[#1f2124]/15 bg-[#e6e0d4] px-2 py-0.5 text-[9px] text-[#1f2124]"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <ul
                aria-label={`${project.name} technologies`}
                className="mt-3.5 flex flex-wrap gap-1.5 p-0 list-none"
              >
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="font-mono-tech border border-[#1f2124]/20 bg-[#eee9df] px-2.5 py-1 text-[9px] uppercase tracking-[0.06em] text-[#1f2124]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-tech inline-flex min-h-[40px] flex-1 items-center justify-between gap-2 border border-[#1f2124] bg-[#1f2124] px-3.5 py-2 text-[10px] font-medium uppercase text-[#eee9df] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464]"
                >
                  <span>Live Demo</span>
                  <span>↗</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-tech inline-flex min-h-[40px] flex-1 items-center justify-between gap-2 border border-[#1f2124] px-3.5 py-2 text-[10px] font-medium uppercase text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  <span>GitHub</span>
                  <span>↗</span>
                </a>
              )}
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="font-mono-tech inline-flex min-h-[40px] flex-1 items-center justify-between gap-2 border border-[#1f2124]/30 bg-[#e6e0d4] px-3.5 py-2 text-[10px] font-medium uppercase text-[#1f2124] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464] hover:text-[#eee9df] cursor-pointer"
              >
                <span>Details</span>
                <span>+</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom GitHub Repositories Link */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/ODAY8?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="font-mono-tech inline-flex items-center gap-3 border border-[#1f2124] bg-[#eee9df] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.09em] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df]"
        >
          <span>Explore all repositories on GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* =====================================================================
          INTERACTIVE PROJECT DETAILS & ARCHITECTURE MODAL
      ===================================================================== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1f2124]/80 p-4 backdrop-blur-xs sm:p-6"
          >
            <motion.div
              initial={
                shouldReduceMotion
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 16, scale: 0.98 }
              }
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-[880px] overflow-y-auto border border-[#1f2124] bg-[#e6e0d4] p-6 text-[#1f2124] shadow-2xl sm:p-10"
            >
              {/* Modal Top Bar */}
              <div className="flex items-start justify-between gap-4 border-b border-[#1f2124] pb-5">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech bg-[#1f2124] px-2.5 py-1 text-[10px] text-[#eee9df]">
                      PROJECT {selectedProject.number}
                    </span>
                    <span className="font-mono-tech text-[11px] uppercase tracking-[0.1em] text-[#2b5464]">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3
                    id="modal-project-title"
                    className="mt-3 mb-0 text-[32px] font-semibold tracking-[-0.04em] sm:text-[40px]"
                  >
                    {selectedProject.name}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details modal"
                  className="grid h-10 w-10 shrink-0 place-items-center border border-[#1f2124] bg-[#eee9df] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df] cursor-pointer"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                    Overview
                  </h4>
                  <p className="mt-2 text-[15px] leading-[1.75] text-[#1f2124]">
                    {selectedProject.description}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.75] text-[#52565c]">
                    {selectedProject.systemOverview}
                  </p>
                </div>

                {selectedProject.achievement && (
                  <div className="border-l-2 border-[#2b5464] bg-[#eee9df] p-4">
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#2b5464]">
                      Verified Quality Milestone
                    </p>
                    <p className="mt-1 text-[14px] font-semibold text-[#1f2124]">
                      {selectedProject.achievement}
                    </p>
                  </div>
                )}

                {selectedProject.deploymentNote && (
                  <div className="border border-[#1f2124]/30 bg-[#eee9df] p-4">
                    <p className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#2b5464]">
                      Deployment &amp; Domain Status
                    </p>
                    <p className="mt-1 text-[13px] leading-[1.6] text-[#1f2124]">
                      {selectedProject.deploymentNote}
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                      Engineering Highlights
                    </h4>
                    <ul className="mt-2.5 space-y-2 pl-4 text-[14px] leading-[1.6] text-[#1f2124]">
                      {selectedProject.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono-tech text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                      Technology Stack
                    </h4>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono-tech border border-[#1f2124] bg-[#eee9df] px-3 py-1.5 text-[10px] uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {selectedProject.architectureImage && (
                  <div className="border border-[#1f2124]/20 bg-[#eee9df] p-4">
                    <p className="font-mono-tech mb-3 text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                      System Architecture &amp; Technical Diagram
                    </p>
                    <div className="overflow-hidden border border-[#1f2124]/15 bg-[#eee9df] p-2">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={selectedProject.architectureImage}
                        alt={
                          selectedProject.architectureAlt ||
                          `${selectedProject.name} architecture diagram`
                        }
                        className="max-h-[420px] w-full object-contain"
                      />
                    </div>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1f2124]/20 pt-5">
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-tech inline-flex items-center gap-2 border border-[#1f2124] bg-[#1f2124] px-5 py-2.5 text-[11px] uppercase text-[#eee9df] hover:border-[#2b5464] hover:bg-[#2b5464]"
                      >
                        <span>Open Live Demo</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-tech inline-flex items-center gap-2 border border-[#1f2124] px-5 py-2.5 text-[11px] uppercase text-[#1f2124] hover:bg-[#1f2124] hover:text-[#eee9df]"
                      >
                        <span>View Source on GitHub</span>
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {selectedProject.hackathonUrl && (
                      <a
                        href={selectedProject.hackathonUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-tech inline-flex items-center gap-2 border border-[#2b5464] bg-[#2b5464] px-5 py-2.5 text-[11px] uppercase text-[#eee9df] hover:bg-[#21424f]"
                      >
                        <span>Hackathon Submission</span>
                        <Award className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="font-mono-tech border border-[#1f2124]/40 px-4 py-2.5 text-[10px] uppercase text-[#1f2124] hover:border-[#1f2124] cursor-pointer"
                  >
                    Close [ESC]
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
