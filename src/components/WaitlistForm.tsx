"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function WaitlistForm() {
  const [role, setRole] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    const params = new URLSearchParams(window.location.search);
    const requestedRole = params.get("role");

    return requestedRole === "vendor" || requestedRole === "customer"
      ? requestedRole
      : "";
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      role,
      area: String(formData.get("area") || ""),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "h-12 w-full rounded-2xl border border-black/10 bg-[#F7F7F7] px-4 text-sm text-[#111111] outline-none transition duration-300 placeholder:text-neutral-400 focus:border-black/25 focus:bg-white focus:shadow-[0_12px_30px_rgba(0,0,0,0.06)]";

  if (submitted) {
    return (
      <div className="rounded-[1.8rem] border border-black/5 bg-white p-6 shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
        <div className="inline-flex rounded-2xl bg-neutral-100 p-3">
          <CheckCircle2 className="h-6 w-6 text-[#111111]" />
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Early access confirmed
        </p>

        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111111]">
          You’re on the waitlist.
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-500">
          Thank you for joining early. We’ll keep you updated as Stylique gets
          ready for launch in Pretoria.
        </p>
      </div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-[1.8rem] border border-white/70 bg-white p-6 shadow-[0_35px_90px_rgba(0,0,0,0.22)]"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
          Early access
        </p>

        <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-[#111111]">
          Join the waitlist
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
          Be first to hear when Stylique opens in Pretoria.
        </p>
      </div>

      <div className="grid gap-3">
        <input
          required
          name="name"
          type="text"
          placeholder="Your name"
          className={inputClass}
        />

        <input
          required
          name="email"
          type="email"
          placeholder="Email address"
          className={inputClass}
        />

        <select
          required
          name="role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          className={`${inputClass} cursor-pointer text-neutral-600`}
        >
          <option value="" disabled>
            I’m joining as...
          </option>

          <option value="customer">Customer</option>

          <option value="vendor">
            Beauty professional / Vendor
          </option>
        </select>

        <input
          name="area"
          type="text"
          placeholder="Area in Pretoria"
          className={inputClass}
        />

        {error && (
          <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[#111111] px-5 text-sm font-bold text-white shadow-[0_18px_45px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </motion.form>
  );
}