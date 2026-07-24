"use client";

import { useState } from "react";

import { About } from "@/src/components/About";
import { AmbientBackground } from "@/src/components/AmbientBackground";
import { Contact } from "@/src/components/Contact";
import { CTA } from "@/src/components/CTA";
import { Customers } from "@/src/components/Customers";
import { BecomeVendor } from "@/src/components/BecomeVendor";
import { FAQ } from "@/src/components/FAQ";
import { Features } from "@/src/components/Features";
import { Footer } from "@/src/components/Footer";
import { Hero } from "@/src/components/Hero";
import { Navbar } from "@/src/components/Navbar";
import { Services } from "@/src/components/Services";
import { Vendors } from "@/src/components/Vendors";
import { VendorApplicationModal } from "@/src/components/VendorApplicationModal";

type WaitlistType = "vendor";

export function HomeClient() {
  const [modalOpen, setModalOpen] = useState(false);
 const [waitlistType, setWaitlistType] =
  useState<WaitlistType>("vendor");

function openVendorApplication() {
  setWaitlistType("vendor");
  setModalOpen(true);
}

  return (
    <main className="relative overflow-hidden bg-white">
      <AmbientBackground />

<Navbar />

     <Hero
  onBecomeVendor={openVendorApplication}
/>

      <Features />

      <Services />

     <CTA
  onBecomeVendor={openVendorApplication}
/>

      <Vendors onBecomeVendor={openVendorApplication} />

      <Customers />

<About
  onBecomeVendor={openVendorApplication}
/>

      <BecomeVendor
  onBecomeVendor={openVendorApplication}
/>

      <FAQ />

      <Contact />

      <Footer />

      <VendorApplicationModal
  open={modalOpen}
  onClose={() => setModalOpen(false)}
/>
    </main>
  );
}