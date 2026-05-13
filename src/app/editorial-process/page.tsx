import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, BookOpen, Shield, Search, GitBranch, AlertTriangle, Calendar, ArrowRight } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import { CURRENT_YEAR, LAST_REVIEWED } from "@/data/site-meta";
import { AUTHOR } from "@/data/author";

export const metadata: Metadata = {
  title: `Editorial Process — How We Research and Maintain FIRE Content`,
  description: "How financialfirecalculators.com researches, fact-checks, and updates its calculators and articles. Sources, methodology, and update cadence.",
  alternates: {
    canonical: "https://financialfirecalculators.com/editorial-process",
  },
  openGraph: {
    title: "Editorial Process — Financial FIRE Calculators",
    description: "How we research, fact-check, and update FIRE content. Sources, methodology, update cadence.",
    type: "article",
    url: "https://financialfirecalculators.com/editorial-process",
  },
};

const principles = [
  {
    Icon: Search,
    title: "Primary sources before opinions",
    body: "Numbers come from primary sources — IRS revenue procedures (HSA, 401(k), IRA limits), SSA tables (Social Security thresholds), peer-reviewed papers (Trinity Study, Pfau, Bengen), and Mr. Money Mustache for the canonical savings-rate-to-years-of-FIRE table. We name the source whenever a number appears.",
  },
  {
    Icon: GitBranch,
    title: "One source of truth per fact",
    body: "Contribution limits, current-year references, and post metadata live in single TypeScript data files (data/contribution-limits.ts, data/site-meta.ts, data/posts.ts). Every page reads from the same source — when the IRS publishes new numbers in January, one file changes and the entire site updates.",
  },
  {
    Icon: CheckCircle2,
    title: "Math is verified, not estimated",
    body: "Every published example is the exact output of the underlying formula, not a round-number guess. Worked examples on the home page use FV = PV·(1+r)ⁿ + PMT·((1+r)ⁿ−1)/r solved at 7% real return; outputs are rounded to the nearest dollar/year that the formula actually produces.",
  },
  {
    Icon: Shield,
    title: "Conservative defaults",
    body: "When choices arise — withdrawal rate, return assumption, market-cycle data — we default to the more conservative published value. Trinity 4% rule is the headline; modern 3.3-3.8% guidance is surfaced as an alternative, not buried.",
  },
];

const updateCadence = [
  {
    when: "Each January",
    what: "IRS contribution limits (HSA, 401(k), IRA, catch-up) updated in data/contribution-limits.ts; CURRENT_TAX_YEAR bumped; current-year references across the site refresh on next deploy.",
  },
  {
    when: "When new research lands",
    what: "Withdrawal-rate guidance and methodology pages updated when major papers publish — currently anchored to Trinity 1998, with Pfau (2010+), Bengen (1994 and updates), and Morningstar's annual SWR research as living references.",
  },
  {
    when: "Continuously",
    what: "Reader feedback flagging unclear language or wrong numbers triggers same-week updates. Email contact@financialfirecalculators.com to flag anything.",
  },
  {
    when: "Per article",
    what: "Each blog post displays a Last updated date pulled from the post registry. When we materially update a post we bump dateModified in data/posts.ts; structured data (BlogPosting) reflects the new date for search engines.",
  },
];

const limitations = [
  "We are not a Certified Financial Planner. This site is educational. The author is a software engineer who built these tools to model his own FIRE journey, not a registered investment advisor.",
  "All projections are deterministic compound-interest math. Real markets have sequence-of-returns risk, taxes, regulatory change, healthcare inflation, and personal life events that math cannot model.",
  "US-centric assumptions: 4% rule is based on US stock and bond returns; tax-advantaged accounts (401(k), IRA, HSA) are US-specific. International readers should treat the framework as transferable but the numbers as US.",
  "Monte Carlo simulation runs at 1,000 paths with normally-distributed returns. This is a useful range-of-outcomes estimate, not a prediction.",
];

export default function EditorialProcessPage() {
  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "Editorial Process", url: "https://financialfirecalculators.com/editorial-process" },
    ],
  };

  return (
    <>
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary-200" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Editorial Process
            </h1>
            <p className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              How we research, fact-check, and maintain the calculators and articles on this site.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Operating principles</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {principles.map((p) => {
              const Icon = p.Icon;
              return (
                <div
                  key={p.title}
                  className="bg-white border border-gray-200 rounded-xl p-5"
                >
                  <Icon className="w-6 h-6 text-primary-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{p.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Update cadence */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-primary-600" />
            Update cadence
          </h2>
          <p className="text-sm text-gray-600 mb-5">
            How often each kind of content gets reviewed and refreshed.
          </p>
          <div className="bg-white border border-gray-200 rounded-xl divide-y divide-gray-200">
            {updateCadence.map((item) => (
              <div key={item.when} className="p-5 flex flex-col sm:flex-row gap-3">
                <div className="font-semibold text-primary-700 sm:w-44 flex-shrink-0 text-sm">
                  {item.when}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Primary sources we cite</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <strong>Trinity Study (1998).</strong> Cooley, Hubbard & Walz at Trinity University in San Antonio, Texas. &quot;Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable.&quot; <em>AAII Journal</em>, February 1998. The empirical basis for the 4% rule.
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <strong>Bengen (1994).</strong> William P. Bengen, &quot;Determining Withdrawal Rates Using Historical Data,&quot; <em>Journal of Financial Planning</em>. The original 4% safe withdrawal rate paper.
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <strong>Mr. Money Mustache (2012).</strong>{" "}
              <a href="https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">
                &quot;The Shockingly Simple Math Behind Early Retirement&quot;
              </a>
              . The canonical savings-rate-to-years-of-FIRE table used in our reference content.
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <strong>IRS Revenue Procedures.</strong> Annual cost-of-living adjustments for HSA, 401(k), IRA contribution limits. We update <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded">data/contribution-limits.ts</code> each January.
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <strong>Wade Pfau, Morningstar SWR research.</strong> Modern updates to the safe withdrawal rate informing our 3.0%/3.5%/4.5% slider on the 4% rule calculator.
            </li>
            <li className="bg-white border border-gray-200 rounded-lg p-4">
              <strong>Shiller historical S&P 500 data.</strong> Used for nominal/real return assumptions and for the Monte Carlo simulator&apos;s historical-cycle anchor.
            </li>
          </ul>
        </section>

        {/* Limitations */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-amber-600" />
            Honest limitations
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            What this site is <em>not</em>, and where you should look beyond it for personalized advice.
          </p>
          <ul className="space-y-3">
            {limitations.map((l, i) => (
              <li
                key={i}
                className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-900 leading-relaxed"
              >
                {l}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-5">
            For personalized financial planning, find a fiduciary planner via{" "}
            <a href="https://www.napfa.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
              NAPFA
            </a>{" "}
            or the{" "}
            <a href="https://www.letsmakeaplan.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline font-medium">
              CFP Board
            </a>
            .
          </p>
        </section>

        {/* Author + last reviewed */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="bg-gray-100 border border-gray-200 rounded-xl p-5 text-sm text-gray-700">
            <p className="mb-2">
              <strong>Editorial owner:</strong>{" "}
              <Link href="/about#author" className="text-primary-600 hover:underline font-medium">
                {AUTHOR.name}
              </Link>
              {" — "}
              {AUTHOR.jobTitle}, {AUTHOR.location.city}, {AUTHOR.location.region}.
            </p>
            <p>
              <strong>This page last reviewed:</strong> {LAST_REVIEWED} ({CURRENT_YEAR} editorial cycle).
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            <Link
              href="/about#author"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">About the author</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/methodology"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">Calculator methodology</span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
