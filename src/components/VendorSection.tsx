"use client";

import { motion } from "framer-motion";
import {
  Bell,
  CalendarCheck,
  MessageCircle,
  Sparkles,
  Store,
  UserCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Store,
    title: "Professional vendor profile",
    description: "Showcase your services, prices, photos and business details.",
  },
  {
    icon: CalendarCheck,
    title: "Manage bookings",
    description: "Receive and confirm appointments directly from customers.",
  },
  {
    icon: MessageCircle,
    title: "Chat with customers",
    description: "Answer questions and build trust before the appointment.",
  },
  {
    icon: Bell,
    title: "Smart reminders",
    description: "Help reduce missed appointments with booking reminders.",
  },
];

export function VendorSection() {
  return (
    <section id="vendors" className="px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 rounded-[2rem] bg-[#111111] p-6 text-white shadow-md lg:grid-cols-2 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white/80">
            <Sparkles className="h-4 w-4 text-white" />
            Vendor onboarding now open
          </div>

          <h2 className="max-w-xl text-4xl font-extrabold tracking-tight md:text-5xl">
            Grow your beauty business with Stylique.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/60">
            We’re onboarding selected salons, nail techs, makeup artists,
            braiders, barbers and beauty professionals across Pretoria before
            launch.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="rounded-xl bg-white px-6 py-3 text-center font-medium text-[#111111] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-200"
            >
              Become a Vendor
            </a>

            <a
              href="#about"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-center font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:bg-white/10"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"
              >
                <div className="inline-flex rounded-2xl border border-white/10 bg-white/10 p-3">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="mt-5 text-base font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {benefit.description}
                </p>
              </div>
            );
          })}

          <div className="rounded-3xl border border-white/10 bg-white p-5 text-[#111111] sm:col-span-2">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-neutral-100 p-3">
                <UserCheck className="h-5 w-5" />
              </div>

              <div>
                <h3 className="text-base font-bold">Pretoria-first launch</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  Early vendors get visibility while we prepare the first public
                  launch of Stylique.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}