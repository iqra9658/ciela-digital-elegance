import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", t: "Website Design", d: "Editorial, performance-tuned sites that feel cinematic on every device." },
  { n: "02", t: "Branding", d: "Identity systems with restraint — typography, palette, voice and motion." },
  { n: "03", t: "QR Menus", d: "Beautifully designed digital menus your guests actually enjoy using." },
  { n: "04", t: "Booking Systems", d: "Frictionless reservations connected to your calendar and CRM." },
  { n: "05", t: "SEO", d: "Foundations and content strategy that bring the right people in." },
  { n: "06", t: "Social Media", d: "Templates, art direction and a content cadence that compounds." },
  { n: "07", t: "Automation", d: "Quiet systems that handle the repetitive work behind the scenes." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 md:py-48 bg-[var(--beige)]/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 mb-20">
          <Reveal className="md:col-span-5">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Services</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              A complete studio, kept intentionally small.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
            <p className="text-lg text-muted-foreground leading-relaxed mt-2">
              Seven disciplines. One quiet team. We move from first conversation to launch
              without losing the thread — so the final work feels coherent, considered and unmistakably yours.
            </p>
          </Reveal>
        </div>

        <div className="border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.04}>
              <motion.div
                whileHover="hover"
                className="group relative grid grid-cols-12 items-center gap-6 py-8 md:py-10 border-b border-border cursor-pointer"
              >
                <motion.div
                  variants={{ hover: { width: "100%" } }}
                  initial={{ width: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 bg-[var(--noir)] -z-0"
                />
                <div className="col-span-2 md:col-span-1 relative z-10 font-mono text-xs text-muted-foreground group-hover:text-[var(--ivory)]/60 transition-colors duration-700">
                  {s.n}
                </div>
                <div className="col-span-10 md:col-span-5 relative z-10 font-display text-3xl md:text-5xl group-hover:text-[var(--ivory)] transition-colors duration-700">
                  {s.t}
                </div>
                <div className="col-span-12 md:col-span-5 relative z-10 text-muted-foreground group-hover:text-[var(--ivory)]/70 transition-colors duration-700 text-sm md:text-base">
                  {s.d}
                </div>
                <div className="hidden md:flex col-span-1 relative z-10 justify-end">
                  <ArrowUpRight className="w-5 h-5 text-foreground group-hover:text-[var(--ivory)] group-hover:rotate-45 transition-all duration-700" />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
