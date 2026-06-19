import Reveal from "./Reveal";
import { experience, education } from "../lib/content";

export default function Experience() {
  return (
    <section id="about" className="bg-paper px-6 pb-28 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <div className="flex items-baseline justify-between border-b border-ink/15 pb-6">
            <p className="eyebrow">// Experience</p>
            <p className="text-sm text-graphite">{education.year}</p>
          </div>
        </Reveal>

        {experience.map((e, i) => (
          <Reveal key={e.org} delay={i * 0.05}>
            <div className="flex flex-col gap-3 border-b border-ink/15 py-7 md:flex-row md:items-center md:justify-between">
              <div className="flex items-baseline gap-5">
                <span className="text-xs text-graphite">0{i + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {e.org}
                  </h3>
                  <p className="text-sm text-graphite">{e.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 pl-10 md:pl-0">
                <div className="hidden gap-2 md:flex">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink/20 px-3 py-1 text-xs text-ink-soft"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-graphite">{e.period}</span>
              </div>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.1}>
          <div className="flex flex-col gap-1 py-7 md:flex-row md:items-center md:justify-between">
            <div className="flex items-baseline gap-5">
              <span className="text-xs text-graphite">Edu</span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {education.school}
                </h3>
                <p className="text-sm text-graphite">{education.degree}</p>
              </div>
            </div>
            <span className="pl-10 text-sm text-graphite md:pl-0">
              {education.year}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
