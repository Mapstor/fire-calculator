import { getPost } from "@/data/posts";
import { AUTHOR } from "@/data/author";
import { SITE_URL, SITE_NAME } from "@/data/site-meta";

interface Props {
  slug: string;
}

/**
 * Emits BlogPosting + Person JSON-LD for a single blog post.
 * Place once per post in the server page.tsx.
 */
export default function ArticleSchema({ slug }: Props) {
  const post = getPost(slug);
  const url = `${SITE_URL}/blog/${slug}`;

  const json = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      url: AUTHOR.url,
      jobTitle: AUTHOR.jobTitle,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    inLanguage: "en-US",
    articleSection: post.category,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
