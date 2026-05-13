import { Metadata } from 'next';
import CouplesFireCalculator from '@/components/couples-fire/CouplesFireCalculator';
import CouplesFireContent from '@/components/couples-fire/CouplesFireContent';
import StructuredData from '@/components/seo/StructuredData';
import { Heart, Users, TrendingUp, ArrowRight, BookOpen, Shield, Home, Calculator, DollarSign, Target } from 'lucide-react';
import Link from 'next/link';
import { CURRENT_YEAR } from '@/data/site-meta';

export const metadata: Metadata = {
  title: `Couples FIRE Calculator ${CURRENT_YEAR} — Plan Together`,
  description: 'Free FIRE calculator for couples. Combine two incomes, shared expenses, and joint contribution limits into one synchronized retirement plan.',
  openGraph: {
    title: `Couples FIRE Calculator ${CURRENT_YEAR} — Plan Together`,
    description: 'Free FIRE calculator for couples: combine dual incomes, shared expenses, and joint contribution limits.',
    type: 'website',
    url: 'https://financialfirecalculators.com/couples-fire-calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Couples FIRE Calculator ${CURRENT_YEAR}`,
    description: 'Free FIRE calculator for couples: dual incomes, shared expenses, joint contribution limits.',
  },
  alternates: {
    canonical: 'https://financialfirecalculators.com/couples-fire-calculator',
  },
};

export default function CouplesFireCalculatorPage() {
  const calculatorData = {
    name: 'Couples FIRE Calculator',
    url: 'https://financialfirecalculators.com/couples-fire-calculator',
    description:
      'Joint FIRE planning for couples: combine two incomes, shared expenses, and synchronized retirement timelines into one coordinated plan.',
    features: [
      'Joint FIRE Number',
      'Dual-Income Modeling',
      'Combined Tax-Advantaged Limits',
      'Synchronized Timeline Projections',
      'Shared-Expense Optimization',
    ],
  };

  const breadcrumbData = {
    items: [
      { name: 'Home', url: 'https://financialfirecalculators.com' },
      { name: 'Couples FIRE Calculator', url: 'https://financialfirecalculators.com/couples-fire-calculator' },
    ],
  };

  return (
    <>
      <StructuredData type="calculator" data={calculatorData} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-6 h-6" />
            <span className="text-rose-200 text-sm font-medium">FIRE Calculator for Couples</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Plan Financial Independence Together
          </h1>
          <p className="text-base md:text-lg text-rose-100 max-w-2xl leading-relaxed">
            Coordinate dual incomes, optimize shared expenses, and achieve early retirement as a team with synchronized planning.
          </p>
        </div>
      </section>
      
      {/* What Makes Couples FIRE Different - Expanded Explainer */}
      <section className="max-w-4xl mx-auto px-4 -mt-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 md:p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-4">
            What is Couples FIRE? Complete Joint Planning Guide
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Couples FIRE is achieving financial independence together through coordinated planning, dual income optimization, and shared expense management. Partners leverage combined resources to reach FIRE faster while navigating unique challenges like synchronized retirement timing, healthcare coverage gaps, and aligned spending priorities.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex gap-3">
              <div className="p-1.5 bg-rose-100 rounded-md h-fit">
                <Users className="w-4 h-4 text-rose-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">1. Dual Income Power</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Two salaries = 50-70% faster path to FIRE
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-green-100 rounded-md h-fit">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">2. Shared Expenses</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Housing, utilities, food cost 30-40% less per person
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="p-1.5 bg-primary-100 rounded-md h-fit">
                <Heart className="w-4 h-4 text-primary-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-1">3. Tax Advantages</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  MFJ status, double 401(k)s, spousal IRAs
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 p-3 bg-rose-50 rounded-lg border border-rose-200">
            <p className="text-xs text-rose-800">
              <strong>Key Considerations:</strong> Different risk tolerances, career trajectories, family planning impact, inheritance planning, and "yours/mine/ours" account strategies all play crucial roles in couples FIRE success.
            </p>
          </div>
        </div>
      </section>
      
      {/* Assumptions Box - Expanded */}
      <section className="max-w-4xl mx-auto px-4 mt-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-2">Couples FIRE Calculator Assumptions</h3>
          <div className="grid md:grid-cols-2 gap-3 text-xs text-blue-800">
            <div>
              <p>• <strong>Account Structure:</strong> Combined or separate tracking</p>
              <p>• <strong>Tax Filing:</strong> Married filing jointly benefits</p>
              <p>• <strong>Retirement Accounts:</strong> 2x $23K 401(k) limits</p>
            </div>
            <div>
              <p>• <strong>Healthcare:</strong> One partner may work longer</p>
              <p>• <strong>Withdrawal Rate:</strong> 4% (Trinity Study)</p>
              <p>• <strong>Life Planning:</strong> 30+ year retirement horizon</p>
            </div>
          </div>
          <p className="text-xs text-blue-700 mt-2 italic">
            💡 Couples typically reach FIRE 5-7 years faster than singles. Learn strategies in our <Link href="/blog/couples-fire-strategy" className="underline hover:text-blue-800">Couples FIRE Complete Guide</Link>.
          </p>
        </div>
      </section>
      
      {/* Calculator */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CouplesFireCalculator />
      </section>

      {/* Real-World Examples */}
      <section className="max-w-4xl mx-auto px-4 pb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Real Couples FIRE Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-rose-50 to-pink-50">
              <h3 className="font-medium text-gray-900 mb-2">Jake & Maria, 34 & 32 - Tech + Healthcare</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Combined Income:</span>
                  <span className="font-medium">$280,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$850,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">FIRE Goal:</span>
                  <span className="font-semibold text-rose-600">$1,800,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to FIRE:</span>
                  <span className="font-medium">4.2 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 Saving 65% of income. Maria (nurse) will work part-time for health insurance while Jake retires fully at 38. Both max out 401(k)s, backdoor Roths, and HSA.
              </p>
            </div>

            {/* Example 2 */}
            <div className="border border-gray-100 rounded-lg p-4 bg-gradient-to-br from-purple-50 to-indigo-50">
              <h3 className="font-medium text-gray-900 mb-2">Chris & Pat, 28 & 29 - Dual Engineers</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Combined Income:</span>
                  <span className="font-medium">$180,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Savings:</span>
                  <span className="font-medium">$320,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">FIRE Goal:</span>
                  <span className="font-semibold text-purple-600">$1,250,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Years to FIRE:</span>
                  <span className="font-medium">6.8 years</span>
                </div>
              </div>
              <p className="text-xs text-gray-700 mt-3 border-t pt-3">
                💡 No kids planned. House hacking duplex (living in one unit). Plan to travel internationally for 2 years post-FIRE, then settle in LCOL area.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <h4 className="text-sm font-semibold text-yellow-900 mb-2">Couples FIRE Strategies That Work</h4>
            <div className="grid md:grid-cols-2 gap-2 text-xs text-yellow-800">
              <div>
                <p>• <strong>Staggered Retirement:</strong> One works for benefits</p>
                <p>• <strong>Geographic Arbitrage:</strong> Move to LCOL together</p>
                <p>• <strong>House Hacking:</strong> Rent rooms or ADU</p>
              </div>
              <div>
                <p>• <strong>Tax Optimization:</strong> Max all retirement accounts</p>
                <p>• <strong>Expense Sharing:</strong> One car, bulk buying</p>
                <p>• <strong>Side Hustles:</strong> Leverage both skill sets</p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <Link 
              href="/blog/couples-fire-strategy"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              💑 Complete Couples FIRE Guide
            </Link>
            <Link 
              href="/blog/fire-tax-optimization"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              💰 Tax Strategies for Couples
            </Link>
            <Link 
              href="/blog/healthcare-planning-fire"
              className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
            >
              🏥 Healthcare Planning for Two
            </Link>
          </div>
        </div>
      </section>
      
      {/* Related Resources for Couples */}
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-6 border border-rose-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            💕 Master Couples FIRE Together - Essential Resources
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Couples have unique advantages and challenges on the path to FIRE. Learn to optimize your joint journey.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/couples-fire-strategy"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-rose-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-100 rounded-lg group-hover:bg-rose-200 transition-colors">
                  <Heart className="w-4 h-4 text-rose-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-rose-600 transition-colors line-clamp-2">
                    Couples FIRE Strategy
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    Coordinate dual incomes for faster FIRE
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/fire-tax-optimization"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-rose-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-100 rounded-lg group-hover:bg-rose-200 transition-colors">
                  <Shield className="w-4 h-4 text-rose-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-rose-600 transition-colors line-clamp-2">
                    Tax Optimization
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    MFJ strategies and double retirement accounts
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/blog/real-estate-fire"
              className="group bg-white rounded-lg p-4 hover:shadow-md transition-all border border-gray-200 hover:border-rose-200"
            >
              <div className="flex items-start gap-3">
                <div className="p-2 bg-rose-100 rounded-lg group-hover:bg-rose-200 transition-colors">
                  <Home className="w-4 h-4 text-rose-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-gray-900 text-sm group-hover:text-rose-600 transition-colors line-clamp-2">
                    Real Estate FIRE
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    House hacking perfect for couples
                  </p>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="mt-4 text-center">
            <Link 
              href="/blog"
              className="text-sm text-rose-600 hover:text-rose-700 font-medium"
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
            <p className="font-medium text-gray-900">Need an individual FIRE calculator?</p>
            <p className="text-sm text-gray-600">
              Try our traditional single-person FIRE Calculator with Monte Carlo simulation
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
      
      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-8">
        <CouplesFireContent />
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
                "name": "How is FIRE different for couples?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Couples have advantages like dual income, shared expenses, and tax benefits, but must coordinate retirement timing, agree on spending levels, and plan for both partners' healthcare needs."
                }
              },
              {
                "@type": "Question", 
                "name": "Should couples combine finances for FIRE?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most successful FIRE couples combine finances for simplified planning, but maintain transparency. Some keep separate 'fun money' accounts while pooling retirement savings and shared expenses."
                }
              },
              {
                "@type": "Question",
                "name": "What if partners want to retire at different times?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Staggered retirement is common. One partner may retire early while the other continues working for health insurance or to reach specific financial milestones. Plan for both scenarios."
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