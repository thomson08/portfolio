import Reveal from "./Reveal";
import { Phone } from "./DeviceMock";
import type { Project } from "../lib/content";

// Renders a deep case study from project.caseStudy.
// Editorial, light-themed body to match the site; uses the
// project accent (plum for SpotIt) for highlights.
export default function CaseStudyView({ project }: { project: Project }) {
  const cs = project.caseStudy;
  if (!cs) return null;
  const accent = project.accent;

  return (
    <>
      {/* Meta strip */}
      <section className="border-b border-ink/10 px-6 py-10 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {cs.meta.map((m) => (
            <div key={m.label}>
              <p className="eyebrow" style={{ color: accent }}>
                {m.label}
              </p>
              <p className="mt-2 text-sm leading-snug text-ink-soft">{m.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Narrative: spark → problem → bet */}
      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[820px] space-y-20">
          {cs.intro.map((block) => (
            <Reveal key={block.eyebrow}>
              <div>
                <p className="eyebrow" style={{ color: accent }}>
                  {block.eyebrow}
                </p>
                <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight">
                  {block.heading}
                </h2>
                <div className="mt-6 space-y-5">
                  {block.body.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed text-graphite">
                      {p}
                    </p>
                  ))}
                </div>
                {block.pullquote && (
                  <blockquote
                    className="mt-10 border-l-2 pl-6 text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl"
                    style={{ borderColor: accent }}
                  >
                    {block.pullquote}
                  </blockquote>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Design system */}
      {cs.designSystem && (
        <section className="bg-paper-dim px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="eyebrow" style={{ color: accent }}>
                {cs.designSystem.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight">
                {cs.designSystem.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
                {cs.designSystem.intro}
              </p>
            </Reveal>

            {/* Color */}
            <Reveal delay={0.05}>
              <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                {cs.designSystem.colors.map((c) => (
                  <div
                    key={c.name}
                    className="overflow-hidden rounded-xl border border-ink/10 bg-paper"
                  >
                    <div className="h-20 w-full" style={{ background: c.hex }} />
                    <div className="p-3">
                      <p className="text-sm font-semibold tracking-tight">
                        {c.name}
                      </p>
                      <p className="mt-0.5 font-mono text-[11px] uppercase text-graphite">
                        {c.hex}
                      </p>
                      <p className="mt-1 text-xs text-ink-soft">{c.usage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Type + mood characters */}
            <div
              className={`mt-10 grid gap-10 ${
                cs.designSystem.moods ? "lg:grid-cols-2" : ""
              }`}
            >
              <Reveal delay={0.05}>
                <div className="rounded-xl border border-ink/10 bg-paper p-6">
                  <p className="eyebrow">Typography</p>
                  <ul className="mt-5 space-y-5">
                    {cs.designSystem.type.map((t) => (
                      <li
                        key={t.role}
                        className="flex items-baseline justify-between gap-4 border-b border-ink/10 pb-4 last:border-0 last:pb-0"
                      >
                        <div>
                          <p className="text-base font-semibold tracking-tight">
                            {t.font}
                          </p>
                          <p className="mt-0.5 text-xs text-graphite">
                            {t.usage}
                          </p>
                        </div>
                        <span
                          className="shrink-0 text-[10px] uppercase tracking-[0.18em]"
                          style={{ color: accent }}
                        >
                          {t.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {cs.designSystem.moods && (
                <Reveal delay={0.1}>
                  <div className="rounded-xl border border-ink/10 bg-paper p-6">
                    <p className="eyebrow">Mood character</p>
                    <div className="mt-5 grid grid-cols-4 gap-3">
                      {cs.designSystem.moods.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="flex h-16 items-center justify-center">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={m.asset}
                              alt={`${m.label} state`}
                              className="h-14 w-auto"
                            />
                          </div>
                          <p className="mt-2 text-[11px] text-ink-soft">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}
            </div>

            {cs.designSystem.note && (
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-2xl text-sm leading-relaxed text-graphite">
                  {cs.designSystem.note}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Key flows */}
      {cs.flows && (
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="eyebrow" style={{ color: accent }}>
                {cs.flows.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight">
                {cs.flows.heading}
              </h2>
              {cs.flows.intro && (
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-graphite">
                  {cs.flows.intro}
                </p>
              )}
            </Reveal>

            <div className="mt-14 space-y-16 md:space-y-24">
              {cs.flows.steps.map((step, i) => {
                const flip = i % 2 === 1;
                const imgs =
                  step.shots && step.shots.length ? step.shots : [step.shot];
                return (
                  <Reveal key={step.title} delay={0.04}>
                    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
                      <div className={flip ? "md:order-2" : ""}>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: accent }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-2 text-2xl font-bold tracking-tight md:text-3xl">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-lg leading-relaxed text-graphite">
                          {step.body}
                        </p>
                      </div>
                      <div className={flip ? "md:order-1" : ""}>
                        {imgs.length > 1 ? (
                          <div className="flex items-end justify-center gap-4 sm:gap-5">
                            {imgs.map((src, j) => (
                              <div
                                key={j}
                                className={`w-32 sm:w-40 ${
                                  j % 2 ? "translate-y-4" : ""
                                }`}
                              >
                                <Phone
                                  src={src}
                                  alt={`${step.title} screen ${j + 1}`}
                                  hug
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="mx-auto w-44 sm:w-52">
                            <Phone
                              src={imgs[0]}
                              alt={`${step.title} screen`}
                              hug
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Architecture — designer-engineer proof */}
      {cs.architecture && (
        <section className="bg-ink px-6 py-20 text-paper md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="eyebrow" style={{ color: accent }}>
                {cs.architecture.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-paper">
                {cs.architecture.heading}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist">
                {cs.architecture.intro}
              </p>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-4">
              {cs.architecture.nodes.map((n, i) => (
                <Reveal key={n.title} delay={i * 0.06}>
                  <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] p-6">
                    <span
                      className="font-mono text-xs"
                      style={{ color: accent }}
                    >
                      {n.step}
                    </span>
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-paper">
                      {n.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {n.body}
                    </p>
                    {i < cs.architecture!.nodes.length - 1 && (
                      <span
                        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lg md:block"
                        style={{ color: accent }}
                      >
                        →
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            {cs.architecture.note && (
              <Reveal delay={0.1}>
                <p className="mt-8 font-mono text-xs uppercase tracking-[0.12em] text-graphite">
                  {cs.architecture.note}
                </p>
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Design decisions */}
      {cs.decisions && (
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1100px]">
            <Reveal>
              <p className="eyebrow" style={{ color: accent }}>
                {cs.decisions.eyebrow}
              </p>
              <h2 className="mt-4 max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight">
                {cs.decisions.heading}
              </h2>
            </Reveal>
            <div className="mt-12 space-y-px">
              {cs.decisions.items.map((d, i) => (
                <Reveal key={d.title} delay={0.04}>
                  <div className="grid gap-4 border-t border-ink/10 py-8 md:grid-cols-[80px_1fr] md:gap-10">
                    <span
                      className="text-3xl font-bold tracking-tight"
                      style={{ color: accent }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="max-w-2xl">
                      <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                        {d.title}
                      </h3>
                      <p className="mt-3 text-lg leading-relaxed text-graphite">
                        {d.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Closing */}
      {cs.closing && (
        <section className="bg-paper-dim px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <p className="eyebrow" style={{ color: accent }}>
                {cs.closing.eyebrow}
              </p>
              <h2 className="mt-4 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight">
                {cs.closing.heading}
              </h2>
              <div className="mt-6 space-y-5">
                {cs.closing.body.map((p, i) => (
                  <p key={i} className="text-lg leading-relaxed text-graphite">
                    {p}
                  </p>
                ))}
              </div>
              {cs.closing.next && (
                <div
                  className="mt-8 rounded-xl border-l-2 bg-paper p-5 text-base leading-relaxed text-ink-soft"
                  style={{ borderColor: accent }}
                >
                  <span className="eyebrow mr-2" style={{ color: accent }}>
                    Next
                  </span>
                  {cs.closing.next}
                </div>
              )}
            </Reveal>
          </div>
        </section>
      )}
    </>
  );
}
