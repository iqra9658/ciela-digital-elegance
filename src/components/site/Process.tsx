import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discovery", d: "Conversations, audits, audience clarity." },
  { n: "02", t: "Brand Vision", d: "Direction, mood and the language of the brand." },
  { n: "03", t: "Design", d: "Editorial layouts, motion, components." },
  { n: "04", t: "Development", d: "Hand-crafted, performant, accessible." },
  { n: "05", t: "Launch", d: "Calm, coordinated, on time." },
  { n: "06", t: "Growth", d: "Iteration, content, optimisation." },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal>
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Process</p>
          <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-[16ch] mb-20">
            Six steps. One unhurried rhythm.
          </h2>
        </Reveal>

        <div className="relative grid md:grid-cols-6 gap-y-12">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-border" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="relative md:pr-6">
              <div className="flex md:block items-center gap-4 md:gap-0">
                <div className="relative md:mb-6">
                  <div className="w-3 h-3 rounded-full bg-[var(--mocha)] ring-8 ring-background" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Step {s.n}</div>
                  <div className="font-display text-2xl md:text-3xl">{s.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
