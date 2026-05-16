"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import Image from "next/image";

type HeroProps = {
  onJoinWaitlist?: () => void;
  onBecomeVendor?: () => void;
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function Hero({ onJoinWaitlist, onBecomeVendor }: HeroProps) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-[#F6F6F6] blur-3xl" />
      <div className="absolute right-[-10rem] top-32 h-96 w-96 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="stylique-container relative grid min-h-[calc(100vh-7rem)] items-center gap-14 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EFEFEF] bg-white px-4 py-2 shadow-sm"
          >
            <Sparkles size={16} className="text-[#111111]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#666666]">
              Pretoria beauty marketplace
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-serif text-5xl font-bold tracking-tight text-[#111111] sm:text-6xl lg:text-7xl"
          >
            Beauty services near you, booked effortlessly.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-base leading-8 text-[#666666] sm:text-lg"
          >
            Discover trusted salons, nail techs, makeup artists, braiders,
            barbers and beauty professionals across Pretoria.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
           <button type="button" onClick={onJoinWaitlist} className="black-button group">
  Join Waitlist
  <ArrowRight
    size={17}
    className="ml-2 transition-transform group-hover:translate-x-1"
  />
</button>

            <button type="button" onClick={onBecomeVendor} className="light-button">
  Become a Vendor
</button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            id="download"
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <AppBadge label="Early access" store="Customer Waitlist" />
<AppBadge label="Now onboarding" store="Beauty Vendors" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-8 top-12 h-64 w-64 rounded-full bg-black/[0.03]" />
          <div className="absolute -right-8 bottom-12 h-52 w-52 rounded-full bg-[#F6F6F6]" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative overflow-hidden rounded-[2.5rem] bg-[#F6F6F6] p-3 shadow-2xl shadow-black/10"
          >
            <div className="relative h-[520px] overflow-hidden rounded-[2rem] sm:h-[620px]">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
                alt="Luxury beauty professional styling a client"
                fill
                priority
                className="object-cover grayscale contrast-105 brightness-[0.98]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-white/30 bg-white/80 p-5 shadow-xl backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#666666]">
                  Featured today
                </p>
                <h3 className="mt-2 text-xl font-bold text-[#111111]">
                  Glow Bar Pretoria
                </h3>
                <p className="mt-1 text-sm text-[#666666]">
                  Nails, makeup, lashes and skincare near you.
                </p>
              </div>
            </div>
          </motion.div>

          <FloatingCard className="-left-4 top-10" title="4.9 rating" text="Verified professionals" />
          <FloatingCard className="-right-2 bottom-24" title="15 min" text="Average booking time" />

          <motion.div
            animate={{ rotate: [0, 8, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-xl"
          >
            <Star size={18} fill="#111111" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AppBadge({ label, store }: { label: string; store: string }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-2xl border border-[#EFEFEF] bg-white px-5 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-auto">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white">
        <Play size={14} fill="white" />
      </span>

      <span>
        <span className="block text-[11px] font-medium text-[#666666]">
          {label}
        </span>
        <span className="block text-sm font-bold text-[#111111]">{store}</span>
      </span>
    </button>
  );
}

function FloatingCard({
  title,
  text,
  className,
}: {
  title: string;
  text: string;
  className: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute hidden rounded-3xl border border-[#EFEFEF] bg-white/90 p-4 shadow-xl backdrop-blur-xl sm:block ${className}`}
    >
      <p className="text-base font-black text-[#111111]">{title}</p>
      <p className="mt-1 text-xs font-medium text-[#666666]">{text}</p>
    </motion.div>
  );
}