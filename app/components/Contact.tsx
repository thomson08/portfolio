import Reveal from "./Reveal";
import { profile } from "../lib/content";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-coral px-6 py-28 text-ink md:px-10 md:py-40"
    >
      <span className="ghost absolute -bottom-6 right-0 text-[18vw] text-ink/[0.04]" style={{ WebkitTextStroke: "1px rgba(14,14,15,0.08)" }}>
        Ninh
      </span>
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink/60">
            Open to early-career design & product-engineering roles
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 text-[clamp(2.5rem,9vw,8rem)] font-bold leading-[0.9] tracking-tight">
            Let&apos;s build
            <br />
            something.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
            >
              {profile.email}
            </a>
            <a
              href={profile.socials[0].href}
              className="rounded-full border border-ink/30 px-7 py-4 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              LinkedIn ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
