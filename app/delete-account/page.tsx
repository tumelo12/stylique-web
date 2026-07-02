import Link from "next/link";

export default function DeleteAccountPage() {
  return (
    <main className="bg-white">
      <section className="stylique-container section-padding max-w-4xl">
        <Link href="/" className="text-sm font-bold text-[#666666]">
          ← Back to home
        </Link>

        <h1 className="mt-8 font-serif text-4xl font-bold tracking-tight text-[#111111] sm:text-5xl">
          Delete Your Stylique Account
        </h1>

        <p className="mt-5 text-sm leading-7 text-[#666666]">
          At Stylique, we respect your privacy and your right to control your
          personal information. If you decide to leave Stylique, you can request
          permanent deletion of your account directly from within the
          application.
        </p>

        <div className="mt-10 space-y-8 text-sm leading-7 text-[#666666]">
          <section>
            <h2 className="text-xl font-black text-[#111111]">
              How to request account deletion
            </h2>

            <ol className="mt-3 list-decimal space-y-2 pl-6">
              <li>Open the Stylique app.</li>
              <li>Sign in to your account.</li>
              <li>Go to <strong>Profile → Settings</strong>.</li>
              <li>Select <strong>Request Account Deletion</strong>.</li>
              <li>Review the information presented.</li>
              <li>Confirm your deletion request.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              What happens after your request?
            </h2>

            <p className="mt-3">
              Once your request has been submitted, your Stylique account is
              immediately deactivated and you will be signed out of the
              application.
            </p>

            <p className="mt-3">
              Your deletion request is securely recorded and reviewed by the
              Stylique Support Team.
            </p>

            <p className="mt-3">
              Your account enters a 30-day recovery period. During this time,
              you may contact Stylique Support if you wish to cancel your
              deletion request.
            </p>

            <p className="mt-3">
              After the recovery period ends, your account and associated
              personal information will be permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Can I restore my account?
            </h2>

            <p className="mt-3">
              Yes. During the 30-day recovery period, you may contact Stylique
              Support to request restoration of your account.
            </p>

            <p className="mt-3">
              Once your account has been permanently deleted, it cannot be
              recovered.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              What data is deleted?
            </h2>

            <p className="mt-3">
              When your deletion request is completed, Stylique will permanently
              remove personal information associated with your account where
              applicable, including:
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Account profile information</li>
              <li>Authentication credentials</li>
              <li>Saved favourites</li>
              <li>Profile images</li>
              <li>Vendor profile information (if applicable)</li>
              <li>Vendor services (if applicable)</li>
            </ul>

            <p className="mt-3">
              Certain information may be retained where required by law or for
              legitimate business purposes, including fraud prevention, dispute
              resolution, financial record keeping, and regulatory compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-black text-[#111111]">
              Need assistance?
            </h2>

            <p className="mt-3">
              If you experience any problems requesting account deletion or have
              questions about your account, please contact Stylique Support.
            </p>

            <p className="mt-3 font-semibold text-[#111111]">
              Email: support@stylique.co.za
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}