import type { Metadata } from "next";
import { TrendingUp, Calculator, Users, Shield, Mail, FileText, HelpCircle, Target, BookOpen, DollarSign } from "lucide-react";
import CleanStructuredData from "@/components/seo/CleanStructuredData";

export const metadata: Metadata = {
  title: "About FIRE Calculator - Free Financial Independence Tools",
  description: "Learn about our comprehensive FIRE calculators, methodology, and commitment to helping you achieve financial independence and early retirement.",
  keywords: "fire calculator about, financial independence calculator, early retirement planning, fire methodology",
  openGraph: {
    title: "About FIRE Calculator - Free Financial Independence Tools",
    description: "Learn about our comprehensive FIRE calculators and methodology for achieving financial independence.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <CleanStructuredData 
        type="webpage"
        data={{
          title: "About FIRE Calculator",
          description: "Learn about our comprehensive FIRE calculators and methodology for achieving financial independence",
          url: "https://firecalculator.com/about",
          datePublished: "2024-01-01",
        }}
      />
      <CleanStructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Home', url: 'https://firecalculator.com' },
            { name: 'About', url: 'https://firecalculator.com/about' }
          ]
        }}
      />
      <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About FIRE Calculator
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-6 max-w-3xl mx-auto">
              Free, comprehensive calculators designed to help you achieve Financial Independence and Retire Early
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-16">
          
          {/* What We Do */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calculator className="w-8 h-8 text-primary-600" />
              <h2 className="text-2xl font-bold text-gray-900">What We Do</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-base leading-relaxed text-gray-700">
                FIRE Calculator provides a comprehensive suite of financial independence calculators designed to help you plan your path to early retirement. Our tools cover five distinct FIRE strategies:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-xl">🔥</span>
                  <div>
                    <strong className="text-gray-900">Traditional FIRE:</strong> Classic financial independence calculation using the 4% withdrawal rule
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">🌿</span>
                  <div>
                    <strong className="text-gray-900">Lean FIRE:</strong> Achieve FI with minimal expenses and a frugal lifestyle approach
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">⛵</span>
                  <div>
                    <strong className="text-gray-900">Coast FIRE:</strong> Stop active saving and let compound interest carry you to retirement
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">☕</span>
                  <div>
                    <strong className="text-gray-900">Barista FIRE:</strong> Semi-retirement with part-time income for basic needs and health benefits
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">👑</span>
                  <div>
                    <strong className="text-gray-900">Fat FIRE:</strong> Luxury retirement with higher spending and no lifestyle constraints
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl">💑</span>
                  <div>
                    <strong className="text-gray-900">Couples FIRE:</strong> Joint financial planning for dual-income households
                  </div>
                </li>
              </ul>
            </div>
          </section>

          {/* Our Methodology */}
          <section id="methodology" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Our Methodology</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Financial Principles</h3>
              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                <li>• <strong>4% Safe Withdrawal Rate:</strong> Based on the Trinity Study, assumes you can withdraw 4% of your portfolio annually in retirement</li>
                <li>• <strong>Compound Interest:</strong> Uses standard compound growth formulas with historical market returns (7-10% annual average)</li>
                <li>• <strong>Inflation Adjustment:</strong> All calculations account for inflation (typically 2-3% annually) to maintain purchasing power</li>
                <li>• <strong>Real Returns:</strong> Investment returns are calculated as inflation-adjusted real returns for accurate projections</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Calculation Framework</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">FIRE Number Formula</h4>
                  <code className="text-xs bg-white p-2 rounded block">
                    FIRE Number = Annual Expenses × 25<br/>
                    (Based on 4% withdrawal rule)
                  </code>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Time to FIRE</h4>
                  <code className="text-xs bg-white p-2 rounded block">
                    Years = log(1 + (Goal - Current) / Annual Savings) / log(1 + Return Rate)
                  </code>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Data Sources & Assumptions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Historical stock market returns based on S&P 500 performance (1926-present)</li>
                <li>• Default 7% annual return represents inflation-adjusted real returns</li>
                <li>• Conservative estimates prioritize achievability over optimistic projections</li>
                <li>• Tax considerations include standard deduction and common retirement account benefits</li>
              </ul>
            </div>
          </section>

          {/* Why We Built This */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-8 h-8 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Why We Built This</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-base leading-relaxed text-gray-700 mb-4">
                Financial independence should be accessible to everyone, not just those who can afford expensive financial advisors. 
                We created these calculators to democratize FIRE planning and provide the same level of analysis that wealth management 
                firms offer their clients.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <DollarSign className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">100% Free</h3>
                  <p className="text-sm text-gray-600">No hidden fees, premium versions, or subscriptions required</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Community Driven</h3>
                  <p className="text-sm text-gray-600">Built based on feedback from the FIRE community</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Privacy Focused</h3>
                  <p className="text-sm text-gray-600">All calculations happen in your browser - we don't store your data</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-amber-600" />
              <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Is this calculator accurate?</h3>
                <p className="text-sm text-gray-700">
                  Our calculations use established financial formulas and conservative assumptions based on historical market data. 
                  However, all projections are estimates - actual results will vary based on market performance, inflation, 
                  personal circumstances, and timing.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">Which FIRE strategy is right for me?</h3>
                <p className="text-sm text-gray-700">
                  This depends on your income, expenses, risk tolerance, and retirement goals. Traditional FIRE works for most people, 
                  Lean FIRE for those comfortable with minimal expenses, Fat FIRE for higher earners who want luxury in retirement, 
                  and Coast/Barista FIRE for those seeking semi-retirement options.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">What about taxes in retirement?</h3>
                <p className="text-sm text-gray-700">
                  Our calculators provide basic tax estimates, but retirement tax planning is complex. Consider consulting a tax 
                  professional about strategies like Roth conversions, tax-loss harvesting, and geographic arbitrage to optimize 
                  your tax burden in retirement.
                </p>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">How often should I recalculate?</h3>
                <p className="text-sm text-gray-700">
                  Review your FIRE plan annually or when major life changes occur (job change, marriage, children, inheritance, etc.). 
                  Market volatility is normal - avoid making drastic changes based on short-term market movements.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy */}
          <section id="privacy" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
            </div>
            <div className="prose prose-gray max-w-none text-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Data Collection</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• We do not collect, store, or transmit your financial data</li>
                <li>• All calculations are performed locally in your web browser</li>
                <li>• No personal information is required to use our calculators</li>
                <li>• We may use analytics to understand general usage patterns (no personal data)</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-900 mb-3">Cookies & Tracking</h3>
              <ul className="space-y-1 text-gray-700 mb-4">
                <li>• We use minimal cookies for site functionality only</li>
                <li>• No third-party tracking pixels or advertising cookies</li>
                <li>• Your calculator inputs are stored locally in your browser for convenience</li>
              </ul>

              <h3 className="text-base font-semibold text-gray-900 mb-3">Third-Party Services</h3>
              <p className="text-gray-700">
                Our website is hosted securely and does not integrate with third-party financial services 
                or data brokers. Any external links are clearly marked and subject to their own privacy policies.
              </p>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-gray-600" />
              <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
            </div>
            <div className="prose prose-gray max-w-none text-sm">
              <h3 className="text-base font-semibold text-gray-900 mb-3">Educational Purpose</h3>
              <p className="text-gray-700 mb-4">
                FIRE Calculator is provided for educational and informational purposes only. It is not intended as 
                financial, investment, tax, or legal advice. All calculations are estimates based on assumptions 
                and historical data - actual results may vary significantly.
              </p>

              <h3 className="text-base font-semibold text-gray-900 mb-3">No Financial Advice</h3>
              <p className="text-gray-700 mb-4">
                We are not financial advisors, and this tool does not replace professional financial planning. 
                Before making investment decisions, consult with qualified financial professionals who can 
                assess your individual circumstances.
              </p>

              <h3 className="text-base font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                We make no warranties about the accuracy, completeness, or reliability of the calculations. 
                Users assume all responsibility for decisions made based on calculator results.
              </p>

              <h3 className="text-base font-semibold text-gray-900 mb-3">Use License</h3>
              <p className="text-gray-700">
                You may use FIRE Calculator for personal, non-commercial purposes. The calculators are free to use, 
                but redistribution or commercial use requires permission.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-rose-600" />
              <h2 className="text-2xl font-bold text-gray-900">Contact & Feedback</h2>
            </div>
            <div className="prose prose-gray max-w-none">
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                We're continuously improving our calculators based on user feedback. If you find bugs, have feature requests, 
                or want to share your FIRE journey success story, we'd love to hear from you.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Bug Reports & Features</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Technical issues, calculation errors, or suggestions for new features
                  </p>
                  <a 
                    href="mailto:support@firecalculator.com" 
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    support@firecalculator.com
                  </a>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Questions about methodology, partnership opportunities, or general feedback
                  </p>
                  <a 
                    href="mailto:hello@firecalculator.com" 
                    className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                  >
                    hello@firecalculator.com
                  </a>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> We cannot provide personalized financial advice via email. For specific questions 
                  about your financial situation, please consult a qualified financial advisor.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
    </>
  );
}