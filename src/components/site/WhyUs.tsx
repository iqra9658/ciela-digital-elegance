import { Reveal } from "./Reveal";
import { Sparkles, UserRoundPen, MonitorSmartphone, Workflow, LifeBuoy } from "lucide-react";

const reasons = [
  { icon: Sparkles, t: "Premium Aesthetics", d: "Considered typography, restrained palettes, cinematic motion." },
  { icon: UserRoundPen, t: "Personalized Design", d: "Built to your story — never templated, never recycled." },
  { icon: MonitorSmartphone, t: "Modern UI / UX", d: "Accessible, fast, beautiful on every screen and context." },
  { icon: Workflow, t: "Automation", d: "Quiet systems that take repetitive work off your plate." },
  { icon: LifeBuoy, t: "Maintenance Support", d: "An ongoing partnership long after launch day." },
];

export function WhyUs() {
  return (
    <section className="relative py-32 md:py-48 bg-[var(--noir)] text-[var(--ivory)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-5 md:sticky md:top-32 self-start">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--ivory)]/50 mb-6">— Why Ciela</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Designed slowly, so it lasts.
            </h2>
            <p className="mt-8 text-[var(--ivory)]/60 max-w-md leading-relaxed">
              Five quiet commitments that shape every project we touch.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-7 space-y-px">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 0.06}>
              <div className="group flex items-start gap-6 py-8 border-t border-[var(--ivory)]/10 hover:border-[var(--gold)]/40 transition-colors duration-500">
                <div className="shrink-0 w-12 h-12 rounded-full border border-[var(--ivory)]/15 flex items-center justify-center group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)]/10 transition-all duration-500">
                  <r.icon className="w-5 h-5 text-[var(--ivory)]/80 group-hover:text-[var(--gold)] transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{r.t}</h3>
                  <p className="mt-2 text-[var(--ivory)]/60 max-w-lg">{r.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
