import Image from "next/image";
import Reveal from "./Reveal";
import { projects } from "../lib/content";

export default function SelectedWork() {
  return (
    <section id="work" className="bg-ink px-6 pb-20 pt-4 text-paper md:px-10">
      <Reveal>
        <div className="mx-auto flex max-w-[1400px] items-baseline justify-between border-b border-white/10 pb-6">
          <p className="eyebrow text-coral">// Selected work</p>
          <p className="text-sm text-graphite">{projects.length} projects</p>
        </div>
      </Reveal>

      <div className="mx-auto max-w-[1400px]">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04}>
            <a
              href={`#${p.slug}`}
              className="group flex flex-col gap-4 border-b border-white/10 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:flex-row md:items-center md:justify-between md:gap-10 md:px-2"
            >
              <div className="flex items-center gap-5">
                <span className="text-xs text-graphite">0{i + 1}</span>
                {p.logo && (
                  <Image
                    src={p.logo}
                    alt={`${p.name} logo`}
                    width={64}
                    height={64}
                    className={`shrink-0 object-contain ${
                      p.slug === "spotit"
                        ? "h-12 w-12 md:h-16 md:w-16"
                        : "h-10 w-10 md:h-14 md:w-14"
                    }`}
                  />
                )}
                <div>
                  <h3 className="text-3xl font-bold tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-5xl">
                    {p.name}
                  </h3>
                  <span
                    className="text-[10px] uppercase tracking-[0.15em]"
                    style={{ color: p.accent }}
                  >
                    {p.kind}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 md:flex-1 md:justify-end">
                <p className="max-w-md text-sm text-mist md:text-right">
                  {p.oneLiner}
                </p>
                <span className="shrink-0 text-coral opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  ↓
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
