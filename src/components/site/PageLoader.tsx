import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const easeInOutCinematic = [0.16, 1, 0.3, 1];
const easeOutLuxury = [0.34, 1.56, 0.64, 1];

export function PageLoader() {
  const [show, setShow] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => setShow(false), 1000);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-b from-[var(--ivory)] via-[var(--ivory)] to-[var(--beige)] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.2, ease: easeOutLuxury }}
            className="absolute inset-0 grain pointer-events-none"
          />
          
          {/* Top accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: easeInOutCinematic }}
            className="absolute top-16 md:top-24 h-px w-20 bg-[var(--noir)]/20 origin-left"
          />

          {/* Main content container */}
          <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12">
            {/* Studio text with cinematic reveal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: easeOutLuxury }}
              className="flex flex-col items-center gap-4"
            >
              {/* "Ciela" - large display text */}
              <motion.div
                initial={{ y: 40, opacity: 0, filter: "blur(12px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.3, duration: 1.2, ease: easeOutLuxury }}
                className="overflow-hidden"
              >
                <h1 className="font-display text-[6xl] md:text-[9rem] leading-none tracking-[-0.02em] text-[var(--noir)]">
                  Ciela
                </h1>
              </motion.div>

              {/* "Studio" subtitle */}
              <motion.div
                initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.6, duration: 1, ease: easeOutLuxury }}
              >
                <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-[var(--noir)]/60">
                  Studio
                </p>
              </motion.div>
            </motion.div>

            {/* Loading indicator with progress bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8, ease: easeOutLuxury }}
              className="flex flex-col items-center gap-6 md:gap-8"
            >
              {/* Progress bar */}
              <div className="flex items-center gap-6 md:gap-8">
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1, duration: 1.2, ease: easeInOutCinematic }}
                  className="relative h-px w-32 md:w-48 bg-[var(--noir)]/15 overflow-hidden origin-left"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--noir)] to-transparent"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ 
                      delay: 1.2,
                      duration: 1.8, 
                      ease: [0.34, 1.56, 0.64, 1],
                      repeat: isExiting ? 0 : 2,
                      repeatType: "reverse"
                    }}
                  />
                </motion.div>

                <motion.span
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                  className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[var(--noir)]/50"
                >
                  Loading
                </motion.span>
              </div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1, ease: easeOutLuxury }}
                className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[var(--noir)]/40"
              >
                Crafting Digital Elegance
              </motion.p>
            </motion.div>
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: easeInOutCinematic }}
            className="absolute bottom-16 md:bottom-24 h-px w-20 bg-[var(--noir)]/20 origin-right"
          />

          {/* Elegant corner accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: easeOutLuxury }}
            className="absolute top-10 md:top-14 right-10 md:right-16 w-8 h-8 border border-[var(--noir)]/20 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: easeOutLuxury }}
            className="absolute bottom-10 md:bottom-14 left-10 md:left-16 w-8 h-8 border border-[var(--noir)]/20 rounded-full"
          />

          {/* Fade overlay for exit */}
          {isExiting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--ivory)]"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
