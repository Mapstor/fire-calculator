import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { BookOpen, Lightbulb, TrendingUp, Calculator, DollarSign, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Complete FIRE Guide: Foundations of Financial Independence",
  description: "Foundational FIRE guide: what it is, the 4% rule, the Trinity Study, FIRE number math, the five FIRE types, and common myths. Pairs with our deep-dive blog articles.",
  openGraph: {
    title: "Complete FIRE Guide: Foundations of Financial Independence",
    description: "Foundational guide to FIRE — what it is, the 4% rule, the Trinity Study, and how to calculate your FIRE number.",
    type: "article",
    url: "https://financialfirecalculators.com/complete-fire-guide",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Complete FIRE Guide — Foundations"
      }
    ]
  },
  alternates: {
    canonical: "https://financialfirecalculators.com/complete-fire-guide"
  }
};

export default function CompleteFireGuidePage() {
  const guideFAQ = {
    questions: [
      {
        question: "What is the best way to start FIRE?",
        answer: "Start FIRE by calculating your current expenses, determining your FIRE number (25x annual expenses), and immediately beginning to save at least 20% of your income. Focus on increasing income and decreasing expenses while investing in low-cost index funds."
      },
      {
        question: "How much money do you need for FIRE?",
        answer: "Your FIRE number depends on your annual expenses. Using the 4% rule, multiply your annual expenses by 25. For example: $40K expenses = $1M needed, $60K expenses = $1.5M needed, $80K expenses = $2M needed."
      },
      {
        question: "What is the 4% rule in FIRE?",
        answer: "The 4% rule states you can safely withdraw 4% of your investment portfolio annually without running out of money. Based on the Trinity Study, this withdrawal rate has historically worked for 30+ year retirement periods with 95% success rate."
      },
      {
        question: "Which FIRE type should I choose?",
        answer: "Choose based on your lifestyle preferences: Lean FIRE ($30K-40K spending) for minimalists, Traditional FIRE ($40K-80K) for average lifestyles, Fat FIRE ($100K+) for luxury, Coast FIRE to let compound interest work, or Barista FIRE for semi-retirement."
      },
      {
        question: "How do taxes affect FIRE planning?",
        answer: "Taxes significantly impact FIRE. Use tax-advantaged accounts (401k, IRA, Roth IRA) strategically, plan withdrawal sequences to minimize taxes, consider Roth conversions during low-income years, and factor state taxes into your retirement location choice."
      }
    ]
  };

  const breadcrumbData = {
    items: [
      { name: 'Home', url: 'https://financialfirecalculators.com' },
      { name: 'Complete FIRE Guide', url: 'https://financialfirecalculators.com/complete-fire-guide' }
    ]
  };

  return (
    <>
      <StructuredData type="faq" data={guideFAQ} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-emerald-600 to-blue-700 text-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <BookOpen className="w-20 h-20 mx-auto mb-8 text-emerald-200" />
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Complete FIRE Guide: Foundations
              </h1>
              <p className="text-2xl sm:text-3xl text-emerald-100 mb-8 max-w-3xl mx-auto">
                What FIRE is, why the 4% rule works, and how to calculate your FIRE number — paired with deep-dive articles for advanced topics.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Beginner Friendly</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Research-Backed</span>
                <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">Free Calculators</span>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Complete Guide Contents</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                  In This Guide
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <a href="#chapter-1" className="hover:text-blue-600">Chapter 1: What is FIRE?</a></li>
                  <li>• <a href="#chapter-2" className="hover:text-blue-600">Chapter 2: The 4% Rule Explained</a></li>
                  <li>• <a href="#chapter-3" className="hover:text-blue-600">Chapter 3: Calculating Your FIRE Number</a></li>
                  <li>• <a href="#chapter-4" className="hover:text-blue-600">Chapter 4: The Five Types of FIRE</a></li>
                  <li>• <a href="#chapter-5" className="hover:text-blue-600">Chapter 5: Common FIRE Myths Debunked</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Continue with Deep-Dive Articles
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <Link href="/blog/fire-withdrawal-strategies" className="hover:text-blue-600">Withdrawal Strategies & Sequence-of-Returns Risk</Link></li>
                  <li>• <Link href="/blog/fire-tax-optimization" className="hover:text-blue-600">Tax Optimization & Roth Conversion Ladders</Link></li>
                  <li>• <Link href="/blog/healthcare-planning-fire" className="hover:text-blue-600">Healthcare Planning Before 65</Link></li>
                  <li>• <Link href="/blog/real-estate-fire" className="hover:text-blue-600">Real Estate & FIRE</Link></li>
                  <li>• <Link href="/blog/geographic-arbitrage-fire" className="hover:text-blue-600">Geographic Arbitrage</Link></li>
                  <li>• <Link href="/blog/fire-for-late-starters" className="hover:text-blue-600">FIRE for Late Starters</Link></li>
                  <li>• <Link href="/blog/social-security-fire" className="hover:text-blue-600">Social Security & FIRE</Link></li>
                  <li>• <Link href="/blog/fire-mindset-psychology" className="hover:text-blue-600">FIRE Mindset & Psychology</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 1: What is FIRE? */}
        <section id="chapter-1" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 1: What is FIRE?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                FIRE stands for Financial Independence, Retire Early. It's a movement that has gained massive popularity since the 2008 financial crisis, when millions of people realized that traditional retirement planning might not be sufficient for financial security.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Core Philosophy</h3>
              <p className="text-gray-700 mb-4">
                At its heart, FIRE is about achieving financial independence—the point where you have enough assets to live off their returns without needing employment income. This typically means accumulating 25-30 times your annual expenses in invested assets, allowing you to withdraw 3.5-4% annually and maintain your lifestyle indefinitely.
              </p>

              <p className="text-gray-700 mb-6">
                The "Early" in FIRE doesn't necessarily mean retiring at 30 (though some do). For many, it means having the option to retire in their 40s, 50s, or simply having financial security and career flexibility that traditional retirement planning doesn't provide.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Historical Context</h3>
              <p className="text-gray-700 mb-4">
                The FIRE movement builds on decades of financial research, particularly:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>The Trinity Study (1998):</strong> Cooley, Hubbard & Walz at Trinity University (San Antonio, TX) — research showing the sustainability of the 4% withdrawal rule</li>
                <li><strong>Bengen's Research (1994):</strong> Original work identifying the 4% safe withdrawal rate</li>
                <li><strong>Bogleheads Philosophy:</strong> Low-cost index fund investing pioneered by Vanguard founder Jack Bogle</li>
                <li><strong>Modern Portfolio Theory:</strong> Academic foundation for diversified investing strategies</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Principles</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">High Savings Rate</h4>
                  <p className="text-blue-800 text-sm">
                    FIRE practitioners typically save 50-70% of their income, compared to the traditional 10-15% recommendation.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Index Fund Investing</h4>
                  <p className="text-green-800 text-sm">
                    Focus on low-cost, diversified index funds rather than individual stock picking or active management.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Expense Optimization</h4>
                  <p className="text-purple-800 text-sm">
                    Ruthlessly optimize spending on things that don't bring joy while spending freely on what matters most.
                  </p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Income Growth</h4>
                  <p className="text-orange-800 text-sm">
                    Aggressively pursue income growth through skills development, career changes, and side hustles.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Why FIRE Matters</h3>
              <p className="text-gray-700 mb-4">
                Traditional retirement planning assumes you'll work until 65 and need 80% of your pre-retirement income. This model faces several challenges:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Social Security uncertainty and potential benefit reductions</li>
                <li>Declining employer pension plans and 401k contribution limits</li>
                <li>Rising healthcare costs and longer lifespans</li>
                <li>Economic volatility and job market uncertainty</li>
                <li>Desire for career flexibility and personal fulfillment</li>
              </ul>

              <p className="text-gray-700 mb-6">
                FIRE provides an alternative that emphasizes personal responsibility, aggressive saving, and financial independence as a form of security and freedom.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Calculators Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center gap-2">
              <Calculator className="w-6 h-6 text-blue-600" />
              Calculate Your FIRE Journey
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link 
                href="/"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Basic FIRE Calculator</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Calculate your FIRE number and timeline based on current savings and expenses.
                  </p>
                  <span className="text-blue-600 text-sm font-medium group-hover:text-blue-700">
                    Start Calculating →
                  </span>
                </div>
              </Link>

              <Link 
                href="/advanced-fire-analysis"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Monte Carlo Analysis</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Advanced simulation with risk assessment and success probability analysis.
                  </p>
                  <span className="text-purple-600 text-sm font-medium group-hover:text-purple-700">
                    Advanced Analysis →
                  </span>
                </div>
              </Link>

              <Link 
                href="/fire-comparison"
                className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="text-center">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">FIRE Types Comparison</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Compare Lean, Fat, Coast, and Barista FIRE to find your optimal path.
                  </p>
                  <span className="text-green-600 text-sm font-medium group-hover:text-green-700">
                    Compare Types →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Chapter 2: The 4% Rule */}
        <section id="chapter-2" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 2: The 4% Rule Explained</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                The 4% rule is the cornerstone of FIRE planning. It states that you can safely withdraw 4% of your investment portfolio's value in the first year of retirement, then adjust that amount for inflation each subsequent year, with a high probability of not running out of money over a 30+ year retirement.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The Trinity Study Foundation</h3>
              <p className="text-gray-700 mb-4">
                Published in February 1998 in the <em>AAII Journal</em> by finance professors Philip L. Cooley, Carl M. Hubbard, and Daniel T. Walz at Trinity University in San Antonio, Texas, this landmark study analyzed historical market data from 1926-1995 to determine sustainable withdrawal rates for retirees. The study tested various withdrawal rates against different portfolio compositions and time horizons.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-blue-900 mb-3">Key Trinity Study Findings</h4>
                <ul className="text-blue-800 space-y-2">
                  <li>• 4% withdrawal rate had a 95% success rate over 30-year periods</li>
                  <li>• 3.5% withdrawal rate had a 98% success rate over 30-year periods</li>
                  <li>• Stock-heavy portfolios (75% stocks, 25% bonds) performed best</li>
                  <li>• Success rates decreased with longer time horizons (40+ years)</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">How to Calculate Your FIRE Number</h3>
              <p className="text-gray-700 mb-4">
                The 4% rule gives us a simple formula for calculating how much money you need to retire:
              </p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6 font-mono text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  FIRE Number = Annual Expenses × 25
                </div>
                <div className="text-sm text-gray-600">
                  (25 is the inverse of 4%: 1 ÷ 0.04 = 25)
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-green-900 mb-2">Example 1</h4>
                  <p className="text-sm text-green-800">Annual Expenses: $40,000</p>
                  <p className="text-lg font-bold text-green-900">FIRE Number: $1,000,000</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Example 2</h4>
                  <p className="text-sm text-blue-800">Annual Expenses: $60,000</p>
                  <p className="text-lg font-bold text-blue-900">FIRE Number: $1,500,000</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold text-purple-900 mb-2">Example 3</h4>
                  <p className="text-sm text-purple-800">Annual Expenses: $80,000</p>
                  <p className="text-lg font-bold text-purple-900">FIRE Number: $2,000,000</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modern Research and Updates</h3>
              <p className="text-gray-700 mb-4">
                Since the original Trinity Study, numerous researchers have updated and refined the 4% rule:
              </p>

              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li><strong>Wade Pfau's Research:</strong> Suggests 4% may be too aggressive for current market conditions</li>
                <li><strong>Morningstar Studies:</strong> Recommend 3.3-3.8% withdrawal rates for current market valuations</li>
                <li><strong>Vanguard Research:</strong> Supports dynamic withdrawal strategies over fixed percentages</li>
                <li><strong>FI Studies:</strong> Show flexibility in spending can significantly improve success rates</li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Limitations and Criticisms</h3>
              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-yellow-900 mb-3">Important Considerations</h4>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Based on US historical data - other countries may differ</li>
                  <li>• Doesn't account for sequence of returns risk</li>
                  <li>• Assumes fixed spending in real terms</li>
                  <li>• May be too conservative for flexible spenders</li>
                  <li>• Current market valuations may require lower rates</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Approaches</h3>
              <p className="text-gray-700 mb-4">
                Many FIRE practitioners use modified approaches to address the 4% rule's limitations:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Dynamic Withdrawal</h4>
                  <p className="text-sm text-gray-700">
                    Adjust withdrawals based on portfolio performance and market conditions. Spend less during bear markets, more during bull markets.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Guardrails Approach</h4>
                  <p className="text-sm text-gray-700">
                    Set upper and lower bounds for spending adjustments. If portfolio grows/shrinks beyond thresholds, adjust spending accordingly.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Bond Tent Strategy</h4>
                  <p className="text-sm text-gray-700">
                    Gradually shift from stocks to bonds as you approach and enter retirement to reduce sequence of returns risk.
                  </p>
                </div>
                <div className="border border-gray-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Bucket Strategy</h4>
                  <p className="text-sm text-gray-700">
                    Maintain separate "buckets" for short-term expenses (bonds/cash) and long-term growth (stocks).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: FIRE Number Calculation */}
        <section id="chapter-3" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 3: Calculating Your FIRE Number</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Your FIRE number is the total invested portfolio that generates enough passive income to cover your annual expenses indefinitely. It is the single most important number in FIRE planning — and it&apos;s simpler to calculate than most people expect.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The core formula</h3>
              <div className="bg-gray-100 p-6 rounded-lg mb-6 font-mono text-center">
                <div className="text-2xl font-bold text-gray-900 mb-2">
                  FIRE Number = Annual Expenses × 25
                </div>
                <div className="text-sm text-gray-600">
                  (25 is the inverse of the 4% safe withdrawal rate)
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                That multiplier of 25 falls directly out of the 4% rule established by the Trinity Study. If you can safely withdraw 4% of a portfolio per year, you need 25 times your annual expenses to support those withdrawals — because 1 ÷ 0.04 = 25.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Worked examples</h3>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 p-4 rounded-lg text-center border border-emerald-200">
                  <div className="text-xs uppercase tracking-wider text-emerald-700 mb-1">Lean</div>
                  <p className="text-sm text-emerald-800">$35,000/year expenses</p>
                  <p className="text-xl font-bold text-emerald-900">$875,000</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-200">
                  <div className="text-xs uppercase tracking-wider text-blue-700 mb-1">Standard</div>
                  <p className="text-sm text-blue-800">$60,000/year expenses</p>
                  <p className="text-xl font-bold text-blue-900">$1,500,000</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-200">
                  <div className="text-xs uppercase tracking-wider text-purple-700 mb-1">Fat</div>
                  <p className="text-sm text-purple-800">$150,000/year expenses</p>
                  <p className="text-xl font-bold text-purple-900">$3,750,000</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">What expenses to include</h3>
              <p className="text-gray-700 mb-3">Get this right and your FIRE number is realistic. Get it wrong and you under- or over-shoot:</p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1.5">
                <li>Housing — including property taxes, insurance, and maintenance buffer (1% of home value/year is a common estimate)</li>
                <li>Food, groceries, dining out</li>
                <li>Transportation — including car replacement amortized over expected ownership</li>
                <li>Healthcare — this is the killer pre-Medicare. Plan ACA premiums + out-of-pocket maximum</li>
                <li>Insurance — health, life, auto, umbrella</li>
                <li>Utilities, internet, phone</li>
                <li>Personal/discretionary — clothing, hobbies, entertainment, gifts</li>
                <li>Travel/entertainment budget — be honest, not aspirational</li>
                <li>Taxes — even retirees pay taxes on traditional 401(k) withdrawals, capital gains, etc.</li>
                <li>An irregular-expense buffer — 5–10% on top covers home repairs, medical events, family emergencies</li>
              </ul>
              <p className="text-gray-700 mb-4"><strong>Exclude:</strong> commuting costs, work clothes, retirement-account contributions (you stop saving), mortgage payments if your home will be paid off by retirement.</p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">The conservative version: × 28-30</h3>
              <p className="text-gray-700 mb-4">
                For retirements longer than 30 years (typical for early retirees), the 4% rule is sometimes too aggressive. Pfau and Morningstar argue 3.3-3.8% is more appropriate for forward-looking 40+ year retirements. That changes the multiplier:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
                <li>3.5% withdrawal rate → 28.6× multiplier (so $60K expenses = $1.71M)</li>
                <li>3.3% withdrawal rate → 30.3× multiplier (so $60K expenses = $1.82M)</li>
                <li>4.5% withdrawal rate (with dynamic spending) → 22.2× (so $60K expenses = $1.33M)</li>
              </ul>
              <p className="text-gray-700">
                Use the <Link href="/4-percent-rule-calculator" className="text-blue-600 hover:underline">4% rule calculator</Link> to toggle between rates, or the <Link href="/fire-number-calculator" className="text-blue-600 hover:underline">FIRE number calculator</Link> for a quick read.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 4: Types of FIRE */}
        <section id="chapter-4" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 4: The Five Types of FIRE</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                FIRE is not a single strategy — it&apos;s a family of strategies. Each variant trades off lifestyle, time, and risk differently. The right one depends on what you want your retirement to look like, not just whether you want to retire early.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">🌿 Lean FIRE</h3>
              <p className="text-gray-700 mb-4">
                Frugal early retirement on $30,000–$40,000 per year. Requires a $750K–$1M portfolio. The fastest path to FIRE because lower target = shorter time. Common implementations: house hacking, geographic arbitrage, used cars, deliberate minimalism. Best fit for people who genuinely prefer simple living over expensive lifestyle.{" "}
                <Link href="/lean-fire-calculator" className="text-blue-600 hover:underline">Lean FIRE calculator →</Link>
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">🔥 Traditional FIRE</h3>
              <p className="text-gray-700 mb-4">
                Average lifestyle, $50,000–$80,000/year, $1.25M–$2M portfolio. The default for most FIRE pursuers. Maintains a typical middle-class lifestyle in retirement; allows for travel, restaurants, hobbies without rationing. Best fit for people who like their current life and want it to continue without the job.{" "}
                <Link href="/" className="text-blue-600 hover:underline">Main FIRE calculator →</Link>
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">⛵ Coast FIRE</h3>
              <p className="text-gray-700 mb-4">
                Save aggressively early, then stop and let compound growth carry you to a full FIRE number by traditional retirement age. The coast number is much smaller than full FIRE — at age 30 with a 5% real return and a $1.25M target, the Coast FIRE number is about $289K. Best fit for people who want career flexibility now, not retirement now.{" "}
                <Link href="/coast-fire-calculator" className="text-blue-600 hover:underline">Coast FIRE calculator →</Link>
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">☕ Barista FIRE</h3>
              <p className="text-gray-700 mb-4">
                Switch to part-time work — often specifically for healthcare benefits — while investments grow toward full FIRE. Smaller portfolio required ($500K–$750K typical) because part-time income covers ongoing expenses. Best fit for people who want to leave the corporate grind but don&apos;t want to fully retire, and for those bridging healthcare from early retirement to Medicare.{" "}
                <Link href="/barista-fire-calculator" className="text-blue-600 hover:underline">Barista FIRE calculator →</Link>
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">👑 Fat FIRE</h3>
              <p className="text-gray-700 mb-4">
                Luxury early retirement with $100,000+ annual spending. Requires $2.5M+ portfolio. Slower path because the target is larger, but allows lifestyle continuity for high earners. Often combined with a more conservative 3.5% withdrawal rate for additional safety margin (so multiplier becomes ~28).{" "}
                <Link href="/fat-fire-calculator" className="text-blue-600 hover:underline">Fat FIRE calculator →</Link>
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">💑 Couples FIRE</h3>
              <p className="text-gray-700 mb-4">
                Joint planning for two-income households. Couples reach FIRE faster than singles for three reasons: (1) doubled tax-advantaged contribution limits ($24.5K each in 401(k), $7.5K each in IRA, etc.), (2) shared housing/utilities/insurance costs (one mortgage, one internet bill), and (3) staggered retirement options that smooth healthcare bridge.{" "}
                <Link href="/couples-fire-calculator" className="text-blue-600 hover:underline">Couples FIRE calculator →</Link>
              </p>

              <p className="text-gray-700 mt-6">
                For a side-by-side comparison of all five variants, see <Link href="/fire-comparison" className="text-blue-600 hover:underline">the FIRE comparison page</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 5: Common FIRE Myths */}
        <section id="chapter-5" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Chapter 5: Common FIRE Myths Debunked</h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                FIRE has accumulated mythology — some perpetuated by enthusiasts, some by critics. The five most common myths, and what the math actually says:
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Myth 1: &quot;You need a six-figure income to do FIRE&quot;</h3>
              <p className="text-gray-700 mb-4">
                <strong>Reality:</strong> Income matters less than savings rate. A teacher earning $60K saving 50% reaches FIRE at the same time as a doctor earning $400K saving 50% — about 17 years at 5% real return. Income changes the lifestyle level (and the absolute size of the FIRE number), not the time-to-FIRE. The catch is that maintaining a 50% savings rate at lower incomes requires harder lifestyle choices, but the math works.{" "}
                <Link href="/savings-rate-calculator" className="text-blue-600 hover:underline">Try the savings rate calculator</Link>{" "}
                to see why income drops out of the equation.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Myth 2: &quot;The 4% rule is broken&quot;</h3>
              <p className="text-gray-700 mb-4">
                <strong>Reality:</strong> The 4% rule is a 30-year safe withdrawal rate, not a 50-year guarantee. For Trinity-style 30-year retirements, it survived even bad historical sequences at a 95%+ rate. For 40+ year early retirements, modern research (Pfau, Morningstar) suggests dropping to 3.3–3.8%. The rule isn&apos;t broken; it&apos;s just being applied to a longer horizon than it was designed for.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Myth 3: &quot;FIRE means living like a hermit&quot;</h3>
              <p className="text-gray-700 mb-4">
                <strong>Reality:</strong> Lean FIRE practitioners live frugally by choice. Traditional FIRE is normal middle-class. Fat FIRE includes luxury travel, second homes, and dining out. The stereotype of FIRE as extreme deprivation describes one variant (Lean) and ignores the other four.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Myth 4: &quot;You need to time the market or pick stocks&quot;</h3>
              <p className="text-gray-700 mb-4">
                <strong>Reality:</strong> FIRE math assumes broad market index returns. The historical 7% real return for US stocks is the S&P 500 average, not stock-picking returns. Most FIRE practitioners use low-cost broad-market index funds (VTSAX, VTI, VWRL globally). Market timing and active stock-picking add risk without measurable expected-return benefit.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">Myth 5: &quot;Healthcare makes early retirement impossible in the US&quot;</h3>
              <p className="text-gray-700 mb-4">
                <strong>Reality:</strong> Healthcare is a real planning challenge in the US, not a deal-breaker. The ACA marketplace provides income-based subsidies that make pre-Medicare coverage affordable for most early retirees who manage their realized income. HSA contributions during accumulation years build a tax-advantaged healthcare reserve. Barista FIRE specifically addresses this by keeping a part-time job for employer health insurance during the gap years.{" "}
                <Link href="/blog/healthcare-planning-fire" className="text-blue-600 hover:underline">Healthcare planning deep dive →</Link>
              </p>

              <p className="text-gray-700 mt-6">
                The honest version: FIRE is achievable, the math is straightforward, and the variants exist precisely because no single approach fits everyone. The work isn&apos;t finding the right strategy — it&apos;s being honest about your numbers.
              </p>
            </div>
          </div>
        </section>

        {/* Continue Reading */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Where to Go Next</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              You've covered the foundations. The natural next steps are picking your FIRE flavor, calculating your number, and learning the strategies that fit your stage.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <Link href="/" className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4">
                <span className="font-semibold block">Calculate your FIRE number</span>
                <span className="text-sm text-emerald-100">Run our main FIRE calculator</span>
              </Link>
              <Link href="/fire-comparison" className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4">
                <span className="font-semibold block">Compare FIRE types</span>
                <span className="text-sm text-emerald-100">Lean, Coast, Barista, Fat, Couples</span>
              </Link>
              <Link href="/methodology" className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4">
                <span className="font-semibold block">Read our methodology</span>
                <span className="text-sm text-emerald-100">Assumptions and data sources</span>
              </Link>
              <Link href="/blog" className="bg-white/10 hover:bg-white/20 transition-colors rounded-lg p-4">
                <span className="font-semibold block">Browse the blog</span>
                <span className="text-sm text-emerald-100">Deep dives on every topic</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}