"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Mail,
  MapPin,
  Sparkles,
  Store,
  Users,
} from "lucide-react";
import { Smartphone } from "lucide-react";

const cards = [
  {
    title: "Google Play Available",
    text: "Customers can download Stylique today and start booking beauty services.",
    icon: Users,
  },
  {
    title: "Vendor Applications",
    text: "Apply to join Stylique and grow your beauty business with new clients.",
    icon: Store,
  },
  {
    title: "Pretoria",
    text: "Stylique is currently focused on building a trusted beauty marketplace across Pretoria.",
    icon: MapPin,
  },
];

type BecomeVendorProps = {
  onBecomeVendor?: () => void;
};

export function BecomeVendor({
  onBecomeVendor,
}: BecomeVendorProps) {
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
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-black/[0.03]/20 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Sparkles size={15} />

                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Vendor Applications
                </span>
              </div>

              <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Grow your beauty business with Stylique.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">
             Stylique is live on Google Play. Customers are already discovering
beauty professionals, and we're welcoming new vendors to join the
marketplace.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
             

                <button
                  type="button"
                  onClick={onBecomeVendor}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  Become a Vendor
                </button>
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
                    Built for trusted local beauty professionals.
                  </p>

                  <p className="mt-1 text-sm leading-6 text-white/60">
                    Create your profile, showcase your services, receive booking requests
and grow your client base through Stylique.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-[#111111]">
  <Smartphone size={16} />
  Now Available on Google Play
</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}