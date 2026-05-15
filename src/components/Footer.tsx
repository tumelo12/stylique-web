export function Footer() {
  const navLinks = ["Home", "For Customers", "For Vendors", "About Us", "Contact"];

  return (
    <footer className="bg-[#111111] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="text-2xl font-semibold tracking-wide">STYLIQUE</p>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/55">
              A Pretoria-first beauty marketplace helping customers discover
              and book trusted beauty professionals.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70">
              Launching soon in Pretoria
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>

            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-white/55 transition-colors hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">For vendors</h3>

            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Vendor onboarding is open for selected salons, nail techs,
              braiders, barbers and beauty professionals.
            </p>

            <a
              href="/?role=vendor#waitlist"
              className="mt-5 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-medium text-[#111111] transition-all duration-300 hover:scale-[1.02]"
            >
              Become a Vendor
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Stylique. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-white/40">
            <a href="#" className="transition-colors hover:text-white">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-white">
              TikTok
            </a>
            <a href="#" className="transition-colors hover:text-white">
              X
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}