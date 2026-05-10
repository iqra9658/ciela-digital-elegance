import { Reveal } from "./Reveal";
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion";
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
  category?: "café" | "hotel" | "restaurant" | "salon" | "boutique" | "roaster";
};

const items: Item[] = [
  { img: cafe, title: "Maison de Café", tag: "Café — Branding & Web", year: "2025", device: "laptop", span: "md:col-span-8", ratio: "aspect-[16/10]", category: "café" },
  { img: salon, title: "Atelier Lune", tag: "Salon — Brand System", year: "2025", device: "phone", span: "md:col-span-4", ratio: "aspect-[9/16]", category: "salon" },
  { img: hotel, title: "Hôtel Aurelia", tag: "Hospitality — Web & Booking", year: "2025", device: "poster", span: "md:col-span-5", ratio: "aspect-[4/5]", category: "hotel" },
  { img: restaurant, title: "Noir & Olive", tag: "Restaurant — Identity", year: "2024", device: "laptop", span: "md:col-span-7", ratio: "aspect-[16/10]", category: "restaurant" },
  { img: web, title: "Studio Norte", tag: "Boutique — Web", year: "2024", device: "laptop", span: "md:col-span-7", ratio: "aspect-[16/10]", category: "boutique" },
  { img: branding, title: "Verde Brûlé", tag: "Coffee Roaster — Identity", year: "2024", device: "poster", span: "md:col-span-5", ratio: "aspect-[4/5]", category: "roaster" },
];

function LaptopFrame({ img, title }: { img: string; title: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const boxShadow = useMotionTemplate`0 30px 120px -20px rgba(20, 15, 10, ${useTransform(mouseX, [0, 400], [0.25, 0.5])}), inset 0 0 60px rgba(255, 255, 255, ${useTransform(mouseX, [0, 400], [0, 0.1])})`;

  return (
    <motion.div 
      className="relative w-full"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <motion.div 
        className="relative w-full aspect-[16/10] rounded-t-xl bg-[var(--noir)] p-2 md:p-3 transition-all duration-700 group-hover:rounded-t-2xl"
        style={{ boxShadow }}
      >
        <motion.div 
          className="relative w-full h-full rounded-md overflow-hidden bg-[var(--ivory)] group-hover:shadow-inner transition-shadow duration-700"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* browser chrome */}
          <motion.div 
            className="h-7 md:h-8 bg-[var(--noir)]/90 flex items-center gap-1.5 px-3 md:px-4 group-hover:bg-[var(--noir)] transition-colors duration-500"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            <motion.span className="w-2 h-2 rounded-full bg-white/25 group-hover:bg-white/40 transition-colors duration-300" />
            <motion.span className="w-2 h-2 rounded-full bg-white/25 group-hover:bg-white/40 transition-colors duration-300" />
            <motion.span className="w-2 h-2 rounded-full bg-white/25 group-hover:bg-white/40 transition-colors duration-300" />
            <motion.span className="ml-3 text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white/55 group-hover:text-white/75 truncate transition-colors duration-500">
              cielastudio.com / {title.toLowerCase().replace(/\s+/g, "-")}
            </motion.span>
          </motion.div>
          <div className="relative h-[calc(100%-1.75rem)] md:h-[calc(100%-2rem)] overflow-hidden bg-gradient-to-br from-[var(--ivory)] to-[var(--beige)]">
            <motion.img
              src={img}
              alt={title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              initial={{ scale: 1.05, filter: "brightness(0.95)" }}
              whileHover={{ scale: 1.2, filter: "brightness(1.05)" }}
              transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
            />
            <motion.div 
              className="absolute inset-0 grain pointer-events-none opacity-30 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-700" 
            />
            {/* Shine overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </motion.div>
      {/* base */}
      <motion.div 
        className="mx-auto h-2 md:h-2.5 w-[55%] rounded-b-2xl bg-[var(--noir)]/85 group-hover:bg-[var(--noir)] transition-colors duration-500"
        whileHover={{ scaleY: 1.2 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div 
        className="mx-auto h-px w-[18%] bg-[var(--noir)]/40 group-hover:bg-[var(--noir)]/60 transition-colors duration-500"
        whileHover={{ scaleX: 1.15 }}
        transition={{ duration: 0.6 }}
      />
    </motion.div>
  );
}

function PhoneFrame({ img, title }: { img: string; title: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const boxShadow = useMotionTemplate`0 30px 120px -20px rgba(20, 15, 10, ${useTransform(mouseX, [0, 280], [0.3, 0.6])}), inset 0 0 80px rgba(255, 255, 255, ${useTransform(mouseX, [0, 280], [0, 0.15])})`;

  return (
    <motion.div 
      className="relative mx-auto w-full max-w-[280px] aspect-[9/18]"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <motion.div 
        className="relative w-full h-full rounded-[2.2rem] bg-[var(--noir)] p-2 group-hover:rounded-[2.5rem] transition-all duration-700"
        style={{ boxShadow }}
        whileHover={{ 
          y: -6,
          rotateX: 5,
          rotateY: -5
        }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div 
          className="relative w-full h-full rounded-[1.7rem] overflow-hidden bg-[var(--ivory)] group-hover:shadow-inner transition-shadow duration-700"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6 }}
        >
          {/* notch */}
          <motion.div 
            className="absolute top-2 left-1/2 -translate-x-1/2 z-10 h-5 w-24 rounded-full bg-[var(--noir)] group-hover:bg-black transition-colors duration-500"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
          />
          <motion.img
            src={img}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{ scale: 1.05, filter: "brightness(0.95)" }}
            whileHover={{ scale: 1.2, filter: "brightness(1.08)" }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          />
          <motion.div 
            className="absolute inset-0 grain pointer-events-none opacity-40 mix-blend-overlay group-hover:opacity-25 transition-opacity duration-700" 
          />
          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function PosterFrame({ img, title }: { img: string; title: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const boxShadow = useMotionTemplate`0 30px 120px -20px rgba(20, 15, 10, ${useTransform(mouseX, [0, 300], [0.25, 0.5])})`;

  return (
    <motion.div 
      className="relative w-full aspect-[4/5]"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <motion.div 
        className="relative w-full h-full bg-[var(--ivory)] p-3 md:p-4 group-hover:bg-white transition-colors duration-500"
        style={{ boxShadow }}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <motion.div 
          className="relative w-full h-full overflow-hidden bg-gradient-to-br from-[var(--ivory)] to-[var(--beige)]"
          whileHover={{ 
            boxShadow: "inset 0 0 60px rgba(0, 0, 0, 0.1)"
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={img}
            alt={title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover will-change-transform"
            initial={{ scale: 1.05, filter: "brightness(0.95) contrast(0.98)" }}
            whileHover={{ scale: 1.15, filter: "brightness(1.05) contrast(1.02)" }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
          />
          <motion.div 
            className="absolute inset-0 grain pointer-events-none opacity-30 mix-blend-overlay group-hover:opacity-20 transition-opacity duration-700" 
          />
          {/* Vignette effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/0 via-transparent to-black/5 pointer-events-none"
            initial={{ opacity: 0.3 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function PortfolioCard({ item, index }: { item: Item; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  return (
    <Reveal delay={index * 0.05} className={`group ${item.span}`}>
      <motion.div 
        ref={ref} 
        style={{ y, opacity }} 
        className="relative will-change-transform"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "0px 0px -150px 0px" }}
      >
        <motion.div
          className={[
            "relative transition-all duration-700",
            item.device === "laptop" && "px-1 md:px-3 group-hover:px-2 md:group-hover:px-4",
            item.device === "phone" && "py-6 md:py-12 bg-gradient-to-br from-[var(--beige)]/60 to-[var(--ivory)] rounded-md group-hover:from-[var(--beige)]/80 group-hover:to-white",
            item.device === "poster" && "",
          ]
            .filter(Boolean)
            .join(" ")}
          whileHover={{ 
            scale: 1.01,
            transition: { duration: 0.5 }
          }}
        >
          {item.device === "laptop" && <LaptopFrame img={item.img} title={item.title} />}
          {item.device === "phone" && <PhoneFrame img={item.img} title={item.title} />}
          {item.device === "poster" && <PosterFrame img={item.img} title={item.title} />}
        </motion.div>

        {/* Caption with enhanced animations */}
        <motion.div 
          className="mt-6 md:mt-8 flex items-start justify-between gap-6 group-hover:gap-8 transition-all duration-700"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="min-w-0 flex-1">
            <motion.p 
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2 group-hover:text-foreground/70 transition-colors duration-500"
              whileHover={{ letterSpacing: "0.4em" }}
              transition={{ duration: 0.5 }}
            >
              {String(index + 1).padStart(2, "0")} — {item.tag}
            </motion.p>
            <motion.h3 
              className="font-display text-2xl md:text-4xl leading-[1.05] text-balance group-hover:text-foreground transition-colors duration-500"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              style={{ originX: 0 }}
            >
              <motion.span 
                className="inline-block bg-gradient-to-r from-foreground to-foreground bg-[length:0%_2px] bg-no-repeat bg-left-bottom group-hover:bg-[length:100%_2px] transition-all duration-1000 ease-cinema"
                whileHover={{ 
                  backgroundImage: "linear-gradient(to right, var(--noir), var(--noir))"
                }}
              >
                {item.title}
              </motion.span>
            </motion.h3>
          </div>
          <motion.div 
            className="shrink-0 flex flex-col items-end gap-3"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span 
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground group-hover:text-foreground/70 transition-colors duration-500"
              whileHover={{ letterSpacing: "0.4em" }}
              transition={{ duration: 0.5 }}
            >
              {item.year}
            </motion.span>
            <motion.span 
              className="w-10 h-10 rounded-full border border-border inline-flex items-center justify-center transition-all duration-700 ease-cinema group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:scale-110"
              whileHover={{ 
                y: -2,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                animate={{ rotate: 0 }}
                whileHover={{ rotate: 45 }}
                transition={{ duration: 0.5 }}
              >
                <ArrowUpRight className="w-4 h-4" />
              </motion.div>
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Subtle underline indicator */}
        <motion.div
          className="absolute -bottom-2 left-0 h-px bg-foreground/20 group-hover:bg-foreground/40 transition-colors duration-500"
          initial={{ width: 0 }}
          whileHover={{ width: 60 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        />
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
