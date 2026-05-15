"use client";

import { motion } from "framer-motion";
import { Brush, Flower2, Hand, Scissors, Sparkles } from "lucide-react";

const services = [
  {
    title: "Nails",
    tag: "Popular",
    image:
      "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop",
    icon: Hand,
  },
  {
    title: "Hair & Braids",
    tag: "Trending",
    image:
      "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop",
    icon: Sparkles,
  },
  {
    title: "Makeup",
    tag: "Event-ready",
    image:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=900&auto=format&fit=crop",
    icon: Brush,
  },
  {
    title: "Barbers",
    tag: "Nearby",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=900&auto=format&fit=crop",
    icon: Scissors,
  },
  {
    title: "Skincare",
    tag: "Glow care",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop",
    icon: Flower2,
  },
];

export function Services() {
  return (
    <section
  id="services"
  className="px-6 py-16 lg:px-8 lg:py-24"
>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-5 text-center lg:flex-row lg:text-left"
        >
          <div>
            <p className="mb-3 text-sm font-semibold text-neutral-400">
              Beauty categories
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
              Popular beauty services
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-neutral-500">
            Explore the services Stylique is preparing to support across
            Pretoria’s beauty community.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.45 }}
                className="group relative overflow-hidden rounded-[2rem] bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-72"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#111111] shadow-sm backdrop-blur-xl">
                    {service.tag}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="mb-3 inline-flex rounded-2xl bg-white/90 p-2 shadow-sm backdrop-blur-xl">
                      <Icon className="h-4 w-4 text-[#111111]" />
                    </div>

                    <h3 className="text-lg font-bold tracking-tight text-white">
                      {service.title}
                    </h3>

                    <p className="mt-1 text-xs leading-relaxed text-white/70">
                      Discover trusted professionals near you.
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}