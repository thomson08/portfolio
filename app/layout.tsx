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
  openGraph: {
    title: "Thomas Ninh — Product Designer & AI Builder",
    description: "I design and ship AI-powered product experiences end to end.",
    type: "website",
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
