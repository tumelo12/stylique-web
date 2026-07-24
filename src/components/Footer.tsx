"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Lock,
  MailPlus,
  ScrollText,
} from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { APP_LINKS } from "@/src/lib/constants";

const footerCards = [
  {
    title: "Privacy Policy",
    description: "See how Stylique protects customer and vendor information.",
    cta: "Read Policy",
    href: "/privacy",
    icon: Lock,
  },
  {
    title: "Terms of Service",
    description: "Understand the terms for using the Stylique platform.",
    cta: "View Terms",
    href: "/terms",
    icon: FileText,
  },
  {
    title: "Vendor Terms",
    description: "Learn how vendor onboarding, bookings and commissions work.",
    cta: "Vendor Terms",
    href: "/vendor-terms",
    icon: ScrollText,
  },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleWaitlistSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "",
          email: email.trim(),
          phoneNumber: "",
          city: "Pretoria",
          type: "customer",
          source: "website_footer",
        }),
      });

      const result = await response.json();

if (result.duplicate) {
  setSubmitted(true);
  setEmail("");
  return;
}

if (!response.ok) {
  throw new Error(result.error || "Could not join waitlist.");
}

setSubmitted(true);
setEmail("");
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Could not join waitlist. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer className="bg-white">
      <section className="section-padding">
        <div className="stylique-container">
          <div className="grid gap-5 lg:grid-cols-4">
            {footerCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-[#EFEFEF] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F6F6F6] text-[#111111]">
                    <Icon size={20} />
                  </div>

                  <h3 className="text-lg font-black text-[#111111]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#666666]">
                    {card.description}
                  </p>

                  <Link
                    href={card.href}
                    className="mt-6 inline-flex items-center text-sm font-black text-[#111111]"
                  >
                    {card.cta}
                    <ArrowRight size={15} className="ml-2" />
                  </Link>
                </motion.div>
              );
            })}

            <motion.div
  initial={{ opacity: 0, y: 22 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.45, delay: 0.24 }}
  className="rounded-[2rem] bg-[#111111] p-6 text-white shadow-xl shadow-black/10"
>
  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#111111]">
    <MailPlus size={20} />
  </div>

  <h3 className="text-lg font-black">
    Download Stylique
  </h3>

  <p className="mt-3 text-sm leading-6 text-white/65">
    Discover trusted beauty professionals, book appointments in minutes and
    manage all your beauty bookings from one app.
  </p>

 <Link
  href={APP_LINKS.googlePlay}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-2xl bg-white px-5 text-sm font-black text-[#111111] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F3F3F3] hover:shadow-md"
>
  <span className="text-[#111111]">
    Download on Google Play
  </span>

  <ArrowRight
    size={16}
    className="ml-2 text-[#111111]"
  />
</Link>
</motion.div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-[#EFEFEF] pt-8 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-lg font-black tracking-[0.22em] text-[#111111]">
                STYLIQUE
              </p>

              <p className="mt-2 text-sm text-[#666666]">
                Beauty services near you, booked effortlessly.
              </p>
            </div>

            <p className="text-sm text-[#666666]">
              © 2026 Stylique. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}