import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import { GLOSSARY, GLOSSARY_CATEGORIES } from "@/data/glossary";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `FIRE Glossary ${CURRENT_YEAR}: 30+ Financial Independence Terms Defined`,
  description: "Plain-English definitions of FIRE and personal-finance terminology: 4% rule, Trinity Study, Coast/Lean/Fat/Barista FIRE, Roth ladder, sequence-of-returns risk, and more.",
  alternates: {
    canonical: "https://financialfirecalculators.com/fire-glossary",
  },
  openGraph: {
    title: `FIRE Glossary ${CURRENT_YEAR}: 30+ Terms Defined`,
    description: "Plain-English definitions of FIRE and personal-finance terms.",
    type: "article",
    url: "https://financialfirecalculators.com/fire-glossary",
  },
  twitter: {
    card: "summary_large_image",
    title: `FIRE Glossary ${CURRENT_YEAR}`,
    description: "30+ FIRE and personal-finance terms defined.",
  },
};

export default function FireGlossaryPage() {
  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "FIRE Glossary", url: "https://financialfirecalculators.com/fire-glossary" },
    ],
  };

  // DefinedTermSet JSON-LD — each term is a featured-snippet candidate
  const termSetJson = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "FIRE Glossary",
    description: "Plain-English definitions of FIRE and personal-finance terminology.",
    hasDefinedTerm: GLOSSARY.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `https://financialfirecalculators.com/fire-glossary#${t.id}`,
      name: t.term,
      description: t.definition,
      inDefinedTermSet: "https://financialfirecalculators.com/fire-glossary",
      termCode: t.id,
    })),
  };

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termSetJson) }}
      />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary-200" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              FIRE Glossary
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Plain-English definitions for {GLOSSARY.length}+ FIRE and personal-finance terms — the same vocabulary used in our calculators and articles.
            </p>
          </div>
        </section>

        {/* Quick category nav */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <p className="text-sm font-semibold text-gray-900 mb-3">Jump to category:</p>
            <div className="flex flex-wrap gap-2">
              {GLOSSARY_CATEGORIES.map((cat) => (
                <a
                  key={cat}
                  href={`#cat-${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-primary-100 hover:text-primary-700 text-sm rounded-full transition-colors"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Glossary by category */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {GLOSSARY_CATEGORIES.map((cat) => {
            const terms = GLOSSARY.filter((t) => t.category === cat);
            if (terms.length === 0) return null;
            const catId = `cat-${cat.toLowerCase().replace(/\s+/g, "-").replace(/&/g, "and")}`;
            return (
              <div key={cat} id={catId} className="mb-12 scroll-mt-20">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {cat}
                </h2>
                <dl className="space-y-6">
                  {terms.map((t) => (
                    <div
                      key={t.id}
                      id={t.id}
                      className="scroll-mt-20 bg-white border border-gray-200 rounded-lg p-5"
                    >
                      <dt className="text-lg font-semibold text-gray-900 mb-2">
                        {t.term}
                      </dt>
                      <dd className="text-sm text-gray-700 leading-relaxed mb-2">
                        {t.definition}
                      </dd>
                      {t.example && (
                        <dd className="text-xs text-gray-600 leading-relaxed bg-gray-50 border-l-2 border-primary-300 pl-3 py-2 mt-2">
                          <span className="font-semibold">Example:</span> {t.example}
                        </dd>
                      )}
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </section>

        {/* Related */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-6 text-center">
            <h2 className="text-xl font-bold mb-3">Ready to put these terms into practice?</h2>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-5 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Browse all FIRE calculators
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
