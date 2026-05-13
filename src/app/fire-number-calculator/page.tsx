import type { Metadata } from "next";
import Link from "next/link";
import { Target, ArrowRight, BookOpen } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import FireNumberCalculator from "@/components/fire-number/FireNumberCalculator";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `FIRE Number Calculator ${CURRENT_YEAR} — How Much You Need to Retire`,
  description: "Free FIRE number calculator: enter your monthly expenses and instantly see your retirement target. Compare against Lean FIRE, Traditional FIRE, and Fat FIRE benchmarks.",
  alternates: {
    canonical: "https://financialfirecalculators.com/fire-number-calculator",
  },
  openGraph: {
    title: `FIRE Number Calculator ${CURRENT_YEAR} — How Much You Need to Retire`,
    description: "Free FIRE number calculator: monthly expenses → portfolio target, with Lean/Traditional/Fat FIRE comparison.",
    type: "website",
    url: "https://financialfirecalculators.com/fire-number-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: `FIRE Number Calculator ${CURRENT_YEAR}`,
    description: "Free FIRE number calculator: expenses → portfolio target.",
  },
};

export default function FireNumberCalculatorPage() {
  const calculatorData = {
    name: "FIRE Number Calculator",
    url: "https://financialfirecalculators.com/fire-number-calculator",
    description:
      "Calculate your FIRE number — the invested portfolio total needed to retire — from your monthly expenses, using the 4% rule.",
    features: [
      "FIRE Number Calculation",
      "Monthly → Annual → Portfolio Target",
      "Lean / Traditional / Fat FIRE Comparison",
      "Live-Update Slider",
    ],
  };

  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "FIRE Number Calculator", url: "https://financialfirecalculators.com/fire-number-calculator" },
    ],
  };

  const faqData = {
    questions: [
      {
        question: "What is a FIRE number?",
        answer:
          "Your FIRE number is the total invested portfolio you need to retire and live off withdrawals indefinitely. The standard formula is annual expenses × 25, which is the inverse of the 4% safe withdrawal rate from the Trinity Study.",
      },
      {
        question: "How is the FIRE number calculated?",
        answer:
          "FIRE Number = Annual Expenses × 25. So if you spend $50,000/year, your FIRE number is $1,250,000. The multiplier 25 comes from the inverse of 0.04 (the 4% safe withdrawal rate).",
      },
      {
        question: "Why × 25 specifically?",
        answer:
          "Because 1 ÷ 0.04 = 25. The 1998 Trinity Study showed that withdrawing 4% of an initial portfolio (adjusted yearly for inflation) had a 95%+ historical success rate over 30-year retirements. To support a given annual withdrawal at a 4% rate, you need 25 times that withdrawal invested.",
      },
      {
        question: "What expenses should I include?",
        answer:
          "Include all expected retirement living costs: housing (rent/mortgage, taxes, maintenance, insurance), food, transportation, healthcare (this matters a lot pre-Medicare), insurance, utilities, personal/discretionary spending, travel, and a buffer for irregular expenses. Exclude: work commute, retirement savings contributions (no longer needed), mortgage if it'll be paid off.",
      },
      {
        question: "Should I use the actual 4% or something more conservative?",
        answer:
          "For a 30-year retirement, 4% has strong historical support. For 40+ year early retirements, many practitioners use 3.3%-3.8%, which means a multiplier of 26-30 instead of 25. See our 4% Rule Calculator to compare different SWRs.",
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
              <Target className="w-6 h-6" />
              <span className="text-primary-200 text-sm font-medium">FIRE Number Calculator</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              How much do you need to retire?
            </h1>
            <p className="text-base md:text-lg text-primary-100 max-w-2xl leading-relaxed">
              Enter your monthly expenses to see your FIRE number — the invested portfolio you need to retire and live off withdrawals indefinitely. Compares your number against Lean, Traditional, and Fat FIRE benchmarks.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <FireNumberCalculator />
        </section>

        {/* Where the × 25 comes from */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Where does the × 25 come from?
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The multiplier comes directly from the 4% safe withdrawal rate established by the 1998 Trinity Study (Cooley, Hubbard & Walz at Trinity University in San Antonio, Texas). If you can safely withdraw 4% of your portfolio per year, then you need <strong>1 ÷ 0.04 = 25</strong> times your annual expenses invested. So someone who spends $40,000/year needs $1,000,000 invested. Someone who spends $80,000/year needs $2,000,000.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              For 40+ year early retirements, many practitioners use 3.3%–3.8% instead of 4%, which translates to a multiplier of roughly 26–30. Try our{" "}
              <Link href="/4-percent-rule-calculator" className="text-primary-600 hover:underline font-medium">
                4% Rule Calculator
              </Link>{" "}
              to see how each SWR changes the target.
            </p>
          </div>
        </section>

        {/* Cross-links */}
        <section className="max-w-4xl mx-auto px-4 pb-12">
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/savings-rate-calculator"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">How long until you reach it?</p>
                <p className="text-xs text-gray-600">Years to FIRE by savings rate</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/4-percent-rule-calculator"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Adjust the SWR</p>
                <p className="text-xs text-gray-600">3.0%–5.0% withdrawal-rate impact</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/fire-comparison"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Compare FIRE flavors
                </p>
                <p className="text-xs text-gray-600">Lean, Coast, Barista, Fat, Couples</p>
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
