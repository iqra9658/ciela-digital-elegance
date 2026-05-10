import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.jpg";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-noir">
      {/* Cinematic ken-burns background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <motion.img
          src={hero}
          alt="Cinematic luxury café interior"
          width={1920}
          height={1080}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.45)_100%)]" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </motion.div>

      <motion.div style={{ opacity, y: titleY }} className="relative z-10 h-full flex flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24 text-[var(--ivory)]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="block h-px w-10 bg-[var(--ivory)]/50" />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[var(--ivory)]/70">
              Ciela Studio — Est. 2025 — Worldwide
            </p>
          </motion.div>

          <h1 className="font-display text-[12vw] md:text-[8.5vw] leading-[0.95] tracking-tight max-w-[14ch] text-balance overflow-hidden">
            {["Building digital", "identities for", "modern businesses."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 1.0 + i * 0.18, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <MagneticButton
              href="#work"
              className="group inline-flex items-center gap-3 bg-[var(--ivory)] text-[var(--noir)] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--gold)] transition-colors duration-700 ease-cinema"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="group inline-flex items-center gap-3 border border-[var(--ivory)]/30 text-[var(--ivory)] px-8 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--ivory)]/10 transition-colors duration-500"
            >
              <span>Book Consultation</span>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 right-6 md:right-10 z-10 text-[var(--ivory)]/60 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3"
      >
        Scroll
        <span className="relative block h-10 w-px bg-[var(--ivory)]/20 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-[var(--ivory)]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
