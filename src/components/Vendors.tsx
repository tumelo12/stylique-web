"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarCheck,
  Check,
  Headphones,
  MapPin,
  MessageCircle,
  Wallet,
} from "lucide-react";

const checklist = [
  "Get discovered by nearby customers",
  "Manage bookings with ease",
  "Receive direct payments",
  "Settle simple commissions",
  "Build reviews and repeat clients",
  "Dedicated vendor support",
];

type VendorsProps = {
  onBecomeVendor?: () => void;
};

export function Vendors({ onBecomeVendor }: VendorsProps) {
  return (
    <section id="vendors" className="section-padding bg-white">
      <div className="stylique-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#666666]">
            For Vendors
          </p>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Grow your beauty business with Stylique.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#666666]">
            Stylique helps salons, nail techs, makeup artists, braiders,
            barbers and beauty professionals get discovered, manage bookings,
            and build repeat customers across Pretoria.
          </p>

          <div className="mt-8 grid gap-3">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#111111] text-white">
                  <Check size={14} />
                </span>

                <span className="text-sm font-medium leading-6 text-[#111111]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onBecomeVendor}
            className="black-button group mt-9"
          >
            Become a Vendor

            <ArrowRight
              size={17}
              className="ml-2 transition-transform group-hover:translate-x-1"
            />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto w-full max-w-[440px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#F6F6F6] blur-3xl" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto rounded-[3rem] border border-[#EFEFEF] bg-[#111111] p-3 shadow-2xl shadow-black/20"
          >
            <div className="overflow-hidden rounded-[2.4rem] bg-white">
              <div className="flex items-center justify-between border-b border-[#EFEFEF] px-5 py-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#666666]">
                    Vendor dashboard
                  </p>

                  <h3 className="mt-1 text-lg font-black text-[#111111]">
                    Glow Bar Pretoria
                  </h3>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F6F6]">
                  <BadgeCheck size={20} />
                </span>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-[2rem] bg-[#F6F6F6] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-[#666666]">
                      This month
                    </p>

                    <BarChart3 size={19} />
                  </div>

                  <p className="mt-4 text-3xl font-black text-[#111111]">
                    R12,450
                  </p>

                  <p className="mt-1 text-sm text-[#666666]">
                    Earned from completed bookings
                  </p>
                </div>

                <DashboardRow
                  icon={CalendarCheck}
                  title="Next booking"
                  text="Today, 14:30 · Gel Nails"
                />

                <DashboardRow
                  icon={MessageCircle}
                  title="New message"
                  text="Customer asked about availability"
                />

                <DashboardRow
                  icon={Wallet}
                  title="Commission status"
                  text="Simple monthly settlement"
                />

                <DashboardRow
                  icon={MapPin}
                  title="Nearby visibility"
                  text="Showing to customers in Pretoria"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 top-24 hidden rounded-3xl border border-[#EFEFEF] bg-white p-4 shadow-xl sm:block"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#666666]">
              Earned this month
            </p>

            <p className="mt-2 text-2xl font-black text-[#111111]">
              R12,450
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 bottom-20 hidden rounded-3xl border border-[#EFEFEF] bg-white p-4 shadow-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
                <Headphones size={19} />
              </span>

              <div>
                <p className="text-sm font-black text-[#111111]">
                  Vendor support
                </p>

                <p className="text-xs text-[#666666]">
                  Launch guidance
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DashboardRow({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[1.5rem] border border-[#EFEFEF] bg-white p-4 shadow-sm">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-black/[0.03]">
        <Icon size={18} />
      </span>

      <div>
        <p className="text-sm font-black text-[#111111]">
          {title}
        </p>

        <p className="mt-0.5 text-xs leading-5 text-[#666666]">
          {text}
        </p>
      </div>
    </div>
  );
}