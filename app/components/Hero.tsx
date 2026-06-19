"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, stats } from "../lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const portraitMask =
  "linear-gradient(to bottom, #000 54%, rgba(0,0,0,0.45) 66%, transparent 74%)";

function Stats({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className={`text-xl font-bold tracking-tight md:text-2xl ${
              s.accent ? "text-coral" : "text-ink"
            }`}
          >
            {s.value}
          </div>
          <div className="mt-0.5 max-w-[6.5rem] text-[9px] uppercase leading-tight tracking-wider text-graphite">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-paper">
      {/* ───────── Mobile layout (stacked) ───────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className="flex min-h-[100svh] flex-col items-center px-5 pb-12 pt-24 text-center md:hidden"
      >
        <h1 className="select-none font-bold leading-[0.85] tracking-[-0.03em] text-[clamp(3rem,17vw,5.5rem)]">
          <span style={{ WebkitTextStroke: "1.2px var(--color-ink)", color: "transparent" }}>
            Thomas
          </span>
          <br />
          <span className="text-ink">Ninh</span>
        </h1>

        <div className="relative mt-1 flex justify-center">
          <Image
            src="/portrait.png"
            alt="Thomas Ninh"
            width={698}
            height={1080}
            priority
            className="h-[38vh] w-auto object-contain object-bottom"
            style={{ maskImage: portraitMask, WebkitMaskImage: portraitMask }}
          />
        </div>

        <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-tight">
          Product Designer <span className="text-coral">& AI Builder</span>
        </h2>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-graphite">
          Designing and shipping AI-powered products, end to end.
        </p>

        <div className="mt-5 flex w-full max-w-xs flex-col items-center gap-3">
          <a
            href="#contact"
            className="w-full rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper"
          >
            Let&apos;s talk ↗
          </a>
          <div className="flex w-full gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-4 py-3 text-sm"
              >
                {s.label} <span aria-hidden>↗</span>
              </a>
            ))}
          </div>
        </div>

        <Stats className="mt-auto flex w-full justify-between gap-3 pt-10" />
      </motion.div>

      {/* ───────── Desktop layout (layered) ───────── */}
      <div className="hidden md:block">
        {/* Name — sits BEHIND the portrait */}
        <div className="pointer-events-none absolute inset-x-0 top-[18vh] z-10 px-4 text-center">
          <h1 className="select-none font-bold leading-[0.82] tracking-[-0.035em] text-[clamp(3.2rem,15.7vw,17rem)]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
              style={{ WebkitTextStroke: "1.5px var(--color-ink)", color: "transparent" }}
            >
              Thomas
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.42, ease }}
              className="text-ink"
            >
              Ninh
            </motion.span>
          </h1>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 0.15, ease }}
          className="pointer-events-none absolute inset-x-0 -bottom-[7vh] z-20 flex justify-center"
        >
          <Image
            src="/portrait.png"
            alt="Thomas Ninh"
            width={698}
            height={1080}
            priority
            className="h-[80vh] max-h-[840px] w-auto object-contain object-bottom"
            style={{ maskImage: portraitMask, WebkitMaskImage: portraitMask }}
          />
        </motion.div>

        {/* Left — role + tagline + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease }}
          className="absolute left-10 top-[54%] z-30 max-w-xs"
        >
          <h2 className="text-3xl font-semibold leading-tight tracking-tight">
            Product Designer
            <br />
            <span className="text-coral">& AI Builder</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-graphite">
            Designing and shipping AI-powered products, end to end.
          </p>
          <a
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
          >
            Let&apos;s talk ↗
          </a>
        </motion.div>

        {/* Right — social pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease }}
          className="absolute right-10 top-[50%] z-30 flex flex-col gap-3"
        >
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="flex items-center justify-between gap-6 rounded-full border border-ink/15 bg-white/70 px-5 py-3 text-sm backdrop-blur transition-colors duration-300 hover:border-coral hover:text-coral"
            >
              {s.label} <span aria-hidden>↗</span>
            </a>
          ))}
        </motion.div>

        {/* Bottom-left — stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
          className="absolute bottom-8 left-10 z-30"
        >
          <Stats className="flex gap-10" />
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, ease }}
          className="pointer-events-none absolute bottom-8 right-10 z-30 text-[10px] uppercase tracking-[0.25em] text-graphite"
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  );
}
