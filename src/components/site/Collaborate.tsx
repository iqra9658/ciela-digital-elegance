import { Reveal } from "./Reveal";
import { ArrowUpRight } from "lucide-react";

const roles = ["Marketers", "Designers", "Developers", "Photographers", "Strategists", "Writers"];

export function Collaborate() {
  return (
    <section className="relative py-32 md:py-48 bg-[var(--mocha)] text-[var(--ivory)] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <Reveal className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--ivory)]/60 mb-6">— Collaborate</p>
            <h2 className="font-display text-5xl md:text-8xl leading-[0.98] text-balance">
              Quiet talents wanted.
            </h2>
            <p className="mt-8 max-w-xl text-[var(--ivory)]/70 text-lg leading-relaxed">
              We build slowly with a circle of trusted collaborators around the world. If you make
              beautiful, intentional work — let's talk.
            </p>
            <a
              href="#contact"
              className="mt-10 group inline-flex items-center gap-3 border border-[var(--ivory)]/30 px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--ivory)] hover:text-[var(--mocha)] transition-all duration-700 ease-cinema"
            >
              Join the studio circle
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </a>
          </Reveal>
          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end content-start">
            {roles.map((r, i) => (
              <Reveal key={r} delay={i * 0.05}>
                <span className="inline-block px-5 py-3 rounded-full border border-[var(--ivory)]/20 text-sm hover:bg-[var(--ivory)]/10 transition-colors duration-500">
                  {r}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
