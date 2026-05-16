"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@stylique.co.za",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+27 12 345 6789",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pretoria, South Africa",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Sat, 08:00 - 18:00",
  },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setStatus(null);

    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent.");
      }

      form.reset();

      setStatus({
        type: "success",
        message: "Message sent successfully. We will get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Message could not be sent. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-padding bg-[#FAFAFA]">
      <div className="stylique-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#666666]">
              Contact
            </p>

            <h2 className="font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
              Let&apos;s talk beauty.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#666666]">
              Have a question, partnership idea, vendor application request or
              launch enquiry? Send us a message and the Stylique team will help.
            </p>

            <div className="mt-9 grid gap-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-[1.6rem] border border-[#EFEFEF] bg-white p-5 shadow-sm"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#F6F6F6] text-[#111111]">
                      <Icon size={19} />
                    </span>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#666666]">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-bold text-[#111111]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.98, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] border border-[#EFEFEF] bg-white p-6 shadow-2xl shadow-black/5 sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field name="name" label="Name" placeholder="Your name" />

              <Field
                name="email"
                label="Email"
                placeholder="you@example.com"
                type="email"
              />
            </div>

            <div className="mt-5">
              <Field
                name="subject"
                label="Subject"
                placeholder="How can we help?"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-bold text-[#111111]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={6}
                required
                placeholder="Write your message..."
                className="w-full resize-none rounded-[1.4rem] border border-[#EFEFEF] bg-white px-5 py-4 text-sm text-[#111111] outline-none transition-all placeholder:text-[#999999] focus:border-black/20 focus:ring-4 focus:ring-black/5"
              />
            </div>

            {status && (
              <div
                className={`mt-5 rounded-2xl px-5 py-4 text-sm font-semibold ${
                  status.type === "success"
                    ? "bg-[#F6F6F6] text-[#111111]"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="black-button group mt-7 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}

              <Send
                size={16}
                className="ml-2 transition-transform group-hover:translate-x-1"
              />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  type = "text",
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold text-[#111111]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-14 w-full rounded-[1.4rem] border border-[#EFEFEF] bg-white px-5 text-sm text-[#111111] outline-none transition-all placeholder:text-[#999999] focus:border-black/20 focus:ring-4 focus:ring-black/5"
      />
    </div>
  );
}