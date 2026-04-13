import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-6 mt-10" style={{ color: "#0A1628" }}>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold mt-8 mb-4" style={{ color: "#0A1628" }}>
        {children}
      </h3>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[#0A1628]">{children}</strong>
    ),
    a: ({ href, children }) => {
      if (!href) return <a>{children}</a>;
      const isInternal = href.startsWith("/");
      if (isInternal) {
        return (
          <Link href={href} className="underline hover:text-[#C9A84C] font-semibold">
            {children}
          </Link>
        );
      }
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-[#C9A84C] font-semibold"
        >
          {children}
        </a>
      );
    },
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="w-full text-sm border-collapse">{children}</table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b-2" style={{ borderColor: "#C9A84C" }}>
        {children}
      </thead>
    ),
    th: ({ children }) => (
      <th className="text-left py-2 px-3 font-semibold text-[#0A1628]">{children}</th>
    ),
    td: ({ children }) => (
      <td className="py-2 px-3 border-b border-gray-100">{children}</td>
    ),
    blockquote: ({ children }) => (
      <blockquote
        className="my-6 p-4 rounded-lg"
        style={{ background: "#FDF8ED", borderLeft: "4px solid #C9A84C" }}
      >
        {children}
      </blockquote>
    ),
    hr: () => <hr className="my-8 border-gray-200" />,
    ul: ({ children }) => (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 space-y-2 text-gray-700">{children}</ol>
    ),
    li: ({ children }) => <li className="leading-relaxed">{children}</li>,
    p: ({ children }) => (
      <p className="text-gray-700 leading-relaxed">{children}</p>
    ),
    ...components,
  };
}
