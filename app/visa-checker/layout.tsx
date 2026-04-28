import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "UAE Visa Eligibility Tool",
  description:
    "Find out which UAE visa you likely qualify for — Golden, Green, Freelance, Employment or Retirement. Quick 8-question tool for UK expats.",
  path: "/visa-checker",
  type: "website",
});

export default function VisaCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
