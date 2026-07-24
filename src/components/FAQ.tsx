"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";
const faqs = [
  {
    question: "Is Stylique available to download?",
    answer:
      "Yes. Stylique is available on Google Play. Download the app to discover trusted beauty professionals, book appointments and manage your beauty bookings.",
  },
  {
    question: "Where is Stylique currently available?",
    answer:
      "Stylique is currently focused on Pretoria, connecting customers with trusted local beauty professionals. More cities will be added as the platform grows.",
  },
  {
    question: "How do vendors join Stylique?",
    answer:
      "Beauty professionals can apply through the vendor application process. Once approved, they can create their profile, list services and start receiving booking requests.",
  },
  {
    question: "How do bookings work?",
    answer:
      "Browse beauty professionals, compare services, choose your preferred time and send a booking request directly through the Stylique app.",
  },
  {
    question: "How does commission work for vendors?",
    answer:
      "Stylique tracks completed bookings and applies commission according to the Vendor Terms accepted during onboarding.",
  },
  {
    question: "How can I contact Stylique?",
    answer:
      "You can reach our team through the Contact section of the website for support, partnerships or vendor enquiries.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="section-padding bg-[#FAFAFA]">
      <div className="stylique-container">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
            <HelpCircle size={22} />
          </div>

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#666666]">
            Questions
          </p>

          <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mt-5 text-base leading-8 text-[#666666]">
            Clear answers for customers and vendors before Stylique launches.
          </p>
        </motion.div>

        <div className="mx-auto mt-12 max-w-4xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="overflow-hidden rounded-[1.8rem] border border-[#EFEFEF] bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                >
                  <span className="text-base font-black text-[#111111]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F6F6] text-[#111111] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="border-t border-[#EFEFEF] px-6 py-5 text-sm leading-7 text-[#666666]">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}