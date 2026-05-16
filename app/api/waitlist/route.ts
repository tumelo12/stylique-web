import { NextResponse } from "next/server";
import { firestore } from "@/src/lib/firebaseAdmin";

export async function POST(request: Request) {
  try {
    const { fullName, email, phoneNumber, city, type, source } =
      await request.json();

    if (!email || !type) {
      return NextResponse.json(
        { error: "Email and waitlist type are required." },
        { status: 400 },
      );
    }

    const normalizedEmail = String(email).trim().toLowerCase();
    const normalizedPhone = String(phoneNumber || "")
  .trim()
  .replace(/\s+/g, "");

const emailRegex =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegex =
  /^(\+27|0)[6-8][0-9]{8}$/;

    if (!normalizedEmail.includes("@")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }
if (!emailRegex.test(normalizedEmail)) {
  return NextResponse.json(
    { error: "Please enter a valid email address." },
    { status: 400 },
  );
}

if (
  normalizedPhone &&
  !phoneRegex.test(normalizedPhone)
) {
  return NextResponse.json(
    {
      error:
        "Please enter a valid South African phone number.",
    },
    { status: 400 },
  );
}
    const waitlistType = type === "vendor" ? "vendor" : "customer";

    const collectionName =
      waitlistType === "vendor" ? "waitlist_vendors" : "waitlist_customers";

    const existingSnapshot = await firestore
      .collection(collectionName)
      .where("email", "==", normalizedEmail)
      .limit(1)
      .get();

    if (!existingSnapshot.empty) {
      return NextResponse.json({
        success: true,
        duplicate: true,
        message: "You are already on the waitlist.",
      });
    }

    await firestore.collection(collectionName).add({
      fullName: String(fullName || "").trim(),
      email: normalizedEmail,
      phoneNumber: normalizedPhone,
      city: String(city || "Pretoria").trim(),
      type: waitlistType,
      source: String(source || "website").trim(),
      createdAt: new Date(),
    });

    return NextResponse.json({
      success: true,
      duplicate: false,
      message: "You are on the waitlist.",
    });
  } catch (error) {
    console.error("Waitlist error:", error);

    return NextResponse.json(
      { error: "Could not join waitlist. Please try again." },
      { status: 500 },
    );
  }
}