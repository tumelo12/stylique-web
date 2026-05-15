export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/90 px-4 py-3 shadow-[0_-12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl lg:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href="/?role=vendor#waitlist"
          className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-3 text-center text-sm font-semibold text-[#111111]"
        >
          Become Vendor
        </a>

        <a
          href="#waitlist"
          className="flex-1 rounded-xl bg-[#111111] px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Join Waitlist
        </a>
      </div>
    </div>
  );
}