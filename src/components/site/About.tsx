import about from "@/assets/about.jpg";
import { Reveal, RevealLines } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <section ref={ref} id="about" className="relative py-32 md:py-56">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
            <motion.img
              src={about}
              alt="The studio at work"
              loading="lazy"
              width={1280}
              height={1600}
              style={{ y: imgY, scale: imgScale }}
              className="absolute inset-0 h-full w-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 grain pointer-events-none opacity-70 mix-blend-overlay" />
          </div>
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Fig. 01 — Inside the studio
          </p>
        </Reveal>
        <div className="md:col-span-7 md:pl-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— The Studio</p>
          </Reveal>
          <RevealLines
            className="font-display text-5xl md:text-7xl leading-[1.02] text-balance text-gradient-mocha"
            lines={[
              "We create aesthetic",
              "digital experiences for",
              "businesses that deserve",
              "to stand out.",
            ]}
          />
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ciela is a small, deliberate studio working at the intersection of brand, design and technology.
              We partner with cafés, hotels, restaurants and modern local brands to craft online identities
              that feel as considered as the spaces they represent.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-14 grid grid-cols-3 gap-8 max-w-md">
              {[
                ["48", "Brands shaped"],
                ["12", "Countries"],
                ["100%", "Made by hand"],
              ].map(([n, l]) => (
                <div key={l} className="border-t border-border pt-4">
                  <div className="font-display text-4xl md:text-5xl text-[var(--mocha)]">{n}</div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
