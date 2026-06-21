import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { projects } from "../../lib/content";
import CaseStudyView from "../../components/CaseStudyView";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

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
      <Nav subpage />
      {/* Header */}
      <header
        className="px-6 pb-20 pt-32 md:px-10"
        style={{ background: project.accent }}
      >
        <div className="mx-auto max-w-[1400px]">
          <a href="/#work" className="text-sm text-white/80 link-coral">
            ← Back to work
          </a>
          {project.logo && (
            <div className="mt-10">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-white/95 shadow-[0_12px_30px_-8px_rgba(0,0,0,0.35)] ring-1 ring-white/40 md:h-24 md:w-24">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={80}
                  height={80}
                  className="h-14 w-14 object-contain md:h-16 md:w-16"
                />
              </span>
            </div>
          )}
          <div className="text-paper mix-blend-luminosity">
            <p
              className={`text-sm uppercase tracking-[0.2em] text-white/80 ${
                project.logo ? "mt-8" : "mt-10"
              }`}
            >
              {project.kind} · {project.year}
            </p>
            <h1 className="mt-4 text-[clamp(2.5rem,9vw,7rem)] font-bold leading-[0.9] tracking-tight text-white">
              {project.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              {project.oneLiner}
            </p>
          </div>
        </div>
      </header>

      {/* Body */}
      {project.caseStudy ? (
        <CaseStudyView project={project} />
      ) : (
        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[260px_1fr]">
            <aside className="space-y-6 text-sm">
              <div>
                <p className="eyebrow">Role</p>
                <p className="mt-2 text-ink-soft">Design & build, end to end</p>
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
      )}

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

      <Footer />
    </main>
  );
}
