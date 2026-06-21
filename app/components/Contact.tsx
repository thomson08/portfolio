import Reveal from "./Reveal";
import ContactForm from "./ContactForm";
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
      <div className="relative mx-auto grid max-w-[1400px] gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ink/60">
              Open to early-career design & product-engineering roles
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight">
              Let&apos;s build
              <br />
              something.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="text-sm font-medium underline underline-offset-4 hover:text-ink/70"
              >
                {profile.email}
              </a>
              <span className="text-ink/30">·</span>
              <a
                href={profile.socials[0].href}
                className="text-sm font-medium underline underline-offset-4 hover:text-ink/70"
              >
                LinkedIn ↗︎
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
