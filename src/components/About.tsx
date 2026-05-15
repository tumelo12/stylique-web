"use client";

import { motion } from "framer-motion";
import { HeartHandshake, MapPin, Sparkles } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-[#111111] p-8 text-white shadow-md lg:p-10"
        >
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-white/5 blur-3xl" />

          <div className="relative">
            <div className="inline-flex rounded-2xl bg-white/10 p-3">
              <Sparkles className="h-6 w-6 text-white" />
            </div>

            <h3 className="mt-6 max-w-sm text-3xl font-extrabold tracking-tight">
              Built for modern beauty bookings.
            </h3>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/65">
              Stylique was created to make discovering and booking beauty
              services feel simpler, more modern and more connected.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="rounded-2xl bg-white/10 p-3">
                <MapPin className="h-5 w-5 text-white" />
              </div>

              <div>
                <p className="text-sm font-semibold">Pretoria-first launch</p>

                <p className="mt-1 text-xs text-white/60">
                  Starting locally before expanding further.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-semibold text-neutral-400">
            About Stylique
          </p>

          <h2 className="max-w-2xl text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
            Beauty discovery should feel effortless.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-500">
            Finding trusted beauty professionals often happens through social
            media messages, referrals and scattered communication.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-500">
            Stylique brings discovery, bookings, messaging and appointment
            management into one modern platform designed for both customers and
            beauty professionals.
          </p>

          <div className="mt-8 flex items-start gap-4 rounded-[2rem] bg-white p-5 shadow-sm">
            <div className="rounded-2xl bg-neutral-100 p-3">
              <HeartHandshake className="h-5 w-5 text-[#111111]" />
            </div>

            <div>
              <h3 className="text-lg font-bold tracking-tight text-[#111111]">
                Community-focused growth
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                Stylique is focused on building a trusted beauty ecosystem that
                supports both customers and local beauty professionals.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}