
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
          Stylique respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, store, and protect information when you use the Stylique
          platform.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Information we collect
            </h2>
            <p className="mt-3">
              We may collect account information such as your name, email
              address, profile details, authentication provider, and account
              preferences.
            </p>
            <p className="mt-3">
              We may collect booking information, reviews, messages, saved
              locations, vendor profile information, and other information
              required to provide Stylique services.
            </p>
            <p className="mt-3">
              When enabled, Stylique may collect location information to help
              display nearby vendors and saved addresses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              How we use information
            </h2>
            <p className="mt-3">
              We use information to create and manage accounts, support
              bookings, provide messaging features, display relevant services,
              improve platform performance, and keep the platform secure.
            </p>
            <p className="mt-3">
              Stylique may use services such as Google Sign-In and Firebase
              Authentication to verify and manage user accounts.
            </p>
            <p className="mt-3">
              Notification preferences may be used to send booking updates,
              reminders, account alerts, and service-related communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Sharing and retention
            </h2>
            <p className="mt-3">
              Stylique does not sell personal information. Information may be
              shared only when necessary to provide bookings, messaging,
              notifications, authentication, or other core platform features.
            </p>
            <p className="mt-3">
              Information may be retained for operational, legal,
              fraud-prevention, and security purposes where permitted by
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Payments
            </h2>
            <p className="mt-3">
              Customers currently pay vendors directly for services unless
              otherwise stated within the Stylique platform. Stylique does not
              currently process customer payments within the application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Account deletion and deactivation
            </h2>
            <p className="mt-3">
              Users may request account deactivation through the Stylique
              application.
            </p>
            <p className="mt-3">
              Deactivated accounts may remain recoverable for a limited period
              before permanent deletion.
            </p>
            <p className="mt-3">
              Once an account has been permanently deleted, access to Stylique
              services cannot be restored.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Your choices
            </h2>
            <p className="mt-3">
              You may update your profile information, saved locations, and
              notification preferences within the application.
            </p>
            <p className="mt-3">
              You may also request account deactivation through your account
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Contact us
            </h2>
            <p className="mt-3">
              If you have questions about this Privacy Policy, your account, or
              your personal information, please contact Stylique Support at
              support@yourdomain.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}