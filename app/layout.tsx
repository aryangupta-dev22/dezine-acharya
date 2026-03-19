import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Playfair_Display,
  DM_Sans,
} from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dezineacharya.com"),

  title:
    "Dezine Acharya - Design Education Redefined | NID, NIFT, UCEED & NATA",

  description:
    "Dezine Acharya mentors design aspirants for NID, NIFT, UCEED & NATA through creative intuition, structured guidance and reflective mentorship. Based in Dwarka, Delhi.",

  keywords: [
    "NID coaching",
    "NIFT preparation",
    "UCEED coaching",
    "NATA coaching",
    "design coaching Delhi",
    "Dezine Acharya",
  ],

  authors: [{ name: "Amit Singh", url: "https://www.dezineacharya.com" }],
  creator: "Dezine Acharya",
  publisher: "Dezine Acharya",

  alternates: {
    canonical: "/",
  },

  // ✅ OPEN GRAPH (WhatsApp / Facebook)
  openGraph: {
    title: "Dezine Acharya - Where Design is Discovered, Not Drilled",
    description:
      "Expert mentorship for NID, NIFT, UCEED & NATA. A human-centered, experience-driven learning model by NID alumnus Amit Singh.",

    url: "https://www.dezineacharya.com",
    siteName: "Dezine Acharya",

    images: [
      {
        url: "https://www.dezineacharya.com/images/logo-new.webp", // ✅ FULL URL FIX
        width: 1200,
        height: 630,
        alt: "Dezine Acharya",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  // ✅ TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Dezine Acharya - Design Education Redefined",
    description:
      "Mentoring aspirants for NID, NIFT, UCEED & NATA through creative intuition and mentorship.",
    images: ["https://www.dezineacharya.com/images/logo-new.webp"], // ✅ FULL URL
  },

  // ✅ FAVICONS FIXED
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-icon.png",
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
    <html lang="en">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
