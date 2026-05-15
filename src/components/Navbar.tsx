"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "For Customers", href: "#customers" },
  { label: "For Vendors", href: "#vendors" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-black/5 bg-[#FAFAFA]/85 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <a href="#" className="text-2xl font-semibold tracking-wide">
          STYLIQUE
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-800 transition-colors hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#waitlist"
          className="hidden rounded-xl bg-[#111111] px-5 py-3 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md lg:inline-flex"
        >
          Join Waitlist
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-white shadow-sm lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="border-t border-black/5 bg-[#FAFAFA] px-6 pb-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-[#111111] px-5 py-3 text-center text-sm font-medium text-white shadow-sm"
              >
                Download App
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}