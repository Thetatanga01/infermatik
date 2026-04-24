import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Capabilities } from "@/components/site/Capabilities";
import { Sectors } from "@/components/site/Sectors";
import { Value } from "@/components/site/Value";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Problem />
      <Capabilities />
      <Sectors />
      <Value />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default Index;
