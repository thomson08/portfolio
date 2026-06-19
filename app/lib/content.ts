// ─────────────────────────────────────────────
// Single source of truth for site content.
// Update copy / projects here; sections read from this.
// All facts are TRUE — no invented stats.
// ─────────────────────────────────────────────

export const profile = {
  name: "Thomas Ninh",
  roleLines: ["Product Designer", "AI Builder"],
  tagline: "I design and ship AI-powered products end to end.",
  email: "qninh@chapman.edu",
  phone: "(714) 488-7732",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-ninh-3b1631246/" },
    { label: "Email", href: "mailto:qninh@chapman.edu" },
  ],
};

export const stats = [
  { value: "3", label: "AI products shipped" },
  { value: "2", label: "Web + mobile" },
  { value: "1st", label: "Make-A-Thon", accent: true },
];

export const intro = {
  eyebrow: "Intro",
  // {coral} marks accent words rendered in coral.
  body: "I'm a designer who turns ideas into {real, shipped products} — built end to end with AI tools.",
  sub: "I prototype fast with AI, refine to a high bar, and ship to production — not mockups, working code.",
};

export const whyAI = {
  eyebrow: "Point of view",
  // {coral} marks accent words.
  heading: "AI moved the bottleneck — from production to {taste}.",
  lead: "AI didn't make design easier. It made the ordinary cheap, so judgment became the whole job: knowing what's good, and pushing it further.",
  pillars: [
    {
      label: "Speed",
      then: "Weeks of specs, handoffs, and revision cycles.",
      now: "Hours from an idea to a working, interactive prototype.",
    },
    {
      label: "Iteration",
      then: "One safe direction, defended to the end.",
      now: "Explore ten directions, then curate the one that's exceptional.",
    },
    {
      label: "Ownership",
      then: "Design, then hand off — intent gets lost in translation.",
      now: "One person designs and ships, so the original intent survives.",
    },
  ],
  creativity: {
    heading: "And it opens doors that were closed to solo builders.",
    body: "Ideas that used to need a whole team — design, frontend, backend, AI — are now buildable by one person who knows the tools deeply. That's where the new creativity lives: ambition is no longer capped by what you can execute alone.",
  },
  credential: {
    badge: "Claude Code — Certified",
    note: "I design in Figma — using its complementary AI tools to enhance productivity and speed — and build with Claude Code, where I've gone deep enough to be certified, not just dabble. That fluency is why idea-to-production is hours, not weeks.",
  },
  closing: "The tools generate. The taste, the judgment, the decisions — that's still me.",
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  oneLiner: string;
  angle: string;
  kind: string; // honest framing: real work vs concept
  tags: string[];
  accent: string; // section accent color
  device: "phone" | "web+phone"; // how to frame the mockups
  theme: "light" | "dark"; // section background
  summary: string[]; // 2–3 short story lines (problem → did → result)
  // Image filenames live in /public/work/<slug>/. Empty = show placeholders.
  shots: string[];
  liveUrl?: string; // optional live site link
  about?: string; // optional longer platform description
  features?: string[]; // optional "inside the platform" capability list
  logo?: string; // optional brand logo mark (next to title)
  wordmark?: string; // optional brand wordmark (under the mockups)
  stack?: string[]; // optional tech-stack logo keys (figma/react/flutter/aws/claude)
};

export const projects: Project[] = [
  {
    slug: "round-ing",
    name: "Round-ing",
    year: "2025",
    oneLiner:
      "Healthcare workforce platform — dashboard + nurse app on one design system.",
    angle: "Real & shipped",
    kind: "Startup · production product",
    tags: ["Web", "Mobile", "Design system"],
    accent: "#1f7a5c",
    device: "web+phone",
    theme: "dark",
    logo: "/work/round-ing/logo.png",
    liveUrl: "https://round-ing.com/",
    summary: [
      "Facilities and nurses had no shared, real-time view of open shifts and staffing.",
      "I designed and built both surfaces — a React facility/agency dashboard and a Flutter nurse app — on one shared design system.",
      "Shipped to production with AI features (chatbot + speech-to-speech voice) on AWS.",
    ],
    about:
      "Round-ing connects healthcare facilities, staffing agencies, and nurses on one platform. Facilities and agencies post and manage open shifts from a web dashboard; nurses browse, book, and manage their schedule from a mobile app — all in real time, unified by a shared design system and component library.",
    stack: ["figma", "react", "flutter", "aws", "claude"],
    shots: ["/work/round-ing/dashboard-final.png", "/work/round-ing/nurse-app.jpeg"],
  },
  {
    slug: "claire",
    name: "Clair",
    year: "2025",
    oneLiner: "AI skincare analyzer with a personalized, editorial consumer flow.",
    angle: "Design craft",
    kind: "Concept · side project",
    tags: ["Mobile", "AI / LLM", "Branding"],
    accent: "#caa46a",
    device: "phone",
    theme: "light",
    logo: "/work/claire/icon.png",
    wordmark: "/work/claire/wordmark.png",
    summary: [
      "A concept for skincare guidance that feels editorial, not clinical.",
      "Designed the full consumer flow — AI skin scan, quiz, personalized journey, paywall, journal — with a warm, high-craft visual system.",
      "Built end to end in Figma with Claude and Gemini.",
    ],
    stack: ["figma", "claude"],
    shots: [
      "/work/claire/narrative.png",
      "/work/claire/scan.png",
      "/work/claire/quiz.png",
    ],
  },
  {
    slug: "spotit",
    name: "SpotIt",
    year: "2025",
    oneLiner: "AI object finder — scan, detect & remember where your things are.",
    angle: "Product thinking",
    kind: "Concept · side project",
    tags: ["Mobile", "AI / LLM", "0→1"],
    accent: "#6d5cf0",
    device: "phone",
    theme: "dark",
    logo: "/work/spotit/icon-v2.png",
    summary: [
      "A concept that answers a universal problem: where did I put my stuff?",
      "Defined the product and designed the complete surface — auth, onboarding, scan flow, and Home / Map / Scan / Memory / Profile tabs.",
      "AI scanning detects, remembers, and locates objects across your space.",
    ],
    stack: ["figma", "claude", "flutter", "supabase", "gpt"],
    shots: [
      "/work/spotit/scan.png",
      "/work/spotit/splash.png",
      "/work/spotit/map.png",
    ],
  },
  {
    slug: "travel",
    name: "Travy",
    year: "2024",
    oneLiner: "A warm travel companion to plan trips, save places, and keep a journal.",
    angle: "Craft",
    kind: "Academic project",
    tags: ["iOS", "SwiftUI"],
    accent: "#b5703a",
    device: "phone",
    theme: "light",
    logo: "/work/travel/icon.png",
    wordmark: "/work/travel/fulllogo.png",
    stack: ["ios", "swift"],
    summary: [
      "An editorial travel companion — profile, interactive map, and trip journal in one.",
      "Save destinations, explore places on a live map, and record each trip day by day.",
    ],
    shots: [
      "/work/travel/map.png",
      "/work/travel/profile.png",
      "/work/travel/journal.png",
    ],
  },
];

export const experience = [
  {
    org: "Round-ing",
    role: "Full-Stack Software Engineer",
    period: "Aug 2025 — Present",
    tags: ["Frontend", "Mobile", "AI"],
  },
  {
    org: "Mendrix Inc.",
    role: "Web / UI-UX Front-End Developer",
    period: "Sep — Dec 2024",
    tags: ["Frontend", "Figma"],
  },
  {
    org: "Cashew Export-Import Co.",
    role: "iOS Development Intern",
    period: "Jun — Aug 2024",
    tags: ["iOS", "Swift"],
  },
];

export const education = {
  school: "Chapman University — Fowler School of Engineering",
  degree: "B.S. Computer Science, Minor in Mathematics",
  year: "May 2025",
};
