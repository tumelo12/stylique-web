"use client";

import { motion } from "framer-motion";
import { Brush, Gem, Scissors, Sparkles, Wand2 } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Nails",
    description: "Gel, acrylic, tips and nail art.",
    image: "/images/services/acrylic.jpeg",
    icon: Gem,
  },
  {
    title: "Hair & Braids",
    description: "Braids, wigs, styling and treatments.",
    image:
      "/images/services/hair.jpg",
    icon: Sparkles,
  },
  {
    title: "Makeup",
    description: "Soft glam, bridal and event makeup.",
    image:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=900&auto=format&fit=crop",
    icon: Brush,
  },
  {
    title: "Barbers",
    description: "Cuts, fades, beard trims and grooming.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
    icon: Scissors,
  },
  {
    title: "Skincare",
    description: "Facials, glow treatments and care.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    icon: Wand2,
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="stylique-container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#666666]">
              Beauty categories
            </p>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
              Popular Beauty Services
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#666666] sm:text-base">
            Explore trusted beauty services across Pretoria, from everyday
            maintenance to special occasion glam.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-[2rem] border border-[#EFEFEF] bg-white shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-black/10"
              >
                <div className="relative h-64 overflow-hidden bg-[#F6F6F6] lg:h-72">
  <Image
    src={service.image}
    alt={service.title}
    fill
    className="object-cover grayscale contrast-105 brightness-[0.98] transition-transform duration-700 group-hover:scale-110"
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#111111] shadow-lg">
                    <Icon size={19} />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-black text-[#111111]">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#666666]">
                    {service.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}