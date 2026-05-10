import { Reveal } from "./Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import cafe from "@/assets/portfolio-cafe.jpg";
import hotel from "@/assets/portfolio-hotel.jpg";
import restaurant from "@/assets/portfolio-restaurant.jpg";
import salon from "@/assets/portfolio-salon.jpg";
import web from "@/assets/portfolio-web.jpg";
import branding from "@/assets/portfolio-branding.jpg";

const items = [
  { img: cafe, title: "Maison de Café", tag: "Café — Branding & Web", year: "2025", span: "md:col-span-7 md:row-span-2" },
  { img: hotel, title: "Hôtel Aurelia", tag: "Hospitality — Web & Booking", year: "2025", span: "md:col-span-5" },
  { img: restaurant, title: "Noir & Olive", tag: "Restaurant — Identity", year: "2024", span: "md:col-span-5" },
  { img: salon, title: "Atelier Lune", tag: "Salon — Brand System", year: "2024", span: "md:col-span-4" },
  { img: web, title: "Studio Norte", tag: "Boutique — Web", year: "2024", span: "md:col-span-4" },
  { img: branding, title: "Verde Brûlé", tag: "Coffee Roaster — Identity", year: "2024", span: "md:col-span-4" },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Selected Work</p>
            <h2 className="font-display text-6xl md:text-8xl leading-[0.98] max-w-[14ch] text-balance text-gradient-mocha">
              Quiet brands, loud presence.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-muted-foreground leading-relaxed">
              A glimpse of recent collaborations across hospitality, beauty and craft —
              each one shaped slowly, with intent.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-7 auto-rows-[280px] md:auto-rows-[320px]">
          {items.map((it, i) => (
            <Reveal
              key={it.title}
              delay={i * 0.06}
              className={`group relative overflow-hidden rounded-md bg-card shadow-elegant ${it.span}`}
            >
              {/* Browser-mockup chrome */}
              <div className="absolute top-0 inset-x-0 z-20 h-8 flex items-center gap-1.5 px-4 bg-[var(--noir)]/60 backdrop-blur-md border-b border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="w-2 h-2 rounded-full bg-white/30" />
                <span className="ml-3 text-[10px] tracking-[0.25em] uppercase text-white/50 truncate">
                  cielastudio.com / {it.title.toLowerCase().replace(/\s+/g, "-")}
                </span>
              </div>

              <div className="absolute inset-0 overflow-hidden">
                <motion.img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover will-change-transform"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-700" />
                <div className="absolute inset-0 grain opacity-60 mix-blend-overlay pointer-events-none" />
              </div>

              {/* Year tag */}
              <div className="absolute top-4 right-4 z-10 font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ivory)]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {it.year}
              </div>

              <div className="relative h-full flex flex-col justify-end p-7 md:p-10 text-[var(--ivory)]">
                <motion.div
                  initial={false}
                  className="overflow-hidden"
                >
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/70 mb-3">{it.tag}</p>
                  <div className="flex items-end justify-between gap-6">
                    <h3 className="font-display text-3xl md:text-5xl leading-[1] translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-cinema">
                      {it.title}
                    </h3>
                    <span className="shrink-0 w-11 h-11 rounded-full border border-[var(--ivory)]/40 inline-flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-700 ease-cinema">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <div className="mt-5 h-px w-0 group-hover:w-full bg-[var(--ivory)]/40 transition-all duration-1000 ease-cinema" />
                </motion.div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
