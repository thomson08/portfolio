import Image from "next/image";
import type { ReactNode } from "react";
import Reveal from "./Reveal";
import { Phone, Browser } from "./DeviceMock";
import {
  FigmaMark,
  ClaudeMark,
  ReactMark,
  FlutterMark,
  AwsMark,
  SupabaseMark,
  OpenAiMark,
  SwiftMark,
  AppleMark,
} from "./ToolLogos";
import { projects, type Project } from "../lib/content";

const STACK: Record<string, { el: ReactNode; label: string }> = {
  figma: { el: <FigmaMark className="h-8 w-auto md:h-9" />, label: "Figma" },
  react: { el: <ReactMark className="h-9 w-auto md:h-11" />, label: "React" },
  flutter: { el: <FlutterMark className="h-9 w-auto md:h-11" />, label: "Flutter" },
  aws: { el: <AwsMark className="h-9 w-auto md:h-11" />, label: "AWS" },
  supabase: {
    el: <SupabaseMark className="h-9 w-auto md:h-11" />,
    label: "Supabase",
  },
  gpt: {
    el: <OpenAiMark className="h-9 w-9 text-paper md:h-11 md:w-11" />,
    label: "GPT Vision",
  },
  claude: {
    el: <ClaudeMark className="h-9 w-9 text-coral md:h-11 md:w-11" />,
    label: "Claude",
  },
  ios: {
    el: <AppleMark className="h-9 w-auto text-ink md:h-11" />,
    label: "iOS",
  },
  swift: {
    el: <SwiftMark className="h-9 w-auto md:h-11" />,
    label: "Swift",
  },
};

function Gallery({ p, dark }: { p: Project; dark: boolean }) {
  const shot = (i: number) => p.shots[i];

  if (p.device === "web+phone") {
    return (
      <div className="relative">
        <Browser src={shot(0)} alt={`${p.name} dashboard`} dark={dark} />
        <div className="absolute -bottom-8 -right-4 w-28 sm:w-36 md:w-40">
          <Phone src={shot(1)} alt={`${p.name} mobile`} dark={dark} />
        </div>
      </div>
    );
  }

  // phone-only: a small cluster of screens
  return (
    <div className="flex items-end justify-center gap-4">
      <Phone src={shot(0)} alt={`${p.name} screen 1`} dark={dark} className="w-32 translate-y-4 sm:w-36" />
      <Phone src={shot(1)} alt={`${p.name} screen 2`} dark={dark} className="w-36 sm:w-44" />
      <Phone src={shot(2)} alt={`${p.name} screen 3`} dark={dark} className="hidden w-32 translate-y-4 sm:block sm:w-36" />
    </div>
  );
}

function Section({ p, index }: { p: Project; index: number }) {
  const dark = p.theme === "dark";
  const flip = index % 2 === 1; // alternate sides
  const textColor = dark ? "text-paper" : "text-ink";
  const subColor = dark ? "text-mist" : "text-graphite";

  return (
    <section
      id={p.slug}
      className={`scroll-mt-24 px-6 py-24 md:px-10 md:py-32 ${
        dark ? "bg-ink" : "bg-paper"
      } ${textColor}`}
    >
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-2 md:gap-20">
        {/* Copy */}
        <div className={flip ? "md:order-2" : ""}>
          <Reveal>
            <div className="flex items-baseline gap-4">
              <span className="text-sm" style={{ color: p.accent }}>
                0{index + 1}
              </span>
              <span
                className="text-[10px] uppercase tracking-[0.18em]"
                style={{ color: p.accent }}
              >
                {p.kind} · {p.year}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-3 flex items-center gap-4">
              {p.logo && (
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={72}
                  height={72}
                  className={`shrink-0 object-contain ${
                    p.slug === "spotit"
                      ? "h-16 w-16 md:h-20 md:w-20"
                      : "h-11 w-11 md:h-14 md:w-14"
                  }`}
                />
              )}
              <h3 className="text-[clamp(2.2rem,5vw,4rem)] font-bold leading-none tracking-tight">
                {p.name}
              </h3>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className={`mt-5 text-lg ${subColor}`}>{p.oneLiner}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className={`mt-6 space-y-3 text-sm leading-relaxed ${subColor}`}>
              {p.summary.map((line, i) => (
                <li key={i} className="flex gap-3">
                  <span style={{ color: p.accent }}>—</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          {p.about && (
            <Reveal delay={0.18}>
              <p className={`mt-6 text-sm leading-relaxed ${subColor}`}>
                {p.about}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <div className="mt-7 flex flex-wrap items-center gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    dark ? "border-white/20 text-mist" : "border-ink/20 text-ink-soft"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          {(p.liveUrl || p.caseStudy) && (
            <Reveal delay={0.25}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {p.caseStudy && (
                  <a
                    href={`/work/${p.slug}`}
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ backgroundColor: p.accent, color: "#0e0e0f" }}
                  >
                    See full case study →
                  </a>
                )}
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
                      p.caseStudy
                        ? dark
                          ? "border border-white/25 text-paper hover:border-white/50"
                          : "border border-ink/20 text-ink hover:border-ink/40"
                        : ""
                    }`}
                    style={
                      p.caseStudy
                        ? undefined
                        : { backgroundColor: p.accent, color: "#0e0e0f" }
                    }
                  >
                    Visit live site ↗︎
                  </a>
                )}
              </div>
            </Reveal>
          )}
          {p.stack && (
            <Reveal delay={0.3}>
              <div className="mt-9">
                <p
                  className="text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: p.accent }}
                >
                  Built with
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-5">
                  {p.stack.map((key) => {
                    const item = STACK[key];
                    if (!item) return null;
                    return (
                      <div key={key} className="flex items-center gap-2.5">
                        {item.el}
                        <span
                          className={`text-sm font-medium ${
                            dark ? "text-mist" : "text-ink-soft"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {/* Mockups */}
        <Reveal delay={0.1} className={flip ? "md:order-1" : ""}>
          <Gallery p={p} dark={dark} />
          {p.wordmark && (
            <div className="mt-10 flex justify-center">
              <Image
                src={p.wordmark}
                alt={`${p.name} wordmark`}
                width={240}
                height={88}
                className={`w-auto ${
                  p.slug === "travel" ? "h-14 md:h-20" : "h-7"
                } ${
                  dark
                    ? "opacity-90 invert"
                    : p.slug === "travel"
                      ? "opacity-100"
                      : "opacity-70"
                }`}
              />
            </div>
          )}
        </Reveal>
      </div>

      {p.features && (
        <div className="mx-auto mt-16 max-w-[1400px] md:mt-24">
          <Reveal>
            <p
              className="text-[10px] uppercase tracking-[0.2em]"
              style={{ color: p.accent }}
            >
              Inside the platform
            </p>
          </Reveal>
          <div className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <div
                  className={`flex items-start gap-3 border-t py-4 text-sm ${
                    dark ? "border-white/10 text-mist" : "border-ink/10 text-ink-soft"
                  }`}
                >
                  <span style={{ color: p.accent }}>✦</span>
                  <span>{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default function ProjectShowcase() {
  return (
    <div id="projects">
      {projects.map((p, i) => (
        <Section key={p.slug} p={p} index={i} />
      ))}
    </div>
  );
}
