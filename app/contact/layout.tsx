import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact Dubai Expat",
  description:
    "Get in touch with the Dubai Expat team — feedback, partnership enquiries, content corrections, or just to say hello.",
  path: "/contact",
  type: "website",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
