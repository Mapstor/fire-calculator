import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { BookOpen, Calculator, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Methodology - FIRE Calculator Financial Planning Approach",
  description: "Learn about the financial principles, calculations, and data sources behind our FIRE calculators. Understand our conservative, research-based methodology.",
  keywords: "fire methodology, financial independence calculation, 4% rule, safe withdrawal rate, investment returns",
  openGraph: {
    title: "Our Methodology - FIRE Calculator Financial Planning Approach",
    description: "Learn about the financial principles and calculations behind our FIRE calculators.",
    type: "website",
  },
};

export default function MethodologyPage() {
  const methodologyFAQ = {
    questions: [
      {
        question: "What is the 4% safe withdrawal rate?",
        answer: "The 4% rule is a financial guideline that suggests withdrawing 4% of your investment portfolio annually in retirement. Based on the Trinity Study, this rate has historically supported 30+ year retirement periods with 95%+ success rates when using a diversified stock/bond portfolio. Example: With $1 million saved, you can withdraw $40,000 in year one, then adjust for inflation each subsequent year."
      },
      {
        question: "How do you calculate the FIRE number step-by-step?",
        answer: "Step 1: Calculate your annual expenses in retirement. Step 2: Multiply by 25 (the inverse of 4%). Example calculation: Monthly expenses = $4,000. Annual expenses = $4,000 × 12 = $48,000. FIRE number = $48,000 × 25 = $1,200,000. This means you need $1.2 million invested to retire with $48,000 annual spending."
      },
      {
        question: "What market returns do FIRE calculators assume?",
        answer: "Most FIRE calculators use 7% real (inflation-adjusted) returns based on historical S&P 500 performance from 1926-present. This accounts for the long-term average while being conservative by removing inflation effects. The nominal return is approximately 10%, but after subtracting 3% inflation, the real return is 7%."
      },
      {
        question: "How accurate are FIRE calculator projections?",
        answer: "FIRE calculators provide educated estimates based on historical data and established financial principles. They assume past market performance patterns continue, which isn't guaranteed. Accuracy depends on: market performance matching historical averages, expense estimates being accurate, inflation remaining moderate, and no major economic disruptions. Results should be treated as starting points for planning, not precise predictions."
      },
      {
        question: "What's the difference between nominal and real returns?",
        answer: "Nominal returns are the raw percentage gains without adjusting for inflation. Real returns subtract inflation to show actual purchasing power growth. Example: If your portfolio grows 10% (nominal) but inflation is 3%, your real return is 7%. FIRE calculations use real returns to ensure your purchasing power is maintained throughout retirement."
      },
      {
        question: "How do I calculate years to FIRE?",
        answer: "Years to FIRE = log((FIRE Number - Current Savings) / Annual Savings + 1) / log(1 + Return Rate). Example: FIRE number = $1,000,000, Current savings = $100,000, Annual savings = $50,000, Return = 7%. Years = log((1,000,000 - 100,000) / 50,000 + 1) / log(1.07) ≈ 12.5 years."
      },
      {
        question: "What is Coast FIRE and how is it calculated?",
        answer: "Coast FIRE is when your current investments will grow to your FIRE number by retirement age without additional contributions. Formula: Coast FIRE Number = FIRE Number / (1 + return rate)^years until retirement. Example: FIRE number = $1,000,000, 30 years to age 65, 7% returns. Coast FIRE = $1,000,000 / (1.07)^30 = $131,367. If you have $131,367 invested at age 35, you can stop saving and still retire at 65."
      },
      {
        question: "How does the savings rate affect time to FIRE?",
        answer: "Higher savings rates dramatically reduce time to FIRE. Examples at 7% returns: 10% savings rate = 51 years to FIRE. 25% savings rate = 32 years. 50% savings rate = 17 years. 75% savings rate = 7 years. The relationship is exponential - doubling your savings rate more than halves your time to retirement."
      },
      {
        question: "What expenses should I include in my FIRE number calculation?",
        answer: "Include all regular living expenses: Housing (rent/mortgage, insurance, taxes, maintenance), Food and dining, Transportation, Healthcare (critical for early retirees), Utilities, Personal/discretionary spending, Travel/entertainment budget. Exclude: Work-related expenses that disappear in retirement, Savings contributions (no longer needed), Mortgage if it will be paid off. Add a 10-20% buffer for unexpected expenses."
      },
      {
        question: "How do taxes affect FIRE calculations?",
        answer: "Taxes significantly impact FIRE planning. Key considerations: Withdrawal strategy (Roth vs Traditional accounts), Capital gains taxes on taxable accounts, State income taxes vary widely, Healthcare subsidies may be affected by income. Many FIRE calculators use after-tax numbers, but you should plan for: 15-20% effective tax rate in retirement, Tax-efficient withdrawal strategies, Roth conversion ladders during low-income years."
      }
    ]
  };

  const breadcrumbData = {
    items: [
      { name: 'Home', url: 'https://financialfirecalculators.com' },
      { name: 'Methodology', url: 'https://financialfirecalculators.com/methodology' }
    ]
  };

  return (
    <>
      <StructuredData type="faq" data={methodologyFAQ} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our Methodology
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Research-based financial principles and conservative calculations for reliable FIRE planning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Core Financial Principles */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Core Financial Principles</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  4% Safe Withdrawal Rate
                  <span className="text-sm font-normal text-gray-600 ml-2">(SWR)</span>
                </h3>
                <p className="text-base text-gray-700 mb-3">
                  Our primary calculation framework is based on the <dfn title="A comprehensive study of retirement portfolio success rates conducted at Trinity University">Trinity Study (1998)</dfn> and subsequent research showing 
                  that a <strong>4% annual withdrawal rate</strong> from a diversified portfolio has historically supported <mark>30+ year 
                  retirement periods with 95%+ success rates</mark>.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">FIRE Number Formula</h4>
                  <code className="text-sm bg-white p-3 rounded block font-mono" aria-label="FIRE number calculation formula">
                    <span itemProp="formula">FIRE Number = Annual Expenses × 25</span><br/>
                    <span className="text-gray-600">(Inverse of 4% = 1/0.04 = 25)</span>
                  </code>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Example:</strong> If you need $50,000 per year in retirement, your FIRE number would be $50,000 × 25 = $1,250,000
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Historical Market Returns</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• <strong>7% Real Return:</strong> Inflation-adjusted S&P 500 average (1926-2023)</li>
                  <li>• <strong>10% Nominal Return:</strong> Pre-inflation historical stock market average</li>
                  <li>• <strong>Conservative Approach:</strong> We default to 7% real returns for realistic projections</li>
                  <li>• <strong>Bond Allocation:</strong> Lower expected returns (2-4% real) for conservative portfolios</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Inflation Adjustment</h3>
                <p className="text-base text-gray-700 mb-3">
                  All calculations account for inflation to maintain purchasing power throughout retirement:
                </p>
                <ul className="space-y-1 text-base text-gray-700">
                  <li>• Default inflation rate: 2.5% annually (Federal Reserve target + buffer)</li>
                  <li>• Real returns = Nominal returns - Inflation rate</li>
                  <li>• Future expenses automatically adjusted for inflation</li>
                  <li>• FIRE numbers represent today's purchasing power</li>
                </ul>
              </div>
            </div>
          </section>

          {/* FIRE Approaches Comparison Table */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">FIRE Approaches Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse" itemScope itemType="https://schema.org/Table">
                <caption className="sr-only">Comparison of different FIRE approaches including target amounts, timeframes, and lifestyle implications</caption>
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">FIRE Type</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Definition</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Target Amount</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Typical Timeline</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr itemProp="about" itemScope itemType="https://schema.org/DefinedTerm">
                    <td className="py-3 px-4 font-medium text-gray-900" itemProp="name">Traditional FIRE</td>
                    <td className="py-3 px-4 text-gray-700" itemProp="description">
                      <dfn>Financial Independence, Retire Early</dfn> - Full retirement with comfortable lifestyle
                    </td>
                    <td className="py-3 px-4 text-gray-700">25× annual expenses</td>
                    <td className="py-3 px-4 text-gray-700">10-20 years</td>
                    <td className="py-3 px-4 text-gray-700">Balanced approach seekers</td>
                  </tr>
                  <tr itemProp="about" itemScope itemType="https://schema.org/DefinedTerm">
                    <td className="py-3 px-4 font-medium text-gray-900" itemProp="name">Lean FIRE</td>
                    <td className="py-3 px-4 text-gray-700" itemProp="description">
                      <dfn>Minimalist early retirement</dfn> with frugal living ($40K/year or less)
                    </td>
                    <td className="py-3 px-4 text-gray-700">$500K - $1M</td>
                    <td className="py-3 px-4 text-gray-700">5-15 years</td>
                    <td className="py-3 px-4 text-gray-700">Minimalists, low-cost areas</td>
                  </tr>
                  <tr itemProp="about" itemScope itemType="https://schema.org/DefinedTerm">
                    <td className="py-3 px-4 font-medium text-gray-900" itemProp="name">Fat FIRE</td>
                    <td className="py-3 px-4 text-gray-700" itemProp="description">
                      <dfn>Luxury early retirement</dfn> maintaining high spending ($100K+/year)
                    </td>
                    <td className="py-3 px-4 text-gray-700">$2.5M - $5M+</td>
                    <td className="py-3 px-4 text-gray-700">15-30 years</td>
                    <td className="py-3 px-4 text-gray-700">High earners, luxury lifestyle</td>
                  </tr>
                  <tr itemProp="about" itemScope itemType="https://schema.org/DefinedTerm">
                    <td className="py-3 px-4 font-medium text-gray-900" itemProp="name">Coast FIRE</td>
                    <td className="py-3 px-4 text-gray-700" itemProp="description">
                      <dfn>Front-load retirement savings</dfn> then coast to retirement on compound growth
                    </td>
                    <td className="py-3 px-4 text-gray-700">Variable (age-dependent)</td>
                    <td className="py-3 px-4 text-gray-700">5-10 years to coast</td>
                    <td className="py-3 px-4 text-gray-700">Young professionals, burnout prevention</td>
                  </tr>
                  <tr itemProp="about" itemScope itemType="https://schema.org/DefinedTerm">
                    <td className="py-3 px-4 font-medium text-gray-900" itemProp="name">Barista FIRE</td>
                    <td className="py-3 px-4 text-gray-700" itemProp="description">
                      <dfn>Semi-retirement with part-time work</dfn> for benefits and supplemental income
                    </td>
                    <td className="py-3 px-4 text-gray-700">50-75% of full FIRE</td>
                    <td className="py-3 px-4 text-gray-700">7-15 years</td>
                    <td className="py-3 px-4 text-gray-700">Work-life balance, healthcare needs</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Key Insight:</strong> Each FIRE approach represents a different balance between time to retirement, required savings, and lifestyle expectations. 
                The "best" approach depends on individual values, income levels, and life goals.
              </p>
            </div>
          </section>

          {/* Calculation Framework */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Calculation Framework</h2>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Time to FIRE Formula</h3>
                  <code className="text-xs bg-white p-3 rounded block font-mono mb-3">
                    Years = log(1 + (Goal - Current) / Annual Savings) / log(1 + Return Rate)
                  </code>
                  <p className="text-sm text-gray-600">
                    Compound interest formula solving for time, accounting for existing savings and regular contributions.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Future Value Growth</h3>
                  <code className="text-xs bg-white p-3 rounded block font-mono mb-3">
                    FV = PV × (1 + r)^t + PMT × [((1 + r)^t - 1) / r]
                  </code>
                  <p className="text-sm text-gray-600">
                    Standard financial formula for present value, periodic payments, and compound growth over time.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculator-Specific Adjustments</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">🌿 Lean FIRE</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Lower expense targets</li>
                      <li>• Geographic arbitrage factor</li>
                      <li>• Frugal lifestyle optimization</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">⛵ Coast FIRE</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Stop-saving calculation</li>
                      <li>• Growth-only projections</li>
                      <li>• Traditional retirement age</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">☕ Barista FIRE</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Part-time income offset</li>
                      <li>• Health insurance value</li>
                      <li>• Reduced FIRE number</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">👑 Fat FIRE</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Higher expense multiples</li>
                      <li>• Luxury lifestyle costs</li>
                      <li>• Tax optimization planning</li>
                    </ul>
                  </div>
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">💑 Couples FIRE</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Dual income optimization</li>
                      <li>• Shared expense benefits</li>
                      <li>• Staggered retirement options</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step-by-Step FIRE Calculation Example */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete FIRE Calculation Example</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sarah's Journey to FIRE: A Step-by-Step Calculation</h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Step 1: Current Situation Assessment</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Age: 30 years old</li>
                      <li>• Annual income: $75,000</li>
                      <li>• Annual expenses: $45,000</li>
                      <li>• Current savings: $50,000</li>
                      <li>• Annual savings: $75,000 - $45,000 = <strong>$30,000</strong></li>
                      <li>• Savings rate: $30,000 / $75,000 = <strong>40%</strong></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Step 2: Calculate FIRE Number</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Annual retirement expenses: $45,000</li>
                      <li>• Safe withdrawal rate: 4%</li>
                      <li>• FIRE Number = $45,000 × 25 = <strong>$1,125,000</strong></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Step 3: Calculate Years to FIRE</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>Using the compound interest formula with 7% real returns:</p>
                      <code className="block bg-white p-2 rounded text-xs">
                        Years = log((1,125,000 - 50,000) / 30,000 + 1) / log(1.07)<br/>
                        Years = log(36.83) / log(1.07)<br/>
                        Years ≈ <strong>15.8 years</strong>
                      </code>
                      <p>Sarah can retire at approximately <strong>age 46</strong></p>
                    </div>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Step 4: Calculate Coast FIRE Number</h4>
                    <div className="text-sm text-gray-700 space-y-2">
                      <p>If Sarah wants to coast to retirement at age 65 (35 years from now):</p>
                      <code className="block bg-white p-2 rounded text-xs">
                        Coast FIRE = $1,125,000 / (1.07)^35<br/>
                        Coast FIRE = $1,125,000 / 10.677<br/>
                        Coast FIRE ≈ <strong>$105,400</strong>
                      </code>
                      <p>Sarah needs just <strong>$55,400 more</strong> to reach Coast FIRE!</p>
                    </div>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-medium text-gray-900 mb-2">Step 5: Optimization Strategies</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Increasing savings rate to 50%: Retire in <strong>12.5 years</strong> (age 42)</li>
                      <li>• Reducing expenses to $40,000: FIRE number drops to <strong>$1,000,000</strong></li>
                      <li>• Side hustle of $10,000/year: Retire <strong>2 years earlier</strong></li>
                      <li>• Geographic arbitrage: Moving to lower cost area could reduce FIRE number by 30%</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Key Takeaway:</strong> Small changes in savings rate, expenses, or income can significantly impact your FIRE timeline. 
                  Sarah's 40% savings rate puts her on track for retirement in under 16 years, demonstrating the power of consistent saving and compound growth.
                </p>
              </div>
            </div>
          </section>

          {/* Data Sources & Research */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sources & Research Foundation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Research</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• <strong>Trinity Study (1998):</strong> University of Trinity analysis of safe withdrawal rates</li>
                  <li>• <strong>Bengen's Research (1994):</strong> Original 4% rule financial planning foundation</li>
                  <li>• <strong>Shiller CAPE Data:</strong> Cyclically adjusted P/E ratios for market valuation context</li>
                  <li>• <strong>Federal Reserve Economic Data:</strong> Interest rates, inflation, and economic indicators</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Data Sources</h3>
                <ul className="space-y-2 text-base text-gray-700">
                  <li>• <strong>S&P 500 Returns:</strong> 1926-present historical performance data</li>
                  <li>• <strong>Bond Market Returns:</strong> US Treasury and corporate bond historical yields</li>
                  <li>• <strong>Inflation Data:</strong> Consumer Price Index (CPI) from Bureau of Labor Statistics</li>
                  <li>• <strong>International Markets:</strong> MSCI World Index for global diversification context</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Conservative Assumptions</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-base text-blue-800 mb-3">
                    Our methodology prioritizes achievability over optimistic projections:
                  </p>
                  <ul className="space-y-1 text-sm text-blue-700">
                    <li>• Use real (inflation-adjusted) returns rather than nominal returns</li>
                    <li>• Account for sequence of returns risk in early retirement</li>
                    <li>• Include estimates for taxes, healthcare, and unexpected expenses</li>
                    <li>• Provide ranges rather than single-point estimates when appropriate</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitations & Disclaimers */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Methodology Limitations</h2>
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">Important Considerations</h3>
              <ul className="space-y-2 text-base text-amber-700">
                <li>• <strong>Past Performance:</strong> Historical returns do not guarantee future results</li>
                <li>• <strong>Individual Variation:</strong> Personal circumstances vary significantly from averages</li>
                <li>• <strong>Market Cycles:</strong> Sequence of returns risk can impact early retirement timing</li>
                <li>• <strong>Expense Changes:</strong> Healthcare, family, and lifestyle costs may differ from projections</li>
                <li>• <strong>Economic Shifts:</strong> Major economic changes could alter fundamental assumptions</li>
              </ul>
            </div>
            <p className="text-base text-gray-600 mt-4">
              These calculators provide educated estimates based on historical data and established financial principles. 
              All projections should be considered starting points for financial planning, not guarantees of specific outcomes.
            </p>
          </section>

        </div>
      </main>
    </div>
    </>
  );
}