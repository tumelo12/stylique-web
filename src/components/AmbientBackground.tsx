"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-black/[0.03] blur-3xl"
      />

      <motion.div
        animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10rem] top-[36rem] h-[32rem] w-[32rem] rounded-full bg-[#F6F6F6] blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-black/[0.025] blur-3xl"
      />
    </div>
  );
}