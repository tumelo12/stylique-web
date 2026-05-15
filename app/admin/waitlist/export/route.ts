import { NextRequest } from "next/server";

import { adminDb } from "../../../../src/lib/firebaseAdmin";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const password = searchParams.get("password") || "";
  const role = searchParams.get("role") || "all";

  if (password !== process.env.WAITLIST_ADMIN_PASSWORD) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  let query = adminDb
    .collection("waitlist_signups")
    .orderBy("createdAt", "desc");

  if (role !== "all") {
    query = adminDb
      .collection("waitlist_signups")
      .where("role", "==", role)
      .orderBy("createdAt", "desc");
  }

  const snapshot = await query.get();

  const rows = snapshot.docs.map((doc) => {
    const data = doc.data();

    return {
      name: String(data.name || ""),
      email: String(data.email || ""),
      role: String(data.role || ""),
      area: String(data.area || ""),
      status: String(data.status || ""),
      contacted: Boolean(data.contacted) ? "Yes" : "No",
      notes: String(data.notes || ""),
      createdAt:
        data.createdAt?.toDate?.()?.toLocaleString("en-ZA") || "",
    };
  });

  const headers = [
    "Name",
    "Email",
    "Role",
    "Area",
    "Status",
    "Contacted",
    "Notes",
    "Created At",
  ];

  const csvRows = [
    headers.join(","),
    ...rows.map((row) =>
      [
        row.name,
        row.email,
        row.role,
        row.area,
        row.status,
        row.contacted,
        row.notes.replace(/,/g, " "),
        row.createdAt,
      ]
        .map((value) => `"${value}"`)
        .join(","),
    ),
  ];

  const csv = csvRows.join("\n");

  return new Response(csv, {
    status: 200,
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition":
        `attachment; filename="stylique-waitlist-${role}.csv"`,
    },
  });
}