import about from "@/assets/about.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-20 items-center">
        <Reveal className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-elegant">
            <img src={about} alt="The studio at work" loading="lazy" width={1280} height={1600} className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className="md:col-span-7 md:pl-10">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— The Studio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance text-gradient-mocha">
              We create aesthetic digital experiences for businesses that deserve to stand out.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Ciela is a small, deliberate studio working at the intersection of brand, design and technology.
              We partner with cafés, hotels, restaurants and modern local brands to craft online identities
              that feel as considered as the spaces they represent.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              {[
                ["48", "Brands shaped"],
                ["12", "Countries"],
                ["100%", "Made by hand"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-[var(--mocha)]">{n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
