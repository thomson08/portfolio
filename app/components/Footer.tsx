import { profile } from "../lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-10 text-paper md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 border-t border-white/10 pt-8 text-sm text-graphite md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Thomas Ninh</span>
        <span>Designed & built end to end.</span>
        <a href={`mailto:${profile.email}`} className="link-coral text-paper">
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
