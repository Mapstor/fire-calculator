import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { Flame, Leaf, Anchor, Coffee, Crown, Heart, ArrowRight, TrendingUp, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FIRE Types Comparison: Lean vs Fat vs Coast vs Barista FIRE | Complete Guide 2025",
  description: "Complete comparison of all FIRE types: Lean FIRE, Fat FIRE, Coast FIRE, Barista FIRE, and Couples FIRE. Compare requirements, timelines, and strategies for each path to financial independence.",
  keywords: "fire types comparison, lean fire vs fat fire, coast fire vs barista fire, fire strategies, financial independence types, early retirement comparison",
  openGraph: {
    title: "Complete FIRE Types Comparison Guide 2025",
    description: "Compare all FIRE strategies: requirements, timelines, and best approaches for each path to financial independence.",
    type: "article",
    url: "https://firecalculator.com/fire-comparison",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FIRE Types Comparison Guide"
      }
    ]
  },
  alternates: {
    canonical: "https://firecalculator.com/fire-comparison"
  }
};

export default function FireComparisonPage() {
  const comparisonFAQ = {
    questions: [
      {
        question: "What are the main differences between FIRE types?",
        answer: "FIRE types differ primarily in target spending levels and timeline. Lean FIRE targets $30K-40K annual spending requiring $750K-1M. Fat FIRE targets $100K+ spending requiring $2.5M+. Coast FIRE focuses on early savings that grow to traditional retirement. Barista FIRE combines part-time work with reduced savings targets."
      },
      {
        question: "Which FIRE type is easiest to achieve?",
        answer: "Coast FIRE is often easiest to achieve because it doesn't require early retirement, just enough early savings to compound to traditional retirement age. Lean FIRE is second easiest due to lower dollar requirements, but requires significant lifestyle changes."
      },
      {
        question: "How much money do you need for each FIRE type?",
        answer: "Lean FIRE: $750K-1M, Traditional FIRE: $1-2M, Fat FIRE: $2.5M+, Coast FIRE: varies by age (earlier = less needed), Barista FIRE: $500K-750K depending on part-time income expectations."
      },
      {
        question: "What's the best FIRE strategy for high earners?",
        answer: "High earners often pursue Fat FIRE or a combination approach: aggressive early saving toward Coast FIRE, then deciding between continuing to Fat FIRE or transitioning to Barista/Traditional FIRE based on lifestyle preferences."
      },
      {
        question: "Can you switch between FIRE types?",
        answer: "Yes, FIRE strategies are flexible. Many people start with Lean or Coast FIRE as stepping stones, then adjust based on changing circumstances, income growth, or lifestyle preferences. The key is building savings momentum early."
      }
    ]
  };

  const breadcrumbData = {
    items: [
      { name: 'Home', url: 'https://firecalculator.com' },
      { name: 'FIRE Comparison', url: 'https://firecalculator.com/fire-comparison' }
    ]
  };

  return (
    <>
      <StructuredData type="faq" data={comparisonFAQ} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-red-600 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Flame className="w-16 h-16 mx-auto mb-6 text-orange-200" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Complete FIRE Types Comparison
              </h1>
              <p className="text-xl sm:text-2xl text-orange-100 mb-8 max-w-4xl mx-auto">
                Compare all paths to Financial Independence: requirements, timelines, and strategies for Lean, Fat, Coast, Barista, and Couples FIRE
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">FIRE Types Quick Comparison</h2>
              <p className="text-gray-600 mt-2">Key metrics and requirements for each FIRE strategy</p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">FIRE Type</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Annual Spending</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Target Amount</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Typical Timeline</th>
                    <th className="text-left py-3 px-6 font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        <span className="font-medium">Lean FIRE</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">$30K - $40K</td>
                    <td className="py-4 px-6 text-gray-700">$750K - $1M</td>
                    <td className="py-4 px-6 text-gray-700">10-15 years</td>
                    <td className="py-4 px-6 text-gray-700">Minimalists, location independent</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Flame className="w-5 h-5 text-orange-600" />
                        <span className="font-medium">Traditional FIRE</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">$40K - $80K</td>
                    <td className="py-4 px-6 text-gray-700">$1M - $2M</td>
                    <td className="py-4 px-6 text-gray-700">15-20 years</td>
                    <td className="py-4 px-6 text-gray-700">Middle-class lifestyle maintenance</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Crown className="w-5 h-5 text-purple-600" />
                        <span className="font-medium">Fat FIRE</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">$100K+</td>
                    <td className="py-4 px-6 text-gray-700">$2.5M+</td>
                    <td className="py-4 px-6 text-gray-700">20-25+ years</td>
                    <td className="py-4 px-6 text-gray-700">High earners, luxury lifestyle</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Anchor className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">Coast FIRE</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">Current lifestyle</td>
                    <td className="py-4 px-6 text-gray-700">Varies by age</td>
                    <td className="py-4 px-6 text-gray-700">5-10 years to coast</td>
                    <td className="py-4 px-6 text-gray-700">Young savers, career flexibility</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Coffee className="w-5 h-5 text-amber-600" />
                        <span className="font-medium">Barista FIRE</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">$40K - $60K</td>
                    <td className="py-4 px-6 text-gray-700">$500K - $750K</td>
                    <td className="py-4 px-6 text-gray-700">12-18 years</td>
                    <td className="py-4 px-6 text-gray-700">Career changers, healthcare needs</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <Heart className="w-5 h-5 text-rose-600" />
                        <span className="font-medium">Couples FIRE</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-gray-700">$50K - $120K</td>
                    <td className="py-4 px-6 text-gray-700">$1.25M - $3M</td>
                    <td className="py-4 px-6 text-gray-700">10-20 years</td>
                    <td className="py-4 px-6 text-gray-700">Dual income households</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Comparisons */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Detailed FIRE Strategy Analysis</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Lean FIRE */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Lean FIRE Strategy</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Philosophy</h4>
                  <p className="text-gray-700 text-sm">Achieve financial independence through frugal living and minimal expenses, typically spending $30K-40K annually.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• $750K - $1M invested assets</li>
                    <li>• High savings rate (50-70%)</li>
                    <li>• Geographic arbitrage often needed</li>
                    <li>• Frugal lifestyle commitment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pros & Cons</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-medium text-green-700">Pros:</p>
                      <ul className="text-green-600 space-y-1">
                        <li>• Fastest to achieve</li>
                        <li>• Lower stress lifestyle</li>
                        <li>• Location flexibility</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Cons:</p>
                      <ul className="text-red-600 space-y-1">
                        <li>• Limited spending flexibility</li>
                        <li>• Healthcare concerns</li>
                        <li>• Social limitations</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/lean-fire-calculator"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Calculate Lean FIRE
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Fat FIRE */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-8 h-8 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">Fat FIRE Strategy</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Philosophy</h4>
                  <p className="text-gray-700 text-sm">Maintain luxury lifestyle in retirement with $100K+ annual spending and no financial constraints.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• $2.5M+ invested assets</li>
                    <li>• High income ($150K+)</li>
                    <li>• Sustained savings rate (30-50%)</li>
                    <li>• Tax optimization strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pros & Cons</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-medium text-green-700">Pros:</p>
                      <ul className="text-green-600 space-y-1">
                        <li>• No spending restrictions</li>
                        <li>• Luxury lifestyle</li>
                        <li>• Large safety buffer</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Cons:</p>
                      <ul className="text-red-600 space-y-1">
                        <li>• Requires high income</li>
                        <li>• Longest timeline</li>
                        <li>• Market risk exposure</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/fat-fire-calculator"
                  className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                >
                  Calculate Fat FIRE
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Coast FIRE */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Anchor className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Coast FIRE Strategy</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Philosophy</h4>
                  <p className="text-gray-700 text-sm">Save aggressively early, then stop saving and let compound growth carry you to traditional retirement.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Age-dependent target amount</li>
                    <li>• Early high savings rate</li>
                    <li>• Continued income until 65</li>
                    <li>• Long-term perspective</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pros & Cons</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-medium text-green-700">Pros:</p>
                      <ul className="text-green-600 space-y-1">
                        <li>• Career flexibility</li>
                        <li>• Reduced savings pressure</li>
                        <li>• Compound growth power</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Cons:</p>
                      <ul className="text-red-600 space-y-1">
                        <li>• No early retirement</li>
                        <li>• Continued work required</li>
                        <li>• Career dependency</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/coast-fire-calculator"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Calculate Coast FIRE
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Barista FIRE */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-amber-600" />
                <h3 className="text-xl font-bold text-gray-900">Barista FIRE Strategy</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Core Philosophy</h4>
                  <p className="text-gray-700 text-sm">Semi-retirement with part-time work covering some expenses while investments cover the rest.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• $500K - $750K invested assets</li>
                    <li>• Part-time income ($15K-30K)</li>
                    <li>• Health insurance plan</li>
                    <li>• Flexible work options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pros & Cons</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-medium text-green-700">Pros:</p>
                      <ul className="text-green-600 space-y-1">
                        <li>• Lower savings target</li>
                        <li>• Career transition</li>
                        <li>• Healthcare benefits</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-red-700">Cons:</p>
                      <ul className="text-red-600 space-y-1">
                        <li>• Still working</li>
                        <li>• Income dependency</li>
                        <li>• Limited free time</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <Link 
                  href="/barista-fire-calculator"
                  className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-700 transition-colors"
                >
                  Calculate Barista FIRE
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-4 text-blue-600" />
              How to Choose Your FIRE Strategy
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Consider Your Income</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• <strong>Under $75K:</strong> Lean or Coast FIRE</li>
                  <li>• <strong>$75K-150K:</strong> Traditional or Barista FIRE</li>
                  <li>• <strong>Over $150K:</strong> Fat FIRE possible</li>
                  <li>• <strong>Dual income:</strong> Couples FIRE optimal</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Assess Your Lifestyle</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• <strong>Minimalist:</strong> Lean FIRE ideal</li>
                  <li>• <strong>Current spending:</strong> Traditional FIRE</li>
                  <li>• <strong>High spender:</strong> Fat FIRE required</li>
                  <li>• <strong>Love your work:</strong> Coast FIRE</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">Timeline Preferences</h3>
                <ul className="text-sm text-gray-700 space-y-1 text-left">
                  <li>• <strong>ASAP:</strong> Lean FIRE (10-15 years)</li>
                  <li>• <strong>Moderate:</strong> Traditional (15-20 years)</li>
                  <li>• <strong>Patient:</strong> Fat FIRE (20+ years)</li>
                  <li>• <strong>Flexible:</strong> Barista or Coast</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3 text-center">Pro Tip: Hybrid Approaches</h3>
              <p className="text-gray-700 text-center">
                Most successful FIRE practitioners use hybrid approaches, starting with Coast FIRE targets, 
                then deciding whether to push toward traditional, lean, or fat FIRE based on life circumstances.
                The key is starting with aggressive savings early to build momentum and options.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}