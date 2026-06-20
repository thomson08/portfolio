import type { Metadata } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Thomas Ninh — Product Designer & AI Builder",
  description:
    "I design and ship AI-powered product experiences end to end. Selected work: Round-ing, Claire, SpotIt.",
  metadataBase: new URL("https://thomasninh.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Thomas Ninh — Product Designer & AI Builder",
    description:
      "AI-powered products, designed in Figma and shipped to production end to end.",
    url: "https://thomasninh.com",
    siteName: "Thomas Ninh",
    locale: "en_US",
    type: "website",
    // og:image tags are generated automatically from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Ninh — Product Designer & AI Builder",
    description:
      "AI-powered products, designed in Figma and shipped to production end to end.",
    // twitter:image tags are generated automatically from app/twitter-image.tsx
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
