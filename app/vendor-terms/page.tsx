import Link from "next/link";

export default function VendorTermsPage() {
  return (
    <main className="bg-white">
      <section className="stylique-container section-padding max-w-4xl">
        <Link href="/" className="text-sm font-bold text-[#666666]">
          ← Back to home
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
          Vendor Terms
        </h1>

        <p className="mt-5 text-sm leading-7 text-[#666666]">
          These vendor terms outline how early vendor onboarding, bookings, and
          commissions work on Stylique.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Vendor onboarding
            </h2>
            <p className="mt-3">
              Vendors may apply to join Stylique. Approval may depend on service
              quality, profile completeness, location, and platform readiness.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Direct customer payments
            </h2>
            <p className="mt-3">
              During launch, customers pay vendors directly at the appointment.
              Stylique does not collect customer payments in-app at this stage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Commission
            </h2>
            <p className="mt-3">
              Stylique may charge commission on completed bookings. Vendors must
              agree to the current commission policy before receiving bookings
              through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Vendor conduct
            </h2>
            <p className="mt-3">
              Vendors are expected to provide accurate service information,
              honour confirmed bookings, communicate professionally, and deliver
              services safely and respectfully.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}