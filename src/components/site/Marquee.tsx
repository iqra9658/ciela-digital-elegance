const items = ["Cafés", "Restaurants", "Hotels", "Salons", "Boutiques", "Ateliers", "Local Brands"];

export function Marquee() {
  return (
    <div className="relative border-y border-border bg-[var(--beige)] overflow-hidden py-8">
      <div className="flex marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-14 pr-14">
            {items.map((it, j) => (
              <div key={j} className="flex items-center gap-14">
                <span className="font-display italic text-4xl md:text-6xl text-[var(--mocha)]/80 tracking-tight">{it}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--mocha)]/40" />
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* edge fades for cinematic vignette */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--beige)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--beige)] to-transparent" />
    </div>
  );
}
