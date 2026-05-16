"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

type CTAProps = {
  onJoinWaitlist?: () => void;
  onBecomeVendor?: () => void;
};

export function CTA({
  onJoinWaitlist,
  onBecomeVendor,
}: CTAProps) {
  return (
    <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="stylique-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#F6F6F6] p-8 shadow-xl shadow-black/5 sm:p-10 lg:p-14"
        >
          <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white/70 blur-2xl" />

          <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-black/[0.03] blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                <Sparkles size={15} />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#666666]">
                  Glow starts here
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                Ready to glow?
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666]">
                Be among the first customers and beauty professionals joining
Stylique before launch in Pretoria.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button
                type="button"
                onClick={onJoinWaitlist}
                className="black-button group"
              >
                Join Waitlist

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={onBecomeVendor}
                className="light-button"
              >
                Become a Vendor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}