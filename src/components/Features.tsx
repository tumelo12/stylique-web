"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Bell,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    title: "Verified Professionals",
    description: "Trusted beauty experts.",
    icon: BadgeCheck,
  },
  {
    title: "Easy Booking",
    description: "Book in a few taps.",
    icon: CalendarCheck,
  },
  {
    title: "Smart Reminders",
    description: "Never miss an appointment.",
    icon: Bell,
  },
  {
    title: "Chat & Connect",
    description: "Message vendors directly.",
    icon: MessageCircle,
  },
];

export function Features() {
  return (
    <section className="bg-[#111111] px-6 py-10 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.45,
              }}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <Icon className="h-5 w-5 text-white" />
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-neutral-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}