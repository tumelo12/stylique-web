"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  BellRing,
  CalendarCheck,
  Check,
  LockKeyhole,
  MessageCircle,
  Play,
  Repeat,
  Search,
  Star,
} from "lucide-react";
import Image from "next/image";

const checklist = [
  "Find verified beauty professionals",
  "Book in minutes",
  "Get appointment reminders",
  "Chat with your vendor",
  "Rebook favourites",
  "Secure completion with PIN verification",
];

type CustomersProps = {
  onJoinWaitlist?: () => void;
};

export function Customers({
  onJoinWaitlist,
}: CustomersProps) {
  return (
    <section id="customers" className="section-padding bg-[#FAFAFA]">
      <div className="stylique-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 26 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65 }}
          className="relative order-2 mx-auto w-full max-w-[440px] lg:order-1"
        >
          <div className="absolute inset-0 rounded-full bg-black/[0.03] blur-3xl" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative mx-auto rounded-[3rem] border border-[#EFEFEF] bg-[#111111] p-3 shadow-2xl shadow-black/20"
          >
            <div className="overflow-hidden rounded-[2.4rem] bg-white">
              <div className="relative h-56">
                <Image
                  src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop"
                  alt="Stylique beauty booking app preview"
                  fill
                  className="object-cover grayscale contrast-105 brightness-[0.98]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                    Nearby beauty
                  </p>

                  <h3 className="mt-1 text-2xl font-black text-white">
                    Find. Book. Glow.
                  </h3>
                </div>
              </div>

              <div className="space-y-4 p-5">
                <div className="rounded-[1.6rem] border border-[#EFEFEF] bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F6F6]">
                      <Search size={18} />
                    </span>

                    <div>
                      <p className="text-sm font-black text-[#111111]">
                        Search services
                      </p>

                      <p className="text-xs text-[#666666]">
                        Nails, braids, makeup, barbers
                      </p>
                    </div>
                  </div>
                </div>

                <AppVendorCard
                  image= "/images/services/hair.jpg"
                  name="Onky's Beauty Salon"
                  service="Braids · 2.1 km away"
                  icon={BadgeCheck}
                />

                <AppVendorCard
                  image="/images/services/acrylic.jpeg"
                  name="Prim's Self-Care"
                  service="Gel nails · 3.4 km away"
                  icon={Star}
                />

                <div className="grid grid-cols-2 gap-3">
                  <MiniTile icon={CalendarCheck} label="Book" />
                  <MiniTile icon={BellRing} label="Reminders" />
                  <MiniTile icon={MessageCircle} label="Chat" />
                  <MiniTile icon={Repeat} label="Rebook" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 top-24 hidden rounded-3xl border border-[#EFEFEF] bg-white p-4 shadow-xl sm:block"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111111] text-white">
                <LockKeyhole size={18} />
              </span>

              <div>
                <p className="text-sm font-black text-[#111111]">
                  PIN secure
                </p>

                <p className="text-xs text-[#666666]">
                  Completion verified
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 bottom-24 hidden rounded-3xl border border-[#EFEFEF] bg-white p-4 shadow-xl sm:block"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#666666]">
              Rebook favourite
            </p>

            <p className="mt-2 text-xl font-black text-[#111111]">
              21 days later
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="order-1 lg:order-2"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#666666]">
            For Customers
          </p>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Find. Book. Glow. Repeat.
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#666666]">
            Discover trusted beauty professionals near you, book your next
            appointment in minutes, and stay connected from confirmation to
            completion.
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

          <div
            id="customer-waitlist"
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <AppBadge
              label="Early access"
              store="Customer Waitlist"
              onClick={onJoinWaitlist}
            />

            <AppBadge
              label="Now onboarding"
              store="Beauty Vendors"
              onClick={onJoinWaitlist}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AppVendorCard({
  image,
  name,
  service,
  icon: Icon,
}: {
  image: string;
  name: string;
  service: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[1.6rem] border border-[#EFEFEF] bg-white p-3 shadow-sm">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
        <Image
  src={image}
  alt={name}
  fill
  className="object-cover grayscale contrast-105 brightness-[0.98]"
/>
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-black text-[#111111]">
          {name}
        </p>

        <p className="mt-1 truncate text-xs text-[#666666]">
          {service}
        </p>
      </div>

      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F6F6F6]">
        <Icon size={16} />
      </span>
    </div>
  );
}

function MiniTile({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="rounded-[1.3rem] border border-[#EFEFEF] bg-white p-3 shadow-sm">
      <Icon size={17} />

      <p className="mt-2 text-xs font-black text-[#111111]">
        {label}
      </p>
    </div>
  );
}

function AppBadge({
  label,
  store,
  onClick,
}: {
  label: string;
  store: string;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-2xl border border-[#EFEFEF] bg-white px-5 py-3 text-left shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white">
        <Play size={14} fill="white" />
      </span>

      <span>
        <span className="block text-[11px] font-medium text-[#666666]">
          {label}
        </span>

        <span className="block text-sm font-bold text-[#111111]">
          {store}
        </span>
      </span>
    </button>
  );
}