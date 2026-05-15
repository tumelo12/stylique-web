"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Search } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discover beauty professionals",
    description:
      "Browse salons, nail techs, makeup artists, braiders and barbers across Pretoria.",
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Book appointments easily",
    description:
      "Choose services, select a suitable time and request bookings directly through the app.",
  },
  {
    icon: MessageCircle,
    step: "03",
    title: "Chat and manage bookings",
    description:
      "Stay connected with vendors through reminders, updates and in-app messaging.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="customers"
      className="scroll-mt-28 px-6 py-16 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold text-neutral-400">
            Simple booking experience
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
            How Stylique works
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-neutral-500">
            Stylique makes discovering and booking beauty services simple for
            both customers and beauty professionals.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
              >
                <div className="absolute right-6 top-6 text-5xl font-black tracking-tight text-black/[0.04]">
                  {step.step}
                </div>

                <div className="inline-flex rounded-2xl bg-neutral-100 p-3">
                  <Icon className="h-5 w-5 text-[#111111]" />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-[#111111]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-neutral-500">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}