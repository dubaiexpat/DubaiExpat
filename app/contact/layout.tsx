import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import SchemaJsonLd from "@/components/SchemaJsonLd";

const TITLE = "Contact Dubai Expat";
const DESCRIPTION = "Get in touch with the Dubai Expat team — feedback, partnership enquiries, content corrections, or just to say hello.";
const URL_ABS = "https://www.dubaiexpat.co.uk/contact";

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: "/contact",
  type: "website",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SchemaJsonLd
        type="WebPage"
        title={TITLE}
        description={DESCRIPTION}
        url={URL_ABS}
        breadcrumbs={[
          { name: "Home", url: "https://www.dubaiexpat.co.uk/" },
          { name: "Contact", url: URL_ABS },
        ]}
      />
      {children}
    </>
  );
}
