import type { Metadata } from "next";
import Link from "next/link";
import { Percent, ArrowRight, BookOpen } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import SavingsRateCalculator from "@/components/savings-rate/SavingsRateCalculator";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `Savings Rate Calculator ${CURRENT_YEAR} — Years to FIRE`,
  description: "Free savings rate calculator: see exactly how many years to FIRE based on your savings rate. Built on Mr. Money Mustache's 'shockingly simple math' — at any income, savings rate alone determines retirement age.",
  alternates: {
    canonical: "https://financialfirecalculators.com/savings-rate-calculator",
  },
  openGraph: {
    title: `Savings Rate Calculator ${CURRENT_YEAR} — Years to FIRE`,
    description: "Free calculator: see how your savings rate determines years to FIRE. Built on MMM's 'shockingly simple math'.",
    type: "website",
    url: "https://financialfirecalculators.com/savings-rate-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: `Savings Rate Calculator ${CURRENT_YEAR}`,
    description: "Free calculator: how your savings rate determines years to FIRE.",
  },
};

export default function SavingsRateCalculatorPage() {
  const calculatorData = {
    name: "Savings Rate Calculator",
    url: "https://financialfirecalculators.com/savings-rate-calculator",
    description:
      "Calculate years to FIRE based on your savings rate, using Mr. Money Mustache's 'shockingly simple math' framework.",
    features: [
      "Years-to-FIRE Projection",
      "Savings-Rate-First Math",
      "Adjustable Real Return",
      "MMM Reference Table",
    ],
  };

  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "Savings Rate Calculator", url: "https://financialfirecalculators.com/savings-rate-calculator" },
    ],
  };

  const faqData = {
    questions: [
      {
        question: "Why does savings rate matter more than income?",
        answer:
          "Mathematically, savings rate alone determines how many years until your portfolio covers your expenses. A doctor earning $400K saving 10% retires no faster than a teacher earning $50K saving 10% — because both have 9× their annual expenses to bridge with 1× annual savings. Income changes the lifestyle level, not the time to FIRE.",
      },
      {
        question: "What real return rate should I use?",
        answer:
          "We default to 7% real (inflation-adjusted), the long-term US stock market average from 1926 onward (10% nominal − 3% inflation). For a more conservative projection, try 5%, which matches Pfau-era safe-withdrawal-rate research and assumes lower forward returns due to current valuations.",
      },
      {
        question: "What's the formula?",
        answer:
          "Years to FIRE = ln((1 − s) · 25 · r / s + 1) / ln(1 + r), where s is savings rate (0-1) and r is real return rate. Notice income is not in the formula — only the savings rate and the assumed return matter.",
      },
    ],
  };

  return (
    <>
      <StructuredData type="calculator" data={calculatorData} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <StructuredData type="faq" data={faqData} />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-10 md:py-12">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center gap-2 mb-3">
              <Percent className="w-6 h-6" />
              <span className="text-primary-200 text-sm font-medium">Savings Rate Calculator</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              Years to FIRE — based on your savings rate
            </h1>
            <p className="text-base md:text-lg text-primary-100 max-w-2xl leading-relaxed">
              At any income, savings rate alone determines retirement age. This calculator implements Mr. Money Mustache&apos;s{" "}
              <a
                href="https://www.mrmoneymustache.com/2012/01/13/the-shockingly-simple-math-behind-early-retirement/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                &quot;shockingly simple math&quot;
              </a>{" "}
              with adjustable inputs.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <SavingsRateCalculator />
        </section>

        {/* Why-it-matters explainer */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Why savings rate is the master variable
            </h2>
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              Two people on different incomes who both save 50% of their take-home pay reach financial independence in roughly the same number of years — about 17 at a 5% real return. The reason: each year of expenses requires{" "}
              <strong>25 years&apos; worth</strong> of expenses invested to fund it. If you save half your income, every year of work funds <em>one</em> year of expenses plus <em>one</em> year of retirement, so you halve the work-years required.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Higher income lets you live more comfortably or save more <em>relative</em> to your spending — but only if your spending doesn&apos;t scale up at the same rate. The classic FIRE pitfall is letting expenses grow with income and never moving the savings-rate dial.
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/fire-number-calculator"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Find your FIRE number</p>
                <p className="text-xs text-gray-600">Enter expenses → portfolio target</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/4-percent-rule-calculator"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">4% Rule calculator</p>
                <p className="text-xs text-gray-600">Portfolio ↔ safe withdrawal</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/methodology"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Methodology
                </p>
                <p className="text-xs text-gray-600">Assumptions, formulas, sources</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Full FIRE Calculator</p>
                <p className="text-xs text-gray-600">All inputs, charts, Monte Carlo</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
