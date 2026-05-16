import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="stylique-container section-padding max-w-4xl">
        <Link href="/" className="text-sm font-bold text-[#666666]">
          ← Back to home
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
          Terms of Service
        </h1>

        <p className="mt-5 text-sm leading-7 text-[#666666]">
          These terms explain the basic rules for using Stylique during early
          access and launch preparation.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Platform purpose
            </h2>
            <p className="mt-3">
              Stylique helps customers discover beauty professionals, request
              bookings, communicate with vendors, and manage appointment-related
              activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Customer responsibility
            </h2>
            <p className="mt-3">
              Customers are responsible for providing accurate booking details,
              arriving on time, and paying vendors directly where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Vendor responsibility
            </h2>
            <p className="mt-3">
              Vendors are responsible for accurate service listings, professional
              conduct, appointment fulfilment, and communication with customers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Early access
            </h2>
            <p className="mt-3">
              Stylique is preparing for launch. Features, availability, vendor
              coverage, and service areas may change as the platform improves.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}