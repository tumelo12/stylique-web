import Link from "next/link";
export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="stylique-container section-padding max-w-4xl">
       <Link href="/" className="text-sm font-bold text-[#666666]">
          ← Back to home
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-5 text-sm leading-7 text-[#666666]">
          Stylique respects your privacy. We collect information needed to help
          customers discover beauty professionals, request bookings, communicate
          with vendors, and support the Stylique platform.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Information we collect
            </h2>
            <p className="mt-3">
              We may collect account details, contact information, location
              information, booking details, vendor profile information, messages,
              and support enquiries.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              How we use information
            </h2>
            <p className="mt-3">
              We use information to operate Stylique, support bookings, improve
              customer and vendor experiences, communicate launch updates, and
              keep the platform safe.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Payments
            </h2>
            <p className="mt-3">
              During launch, customers pay vendors directly at the appointment.
              Stylique does not process customer payments in-app at this stage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Contact
            </h2>
            <p className="mt-3">
              For privacy questions, contact the Stylique team through the
              contact form on the website.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}