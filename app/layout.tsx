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
  metadataBase: new URL("https://stylique.co.za"),

  title: {
    default: "Stylique | Pretoria Beauty Marketplace",
    template: "%s | Stylique",
  },

  description:
    "Join Stylique early access. A Pretoria-first beauty marketplace for discovering trusted salons, nail techs, makeup artists, braiders, barbers and beauty professionals.",

  keywords: [
    "Stylique",
    "Pretoria beauty marketplace",
    "book beauty services Pretoria",
    "nail tech Pretoria",
    "makeup artist Pretoria",
    "braids Pretoria",
    "barbers Pretoria",
    "salons Pretoria",
    "beauty vendors Pretoria",
  ],

  applicationName: "Stylique",
  authors: [{ name: "Stylique" }],
  creator: "Stylique",
  publisher: "Stylique",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
  title: "Stylique | Pretoria Beauty Marketplace",
  description:
    "Join Stylique early access and discover trusted beauty professionals across Pretoria.",
  url: "https://stylique.co.za",
  siteName: "Stylique",
  type: "website",
  locale: "en_ZA",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Stylique",
    },
  ],
},

  twitter: {
    card: "summary_large_image",
    title: "Stylique | Pretoria Beauty Marketplace",
    description:
      "Join Stylique early access. Pretoria’s beauty marketplace is launching soon.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
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