import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Promenade Living | Premium Interiors, Kitchens & Wardrobes",
  description:
    "Promenade Living creates thoughtful interiors and exteriors for Indian homes, including custom wardrobes, modular kitchens, false ceilings and outdoor living spaces.",
  metadataBase: new URL("https://promenadeliving.in"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Promenade Living | Premium Interiors, Kitchens & Wardrobes",
    description:
      "Thoughtful interiors and exteriors for Indian homes, shaped around the way you live.",
    url: "https://promenadeliving.in",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#f7f1ea] text-[#201b18]">{children}</body>
    </html>
  );
}
