import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import cafe from "@/assets/portfolio-cafe.jpg";
import hotel from "@/assets/portfolio-hotel.jpg";
import restaurant from "@/assets/portfolio-restaurant.jpg";
import salon from "@/assets/portfolio-salon.jpg";
import web from "@/assets/portfolio-web.jpg";
import branding from "@/assets/portfolio-branding.jpg";

type Device = "laptop" | "phone" | "poster";

type Item = {
  img: string;
  title: string;
  tag: string;
  year: string;
  device: Device;
  span: string;
  ratio: string;
};

const items: Item[] = [
  { img: cafe, title: "Maison de Café", tag: "Café — Branding & Web", year: "2025", device: "laptop", span: "md:col-span-8", ratio: "aspect-[16/10]" },
  { img: salon, title: "Atelier Lune", tag: "Salon — Brand System", year: "2025", device: "phone", span: "md:col-span-4", ratio: "aspect-[9/16]" },
  { img: hotel, title: "Hôtel Aurelia", tag: "Hospitality — Web & Booking", year: "2025", device: "poster", span: "md:col-span-5", ratio: "aspect-[4/5]" },
  { img: restaurant, title: "Noir & Olive", tag: "Restaurant — Identity", year: "2024", device: "laptop", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { img: web, title: "Studio Norte", tag: "Boutique — Web", year: "2024", device: "laptop", span: "md:col-span-7", ratio: "aspect-[16/10]" },
  { img: branding, title: "Verde Brûlé", tag: "Coffee Roaster — Identity", year: "2024", device: "poster", span: "md:col-span-5", ratio: "aspect-[4/5]" },
];

function LaptopFrame({ img, title }: { img: string; title: string }) {
  return (
    <div className="relative w-full">
      <div className="relative w-full aspect-[16/10] rounded-t-xl bg-[var(--noir)] p-2 md:p-3 shadow-[0_30px_80px_-30px_rgba(20,15,10,0.45)]">
        <div className="relative w-full h-full rounded-md overflow-hidden bg-[var(--ivory)]">
          {/* browser chrome */}
          <div className="h-7 md:h-8 bg-[var(--noir)]/90 flex items-center gap-1.5 px-3 md:px-4">
            <span className="w-2 h-2 rounded-full bg-white/25" />
            <span className="w-2 h-2 rounded-full bg-white/25" />
            <span className="w-2 h-2 rounded-full bg-white/25" />
            <span className="ml-3 text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/55 truncate">
              cielastudio.com / {title.toLowerCase().replace(/\s+/g, "-")}
            </span>
          </div>
          <div className="relative h-[calc(100%-1.75rem)] md:h-[calc(100%-2rem)] overflow-hidden">
            <motion.img
              src={img}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              initial={{ scale: 1.05 }}
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            />
            <div className="absolute inset-0 grain pointer-events-none opacity-50 mix-blend-overlay" />
          </div>
        </div>
      </div>
      {/* base */}
      <div className="mx-auto h-2 md:h-2.5 w-[55%] rounded-b-2xl bg-[var(--noir)]/85" />
      <div className="mx-auto h-px w-[18%] bg-[var(--noir)]/40" />
    </div>
  );
}

function PhoneFrame({ img, title }: { img: string; title: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] aspect-[9/18] rounded-[2.2rem] bg-[var(--noir)] p-2 shadow-[0_30px_80px_-30px_rgba(20,15,10,0.5)]">
      <div className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-[var(--ivory)]">
        {/* notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-full bg-[var(--noir)]" />
        <motion.img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 grain pointer-events-none opacity-60 mix-blend-overlay" />
      </div>
    </div>
  );
}

function PosterFrame({ img, title }: { img: string; title: string }) {
  return (
    <div className="relative w-full aspect-[4/5] bg-[var(--ivory)] p-3 md:p-4 shadow-[0_30px_80px_-30px_rgba(20,15,10,0.45)]">
      <div className="relative w-full h-full overflow-hidden">
        <motion.img
          src={img}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
        <div className="absolute inset-0 grain pointer-events-none opacity-60 mix-blend-overlay" />
      </div>
    </div>
  );
}

function PortfolioCard({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <Reveal delay={index * 0.05} className={`group ${item.span}`}>
      <motion.div ref={ref} style={{ y }} className="relative will-change-transform">
        <div
          className={[
            "relative",
            item.device === "laptop" && "px-1 md:px-3",
            item.device === "phone" && "py-6 md:py-12 bg-gradient-to-br from-[var(--beige)]/60 to-[var(--ivory)] rounded-md",
            item.device === "poster" && "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {item.device === "laptop" && <LaptopFrame img={item.img} title={item.title} />}
          {item.device === "phone" && <PhoneFrame img={item.img} title={item.title} />}
          {item.device === "poster" && <PosterFrame img={item.img} title={item.title} />}
        </div>

        {/* Caption */}
        <div className="mt-6 md:mt-8 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
              {String(index + 1).padStart(2, "0")} — {item.tag}
            </p>
            <h3 className="font-display text-2xl md:text-4xl leading-[1.05] text-balance">
              <span className="bg-gradient-to-r from-foreground to-foreground bg-[length:0%_1px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_1px] transition-[background-size] duration-1000 ease-cinema">
                {item.title}
              </span>
            </h3>
          </div>
          <div className="shrink-0 flex flex-col items-end gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {item.year}
            </span>
            <span className="w-10 h-10 rounded-full border border-border inline-flex items-center justify-center transition-all duration-700 ease-cinema group-hover:bg-foreground group-hover:text-background group-hover:border-foreground">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-56 bg-[var(--ivory)]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Heading */}
        <div className="grid md:grid-cols-12 gap-8 mb-20 md:mb-32">
          <Reveal className="md:col-span-7">
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Selected Work, 2024 — 2025</p>
            <h2 className="font-display text-6xl md:text-[8rem] leading-[0.92] tracking-[-0.02em] text-balance text-gradient-mocha">
              Quiet brands,<br />
              <span className="italic font-light">loud presence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-4 md:col-start-9 md:pt-6">
            <p className="text-muted-foreground leading-relaxed">
              A curated archive of recent work shaped slowly with hospitality and lifestyle
              brands. Each project a complete world — identity, motion, interface and tone.
            </p>
            <div className="mt-8 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="block h-px w-10 bg-foreground/40" />
              <span>Six of forty-eight</span>
            </div>
          </Reveal>
        </div>

        {/* Pinterest-inspired asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 md:gap-x-12 gap-y-24 md:gap-y-40">
          {items.map((it, i) => (
            <PortfolioCard key={it.title} item={it} index={i} />
          ))}
        </div>

        {/* Footer line */}
        <Reveal>
          <div className="mt-32 md:mt-44 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t border-border pt-10">
            <p className="font-display text-3xl md:text-5xl leading-[1.05] max-w-[18ch] text-balance">
              The full archive lives in conversation.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 self-start text-sm uppercase tracking-[0.25em]"
            >
              <span className="relative">
                Request the studio book
                <span className="absolute left-0 -bottom-1 h-px w-full bg-foreground origin-right scale-x-100 group-hover:scale-x-0 group-hover:origin-left transition-transform duration-700 ease-cinema" />
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
