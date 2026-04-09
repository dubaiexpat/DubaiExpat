import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import CookieConsent from "@/components/CookieConsent";

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
  other: {
    "msvalidate.01": "440E4F10AB276DE366BC65DDF98B51EA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msvalidate.01" content="440E4F10AB276DE366BC65DDF98B51EA" />
        <meta name="impact-site-verification" content="adde694d-006b-4488-8e06-6d77e86a02dc" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Q93X7TD1X2"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q93X7TD1X2');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Sidebar />
        {/* pt-14 offsets the fixed mobile top bar; md:pl-64 offsets the desktop sidebar */}
        <div className="pt-14 md:pt-0 md:pl-64">
          {children}
        </div>
        <CookieConsent />
      </body>
    </html>
  );
}
