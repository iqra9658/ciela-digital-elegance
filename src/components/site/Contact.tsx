import { Reveal } from "./Reveal";
import { useState } from "react";
import { Instagram, MessageCircle, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 md:py-48">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-6">
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-6">— Contact</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] text-balance">
              Let's build something worth remembering.
            </h2>
            <p className="mt-8 text-muted-foreground max-w-md leading-relaxed">
              Tell us about your brand, your space, your vision. We reply within two working days.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 space-y-4">
              <a href="https://wa.me/" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-border py-5 hover:border-foreground transition-colors">
                <span className="flex items-center gap-4">
                  <MessageCircle className="w-5 h-5 text-[var(--mocha)]" />
                  <span className="text-lg">WhatsApp</span>
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="group flex items-center justify-between border-b border-border py-5 hover:border-foreground transition-colors">
                <span className="flex items-center gap-4">
                  <Instagram className="w-5 h-5 text-[var(--mocha)]" />
                  <span className="text-lg">@cielastudio</span>
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>
              <a href="mailto:hello@cielastudio.com" className="group flex items-center justify-between border-b border-border py-5 hover:border-foreground transition-colors">
                <span className="flex items-center gap-4">
                  <span className="w-5 h-5 inline-flex items-center justify-center text-[var(--mocha)]">✉</span>
                  <span className="text-lg">hello@cielastudio.com</span>
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="md:col-span-6">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card rounded-sm shadow-elegant p-8 md:p-12 space-y-8"
          >
            {[
              { id: "name", label: "Your name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "brand", label: "Brand or business", type: "text" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors text-lg"
                />
              </div>
            ))}
            <div>
              <label htmlFor="msg" className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Tell us about the project</label>
              <textarea
                id="msg"
                required
                rows={4}
                className="w-full bg-transparent border-b border-border py-3 outline-none focus:border-foreground transition-colors text-lg resize-none"
              />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-3 bg-foreground text-background px-7 py-4 rounded-full text-sm tracking-wide hover:bg-[var(--mocha)] transition-all duration-700 ease-cinema"
            >
              {sent ? "Thank you — we'll be in touch" : "Request consultation"}
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
