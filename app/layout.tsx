import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dubaiexpat.co.uk"),
  title: "Dubai Expat | Your Complete Guide to Moving to Dubai",
  description:
    "Dubai Expat is a relocation guide for UK expats moving to Dubai and the UAE — covering visas, housing, schools, removals, banking, and community life.",
  verification: {
    google: "_GzRZEQg7lLjGNegr_mfBtbKyG3nLfaHNed1_9TsJwg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        {/* pt-14 offsets the fixed mobile top bar; md:pl-64 offsets the desktop sidebar */}
        <div className="pt-14 md:pt-0 md:pl-64">
          {children}
        </div>
      </body>
    </html>
  );
}
