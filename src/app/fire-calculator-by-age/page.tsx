import type { Metadata } from "next";
import StructuredData from "@/components/seo/StructuredData";
import { Calendar, TrendingUp, Target, Clock, ArrowRight, Users, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FIRE Calculator by Age: 20s, 30s, 40s, 50s Strategy Guide | 2025",
  description: "Age-specific FIRE calculator strategies and timelines. Learn optimal savings rates, targets, and approaches for achieving financial independence in your 20s, 30s, 40s, or 50s.",
  keywords: "fire calculator by age, fire in 20s, fire in 30s, fire in 40s, fire in 50s, age specific fire strategy, retirement planning by age",
  openGraph: {
    title: "FIRE Calculator by Age - Customized Strategies for Every Life Stage",
    description: "Discover age-specific FIRE strategies and calculate your path to financial independence based on your current age and life stage.",
    type: "article",
    url: "https://firecalculator.com/fire-calculator-by-age",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "FIRE Calculator by Age Guide"
      }
    ]
  },
  alternates: {
    canonical: "https://firecalculator.com/fire-calculator-by-age"
  }
};

export default function FireCalculatorByAgePage() {
  const ageFAQ = {
    questions: [
      {
        question: "What's the best age to start FIRE?",
        answer: "The best age to start FIRE is as early as possible, ideally in your early 20s. Starting at 22 vs 32 can mean retiring 10+ years earlier due to compound interest. However, it's never too late to start - even beginning FIRE planning in your 40s or 50s can significantly improve your financial situation."
      },
      {
        question: "Can you achieve FIRE starting in your 30s?",
        answer: "Yes, starting FIRE in your 30s is very achievable. You'll typically need higher savings rates (40-60%) compared to someone starting in their 20s, but you likely have higher income to support this. Many successful FIRE practitioners started in their 30s and retired by their 40s or early 50s."
      },
      {
        question: "Is FIRE possible if you start in your 40s?",
        answer: "FIRE is possible starting in your 40s, but requires aggressive saving (50-70% of income) and may mean retiring in your late 50s or early 60s rather than your 40s. Coast FIRE or Barista FIRE are often more realistic targets for 40s starters."
      },
      {
        question: "What savings rate do I need at each age?",
        answer: "Rough guidelines: 20s need 20-40% savings rate for traditional retirement, 30s need 40-60%, 40s need 50-70%, 50s need 60%+ or consider Coast FIRE. Higher percentages needed for earlier retirement."
      },
      {
        question: "Should my FIRE strategy change with age?",
        answer: "Yes, FIRE strategy should adapt with age. 20s can be aggressive with growth, 30s balance growth with stability, 40s may need more conservative approaches, 50s often focus on Coast FIRE or traditional retirement enhancement rather than full early retirement."
      }
    ]
  };

  const breadcrumbData = {
    items: [
      { name: 'Home', url: 'https://firecalculator.com' },
      { name: 'FIRE Calculator by Age', url: 'https://firecalculator.com/fire-calculator-by-age' }
    ]
  };

  return (
    <>
      <StructuredData type="faq" data={ageFAQ} />
      <StructuredData type="breadcrumb" data={breadcrumbData} />
      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Calendar className="w-16 h-16 mx-auto mb-6 text-indigo-200" />
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                FIRE Calculator by Age
              </h1>
              <p className="text-xl sm:text-2xl text-indigo-100 mb-8 max-w-4xl mx-auto">
                Customized FIRE strategies and timelines for every life stage. Calculate your path to financial independence based on your current age.
              </p>
            </div>
          </div>
        </section>

        {/* Age-Specific Strategies */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Starting in Your 20s */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-green-100 rounded-full p-3">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">FIRE in Your 20s</h3>
                  <p className="text-sm text-gray-600">Ages 22-29 • Maximum time advantage</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Key Advantages</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• 40+ years of compound growth</li>
                    <li>• Lower living expenses typically</li>
                    <li>• Career growth potential</li>
                    <li>• Risk tolerance for aggressive investing</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Strategy</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Savings Rate:</p>
                      <p className="text-gray-600">20-40% of income</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Timeline:</p>
                      <p className="text-gray-600">15-25 years to FI</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Best FIRE Type:</p>
                      <p className="text-gray-600">Any - full flexibility</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Investment Focus:</p>
                      <p className="text-gray-600">Growth stocks, index funds</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Action Steps</h4>
                  <ol className="text-sm text-gray-700 space-y-1">
                    <li>1. Start with any amount - even $50/month</li>
                    <li>2. Maximize employer 401k match</li>
                    <li>3. Open Roth IRA for tax-free growth</li>
                    <li>4. Focus on income growth and skill development</li>
                    <li>5. Keep lifestyle inflation minimal</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Example Scenario</h4>
                  <p className="text-xs text-gray-600 mb-2">25-year-old earning $50K, saving 25% ($12.5K/year)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="font-medium">At 45</p>
                      <p className="text-green-600">$1.2M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">FIRE Number</p>
                      <p className="text-blue-600">$1M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Retirement</p>
                      <p className="text-purple-600">Age 43</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Starting in Your 30s */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-100 rounded-full p-3">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">FIRE in Your 30s</h3>
                  <p className="text-sm text-gray-600">Ages 30-39 • Peak earning potential</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Key Advantages</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Higher income than 20s</li>
                    <li>• 25-35 years to compound</li>
                    <li>• Career stability developing</li>
                    <li>• Financial discipline established</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Strategy</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Savings Rate:</p>
                      <p className="text-gray-600">40-60% of income</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Timeline:</p>
                      <p className="text-gray-600">10-20 years to FI</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Best FIRE Type:</p>
                      <p className="text-gray-600">Traditional or Fat FIRE</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Investment Focus:</p>
                      <p className="text-gray-600">Balanced growth portfolio</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Action Steps</h4>
                  <ol className="text-sm text-gray-700 space-y-1">
                    <li>1. Aggressively increase savings rate</li>
                    <li>2. Max out 401k and IRA contributions</li>
                    <li>3. Consider taxable investment accounts</li>
                    <li>4. Optimize taxes and expenses</li>
                    <li>5. Consider real estate investment</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Example Scenario</h4>
                  <p className="text-xs text-gray-600 mb-2">35-year-old earning $80K, saving 50% ($40K/year)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="font-medium">At 50</p>
                      <p className="text-green-600">$1.8M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">FIRE Number</p>
                      <p className="text-blue-600">$1.5M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Retirement</p>
                      <p className="text-purple-600">Age 48</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Starting in Your 40s */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-orange-100 rounded-full p-3">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">FIRE in Your 40s</h3>
                  <p className="text-sm text-gray-600">Ages 40-49 • Catch-up time</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">Key Considerations</h4>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• 15-25 years to compound</li>
                    <li>• Peak earning years</li>
                    <li>• Family financial obligations</li>
                    <li>• Need for aggressive approach</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Strategy</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Savings Rate:</p>
                      <p className="text-gray-600">50-70% of income</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Timeline:</p>
                      <p className="text-gray-600">15-20 years to FI</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Best FIRE Type:</p>
                      <p className="text-gray-600">Coast or Barista FIRE</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Investment Focus:</p>
                      <p className="text-gray-600">Balanced with some bonds</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Action Steps</h4>
                  <ol className="text-sm text-gray-700 space-y-1">
                    <li>1. Use catch-up contributions ($7,500 extra)</li>
                    <li>2. Eliminate all debt aggressively</li>
                    <li>3. Consider Coast FIRE as primary target</li>
                    <li>4. Maximize high-income years</li>
                    <li>5. Plan for healthcare bridge insurance</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Example Scenario</h4>
                  <p className="text-xs text-gray-600 mb-2">45-year-old earning $120K, saving 60% ($72K/year)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="font-medium">At 60</p>
                      <p className="text-green-600">$2.1M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">FIRE Number</p>
                      <p className="text-blue-600">$1.8M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Retirement</p>
                      <p className="text-purple-600">Age 58</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Starting in Your 50s */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-purple-100 rounded-full p-3">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">FIRE in Your 50s</h3>
                  <p className="text-sm text-gray-600">Ages 50-59 • Enhanced traditional retirement</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-900 mb-2">Realistic Goals</h4>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• 10-15 years to traditional retirement</li>
                    <li>• Focus on Coast FIRE achievement</li>
                    <li>• Enhanced retirement lifestyle</li>
                    <li>• Bridge to Medicare at 65</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Recommended Strategy</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-gray-700">Savings Rate:</p>
                      <p className="text-gray-600">60%+ of income</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Timeline:</p>
                      <p className="text-gray-600">10-15 years to FI</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Best FIRE Type:</p>
                      <p className="text-gray-600">Coast FIRE primarily</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Investment Focus:</p>
                      <p className="text-gray-600">Conservative growth</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Action Steps</h4>
                  <ol className="text-sm text-gray-700 space-y-1">
                    <li>1. Maximize catch-up contributions</li>
                    <li>2. Pay off mortgage before retirement</li>
                    <li>3. Plan healthcare transition strategy</li>
                    <li>4. Consider Roth conversions</li>
                    <li>5. Create bridge income plan</li>
                  </ol>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Example Scenario</h4>
                  <p className="text-xs text-gray-600 mb-2">55-year-old earning $150K, saving 70% ($105K/year)</p>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <p className="font-medium">At 65</p>
                      <p className="text-green-600">$2.8M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Coast Target</p>
                      <p className="text-blue-600">$2M</p>
                    </div>
                    <div className="text-center">
                      <p className="font-medium">Coast Achieved</p>
                      <p className="text-purple-600">Age 62</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Links */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Calculate Your Age-Specific FIRE Plan
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link 
                href="/"
                className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-8 h-8 text-blue-600" />
                  <h3 className="font-semibold text-gray-900">Traditional FIRE Calculator</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Calculate your basic FIRE number and timeline based on your current age and savings rate.
                </p>
                <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium group-hover:gap-3 transition-all">
                  Start Calculating
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link 
                href="/coast-fire-calculator"
                className="block p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg border border-emerald-200 hover:border-emerald-300 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                  <h3 className="font-semibold text-gray-900">Coast FIRE Calculator</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Perfect for 40s and 50s starters. Calculate how much you need to coast to traditional retirement.
                </p>
                <span className="inline-flex items-center gap-2 text-emerald-600 text-sm font-medium group-hover:gap-3 transition-all">
                  Calculate Coast FIRE
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>

              <Link 
                href="/barista-fire-calculator"
                className="block p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 hover:border-amber-300 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Users className="w-8 h-8 text-amber-600" />
                  <h3 className="font-semibold text-gray-900">Barista FIRE Calculator</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Ideal for career changers. Calculate semi-retirement with part-time income supplement.
                </p>
                <span className="inline-flex items-center gap-2 text-amber-600 text-sm font-medium group-hover:gap-3 transition-all">
                  Calculate Barista FIRE
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Age-Specific Tips */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Universal FIRE Principles by Age</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Time-Based Advantages
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><strong>Starting at 25:</strong> Can retire by 45 with 25% savings rate</li>
                  <li><strong>Starting at 35:</strong> Can retire by 50 with 50% savings rate</li>
                  <li><strong>Starting at 45:</strong> Can achieve Coast FIRE by 55</li>
                  <li><strong>Starting at 55:</strong> Can enhance traditional retirement significantly</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Age-Agnostic Success Factors
                </h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Start immediately</strong> regardless of amount</li>
                  <li>• <strong>Automate investments</strong> to remove emotion</li>
                  <li>• <strong>Focus on income growth</strong> alongside savings</li>
                  <li>• <strong>Minimize lifestyle inflation</strong> as income rises</li>
                  <li>• <strong>Stay consistent</strong> through market ups and downs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}