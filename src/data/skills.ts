export interface SkillCategory {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  technologies: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "languages",
    index: "01",
    title: "Programming Languages",
    subtitle: "Core languages used across systems, mobile apps, and backend services",
    technologies: ["Python", "Dart", "JavaScript", "TypeScript", "SQL"],
  },
  {
    id: "frontend-mobile",
    index: "02",
    title: "Frontend & Mobile Development",
    subtitle: "Cross-platform mobile interfaces and modern responsive web applications",
    technologies: ["Flutter", "React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend-databases",
    index: "03",
    title: "Backend & Databases",
    subtitle: "REST APIs, relational data modeling, authentication, and storage",
    technologies: [
      "FastAPI",
      "Flask",
      "Node.js",
      "Express.js",
      "Supabase",
      "PostgreSQL",
      "SQLite",
      "Firebase",
    ],
  },
  {
    id: "artificial-intelligence",
    index: "04",
    title: "Artificial Intelligence",
    subtitle: "Multimodal inference, LLM orchestration, retrieval pipelines, and agentic workflows",
    technologies: [
      "Google Gemini",
      "Groq",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "AI agents",
      "OpenAI embeddings",
    ],
  },
  {
    id: "tools-infrastructure",
    index: "05",
    title: "Tools & Infrastructure",
    subtitle: "Version control, containerization, browser automation, and cloud deployment",
    technologies: ["Git", "GitHub", "Docker", "Playwright", "Vercel", "Render"],
  },
];

export const MARQUEE_ITEMS: string[] = [
  "SOFTWARE ENGINEERING",
  "ARTIFICIAL INTELLIGENCE",
  "MOBILE DEVELOPMENT",
  "BACKEND ARCHITECTURE",
  "CYBERSECURITY",
  "DEVELOPER TOOLS",
  "PRODUCT BUILDING",
];

