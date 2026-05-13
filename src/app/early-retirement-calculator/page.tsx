import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, Calendar, BookOpen } from "lucide-react";
import Calculator from "@/components/calculator/Calculator";
import StructuredData from "@/components/seo/StructuredData";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `Early Retirement Calculator ${CURRENT_YEAR}: When Can You Retire?`,
  description: "Free early retirement calculator. Find your retirement age and the portfolio you need, with a year-by-year projection and Monte Carlo simulation.",
  alternates: {
    canonical: "https://financialfirecalculators.com/early-retirement-calculator",
  },
  openGraph: {
    title: `Early Retirement Calculator ${CURRENT_YEAR}: When Can You Retire?`,
    description: "Free early retirement calculator with year-by-year projection and Monte Carlo simulation.",
    type: "website",
    url: "https://financialfirecalculators.com/early-retirement-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: `Early Retirement Calculator ${CURRENT_YEAR}`,
    description: "Free early retirement calculator with year-by-year projection.",
  },
};

export default function EarlyRetirementCalculatorPage() {
  const calculatorData = {
    name: "Early Retirement Calculator",
    url: "https://financialfirecalculators.com/early-retirement-calculator",
    description:
      "Calculate when you can retire early based on your current age, income, expenses, savings, and chosen retirement age.",
    features: [
      "Retirement Age Projection",
      "Required Portfolio Size",
      "Year-by-Year Net Worth",
      "Monte Carlo Range of Outcomes",
      "Multiple Currency Support",
    ],
  };

  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "Early Retirement Calculator", url: "https://financialfirecalculators.com/early-retirement-calculator" },
    ],
  };

  const faqData = {
    questions: [
      {
        question: "What is an early retirement calculator?",
        answer:
          "An early retirement calculator estimates the age at which you can leave full-time work based on your savings, income, expenses, and expected investment returns. It works by projecting how long it will take your portfolio to grow to a level that supports your annual spending indefinitely — typically 25× your annual expenses, derived from the 4% safe withdrawal rate.",
      },
      {
        question: "How early can I realistically retire?",
        answer:
          "Most people who can save 25-40% of their income can retire 5-15 years earlier than the traditional age of 65. At a 50% savings rate, retirement at age 40-45 is mathematically possible for someone starting in their early 20s. The dominant variable is your savings rate — at any income, savings rate alone determines time-to-retirement.",
      },
      {
        question: "What if I'm starting late?",
        answer:
          "Starting in your 40s or 50s, full early retirement at 50 is mathematically tough but achievable. More common alternatives: Coast FIRE (save aggressively until 50, then let compound growth carry you to 65) or Barista FIRE (part-time work covers expenses while investments grow). Both let you stop full-time corporate work much earlier than traditional retirement.",
      },
      {
        question: "How much money do I need to retire early?",
        answer:
          "The simple answer is 25 times your annual expenses. So if you need $50,000/year to live, you need $1,250,000 invested. For longer retirements (40+ years), use 28-30× expenses for additional safety margin. Use our FIRE Number Calculator to instantly see your specific target.",
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
              <Clock className="w-6 h-6" />
              <span className="text-primary-200 text-sm font-medium uppercase tracking-wider">
                Early Retirement Calculator
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              When can you retire early?
            </h1>
            <p className="text-base sm:text-lg text-primary-100 max-w-3xl leading-relaxed">
              Enter your current age, income, expenses, and savings to see exactly when you can leave full-time work — with a year-by-year portfolio projection, Monte Carlo simulation, and milestone tracking.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Calculator />
        </section>

        {/* Early-retirement-specific framing */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How early retirement math actually works</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Early retirement isn&apos;t a feeling — it&apos;s a math problem with three inputs:
            </p>
            <ol className="text-sm text-gray-700 space-y-2 mb-4">
              <li>
                <strong>1. Your annual expenses.</strong> Multiply by 25 to get the portfolio you need (the 4%
                rule). $48K in expenses → $1.2M. $80K → $2M. This is your &quot;number.&quot;
              </li>
              <li>
                <strong>2. Your savings rate.</strong> The percentage of your take-home pay you invest. This is
                the dominant variable in time-to-retirement — at any income, savings rate alone determines
                when you retire. See <Link href="/savings-rate-calculator" className="text-primary-600 hover:underline">savings rate calculator</Link>.
              </li>
              <li>
                <strong>3. Your starting balance.</strong> What you already have invested compounds at the same
                rate as future contributions, but with a head start. $50K invested today is worth $200K in 20
                years at 7% real — without you adding a dollar.
              </li>
            </ol>
            <p className="text-sm text-gray-700 leading-relaxed">
              The calculator above runs the full math: starting balance compounds, contributions add yearly,
              both grow at your assumed real return, and the projection ends at the year your portfolio first
              equals 25× your annual expenses. That year is your earliest retirement age.
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <h2 className="text-base font-semibold text-gray-900 mb-3">
            Different framings, same math
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/financial-independence-calculator"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Financial Independence Calculator</p>
                <p className="text-xs text-gray-600">Same engine, framed around independence (FI without RE)</p>
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
                <p className="text-xs text-gray-600">Years to retirement based on savings rate alone</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/fire-calculator-by-age"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> Strategy by age
                </p>
                <p className="text-xs text-gray-600">Different game plans for 20s, 30s, 40s, 50s</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog/retire-by-50"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Can you retire by 50?
                </p>
                <p className="text-xs text-gray-600">Math + scenarios at different start ages</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog/retire-by-40"
              className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Can you retire by 40?
                </p>
                <p className="text-xs text-gray-600">The aggressive path — what it requires</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
