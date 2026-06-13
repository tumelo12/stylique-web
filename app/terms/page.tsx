
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
          These Terms of Service govern your use of the Stylique platform,
          including our website, mobile applications, and related services.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Using the platform
            </h2>
            <p className="mt-3">
              Stylique is a marketplace that connects customers with beauty and
              wellness professionals. By using the platform, you agree to use it
              lawfully, respectfully, and in accordance with these terms.
            </p>
            <p className="mt-3">
              You are responsible for maintaining accurate account information
              and keeping your login credentials secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Marketplace services
            </h2>
            <p className="mt-3">
              Stylique provides a technology platform that connects customers
              with independent beauty and wellness professionals.
            </p>
            <p className="mt-3">
              Vendors are independent businesses and are solely responsible for
              the services they provide.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Bookings and cancellations
            </h2>
            <p className="mt-3">
              Bookings are subject to vendor availability and confirmation.
            </p>
            <p className="mt-3">
              Cancellations, reschedules, no-shows, and booking-related actions
              may be governed by vendor policies or platform policies displayed
              within the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Payments
            </h2>
            <p className="mt-3">
              Customers currently pay vendors directly for services unless
              otherwise stated within the Stylique platform.
            </p>
            <p className="mt-3">
              Stylique may introduce additional payment functionality in future
              versions of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Vendor responsibilities
            </h2>
            <p className="mt-3">
              Vendors are responsible for maintaining accurate service
              information, pricing, availability, business details, and service
              quality.
            </p>
            <p className="mt-3">
              Vendors must comply with all applicable laws, regulations,
              licensing requirements, and professional obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Reviews and content
            </h2>
            <p className="mt-3">
              Users may submit reviews, ratings, profile information, messages,
              and other content through the platform.
            </p>
            <p className="mt-3">
              Users are responsible for ensuring that submitted content is
              accurate, lawful, and respectful of others.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Account suspension and termination
            </h2>
            <p className="mt-3">
              Stylique may suspend, deactivate, restrict, or permanently remove
              accounts that violate platform rules, engage in fraud, abuse the
              service, or create safety concerns.
            </p>
            <p className="mt-3">
              Users may also request account deactivation through the
              application.
            </p>
            <p className="mt-3">
              Permanently deleted accounts may not be recoverable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Limitation of liability
            </h2>
            <p className="mt-3">
              Stylique acts as a technology platform and does not guarantee the
              quality, availability, safety, or suitability of services offered
              by independent vendors.
            </p>
            <p className="mt-3">
              To the maximum extent permitted by law, Stylique shall not be
              liable for indirect, incidental, consequential, or special damages
              arising from use of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Contact us
            </h2>
            <p className="mt-3">
              If you have questions about these Terms of Service, please contact
              Stylique Support at support@yourdomain.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
