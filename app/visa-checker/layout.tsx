import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Visa Eligibility Tool | Dubai Expat",
  description:
    "Find out which UAE visa you likely qualify for — Golden, Green, Freelance, Employment or Retirement. Quick 8-question tool for UK and US expats.",
};

export default function VisaCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
