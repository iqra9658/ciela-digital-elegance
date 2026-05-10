const items = ["Cafés", "Restaurants", "Hotels", "Salons", "Boutiques", "Ateliers", "Local Brands"];

export function Marquee() {
  return (
    <div className="border-y border-border bg-[var(--beige)] overflow-hidden py-6">
      <div className="flex marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12 pr-12">
            {items.map((it, j) => (
              <div key={j} className="flex items-center gap-12">
                <span className="font-display text-3xl md:text-5xl text-[var(--mocha)]/80">{it}</span>
                <span className="w-2 h-2 rounded-full bg-[var(--mocha)]/40" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
