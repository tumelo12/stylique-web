import { About } from "../src/components/About";
import { CTA } from "../src/components/CTA";
import { FAQ } from "../src/components/FAQ";
import { Features } from "../src/components/Features";
import { Footer } from "../src/components/Footer";
import { Hero } from "../src/components/Hero";
import { HowItWorks } from "../src/components/HowItWorks";
import { LaunchBanner } from "../src/components/LaunchBanner";
import { MobileStickyCTA } from "../src/components/MobileStickyCTA";
import { Navbar } from "../src/components/Navbar";
import { Services } from "../src/components/Services";
import { VendorSection } from "../src/components/VendorSection";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-surface-alt)] pb-20 text-[var(--color-text-primary)] lg:pb-0">
      <div className="pointer-events-none fixed inset-0 z-[-1] opacity-[0.03] [background-image:radial-gradient(rgba(0,0,0,0.55)_1px,transparent_1px)] [background-size:18px_18px]" />

      <Navbar />
      <Hero />
      <LaunchBanner />
      <Features />
      <HowItWorks />
      <Services />
      <About />
      <VendorSection />
      <FAQ />
      <CTA />
      <Footer />
      <MobileStickyCTA />
    </main>
  );
}