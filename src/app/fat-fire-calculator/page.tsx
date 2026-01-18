import { Metadata } from 'next';
import FatFireCalculator from '@/components/fat-fire/FatFireCalculator';
import FatFireContent from '@/components/fat-fire/FatFireContent';
import { Crown, DollarSign, TrendingUp, ArrowRight, BookOpen, Home, Shield, Plane, Wine } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Fat FIRE Calculator - Luxury Retirement Planning | Free Tool',
  description: 'Free Fat FIRE calculator to plan for a luxurious early retirement. Calculate how much you need to maintain an affluent lifestyle without financial constraints.',
  keywords: 'fat fire calculator, luxury retirement calculator, affluent fire, high net worth retirement, premium retirement planning',
  openGraph: {
    title: 'Fat FIRE Calculator - Plan Your Luxury Retirement',
    description: 'Calculate exactly how much you need for a luxurious early retirement with complete financial freedom.',
    type: 'website',
  },
};

export default function FatFireCalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="w-6 h-6" />
            <span className="text-purple-200 text-sm font-medium">Fat FIRE Calculator</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Plan Your Luxury Retirement
          </h1>
          <p className="text-base md:text-lg text-purple-100 max-w-2xl leading-relaxed">
            Calculate how much you need to retire early with an affluent lifestyle, complete financial freedom, and no compromises.
          </p>
        </div>
      </section>
      
      {/* What is Fat FIRE - Expanded Explainer */}
      <section className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            What is Fat FIRE? Complete Luxury Retirement Guide
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Fat FIRE is achieving financial independence with enough wealth to maintain a luxurious lifestyle without financial constraints. This typically means $100,000-$400,000+ in annual spending, requiring $2.5M-$10M+ in invested assets. Fat FIRE practitioners prioritize comfort, convenience, and premium experiences while still retiring decades before traditional age.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="p-1.5 bg-purple-100 rounded-md h-fit">
                <DollarSign className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">1. Premium Spending</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  $100K-400K+ annual budget for luxury lifestyle
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-green-100 rounded-md h-fit">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">2. High Income Required</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Typically $200K-500K+ household income to build wealth
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-primary-100 rounded-md h-fit">
                <Crown className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">3. No Compromises</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  First-class travel, fine dining, premium healthcare
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <p className="text-xs text-purple-800">
              <strong>Fat FIRE Lifestyle:</strong> Private schools for kids, multiple properties, luxury vehicles, country club memberships, $20K+ annual travel budget, charitable giving, and complete financial security.
            </p>
          </div>
        </div>
      </section>
      
      {/* Assumptions Box - Expanded */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Fat FIRE Calculator Assumptions</h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs text-blue-800">
            <div>
              <p>• <strong>Annual Spending:</strong> $100,000-400,000+</p>
              <p>• <strong>FIRE Number:</strong> $2.5M-10M+ typical</p>
              <p>• <strong>Withdrawal Rate:</strong> 3.5% (conservative)</p>
            </div>
            <div>
              <p>• <strong>Expected Returns:</strong> 7% annual</p>
              <p>• <strong>Savings Rate:</strong> 50-70% of income</p>
              <p>• <strong>Time to Fat FIRE:</strong> 10-20 years typical</p>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-2 italic">
            💡 Fat FIRE uses a 3.5% withdrawal rate vs 4% for extra safety margin. Learn why in our <Link href="/blog/lean-fire-vs-fat-fire" className="underline hover:text-blue-800">Lean vs Fat FIRE comparison</Link>.
          </p>
        </div>
      </section>
      
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <FatFireCalculator />
      </section>

      {/* Real-World Examples */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Real Fat FIRE Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-purple-50 to-violet-50">
              <h3 className="font-medium text-gray-900 mb-2">Robert & Emma, 45 - Tech Executives</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Net Worth:</span>
                  <span className="font-medium">$3.2M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Spending Goal:</span>
                  <span className="font-medium">$180,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fat FIRE Number:</span>
                  <span className="font-semibold text-purple-600">$5.1M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to Fat FIRE:</span>
                  <span className="font-medium">4.5 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Dual tech income ($550K combined), maxing out 401(k)s, backdoor Roths, and taxable accounts. Plans: private schools, second home in Hawaii, $30K annual travel.
              </p>
            </div>

            {/* Example 2 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-gold-50 to-amber-50">
              <h3 className="font-medium text-gray-900 mb-2">Victoria, 39 - Investment Banker</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Net Worth:</span>
                  <span className="font-medium">$1.8M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Spending Goal:</span>
                  <span className="font-medium">$250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Fat FIRE Number:</span>
                  <span className="font-semibold text-amber-600">$7.1M</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to Fat FIRE:</span>
                  <span className="font-medium">8 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 $450K base + bonus, saving 75%. Goals: Manhattan penthouse, art collection, philanthropy, business class travel, premium healthcare.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <h4 className="text-sm font-semibold text-purple-900 mb-2">Common Fat FIRE Expenses</h4>
            <div className="grid md:grid-cols-3 gap-2 text-xs text-purple-800">
              <div>
                <p className="font-medium mb-1">🏠 Housing ($50-100K/yr)</p>
                <p>• Multiple properties</p>
                <p>• Property management</p>
                <p>• Maintenance & upgrades</p>
              </div>
              <div>
                <p className="font-medium mb-1">✈️ Travel ($20-50K/yr)</p>
                <p>• Business/first class</p>
                <p>• Luxury hotels</p>
                <p>• Extended trips</p>
              </div>
              <div>
                <p className="font-medium mb-1">🎯 Lifestyle ($30-100K/yr)</p>
                <p>• Fine dining</p>
                <p>• Country clubs</p>
                <p>• Personal services</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link 
              href="/blog/lean-fire-vs-fat-fire"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              👑 Lean vs Fat FIRE Analysis
            </Link>
            <Link 
              href="/blog/fire-tax-optimization"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              📊 Tax Strategies for High Earners
            </Link>
            <Link 
              href="/blog/real-estate-fire"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              🏘️ Real Estate for Fat FIRE
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Resources for Fat FIRE */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            👑 Master Your Fat FIRE Strategy - Essential Resources
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Fat FIRE offers complete financial freedom with luxury. Learn advanced strategies for building substantial wealth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/lean-fire-vs-fat-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-purple-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Crown className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-purple-600 transition-colors line-clamp-2">
                    Lean vs Fat FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Compare luxury vs minimalist retirement paths
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/real-estate-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-purple-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Home className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-purple-600 transition-colors line-clamp-2">
                    Real Estate for FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Build wealth through property investment
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/fire-tax-optimization"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-purple-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                  <Shield className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-purple-600 transition-colors line-clamp-2">
                    Tax Optimization
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Maximize efficiency for high earners
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              href="/blog"
              className="text-sm text-purple-600 hover:text-purple-700 font-medium"
            >
              View all FIRE guides →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Links to Other Calculators */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/lean-fire-calculator"
          className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
        >
          <div>
            <p className="font-medium text-gray-900">Prefer a minimalist approach?</p>
            <p className="text-sm text-gray-600">
              Try our Lean FIRE Calculator for frugal early retirement planning
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
      
      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <FatFireContent />
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
                "name": "What is Fat FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fat FIRE is achieving financial independence with enough wealth to maintain a luxurious lifestyle in retirement, typically requiring $2.5M-$10M+ in assets to support $100K-$400K in annual spending."
                }
              },
              {
                "@type": "Question", 
                "name": "How much do I need for Fat FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fat FIRE typically requires 25-30× your desired annual spending. For $150K/year lifestyle, you'd need $3.75M-$4.5M. Most Fat FIRE seekers target $2.5M minimum."
                }
              },
              {
                "@type": "Question",
                "name": "What's the difference between Fat FIRE and regular FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Regular FIRE targets $40-80K annual spending with $1-2M saved. Fat FIRE targets $100K+ spending with $2.5M+ saved, allowing for luxury travel, dining, and premium experiences."
                }
              }
            ]
          })
        }}
      />
    </main>
  );
}