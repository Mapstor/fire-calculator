import { Metadata } from 'next';
import LeanFireCalculator from '@/components/lean-fire/LeanFireCalculator';
import LeanFireContent from '@/components/lean-fire/LeanFireContent';
import StructuredData from '@/components/seo/StructuredData';
import { Leaf, TrendingDown, DollarSign, ArrowRight, Home, MapPin, BookOpen, Users, Shield } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lean FIRE Calculator - Minimal Retirement Planning | Free Tool',
  description: 'Free Lean FIRE calculator for minimalist early retirement. Calculate how to achieve financial independence with frugal living on $40K or less per year.',
  keywords: 'lean fire calculator, frugal retirement, minimalist fire, low cost retirement, budget retirement planning',
  openGraph: {
    title: 'Lean FIRE Calculator - Achieve Freedom Through Frugality',
    description: 'Calculate your path to early retirement with minimal expenses and maximum freedom.',
    type: 'website',
    url: 'https://financialfirecalculators.com/lean-fire-calculator',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lean FIRE Calculator - Minimal Retirement Planning'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lean FIRE Calculator - Achieve Freedom Through Frugality',
    description: 'Calculate your path to early retirement with minimal expenses and maximum freedom.',
    images: ['/og-image.png']
  },
  alternates: {
    canonical: 'https://financialfirecalculators.com/lean-fire-calculator'
  }
};

export default function LeanFireCalculatorPage() {
  const calculatorData = {
    name: 'Lean FIRE Calculator',
    url: 'https://financialfirecalculators.com/lean-fire-calculator',
    description: 'Calculate your path to early retirement with minimal expenses through Lean FIRE strategy',
    features: [
      'Lean FIRE Number Calculation',
      'Minimal Expense Planning',
      'Frugal Retirement Strategy',
      'Budget-Friendly FIRE Path',
      'Low-Cost Living Analysis'
    ]
  };

  const breadcrumbData = {
    items: [
      { name: 'Home', url: 'https://financialfirecalculators.com' },
      { name: 'Lean FIRE Calculator', url: 'https://financialfirecalculators.com/lean-fire-calculator' }
    ]
  };

  return (
    <>
      <StructuredData type="calculator" data={calculatorData} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Leaf className="w-6 h-6" />
            <span className="text-green-200 text-sm font-medium">Lean FIRE Calculator</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Achieve Freedom Through Frugality
          </h1>
          <p className="text-base md:text-lg text-green-100 max-w-2xl leading-relaxed">
            Calculate your path to early retirement with minimalist living, typically requiring $1M or less for financial independence.
          </p>
        </div>
      </section>
      
      {/* What is Lean FIRE - Expanded Explainer */}
      <section className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            What is Lean FIRE? Complete Minimalist Strategy
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Lean FIRE is achieving financial independence with minimal annual expenses, typically $40,000 or less per year. This approach requires a smaller portfolio (usually $750K-$1M) compared to traditional FIRE, making early retirement accessible faster through frugal living, geographic arbitrage, and focusing on experiences over material possessions.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="p-1.5 bg-green-100 rounded-md h-fit">
                <TrendingDown className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">1. Minimize Expenses</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Live on $30K-40K/year through mindful consumption
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-blue-100 rounded-md h-fit">
                <DollarSign className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">2. Smaller Portfolio</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Target $750K-$1M vs $1.5M+ for traditional FIRE
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-primary-100 rounded-md h-fit">
                <Leaf className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">3. Intentional Living</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Prioritize value, relationships, and experiences
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
            <p className="text-xs text-green-800">
              <strong>Geographic Arbitrage:</strong> Many Lean FIRE achievers relocate to lower cost-of-living areas or countries. Popular destinations include Southeast Asia, Central America, and rural U.S. regions where $40K goes much further.
            </p>
          </div>
        </div>
      </section>
      
      {/* Assumptions Box - Expanded */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Lean FIRE Calculator Assumptions</h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs text-blue-800">
            <div>
              <p>• <strong>Annual Spending:</strong> $30,000-40,000 max</p>
              <p>• <strong>FIRE Number:</strong> $750,000-1,000,000</p>
              <p>• <strong>Housing:</strong> Often rent-free or low-cost</p>
            </div>
            <div>
              <p>• <strong>Withdrawal Rate:</strong> 4% (Trinity Study)</p>
              <p>• <strong>Returns:</strong> 7% annual (S&P 500 historical)</p>
              <p>• <strong>Healthcare:</strong> ACA subsidies or travel insurance</p>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-2 italic">
            💡 Lean FIRE typically means retiring 5-10 years earlier than traditional FIRE. Learn strategies in our <Link href="/blog/lean-fire-complete-guide" className="underline hover:text-blue-800">Complete Lean FIRE Guide</Link>.
          </p>
        </div>
      </section>
      
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <LeanFireCalculator />
      </section>

      {/* Real-World Examples */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Real Lean FIRE Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-green-50 to-emerald-50">
              <h3 className="font-medium text-gray-900 mb-2">Alex, 32 - Remote Developer</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$650,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Expenses:</span>
                  <span className="font-medium">$32,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lean FIRE Number:</span>
                  <span className="font-semibold text-green-600">$800,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to Lean FIRE:</span>
                  <span className="font-medium">1.5 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Alex lives in rural Tennessee, grows food, and plans to travel internationally in retirement where USD goes further.
              </p>
            </div>

            {/* Example 2 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="font-medium text-gray-900 mb-2">Maya, 29 - Teacher</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$380,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual Expenses:</span>
                  <span className="font-medium">$28,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lean FIRE Number:</span>
                  <span className="font-semibold text-blue-600">$700,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to Lean FIRE:</span>
                  <span className="font-medium">3.8 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Maya house hacks (rents rooms), bikes everywhere, and plans to teach English abroad part-time after FIRE.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="text-sm font-semibold text-yellow-900 mb-2">Common Lean FIRE Strategies</h4>
            <div className="grid md:grid-cols-2 gap-2 text-xs text-yellow-800">
              <div>
                <p>• <strong>House Hacking:</strong> Eliminate housing costs</p>
                <p>• <strong>Car-Free Living:</strong> Bike/walk/public transit</p>
                <p>• <strong>Meal Prep:</strong> $200-300/month food budget</p>
              </div>
              <div>
                <p>• <strong>Travel Rewards:</strong> Free flights via churning</p>
                <p>• <strong>DIY Everything:</strong> Repairs, haircuts, etc.</p>
                <p>• <strong>Free Entertainment:</strong> Libraries, nature, community</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link 
              href="/blog/lean-fire-complete-guide"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              🌿 Complete Lean FIRE Guide
            </Link>
            <Link 
              href="/blog/geographic-arbitrage"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              🗺️ Geographic Arbitrage Strategies
            </Link>
            <Link 
              href="/blog/lean-vs-fat-fire"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              ⚖️ Lean vs Fat FIRE Comparison
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Resources */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            🌿 Master Lean FIRE Living - Essential Resources
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Lean FIRE proves that financial freedom doesn't require millions. Learn how to maximize happiness while minimizing expenses.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/lean-fire-complete-guide"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-green-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <BookOpen className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                    Complete Lean FIRE Guide
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Master frugal living without sacrificing happiness
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/geographic-arbitrage"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-green-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <MapPin className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                    Geographic Arbitrage
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Best locations for Lean FIRE lifestyle
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/minimalist-fire-strategies"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-green-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                  <Home className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-green-600 transition-colors line-clamp-2">
                    Minimalist FIRE Strategies
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Simplify your way to early retirement
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              href="/blog"
              className="text-sm text-green-600 hover:text-green-700 font-medium"
            >
              View all FIRE guides →
            </Link>
          </div>
        </div>
      </section>
      
      {/* Links to Other Calculators */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <Link 
          href="/fat-fire-calculator"
          className="flex items-center justify-between p-4 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors group"
        >
          <div>
            <p className="font-medium text-gray-900">Prefer a more comfortable retirement?</p>
            <p className="text-sm text-gray-600">
              Try our Fat FIRE Calculator for luxury retirement planning
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
      
      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <LeanFireContent />
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
                "name": "What is Lean FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Lean FIRE is achieving financial independence with minimal expenses, typically living on $40,000 or less per year, requiring around $1 million in invested assets using the 4% rule."
                }
              },
              {
                "@type": "Question", 
                "name": "How much do I need for Lean FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most Lean FIRE practitioners target $750K-$1M in invested assets to support $30K-$40K in annual spending. The exact amount depends on your specific expenses and location."
                }
              },
              {
                "@type": "Question",
                "name": "Is Lean FIRE sustainable long-term?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, with proper planning. Key factors include geographic arbitrage, maintaining good health, having an emergency fund, and being flexible with spending during market downturns."
                }
              }
            ]
          })
        }}
      />
    </main>
    </>
  );
}