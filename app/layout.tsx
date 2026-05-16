import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Stylique | Pretoria Beauty Marketplace",
  description:
    "Stylique is a Pretoria-first beauty marketplace helping customers discover trusted salons, nail techs, makeup artists, braiders, barbers and beauty professionals.",

  keywords: [
    "Stylique",
    "beauty marketplace Pretoria",
    "book beauty services",
    "nail tech Pretoria",
    "makeup artist Pretoria",
    "braids Pretoria",
    "barbers Pretoria",
    "salons Pretoria",
  ],

  metadataBase: new URL("https://stylique.co.za"),

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Stylique | Pretoria Beauty Marketplace",
    description:
      "Join Stylique early access. Discover trusted beauty professionals across Pretoria.",
    type: "website",
    locale: "en_ZA",
    siteName: "Stylique",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Stylique",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Stylique | Pretoria Beauty Marketplace",
    description:
      "Join Stylique early access. Pretoria’s beauty marketplace is launching soon.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}