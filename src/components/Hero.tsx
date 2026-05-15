"use client";

import { motion } from "framer-motion";
import { CalendarCheck, MessageCircle, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-16 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-neutral-200/70 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-neutral-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-semibold text-neutral-700 shadow-sm lg:mx-0">
            <Sparkles className="h-4 w-4 text-neutral-500" />
            Pretoria’s beauty marketplace
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tight text-[#111111] md:text-7xl lg:mx-0">
            Beauty services near you, booked effortlessly.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-neutral-500 lg:mx-0">
            Discover trusted salons, nail techs, makeup artists, braiders,
            barbers and beauty professionals across Pretoria.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#waitlist"
              className="rounded-xl bg-[#111111] px-6 py-3 text-center font-medium text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              Join Waitlist
            </a>

            <a
              href="/?role=vendor#waitlist"
              className="rounded-xl border border-neutral-300 bg-white px-6 py-3 text-center font-medium text-[#111111] shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
            >
              Become a Vendor
            </a>
          </div>

      <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
  <a
    href="#"
    className="flex h-14 w-44 items-center gap-3 rounded-2xl bg-[#111111] px-4 text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
  >
    <div className="text-2xl leading-none"></div>
    <div className="text-left">
      <p className="text-[10px] font-medium leading-none text-white/65">
        Download on the
      </p>
      <p className="mt-1 text-base font-semibold leading-none">App Store</p>
    </div>
  </a>

  <a
    href="#"
    className="flex h-14 w-44 items-center gap-3 rounded-2xl bg-[#111111] px-4 text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
  >
    <div className="grid h-7 w-7 place-items-center rounded-md bg-white text-xs font-black text-[#111111]">
      ▶
    </div>
    <div className="text-left">
      <p className="text-[10px] font-medium leading-none text-white/65">
        Get it on
      </p>
      <p className="mt-1 text-base font-semibold leading-none">Google Play</p>
    </div>
  </a>
</div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative mx-auto h-[620px] w-full max-w-xl"
        >
          <div className="absolute inset-x-6 top-16 h-[440px] rounded-[3rem] bg-neutral-200/70 backdrop-blur-3xl" />

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-2 top-10 z-30 rounded-2xl bg-white/90 p-4 shadow-md backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-neutral-100 p-2">
                <CalendarCheck className="h-5 w-5 text-[#111111]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111111]">
                  Booking confirmed
                </p>
                <p className="text-[11px] text-neutral-500">Today, 14:30</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-24 left-0 z-30 rounded-2xl bg-white/90 p-4 shadow-md backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-neutral-100 p-2">
                <MessageCircle className="h-5 w-5 text-[#111111]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#111111]">
                  Chat with vendor
                </p>
                <p className="text-[11px] text-neutral-500">Quick replies</p>
              </div>
            </div>
          </motion.div>

          <div className="absolute left-1/2 top-8 z-20 h-[560px] w-[285px] -translate-x-1/2 rounded-[2.8rem] border-[10px] border-[#111111] bg-[#111111] shadow-2xl">
            <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-[#111111]" />

            <div className="h-full overflow-hidden rounded-[2rem] bg-[#FAFAFA]">
              <img
                src="/images/stylique-home.jpeg"
                alt="Stylique App"
                className="h-full w-full object-contain object-top"
              />
            </div>
          </div>

          <Sparkles className="absolute left-10 top-20 h-6 w-6 text-neutral-400" />
          <Sparkles className="absolute bottom-28 right-10 h-5 w-5 text-neutral-400" />
        </motion.div>
      </div>
    </section>
  );
}