"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import Link from "next/link";

const cards = [
  {
    title: "Create Your Vendor Profile",
    text: "Tell us about your beauty business, the services you offer and what makes your business special.",
    icon: Users,
  },
  {
    title: "Complete Your Application",
    text: "Submit your vendor application directly through the Stylique app or web platform.",
    icon: Store,
  },
  {
    title: "Grow with Stylique",
    text: "Get discovered by customers looking for trusted beauty professionals and make it easier for them to book with you.",
    icon: Sparkles,
  },
];

export function BecomeVendor() {
  return (
    <section id="become-vendor" className="section-padding bg-white">
      <div className="stylique-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2.75rem] bg-[#111111] p-8 text-white shadow-2xl shadow-black/10 sm:p-10 lg:p-14"
        >
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/[0.03] blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Sparkles size={15} />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Vendor Applications Open
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Grow your beauty business with Stylique.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
                Stylique is live and welcoming beauty professionals who want to
                grow their business, reach new customers and become part of a
                growing beauty marketplace.
              </p>

              <p className="mt-4 max-w-xl text-base leading-8 text-white/65">
                Whether you're a salon, nail technician, makeup artist,
                braider, barber, spa or skincare specialist, you can apply to
                become a Stylique vendor and start building your presence on
                the platform.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
             <Link
  href="https://app.stylique.co.za"
  className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-black !text-[#111111] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F6F6F6]"
>
  Become a Vendor

  <ArrowRight
    size={17}
    className="ml-2 !text-[#111111] transition-transform group-hover:translate-x-1"
  />
</Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#111111]">
                      <Icon size={19} />
                    </div>

                    <h3 className="text-base font-black">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {card.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative mt-10 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5">
            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex items-start gap-3">
                <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#F6F6F6] text-[#111111]">
                  <BadgeCheck size={18} />
                </span>

                <div>
                  <p className="font-black">
                    Ready to become a Stylique vendor?
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Apply directly through the Stylique app or web platform.
                    Tell us about your business and start building your
                    presence on Stylique.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-[#111111]">
                <Store size={16} />
                Applications Open
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}