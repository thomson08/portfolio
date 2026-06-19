import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "../../lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Work — Thomas Ninh" };
  return {
    title: `${project.name} — Thomas Ninh`,
    description: project.oneLiner,
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="bg-paper">
      {/* Header */}
      <header
        className="px-6 pb-20 pt-32 md:px-10"
        style={{ background: project.accent }}
      >
        <div className="mx-auto max-w-[1400px] text-paper mix-blend-luminosity">
          <a href="/#work" className="text-sm text-white/80 link-coral">
            ← Back to work
          </a>
          <p className="mt-10 text-sm uppercase tracking-[0.2em] text-white/80">
            {project.kind} · {project.year}
          </p>
          <h1 className="mt-4 text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[0.9] tracking-tight text-white">
            {project.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/90">
            {project.oneLiner}
          </p>
        </div>
      </header>

      {/* Body — placeholder structure to fill with real content + screens */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[260px_1fr]">
          <aside className="space-y-6 text-sm">
            <div>
              <p className="eyebrow">Role</p>
              <p className="mt-2 text-ink-soft">Design & build, end to end</p>
            </div>
            <div>
              <p className="eyebrow">Tools</p>
              <p className="mt-2 text-ink-soft">
                Figma Make · Claude · Gemini
              </p>
            </div>
            <div>
              <p className="eyebrow">Tags</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-ink/20 px-3 py-1 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="max-w-2xl space-y-10">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Overview</h2>
              <p className="mt-3 leading-relaxed text-graphite">
                Case study content coming soon — problem, process, key screens,
                and outcomes. Drop screenshots into{" "}
                <code className="text-ink-soft">/public/work/{project.slug}/</code>{" "}
                and we&apos;ll lay out the full story.
              </p>
            </div>
            <div className="aspect-[16/10] w-full rounded-xl border border-ink/10 bg-paper-dim" />
          </div>
        </div>
      </section>

      {/* Next project */}
      <a
        href={`/work/${next.slug}`}
        className="block border-t border-ink/10 px-6 py-16 transition-colors hover:bg-paper-dim md:px-10"
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between">
          <div>
            <p className="eyebrow">Next project</p>
            <p className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
              {next.name}
            </p>
          </div>
          <span className="text-coral">↗</span>
        </div>
      </a>
    </main>
  );
}
