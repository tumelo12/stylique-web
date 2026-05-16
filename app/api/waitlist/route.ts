import { NextResponse } from "next/server";
import { firestore } from "@/src/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const { fullName, email, phoneNumber, city, type, source } =
      await request.json();

    if (!email || !type) {
      return NextResponse.json(
        { error: "Email and waitlist type are required." },
        { status: 400 }
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const waitlistType = type === "vendor" ? "vendor" : "customer";

    const collectionName =
      waitlistType === "vendor" ? "waitlist_vendors" : "waitlist_customers";

    await firestore.collection(collectionName).add({
      fullName: String(fullName || "").trim(),
      email: normalizedEmail,
      phoneNumber: String(phoneNumber || "").trim(),
      city: String(city || "Pretoria").trim(),
      type: waitlistType,
      source: String(source || "website").trim(),
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      { error: "Could not join waitlist. Please try again." },
      { status: 500 }
    );
  }
}