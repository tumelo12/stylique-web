import { NextResponse } from "next/server";

import { adminDb } from "../../../src/lib/firebaseAdmin";
import { resend } from "../../../src/lib/resend";

function buildWaitlistEmail({
  name,
  role,
  area,
}: {
  name: string;
  role: string;
  area: string;
}) {
  const isVendor = role === "vendor";

  return {
    subject: isVendor
      ? "You’re on the Stylique vendor waitlist"
      : "You’re on the Stylique waitlist",
    html: `
      <div style="font-family: Arial, sans-serif; background:#fafafa; padding:32px;">
        <div style="max-width:560px; margin:0 auto; background:white; border-radius:24px; padding:32px; color:#111;">
          <p style="font-size:13px; letter-spacing:2px; text-transform:uppercase; color:#999; margin:0 0 16px;">
            Stylique Pretoria
          </p>

          <h1 style="font-size:28px; line-height:1.2; margin:0 0 16px;">
            ${isVendor ? "Welcome to the Stylique vendor waitlist." : "You’re officially on the Stylique waitlist."}
          </h1>

          <p style="font-size:15px; line-height:1.7; color:#555;">
            Hi ${name},
          </p>

          <p style="font-size:15px; line-height:1.7; color:#555;">
            ${
              isVendor
                ? `Thank you for joining Stylique as a beauty professional${area ? ` in ${area}` : ""}. We’re currently onboarding selected Pretoria-based vendors before launch.`
                : `Thank you for joining Stylique${area ? ` from ${area}` : ""}. We’re building a premium beauty booking marketplace launching Pretoria-first.`
            }
          </p>

          ${
            isVendor
              ? `
                <p style="font-size:15px; line-height:1.7; color:#555;">
                  Before launch, our team may contact you to learn more about your services, location, pricing, portfolio, and onboarding readiness.
                </p>

                <p style="font-size:15px; line-height:1.7; color:#555;">
                  Stylique is designed to help beauty professionals get discovered, receive bookings, and grow through a modern marketplace experience.
                </p>
              `
              : `
                <p style="font-size:15px; line-height:1.7; color:#555;">
                  We’ll keep you updated as early access opens, vendors are onboarded, and bookings become available.
                </p>
              `
          }

          <div style="margin-top:28px; padding:18px; border-radius:18px; background:#f7eeee;">
            <p style="margin:0; font-size:14px; line-height:1.6; color:#333;">
              Stylique is currently in pre-launch. You’ll be among the first to know when we open access.
            </p>
          </div>

          <p style="margin-top:28px; font-size:14px; line-height:1.7; color:#777;">
            — The Stylique Team
          </p>
        </div>
      </div>
    `,
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const role = String(body.role || "").trim();
    const area = String(body.area || "").trim();

    if (!name || !email || !role) {
      return NextResponse.json(
        { message: "Name, email and role are required." },
        { status: 400 },
      );
    }

    const existingSignup = await adminDb
      .collection("waitlist_signups")
      .where("email", "==", email)
      .limit(1)
      .get();

    if (!existingSignup.empty) {
      return NextResponse.json(
        { message: "You’re already on the waitlist." },
        { status: 409 },
      );
    }

    await adminDb.collection("waitlist_signups").add({
      name,
      email,
      role,
      area,
      source: "stylique-web",
      status: "new",
      contacted: false,
      notes: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
console.log("✅ Firestore saved. Preparing email...");
console.log("RESEND_API_KEY exists:", Boolean(process.env.RESEND_API_KEY));
console.log("RESEND_FROM_EMAIL:", process.env.RESEND_FROM_EMAIL);
    const emailContent = buildWaitlistEmail({
  name,
  role,
  area,
});

const { data: emailData, error: emailError } =
  await resend.emails.send({
    from:
      process.env.RESEND_FROM_EMAIL ||
      "Stylique <onboarding@resend.dev>",
    to: [email],
    subject: emailContent.subject,
    html: emailContent.html,
  });

if (emailError) {
  console.error("Resend email error:", emailError);
} else {
  console.log("Resend email sent:", emailData);
}

console.log("✅ Waitlist route completed.");

return NextResponse.json({
  message: "Waitlist signup received.",
});
console.log("✅ Waitlist route completed.");
    return NextResponse.json({
      message: "Waitlist signup received.",
    });
  } catch (error) {
    console.error("Waitlist signup error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}