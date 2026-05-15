"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How do bookings work on Stylique?",
    answer:
      "Customers can discover beauty professionals, view services, choose available times and request appointments directly through the app.",
  },
  {
    question: "Do customers pay through the app?",
    answer:
      "For the initial launch, customers will pay vendors directly at the appointment.",
  },
  {
    question: "Can customers chat with vendors?",
    answer:
      "Yes. Stylique includes in-app messaging so customers and vendors can communicate before appointments.",
  },
  {
    question: "How do appointment reminders work?",
    answer:
      "Stylique automatically sends reminders on the appointment day and before the scheduled booking time.",
  },
  {
    question: "How can I become a Stylique vendor?",
    answer:
      "Beauty professionals can apply through the app to join the Pretoria launch onboarding program.",
  },
  {
    question: "Which areas will Stylique support first?",
    answer:
      "Stylique is initially launching in Pretoria with plans to expand to more areas later.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
  id="faq"
  className="px-6 py-16 lg:px-8 lg:py-24"
>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight text-[#111111] md:text-5xl">
            Frequently asked questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
            Everything you need to know about Stylique before launch.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-black/5 bg-white shadow-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-6 text-base font-semibold text-[#111111]">
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-neutral-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6">
                        <p className="max-w-3xl text-sm leading-relaxed text-neutral-500">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}