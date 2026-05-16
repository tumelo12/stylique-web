"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BellRing, CalendarCheck, MessageCircle } from "lucide-react";

const features = [
  {
    title: "Verified Professionals",
    description: "Book trusted salons, artists and beauty experts with confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Easy Booking",
    description: "Choose your service, time and location in just a few taps.",
    icon: CalendarCheck,
  },
  {
    title: "Smart Reminders",
    description: "Never miss an appointment with timely booking reminders.",
    icon: BellRing,
  },
  {
    title: "Chat & Connect",
    description: "Message vendors directly before and after your appointment.",
    icon: MessageCircle,
  },
];

export function Features() {
  return (
    <section className="bg-[#111111] py-8 sm:py-10">
      <div className="stylique-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 text-white shadow-sm transition-all duration-300 hover:bg-white/[0.1]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#111111]">
                  <Icon size={21} />
                </div>

                <h3 className="text-base font-bold">{feature.title}</h3>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}