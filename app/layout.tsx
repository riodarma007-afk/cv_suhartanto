import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Suhartanto — Order Management & Logistics Professional",
  description:
    "Portfolio profesional Suhartanto. Berpengalaman di Order Management, Logistics, dan Survey Data Processing. S1 Akuntansi STIE Pasundan.",
  keywords: [
    "Suhartanto",
    "Order Management",
    "Logistics",
    "Portfolio",
    "Bandung",
    "Staff Logistik",
  ],
  authors: [{ name: "Suhartanto" }],
  openGraph: {
    title: "Suhartanto — Order Management & Logistics Professional",
    description:
      "Portfolio profesional Suhartanto dengan 3 pengalaman kerja di bidang Order Management dan Logistics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="antialiased bg-[var(--bg)] text-[var(--text-main)] min-h-screen">
        {children}
      </body>
    </html>
  );
}
