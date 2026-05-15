"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import { WaitlistForm } from "./WaitlistForm";

export function CTA() {
  return (
    <section
      id="waitlist"
      className="scroll-mt-28 px-6 pb-16 lg:px-8 lg:pb-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#111111] px-6 py-8 text-white shadow-[0_30px_90px_rgba(0,0,0,0.18)] lg:px-10 lg:py-12"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-white" />
              Pretoria launch coming soon
            </div>

            <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Join the Stylique waitlist.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
              We’re preparing Stylique for customers and beauty professionals
              across Pretoria. Join the waitlist and be among the first to know
              when we launch.
            </p>
          </div>

          <div className="rounded-[2.2rem] border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
  <WaitlistForm />
</div>
        </div>
      </motion.div>
    </section>
  );
}