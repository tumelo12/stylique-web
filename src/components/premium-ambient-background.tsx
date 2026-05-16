"use client";

import { motion } from "framer-motion";

export function PremiumAmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.95),rgba(245,245,245,0.65)_35%,rgba(255,255,255,1)_75%)]" />

      <motion.div
        animate={{
          x: [0, 24, -12, 0],
          y: [0, -18, 14, 0],
          scale: [1, 1.08, 0.98, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neutral-300/35 blur-3xl sm:h-[560px] sm:w-[560px]"
      />

      <motion.div
        animate={{
          x: [0, -18, 20, 0],
          y: [0, 16, -12, 0],
          scale: [1, 0.96, 1.06, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-140px] top-28 h-[360px] w-[360px] rounded-full bg-neutral-200/60 blur-3xl sm:h-[480px] sm:w-[480px]"
      />

      <motion.div
        animate={{
          x: [0, 18, -18, 0],
          y: [0, -10, 18, 0],
          scale: [1, 1.05, 0.97, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-180px] right-[-140px] h-[420px] w-[420px] rounded-full bg-neutral-400/20 blur-3xl sm:h-[620px] sm:w-[620px]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.1),rgba(255,255,255,0.88)_78%,white)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
    </div>
  );
}