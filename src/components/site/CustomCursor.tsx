import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        (target.closest?.("button")) ||
        (target.closest?.("a")) ||
        (target.closest?.("[role='button']")) ||
        (target.closest?.(".group"));
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, [mouseX, mouseY]);

  // Outer glow (larger, softer)
  const outerX = useTransform(mouseX, (x) => x - 24);
  const outerY = useTransform(mouseY, (y) => y - 24);

  // Inner dot (smaller, brighter)
  const innerX = useTransform(mouseX, (x) => x - 6);
  const innerY = useTransform(mouseY, (y) => y - 6);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        body {
          cursor: none;
        }
      `}</style>

      {/* Outer glow circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform"
        style={{
          x: outerX,
          y: outerY,
          width: 48,
          height: 48,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-[var(--ivory)]/40"
          animate={{
            opacity: isHovering ? 0.8 : 0.3,
            scale: isHovering ? 1.3 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
        {/* Subtle glow blur */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[var(--ivory)]/15 blur-md"
          animate={{
            opacity: isHovering ? 0.5 : 0.15,
            scale: isHovering ? 1.5 : 1.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform"
        style={{
          x: innerX,
          y: innerY,
          width: 12,
          height: 12,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full bg-[var(--ivory)]"
          animate={{
            opacity: isHovering ? 1 : 0.6,
            scale: isHovering ? 1.2 : 1,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut",
          }}
        />
        {/* Inner glow */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[var(--gold)]/60 blur-sm"
          animate={{
            opacity: isHovering ? 1 : 0.4,
            scale: isHovering ? 1.8 : 1,
          }}
          transition={{
            duration: 0.4,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      </motion.div>

      {/* Accent ring for extra elegance */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 will-change-transform"
        style={{
          x: outerX,
          y: outerY,
          width: 48,
          height: 48,
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-[var(--gold)]/30"
          animate={{
            opacity: isHovering ? 0.6 : 0,
            scale: isHovering ? 1.1 : 1,
          }}
          transition={{
            duration: 0.5,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      </motion.div>
    </>
  );
}
