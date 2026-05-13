import { generateBlogMetadata } from "@/data/posts";
import ArticleSchema from "@/components/seo/ArticleSchema";
import AuthorByline from "@/components/blog/AuthorByline";

const SLUG = "social-security-fire" as const;

export const metadata = generateBlogMetadata(SLUG);

export default function PostLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleSchema slug={SLUG} />
      {children}
      <section className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <AuthorByline variant="full" slug={SLUG} />
        </div>
      </section>
    </>
  );
}
