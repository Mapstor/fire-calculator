'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Anchor, Coffee, TrendingUp, Clock, Shield, Heart, Briefcase, DollarSign, Target, AlertCircle, CheckCircle, Calculator, Users, Zap } from "lucide-react";
import { useState } from 'react';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const portfolioGrowthData = [
  { age: 25, coast: 0, barista: 0, traditional: 0 },
  { age: 30, coast: 150000, barista: 120000, traditional: 200000 },
  { age: 35, coast: 350000, barista: 280000, traditional: 450000 },
  { age: 40, coast: 500000, barista: 500000, traditional: 750000 },
  { age: 45, coast: 715000, barista: 750000, traditional: 1100000 },
  { age: 50, coast: 1020000, barista: 1050000, traditional: 1500000 },
  { age: 55, coast: 1450000, barista: 1400000, traditional: 2000000 },
  { age: 60, coast: 2070000, barista: 1850000, traditional: 2500000 },
  { age: 65, coast: 2950000, barista: 2450000, traditional: 3000000 },
];

const workLifeBalance = [
  { aspect: 'Work Hours', coast: 0, barista: 20, traditional: 40 },
  { aspect: 'Stress Level', coast: 2, barista: 4, traditional: 8 },
  { aspect: 'Income', coast: 0, barista: 30000, traditional: 75000 },
  { aspect: 'Freedom', coast: 10, barista: 7, traditional: 3 },
  { aspect: 'Benefits', coast: 0, barista: 8, traditional: 10 },
];

const monthlyBudgetData = [
  { category: 'From Portfolio', coast: 0, barista: 1500 },
  { category: 'Part-time Work', coast: 0, barista: 2000 },
  { category: 'Total Available', coast: 0, barista: 3500 },
];

const ageComparisonData = [
  { strategy: 'Coast FIRE', accumulation: 15, coasting: 25, total: 40 },
  { strategy: 'Barista FIRE', accumulation: 12, working: 18, total: 30 },
  { strategy: 'Traditional FIRE', accumulation: 20, retirement: 0, total: 20 },
];

const riskFactors = [
  { factor: 'Market Risk', coast: 9, barista: 6, traditional: 7 },
  { factor: 'Healthcare', coast: 3, barista: 9, traditional: 5 },
  { factor: 'Flexibility', coast: 4, barista: 8, traditional: 6 },
  { factor: 'Social Life', coast: 5, barista: 9, traditional: 4 },
  { factor: 'Purpose', coast: 6, barista: 9, traditional: 5 },
  { factor: 'Income Security', coast: 2, barista: 7, traditional: 4 },
];

export default function CoastVsBaristaFireArticle() {
  const [selectedAge, setSelectedAge] = useState(40);
  const [comparisonMode, setComparisonMode] = useState<'coast' | 'barista' | 'both'>('both');

  const coastFireNumber = 500000;
  const baristaFireNumber = 750000;
  const traditionalFireNumber = 1750000;

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
            <span>January 18, 2025</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">Comparison</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Coast FIRE vs Barista FIRE: The Semi-Retirement Showdown
          </h1>
          <p className="text-xl text-gray-600">
            Compare two popular semi-retirement strategies that let you step back from the grind while 
            your money continues working. Detailed analysis with calculators, timelines, and real-world scenarios.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Not everyone pursuing financial independence wants to wait until they have enough saved for full 
              retirement. Coast FIRE and Barista FIRE offer compelling alternatives—ways to dramatically reduce 
              work stress and hours while still progressing toward financial independence. These semi-retirement 
              strategies provide the best of both worlds: increased freedom now and security later.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              While both approaches involve stepping back from traditional full-time work before reaching complete 
              financial independence, they differ fundamentally in philosophy, execution, and lifestyle impact. 
              This comprehensive guide explores both strategies in detail, helping you determine which path might 
              transform your journey to financial freedom.
            </p>

            {/* Quick Calculator Links */}
            <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Calculate Your Semi-Retirement Path</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/coast-fire-calculator" className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-blue-200">
                  <span className="text-2xl">⛵</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Coast FIRE Calculator</h4>
                    <p className="text-sm text-gray-600">Find your coasting point</p>
                  </div>
                </Link>
                <Link href="/barista-fire-calculator" className="flex items-center gap-3 p-4 bg-white rounded-lg hover:shadow-md transition-shadow border border-amber-200">
                  <span className="text-2xl">☕</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Barista FIRE Calculator</h4>
                    <p className="text-sm text-gray-600">Plan part-time freedom</p>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Visual Overview */}
          <section className="mb-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Portfolio Growth Comparison</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Growth Trajectories: Coast vs Barista vs Traditional</h3>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setComparisonMode('both')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      comparisonMode === 'both' 
                        ? 'bg-gray-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Both
                  </button>
                  <button 
                    onClick={() => setComparisonMode('coast')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      comparisonMode === 'coast' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Coast
                  </button>
                  <button 
                    onClick={() => setComparisonMode('barista')}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      comparisonMode === 'barista' 
                        ? 'bg-amber-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Barista
                  </button>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={portfolioGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                  <YAxis 
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => value ? `$${(value / 1000000).toFixed(1)}M` : ''}
                  />
                  <Tooltip formatter={(value) => value ? `$${value.toLocaleString()}` : ''} />
                  <Legend />
                  {(comparisonMode === 'coast' || comparisonMode === 'both') && (
                    <Area 
                      type="monotone" 
                      dataKey="coast" 
                      stroke="#3b82f6" 
                      fill="#93c5fd"
                      fillOpacity={0.6}
                      name="Coast FIRE"
                      strokeWidth={2}
                    />
                  )}
                  {(comparisonMode === 'barista' || comparisonMode === 'both') && (
                    <Area 
                      type="monotone" 
                      dataKey="barista" 
                      stroke="#f59e0b" 
                      fill="#fcd34d"
                      fillOpacity={0.6}
                      name="Barista FIRE"
                      strokeWidth={2}
                    />
                  )}
                  <Area 
                    type="monotone" 
                    dataKey="traditional" 
                    stroke="#10b981" 
                    fill="#86efac"
                    fillOpacity={0.3}
                    name="Traditional FIRE"
                    strokeWidth={1}
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                * Assumes 7% annual returns, Coast stops contributing at 40, Barista continues part-time contributions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-2 mb-3">
                  <Anchor className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-blue-900">Coast FIRE</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-blue-800"><strong>Target:</strong> $500K by 40</p>
                  <p className="text-blue-800"><strong>Then:</strong> Stop saving entirely</p>
                  <p className="text-blue-800"><strong>Work:</strong> Cover expenses only</p>
                  <p className="text-blue-800"><strong>Retirement:</strong> $2.9M at 65</p>
                </div>
              </div>
              
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <div className="flex items-center gap-2 mb-3">
                  <Coffee className="w-6 h-6 text-amber-600" />
                  <h3 className="text-lg font-semibold text-amber-900">Barista FIRE</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-amber-800"><strong>Target:</strong> $750K portfolio</p>
                  <p className="text-amber-800"><strong>Then:</strong> Work part-time</p>
                  <p className="text-amber-800"><strong>Work:</strong> Benefits + income</p>
                  <p className="text-amber-800"><strong>Retirement:</strong> Flexible timing</p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-green-900">Traditional FIRE</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-green-800"><strong>Target:</strong> $1.75M minimum</p>
                  <p className="text-green-800"><strong>Then:</strong> Full retirement</p>
                  <p className="text-green-800"><strong>Work:</strong> None required</p>
                  <p className="text-green-800"><strong>Retirement:</strong> Immediate</p>
                </div>
              </div>
            </div>
          </section>

          {/* What is Coast FIRE? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Coast FIRE</h2>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Coast FIRE is the strategy of front-loading your retirement savings early in your career, then 
              "coasting" to traditional retirement age while your investments grow through compound interest alone. 
              Once you hit your Coast FIRE number, you can stop saving for retirement entirely and only need to 
              earn enough to cover current living expenses.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">The Coast FIRE Formula</h3>
              <div className="bg-white p-4 rounded-lg mb-4">
                <code className="text-sm font-mono">
                  Coast FIRE Number = Future FIRE Number ÷ (1 + Return Rate)^Years Until Retirement
                </code>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">Example Calculation:</h4>
                  <ul className="space-y-2 text-blue-700 text-sm">
                    <li>• Desired retirement at 65: $2.5M</li>
                    <li>• Current age: 35</li>
                    <li>• Years to grow: 30</li>
                    <li>• Expected return: 7%</li>
                    <li>• <strong>Coast number needed: $329,000</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">What This Means:</h4>
                  <p className="text-blue-700 text-sm">
                    If you have $329,000 saved by age 35 and it grows at 7% annually, 
                    you'll have $2.5 million by age 65 without adding another penny.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Coast FIRE Lifestyle</h3>
            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Advantages
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Complete savings freedom after coasting point</li>
                  <li>• Pursue passion projects without income pressure</li>
                  <li>• Take career risks or sabbaticals</li>
                  <li>• Reduce to part-time or freelance work</li>
                  <li>• Geographic flexibility (work anywhere)</li>
                  <li>• Mental relief from retirement anxiety</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  Considerations
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Must still earn enough for expenses</li>
                  <li>• Healthcare coverage gaps possible</li>
                  <li>• Retirement at traditional age (60-65)</li>
                  <li>• Market risk over long time horizon</li>
                  <li>• Inflation impact on future needs</li>
                  <li>• No access to funds while coasting</li>
                </ul>
              </div>
            </div>
          </section>

          {/* What is Barista FIRE? */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Barista FIRE</h2>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Barista FIRE involves accumulating enough investments to cover a portion of your expenses through 
              withdrawals, then working part-time to cover the remainder while maintaining benefits—particularly 
              health insurance. The name comes from the idea of working as a barista at Starbucks for their 
              excellent part-time benefits, though any part-time work with benefits qualifies.
            </p>

            <div className="bg-amber-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">The Barista FIRE Math</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-amber-800 mb-3">Income Structure:</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Annual expenses: $60,000</li>
                    <li>• Part-time income: $24,000 (20 hrs/week)</li>
                    <li>• Needed from portfolio: $36,000</li>
                    <li>• Required portfolio: $900,000 (4% rule)</li>
                    <li>• <strong>vs Traditional FIRE: $1,500,000</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 mb-3">Benefits Package:</h4>
                  <ul className="space-y-2 text-amber-700 text-sm">
                    <li>• Health insurance ($15,000+ value/year)</li>
                    <li>• Dental and vision coverage</li>
                    <li>• 401(k) matching opportunities</li>
                    <li>• Social interaction and purpose</li>
                    <li>• Skill maintenance and learning</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Popular Barista FIRE Jobs</h3>
            <div className="grid md:grid-cols-3 gap-4 not-prose">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Retail & Service</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Starbucks (20 hrs for benefits)</li>
                  <li>• Costco ($15-25/hour + benefits)</li>
                  <li>• Trader Joe's (great culture)</li>
                  <li>• REI (outdoor enthusiasts)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Professional Part-Time</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Consulting in your field</li>
                  <li>• Teaching/tutoring</li>
                  <li>• Freelance writing</li>
                  <li>• Bookkeeping services</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Passion Projects</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Yoga/fitness instruction</li>
                  <li>• National park positions</li>
                  <li>• Library work</li>
                  <li>• Museum or gallery roles</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline Comparison */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Timeline to Freedom: Real Scenarios</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Years in Each Phase</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={ageComparisonData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                  <YAxis type="category" dataKey="strategy" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="accumulation" stackId="a" fill="#3b82f6" name="Full-Time Accumulation" />
                  <Bar dataKey="coasting" stackId="a" fill="#93c5fd" name="Coasting Period" />
                  <Bar dataKey="working" stackId="a" fill="#fbbf24" name="Part-Time Work" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Sarah's Coast FIRE Journey</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Starting age:</span>
                    <span className="font-semibold text-blue-900">25</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Income:</span>
                    <span className="font-semibold text-blue-900">$80,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Savings rate:</span>
                    <span className="font-semibold text-blue-900">65%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Coast number hit:</span>
                    <span className="font-semibold text-blue-900">Age 35 ($400K)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">New career:</span>
                    <span className="font-semibold text-blue-900">Freelance writer ($40K)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-700">Full retirement:</span>
                    <span className="font-semibold text-blue-900">Age 60 ($2.1M)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-100 rounded-lg">
                  <p className="text-xs text-blue-800">
                    <strong>Key benefit:</strong> 25 years of low-stress work doing what she loves
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Mike's Barista FIRE Path</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-700">Starting age:</span>
                    <span className="font-semibold text-amber-900">28</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-700">Income:</span>
                    <span className="font-semibold text-amber-900">$90,000</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-700">Savings rate:</span>
                    <span className="font-semibold text-amber-900">55%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-700">Barista FIRE at:</span>
                    <span className="font-semibold text-amber-900">Age 42 ($850K)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-700">Part-time job:</span>
                    <span className="font-semibold text-amber-900">REI ($25K + benefits)</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-amber-700">Full retirement:</span>
                    <span className="font-semibold text-amber-900">Age 55 (optional)</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-100 rounded-lg">
                  <p className="text-xs text-amber-800">
                    <strong>Key benefit:</strong> Healthcare covered, outdoor gear discounts, flexible schedule
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work-Life Balance Comparison */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Work-Life Balance Analysis</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quality of Life Factors</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={riskFactors}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="factor" />
                  <PolarRadiusAxis angle={90} domain={[0, 10]} />
                  <Radar name="Coast FIRE" dataKey="coast" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                  <Radar name="Barista FIRE" dataKey="barista" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                  <Radar name="Traditional" dataKey="traditional" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Coast FIRE Lifestyle</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Maximum flexibility</li>
                  <li>✓ Location independence</li>
                  <li>✗ Healthcare challenges</li>
                  <li>✗ Income uncertainty</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Barista FIRE Lifestyle</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Healthcare security</li>
                  <li>✓ Social interaction</li>
                  <li>✓ Steady income</li>
                  <li>✗ Less flexibility</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Traditional Work</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>✓ Full benefits</li>
                  <li>✓ Career growth</li>
                  <li>✗ High stress</li>
                  <li>✗ Limited freedom</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Healthcare Deep Dive */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Healthcare Factor</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Healthcare is often the deciding factor between Coast FIRE and Barista FIRE, especially in the 
              United States. The difference in healthcare strategy can mean tens of thousands of dollars annually 
              and significantly impact your quality of life.
            </p>

            <div className="bg-red-50 rounded-xl p-6 not-prose">
              <h3 className="text-lg font-semibold text-red-900 mb-4">Healthcare Cost Comparison</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-red-800 mb-3">Coast FIRE Healthcare Options:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• ACA Marketplace: $500-1,500/month</li>
                    <li>• High deductible plans: $5,000-10,000 deductibles</li>
                    <li>• Healthcare sharing ministries: Limited coverage</li>
                    <li>• Spouse's employer plan (if available)</li>
                    <li>• Geographic arbitrage (move abroad)</li>
                  </ul>
                  <div className="mt-3 p-3 bg-red-100 rounded">
                    <p className="text-xs text-red-800">
                      <strong>Annual cost:</strong> $8,000-20,000 for family
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-red-800 mb-3">Barista FIRE Healthcare Benefits:</h4>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Employer-subsidized premiums: $100-400/month</li>
                    <li>• Lower deductibles: $1,000-3,000</li>
                    <li>• Dental and vision included</li>
                    <li>• Predictable costs</li>
                    <li>• No income limits for subsidies</li>
                  </ul>
                  <div className="mt-3 p-3 bg-red-100 rounded">
                    <p className="text-xs text-red-800">
                      <strong>Annual cost:</strong> $2,000-6,000 for family
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Companies with Excellent Part-Time Benefits</h3>
            <div className="overflow-x-auto not-prose">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Company</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Hours Required</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Benefits</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Ideal For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">Starbucks</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 hours/week</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Health, dental, vision, 401k, stock</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Social butterflies</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">Costco</td>
                    <td className="px-4 py-3 text-sm text-gray-700">24 hours/week</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Excellent health, high pay ($15-25/hr)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Physical workers</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">UPS</td>
                    <td className="px-4 py-3 text-sm text-gray-700">15 hours/week</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Premium health coverage, pension</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Early birds/night owls</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">REI</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 hours/week</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Health, gear discounts, outdoor culture</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Outdoor enthusiasts</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-gray-900 font-medium">Whole Foods</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20 hours/week</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Health, 20% discount, 401k</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Health-conscious</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Financial Requirements */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Requirements Breakdown</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Needs by Annual Expenses</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual Expenses</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-blue-900">Coast FIRE (Age 40)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-amber-900">Barista FIRE</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-green-900">Traditional FIRE</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">$40,000</td>
                      <td className="px-4 py-3 text-sm text-blue-700">$200,000</td>
                      <td className="px-4 py-3 text-sm text-amber-700">$500,000</td>
                      <td className="px-4 py-3 text-sm text-green-700">$1,000,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">$60,000</td>
                      <td className="px-4 py-3 text-sm text-blue-700">$300,000</td>
                      <td className="px-4 py-3 text-sm text-amber-700">$750,000</td>
                      <td className="px-4 py-3 text-sm text-green-700">$1,500,000</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">$80,000</td>
                      <td className="px-4 py-3 text-sm text-blue-700">$400,000</td>
                      <td className="px-4 py-3 text-sm text-amber-700">$1,000,000</td>
                      <td className="px-4 py-3 text-sm text-green-700">$2,000,000</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">$100,000</td>
                      <td className="px-4 py-3 text-sm text-blue-700">$500,000</td>
                      <td className="px-4 py-3 text-sm text-amber-700">$1,250,000</td>
                      <td className="px-4 py-3 text-sm text-green-700">$2,500,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Coast FIRE assumes retirement at 65, Barista assumes $20K part-time income
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Coast FIRE Calculator Inputs</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700">Current savings:</span>
                    <input type="text" value="$150,000" className="px-2 py-1 rounded border border-blue-300 text-right w-24" readOnly />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Monthly contribution:</span>
                    <input type="text" value="$4,000" className="px-2 py-1 rounded border border-blue-300 text-right w-24" readOnly />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Years to coast:</span>
                    <input type="text" value="7" className="px-2 py-1 rounded border border-blue-300 text-right w-24" readOnly />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700">Coast number:</span>
                    <span className="font-bold text-blue-900">$486,000</span>
                  </div>
                </div>
                <Link href="/coast-fire-calculator" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Calculate Your Coast Number →
                </Link>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-900 mb-4">Barista FIRE Calculator Inputs</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-700">Annual expenses:</span>
                    <input type="text" value="$60,000" className="px-2 py-1 rounded border border-amber-300 text-right w-24" readOnly />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Part-time income:</span>
                    <input type="text" value="$25,000" className="px-2 py-1 rounded border border-amber-300 text-right w-24" readOnly />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">From portfolio:</span>
                    <input type="text" value="$35,000" className="px-2 py-1 rounded border border-amber-300 text-right w-24" readOnly />
                  </div>
                  <div className="flex justify-between">
                    <span className="text-amber-700">Portfolio needed:</span>
                    <span className="font-bold text-amber-900">$875,000</span>
                  </div>
                </div>
                <Link href="/barista-fire-calculator" className="mt-4 inline-block px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  Calculate Your Barista Number →
                </Link>
              </div>
            </div>
          </section>

          {/* Psychological Factors */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Psychology of Semi-Retirement</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Both Coast FIRE and Barista FIRE offer psychological benefits that traditional FIRE might miss. 
              The gradual transition can be healthier than an abrupt retirement, maintaining purpose and social 
              connections while reducing stress.
            </p>

            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Mental Health Benefits</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <span><strong>Reduced burnout:</strong> Immediate relief from high-stress careers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <span><strong>Maintained purpose:</strong> Work provides structure and meaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <span><strong>Social connections:</strong> Regular interaction with colleagues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <span><strong>Identity transition:</strong> Gradual shift from career-focused identity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-5 h-5 mt-0.5 flex-shrink-0 text-green-600" />
                    <span><strong>Skill maintenance:</strong> Stay current and engaged in your field</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Common Concerns Addressed</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">"Will I be bored?"</h4>
                    <p className="text-purple-700 text-sm">
                      Part-time work provides routine without overwhelming commitment
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">"What about my career?"</h4>
                    <p className="text-purple-700 text-sm">
                      Consulting or freelancing keeps skills sharp and doors open
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">"Will I regret leaving?"</h4>
                    <p className="text-purple-700 text-sm">
                      Semi-retirement is reversible—you can always increase hours
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800 mb-1">"Am I lazy for wanting this?"</h4>
                    <p className="text-purple-700 text-sm">
                      Prioritizing life balance over maximum wealth is wisdom, not laziness
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Decision Framework */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing Your Path: Decision Framework</h2>
            
            <div className="bg-gradient-to-r from-blue-50 via-amber-50 to-green-50 rounded-xl p-8 not-prose">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Answer These Questions</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">1. Healthcare Priority</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <input type="radio" name="healthcare" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">I need employer healthcare</label>
                        <p className="text-sm text-amber-600">→ Lean toward Barista FIRE</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="radio" name="healthcare" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">I can handle private insurance</label>
                        <p className="text-sm text-blue-600">→ Coast FIRE viable</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">2. Work Preference</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <input type="radio" name="work" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">I want complete flexibility</label>
                        <p className="text-sm text-blue-600">→ Coast FIRE better</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="radio" name="work" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">I enjoy routine and structure</label>
                        <p className="text-sm text-amber-600">→ Barista FIRE fits</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">3. Timeline Preference</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <input type="radio" name="timeline" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">Retire fully by 60-65</label>
                        <p className="text-sm text-blue-600">→ Coast FIRE works</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="radio" name="timeline" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">Flexible retirement timing</label>
                        <p className="text-sm text-amber-600">→ Barista FIRE flexible</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">4. Risk Tolerance</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <input type="radio" name="risk" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">Comfortable with market reliance</label>
                        <p className="text-sm text-blue-600">→ Coast FIRE acceptable</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="radio" name="risk" className="mt-1" />
                      <div>
                        <label className="font-medium text-gray-700">Want income diversification</label>
                        <p className="text-sm text-amber-600">→ Barista FIRE safer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hybrid Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hybrid Approaches: Mixing Strategies</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              You don't have to choose just one strategy. Many successful early retirees combine elements of 
              Coast and Barista FIRE, adapting their approach as life circumstances change.
            </p>

            <div className="space-y-6 not-prose">
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl p-6 border-l-4 border-blue-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Coast-to-Barista Transition</h3>
                <p className="text-gray-700 mb-3">
                  Start with Coast FIRE in your 30s-40s, transition to Barista FIRE in your 50s for healthcare 
                  coverage until Medicare kicks in.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Example Timeline:</h4>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">Age 25-38</div>
                      <div className="text-gray-600">Accumulate</div>
                    </div>
                    <span>→</span>
                    <div className="text-center">
                      <div className="font-bold text-blue-600">Age 38-50</div>
                      <div className="text-gray-600">Coast FIRE</div>
                    </div>
                    <span>→</span>
                    <div className="text-center">
                      <div className="font-bold text-amber-600">Age 50-65</div>
                      <div className="text-gray-600">Barista FIRE</div>
                    </div>
                    <span>→</span>
                    <div className="text-center">
                      <div className="font-bold text-green-600">Age 65+</div>
                      <div className="text-gray-600">Full Retirement</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-green-50 rounded-xl p-6 border-l-4 border-amber-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Seasonal Barista FIRE</h3>
                <p className="text-gray-700 mb-3">
                  Work part-time during busy seasons (holiday retail, tax season, summer camps) and coast the 
                  rest of the year. Perfect for those who want extended travel or project time.
                </p>
                <div className="grid md:grid-cols-3 gap-3 mt-4">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-900">3-4 months</div>
                    <div className="text-sm text-amber-600">Intense work</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-900">8-9 months</div>
                    <div className="text-sm text-blue-600">Complete freedom</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="font-medium text-gray-900">$20-30K</div>
                    <div className="text-sm text-green-600">Annual income</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border-l-4 border-green-400">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Entrepreneurial Coast FIRE</h3>
                <p className="text-gray-700 mb-3">
                  Reach Coast FIRE, then pursue passion projects or small businesses without income pressure. 
                  If successful, accelerate to full FIRE; if not, you're still coasting to retirement.
                </p>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Popular Ventures:</h4>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-600">
                    <li>• Blogging/content creation</li>
                    <li>• Online courses</li>
                    <li>• Consulting services</li>
                    <li>• Etsy/craft businesses</li>
                    <li>• Real estate investing</li>
                    <li>• App development</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Action Plan</h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 not-prose">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Start Your Semi-Retirement Journey</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-primary-800">For Coast FIRE Aspirants:</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <p className="text-primary-900 font-medium">Calculate your Coast number</p>
                        <Link href="/coast-fire-calculator" className="text-sm text-primary-600 hover:text-primary-700">
                          Use our Coast FIRE Calculator →
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <p className="text-primary-900 font-medium">Front-load retirement savings</p>
                        <p className="text-sm text-primary-700">Max out 401k, IRA, HSA</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <p className="text-primary-900 font-medium">Plan your coast career</p>
                        <p className="text-sm text-primary-700">Research passion jobs that cover expenses</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</span>
                      <div>
                        <p className="text-primary-900 font-medium">Address healthcare gap</p>
                        <p className="text-sm text-primary-700">Research ACA options or spousal coverage</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-primary-800">For Barista FIRE Aspirants:</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <p className="text-primary-900 font-medium">Determine your number</p>
                        <Link href="/barista-fire-calculator" className="text-sm text-primary-600 hover:text-primary-700">
                          Use our Barista FIRE Calculator →
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <p className="text-primary-900 font-medium">Research part-time jobs</p>
                        <p className="text-sm text-primary-700">Focus on benefits-eligible positions</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <p className="text-primary-900 font-medium">Test the waters</p>
                        <p className="text-sm text-primary-700">Try weekend shifts before committing</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">4</span>
                      <div>
                        <p className="text-primary-900 font-medium">Build your portfolio</p>
                        <p className="text-sm text-primary-700">Continue investing while working part-time</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Quick Decision Guide</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <p className="font-medium text-blue-900">Choose Coast FIRE if you:</p>
                    <ul className="text-gray-600 mt-1">
                      <li>• Value maximum freedom</li>
                      <li>• Have healthcare covered</li>
                      <li>• Don't mind waiting until 60-65</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-amber-400 pl-4">
                    <p className="font-medium text-amber-900">Choose Barista FIRE if you:</p>
                    <ul className="text-gray-600 mt-1">
                      <li>• Need health benefits</li>
                      <li>• Enjoy social interaction</li>
                      <li>• Want flexible retirement timing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Both Coast FIRE and Barista FIRE offer compelling alternatives to the traditional "work until 65" 
              model. They provide immediate lifestyle improvements while maintaining long-term financial security. 
              The choice between them often comes down to personal preferences around healthcare, flexibility, 
              and work-life balance.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Coast FIRE maximizes freedom by eliminating the savings pressure entirely, allowing you to pursue 
              any work that covers your expenses—or even take extended breaks. It's perfect for entrepreneurs, 
              creatives, and those who value complete autonomy over security.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Barista FIRE provides a middle ground with steady income, valuable benefits, and social structure. 
              It's ideal for those who enjoy routine, want healthcare security, and appreciate the psychological 
              benefits of continued employment without the stress of a demanding career.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Remember that these strategies aren't mutually exclusive. Many people transition between them or 
              combine elements of both. The key is to start calculating your numbers, understanding your options, 
              and taking action toward the semi-retirement lifestyle that aligns with your values and goals.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Whether you choose to coast, become a barista, or forge your own hybrid path, the journey to 
              semi-retirement starts with a single step: calculating your target number and beginning to save 
              aggressively. Use our calculators to map out your path, and remember—the best time to start was 
              yesterday, but the second-best time is today.
            </p>
          </section>

          {/* Related Resources */}
          <section className="mb-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore More Strategies</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/lean-fire-calculator" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🌿</span>
                  <h3 className="font-semibold text-gray-900">Lean FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Minimize expenses for the fastest path to retirement
                </p>
              </Link>

              <Link href="/fat-fire-calculator" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">👑</span>
                  <h3 className="font-semibold text-gray-900">Fat FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Maintain a luxurious lifestyle in retirement
                </p>
              </Link>

              <Link href="/" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🔥</span>
                  <h3 className="font-semibold text-gray-900">Traditional FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  The classic approach to financial independence
                </p>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                ← Back to All Articles
              </Link>
            </div>
          </section>

        </article>
      </main>
    </div>
  );
}