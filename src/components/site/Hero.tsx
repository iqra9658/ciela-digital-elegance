import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.jpg";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-noir">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={hero}
          alt="Cinematic luxury café interior"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24 text-[var(--ivory)]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[var(--ivory)]/70 mb-6"
          >
            Ciela Studio — Est. 2025 — Worldwide
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[12vw] md:text-[8.5vw] leading-[0.95] tracking-tight max-w-[14ch] text-balance"
          >
            Building digital identities for modern businesses.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-[var(--ivory)] text-[var(--noir)] px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--gold)] transition-all duration-700 ease-cinema"
            >
              Explore Our Work
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-[var(--ivory)]/30 text-[var(--ivory)] px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--ivory)]/10 transition-all duration-500"
            >
              Book Consultation
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 right-6 md:right-10 z-10 text-[var(--ivory)]/60 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3"
      >
        Scroll
        <span className="block h-8 w-px bg-[var(--ivory)]/40 origin-top animate-pulse" />
      </motion.div>
    </section>
  );
}
