import { Metadata } from 'next';
import BaristaFireCalculator from '@/components/barista-fire/BaristaFireCalculator';
import BaristaFireContent from '@/components/barista-fire/BaristaFireContent';
import { Coffee, Clock, Heart, ArrowRight, BookOpen, Users, Shield, Calculator, TrendingUp, DollarSign } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Barista FIRE Calculator - Part-Time Work to Early Retirement | Free Tool',
  description: 'Free Barista FIRE calculator to find when you can switch to part-time work while maintaining health insurance. Calculate your Barista FI number and plan your transition.',
  keywords: 'barista fire calculator, barista fi calculator, part time fire, lean fire calculator, semi retirement calculator, health insurance retirement',
  openGraph: {
    title: 'Barista FIRE Calculator - Find Your Part-Time Freedom Number',
    description: 'Calculate when you can switch to part-time work and still retire early with health insurance covered.',
    type: 'website',
  },
};

export default function BaristaFireCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-800 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Coffee className="w-6 h-6" />
            <span className="text-amber-200 text-sm font-medium">Barista FIRE Calculator</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Calculate Your Part-Time Freedom Number
          </h1>
          <p className="text-base md:text-lg text-amber-100 max-w-2xl leading-relaxed">
            Determine how much you need to switch to part-time work while maintaining benefits and still achieving early retirement.
          </p>
        </div>
      </section>
      
      {/* What is Barista FIRE - Expanded Explainer */}
      <section className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            What is Barista FIRE? Complete Strategy Guide
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Barista FIRE is a semi-retirement strategy where you save enough to partially fund your retirement, then transition to part-time work (often at companies with good benefits like Starbucks) to cover living expenses and health insurance while your portfolio continues growing. This approach bridges the gap between early retirement and Medicare eligibility at 65.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="p-1.5 bg-amber-100 rounded-md h-fit">
                <Clock className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">1. Build Base Portfolio</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Save 50-70% of your FIRE number through aggressive saving
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-green-100 rounded-md h-fit">
                <Coffee className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">2. Part-Time Transition</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Work 20-30 hours/week for benefits and spending money
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-primary-100 rounded-md h-fit">
                <Heart className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">3. Full Retirement</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Retire fully when portfolio reaches FIRE number or at 65
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-xs text-amber-800">
              <strong>Why "Barista"?</strong> Starbucks famously offers health insurance to employees working 20+ hours/week. Other companies like Trader Joe's, REI, Costco, and UPS offer similar benefits for part-timers.
            </p>
          </div>
        </div>
      </section>
      
      {/* Assumptions Box - Expanded */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Calculator Assumptions & Methodology</h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs text-blue-800">
            <div>
              <p>• <strong>Part-Time Income:</strong> $2,000-3,000/month typical</p>
              <p>• <strong>Health Insurance Value:</strong> $500-1,000/month</p>
              <p>• <strong>Portfolio Target:</strong> 50-70% of full FIRE number</p>
            </div>
            <div>
              <p>• <strong>Expected Returns:</strong> 7% annual (historical S&P 500)</p>
              <p>• <strong>Inflation:</strong> 3% (Federal Reserve target)</p>
              <p>• <strong>Withdrawal Rate:</strong> 4% (Trinity Study)</p>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-2 italic">
            💡 Barista FIRE typically requires $400,000-600,000 vs $1M+ for full FIRE. Learn more in our <Link href="/blog/coast-fire-vs-barista-fire" className="underline hover:text-blue-800">Barista vs Coast FIRE comparison</Link>.
          </p>
        </div>
      </section>
      
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <BaristaFireCalculator />
      </section>

      {/* Real-World Examples */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Real Barista FIRE Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-amber-50 to-orange-50">
              <h3 className="font-medium text-gray-900 mb-2">Jennifer, 38 - Marketing Director</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$450,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Full FIRE Goal:</span>
                  <span className="font-medium">$1,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Barista FIRE Number:</span>
                  <span className="font-semibold text-amber-600">$500,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Part-Time Income Needed:</span>
                  <span className="font-medium">$2,500/month</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Jennifer can reach Barista FIRE in 1 year, then work 25 hrs/week at a bookstore she loves while her portfolio grows to $1M by age 50.
              </p>
            </div>

            {/* Example 2 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-green-50 to-teal-50">
              <h3 className="font-medium text-gray-900 mb-2">David & Lisa, 42 - Dual Income</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$600,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Full FIRE Goal:</span>
                  <span className="font-medium">$1,500,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Barista FIRE Number:</span>
                  <span className="font-semibold text-green-600">Already Achieved!</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Combined Part-Time:</span>
                  <span className="font-medium">$4,000/month</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 This couple can both switch to part-time NOW. One works at REI (outdoor passion), the other freelances. Health insurance through REI.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h4 className="text-sm font-semibold text-primary-900 mb-2">Popular Part-Time Jobs with Benefits</h4>
            <div className="grid md:grid-cols-2 gap-2 text-xs text-primary-800">
              <div>
                <p>• <strong>Starbucks:</strong> 20 hrs/week for full benefits</p>
                <p>• <strong>Trader Joe's:</strong> Excellent health coverage</p>
                <p>• <strong>REI:</strong> Outdoor gear discounts + benefits</p>
              </div>
              <div>
                <p>• <strong>Costco:</strong> High hourly wage + benefits</p>
                <p>• <strong>UPS:</strong> Strong union benefits</p>
                <p>• <strong>Apple Retail:</strong> Tech benefits + stock</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link 
              href="/blog/coast-fire-vs-barista-fire"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              📊 Barista vs Coast FIRE Analysis
            </Link>
            <Link 
              href="/blog/health-insurance-early-retirement"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              🏥 Healthcare Before Medicare Guide
            </Link>
            <Link 
              href="/blog/part-time-fire-strategies"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              💼 Best Part-Time FIRE Jobs
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Resources */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ☕ Master Your Barista FIRE Strategy - Essential Resources
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Barista FIRE offers the perfect balance between financial security and lifestyle flexibility. Learn from our comprehensive guides.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/coast-fire-vs-barista-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-amber-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <Calculator className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-2">
                    Barista vs Coast FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Compare two popular semi-retirement strategies
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/health-insurance-early-retirement"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-amber-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <Heart className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-2">
                    Healthcare Before Medicare
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Navigate health insurance options for early retirees
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/part-time-fire-strategies"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-amber-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-colors">
                  <DollarSign className="w-4 h-4 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-amber-600 transition-colors line-clamp-2">
                    Best Part-Time FIRE Jobs
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Top employers offering benefits to part-timers
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              href="/blog"
              className="text-sm text-amber-600 hover:text-amber-700 font-medium"
            >
              View all FIRE guides →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Links to Other Calculators */}
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
        <BaristaFireContent />
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
                "name": "What is Barista FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Barista FIRE is a strategy where you save enough to partially fund retirement, then work part-time (often at places like Starbucks) for health insurance and supplemental income while your investments continue growing."
                }
              },
              {
                "@type": "Question", 
                "name": "How is Barista FIRE different from Coast FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Coast FIRE means you have enough saved to stop contributing entirely and still retire at traditional age. Barista FIRE means working part-time for benefits and income while your smaller portfolio grows."
                }
              },
              {
                "@type": "Question",
                "name": "How much do I need for Barista FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Typically 50-70% of your full FIRE number, depending on your part-time income. The calculator helps determine the exact amount based on your expenses and part-time earning potential."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}