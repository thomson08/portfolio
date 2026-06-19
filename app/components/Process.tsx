import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Idea & product thinking",
    body: "Define the problem, the user, and the core flow before a pixel exists.",
  },
  {
    n: "02",
    title: "Design in Figma",
    body: "Generate high-fidelity directions fast, then curate and refine to a high aesthetic bar.",
  },
  {
    n: "03",
    title: "Build with Claude & Gemini",
    body: "Convert the design into real, production components — interactive demos, not mockups.",
  },
  {
    n: "04",
    title: "Ship & iterate",
    body: "Deploy, test with real use, and turn what I learn into reusable patterns.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-paper px-6 py-28 md:px-10 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="eyebrow">// Process</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-3xl text-[clamp(1.6rem,4vw,3rem)] font-bold leading-tight tracking-tight">
            Idea to shipped product —{" "}
            <span className="text-coral">end to end, with AI tools.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="border-t border-ink/15 pt-5">
                <span className="text-sm font-semibold text-coral">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
