"use client";

import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, Sparkles, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "Pretoria", label: "First Launch City" },
  { value: "Open", label: "Vendor Onboarding" },
  { value: "Live Soon", label: "Customer Waitlist" },
];

type AboutProps = {
  onJoinWaitlist?: () => void;
  onBecomeVendor?: () => void;
};

export function About({ onJoinWaitlist, onBecomeVendor }: AboutProps) {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="stylique-container">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#666666]">
              About Stylique
            </p>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
              Empowering beauty. Connecting people.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#666666]">
              Stylique was built to help beauty professionals grow while making
              it easier for customers to discover trusted salons, nail techs,
              makeup artists, braiders, barbers and skincare specialists nearby.
            </p>

            <p className="mt-4 max-w-xl text-base leading-8 text-[#666666]">
              We connect Pretoria’s beauty community through simple booking,
              verified vendors, reminders, chat, reviews and repeat-client tools.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.6rem] border border-[#EFEFEF] bg-white p-5 shadow-sm"
                >
                  <p className="text-2xl font-black text-[#111111]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#666666]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 26 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65 }}
            className="relative hidden min-h-[520px] lg:block"
          >
            <div className="absolute inset-0 rounded-full bg-[#F6F6F6] blur-3xl" />

            <div className="relative h-full">
              <div className="absolute left-0 top-8 h-72 w-[58%] overflow-hidden rounded-[2.3rem] shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=900&auto=format&fit=crop"
                  alt="Beauty makeup close up"
                  fill
                  className="object-cover grayscale contrast-105 brightness-[0.98]"
                />
              </div>

              <div className="absolute right-0 top-0 h-80 w-[52%] overflow-hidden rounded-[2.3rem] border-[8px] border-white shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop"
                  alt="Beauty salon professional"
                  fill
                  className="object-cover grayscale contrast-105 brightness-[0.98]"
                />
              </div>

              <div className="absolute bottom-0 left-[18%] h-64 w-[62%] overflow-hidden rounded-[2.3rem] border-[8px] border-white shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop"
                  alt="Hair styling beauty service"
                  fill
                  className="object-cover grayscale contrast-105 brightness-[0.98]"
                />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-12 right-4 rounded-3xl border border-[#EFEFEF] bg-white/90 p-4 shadow-xl backdrop-blur-xl"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
                    <BadgeCheck size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-black text-[#111111]">
                      Trusted beauty network
                    </p>
                    <p className="text-xs text-[#666666]">
                      Verified vendors across Pretoria
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-4 top-0 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl"
              >
                <Sparkles size={20} />
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mt-20 overflow-hidden rounded-[2.5rem] bg-[#111111] p-8 text-white shadow-2xl shadow-black/10 sm:p-10 lg:p-12"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Users size={15} />
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  Join the Stylique community
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Beauty made easier for customers and vendors.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
                Whether you are booking your next appointment or growing your
                beauty business, Stylique gives you a cleaner, smarter way to
                connect.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <button
                type="button"
                onClick={onJoinWaitlist}
                className="light-button"
              >
                Join Waitlist
              </button>

              <button
                type="button"
                onClick={onBecomeVendor}
                className="black-button group bg-white text-[#111111] hover:bg-[#F6F6F6]"
              >
                Become a Vendor
                <ArrowRight
                  size={17}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}