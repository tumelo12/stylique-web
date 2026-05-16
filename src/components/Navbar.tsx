"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";


type NavbarProps = {
  onJoinWaitlist?: () => void;
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "For Vendors", href: "#vendors" },
  { label: "For Customers", href: "#customers" },
  { label: "Early Access", href: "#early-access" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar({ onJoinWaitlist }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#EFEFEF] bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-white/60 backdrop-blur-xl"
      }`}
    >
      <nav className="stylique-container flex h-20 items-center justify-between">
     <a href="#home" className="flex items-center gap-3">
  <Image
    src="/stylique-logo.png"
    alt="Stylique logo"
    width={42}
    height={42}
    priority
    className="h-[2.6rem] w-[2.6rem] object-contain"
  />

  <span className="text-[1.05rem] font-black tracking-[0.32em] text-[#111111]">
    STYLIQUE
  </span>
</a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#666666] transition-colors hover:text-[#111111]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <button
            type="button"
            onClick={onJoinWaitlist}
            className="black-button"
          >
            Join Waitlist
          </button>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#EFEFEF] bg-white text-[#111111] shadow-sm lg:hidden"
        >
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.div
              className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm rounded-[2rem] border border-[#EFEFEF] bg-white p-5 shadow-2xl lg:hidden"
              initial={{ opacity: 0, y: -16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.96 }}
              transition={{ duration: 0.22 }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-sm font-black tracking-[0.22em]">
                  STYLIQUE
                </span>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6F6F6] text-[#111111]"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-[#111111] transition-colors hover:bg-[#F6F6F6]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  onJoinWaitlist?.();
                }}
                className="black-button mt-6 w-full"
              >
                Join Waitlist
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}