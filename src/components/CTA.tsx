"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTA() {
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
                  Now Live
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
                Get started with Stylique
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-[#666666]">
                Discover trusted beauty professionals, explore services and
                book your next appointment through Stylique.
              </p>

              <p className="mt-3 max-w-2xl text-base leading-8 text-[#666666]">
                Beauty businesses can also apply to become Stylique vendors and
                start growing their business on the marketplace.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="https://app.stylique.co.za"
                className="black-button group inline-flex items-center justify-center"
              >
                Get Started

                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="https://app.stylique.co.za"
                className="light-button inline-flex items-center justify-center"
              >
                Become a Vendor
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}