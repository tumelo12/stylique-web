"use client";

import { motion } from "framer-motion";
import { MapPin, Sparkles, Users } from "lucide-react";

const items = [
  {
    icon: MapPin,
    title: "Launching in Pretoria",
    description:
      "Starting with selected beauty professionals across Pretoria.",
  },
  {
    icon: Users,
    title: "Vendor onboarding open",
    description:
      "Salons, nail techs, barbers and makeup artists can join early.",
  },
  {
    icon: Sparkles,
    title: "Built for beauty bookings",
    description:
      "A premium platform designed for modern beauty professionals.",
  },
];

export function LaunchBanner() {
  return (
    <section className="px-6 pb-16 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto grid max-w-6xl gap-4 rounded-[2rem] border border-black/5 bg-white p-4 shadow-sm lg:grid-cols-3"
      >
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-black/5 bg-[#FAFAFA] p-6"
            >
              <div className="inline-flex rounded-2xl bg-neutral-100 p-3">
                <Icon className="h-5 w-5 text-[#111111]" />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}