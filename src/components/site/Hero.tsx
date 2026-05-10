import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const slides = [hero, hero2];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "32%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(6px)"]);

  // Slow background crossfade
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-noir">
      {/* Cinematic background — crossfading slow ken-burns */}
      <motion.div style={{ y, scale, filter: blur }} className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={slides[index]}
            alt="Cinematic luxury interior"
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 1.18 }}
            animate={{ opacity: 1, scale: 1.04 }}
            exit={{ opacity: 0, scale: 1.0 }}
            transition={{
              opacity: { duration: 2.4, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 9, ease: "linear" },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Layered scrims for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/15 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_28%,rgba(0,0,0,0.55)_100%)]" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </motion.div>

      {/* Hairline frame */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-[var(--ivory)]/10 rounded-sm z-10" />

      {/* Vertical side label */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-10 items-center gap-4 text-[var(--ivory)]/55"
        style={{ writingMode: "vertical-rl" as const, transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em]">— Studio · Worldwide</span>
      </motion.div>

      {/* Top meta row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute top-10 md:top-14 inset-x-0 z-10 px-10 md:px-16 hidden md:flex items-center justify-between text-[var(--ivory)]/55 font-mono text-[10px] uppercase tracking-[0.4em]"
      >
        <span>N° 001 — Cinematic Edition</span>
        <span>Est. MMXXV</span>
      </motion.div>

      {/* Headline + CTAs */}
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
              Ciela Studio — A digital atelier
            </p>
          </motion.div>

          <h1 className="font-display text-[13vw] md:text-[8.6vw] leading-[0.92] tracking-[-0.02em] max-w-[15ch] text-balance">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.9, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Building digital
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.05, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="italic font-light text-[var(--ivory)]/85">identities</span> for
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 1.2, duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
              >
                modern businesses.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 1 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 items-start sm:items-center"
          >
            <MagneticButton
              href="#work"
              className="group relative overflow-hidden inline-flex items-center gap-3 bg-[var(--ivory)] text-[var(--noir)] px-8 py-4 rounded-full text-sm tracking-wide isolate"
            >
              <span className="absolute inset-0 -z-10 bg-[var(--gold)] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-cinema" />
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-500 group-hover:rotate-45" />
            </MagneticButton>
            <MagneticButton
              href="#contact"
              className="group relative overflow-hidden inline-flex items-center gap-3 border border-[var(--ivory)]/30 text-[var(--ivory)] px-8 py-4 rounded-full text-sm tracking-wide isolate"
            >
              <span className="absolute inset-0 -z-10 bg-[var(--ivory)]/10 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-700 ease-cinema" />
              <span>Book Consultation</span>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mt-10 max-w-md text-[var(--ivory)]/60 text-sm leading-relaxed border-l border-[var(--ivory)]/15 pl-5"
          >
            A small atelier crafting cinematic websites and brand systems for cafés,
            hotels, restaurants and considered local brands.
          </motion.div>
        </div>
      </motion.div>

      {/* Slide indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 left-10 z-10 hidden md:flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/55"
      >
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span className="block h-px w-12 bg-[var(--ivory)]/30 overflow-hidden">
          <motion.span
            key={index}
            className="block h-full bg-[var(--ivory)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6.5, ease: "linear" }}
          />
        </span>
        <span>{String(slides.length).padStart(2, "0")}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-10 right-10 z-10 text-[var(--ivory)]/60 text-[10px] uppercase tracking-[0.3em] flex items-center gap-3"
      >
        Scroll
        <span className="relative block h-10 w-px bg-[var(--ivory)]/20 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-[var(--ivory)]"
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--ivory)] z-[5]" />
    </section>
  );
}
