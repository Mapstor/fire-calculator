import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, ArrowLeft, FolderOpen } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import {
  listCategories,
  getPostsByCategorySlug,
  getCategoryDescription,
  categoryToSlug,
  POSTS,
} from "@/data/posts";

export async function generateStaticParams() {
  return listCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const cat = listCategories().find((c) => c.slug === params.slug);
  if (!cat) {
    return { title: "Category not found" };
  }
  const url = `https://financialfirecalculators.com/blog/category/${cat.slug}`;
  const description = getCategoryDescription(cat.name);
  return {
    title: `${cat.name} — FIRE articles & guides`,
    description: `${description} ${cat.count} articles in this category.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${cat.name} — FIRE articles & guides`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${cat.name} — FIRE articles`,
      description,
    },
  };
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CategoryPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const cat = listCategories().find((c) => c.slug === params.slug);
  if (!cat) notFound();

  const posts = getPostsByCategorySlug(params.slug).sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const otherCategories = listCategories().filter((c) => c.slug !== params.slug);

  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "Blog", url: "https://financialfirecalculators.com/blog" },
      {
        name: cat.name,
        url: `https://financialfirecalculators.com/blog/category/${cat.slug}`,
      },
    ],
  };

  // CollectionPage / ItemList JSON-LD listing this category's posts
  const itemListJson = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.name} — FIRE articles`,
    description: getCategoryDescription(cat.name),
    url: `https://financialfirecalculators.com/blog/category/${cat.slug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((p, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://financialfirecalculators.com/blog/${p.slug}`,
        name: p.title,
      })),
    },
  };

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary-200 hover:text-white text-sm mb-4"
            >
              <ArrowLeft className="w-4 h-4" />
              All articles
            </Link>
            <div className="flex items-center gap-2 mb-3">
              <FolderOpen className="w-5 h-5 text-primary-200" />
              <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">
                Category
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {cat.name}
            </h1>
            <p className="text-base sm:text-lg text-primary-100 max-w-3xl leading-relaxed">
              {getCategoryDescription(cat.name)}
            </p>
            <p className="text-sm text-primary-200 mt-3">
              {cat.count} {cat.count === 1 ? "article" : "articles"}
            </p>
          </div>
        </section>

        {/* Posts grid */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-primary-300 transition-all"
              >
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-3 line-clamp-3">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 group-hover:gap-2 transition-all">
                  Read article
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* Other categories */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Browse other categories
          </h2>
          <div className="flex flex-wrap gap-2">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="text-sm bg-white border border-gray-200 hover:border-primary-300 hover:text-primary-700 rounded-full px-4 py-2 transition-colors"
              >
                {c.name}{" "}
                <span className="text-xs text-gray-500">({c.count})</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
