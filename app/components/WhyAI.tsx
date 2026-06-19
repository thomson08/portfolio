import Reveal from "./Reveal";
import { FigmaMark, ClaudeMark } from "./ToolLogos";
import { whyAI } from "../lib/content";

function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith("{") && p.endsWith("}") ? (
          <span key={i} className="text-coral">
            {p.slice(1, -1)}
          </span>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

export default function WhyAI() {
  return (
    <section className="bg-paper px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">// {whyAI.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-4xl text-[clamp(1.8rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight">
            <Highlighted text={whyAI.heading} />
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-graphite">
            {whyAI.lead}
          </p>
        </Reveal>

        {/* Then → Now pillars */}
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
          {whyAI.pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-6 bg-paper p-7 md:p-8">
                <span className="text-sm font-semibold text-coral">{p.label}</span>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-mist">
                    Traditional
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-graphite line-through decoration-ink/20">
                    {p.then}
                  </p>
                </div>
                <div className="mt-auto">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-coral">
                    Now ↓
                  </p>
                  <p className="mt-2 text-base font-medium leading-snug text-ink">
                    {p.now}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Creativity + certification band */}
        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-center">
              <h3 className="text-[clamp(1.4rem,3.2vw,2.4rem)] font-bold leading-tight tracking-tight">
                {whyAI.creativity.heading}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-graphite">
                {whyAI.creativity.body}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-ink p-7 text-paper md:p-8">
              <div className="flex items-center gap-3">
                <span className="text-coral">✦</span>
                <span className="text-sm font-semibold tracking-tight">
                  {whyAI.credential.badge}
                </span>
              </div>
              <div className="mt-8">
                <p className="text-sm leading-relaxed text-mist">
                  {whyAI.credential.note}
                </p>
                <div className="mt-6 flex items-center gap-8 border-t border-white/10 pt-6">
                  <div className="flex items-center gap-3">
                    <FigmaMark className="h-9 w-auto" />
                    <span className="text-sm text-mist">Figma</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ClaudeMark className="h-9 w-9 text-coral" />
                    <span className="text-sm text-mist">Claude Code</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-3xl text-[clamp(1.3rem,3vw,2rem)] font-semibold leading-snug tracking-tight">
            {whyAI.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
