import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function PageLoader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] bg-[var(--ivory)] flex items-end justify-between px-6 md:px-10 pb-10"
        >
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }}
            exit={{ y: -24, opacity: 0, transition: { duration: 0.6 } }}
            className="flex items-baseline gap-3"
          >
            <span className="font-display text-4xl md:text-6xl tracking-tight">Ciela</span>
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Studio</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <div className="relative h-px w-40 md:w-64 bg-[var(--noir)]/10 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%", transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }}
                className="absolute inset-0 bg-[var(--noir)]"
              />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
              className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
            >
              Loading
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
