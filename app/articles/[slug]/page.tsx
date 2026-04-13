import { notFound } from "next/navigation";
import { readFileSync, readdirSync } from "fs";
import { join } from "path";
import matter from "gray-matter";
import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import AffiliateLink from "@/components/AffiliateLink";
import ArticleFAQ from "@/components/ArticleFAQ";

const ARTICLES_DIR = join(process.cwd(), "content", "articles");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  AffiliateLink,
  ArticleFAQ,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const files = readdirSync(ARTICLES_DIR);
    return files
      .filter((f) => f.endsWith(".mdx"))
      .map((f) => ({ slug: f.replace(/\.mdx$/, "") }));
  } catch {
    return [];
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const filePath = join(ARTICLES_DIR, `${slug}.mdx`);
  try {
    const raw = readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      title: data.meta_title ?? data.title ?? slug,
      description: data.meta_description ?? "",
    };
  } catch {
    return { title: slug };
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const filePath = join(ARTICLES_DIR, `${slug}.mdx`);

  let raw: string;
  try {
    raw = readFileSync(filePath, "utf-8");
  } catch {
    notFound();
  }

  const { data: frontmatter, content } = matter(raw);

  return (
    <ArticleLayout frontmatter={frontmatter as Parameters<typeof ArticleLayout>[0]["frontmatter"]}>
      <MDXRemote source={content} components={components} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
    </ArticleLayout>
  );
}
