"use client";

import { ArrowRight } from "lucide-react";

type MobileStickyCTAProps = {
  onBecomeVendor?: () => void;
};

export function MobileStickyCTA({
  onBecomeVendor,
}: MobileStickyCTAProps) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/90 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <button
          type="button"
          onClick={onBecomeVendor}
          className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#F6F6F6]"
        >
          Become a Vendor
        </button>

        <a
          href="#customer-download"
          className="flex flex-1 items-center justify-center rounded-xl bg-[#111111] px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-300 hover:bg-black"
        >
          Download App
          <ArrowRight size={15} className="ml-2" />
        </a>
      </div>
    </div>
  );
}