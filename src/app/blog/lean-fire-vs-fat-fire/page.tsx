'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calculator, TrendingUp, Home, Car, Plane, Coffee, Heart, ShoppingBag, Users, DollarSign, PiggyBank, Target, AlertCircle, CheckCircle } from "lucide-react";
import { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// export const metadata: Metadata = {
//   title: "Lean FIRE vs Fat FIRE: Which Strategy Fits Your Lifestyle? | FIRE Calculator",
//   description: "Detailed comparison of Lean FIRE vs Fat FIRE strategies. Learn the differences, calculate your numbers, and choose the right path to financial independence.",
//   keywords: "lean fire vs fat fire, fire calculator comparison, lean fire number, fat fire lifestyle, fire strategy comparison",
//   openGraph: {
//     title: "Lean FIRE vs Fat FIRE: Complete Comparison Guide",
//     description: "Compare minimum vs luxury retirement approaches with calculator examples and real numbers.",
//     type: "article",
//   },
// };

const comparisonData = [
  { category: 'Annual Expenses', lean: 40000, fat: 150000, traditional: 70000 },
  { category: 'FIRE Number', lean: 1000000, fat: 3750000, traditional: 1750000 },
  { category: 'Monthly Budget', lean: 3333, fat: 12500, traditional: 5833 },
];

const timelineData = [
  { age: 25, lean: 50000, fat: 50000 },
  { age: 30, lean: 250000, fat: 200000 },
  { age: 35, lean: 500000, fat: 500000 },
  { age: 40, lean: 850000, fat: 1000000 },
  { age: 45, lean: 1000000, fat: 1800000 },
  { age: 50, lean: 1000000, fat: 2800000 },
  { age: 55, lean: 1000000, fat: 3750000 },
];

const lifestyleBreakdown = [
  { category: 'Housing', lean: 1000, fat: 4000, icon: Home },
  { category: 'Food', lean: 400, fat: 1500, icon: Coffee },
  { category: 'Transportation', lean: 300, fat: 1200, icon: Car },
  { category: 'Healthcare', lean: 300, fat: 800, icon: Heart },
  { category: 'Entertainment', lean: 200, fat: 1500, icon: Users },
  { category: 'Travel', lean: 133, fat: 2000, icon: Plane },
  { category: 'Shopping', lean: 200, fat: 1500, icon: ShoppingBag },
  { category: 'Savings/Other', lean: 800, fat: 0, icon: PiggyBank },
];

const savingsRateData = [
  { income: 50000, lean: 30, traditional: 15, fat: 5 },
  { income: 75000, lean: 45, traditional: 30, fat: 15 },
  { income: 100000, lean: 60, traditional: 45, fat: 30 },
  { income: 150000, lean: 70, traditional: 60, fat: 45 },
  { income: 200000, lean: 75, traditional: 70, fat: 60 },
];

export default function LeanVsFatFireArticle() {
  const [selectedStrategy, setSelectedStrategy] = useState<'lean' | 'fat' | 'traditional'>('traditional');

  const strategyColors = {
    lean: '#10b981',
    fat: '#9333ea',
    traditional: '#f97316'
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <span>January 17, 2025</span>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Comparison</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Lean FIRE vs Fat FIRE: Which Strategy Fits Your Lifestyle?
          </h1>
          <p className="text-xl text-gray-600">
            A comprehensive comparison of minimum vs luxury retirement approaches with real numbers, 
            calculator examples, and lifestyle considerations for each FIRE strategy.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              The Financial Independence, Retire Early (FIRE) movement isn't one-size-fits-all. Two of the most 
              popular—and contrasting—approaches are Lean FIRE and Fat FIRE. These strategies represent opposite 
              ends of the retirement lifestyle spectrum: one prioritizes frugality and minimalism, while the other 
              emphasizes comfort and luxury.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Understanding the differences between Lean FIRE and Fat FIRE is crucial for planning your path to 
              financial independence. This comprehensive guide breaks down both strategies with real numbers, 
              detailed comparisons, and interactive calculators to help you determine which approach aligns with 
              your values, goals, and desired lifestyle.
            </p>

            {/* Quick Calculator Links */}
            <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Try Our Calculators</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/lean-fire-calculator" className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lean FIRE Calculator</h4>
                    <p className="text-sm text-gray-600">Plan your minimalist retirement</p>
                  </div>
                </Link>
                <Link href="/fat-fire-calculator" className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
                  <span className="text-2xl">👑</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fat FIRE Calculator</h4>
                    <p className="text-sm text-gray-600">Design your luxury retirement</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Visual Comparison Chart */}
          <section className="mb-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Numbers: Side-by-Side Comparison</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">FIRE Numbers Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="lean" fill="#10b981" name="Lean FIRE" />
                  <Bar dataKey="traditional" fill="#f97316" name="Traditional FIRE" />
                  <Bar dataKey="fat" fill="#9333ea" name="Fat FIRE" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🌿</span>
                  <h3 className="text-lg font-semibold text-green-900">Lean FIRE</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-green-800"><strong>Annual Expenses:</strong> $40,000</p>
                  <p className="text-green-800"><strong>FIRE Number:</strong> $1,000,000</p>
                  <p className="text-green-800"><strong>Monthly Budget:</strong> $3,333</p>
                  <p className="text-green-800"><strong>Withdrawal Rate:</strong> 4%</p>
                </div>
              </div>
              
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🔥</span>
                  <h3 className="text-lg font-semibold text-orange-900">Traditional FIRE</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-orange-800"><strong>Annual Expenses:</strong> $70,000</p>
                  <p className="text-orange-800"><strong>FIRE Number:</strong> $1,750,000</p>
                  <p className="text-orange-800"><strong>Monthly Budget:</strong> $5,833</p>
                  <p className="text-orange-800"><strong>Withdrawal Rate:</strong> 4%</p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">👑</span>
                  <h3 className="text-lg font-semibold text-purple-900">Fat FIRE</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-purple-800"><strong>Annual Expenses:</strong> $150,000</p>
                  <p className="text-purple-800"><strong>FIRE Number:</strong> $3,750,000</p>
                  <p className="text-purple-800"><strong>Monthly Budget:</strong> $12,500</p>
                  <p className="text-purple-800"><strong>Withdrawal Rate:</strong> 4%</p>
                </div>
              </div>
            </div>
          </section>

          {/* What is Lean FIRE? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Lean FIRE?</h2>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Lean FIRE represents the minimalist approach to financial independence. Practitioners aim to retire 
              with annual expenses typically under $40,000 for individuals or $60,000 for couples. This strategy 
              requires a FIRE number of approximately $1 million to $1.5 million, following the standard 4% withdrawal rule.
            </p>

            <div className="bg-green-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Lean FIRE Lifestyle Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-green-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Modest housing (renting or small home ownership)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Home-cooked meals with occasional dining out</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Used or older reliable vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Budget travel and camping</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>DIY approach to maintenance and repairs</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-3">Trade-offs:</h4>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Limited discretionary spending</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Fewer luxury experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Geographic constraints (LCOL areas)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Limited buffer for unexpected expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>May need to return to work if markets decline</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Lean FIRE Works Best For</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Minimalists:</strong> Those who find joy in simplicity and reject consumerism</li>
              <li><strong>Young retirees:</strong> People wanting to escape the workforce ASAP, even with trade-offs</li>
              <li><strong>Geographic arbitrageurs:</strong> Individuals willing to relocate to low-cost areas or countries</li>
              <li><strong>Environmental advocates:</strong> Those prioritizing sustainability over consumption</li>
              <li><strong>Single individuals or couples without children:</strong> Lower expenses are easier to maintain</li>
            </ul>
          </section>

          {/* What is Fat FIRE? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Fat FIRE?</h2>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Fat FIRE represents the luxury approach to financial independence, where retirees maintain or even 
              enhance their pre-retirement lifestyle. Annual expenses typically range from $100,000 to $200,000+, 
              requiring a FIRE number of $2.5 million to $5 million or more.
            </p>

            <div className="bg-purple-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Fat FIRE Lifestyle Characteristics</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-purple-800 mb-3">What's Included:</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Spacious home in desirable location</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Regular fine dining and entertainment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>New or luxury vehicles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>International travel in comfort</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Private schools and premium healthcare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Country club memberships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Generous gifting and charitable donations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-purple-800 mb-3">Requirements:</h4>
                  <ul className="space-y-2 text-purple-700">
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>High income during accumulation phase ($150k+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Longer accumulation timeline (15-25+ years)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Aggressive savings rate (50-70%)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Tax optimization strategies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span>Multiple income streams often necessary</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Who Fat FIRE Works Best For</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>High earners:</strong> Professionals in tech, medicine, law, or business with six-figure incomes</li>
              <li><strong>Families with children:</strong> Those wanting private education and enrichment opportunities</li>
              <li><strong>Travel enthusiasts:</strong> People who prioritize experiences and comfort while traveling</li>
              <li><strong>Risk-averse individuals:</strong> Those wanting substantial financial buffers</li>
              <li><strong>Philanthropists:</strong> People who want to maintain charitable giving in retirement</li>
            </ul>
          </section>

          {/* Monthly Budget Breakdown */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Monthly Budget Breakdown</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Monthly Spending by Category</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedStrategy('lean')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedStrategy === 'lean' 
                        ? 'bg-green-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Lean FIRE
                  </button>
                  <button 
                    onClick={() => setSelectedStrategy('fat')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedStrategy === 'fat' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Fat FIRE
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {lifestyleBreakdown.map((item) => {
                    const Icon = item.icon;
                    const amount = selectedStrategy === 'lean' ? item.lean : item.fat;
                    const total = selectedStrategy === 'lean' ? 3333 : 12500;
                    const percentage = (amount / total * 100).toFixed(1);
                    
                    return (
                      <div key={item.category} className="flex items-center gap-3">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <Icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-900">{item.category}</span>
                            <span className="text-sm font-semibold text-gray-900">${amount.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="h-2 rounded-full transition-all duration-500"
                              style={{ 
                                width: `${percentage}%`,
                                backgroundColor: selectedStrategy === 'lean' ? '#10b981' : '#9333ea'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">
                      ${selectedStrategy === 'lean' ? '3,333' : '12,500'}
                    </h4>
                    <p className="text-gray-600">Monthly Budget</p>
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Annual:</strong> ${selectedStrategy === 'lean' ? '40,000' : '150,000'}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        <strong>FIRE Number:</strong> ${selectedStrategy === 'lean' ? '1,000,000' : '3,750,000'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Timeline Comparison */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline to FIRE: Real Examples</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Growth Comparison</h3>
              <p className="text-sm text-gray-600 mb-4">
                Assuming $75,000 income, 7% returns, different savings rates
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={timelineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                  <YAxis 
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => value ? `$${(value / 1000000).toFixed(1)}M` : ''}
                  />
                  <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="lean" 
                    stroke="#10b981" 
                    strokeWidth={2}
                    name="Lean FIRE ($1M target)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="fat" 
                    stroke="#9333ea" 
                    strokeWidth={2}
                    name="Fat FIRE ($3.75M target)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Lean FIRE Timeline</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Starting Age:</span>
                    <span className="font-semibold text-green-900">25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Annual Income:</span>
                    <span className="font-semibold text-green-900">$75,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Savings Rate:</span>
                    <span className="font-semibold text-green-900">60%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Annual Savings:</span>
                    <span className="font-semibold text-green-900">$45,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">Years to FIRE:</span>
                    <span className="font-semibold text-green-900">15-17 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-700">FIRE Age:</span>
                    <span className="font-semibold text-green-900">40-42</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Fat FIRE Timeline</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Starting Age:</span>
                    <span className="font-semibold text-purple-900">25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Annual Income:</span>
                    <span className="font-semibold text-purple-900">$150,000+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Savings Rate:</span>
                    <span className="font-semibold text-purple-900">65%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Annual Savings:</span>
                    <span className="font-semibold text-purple-900">$97,500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">Years to FIRE:</span>
                    <span className="font-semibold text-purple-900">22-25 years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-700">FIRE Age:</span>
                    <span className="font-semibold text-purple-900">47-50</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Savings Rate Impact */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Required Savings Rates by Income</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <p className="text-sm text-gray-600 mb-4">
                Percentage of income needed to save for 20-year FIRE timeline
              </p>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={savingsRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="income" 
                    tickFormatter={(value) => `$${(value / 1000)}k`}
                    label={{ value: 'Annual Income', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    label={{ value: 'Savings Rate (%)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => `${value}%`}
                    labelFormatter={(value) => `Income: $${value.toLocaleString()}`}
                  />
                  <Legend />
                  <Bar dataKey="lean" fill="#10b981" name="Lean FIRE" />
                  <Bar dataKey="traditional" fill="#f97316" name="Traditional FIRE" />
                  <Bar dataKey="fat" fill="#9333ea" name="Fat FIRE" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Key Differences Table */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Differences at a Glance</h2>
            
            <div className="overflow-x-auto not-prose">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Factor</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-green-900">Lean FIRE</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900">Fat FIRE</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">FIRE Number</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$1M - $1.5M</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$2.5M - $5M+</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Annual Expenses</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$30k - $50k</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$100k - $200k+</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Time to FIRE</td>
                    <td className="px-6 py-4 text-sm text-gray-700">10-20 years</td>
                    <td className="px-6 py-4 text-sm text-gray-700">20-30 years</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Required Income</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$50k+ sufficient</td>
                    <td className="px-6 py-4 text-sm text-gray-700">$150k+ recommended</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Housing</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Modest rental/small home</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Large home, prime location</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Transportation</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Used car, public transit</td>
                    <td className="px-6 py-4 text-sm text-gray-700">New/luxury vehicles</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Travel Style</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Budget travel, camping</td>
                    <td className="px-6 py-4 text-sm text-gray-700">First class, luxury resorts</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Healthcare</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Basic coverage, HSA</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Premium plans, concierge care</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Risk Level</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Higher (less buffer)</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Lower (more buffer)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Flexibility</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Less room for changes</td>
                    <td className="px-6 py-4 text-sm text-gray-700">Can adapt to circumstances</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Pros and Cons */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros and Cons Analysis</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Lean FIRE Pros/Cons */}
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Lean FIRE Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Fastest path to retirement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Lower stress from reduced consumerism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Environmental sustainability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Forces creativity and resourcefulness</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-green-800">Achievable on moderate incomes</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-semibold text-red-900 mb-4">Lean FIRE Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">Limited financial flexibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">Healthcare costs can be problematic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">May feel restrictive over time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">Difficult with family/children</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-800">Higher sequence of returns risk</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Fat FIRE Pros/Cons */}
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="text-lg font-semibold text-purple-900 mb-4">Fat FIRE Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">Complete lifestyle freedom</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">Substantial financial buffer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">Can handle unexpected expenses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">Premium healthcare access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-800">Legacy wealth for heirs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-lg font-semibold text-amber-900 mb-4">Fat FIRE Challenges</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800">Requires high income to achieve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800">Much longer accumulation phase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800">Golden handcuffs syndrome</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800">Lifestyle inflation risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <span className="text-amber-800">May delay retirement unnecessarily</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How to Choose */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose Your FIRE Strategy</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Choosing between Lean FIRE and Fat FIRE isn't just about numbers—it's about aligning your financial 
              strategy with your values, goals, and vision for retirement. Consider these key decision factors:
            </p>

            <div className="bg-blue-50 rounded-xl p-6 not-prose">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Decision Framework</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">1. Calculate Your Current Lifestyle Costs</h4>
                  <p className="text-blue-700 mb-2">Track your expenses for 3-6 months to understand your baseline:</p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• If spending &lt; $40k/year → Lean FIRE is realistic</li>
                    <li>• If spending $40-70k/year → Consider Traditional FIRE</li>
                    <li>• If spending &gt; $70k/year → Fat FIRE may be necessary</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-blue-800 mb-3">2. Assess Your Income Potential</h4>
                  <p className="text-blue-700 mb-2">Be realistic about your earning trajectory:</p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Current income under $75k → Lean FIRE more achievable</li>
                    <li>• Income $75-150k → Both strategies possible</li>
                    <li>• Income over $150k → Fat FIRE becomes realistic</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-blue-800 mb-3">3. Consider Your Risk Tolerance</h4>
                  <p className="text-blue-700 mb-2">How comfortable are you with financial uncertainty?</p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• High risk tolerance → Lean FIRE acceptable</li>
                    <li>• Moderate risk tolerance → Traditional FIRE</li>
                    <li>• Low risk tolerance → Fat FIRE recommended</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-blue-800 mb-3">4. Family Considerations</h4>
                  <p className="text-blue-700 mb-2">Your household situation matters:</p>
                  <ul className="space-y-1 text-blue-700 text-sm">
                    <li>• Single/Couple, no kids → Any strategy works</li>
                    <li>• Planning for children → Fat FIRE provides more security</li>
                    <li>• Supporting elderly parents → Factor in additional costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Hybrid Approaches */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hybrid Approaches: The Best of Both Worlds</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              You don't have to choose exclusively between Lean and Fat FIRE. Many successful retirees use hybrid 
              strategies that evolve over time:
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Start Lean, Go Fat</h3>
                <p className="text-orange-800 mb-3">
                  Achieve Lean FIRE first, then continue working part-time or on passion projects to build toward Fat FIRE.
                </p>
                <ul className="space-y-2 text-sm text-orange-700">
                  <li>✓ Gain freedom earlier</li>
                  <li>✓ Test retirement lifestyle</li>
                  <li>✓ Continue building wealth with less pressure</li>
                  <li>✓ Flexibility to stop or continue</li>
                </ul>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <h3 className="text-lg font-semibold text-cyan-900 mb-4">Barista FIRE Bridge</h3>
                <p className="text-cyan-800 mb-3">
                  Use part-time work to bridge the gap between Lean and Fat FIRE numbers while maintaining benefits.
                </p>
                <ul className="space-y-2 text-sm text-cyan-700">
                  <li>✓ Healthcare coverage</li>
                  <li>✓ Social interaction</li>
                  <li>✓ Reduced withdrawal rate</li>
                  <li>✓ More time for portfolio growth</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl p-6 mt-6 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Geographic Arbitrage Strategy</h3>
              <p className="text-gray-700 mb-4">
                Accumulate for Fat FIRE in a high-cost area, then retire to a low-cost area with Lean FIRE expenses:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Phase 1: Accumulation</h4>
                  <p className="text-sm text-gray-600">Work in San Francisco, NYC, or Seattle with $150k+ income</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Phase 2: Transition</h4>
                  <p className="text-sm text-gray-600">Build $2M portfolio over 15-20 years</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Phase 3: Retirement</h4>
                  <p className="text-sm text-gray-600">Move to low-cost area, live on $40-50k/year</p>
                </div>
              </div>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Next Steps</h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 not-prose">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Start Your FIRE Journey Today</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-primary-800">For Lean FIRE Aspirants:</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <p className="text-primary-900 font-medium">Calculate your lean number</p>
                        <Link href="/lean-fire-calculator" className="text-sm text-primary-600 hover:text-primary-700">
                          Use our Lean FIRE Calculator →
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <p className="text-primary-900 font-medium">Track expenses for 3 months</p>
                        <p className="text-sm text-primary-700">Identify areas to reduce spending</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <p className="text-primary-900 font-medium">Increase savings rate gradually</p>
                        <p className="text-sm text-primary-700">Target 50-60% within 2 years</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-primary-800">For Fat FIRE Aspirants:</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <p className="text-primary-900 font-medium">Design your ideal lifestyle</p>
                        <Link href="/fat-fire-calculator" className="text-sm text-primary-600 hover:text-primary-700">
                          Use our Fat FIRE Calculator →
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <p className="text-primary-900 font-medium">Maximize income potential</p>
                        <p className="text-sm text-primary-700">Negotiate raises, develop skills, side hustles</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <p className="text-primary-900 font-medium">Optimize tax strategies</p>
                        <p className="text-sm text-primary-700">Max retirement accounts, backdoor Roth</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The choice between Lean FIRE and Fat FIRE ultimately comes down to your personal values, 
              life circumstances, and vision for retirement. Neither approach is inherently superior—they simply 
              serve different priorities and lifestyles.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Lean FIRE offers the fastest escape from traditional employment, embracing minimalism and 
              environmental consciousness. It's perfect for those who value time and freedom over material comforts. 
              Fat FIRE provides security, flexibility, and the ability to maintain or enhance your current lifestyle 
              in retirement, ideal for those with families or specific lifestyle goals.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Remember that your FIRE strategy can evolve. Many people start with Lean FIRE goals to gain freedom 
              quickly, then continue building wealth toward a more comfortable retirement. Others target Fat FIRE 
              but retire early when they realize they don't need as much as they thought.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              The most important step is to start. Use our calculators to run your numbers, track your expenses, 
              and begin increasing your savings rate. Whether you choose Lean, Fat, or somewhere in between, 
              the path to financial independence begins with taking action today.
            </p>
          </section>

          {/* Related Resources */}
          <section className="mb-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More FIRE Strategies</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/coast-fire-calculator" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⛵</span>
                  <h3 className="font-semibold text-gray-900">Coast FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Stop saving early and let compound interest carry you to retirement
                </p>
              </Link>

              <Link href="/barista-fire-calculator" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">☕</span>
                  <h3 className="font-semibold text-gray-900">Barista FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Work part-time for benefits while your portfolio grows
                </p>
              </Link>

              <Link href="/fire-calculator-couples" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💑</span>
                  <h3 className="font-semibold text-gray-900">Couples FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Optimize dual incomes for faster financial independence
                </p>
              </Link>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}