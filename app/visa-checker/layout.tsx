import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import SchemaJsonLd from "@/components/SchemaJsonLd";

const TITLE = "UAE Visa Eligibility Tool";
const DESCRIPTION = "Find out which UAE visa you likely qualify for — Golden, Green, Freelance, Employment or Retirement. Quick 8-question tool for UK expats.";
const URL_ABS = "https://www.dubaiexpat.co.uk/visa-checker";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/visa-checker",
  type: "website",
});

export default function VisaCheckerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SchemaJsonLd
        type="WebPage"
        title={TITLE}
        description={DESCRIPTION}
        url={URL_ABS}
        breadcrumbs={[
          { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
          { name: "UAE Visa Eligibility Tool", url: URL_ABS },
        ]}
      />
      {children}
    </>
  );
}
