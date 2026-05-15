import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stylique.co.za"),
  title: {
    default: "Stylique | Pretoria Beauty Marketplace",
    template: "%s | Stylique",
  },
  description:
    "Join the waitlist for Stylique, a premium Pretoria-first beauty marketplace connecting customers with trusted beauty professionals.",
  keywords: [
    "Stylique",
    "Pretoria beauty marketplace",
    "beauty booking Pretoria",
    "salons Pretoria",
    "nail techs Pretoria",
    "makeup artists Pretoria",
    "hair stylists Pretoria",
    "beauty professionals South Africa",
  ],
  openGraph: {
    title: "Stylique | Pretoria Beauty Marketplace",
    description:
      "Join the waitlist for Stylique, a premium Pretoria-first beauty marketplace built for customers and beauty professionals.",
    url: "https://stylique.co.za",
    siteName: "Stylique",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stylique | Pretoria Beauty Marketplace",
    description:
      "Join the waitlist for Stylique, a premium Pretoria-first beauty marketplace launching Pretoria-first.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-ZA">
      <body>{children}</body>
    </html>
  );
}