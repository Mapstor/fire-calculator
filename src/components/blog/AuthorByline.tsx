import Link from "next/link";
import { AUTHOR } from "@/data/author";
import { getPost } from "@/data/posts";

interface Props {
  variant?: "compact" | "full";
  slug?: string;
  publishedAt?: string;
  updatedAt?: string;
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Author byline component.
 *  - variant="compact": one-line "By <name> · Published <date> · Last updated <date>"
 *  - variant="full": end-of-post bio block with dates, disclaimer, and link to /about#author
 *
 * Pass `slug` to auto-resolve dates from posts registry, or pass `publishedAt`/`updatedAt` directly.
 */
export default function AuthorByline({
  variant = "compact",
  slug,
  publishedAt,
  updatedAt,
}: Props) {
  // Resolve dates: explicit props take precedence, otherwise look up from posts registry
  let resolvedPublished = publishedAt;
  let resolvedUpdated = updatedAt;
  if (slug && (!resolvedPublished || !resolvedUpdated)) {
    try {
      const post = getPost(slug);
      resolvedPublished = resolvedPublished ?? post.publishedAt;
      resolvedUpdated = resolvedUpdated ?? post.updatedAt;
    } catch {
      // unknown slug — fall back to undefined
    }
  }

  if (variant === "compact") {
    return (
      <span className="text-sm text-gray-600">
        By{" "}
        <Link
          href="/about#author"
          className="font-medium text-gray-900 hover:text-primary-600"
        >
          {AUTHOR.name}
        </Link>
        {resolvedPublished && <> · Published {formatDate(resolvedPublished)}</>}
        {resolvedUpdated && resolvedUpdated !== resolvedPublished && (
          <> · Last updated {formatDate(resolvedUpdated)}</>
        )}
      </span>
    );
  }

  return (
    <aside className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-8 not-prose">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        About the Author
      </h3>
      <p className="text-sm text-gray-700 mb-3">{AUTHOR.fullBio}</p>
      <p className="text-xs text-gray-600 mb-4">{AUTHOR.disclaimer}</p>
      {(resolvedPublished || resolvedUpdated) && (
        <p className="text-xs text-gray-500 mb-3">
          {resolvedPublished && <>Published {formatDate(resolvedPublished)}</>}
          {resolvedUpdated && resolvedUpdated !== resolvedPublished && (
            <> · Last updated {formatDate(resolvedUpdated)}</>
          )}
          {" · Reviewed by "}
          <Link href="/about#author" className="font-medium text-gray-700 hover:text-gray-900">
            {AUTHOR.name}
          </Link>
        </p>
      )}
      <Link
        href="/about#author"
        className="text-sm font-medium text-primary-600 hover:text-primary-700"
      >
        Read more on the About page →
      </Link>
    </aside>
  );
}
