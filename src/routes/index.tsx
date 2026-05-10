import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { Process } from "@/components/site/Process";
import { Collaborate } from "@/components/site/Collaborate";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ciela Studio — Digital identities for modern businesses" },
      { name: "description", content: "Ciela Studio is a cinematic digital agency crafting premium online identities for cafés, restaurants, hotels, salons and modern local brands." },
      { property: "og:title", content: "Ciela Studio — Digital identities for modern businesses" },
      { property: "og:description", content: "Cinematic, editorial websites and brand systems for modern hospitality and lifestyle brands." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <WhyUs />
      <Process />
      <Collaborate />
      <Contact />
      <Footer />
    </main>
  );
}
