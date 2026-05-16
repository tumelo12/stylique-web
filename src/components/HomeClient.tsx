"use client";

import { useState } from "react";

import { About } from "@/src/components/About";
import { AmbientBackground } from "@/src/components/AmbientBackground";
import { Contact } from "@/src/components/Contact";
import { CTA } from "@/src/components/CTA";
import { Customers } from "@/src/components/Customers";
import { EarlyAccess } from "@/src/components/EarlyAccess";
import { FAQ } from "@/src/components/FAQ";
import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { Navbar } from "@/src/components/Navbar";
import { Services } from "@/src/components/Services";
import { Vendors } from "@/src/components/Vendors";
import { WaitlistModal } from "@/src/components/WaitlistModal";

type WaitlistType = "customer" | "vendor";

export function HomeClient() {
  const [modalOpen, setModalOpen] = useState(false);
  const [waitlistType, setWaitlistType] =
    useState<WaitlistType>("customer");

  function openWaitlist(type: WaitlistType) {
    setWaitlistType(type);
    setModalOpen(true);
  }

  return (
    <main className="relative overflow-hidden bg-white">
      <AmbientBackground />

      <Navbar onJoinWaitlist={() => openWaitlist("customer")} />

      <Hero
        onJoinWaitlist={() => openWaitlist("customer")}
        onBecomeVendor={() => openWaitlist("vendor")}
      />

      <Features />

      <Services />

      <CTA
        onJoinWaitlist={() => openWaitlist("customer")}
        onBecomeVendor={() => openWaitlist("vendor")}
      />

      <Vendors onBecomeVendor={() => openWaitlist("vendor")} />

      <Customers onJoinWaitlist={() => openWaitlist("customer")} />

      <About
  onJoinWaitlist={() => openWaitlist("customer")}
  onBecomeVendor={() => openWaitlist("vendor")}
/>

      <EarlyAccess
        onJoinWaitlist={() => openWaitlist("customer")}
        onBecomeVendor={() => openWaitlist("vendor")}
      />

      <FAQ />

      <Contact />

      <Footer />

      <WaitlistModal
        open={modalOpen}
        type={waitlistType}
        onClose={() => setModalOpen(false)}
      />
    </main>
  );
}