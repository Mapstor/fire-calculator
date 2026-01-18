import { Metadata } from 'next';
import CoastFireCalculator from '@/components/coast-fire/CoastFireCalculator';
import CoastFireContent from '@/components/coast-fire/CoastFireContent';
import { Sailboat, TrendingUp, Coffee, ArrowRight, BookOpen, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Coast FIRE Calculator - Find Your Coast FI Number | Free Tool',
  description: 'Free Coast FIRE calculator to find when you can stop saving for retirement. Calculate your Coast FI number and see when compound growth takes over. Interactive charts and personalized results.',
  keywords: 'coast fire calculator, coastfi calculator, coast fi number, coast fire number, coasting to retirement, coast to financial independence, coast fi calculator',
  openGraph: {
    title: 'Coast FIRE Calculator - Find Your Coast FI Number',
    description: 'Calculate when you can stop saving for retirement and let compound growth do the rest.',
    type: 'website',
  },
};

export default function CoastFireCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Sailboat className="w-6 h-6" />
            <span className="text-primary-200 text-sm font-medium">Coast FIRE Calculator</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Calculate Your Coast FIRE Number
          </h1>
          <p className="text-base md:text-lg text-primary-100 max-w-2xl leading-relaxed">
            Determine the exact amount you need invested today so compound growth will fund your retirement without additional contributions.
          </p>
        </div>
      </section>
      
      {/* What is Coast FIRE - Expanded Explainer */}
      <section className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            What is Coast FIRE? Complete Guide
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Coast FIRE (Financial Independence, Retire Early) is a milestone where your current investments will grow to your full FIRE number by retirement age without any additional contributions. Once you reach Coast FIRE, you can stop saving for retirement entirely and work only to cover your current living expenses.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="p-1.5 bg-primary-100 rounded-md h-fit">
                <TrendingUp className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">1. Save Until Coast FI</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Build your portfolio to your Coast FIRE number through aggressive saving
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-green-100 rounded-md h-fit">
                <Sailboat className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">2. Stop Saving</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Let compound growth work – no more retirement contributions required
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-amber-100 rounded-md h-fit">
                <Coffee className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">3. Work for Today</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Earn only enough to cover current expenses – career flexibility achieved
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Assumptions Box - Expanded */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Calculator Assumptions & Methodology</h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs text-blue-800">
            <div>
              <p>• <strong>Expected Returns:</strong> 7% annual (historical S&P 500)</p>
              <p>• <strong>Inflation:</strong> 3% (Federal Reserve target)</p>
              <p>• <strong>Real Returns:</strong> 5% after inflation</p>
            </div>
            <div>
              <p>• <strong>Withdrawal Rate:</strong> 4% (Trinity Study)</p>
              <p>• <strong>Target Age:</strong> Traditional retirement at 65</p>
              <p>• <strong>Formula:</strong> FIRE Number ÷ (1.05)^years</p>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-2 italic">
            💡 Customize all assumptions in Advanced Options. Learn more in our <Link href="/blog/complete-guide-coast-fire" className="underline hover:text-blue-800">Complete Coast FIRE Guide</Link>.
          </p>
        </div>
      </section>
      
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CoastFireCalculator />
      </section>

      {/* Real-World Examples */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Real Coast FIRE Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="font-medium text-gray-900 mb-2">Sarah, 28 - Software Developer</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$75,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">FIRE Goal (Age 65):</span>
                  <span className="font-medium">$1,200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coast FIRE Number:</span>
                  <span className="font-semibold text-blue-600">$156,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to Coast FIRE:</span>
                  <span className="font-medium">2.8 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Sarah can reach Coast FIRE by 31, then pursue passion projects or part-time work while her investments grow to $1.2M by 65.
              </p>
            </div>

            {/* Example 2 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="font-medium text-gray-900 mb-2">Marcus, 35 - Marketing Manager</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$200,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">FIRE Goal (Age 65):</span>
                  <span className="font-medium">$1,500,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Coast FIRE Number:</span>
                  <span className="font-semibold text-green-600">$320,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to Coast FIRE:</span>
                  <span className="font-medium">3.1 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Marcus is already 62% to Coast FIRE! At 38, he can shift to lower-stress work knowing retirement is secured.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-sm text-amber-800">
              <strong>Pro Tip:</strong> Coast FIRE works best when you're young due to compound growth. A 25-year-old needs only $100,000 invested to have $1.5M at 65 (assuming 7% returns). A 40-year-old needs $276,000 for the same goal.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link 
              href="/blog/complete-guide-coast-fire"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              📖 Read Full Coast FIRE Guide
            </Link>
            <Link 
              href="/blog/fire-for-late-starters"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              🚀 Coast FIRE for Late Starters
            </Link>
            <Link 
              href="/fire-calculator-by-age"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              📊 FIRE by Age Calculator
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Resources */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            📚 Master Your Coast FIRE Strategy - Essential Resources
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Coast FIRE offers unique flexibility by front-loading retirement savings. Learn from our comprehensive guides and real-world examples.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/complete-guide-coast-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-emerald-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-emerald-600 transition-colors line-clamp-2">
                    Complete Guide to Coast FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Master the art of front-loading retirement savings with detailed strategies
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/coast-fire-vs-barista-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-emerald-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Users className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-emerald-600 transition-colors line-clamp-2">
                    Coast FIRE vs Barista FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Compare two popular semi-retirement strategies with real scenarios
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/emergency-funds-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-emerald-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
                  <Shield className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-emerald-600 transition-colors line-clamp-2">
                    Emergency Funds for FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Build resilient safety nets for your coast to FIRE journey
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              href="/blog"
              className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
            >
              View all FIRE guides →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Link to Main FIRE Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/"
          className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
        >
          <div>
            <p className="font-medium text-gray-900">Looking for the full FIRE Calculator?</p>
            <p className="text-sm text-gray-600">
              Calculate your complete path to financial independence with Monte Carlo simulation
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
      
      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CoastFireContent />
      </section>
      
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is Coast FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Coast FIRE is a financial milestone where you've saved enough that compound growth will carry you to full retirement without additional savings. After reaching Coast FIRE, you only need to earn enough to cover current expenses."
                }
              },
              {
                "@type": "Question", 
                "name": "How do I calculate my Coast FIRE number?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Coast FIRE Number = FIRE Number ÷ (1 + real return rate)^years until retirement. For example, if your FIRE number is $1.5M, you're 35, planning to retire at 65, with 5% real returns: $1.5M ÷ (1.05)^30 = $347,000."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between Coast FIRE and Barista FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Coast FIRE means you have enough saved to stop contributing entirely. Barista FIRE means you work part-time (often for health insurance) while your investments grow. Coast FIRE is a more complete milestone."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}