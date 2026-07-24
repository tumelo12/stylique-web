"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { trackMetaPixelEvent } from "@/src/lib/metaPixel";

type ApplicationType = "vendor";

type VendorApplicationModalProps = {
  open: boolean;
  onClose: () => void;
};

export function VendorApplicationModal({
  open,
  onClose,
}: VendorApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);


  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus(null);

    const payload = {
      fullName: String(formData.get("fullName") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phoneNumber: String(formData.get("phoneNumber") || "").trim(),
      city: String(formData.get("city") || "Pretoria").trim(),
     type: "vendor",
source: "website_vendor_application",
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.duplicate) {
        setStatus({
          type: "success",
          message: "You've already submitted a vendor application.",
        });

        return;
      }

      if (!response.ok) {
  throw new Error(result.error || "Could not join waitlist.");
}

trackMetaPixelEvent("CompleteRegistration");

form.reset();

setStatus({
        type: "success",
        message:
  "Thanks for applying! We'll review your application and contact you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Could not join waitlist. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="relative z-[110] flex min-h-full items-start justify-center px-4 py-8 sm:items-center sm:py-10">
            <motion.div
              className="w-full max-w-lg rounded-[2rem] border border-[#E8E8E8] bg-white p-6 shadow-2xl sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#666666]">
                  Vendor Application
                  </p>

                  <h2 className="font-serif text-3xl font-bold leading-tight text-[#111111]">
                    Become a Stylique Vendor
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-[#666666]">
                    Apply to join Stylique and start receiving booking requests from customers across Pretoria.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close vendor application modal"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F6F6F6] text-[#111111] transition-colors hover:bg-[#EEEEEE]"
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="fullName"
                  label="Full name"
                  placeholder="Your name"
                  autoComplete="name"
                />

                <Input
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                />

                <Input
                  name="phoneNumber"
                  label="Phone number"
                  type="tel"
                  placeholder="+27 82 123 4567"
                  autoComplete="tel"
                  inputMode="tel"
                />

                <Input
                  name="city"
                  label="City"
                  placeholder="Pretoria"
                  autoComplete="address-level2"
                />

                {status && (
                  <div
                    className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold ${
                      status.type === "success"
                        ? "border-[#E8E8E8] bg-[#F6F6F6] text-[#111111]"
                        : "border-[#D9D9D9] bg-[#F7F7F7] text-[#111111]"
                    }`}
                  >
                    {status.type === "success" && (
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    )}

                    <span>{status.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="black-button group w-full disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting

  ? "Submitting..."
  : "Submit Application"}

                  <ArrowRight
                    size={17}
                    className="ml-2 transition-transform group-hover:translate-x-1"
                  />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}

function Input({
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  inputMode,
}: {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
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
        required={name === "email"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="h-13 w-full rounded-[1.25rem] border border-[#E8E8E8] bg-white px-4 text-sm text-[#111111] outline-none transition-all placeholder:text-[#999999] focus:border-black/25 focus:ring-4 focus:ring-black/5"
      />
    </div>
  );
}