import type { Metadata } from "next";
import Link from "next/link";
import { Wallet, ArrowRight, BookOpen } from "lucide-react";
import StructuredData from "@/components/seo/StructuredData";
import FourPercentRuleCalculator from "@/components/four-percent-rule/FourPercentRuleCalculator";
import { CURRENT_YEAR } from "@/data/site-meta";

export const metadata: Metadata = {
  title: `4% Rule Calculator ${CURRENT_YEAR} — Trinity Study Withdrawal Calculator`,
  description: "Free 4% rule calculator. Convert annual expenses to portfolio needed (or portfolio to safe withdrawal). Adjustable SWR from 3.0%–5.0% with Trinity Study explainer.",
  alternates: {
    canonical: "https://financialfirecalculators.com/4-percent-rule-calculator",
  },
  openGraph: {
    title: `4% Rule Calculator ${CURRENT_YEAR} — Trinity Study Withdrawal Calculator`,
    description: "Free 4% rule calculator: convert annual expenses to portfolio target (or vice versa). Toggle SWR from 3% to 5%.",
    type: "website",
    url: "https://financialfirecalculators.com/4-percent-rule-calculator",
  },
  twitter: {
    card: "summary_large_image",
    title: `4% Rule Calculator ${CURRENT_YEAR}`,
    description: "Free 4% rule calculator with adjustable SWR — Trinity Study based.",
  },
};

export default function FourPercentRuleCalculatorPage() {
  const calculatorData = {
    name: "4% Rule Calculator",
    url: "https://financialfirecalculators.com/4-percent-rule-calculator",
    description:
      "Convert between annual expenses and portfolio size using the safe withdrawal rate framework from the Trinity Study.",
    features: [
      "Annual Expenses → Portfolio Needed",
      "Portfolio → Safe Annual Withdrawal",
      "3.0%–5.0% SWR Comparison",
      "Trinity Study Background",
    ],
  };

  const breadcrumbData = {
    items: [
      { name: "Home", url: "https://financialfirecalculators.com" },
      { name: "4% Rule Calculator", url: "https://financialfirecalculators.com/4-percent-rule-calculator" },
    ],
  };

  const faqData = {
    questions: [
      {
        question: "What is the 4% rule?",
        answer:
          "The 4% rule states that a retiree can safely withdraw 4% of their initial portfolio in year one, then adjust that dollar amount for inflation each subsequent year, with a 95%+ historical probability of the portfolio lasting 30+ years using a stock-heavy mix.",
      },
      {
        question: "Where does the 4% rule come from?",
        answer:
          "The 4% rule originates from the 1998 Trinity Study by Philip L. Cooley, Carl M. Hubbard, and Daniel T. Walz — finance professors at Trinity University in San Antonio, Texas. It was published in the February 1998 AAII Journal and tested fixed withdrawal rates against historical US stock and bond returns from 1926 onward.",
      },
      {
        question: "Should I use 4% or something more conservative?",
        answer:
          "Modern research by Wade Pfau and others argues that current high market valuations may justify a lower SWR — typically 3.3% to 3.8%. Conversely, having flexibility to cut spending during bear markets (dynamic withdrawal) lets some retirees safely use 4.5%+. Use the SWR slider to see how the assumption changes your numbers.",
      },
      {
        question: "Does the 4% rule apply to early retirement?",
        answer:
          "The Trinity Study tested 30-year retirements. For a 50+ year early retirement, the math is more demanding. Common adjustments: lower the SWR to 3.5%, plan for sequence-of-returns risk in the first decade, and build flexibility into spending. The calculator's 3.0% and 3.5% presets are designed for early retirees with longer horizons.",
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
              <Wallet className="w-6 h-6" />
              <span className="text-primary-200 text-sm font-medium">4% Rule Calculator</span>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
              The 4% Rule, calculated both directions
            </h1>
            <p className="text-base md:text-lg text-primary-100 max-w-2xl leading-relaxed">
              Enter your retirement expenses to find the portfolio you need — or enter your portfolio to see what you can safely withdraw. Toggle between 3.0% and 5.0% withdrawal rates to see how the assumption changes everything.
            </p>
          </div>
        </section>

        {/* Calculator */}
        <section className="max-w-4xl mx-auto px-4 py-8">
          <FourPercentRuleCalculator />
        </section>

        {/* Trinity Study explainer */}
        <section className="max-w-4xl mx-auto px-4 pb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              The Trinity Study, in one paragraph
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              The Trinity Study (1998) is the common name for &quot;Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable,&quot; published in the <em>AAII Journal</em> by Philip L. Cooley, Carl M. Hubbard, and Daniel T. Walz — three finance professors at Trinity University in San Antonio, Texas. The study tested fixed-percentage withdrawal rates against historical US stock and bond returns from 1926 onward. Its central finding: a 4% initial withdrawal, adjusted annually for inflation, survived a 30-year retirement in 95%+ of historical periods when the portfolio held a stock-heavy mix. That single number became the &quot;4% rule&quot; that anchors most modern FIRE math — including this calculator.
            </p>
            <h3 className="text-base font-semibold text-gray-900 mb-2 mt-5">Why the SWR slider matters</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Modern research (Pfau 2020, Morningstar 2023+) argues forward-looking real returns are likely lower than the historical 1926-1998 average. That has pushed many practitioners toward a 3.3%-3.8% safe withdrawal rate for new retirees, especially those planning 40+ year retirements. On the other hand, retirees willing to flex spending downward in bear markets (dynamic withdrawal) historically support 4.5%+ safely. There is no single &quot;right&quot; SWR — the slider above lets you see the trade-off directly.
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
                <p className="text-xs text-gray-600">Quick expenses → portfolio target</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/savings-rate-calculator"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Years to FIRE by savings rate</p>
                <p className="text-xs text-gray-600">MMM&apos;s &quot;shockingly simple math&quot;</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/blog/fire-withdrawal-strategies"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Beyond the 4% rule
                </p>
                <p className="text-xs text-gray-600">Dynamic strategies, guardrails</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/methodology"
              className="group flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-primary-300 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900 text-sm">Full methodology</p>
                <p className="text-xs text-gray-600">Assumptions, formulas, sources</p>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
