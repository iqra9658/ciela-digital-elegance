import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import hero from "@/assets/hero.jpg";
import hero2 from "@/assets/hero-2.jpg";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const slides = [hero, hero2];

// Cinematic easing curves for luxury feel
const easeInOutCinematic = [0.16, 1, 0.3, 1];
const easeOutLuxury = [0.34, 1.56, 0.64, 1];
const easeOutExpo = [0.19, 1, 0.22, 1];

// Text animation variants
const titleLetterVariants = {
  hidden: { opacity: 0, y: "110%", filter: "blur(10px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: "0%",
    filter: "blur(0px)",
    transition: {
      delay: 0.9 + i * 0.08,
      duration: 1.2,
      ease: easeInOutCinematic,
    },
  }),
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      delay: 1.8,
      ease: easeOutLuxury,
    },
  },
};

const ctaGroupVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.8,
      staggerChildren: 0.15,
    },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: easeOutLuxury,
    },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const blur = useTransform(scrollYProgress, [0, 1], ["blur(0px)", "blur(8px)"]);

  // Slow background crossfade
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} id="top" className="relative h-[100svh] min-h-[680px] overflow-hidden bg-noir">
      {/* Cinematic background — crossfading slow ken-burns with enhanced parallax */}
      <motion.div style={{ y, scale, filter: blur }} className="absolute inset-0">
        <AnimatePresence>
          <motion.img
            key={index}
            src={slides[index]}
            alt="Cinematic luxury interior"
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 1.22, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1.05, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
            transition={{
              opacity: { duration: 2.6, ease: easeOutExpo },
              scale: { duration: 9.2, ease: "linear" },
              filter: { duration: 2.6, ease: easeOutExpo },
            }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>

        {/* Enhanced layered scrims for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/88" />
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.55, 0.75]) }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.65)_100%)]"
        />
        <div className="absolute inset-0 grain pointer-events-none opacity-25" />
        
        {/* Subtle vignette for luxury effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none" />
      </motion.div>

      {/* Hairline frame */}
      <div className="pointer-events-none absolute inset-6 md:inset-10 border border-[var(--ivory)]/10 rounded-sm z-10" />

      {/* Vertical side label with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]) }}
        initial={{ opacity: 0, x: -12, filter: "blur(6px)" }}
        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        transition={{ delay: 1.5, duration: 1.2, ease: easeOutLuxury }}
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-10 items-center gap-4 text-[var(--ivory)]/50 hover:text-[var(--ivory)]/70 transition-colors duration-500"
        style={{ writingMode: "vertical-rl" as const, transform: "translateY(-50%) rotate(180deg)" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em]">— Studio · Worldwide</span>
      </motion.div>

      {/* Top meta row with parallax */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]) }}
        initial={{ opacity: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 1.3, duration: 1.2, ease: easeOutLuxury }}
        className="absolute top-10 md:top-14 inset-x-0 z-10 px-10 md:px-16 hidden md:flex items-center justify-between text-[var(--ivory)]/50 hover:text-[var(--ivory)]/70 transition-colors duration-500 font-mono text-[10px] uppercase tracking-[0.4em]"
      >
        <span>N° 001 — Cinematic Edition</span>
        <span>Est. MMXXV</span>
      </motion.div>

      {/* Headline + CTAs */}
      <motion.div style={{ opacity, y: titleY }} className="relative z-10 h-full flex flex-col">
        <div className="flex-1" />
        <div className="mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24 text-[var(--ivory)]">
          <motion.div
            initial={{ opacity: 0, x: -16, filter: "blur(8px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.5, duration: 1.2, ease: easeOutLuxury }}
            className="flex items-center gap-4 mb-10 md:mb-12"
          >
            <motion.span
              className="block h-px bg-[var(--ivory)]/50"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
            />
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-[var(--ivory)]/70">
              Ciela Studio — A digital atelier
            </p>
          </motion.div>

          <h1 className="font-display text-[13vw] md:text-[8.6vw] leading-[0.92] tracking-[-0.02em] max-w-[15ch] text-balance">
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.9, duration: 1.4, ease: easeOutExpo }}
              >
                Building digital
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.1, duration: 1.4, ease: easeOutExpo }}
              >
                <span className="italic font-light text-[var(--ivory)]/85">identities</span> for
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%", opacity: 0, filter: "blur(12px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.3, duration: 1.4, ease: easeOutExpo }}
              >
                modern businesses.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.9, duration: 1.2, ease: easeOutLuxury }}
            className="mt-16 md:mt-20 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
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
            initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 2.2, duration: 1.2, ease: easeOutLuxury }}
            className="mt-14 md:mt-16 max-w-md text-[var(--ivory)]/60 text-sm leading-relaxed border-l border-[var(--ivory)]/15 pl-6"
          >
            A small atelier crafting cinematic websites and brand systems for cafés,
            hotels, restaurants and considered local brands.
          </motion.div>
        </div>
      </motion.div>

      {/* Slide indicator with enhanced styling */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 2.3, duration: 1, ease: easeOutLuxury }}
        className="absolute bottom-10 left-10 z-10 hidden md:flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/50 hover:text-[var(--ivory)]/70 transition-colors duration-500"
      >
        <span className="text-[11px]">{String(index + 1).padStart(2, "0")}</span>
        <span className="block h-px w-14 bg-[var(--ivory)]/30 overflow-hidden">
          <motion.span
            key={index}
            className="block h-full bg-[var(--ivory)]/70"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 6.5, ease: "linear" }}
          />
        </span>
        <span className="text-[11px]">{String(slides.length).padStart(2, "0")}</span>
      </motion.div>

      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        initial={{ opacity: 0, filter: "blur(6px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 2.3, duration: 1, ease: easeOutLuxury }}
        className="absolute bottom-10 right-10 z-10 text-[var(--ivory)]/50 hover:text-[var(--ivory)]/70 transition-colors duration-500 text-[10px] uppercase tracking-[0.3em] flex items-center gap-4"
      >
        <span>Scroll</span>
        <span className="relative block h-10 w-px bg-[var(--ivory)]/20 overflow-hidden">
          <motion.span
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-[var(--ivory)] to-transparent"
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
