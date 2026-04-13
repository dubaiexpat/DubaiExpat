interface AffiliateLinkProps {
  href: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export default function AffiliateLink({ href, label, children, className }: AffiliateLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer sponsored"
      aria-label={label}
      className={className ?? "underline hover:text-[#C9A84C] font-semibold"}
    >
      {children}
    </a>
  );
}
