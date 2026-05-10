import { Reveal } from "./Reveal";
import cafe from "@/assets/portfolio-cafe.jpg";
import hotel from "@/assets/portfolio-hotel.jpg";
import restaurant from "@/assets/portfolio-restaurant.jpg";
import salon from "@/assets/portfolio-salon.jpg";
import web from "@/assets/portfolio-web.jpg";
import branding from "@/assets/portfolio-branding.jpg";

const items = [
  { img: cafe, title: "Maison de Café", tag: "Café — Branding & Web", span: "md:col-span-5 md:row-span-2" },
  { img: hotel, title: "Hôtel Aurelia", tag: "Hospitality — Web & Booking", span: "md:col-span-7" },
  { img: restaurant, title: "Noir & Olive", tag: "Restaurant — Identity", span: "md:col-span-4" },
  { img: salon, title: "Atelier Lune", tag: "Salon — Brand System", span: "md:col-span-3" },
  { img: web, title: "Studio Norte", tag: "Boutique — Web", span: "md:col-span-5" },
  { img: branding, title: "Verde Brûlé", tag: "Coffee Roaster — Identity", span: "md:col-span-7" },
];

export function Portfolio() {
  return (
    <section id="work" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Selected Work</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-[14ch]">
              Quiet brands, loud presence.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-muted-foreground">
              A glimpse of recent collaborations across hospitality, beauty and craft.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[260px] md:auto-rows-[300px]">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.06} className={`group relative overflow-hidden rounded-sm bg-card shadow-soft ${it.span}`}>
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-cinema group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700" />
              </div>
              <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-[var(--ivory)]">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/70 mb-2">{it.tag}</p>
                <h3 className="font-display text-2xl md:text-3xl">{it.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
