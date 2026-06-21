"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// `subpage` = rendered on a /work/<slug> page rather than the homepage.
// On subpages, anchor links point back to the homepage (/#work) and the bar
// renders in white over the colored hero until the user scrolls.
export default function Nav({ subpage = false }: { subpage?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const base = subpage ? "/" : "";
  // White treatment only over the colored hero (subpage, at the top, menu closed)
  const dark = subpage && !scrolled && !open;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled || open ? "bg-paper/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a
          href={subpage ? "/" : "#top"}
          className={`text-sm font-semibold tracking-tight ${
            dark ? "text-white" : ""
          }`}
        >
          © Thomas Ninh
        </a>

        {/* Desktop links */}
        <ul
          className={`hidden items-center gap-8 text-sm md:flex ${
            dark ? "text-white/90" : "text-ink-soft"
          }`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={`${base}${l.href}`} className="link-coral">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`${base}#contact`}
          className="hidden text-sm font-medium text-coral link-coral md:inline"
        >
          Let&apos;s talk ↗︎
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-6 w-7 flex-col items-end justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] transition-all duration-300 ${
              dark ? "bg-white" : "bg-ink"
            } ${open ? "w-6 translate-y-[7px] rotate-45" : "w-7"}`}
          />
          <span
            className={`h-[2px] w-5 transition-all duration-300 ${
              dark ? "bg-white" : "bg-ink"
            } ${open ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-[2px] transition-all duration-300 ${
              dark ? "bg-white" : "bg-ink"
            } ${open ? "w-6 -translate-y-[7px] -rotate-45" : "w-7"}`}
          />
        </button>
      </nav>
    </header>

      {/* Mobile menu panel — sibling of header so `fixed` is viewport-relative */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-paper px-6 pt-28 transition-[opacity,transform] duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {links.map((l, i) => (
            <li key={l.href}>
              <a
                href={`${base}${l.href}`}
                onClick={() => setOpen(false)}
                className="block py-2 text-4xl font-bold tracking-tight"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`${base}#contact`}
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-medium text-paper"
        >
          Let&apos;s talk ↗︎
        </a>
      </div>
    </>
  );
}
