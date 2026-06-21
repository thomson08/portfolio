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
    badge: "Anthropic Claude Courses",
    note: "I design in Figma — using its complementary AI tools to enhance productivity and speed — and build with Claude Code, trained directly through Anthropic's official Claude courses (Claude 101, Claude Code). That fluency is why idea-to-production is hours, not weeks.",
  },
  closing: "The tools generate. The taste, the judgment, the decisions — that's still me.",
};

// ── Deep case-study content (optional, per project) ──────────
// When a project has `caseStudy`, the homepage shows a
// "See full case study" button → /work/<slug> renders this.
// All copy is TRUE — grounded in the real product, no invented stats.
export type CaseStudy = {
  // Sidebar meta on the case-study page
  meta: { label: string; value: string }[];
  // Opening narrative blocks (spark → problem → bet)
  intro: {
    eyebrow: string;
    heading: string;
    body: string[];
    pullquote?: string;
  }[];
  // Design-system showcase
  designSystem?: {
    eyebrow: string;
    heading: string;
    intro: string;
    colors: { name: string; hex: string; usage: string }[];
    type: { role: string; font: string; usage: string }[];
    moods?: { label: string; asset: string }[]; // optional illustration states
    note?: string;
  };
  // Numbered key flows, each with an optional screen mockup
  flows?: {
    eyebrow: string;
    heading: string;
    intro?: string;
    steps: { title: string; body: string; shot?: string; shots?: string[] }[];
  };
  // "Under the hood" architecture (the designer-engineer proof)
  architecture?: {
    eyebrow: string;
    heading: string;
    intro: string;
    nodes: { step: string; title: string; body: string }[];
    note?: string;
  };
  // 2–3 key design decisions with rationale
  decisions?: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  // Closing reflection
  closing?: {
    eyebrow: string;
    heading: string;
    body: string[];
    next?: string;
  };
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
  caseStudy?: CaseStudy; // optional deep case study → /work/<slug>
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
    year: "2026",
    oneLiner:
      "An AI app that remembers where you put your things — so you never lose your keys, wallet, or passport again.",
    angle: "Designed & engineered",
    kind: "0→1 · self-built product",
    tags: ["Mobile", "AI / LLM", "0→1", "Full-stack"],
    accent: "#6d5cf0",
    device: "phone",
    theme: "dark",
    logo: "/work/spotit/icon-v2.png",
    summary: [
      "A self-initiated 0→1 product answering a universal problem: where did I put my stuff?",
      "Designed the full system and surface — design system, scan flow, and Home / Map / Scan / Memory / Profile tabs — then built it: a Flutter app and a real AI backend.",
      "Server-side YOLO11 detection, semantic search, and a Gemini reasoning fallback that infers where things are from your habits.",
    ],
    stack: ["figma", "claude", "flutter", "supabase", "gpt"],
    shots: [
      "/work/spotit/scan.png",
      "/work/spotit/splash.png",
      "/work/spotit/map.png",
    ],
    caseStudy: {
      meta: [
        { label: "Role", value: "Solo — product design + full-stack build" },
        { label: "Year", value: "2026" },
        { label: "Platform", value: "iOS · Flutter" },
        { label: "Design", value: "Figma — full design system" },
        { label: "Build", value: "Flutter · FastAPI · Supabase" },
        { label: "AI", value: "YOLO11 · semantic search · Gemini" },
      ],
      intro: [
        {
          eyebrow: "The spark",
          heading: "I started from the capability, not the problem.",
          body: [
            "Vision models can now name almost everything in a photo on a phone-grade budget — YOLO for detection, CLIP for recognition, embeddings for “find me something like this.” The question that interested me wasn't whether we could, it was: what real, daily human problem does that actually solve?",
            "The answer was almost too ordinary — where did I put my stuff? Everyone loses their keys, wallet, glasses, passport. It's universal, low-stakes on a good day and high-panic on the worst one, and no app had made object memory feel effortless.",
          ],
        },
        {
          eyebrow: "The problem",
          heading: "Losing things is universal — and quietly stressful.",
          body: [
            "The cost isn't just the lost minutes. It's the low-grade anxiety of not knowing, the panic spike when you're already late, and the reflex to make someone else help you look.",
            "Existing fixes don't fit. Bluetooth trackers only work on things you remembered to tag in advance; manual inventory apps ask you to do data entry on your own home. Both fail the exact moment you're in a hurry.",
          ],
        },
        {
          eyebrow: "The bet",
          heading: "Don't make people tag things. Just remember for them.",
          body: [
            "SpotIt's bet is passive memory. You do quick room scans — a few seconds, like a panorama — and the app quietly detects and remembers what it saw and where. No tagging, no per-object setup.",
            "I framed the whole product around one feeling: visual assurance. Open the app and you're reassured your things are accounted for; in a panic, you get an instant answer with photo proof.",
          ],
          pullquote:
            "The app's job isn't to find your keys. It's to make sure you never feel lost without them.",
        },
      ],
      designSystem: {
        eyebrow: "Design system",
        heading: "A calm system for an anxious moment.",
        intro:
          "Because the core emotion is mild anxiety, the design had to feel reassuring, not technical. I built a full system in Figma — color, type, motion, and an illustrated character — before writing a line of app code.",
        colors: [
          { name: "Deep Plum", hex: "#564787", usage: "Text · brand" },
          { name: "Soft Gold", hex: "#E7C97F", usage: "CTAs · highlights" },
          { name: "Soft Mint", hex: "#34D399", usage: "“Found it” success" },
          { name: "Amber", hex: "#FBBF24", usage: "Low-confidence" },
          { name: "Rose", hex: "#F43F5E", usage: "Errors · delete" },
          { name: "Soft Lavender", hex: "#F5F3FF", usage: "Surfaces · cards" },
        ],
        type: [
          { role: "Display", font: "Varela Round", usage: "Rounded, friendly headlines & UI" },
          { role: "Body", font: "Inter", usage: "Readable paragraphs & captions" },
          { role: "Accent", font: "Tinos", usage: "Editorial, “zen” emphasis" },
        ],
        moods: [
          { label: "Peaceful", asset: "/work/spotit/blobs/peaceful.svg" },
          { label: "Searching", asset: "/work/spotit/blobs/searching.svg" },
          { label: "Found", asset: "/work/spotit/blobs/found.svg" },
          { label: "Alert", asset: "/work/spotit/blobs/alert.svg" },
        ],
        note:
          "One soft character changes mood with the app's state, so the system speaks emotionally, not just functionally. Built accessibility-first — Deep Plum on white clears 13.6:1, AAA.",
      },
      flows: {
        eyebrow: "Key flows",
        heading: "Scan once. Find instantly.",
        intro:
          "The surface is a five-tab app — Home, Map, Scan, Memory, Profile — built around one elevated action: Scan.",
        steps: [
          {
            title: "Scan a room",
            body: "Pick a room, hold the camera up, and pan. A YOLO11 model detects everyday objects frame by frame; guided progress keeps it feeling effortless, not fiddly.",
            shot: "/work/spotit/scan.png",
          },
          {
            title: "Detect & remember",
            body: "Detected items surface with a confidence read — keys at 98%, wallet at 95%, an uncertain item flagged low. Known objects are remembered silently; anything unfamiliar can be taught with one tap.",
            shot: "/work/spotit/detect.png",
          },
          {
            title: "Map & Memory",
            body: "Every scan writes to a spatial Map of where things live and a Memory timeline of when each was last seen — each entry backed by a photo.",
            shot: "/work/spotit/map.png",
          },
          {
            title: "Panic Search",
            body: "The fast path. A dedicated “Panic Mode” — ask, speak, or scan, with one-tap Quick Find chips for wallet, keys, passport — returns the last-seen location and a photo in milliseconds. A deliberately separate, no-friction flow for the worst moment.",
            shot: "/work/spotit/panic.png",
          },
          {
            title: "Teach-it-once",
            body: "See something the model doesn't know? It flags the unknown object and asks you to name it — once. A CLIP embedding lets SpotIt recognize it next time, then confirms with a cheerful “I learned it.” No repetitive tagging, ever.",
            shots: ["/work/spotit/teach-1.png", "/work/spotit/teach-2.png"],
          },
        ],
      },
      architecture: {
        eyebrow: "Under the hood",
        heading: "I designed it — then I built the backend too.",
        intro:
          "The most interesting design problems lived in the system, not just the screens. I built a FastAPI backend that does the heavy lifting across four stages.",
        nodes: [
          {
            step: "01",
            title: "Detect",
            body: "Server-side YOLO11s. The phone uploads a frame; the backend returns bounding boxes fast. One consistent model for every device — improvable without an app update.",
          },
          {
            step: "02",
            title: "Remember",
            body: "Detections are stored with 3D coordinates, timestamps, and cropped evidence photos in Supabase — so every “where” has proof.",
          },
          {
            step: "03",
            title: "Search",
            body: "Two layers: a fast last-seen lookup for panic search, plus semantic (vector) + text search, so “where's my charger” still matches “phone cable.”",
          },
          {
            step: "04",
            title: "Reason",
            body: "The part I'm proudest of: when search finds nothing useful, a Gemini reasoning service infers a likely location from your habits. The app never just says “I don't know” — it makes a smart guess.",
          },
        ],
        note:
          "9 SQL migrations, pgvector embeddings, indexed panic-search paths, and a test suite organized per ticket.",
      },
      decisions: {
        eyebrow: "Design decisions",
        heading: "Three calls that shaped the product.",
        items: [
          {
            title: "Server-side detection over on-device",
            body: "On-device felt more “native,” but it meant inconsistent accuracy across phones, real battery drain, and shipping a whole new app to improve the model. Moving YOLO to the server bought one consistent model, lighter phones, and model upgrades without an app release. The UX cost — a network round-trip — I hid behind instant, optimistic feedback.",
          },
          {
            title: "A separate “Panic Search” fast path",
            body: "Searching your inventory and needing your passport in 90 seconds are different emotional states. So panic search is its own surface — one field, a last-seen answer, a photo — optimized purely for speed, not power. Calm browsing lives elsewhere.",
          },
          {
            title: "Failure should reason, not shrug",
            body: "The worst version of this app says “no results.” I designed the AI reasoning fallback so an empty search becomes an informed guess based on your habits. It turns the model's uncertainty into something genuinely helpful — and keeps the assurance promise even when memory fails.",
          },
        ],
      },
      closing: {
        eyebrow: "What I learned",
        heading: "What I'd carry forward.",
        body: [
          "Designing and building it myself meant no intent was lost in handoff — but it also forced honest tradeoffs between the ideal flow and what the backend could actually return in a fraction of a second.",
          "Owning the AI layer changed the design. Features like reasoning-on-failure only exist because I could see, directly, what the model could and couldn't do — design and engineering informing each other in the same head.",
        ],
        next:
          "The design system, app surface, and AI backend are built and tested; wiring the live scan-to-ingest pipeline fully end-to-end is the current work.",
      },
    },
  },
  {
    slug: "travel",
    name: "Travy",
    year: "2024",
    oneLiner: "A warm travel companion to plan trips, save places, and keep a journal.",
    angle: "Design craft",
    kind: "Academic project",
    tags: ["iOS", "SwiftUI", "UX/UI"],
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
    caseStudy: {
      meta: [
        { label: "Role", value: "Co-designed & built (2-person team)" },
        { label: "Team", value: "Thomas Ninh · Billy Ross" },
        { label: "Year", value: "2024" },
        { label: "Platform", value: "iOS · SwiftUI" },
        { label: "Type", value: "Academic project" },
        { label: "Design basis", value: "Nielsen heuristics · Apple HIG" },
      ],
      intro: [
        {
          eyebrow: "The idea",
          heading: "A travel app that remembers the trip, not just the route.",
          body: [
            "Travy started as a class project with one belief: travelling is more than moving from one place to another — it's about experiences, connections, and memories. We set out to build a personal travel companion: part diary, part navigator, part memory keeper.",
            "The brief was open, so we set our own constraint — a design one. Make something that feels calm and effortless, not another cluttered itinerary tool.",
          ],
        },
        {
          eyebrow: "The motivation",
          heading: "Most travel apps optimize logistics. We optimized for feeling.",
          body: [
            "Booking and itinerary apps are dense with information you rarely need the moment you open them. We wanted the opposite: open Travy and immediately see your trips, your saved places, your progress — warm, visual, and personal.",
          ],
          pullquote:
            "It's not just an app — it's your travel diary, your navigator, and your memory keeper, in one.",
        },
        {
          eyebrow: "The approach",
          heading: "We designed against principles, not just taste.",
          body: [
            "Because it was a design course, we grounded every decision in something we could defend: Nielsen's usability heuristics and Apple's Human Interface Guidelines. Instead of arguing about what looked nice, we asked whether each screen was minimal, recognizable, clear, and native to iOS.",
            "That lens shaped everything below — from the warm visual system to how the five tabs are organized.",
          ],
        },
      ],
      designSystem: {
        eyebrow: "Visual system",
        heading: "Warm, editorial, and calm by design.",
        intro:
          "The whole point was to make planning feel like keeping a travel journal, not filling out a form. So the system leans warm and editorial — cream surfaces, soft rounded cards, a single clay accent, and serif headlines that give it a magazine feel.",
        colors: [
          { name: "Warm Clay", hex: "#B5703A", usage: "Brand · CTAs · active tab" },
          { name: "Cream", hex: "#F7F3EC", usage: "App background" },
          { name: "Card White", hex: "#FFFFFF", usage: "Cards · surfaces" },
          { name: "Soft Gold", hex: "#E2B04A", usage: "Ratings · accents" },
          { name: "Ink", hex: "#1C1B1A", usage: "Headings · body" },
          { name: "Slate", hex: "#8A8A8A", usage: "Secondary text" },
        ],
        type: [
          { role: "Headlines", font: "Editorial serif", usage: "Trip & section titles — a warm, magazine feel" },
          { role: "Body & UI", font: "iOS system sans", usage: "Labels, lists, navigation — clean and native" },
        ],
        note:
          "Cream surfaces, layered cards with soft depth, and one clay accent — restrained on purpose, so the photos and your trips carry the color.",
      },
      flows: {
        eyebrow: "Inside the app",
        heading: "Five tabs, one calm travel companion.",
        intro:
          "Travy is organized as five tabs — Profile, Map, Journal, Destination, and Progress — each doing one thing clearly.",
        steps: [
          {
            title: "Profile — your travel identity",
            body: "A warm header, recent destinations as photo cards, and travel-progress rings for countries, cities, and trip details. You see who you are as a traveller at a glance — recognition over recall.",
            shot: "/work/travel/profile.png",
          },
          {
            title: "Map — plan by place",
            body: "Search any city, drop and save pins for places you want to go, and tap a pin for details and directions. Saving a place is one tap, and your future trips all live in one spot.",
            shot: "/work/travel/map.png",
          },
          {
            title: "Journal — plan & record",
            body: "A travel calendar plus “Set Trip Details” for restaurants, accommodations, and activities, with journal entries to remember each day. Planning the trip and remembering it live in the same place.",
            shot: "/work/travel/journal.png",
          },
          {
            title: "Next Destination? — a little game",
            body: "Can't decide where to go next? Tap Shuffle and Travy picks a random country and city — “Peru, Cusco” — complete with a photo to daydream over. A small, playful moment that makes the app feel human, not transactional.",
            shots: ["/work/travel/nextdest-1.png", "/work/travel/nextdest-2.png"],
          },
        ],
      },
      decisions: {
        eyebrow: "Principles in practice",
        heading: "Three rules we held every screen to.",
        items: [
          {
            title: "Aesthetic & minimalist design (Nielsen)",
            body: "Every screen shows only what matters in that moment. The Journal leads with a calendar and three clear trip-detail buttons; the Profile leads with photos and progress. We cut anything irrelevant or rarely needed so the interface stays calm and scannable.",
          },
          {
            title: "Recognition rather than recall (Nielsen)",
            body: "We minimized memory load by keeping actions visible. A persistent bottom tab bar means you never have to remember where things live, and destinations appear as recognizable photo cards instead of text you have to recall.",
          },
          {
            title: "Native to Apple's Human Interface Guidelines",
            body: "We built to Apple's HIG for a true iOS feel: a standard tab bar, system behaviors adapted to a warm brand palette, clarity through a clear type hierarchy, and depth through layered cards and soft shadows.",
          },
        ],
      },
      closing: {
        eyebrow: "What we learned",
        heading: "What the project taught me.",
        body: [
          "Designing to established heuristics — instead of just “what looks nice” — gave us a shared language to make decisions and defend them. It's the habit I've carried into every product since.",
          "Building it in SwiftUI meant living with Apple's guidelines first-hand rather than just reading them — the fastest way I've found to internalize good iOS design.",
        ],
        next:
          "The planned next step was social: sharing your profile and trips online, so travel becomes something you compare and discover with friends.",
      },
    },
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
