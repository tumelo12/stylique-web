
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
          These Vendor Terms govern participation in the Stylique platform as a
          beauty or wellness service provider.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Vendor onboarding
            </h2>
            <p className="mt-3">
              Vendors may apply to join Stylique by submitting the required
              profile, business, and service information.
            </p>
            <p className="mt-3">
              Approval is subject to review and may depend on profile
              completeness, service quality, location coverage, platform
              standards, and other operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Vendor responsibilities
            </h2>
            <p className="mt-3">
              Vendors are responsible for maintaining accurate service details,
              pricing, availability, business information, and portfolio
              content.
            </p>
            <p className="mt-3">
              Vendors must honour confirmed bookings, communicate
              professionally, and provide services safely, respectfully, and in
              accordance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Direct customer payments
            </h2>
            <p className="mt-3">
              Customers currently pay vendors directly for services unless
              otherwise stated within the Stylique platform.
            </p>
            <p className="mt-3">
              Stylique does not currently process customer payments within the
              application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Commission
            </h2>
            <p className="mt-3">
              Stylique charges a commission of 15% on completed bookings made
              through the platform.
            </p>
            <p className="mt-3">
              Vendors are responsible for remitting Stylique's commission in
              accordance with the payment schedule communicated by Stylique,
              including any weekly or monthly settlement arrangements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Account suspension and termination
            </h2>
            <p className="mt-3">
              Stylique may suspend, restrict, deactivate, or terminate vendor
              accounts that violate platform policies, fail to meet service
              standards, engage in fraudulent activity, or create safety
              concerns.
            </p>
            <p className="mt-3">
              Vendors may also request account deactivation through the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Platform changes
            </h2>
            <p className="mt-3">
              Stylique may update features, booking processes, commission
              structures, payment systems, service categories, and operational
              policies as the platform evolves.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Contact us
            </h2>
            <p className="mt-3">
              Questions regarding vendor participation, commissions, or vendor
              accounts may be directed to Stylique Support at
              support@yourdomain.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
