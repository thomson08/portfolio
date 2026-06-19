import Reveal from "./Reveal";
import ParticleGlobe from "./ParticleGlobe";
import { intro } from "../lib/content";

// Renders text with {coral} segments highlighted.
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

export default function IntroStatement() {
  return (
    <section className="relative overflow-hidden bg-ink px-6 py-28 text-paper md:px-10 md:py-40">
      <span className="ghost absolute -bottom-10 left-0 text-[20vw]">Ninh</span>
      <ParticleGlobe className="pointer-events-none absolute -bottom-10 -right-6 h-[70%] w-[60%] opacity-70 md:bottom-0 md:right-0 md:h-[95%] md:w-[42%] md:opacity-90" />
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow text-coral">// {intro.eyebrow}</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-8 max-w-5xl text-[clamp(1.8rem,5vw,4rem)] font-bold leading-[1.08] tracking-tight">
            <Highlighted text={intro.body} />
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-mist md:text-lg">
            {intro.sub}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href="#work"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm transition-colors duration-300 hover:border-coral hover:text-coral"
          >
            See my work ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
