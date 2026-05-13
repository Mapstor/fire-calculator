import type { Metadata } from "next";
import { HelpCircle, Calculator, TrendingUp, Shield, DollarSign, Clock } from "lucide-react";
import CleanStructuredData from "@/components/seo/CleanStructuredData";

export const metadata: Metadata = {
  title: "FIRE Calculator FAQ - Frequently Asked Questions",
  description: "Frequently asked questions about FIRE calculators, methodology, accuracy, and financial independence planning strategies.",
  openGraph: {
    title: "FIRE Calculator FAQ - Frequently Asked Questions",
    description: "Get answers to common questions about our FIRE calculators and financial independence planning.",
    type: "website",
  },
};

export default function FAQPage() {
  const faqData = {
    questions: [
      {
        question: "How accurate are FIRE calculators?",
        answer:
          "FIRE calculators are accurate as deterministic compound-interest math, but they are estimates not predictions. They use established formulas (FIRE Number = Annual Expenses × 25, derived from the 1998 Trinity Study) and conservative defaults (7% real return, 4% safe withdrawal rate). The biggest source of error in practice is your own expense estimate — most people underestimate retirement spending by 15-25%. Sequence-of-returns risk in the first decade of retirement is the second-biggest factor.",
      },
      {
        question: "What assumptions do FIRE calculators make?",
        answer:
          "Our calculators default to: 7% real (inflation-adjusted) annual return based on S&P 500 historical performance from 1926 onward; 3% annual inflation; 4% safe withdrawal rate from the Trinity Study; constant inflation-adjusted spending in retirement; and a 90/10 stock/bond allocation by default. All of these are adjustable in the Advanced options on every calculator. See our /methodology page for the full list of assumptions and references.",
      },
      {
        question: "Can I trust Monte Carlo simulations for FIRE planning?",
        answer:
          "Monte Carlo simulations run 1,000 randomized scenarios using historical return distributions, then report a success rate (e.g., 92% of paths support 30+ years of retirement). They are more honest than single-point projections because they expose sequence-of-returns risk. However, they assume returns are normally distributed and independent, which is a simplification. For a more conservative test, use historical-cycle simulators like FICalc or cFIREsim that test against actual market history.",
      },
      {
        question: "How often should I recalculate my FIRE number?",
        answer:
          "Recalculate annually as a baseline (after tax-filing season is a natural time), and immediately after major life events: salary change, marriage, divorce, children, inheritance, or a market move greater than 20%. Annual recalculation catches lifestyle creep before it adds years to your timeline. Use the Worked Examples on the home page as a reality check — if your numbers no longer fit one of those personas, the timeline has likely shifted materially.",
      },
      {
        question: "What's the difference between nominal and real returns?",
        answer:
          "Nominal returns are raw percentage gains before adjusting for inflation. Real returns subtract inflation to show actual purchasing-power growth. Long-term US stocks have averaged ~10% nominal and ~7% real (after subtracting ~3% average inflation). FIRE calculators use real returns so projections stay in today's dollars — otherwise you'd need to inflation-adjust the FIRE number too. See our 4% rule calculator to see how the choice affects your target.",
      },
      {
        question: "Which FIRE calculator should I use?",
        answer:
          "Use the Traditional FIRE calculator (home page) if you want a balanced middle-class retirement. Use Lean FIRE for $30K-$40K/year frugal retirements (target ~$875K). Use Fat FIRE for $100K+ luxury retirements ($2.5M+). Use Coast FIRE if you want to stop saving and let compound growth carry you to traditional retirement age. Use Barista FIRE if you want to switch to part-time work for healthcare. Use Couples FIRE for dual-income joint planning.",
      },
      {
        question: "How do taxes affect FIRE calculations?",
        answer:
          "Plan for a 15-20% effective tax rate in retirement, depending on your withdrawal strategy and state of residence. Most calculator inputs are pre-tax expenses, so you need to budget for taxes on top of your spending number. Tax-optimization strategies that move the needle: Roth conversion ladders during low-income years, tax-loss harvesting in taxable accounts, geographic arbitrage to lower-tax states, and HSA stacking. See our /blog/fire-tax-optimization deep-dive.",
      },
      {
        question: "What about healthcare costs before Medicare?",
        answer:
          "Healthcare is the single biggest planning challenge for US early retirees. Budget $8,000-$20,000 per year for ACA marketplace coverage for a family, depending on subsidy eligibility (which depends on your realized income). Many early retirees deliberately manage withdrawal income to stay in subsidy-friendly bands. HSA contributions during accumulation years build a tax-advantaged healthcare reserve. Barista FIRE — part-time work for employer health insurance — is a structural workaround for the gap years.",
      },
    ],
  };

  return (
    <>
      <CleanStructuredData type="faq" data={faqData} />
      <CleanStructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Home', url: 'https://financialfirecalculators.com' },
            { name: 'FAQ', url: 'https://financialfirecalculators.com/faq' }
          ]
        }}
      />
      <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 text-purple-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-6 max-w-3xl mx-auto">
              Common questions about FIRE calculators, methodology, and financial independence planning
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          
          {/* Calculator Accuracy & Reliability */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Calculator Accuracy & Reliability</h2>
            </div>
            <div className="space-y-8">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How accurate are these calculators?</h3>
                <p className="text-base text-gray-700 mb-4">
                  Our calculators use established financial formulas and conservative assumptions based on historical market data. 
                  However, they provide estimates, not guarantees. Accuracy depends on:
                </p>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• <strong>Input accuracy:</strong> How precisely you estimate your income, expenses, and savings</li>
                  <li>• <strong>Market conditions:</strong> Future returns may differ from historical averages</li>
                  <li>• <strong>Life changes:</strong> Career changes, family situations, health costs can impact projections</li>
                  <li>• <strong>Economic factors:</strong> Inflation, interest rates, and market cycles affect results</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-base text-blue-800">
                    <strong>Best practice:</strong> Review and update your FIRE plan annually or when major life changes occur. 
                    Consider results as educated estimates, not precise predictions.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What data sources do you use?</h3>
                <p className="text-base text-gray-700 mb-3">
                  Our calculations are based on well-established financial research:
                </p>
                <ul className="text-base text-gray-700 space-y-1">
                  <li>• <strong>Stock returns:</strong> S&P 500 historical performance (1926-present)</li>
                  <li>• <strong>Safe withdrawal rates:</strong> Trinity Study and subsequent academic research</li>
                  <li>• <strong>Inflation data:</strong> Consumer Price Index from Bureau of Labor Statistics</li>
                  <li>• <strong>Bond returns:</strong> US Treasury and corporate bond historical yields</li>
                  <li>• <strong>Economic assumptions:</strong> Federal Reserve economic projections</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Why do your results differ from other calculators?</h3>
                <p className="text-base text-gray-700 mb-3">
                  Differences usually stem from varying assumptions about:
                </p>
                <ul className="text-base text-gray-700 space-y-1">
                  <li>• Investment return rates (we default to conservative 7% real returns)</li>
                  <li>• Inflation rates (we use 2.5% vs. some using 3% or higher)</li>
                  <li>• Tax treatment (some calculators ignore taxes entirely)</li>
                  <li>• Withdrawal strategies (4% rule vs. dynamic withdrawal approaches)</li>
                  <li>• Additional costs (healthcare, long-term care, emergency expenses)</li>
                </ul>
              </div>

            </div>
          </section>

          {/* FIRE Strategy Selection */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">FIRE Strategy Selection</h2>
            </div>
            <div className="space-y-8">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Which FIRE strategy is right for me?</h3>
                <p className="text-base text-gray-700 mb-4">
                  The best FIRE strategy depends on your income, expenses, risk tolerance, and retirement lifestyle goals:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">🔥 Traditional FIRE</h4>
                      <p className="text-sm text-gray-600">Best for most people with moderate income and standard retirement expectations</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">🌿 Lean FIRE</h4>
                      <p className="text-sm text-gray-600">Ideal if you're comfortable with minimal expenses and frugal living</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">⛵ Coast FIRE</h4>
                      <p className="text-sm text-gray-600">Good for young savers who want to stop aggressive saving early</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">☕ Barista FIRE</h4>
                      <p className="text-sm text-gray-600">Perfect for those wanting semi-retirement with part-time work</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">👑 Fat FIRE</h4>
                      <p className="text-sm text-gray-600">For high earners wanting luxury retirement without constraints</p>
                    </div>
                    <div className="border border-gray-200 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">💑 Couples FIRE</h4>
                      <p className="text-sm text-gray-600">Essential for dual-income households planning together</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Can I change strategies over time?</h3>
                <p className="text-base text-gray-700 mb-3">
                  Absolutely! Many people's FIRE strategy evolves as their circumstances change:
                </p>
                <ul className="text-base text-gray-700 space-y-1">
                  <li>• Start with Traditional FIRE, then transition to Fat FIRE as income increases</li>
                  <li>• Begin with aggressive Lean FIRE goals, then adjust to more comfortable spending</li>
                  <li>• Reach Coast FIRE milestone, then decide whether to continue saving or coast</li>
                  <li>• Plan for Traditional FIRE but pivot to Barista FIRE for gradual transition</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What if I'm already close to traditional retirement age?</h3>
                <p className="text-base text-gray-700">
                  FIRE principles still apply! Focus on maximizing your current savings rate and consider strategies like 
                  geographic arbitrage, healthcare cost planning, and optimizing Social Security timing. Even late starters 
                  can achieve some level of financial independence.
                </p>
              </div>

            </div>
          </section>

          {/* Investment & Financial Planning */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <DollarSign className="w-8 h-8 text-yellow-600" />
              <h2 className="text-2xl font-bold text-gray-900">Investment & Financial Planning</h2>
            </div>
            <div className="space-y-8">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What investment return should I assume?</h3>
                <p className="text-base text-gray-700 mb-4">
                  We recommend conservative assumptions for reliable planning:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Conservative (Recommended)</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• 6-7% real returns (inflation-adjusted)</li>
                      <li>• Accounts for sequence of returns risk</li>
                      <li>• Better chance of meeting goals</li>
                      <li>• Allows for market volatility</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-amber-800 mb-2">Aggressive (Higher Risk)</h4>
                    <ul className="text-sm text-amber-700 space-y-1">
                      <li>• 8-10% real returns</li>
                      <li>• Based on long-term historical averages</li>
                      <li>• May lead to disappointment in poor markets</li>
                      <li>• Requires higher risk tolerance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How much should I have in stocks vs. bonds?</h3>
                <p className="text-base text-gray-700 mb-4">
                  Asset allocation depends on your age, risk tolerance, and time to retirement:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Early Career (20s-30s)</h4>
                      <p className="text-gray-600">80-100% stocks, 0-20% bonds. Long time horizon allows for more risk.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Mid-Career (40s-50s)</h4>
                      <p className="text-gray-600">60-80% stocks, 20-40% bonds. Start reducing risk as retirement approaches.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Near/In Retirement</h4>
                      <p className="text-gray-600">40-60% stocks, 40-60% bonds. Preserve capital while maintaining growth.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What about taxes in retirement?</h3>
                <p className="text-base text-gray-700 mb-4">
                  Tax planning is crucial for FIRE success. Consider:
                </p>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• <strong>Traditional vs. Roth accounts:</strong> Balance current tax savings with tax-free growth</li>
                  <li>• <strong>Tax-loss harvesting:</strong> Offset gains with losses in taxable accounts</li>
                  <li>• <strong>Withdrawal sequencing:</strong> Strategic order of account withdrawals to minimize taxes</li>
                  <li>• <strong>Geographic arbitrage:</strong> Moving to lower-tax states in retirement</li>
                  <li>• <strong>Roth conversions:</strong> Converting traditional IRA funds during low-income years</li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-base text-blue-800">
                    <strong>Important:</strong> Our calculators provide basic tax estimates. Consult a tax professional 
                    for personalized strategies, especially for complex situations.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* Common Concerns & Challenges */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold text-gray-900">Common Concerns & Challenges</h2>
            </div>
            <div className="space-y-8">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What about healthcare costs in early retirement?</h3>
                <p className="text-base text-gray-700 mb-4">
                  Healthcare is often the biggest concern for early retirees. Planning strategies include:
                </p>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• <strong>ACA marketplace plans:</strong> Budget $8,000-$20,000 annually for family coverage</li>
                  <li>• <strong>Health Savings Accounts (HSAs):</strong> Triple tax advantage for medical expenses</li>
                  <li>• <strong>Geographic arbitrage:</strong> Healthcare costs vary significantly by location</li>
                  <li>• <strong>Barista FIRE:</strong> Part-time work for employer health benefits</li>
                  <li>• <strong>Healthcare sharing ministries:</strong> Lower-cost alternative for some families</li>
                  <li>• <strong>International options:</strong> Some early retirees relocate for lower healthcare costs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What if the market crashes right after I retire?</h3>
                <p className="text-base text-gray-700 mb-4">
                  Sequence of returns risk is real but manageable with proper planning:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mitigation Strategies</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Maintain 2-3 years of expenses in cash/bonds</li>
                      <li>• Use dynamic withdrawal strategies</li>
                      <li>• Plan for part-time work flexibility</li>
                      <li>• Consider retiring at market highs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Flexibility Options</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Reduce expenses during bear markets</li>
                      <li>• Delay major purchases</li>
                      <li>• Return to work temporarily</li>
                      <li>• Relocate to lower-cost areas</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I handle family and children in FIRE planning?</h3>
                <p className="text-base text-gray-700 mb-3">
                  Family considerations require adjustments to traditional FIRE planning:
                </p>
                <ul className="text-base text-gray-700 space-y-2">
                  <li>• <strong>Education costs:</strong> Budget for college expenses or alternative education paths</li>
                  <li>• <strong>Larger emergency fund:</strong> Children create more unpredictable expenses</li>
                  <li>• <strong>Life insurance:</strong> Protect family income during accumulation phase</li>
                  <li>• <strong>Healthcare buffer:</strong> Children increase medical cost variability</li>
                  <li>• <strong>Flexibility premium:</strong> Consider higher FIRE target for family security</li>
                </ul>
              </div>

            </div>
          </section>

          {/* Using the Calculators */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Using the Calculators Effectively</h2>
            </div>
            <div className="space-y-8">
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">How often should I recalculate my FIRE plan?</h3>
                <p className="text-base text-gray-700 mb-4">
                  Regular reviews keep your plan on track:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Scheduled Reviews</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Annual:</strong> Update income, expenses, and net worth</li>
                      <li>• <strong>Quarterly:</strong> Check progress and market performance</li>
                      <li>• <strong>Monthly:</strong> Track spending and savings rate</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Trigger Events</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Job change or salary adjustment</li>
                      <li>• Marriage, divorce, or children</li>
                      <li>• Major market movements (+/- 20%)</li>
                      <li>• Inheritance or windfall</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">What inputs should I be most careful about?</h3>
                <p className="text-base text-gray-700 mb-4">
                  These inputs have the biggest impact on your results:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">High Impact Inputs</h4>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Annual expenses (most critical)</li>
                      <li>• Savings rate</li>
                      <li>• Expected investment return</li>
                      <li>• Current age and retirement age</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Common Estimation Errors</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Underestimating retirement expenses</li>
                      <li>• Ignoring healthcare cost increases</li>
                      <li>• Assuming current savings rate continues</li>
                      <li>• Forgetting about taxes</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Should I trust the calculator if the timeline seems too long?</h3>
                <p className="text-base text-gray-700 mb-3">
                  Long timelines are often accurate but can be improved by:
                </p>
                <ul className="text-base text-gray-700 space-y-1">
                  <li>• Increasing your savings rate (most effective)</li>
                  <li>• Reducing your expected retirement expenses</li>
                  <li>• Considering geographic arbitrage</li>
                  <li>• Exploring side income opportunities</li>
                  <li>• Optimizing your investment strategy</li>
                  <li>• Reassessing your FIRE strategy (Lean vs. Traditional vs. Fat)</li>
                </ul>
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="text-base text-green-800">
                    <strong>Remember:</strong> FIRE is a marathon, not a sprint. Even if full retirement takes 20+ years, 
                    you'll build significant wealth and financial security along the way.
                  </p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </main>
    </div>
    </>
  );
}