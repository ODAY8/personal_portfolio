export interface IdentityData {
  fullName: string;
  monogram: string;
  title: string;
  roles: string[];
  location: string;
  education: string;
  philosophy: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSupporting: string;
  introduction: string[];
  aboutHeading: string;
  aboutParagraphs: string[];
  aboutDetails: { label: string; value: string }[];
  professionalInterests: string[];
  contact: {
    emailPlaceholder: string;
    formspreeEndpoint: string;
    githubUrl: string;
    githubLabel: string;
    linkedinUrl: string;
    linkedinLabel: string;
    resumeUrl: string;
  };
}

export const IDENTITY: IdentityData = {
  fullName: "Mohamed Abdirahman",
  monogram: "M.A",
  title: "Software Engineer · AI Developer · Intern",
  roles: ["Software Engineer", "AI Developer", "Intern"],
  location: "India",
  education:
    "B.Tech in Computer Science and Communication Engineering at KIIT University, India.",
  philosophy: "Engineering ideas. Building possibilities.",
  heroEyebrow: "HELLO, I'M MOHAMED ABDIRAHMAN",
  heroHeadline:
    "I turn ideas into intelligent software and build products that solve real-world problems.",
  heroSupporting:
    "Software Engineer · AI Developer · Intern exploring the intersection of intelligent systems, practical software engineering, and meaningful digital products.",
  introduction: [
    "I'm Mohamed Abdirahman, a software developer passionate about building practical digital products, exploring artificial intelligence, and engineering solutions that make a difference.",
    "My work spans mobile development, backend engineering, AI-powered applications, and cybersecurity. I enjoy transforming ideas into functional products, solving engineering challenges, and continuously exploring new technologies.",
  ],
  aboutHeading: "Curiosity drives me. Engineering moves me.",
  aboutParagraphs: [
    "I'm a computer science engineering student and software developer interested in turning ideas into useful, reliable software.",
    "My journey involves building mobile applications, backend systems, AI-powered solutions, and cybersecurity tools.",
    "I enjoy understanding how systems work beneath the surface, designing reliable architectures, and developing products from initial concepts into functional applications.",
    "Beyond coding, I participate in hackathons, explore emerging technologies, and work on initiatives that make technology more accessible.",
  ],
  aboutDetails: [
    {
      label: "Professional Positioning",
      value: "Software Engineer · AI Developer · Intern",
    },
    { label: "Location", value: "Based in India" },
    {
      label: "Academic Focus",
      value: "Computer Science Engineering (B.Tech at KIIT University)",
    },
    {
      label: "Internship Experience",
      value: "Summer Internship 2026 (KIIT School of Computer Applications) & KIIT R&D",
    },
    { label: "Builder Profile", value: "Independent product builder" },
    { label: "Community", value: "Founder of HIRGAL community" },
  ],
  professionalInterests: [
    "Artificial Intelligence and AI agents.",
    "Full-stack development.",
    "Mobile application development.",
    "Backend engineering.",
    "Cybersecurity.",
    "Software architecture.",
    "Developer tools and infrastructure.",
    "Building practical digital products.",
  ],
  contact: {
    emailPlaceholder: "zapiryre@gmail.com",
    formspreeEndpoint: "https://formspree.io/f/meaareey",
    githubUrl: "https://github.com/ODAY8",
    githubLabel: "github.com/ODAY8",
    linkedinUrl: "https://www.linkedin.com/in/mohamed-abdirahman-warsame/",
    linkedinLabel: "linkedin.com/in/mohamed-abdirahman-warsame",
    resumeUrl: "/resume.pdf",
  },
};

export interface FeaturedInternship {
  id: string;
  title: string;
  organization: string;
  duration: string;
  category: string;
  description: string;
  focusAreas: string[];
  certificateImage: string;
  certificateAlt: string;
}

export const FEATURED_INTERNSHIP: FeaturedInternship = {
  id: "summer-internship-2026",
  title: "Summer Internship 2026",
  organization: "KIIT School of Computer Applications",
  duration: "May – July 2026",
  category: "Internship",
  description:
    "Completed an 8-week summer internship involving AI/ML pipelines, cybersecurity concepts, computer vision, and natural language processing applications.",
  focusAreas: [
    "AI/ML Pipelines",
    "Cybersecurity Concepts",
    "Computer Vision",
    "Natural Language Processing",
  ],
  certificateImage: "/certificates/summer-internship-2026.png",
  certificateAlt:
    "Certificate awarded to Mohamed Abdirahman for completing the Summer Internship 2026 (May – July 2026) at KIIT School of Computer Applications.",
};

export interface ExperienceItem {
  id: string;
  index: string;
  period: string;
  organization: string;
  role: string;
  location: string;
  type: "Internship" | "Education" | "Hackathon";
  description: string;
  certificateImage?: string;
  certificateAlt?: string;
  externalUrl?: string;
  externalLabel?: string;
}

export const EXPERIENCE_TIMELINE: ExperienceItem[] = [
  {
    id: "summer-internship-2026",
    index: "01",
    period: "May – July 2026",
    organization: "KIIT School of Computer Applications",
    role: "Summer Internship 2026",
    location: "India",
    type: "Internship",
    description:
      "Completed an 8-week summer internship involving AI/ML pipelines, cybersecurity concepts, computer vision, and natural language processing applications.",
    certificateImage: "/certificates/summer-internship-2026.png",
    certificateAlt:
      "Summer Internship 2026 Certificate from KIIT School of Computer Applications.",
  },
  {
    id: "kiit-rd-internship",
    index: "02",
    period: "Started May 2026",
    organization: "KIIT R&D Internship",
    role: "Biomedical Image Processing Research and Development",
    location: "KIIT University, India",
    type: "Internship",
    description:
      "Research and development internship experience focused on Biomedical Image Processing.",
  },
  {
    id: "kiit-university",
    index: "03",
    period: "B.Tech Degree",
    organization: "KIIT University",
    role: "B.Tech — Computer Science and Communication Engineering",
    location: "India",
    type: "Education",
    description:
      "Pursuing undergraduate engineering studies in Computer Science and Communication Engineering at KIIT University, India, with a focus on software systems, artificial intelligence, and practical product engineering.",
  },
  {
    id: "ai-infra-summit-2026",
    index: "04",
    period: "September 10–16, 2026",
    organization: "AI Infra Summit Hackathon 2026",
    role: "Technical Hackathon Experience — Developed EdgePilot AI",
    location: "LabLab.ai / NativelyAI",
    type: "Hackathon",
    description:
      "Developed EdgePilot AI during the AI Infra Summit Hackathon 2026, investigating multimodal computer vision, deterministic risk scoring, and LLM-driven operator workflows.",
    certificateImage: "/certificates/ai-infra-summit-hackathon.jpg",
    certificateAlt:
      "AI Infra Summit Hackathon 2026 certificate for developing EdgePilot AI.",
    externalUrl:
      "https://lablab.ai/ai-hackathons/ai-infra-summit-hackathon/oday/edgepilot-ai",
    externalLabel: "Hackathon Listing",
  },
  {
    id: "meta-global-ai-hackathon-2026",
    index: "05",
    period: "2026",
    organization: "Meta Global AI Developer Hackathon 2026",
    role: "Participant — See the World AI Track",
    location: "Global / Remote",
    type: "Hackathon",
    description:
      "Participated in the See the World AI track at the Meta Global AI Developer Hackathon 2026.",
  },
];

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  organization?: string;
  category: string;
  dateOrYear?: string;
  description: string;
  focus?: string;
  achievement?: string;
  track?: string;
  certificateImage?: string;
  certificateAlt?: string;
  verificationUrl?: string;
  verificationLabel?: string;
  verifiedSupported: boolean;
  missingFilePathHint?: string;
}

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "flutter-foundation",
    number: "01",
    title: "Flutter Foundation Certificate",
    category: "Technical Certification",
    focus: "Mobile Application Development",
    description:
      "Foundational technical certification focused on cross-platform mobile application development with Flutter and Dart.",
    verifiedSupported: false,
    missingFilePathHint: "/public/certificates/flutter-foundation.pdf",
  },
  {
    id: "cybersecurity-foundation",
    number: "02",
    title: "Cybersecurity Foundation Certificate",
    category: "Technical Certification",
    focus: "Cybersecurity & Digital Defense",
    description:
      "Foundational technical certification covering core cybersecurity principles, threat awareness, and digital defense concepts.",
    verifiedSupported: false,
    missingFilePathHint: "/public/certificates/cybersecurity-foundation.pdf",
  },
  {
    id: "automatrix-agentic-ai",
    number: "03",
    title: "Automatrix 2.0 — Agentic AI Certificate of Participation",
    organization: "KIIT",
    category: "AI Workshop",
    dateOrYear: "August 19, 2025",
    focus: "Artificial Intelligence & Agentic Workflows",
    description:
      "Certificate of participation in the Automatrix 2.0 workshop at KIIT focusing on artificial intelligence and agentic workflows.",
    certificateImage: "/certificates/automatrix-2-agentic-ai.png",
    certificateAlt:
      "Automatrix 2.0 — Agentic AI Certificate of Participation issued by KIIT to Mohamed Abdirahman on August 19, 2025.",
    verifiedSupported: true,
  },
  {
    id: "ai-infra-summit-hackathon",
    number: "04",
    title: "AI Infra Summit Hackathon 2026",
    organization: "LabLab.ai / NativelyAI",
    category: "Hackathon",
    dateOrYear: "September 10–16, 2026",
    achievement: "Developed EdgePilot AI.",
    focus: "AI Infrastructure & Multimodal Systems",
    description:
      "Developed EdgePilot AI during the AI Infra Summit Hackathon 2026, focusing on AI infrastructure and multimodal safety monitoring systems.",
    certificateImage: "/certificates/ai-infra-summit-hackathon.jpg",
    certificateAlt:
      "Certificate of Completion issued by LabLab.ai and NativelyAI for the AI Infra Summit Hackathon (September 10–16, 2026).",
    verificationUrl:
      "https://lablab.ai/ai-hackathons/ai-infra-summit-hackathon/oday/edgepilot-ai",
    verificationLabel: "Hackathon Listing",
    verifiedSupported: true,
  },
  {
    id: "meta-global-ai-hackathon",
    number: "05",
    title: "Meta Global AI Developer Hackathon 2026",
    category: "Hackathon Participation",
    dateOrYear: "2026",
    track: "See the World AI",
    description:
      "Participated in the See the World AI track of the Meta Global AI Developer Hackathon 2026.",
    verifiedSupported: false,
    missingFilePathHint: "/public/certificates/meta-global-ai-hackathon-2026.pdf",
  },
  {
    id: "summer-internship-2026",
    number: "06",
    title: "Summer Internship 2026",
    organization: "KIIT School of Computer Applications",
    category: "Internship",
    dateOrYear: "May – July 2026",
    focus:
      "AI/ML pipelines, cybersecurity, computer vision, and natural language processing applications",
    description:
      "Completed an 8-week summer internship involving AI/ML pipelines, cybersecurity concepts, computer vision, and natural language processing applications.",
    certificateImage: "/certificates/summer-internship-2026.png",
    certificateAlt:
      "Certificate for completing the 8-week Summer Internship 2026 at KIIT School of Computer Applications (May – July 2026).",
    verifiedSupported: true,
  },
  {
    id: "imun-online-conference-333",
    number: "07",
    title: "Online Conference 333",
    organization: "IMUN",
    category: "Conference",
    dateOrYear: "August 29–30, 2026",
    description:
      "Participated as a delegate in an international committee conference covering global diplomacy, consensus building, and collaborative resolution drafting.",
    certificateImage: "/certificates/imun-online-conference-333.png",
    certificateAlt:
      "IMUN Online Conference 333 Certificate awarded to Mohamed Abdirahman (August 29–30, 2026).",
    verifiedSupported: true,
  },
  {
    id: "low-resource-nlp-llms",
    number: "08",
    title: "Low-Resource NLP: Techniques and Applications with LLMs",
    organization: "KIIT School of Computer Applications",
    category: "AI / NLP Workshop",
    dateOrYear: "June 6–10, 2026",
    description:
      "Completed a five-day technical workshop on modern NLP methodologies, transfer learning techniques, and fine-tuning large language models for low-resource domains.",
    certificateImage: "/certificates/low-resource-nlp-llms.png",
    certificateAlt:
      "Certificate for completing the 5-day workshop on Low-Resource NLP: Techniques and Applications with LLMs at KIIT School of Computer Applications (June 6–10, 2026).",
    verifiedSupported: true,
  },
];

export interface CommunityInitiative {
  name: string;
  role: string;
  tagline: string;
  heading: string;
  paragraphs: string[];
  focusAreas: string[];
  note: string;
}

export const COMMUNITY_INITIATIVE: CommunityInitiative = {
  name: "HIRGAL",
  role: "Founder — Community Initiative",
  tagline: "Baro. Faham. Dhis.",
  heading: "Technology should be accessible to everyone.",
  paragraphs: [
    "Hirgal is a technology community I founded with the goal of helping my people explore technology, artificial intelligence, coding, and digital safety.",
    "Through this initiative, I aim to make technical knowledge more accessible and encourage people to learn, understand, and build.",
  ],
  focusAreas: [
    "Artificial Intelligence",
    "Technology education",
    "Coding",
    "Digital safety",
    "Community learning",
  ],
  note: "Independent community initiative founded by Mohamed Abdirahman.",
};
