export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  visualTag: string;
  featured: boolean;
  priorityRank: number;
  description: string;
  systemOverview: string;
  context?: string;
  achievement?: string;
  highlights: string[];
  features?: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  hackathonUrl?: string;
  deploymentNote?: string;
  architectureImage?: string;
  architectureAlt?: string;
  visualTheme:
    | "edgepilot"
    | "everkeep"
    | "handover"
    | "foodrescue"
    | "phishguard"
    | "biasmap"
    | "mms";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "edgepilot-ai",
    number: "01",
    name: "EdgePilot AI",
    category: "AI Infrastructure / Safety Intelligence",
    visualTag: "AI INFRA SUMMIT HACKATHON 2026",
    featured: true,
    priorityRank: 1,
    description:
      "An AI-powered industrial and warehouse safety monitoring platform using Gemini Vision for visual analysis, a deterministic risk engine for safety-event scoring, and Groq for contextual reasoning and recommended actions. It includes a dashboard for reviewing and managing detected incidents.",
    systemOverview:
      "Designed around a structured multimodal pipeline combining Google Gemini Vision perception, a deterministic risk and rule engine for safety-event scoring, and Groq-hosted language model reasoning over a FastAPI backend. Includes live camera frame analysis, incident deduplication cooldowns, an operator dashboard for acknowledging or escalating detected incidents, and Playwright end-to-end verification.",
    context: "AI Infra Summit Hackathon 2026 (Lablab.ai).",
    highlights: [
      "Visual perception and safety-event detection powered by Google Gemini Vision",
      "Deterministic risk engine for auditable safety-event scoring",
      "Contextual reasoning and operator recommendations via Groq LLM",
      "Incident management dashboard with live camera cooldowns and degraded-state handling",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "Google Gemini",
      "Groq",
      "SQLite",
      "Playwright",
    ],
    githubUrl: "https://github.com/ODAY8/edgepilot-ai",
    liveUrl: "https://edgepilot-ai-wk15.vercel.app/",
    hackathonUrl:
      "https://lablab.ai/ai-hackathons/ai-infra-summit-hackathon/oday/edgepilot-ai",
    architectureImage: "/projects/architecture/edgepilot-ai.png",
    architectureAlt:
      "EdgePilot AI system architecture diagram showing browser input, FastAPI backend, Gemini Vision analysis, deterministic risk engine, Groq LLM reasoning, and incident persistence.",
    visualTheme: "edgepilot",
  },
  {
    id: "everkeep",
    number: "02",
    name: "EverKeep",
    category: "Mobile Application / Personal Productivity",
    visualTag: "400 AUTOMATED TESTS • 0 FAILURES",
    featured: true,
    priorityRank: 2,
    description:
      "EverKeep is a personal life vault application designed to help users securely organize and preserve important personal information.",
    systemOverview:
      "Built with Flutter and Dart on top of Supabase (Auth, PostgreSQL with Row Level Security, and private storage buckets). Engineered with a strict separation between presentation, Provider state management, and structured service/repository layers backed by SQL migrations.",
    achievement:
      "400 automated tests passed with zero failures in the reported test run.",
    highlights: [
      "Repository-based architecture.",
      "Authentication.",
      "Secure private storage.",
      "Row Level Security.",
      "Database migrations.",
      "Automated testing.",
      "Structured service and repository layers.",
    ],
    technologies: ["Flutter", "Dart", "Supabase", "Provider", "PostgreSQL"],
    githubUrl: "https://github.com/ODAY8/everKeep",
    architectureImage: "/projects/architecture/everkeep.png",
    architectureAlt:
      "EverKeep architecture diagram showing Flutter presentation layers, Provider state management, structured repositories and services, and Supabase PostgreSQL storage.",
    visualTheme: "everkeep",
  },
  {
    id: "handover",
    number: "03",
    name: "HandOver",
    category: "Mobile Application / Custody Tracking",
    visualTag: "QR CUSTODY & ATOMIC WORKFLOWS",
    featured: true,
    priorityRank: 3,
    description:
      "HandOver is a QR-based custody and item-tracking platform designed to support transparent handovers and reliable custody records.",
    systemOverview:
      "Engineered to eliminate ambiguity in physical item transfers by pairing cryptographically verifiable QR workflows with atomic database operations in PostgreSQL and Supabase security policies.",
    highlights: [
      "QR-based custody workflows.",
      "Database security.",
      "Atomic custody operations.",
      "Structured application architecture.",
      "Secure backend operations.",
    ],
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/ODAY8/HandOver",
    architectureImage: "/projects/architecture/handover.png",
    architectureAlt:
      "HandOver product design, technology stack, and QR custody workflow diagram.",
    visualTheme: "handover",
  },
  {
    id: "food-rescue",
    number: "04",
    name: "Food Rescue Donation Platform",
    category: "Full-Stack Web Application / Social Impact & AI",
    visualTag: "AI EXPIRY PREDICTION & QR VERIFICATION",
    featured: false,
    priorityRank: 4,
    description:
      "A full-stack platform connecting food donors with NGOs, shelters, and volunteers to redistribute surplus food. Features include AI-assisted expiry prediction, image recognition, QR-based donation verification, inventory management, smart search, and scheduled donations.",
    systemOverview:
      "Engineered with a React 19 + TypeScript + Tailwind CSS v4 frontend and a strictly layered Node.js + Express 5 backend (`route → middleware → controller → service → model → Prisma 7 → PostgreSQL`). Integrates Groq vision and LLM inference with a deterministic rule-engine fallback for food expiry prediction.",
    highlights: [
      "AI-assisted expiry prediction & food image recognition (Groq + deterministic fallback)",
      "QR-based donation verification and real-time pickup coordination",
      "Inventory management, smart search, and scheduled recurring donations",
      "Layered Express 5 + Prisma 7 PostgreSQL backend with 54 backend & 12 frontend automated tests",
    ],
    features: [
      "AI expiry prediction",
      "Image recognition",
      "QR verification",
      "Inventory management",
      "Smart search",
      "Scheduled donations",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Groq",
    ],
    githubUrl: "https://github.com/ODAY8/Food-Rescue-Donation-Platform",
    liveUrl: "https://www.foodrescue.cfd/",
    deploymentNote:
      "Primary live deployment active at https://www.foodrescue.cfd/ (HTTP 200). Note: The legacy Vercel alias (https://food-rescue-donation-platform.vercel.app/) currently returns HTTP 404 and requires domain re-linking in Vercel project settings.",
    architectureImage: "/projects/architecture/food-rescue.png",
    architectureAlt:
      "Food Rescue Donation Platform architecture diagram showing React frontend, Node.js/Express API, authentication, food management, donation matching, and PostgreSQL database.",
    visualTheme: "foodrescue",
  },
  {
    id: "phishguard",
    number: "05",
    name: "PhishGuard",
    category: "Cybersecurity / Web Application",
    visualTag: "THREAT ANALYSIS & DETECTION",
    featured: false,
    priorityRank: 5,
    description:
      "An intelligent phishing detection and awareness platform designed to help users identify potentially malicious links and better understand digital security threats.",
    systemOverview:
      "A web-based security platform where submitted URLs and email content pass through a Flask application and threat-detection engine to classify risk levels, log scan history in SQLite, and surface security awareness insights.",
    highlights: [
      "URL and link threat inspection workflow",
      "Risk classification across safe, suspicious, and high-risk indicators",
      "SQLite persistence for scan history and reporting",
      "Security awareness interface for understanding phishing patterns",
    ],
    technologies: ["Python", "Flask", "SQLite"],
    architectureImage: "/projects/architecture/phishguard.png",
    architectureAlt:
      "PhishGuard system architecture diagram illustrating web frontend submission, Flask detection engine, risk classification, and SQLite database logging.",
    visualTheme: "phishguard",
  },
  {
    id: "biasmap",
    number: "06",
    name: "BiasMap",
    category: "Backend Engineering / Software Development",
    visualTag: "BACKEND API & CONTAINERIZED SERVICES",
    featured: false,
    priorityRank: 6,
    description:
      "A software project focused on backend development, structured application functionality, and engineering practical software solutions.",
    systemOverview:
      "Structured around a modular Node.js and Express backend API with PostgreSQL persistence, input validation, authentication middleware, Groq SDK integration, and Docker Compose container orchestration.",
    highlights: [
      "Structured Node.js and Express.js backend architecture",
      "PostgreSQL database migrations and seed workflows",
      "Containerized multi-service setup with Docker Compose",
      "Automated backend testing with Jest and Supertest",
    ],
    technologies: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Docker",
      "React",
    ],
    githubUrl: "https://github.com/ODAY8/BiasMap",
    liveUrl: "https://bias-map-pink.vercel.app/",
    architectureImage: "/projects/architecture/biasmap.png",
    architectureAlt:
      "BiasMap system architecture diagram showing frontend submission, JavaScript backend processing, analysis engine, and structured results output.",
    visualTheme: "biasmap",
  },
  {
    id: "mms-student-companion",
    number: "07",
    name: "MMS Student Companion",
    category: "Mobile Application / Education Technology",
    visualTag: "ACADEMIC COMPANION UTILITY",
    featured: false,
    priorityRank: 7,
    description:
      "A student companion application designed to simplify academic management and help students organize their university life.",
    systemOverview:
      "A cross-platform Flutter mobile application backed by Supabase that centralizes essential university utilities—from academic calculators to daily schedules and faculty directories—into a clean mobile workspace.",
    highlights: [
      "CGPA calculator.",
      "Attendance calculator.",
      "Daily timetable.",
      "Holiday calendar.",
      "Faculty directory.",
    ],
    features: [
      "CGPA calculator",
      "Attendance calculator",
      "Daily timetable",
      "Holiday calendar",
      "Faculty directory",
    ],
    technologies: ["Flutter", "Dart", "Supabase"],
    githubUrl: "https://github.com/ODAY8/MMS-Student-Companion",
    architectureImage: "/projects/architecture/mms-student-companion.png",
    architectureAlt:
      "MMS Student Companion architecture diagram showing Flutter mobile presentation layer, state management, and Supabase backend sync.",
    visualTheme: "mms",
  },
];
