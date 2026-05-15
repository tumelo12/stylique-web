import { redirect } from "next/navigation";
import { FieldValue, type Query } from "firebase-admin/firestore";

import { adminDb } from "../../../src/lib/firebaseAdmin";

type SearchParams = {
  password?: string;
  role?: string;
};

async function toggleContactedAction(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");
  const password = String(formData.get("password") || "");
  const role = String(formData.get("role") || "all");
  const contacted = String(formData.get("contacted") || "") === "true";

  if (password !== process.env.WAITLIST_ADMIN_PASSWORD) {
    redirect("/admin/waitlist");
  }

  if (!id) {
    redirect(
      `/admin/waitlist?password=${encodeURIComponent(password)}&role=${role}`,
    );
  }

  await adminDb.collection("waitlist_signups").doc(id).update({
    contacted: !contacted,
    status: !contacted ? "contacted" : "new",
    updatedAt: FieldValue.serverTimestamp(),
  });

  redirect(`/admin/waitlist?password=${encodeURIComponent(password)}&role=${role}`);
}
async function saveNotesAction(formData: FormData) {
  "use server";

  const id = String(formData.get("id") || "");
  const notes = String(formData.get("notes") || "");
  const password = String(formData.get("password") || "");
  const role = String(formData.get("role") || "all");

  if (password !== process.env.WAITLIST_ADMIN_PASSWORD) {
    redirect("/admin/waitlist");
  }

  if (!id) {
    redirect(
      `/admin/waitlist?password=${encodeURIComponent(password)}&role=${role}`,
    );
  }

  await adminDb.collection("waitlist_signups").doc(id).update({
    notes,
    updatedAt: FieldValue.serverTimestamp(),
  });

  redirect(
    `/admin/waitlist?password=${encodeURIComponent(password)}&role=${role}`,
  );
}
export default async function WaitlistAdminPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const password = params.password || "";
  const role = params.role || "all";

  if (password !== process.env.WAITLIST_ADMIN_PASSWORD) {
    return (
      <main className="min-h-screen bg-[#FAFAFA] px-6 py-16 text-[#111111]">
        <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold">Waitlist Admin</h1>

          <p className="mt-3 text-sm text-neutral-500">
            Add your admin password in the URL to view signups.
          </p>

          <p className="mt-5 rounded-xl bg-[#F7EDEE] p-4 text-sm">
            /admin/waitlist?password=YOUR_PASSWORD
          </p>
        </div>
      </main>
    );
  }

  let query: Query = adminDb
    .collection("waitlist_signups")
    .orderBy("createdAt", "desc");

  if (role !== "all") {
    query = adminDb
      .collection("waitlist_signups")
      .where("role", "==", role)
      .orderBy("createdAt", "desc");
  }

  const snapshot = await query.get();

  const signups = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      id: doc.id,
      name: String(data.name || ""),
      email: String(data.email || ""),
      role: String(data.role || ""),
      area: String(data.area || ""),
      status: String(data.status || "new"),
contacted: Boolean(data.contacted),
notes: String(data.notes || ""),
createdAt:
        data.createdAt?.toDate?.()?.toLocaleString("en-ZA") || "Unknown",
    };
  });

  const totalCount = signups.length;
  const customerCount = signups.filter((signup) => signup.role === "customer").length;
  const vendorCount = signups.filter((signup) => signup.role === "vendor").length;
  const contactedCount = signups.filter((signup) => signup.contacted).length;
  const notContactedCount = totalCount - contactedCount;

  const stats = [
    { label: "Total signups", value: totalCount },
    { label: "Customers", value: customerCount },
    { label: "Vendors", value: vendorCount },
    { label: "Contacted", value: contactedCount },
    { label: "Not contacted", value: notContactedCount },
  ];

  const baseUrl = `/admin/waitlist?password=${password}`;

  return (
    <main className="min-h-screen bg-[#FAFAFA] px-6 py-10 text-[#111111]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold text-neutral-400">
              Stylique Admin
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight">
              Waitlist Signups
            </h1>

            <p className="mt-3 text-sm text-neutral-500">
              {signups.length} signup{signups.length === 1 ? "" : "s"} found.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {["all", "customer", "vendor"].map((item) => (
              <a
                key={item}
                href={`${baseUrl}&role=${item}`}
                className={`rounded-xl px-4 py-2 text-sm font-semibold capitalize ${
                  role === item
                    ? "bg-[#111111] text-white"
                    : "bg-white text-[#111111]"
                }`}
              >
                {item === "all" ? "All" : `${item}s`}
              </a>
            ))}
            <a
  href={`/admin/waitlist/export?password=${password}&role=${role}`}
  className="rounded-xl bg-[#111111] px-4 py-2 text-sm font-semibold text-white transition hover:bg-black"
>
  Export CSV
</a>
          </div>
        </div>

        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-black/5 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                {stat.label}
              </p>

              <p className="mt-3 text-3xl font-extrabold tracking-tight">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1250px] text-left text-sm">
              <thead className="bg-[#111111] text-white">
                <tr>
                  <th className="px-5 py-4 font-semibold">Name</th>
                  <th className="px-5 py-4 font-semibold">Email</th>
                  <th className="px-5 py-4 font-semibold">Role</th>
                  <th className="px-5 py-4 font-semibold">Area</th>
                  <th className="px-5 py-4 font-semibold">Status</th>
                  <th className="px-5 py-4 font-semibold">Contacted</th>
                  <th className="px-5 py-4 font-semibold">Notes</th>
<th className="px-5 py-4 font-semibold">Created</th>
<th className="px-5 py-4 font-semibold">Action</th>
                </tr>
              </thead>

              <tbody>
                {signups.map((signup) => (
                  <tr key={signup.id} className="border-b border-black/5">
                    <td className="px-5 py-4 font-semibold">{signup.name}</td>

                    <td className="px-5 py-4 text-neutral-600">
                      {signup.email}
                    </td>

                    <td className="px-5 py-4 capitalize">{signup.role}</td>

                    <td className="px-5 py-4 text-neutral-600">
                      {signup.area || "—"}
                    </td>

                    <td className="px-5 py-4">
                      <span className="rounded-full bg-[#F7EDEE] px-3 py-1 text-xs font-semibold">
                        {signup.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      {signup.contacted ? "Yes" : "No"}
                    </td>

                    <td className="px-5 py-4">
  <form action={saveNotesAction} className="flex min-w-[260px] gap-2">
    <input type="hidden" name="id" value={signup.id} />
    <input type="hidden" name="password" value={password} />
    <input type="hidden" name="role" value={role} />

    <input
      type="text"
      name="notes"
      defaultValue={signup.notes}
      placeholder="Add notes..."
      className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-3 py-2 text-xs outline-none transition focus:border-black"
    />

    <button
      type="submit"
      className="rounded-xl bg-[#111111] px-3 py-2 text-xs font-semibold text-white transition hover:bg-black"
    >
      Save
    </button>
  </form>
</td>

<td className="px-5 py-4 text-neutral-500">
  {signup.createdAt}
</td>

                    <td className="px-5 py-4">
                      <form action={toggleContactedAction}>
                        <input type="hidden" name="id" value={signup.id} />
                        <input type="hidden" name="password" value={password} />
                        <input type="hidden" name="role" value={role} />
                        <input
                          type="hidden"
                          name="contacted"
                          value={String(signup.contacted)}
                        />

                        <button
                          type="submit"
                          className={`rounded-xl px-4 py-2 text-xs font-bold transition ${
                            signup.contacted
                              ? "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                              : "bg-[#111111] text-white hover:bg-black"
                          }`}
                        >
                          {signup.contacted ? "Undo" : "Mark contacted"}
                        </button>
                      </form>
                    </td>
                  </tr>
                ))}

                {signups.length === 0 && (
                  <tr>
                    <td
                      colSpan={8}
                      className="px-5 py-10 text-center text-neutral-500"
                    >
                      No waitlist signups yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}