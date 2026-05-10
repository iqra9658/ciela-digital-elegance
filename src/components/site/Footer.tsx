export function Footer() {
  return (
    <footer className="relative bg-[var(--noir)] text-[var(--ivory)] pt-24 pb-10 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="font-display text-[10vw] md:text-[8vw] leading-[0.95] text-balance max-w-[18ch]">
          Digital experiences people remember.
        </p>

        <div className="mt-24 grid md:grid-cols-12 gap-10 border-t border-[var(--ivory)]/10 pt-10 text-sm">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-2xl">Ciela</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/50">Studio</span>
            </div>
            <p className="mt-4 text-[var(--ivory)]/50 max-w-xs">A design studio for modern hospitality and lifestyle brands.</p>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/50 mb-4">Studio</div>
            <ul className="space-y-2">
              <li><a className="hover:text-[var(--gold)] transition-colors" href="#work">Selected Work</a></li>
              <li><a className="hover:text-[var(--gold)] transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-[var(--gold)] transition-colors" href="#process">Process</a></li>
              <li><a className="hover:text-[var(--gold)] transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/50 mb-4">Elsewhere</div>
            <ul className="space-y-2">
              <li><a className="hover:text-[var(--gold)] transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a className="hover:text-[var(--gold)] transition-colors" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a className="hover:text-[var(--gold)] transition-colors" href="mailto:hello@cielastudio.com">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-[0.3em] text-[var(--ivory)]/40">
          <span>© {new Date().getFullYear()} Ciela Studio</span>
          <span>Made slowly — Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
