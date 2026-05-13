import type { Metadata } from "next";
import Link from "next/link";
import { Target, ArrowRight, BookOpen } from "lucide-react";
import Calculator from "@/components/calculator/Calculator";
import StructuredData from "@/components/seo/StructuredData";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `Financial Independence Calculator ${CURRENT_YEAR}: Reach FI`,
  description: "Free financial independence calculator. Find the portfolio that lets you stop trading time for money — even if you don't actually want to retire. Real math, not motivational fluff.",
  alternates: {
    canonical: "https://financialfirecalculators.com/financial-independence-calculator",
  },
  openGraph: {
    title: `Financial Independence Calculator ${CURRENT_YEAR}: Reach FI`,
    description: "Free FI calculator. Find the portfolio that frees you from needing a paycheck.",
    type: "website",
    url: "https://financialfirecalculators.com/financial-independence-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: `Financial Independence Calculator ${CURRENT_YEAR}`,
    description: "Free FI calculator with year-by-year projection.",
  },
};

export default function FinancialIndependenceCalculatorPage() {
  const calculatorData = {
    name: "Financial Independence Calculator",
    url: "https://financialfirecalculators.com/financial-independence-calculator",
    description:
      "Calculate when you reach financial independence — the milestone where investment income covers your expenses, regardless of whether you choose to retire.",
    features: [
      "FI Date Projection",
      "FI Number (25× Expenses)",
      "Year-by-Year Portfolio Growth",
      "Monte Carlo Probability Range",
      "Coast FI Milestone Tracking",
    ],
  };

  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "Financial Independence Calculator", url: "https://financialfirecalculators.com/financial-independence-calculator" },
    ],
  };

  const faqData = {
    questions: [
      {
        question: "What is financial independence?",
        answer:
          "Financial independence (FI) is the state where your investment income covers your annual expenses indefinitely. Once at FI, work becomes optional — you continue or stop based on whether you enjoy it, not because you need a paycheck. The standard FI threshold is 25× your annual expenses invested, derived from the 4% safe withdrawal rate.",
      },
      {
        question: "Is FI different from FIRE?",
        answer:
          "FIRE (Financial Independence, Retire Early) is FI plus the choice to actually retire. Many people pursue FI without ever planning to retire — they want the freedom of not needing the income, not the absence of work. FI without RE is sometimes called &quot;work-optional&quot; or &quot;FI with continued employment.&quot; The math is identical; only the lifestyle choice differs.",
      },
      {
        question: "How is FI calculated?",
        answer:
          "FI Number = Annual Expenses × 25. So if you spend $50,000/year, you reach FI at $1,250,000 invested. The calculator above projects when your portfolio crosses that threshold based on your current savings, contribution rate, and assumed real return (default 7%). For 40+ year retirement horizons, conservative practitioners use 28-30× expenses instead of 25× for additional safety margin.",
      },
      {
        question: "What's the difference between Coast FI and full FI?",
        answer:
          "Coast FI is the milestone where your invested portfolio, with no further contributions, will compound to your full FI number by traditional retirement age (65). It's a much smaller number than full FI — at age 30 with a 5% real return and a $1.25M FI target, the Coast FI number is about $289,000. Once at Coast FI, you can work freely without needing to save further.",
      },
      {
        question: "How long does it take to reach FI?",
        answer:
          "Time-to-FI depends almost entirely on your savings rate. At a 5% real return: 10% savings rate takes ~51 years; 25% takes ~32; 50% takes ~17; 75% takes ~7. Your income matters less than the percentage you save — at the same savings rate, a $50K and a $500K income reach FI in the same number of years (only the lifestyle level differs).",
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
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-6 h-6" />
              <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">
                Financial Independence Calculator
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              When can you stop needing a paycheck?
            </h1>
            <p className="text-base sm:text-lg text-primary-100 max-w-3xl leading-relaxed">
              Financial independence isn&apos;t about retiring — it&apos;s about not <em>needing</em> to work.
              This calculator finds your FI number (25× annual expenses) and projects when your portfolio will
              reach it, based on your current savings, contributions, and expected returns.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Calculator />
        </section>

        {/* FI vs FIRE explainer */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">FI vs FIRE — what&apos;s the difference?</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              FIRE = Financial Independence + Retire Early. Most online conversation focuses on the
              retirement part, but plenty of people pursue FI without ever planning to retire. Some
              examples:
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-4">
              <li>
                <strong>Independent professionals.</strong> Reaching FI lets a doctor, lawyer, or engineer
                turn down work they don&apos;t want. They keep practicing on their own terms.
              </li>
              <li>
                <strong>Career switchers.</strong> FI funds a switch to lower-paid but more meaningful work
                — teaching, nonprofits, creative work — without financial stress.
              </li>
              <li>
                <strong>Entrepreneurs.</strong> Reaching FI before launching a business eliminates the
                pressure to take an offer too early.
              </li>
              <li>
                <strong>Caregivers.</strong> FI lets you take years off to care for family without it
                derailing the rest of your life.
              </li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              The math is identical. The difference is what you do after you hit your number.
            </p>
          </div>
        </section>

        {/* Coast FI feature */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl border border-emerald-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Don&apos;t want full FI yet? Try Coast FI</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Coast FI is the milestone where your invested portfolio — left untouched, no further
              contributions — will compound to your full FI number by traditional retirement age. It&apos;s a
              much smaller number than full FI, and it lets you stop saving aggressively while still
              reaching FI by 65.
            </p>
            <Link
              href="/coast-fire-calculator"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary-600 hover:underline"
            >
              Calculate your Coast FI number
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Cross-links */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Related calculators
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/early-retirement-calculator"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Early Retirement Calculator</p>
                <p className="text-xs text-gray-600">Same engine, framed around retirement age</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/fire-number-calculator"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">FIRE Number Calculator</p>
                <p className="text-xs text-gray-600">Quick: monthly expenses → portfolio target</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/savings-rate-calculator"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Savings Rate Calculator</p>
                <p className="text-xs text-gray-600">Years to FI by savings rate</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/fire-glossary"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> FIRE glossary
                </p>
                <p className="text-xs text-gray-600">Definitions for FI, RE, SWR, MAGI, and more</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
