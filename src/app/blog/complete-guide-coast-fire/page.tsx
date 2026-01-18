'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Anchor, Calculator, TrendingUp, Clock, Target, AlertCircle, CheckCircle, Calendar, DollarSign, PiggyBank, Briefcase, Globe, Heart, Users, Zap, BookOpen } from "lucide-react";
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ComposedChart } from 'recharts';

const coastFireByAge = [
  { age: 25, traditional: 1750000, coast: 229000 },
  { age: 30, traditional: 1750000, coast: 329000 },
  { age: 35, traditional: 1750000, coast: 472000 },
  { age: 40, traditional: 1750000, coast: 678000 },
  { age: 45, traditional: 1750000, coast: 974000 },
  { age: 50, traditional: 1750000, coast: 1399000 },
];

const savingsPhaseData = [
  { year: 0, aggressive: 0, moderate: 0, conservative: 0 },
  { year: 5, aggressive: 350000, moderate: 250000, conservative: 150000 },
  { year: 10, aggressive: 850000, moderate: 550000, conservative: 350000 },
  { year: 15, aggressive: 1600000, moderate: 950000, conservative: 600000 },
  { year: 20, aggressive: 2700000, moderate: 1500000, conservative: 950000 },
];

const coastingGrowthData = [
  { age: 35, portfolio: 500000 },
  { age: 40, portfolio: 701000 },
  { age: 45, portfolio: 983000 },
  { age: 50, portfolio: 1379000 },
  { age: 55, portfolio: 1934000 },
  { age: 60, portfolio: 2714000 },
  { age: 65, portfolio: 3807000 },
];

const expensesCoverageData = [
  { category: 'Housing', monthly: 1500, annual: 18000, job: 'Freelance Writing' },
  { category: 'Food', monthly: 600, annual: 7200, job: 'Tutoring' },
  { category: 'Transportation', monthly: 400, annual: 4800, job: 'Uber/DoorDash' },
  { category: 'Healthcare', monthly: 500, annual: 6000, job: 'Part-time Retail' },
  { category: 'Personal', monthly: 400, annual: 4800, job: 'Online Business' },
  { category: 'Entertainment', monthly: 300, annual: 3600, job: 'Gig Work' },
];

const geographicArbitrage = [
  { location: 'San Francisco', income: 120000, expenses: 72000, coastYears: 12 },
  { location: 'Austin', income: 90000, expenses: 48000, coastYears: 10 },
  { location: 'Denver', income: 85000, expenses: 42000, coastYears: 9 },
  { location: 'Raleigh', income: 75000, expenses: 36000, coastYears: 8 },
  { location: 'Thailand', income: 30000, expenses: 18000, coastYears: 15 },
  { location: 'Portugal', income: 35000, expenses: 24000, coastYears: 18 },
];

const ageScenarios = [
  { 
    name: 'Early Starter',
    startAge: 22,
    coastAge: 32,
    retireAge: 65,
    savings: 65000,
    coastNumber: 350000,
    finalAmount: 4200000
  },
  {
    name: 'Typical Professional',
    startAge: 28,
    coastAge: 40,
    retireAge: 65,
    savings: 50000,
    coastNumber: 680000,
    finalAmount: 3500000
  },
  {
    name: 'Late Bloomer',
    startAge: 35,
    coastAge: 48,
    retireAge: 65,
    savings: 40000,
    coastNumber: 1100000,
    finalAmount: 3000000
  },
];

export default function CoastFireGuideArticle() {
  const [selectedIncome, setSelectedIncome] = useState(75000);
  const [selectedSavingsRate, setSelectedSavingsRate] = useState(50);
  const [targetRetirementAge, setTargetRetirementAge] = useState(65);
  const [currentAge, setCurrentAge] = useState(30);

  const calculateCoastNumber = () => {
    const yearsToRetirement = targetRetirementAge - currentAge;
    const fireNumber = 1750000; // Assuming $70k annual expenses
    const growthRate = 1.07; // 7% annual return
    return Math.round(fireNumber / Math.pow(growthRate, yearsToRetirement));
  };

  const calculateYearsToCoast = () => {
    const annualSavings = selectedIncome * (selectedSavingsRate / 100);
    const coastTarget = calculateCoastNumber();
    const growthRate = 0.07;
    
    // Using compound interest formula to solve for time
    const years = Math.log(coastTarget / (annualSavings / growthRate)) / Math.log(1 + growthRate);
    return Math.round(years * 10) / 10;
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
            <span>January 19, 2025</span>
            <span>•</span>
            <span>18 min read</span>
            <span>•</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">Deep Dive</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Complete Guide to Coast FIRE: Calculator, Strategy & Timeline
          </h1>
          <p className="text-xl text-gray-600">
            Master the art of front-loading retirement savings to achieve financial freedom decades early. 
            Detailed walkthrough with age-based scenarios, calculator tools, and actionable strategies.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Coast FIRE represents one of the most psychologically liberating approaches to financial independence. 
              By front-loading your retirement savings in your 20s and 30s, you can reach a point where your 
              investments will grow to full FIRE without another dollar saved. This comprehensive guide breaks down 
              everything you need to know about Coast FIRE, from the mathematical foundations to real-world 
              implementation strategies.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Unlike traditional FIRE where you save until you have 25x your annual expenses, Coast FIRE lets you 
              "coast" once you've saved enough that compound interest will carry you to retirement. This means 
              potentially decades of work where every dollar earned can be spent guilt-free, pursuing passions 
              without financial pressure, and living life on your terms starting in your 30s or 40s.
            </p>

            {/* Interactive Calculator */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Quick Coast FIRE Calculator</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-800">Current Age</label>
                    <input 
                      type="range" 
                      min="20" 
                      max="50" 
                      value={currentAge}
                      onChange={(e) => setCurrentAge(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                    <span className="text-sm text-blue-700">{currentAge} years old</span>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-800">Annual Income</label>
                    <input 
                      type="range" 
                      min="40000" 
                      max="200000" 
                      step="5000"
                      value={selectedIncome}
                      onChange={(e) => setSelectedIncome(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                    <span className="text-sm text-blue-700">${selectedIncome.toLocaleString()}</span>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-800">Savings Rate</label>
                    <input 
                      type="range" 
                      min="20" 
                      max="70" 
                      value={selectedSavingsRate}
                      onChange={(e) => setSelectedSavingsRate(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                    <span className="text-sm text-blue-700">{selectedSavingsRate}%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Your Coast FIRE Projection</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Coast Number Needed:</span>
                      <span className="font-bold text-blue-600">${calculateCoastNumber().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Annual Savings:</span>
                      <span className="font-bold">${(selectedIncome * selectedSavingsRate / 100).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Years to Coast:</span>
                      <span className="font-bold text-green-600">{calculateYearsToCoast()} years</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Coast Age:</span>
                      <span className="font-bold">{Math.round(currentAge + calculateYearsToCoast())}</span>
                    </div>
                  </div>
                  <Link 
                    href="/coast-fire-calculator" 
                    className="mt-4 block text-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Use Full Calculator →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* What is Coast FIRE */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Coast FIRE: The Mathematics</h2>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Coast FIRE is built on the power of compound interest and time. The concept is elegantly simple: 
              save aggressively early, then let time and market returns do the heavy lifting. Here's the 
              fundamental formula that makes it all work:
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">The Coast FIRE Formula</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <code className="text-sm font-mono block mb-2">
                  Coast FIRE Number = Traditional FIRE Number ÷ (1 + Return Rate)^Years Until Retirement
                </code>
                <div className="text-xs text-gray-600 mt-2">
                  <p>Where:</p>
                  <ul className="ml-4 mt-1">
                    <li>• Traditional FIRE Number = Annual Expenses × 25</li>
                    <li>• Return Rate = Expected annual investment return (typically 7%)</li>
                    <li>• Years Until Retirement = Target retirement age - Current age</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-3 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">30</div>
                  <div className="text-xs text-blue-700">Years to grow</div>
                  <div className="text-sm font-semibold text-blue-800 mt-1">$329K needed</div>
                </div>
                <div className="text-center p-3 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">25</div>
                  <div className="text-xs text-green-700">Years to grow</div>
                  <div className="text-sm font-semibold text-green-800 mt-1">$472K needed</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600">20</div>
                  <div className="text-xs text-amber-700">Years to grow</div>
                  <div className="text-sm font-semibold text-amber-800 mt-1">$678K needed</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-4">
                * Assuming $70,000 annual expenses in retirement ($1.75M traditional FIRE number)
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">The Power of Time: Coast Numbers by Age</h3>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 not-prose">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={coastFireByAge}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" label={{ value: 'Current Age', position: 'insideBottom', offset: -5 }} />
                  <YAxis 
                    label={{ value: 'Amount Needed ($)', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => `$${(value / 1000)}K`}
                  />
                  <Tooltip formatter={(value) => value ? `$${value.toLocaleString()}` : ''} />
                  <Legend />
                  <Bar dataKey="coast" fill="#3b82f6" name="Coast FIRE Number" />
                  <Bar dataKey="traditional" fill="#e5e7eb" name="Traditional FIRE" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                The earlier you start, the less you need. Starting at 25 requires only 13% of the traditional FIRE number!
              </p>
            </div>
          </section>

          {/* Three Phases of Coast FIRE */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Three Phases of Coast FIRE</h2>
            
            <div className="space-y-6 not-prose">
              {/* Phase 1: Accumulation */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border-l-4 border-red-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-red-600">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-red-900 mb-2">Phase 1: Aggressive Accumulation</h3>
                    <p className="text-red-800 mb-3">
                      Years 0-10: Save 50-70% of income, maximize all tax-advantaged accounts, live below your means
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Focus Areas:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Maximize 401(k) contributions</li>
                          <li>• Max out IRA (Roth or Traditional)</li>
                          <li>• Contribute to HSA if available</li>
                          <li>• Build taxable investment accounts</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Lifestyle:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• House hack or rent cheaply</li>
                          <li>• Drive used cars or bike</li>
                          <li>• Cook meals at home</li>
                          <li>• Find free entertainment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 2: Coasting */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border-l-4 border-blue-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-blue-600">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Phase 2: The Coast Period</h3>
                    <p className="text-blue-800 mb-3">
                      Years 10-30: Work only to cover expenses, pursue passion projects, complete geographic flexibility
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Work Options:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Part-time employment</li>
                          <li>• Freelancing/consulting</li>
                          <li>• Passion business</li>
                          <li>• Seasonal work + travel</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Freedom Gained:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• No savings pressure</li>
                          <li>• Location independence</li>
                          <li>• Career experimentation</li>
                          <li>• Extended time off</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3: Traditional Retirement */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-400">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-bold text-green-600">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Phase 3: Traditional Retirement</h3>
                    <p className="text-green-800 mb-3">
                      Age 60-65+: Access retirement accounts, begin 4% withdrawals, complete financial independence
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Portfolio Status:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• $2-4M+ portfolio value</li>
                          <li>• 4% safe withdrawal rate</li>
                          <li>• Tax-efficient withdrawals</li>
                          <li>• Legacy planning options</li>
                        </ul>
                      </div>
                      <div className="bg-white rounded-lg p-4">
                        <h4 className="font-medium text-gray-900 mb-2">Lifestyle:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Complete freedom</li>
                          <li>• Travel extensively</li>
                          <li>• Pursue hobbies fully</li>
                          <li>• Volunteer/give back</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accumulation Phase Strategies */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accumulation Phase: Building Your Coast Number</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Savings Trajectory Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={savingsPhaseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Years Saving', position: 'insideBottom', offset: -5 }} />
                  <YAxis 
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => `$${(value / 1000)}K`}
                  />
                  <Tooltip formatter={(value) => value ? `$${value.toLocaleString()}` : ''} />
                  <Legend />
                  <Line type="monotone" dataKey="aggressive" stroke="#ef4444" name="70% Savings Rate" strokeWidth={2} />
                  <Line type="monotone" dataKey="moderate" stroke="#3b82f6" name="50% Savings Rate" strokeWidth={2} />
                  <Line type="monotone" dataKey="conservative" stroke="#10b981" name="30% Savings Rate" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                Higher savings rates dramatically reduce time to Coast FIRE. The difference between 30% and 70% can be 10+ years.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Income Optimization</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Negotiate Salary</p>
                      <p className="text-sm text-blue-700">Every $10K increase = 2 years faster</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Side Hustles</p>
                      <p className="text-sm text-blue-700">$1K/month extra = 30% faster</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-blue-800">Job Hopping</p>
                      <p className="text-sm text-blue-700">20% raises every 2-3 years</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Expense Reduction</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <PiggyBank className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">House Hacking</p>
                      <p className="text-sm text-green-700">Save $1,500+/month on housing</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <PiggyBank className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Car-Free Living</p>
                      <p className="text-sm text-green-700">Save $600+/month total cost</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <PiggyBank className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-green-800">Meal Prep</p>
                      <p className="text-sm text-green-700">Save $400+/month vs eating out</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* The Coasting Phase */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Coasting Phase: Living Your Best Life</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Once you hit your Coast FIRE number, the entire game changes. You no longer need to save for 
              retirement—you just need to cover your current expenses. This opens up incredible lifestyle options 
              that would be impossible while pursuing traditional FIRE.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Growth During Coasting</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={coastingGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                  <YAxis 
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => value ? `$${(value / 1000000).toFixed(1)}M` : ''}
                  />
                  <Tooltip formatter={(value) => value ? `$${value.toLocaleString()}` : ''} />
                  <defs>
                    <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="portfolio" stroke="#3b82f6" fillOpacity={1} fill="url(#colorGrowth)" name="Portfolio Value" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                Starting with $500K at 35, your portfolio grows to $3.8M by 65 without adding a single dollar!
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Income Options During Coasting</h3>
            
            <div className="overflow-x-auto not-prose">
              <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Income Source</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual Income</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Hours/Week</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Pros</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Freelance Consulting</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$40-80K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">10-20</td>
                    <td className="px-4 py-3 text-sm text-gray-700">High hourly rate, flexible</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Professionals</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Online Business</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$20-100K+</td>
                    <td className="px-4 py-3 text-sm text-gray-700">15-30</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Location independent</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Digital nomads</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Teaching/Tutoring</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$30-50K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">20-30</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Rewarding, summers off</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Educators</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Real Estate (1-2 properties)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$20-40K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">5-10</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Mostly passive</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Property owners</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">Seasonal Work</td>
                    <td className="px-4 py-3 text-sm text-gray-700">$25-35K</td>
                    <td className="px-4 py-3 text-sm text-gray-700">40 (3-6 months)</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Long breaks</td>
                    <td className="px-4 py-3 text-sm text-gray-700">Travel lovers</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Lifestyle Benefits of Coasting</h3>
            
            <div className="grid md:grid-cols-3 gap-4 not-prose">
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <Heart className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-semibold text-purple-900 mb-2">Mental Health</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Zero financial stress</li>
                  <li>• Work becomes optional</li>
                  <li>• Pursue passions freely</li>
                  <li>• No retirement anxiety</li>
                </ul>
              </div>
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <Globe className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold text-indigo-900 mb-2">Freedom</h4>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• Location independence</li>
                  <li>• Time flexibility</li>
                  <li>• Career experimentation</li>
                  <li>• Extended travel possible</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                <Users className="w-8 h-8 text-teal-600 mb-3" />
                <h4 className="font-semibold text-teal-900 mb-2">Relationships</h4>
                <ul className="text-sm text-teal-700 space-y-1">
                  <li>• More family time</li>
                  <li>• Deeper friendships</li>
                  <li>• Community involvement</li>
                  <li>• Better work-life balance</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Geographic Arbitrage */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographic Arbitrage: Accelerate Your Coast</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6 prose">
              One of the most powerful Coast FIRE strategies is geographic arbitrage—earning in high-income areas 
              while living in low-cost areas, or moving to cheaper locations once you start coasting.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Income vs Expenses by Location</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={geographicArbitrage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="location" angle={-45} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" label={{ value: 'Annual Amount ($)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Years to Coast', angle: 90, position: 'insideRight' }} />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="income" fill="#3b82f6" name="Income" />
                  <Bar yAxisId="left" dataKey="expenses" fill="#ef4444" name="Expenses" />
                  <Line yAxisId="right" type="monotone" dataKey="coastYears" stroke="#10b981" name="Years to Coast" strokeWidth={2} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Domestic Arbitrage</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-blue-800">High Income → Low Cost</h4>
                    <p className="text-sm text-blue-700 mb-2">
                      Work remotely for SF/NYC companies while living in LCOL areas
                    </p>
                    <ul className="text-xs text-blue-600 space-y-1">
                      <li>• Austin, TX: No state income tax</li>
                      <li>• Raleigh, NC: 40% cheaper than SF</li>
                      <li>• Salt Lake City: Outdoor paradise</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">International Options</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-green-800">Popular Coast Destinations</h4>
                    <p className="text-sm text-green-700 mb-2">
                      Live like royalty on $2K/month while portfolio grows
                    </p>
                    <ul className="text-xs text-green-600 space-y-1">
                      <li>• Portugal: Golden visa program</li>
                      <li>• Thailand: Digital nomad visa</li>
                      <li>• Mexico: Close to US, great weather</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Age-Based Scenarios */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Coast FIRE by Age: Real Scenarios</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Your age when starting significantly impacts your Coast FIRE journey. Here are three detailed 
              scenarios showing how the path differs based on when you begin.
            </p>

            <div className="space-y-6 not-prose">
              {ageScenarios.map((scenario, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{scenario.name}</h3>
                      <p className="text-sm text-gray-600">Starting at age {scenario.startAge}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${scenario.finalAmount.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">at age {scenario.retireAge}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">Annual Savings</div>
                      <div className="font-bold text-gray-900">${scenario.savings.toLocaleString()}</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-600 mb-1">Coast Age</div>
                      <div className="font-bold text-blue-900">{scenario.coastAge}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xs text-green-600 mb-1">Coast Number</div>
                      <div className="font-bold text-green-900">${scenario.coastNumber.toLocaleString()}</div>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <div className="text-xs text-purple-600 mb-1">Years Saving</div>
                      <div className="font-bold text-purple-900">{scenario.coastAge - scenario.startAge}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span className="text-gray-600">Accumulation: {scenario.coastAge - scenario.startAge} years</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">Coasting: {scenario.retireAge - scenario.coastAge} years</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-xl p-6 mt-6 not-prose">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Key Takeaways</h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Starting 5 years earlier can reduce required savings by 40-50%</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Late starters need higher savings rates but can still achieve Coast FIRE</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <span>Every year of delay increases the required Coast number by ~7-10%</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Coast FIRE Mistakes to Avoid</h2>
            
            <div className="space-y-4 not-prose">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Mistake #1: Forgetting About Healthcare</h3>
                    <p className="text-red-800 mb-2">
                      Many Coast FIRE planners forget they'll need health insurance for 20-30 years before Medicare.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900 mb-1">Solution:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Budget $500-1,500/month for ACA marketplace plans</li>
                        <li>• Consider part-time work with benefits</li>
                        <li>• Research healthcare sharing ministries</li>
                        <li>• Plan for geographic arbitrage to countries with affordable healthcare</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Mistake #2: Using Overly Optimistic Returns</h3>
                    <p className="text-red-800 mb-2">
                      Assuming 10-12% returns can leave you severely underfunded.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900 mb-1">Solution:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Use 6-7% real returns for planning</li>
                        <li>• Build in a 20% buffer to your Coast number</li>
                        <li>• Consider different market scenarios</li>
                        <li>• Review and adjust annually</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Mistake #3: Lifestyle Inflation During Coasting</h3>
                    <p className="text-red-800 mb-2">
                      Increasing expenses during the coast phase can derail your plan.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900 mb-1">Solution:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Lock in your expense baseline before coasting</li>
                        <li>• Track spending monthly during coast phase</li>
                        <li>• Build raises into fun money, not baseline</li>
                        <li>• Review your original FIRE number annually</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-900 mb-2">Mistake #4: Not Accounting for Inflation</h3>
                    <p className="text-red-800 mb-2">
                      $70K expenses today will be $140K+ in 30 years with 2.5% inflation.
                    </p>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-900 mb-1">Solution:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Use inflation-adjusted (real) returns in calculations</li>
                        <li>• Plan for expense growth during coasting</li>
                        <li>• Consider TIPS or I Bonds for inflation protection</li>
                        <li>• Build flexibility into your retirement date</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Coast FIRE Implementation Checklist</h2>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 not-prose">
              <h3 className="text-xl font-semibold text-green-900 mb-6">Phase 1: Preparation (Month 1-3)</h3>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Calculate your Coast FIRE number</p>
                    <p className="text-sm text-gray-600">Use our calculator with conservative assumptions</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Audit current expenses</p>
                    <p className="text-sm text-gray-600">Track for 3 months to establish baseline</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Set savings rate target</p>
                    <p className="text-sm text-gray-600">Aim for 50-70% during accumulation</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Open investment accounts</p>
                    <p className="text-sm text-gray-600">401(k), IRA, HSA, taxable brokerage</p>
                  </div>
                </label>
              </div>

              <h3 className="text-xl font-semibold text-green-900 mb-6">Phase 2: Accumulation (Years 1-10)</h3>
              
              <div className="space-y-4 mb-8">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Maximize tax-advantaged accounts</p>
                    <p className="text-sm text-gray-600">$22,500 to 401(k), $6,500 to IRA, $3,850/$7,750 to HSA</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Automate investments</p>
                    <p className="text-sm text-gray-600">Set up automatic transfers after each paycheck</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Annual salary negotiations</p>
                    <p className="text-sm text-gray-600">Target 5-10% raises or job hop for 20%+</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Track progress quarterly</p>
                    <p className="text-sm text-gray-600">Adjust strategy based on performance</p>
                  </div>
                </label>
              </div>

              <h3 className="text-xl font-semibold text-green-900 mb-6">Phase 3: Transition to Coasting</h3>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Identify income streams for coasting</p>
                    <p className="text-sm text-gray-600">Line up part-time work or freelance clients</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Secure health insurance</p>
                    <p className="text-sm text-gray-600">Research ACA options or part-time benefits</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Build 6-month emergency fund</p>
                    <p className="text-sm text-gray-600">Cash buffer for coast phase flexibility</p>
                  </div>
                </label>
                <label className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Test coast lifestyle</p>
                    <p className="text-sm text-gray-600">Try living on coast budget for 3 months before committing</p>
                  </div>
                </label>
              </div>
            </div>
          </section>

          {/* Action Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Start Your Coast FIRE Journey Today</h2>
            
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 not-prose">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Your Next Steps</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-primary-800">Immediate Actions (This Week)</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <p className="text-primary-900 font-medium">Calculate your Coast number</p>
                        <Link href="/coast-fire-calculator" className="text-sm text-primary-600 hover:text-primary-700">
                          Use our detailed Coast FIRE Calculator →
                        </Link>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <p className="text-primary-900 font-medium">Track current expenses</p>
                        <p className="text-sm text-primary-700">Download Mint, YNAB, or use spreadsheets</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <p className="text-primary-900 font-medium">Review investment accounts</p>
                        <p className="text-sm text-primary-700">Ensure you're maximizing tax advantages</p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-primary-800">30-Day Goals</h4>
                  <ol className="space-y-3">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">1</span>
                      <div>
                        <p className="text-primary-900 font-medium">Increase 401(k) contribution</p>
                        <p className="text-sm text-primary-700">Bump up by 5-10% immediately</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">2</span>
                      <div>
                        <p className="text-primary-900 font-medium">Find one expense to cut</p>
                        <p className="text-sm text-primary-700">Cancel subscriptions, negotiate bills</p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">3</span>
                      <div>
                        <p className="text-primary-900 font-medium">Research coast careers</p>
                        <p className="text-sm text-primary-700">Identify passion work that covers expenses</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg">
                <p className="text-center text-gray-900 font-medium mb-3">
                  Ready to calculate your exact Coast FIRE timeline?
                </p>
                <div className="text-center">
                  <Link 
                    href="/coast-fire-calculator" 
                    className="inline-block px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Launch Coast FIRE Calculator
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Final Thoughts</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Coast FIRE offers something unique in the financial independence world: the ability to completely 
              decouple saving from living. By front-loading your retirement savings, you buy yourself decades of 
              freedom to pursue work you love, travel extensively, raise a family without financial stress, or 
              simply enjoy life without the constant pressure to save.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              The math is compelling—someone who saves aggressively from 25-35 can coast for the next 30 years, 
              watching their portfolio grow from $500,000 to over $3 million without adding another penny. This 
              isn't about being lazy or giving up on ambition; it's about strategically timing your efforts to 
              maximize both wealth and life enjoyment.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Whether you're 22 or 42, Coast FIRE is achievable with the right strategy and commitment. The key 
              is to start now, save aggressively during your peak earning years, and trust in the mathematical 
              certainty of compound interest. Your future self—the one working part-time at a beach cafe or 
              teaching yoga in Bali while your portfolio grows—will thank you.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Remember: Coast FIRE isn't about retiring completely. It's about reaching a point where retirement 
              is inevitable, giving you the freedom to make choices based on passion rather than paycheck. Start 
              calculating your Coast number today, and take the first step toward a life of financial freedom 
              and purposeful work.
            </p>
          </section>

          {/* Related Resources */}
          <section className="mb-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your FIRE Education</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/blog/coast-fire-vs-barista-fire" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">☕</span>
                  <h3 className="font-semibold text-gray-900">Coast vs Barista</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Compare Coast FIRE with part-time work strategies
                </p>
              </Link>

              <Link href="/blog/lean-fire-vs-fat-fire" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-semibold text-gray-900">Lean vs Fat FIRE</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Understand different spending levels in retirement
                </p>
              </Link>

              <Link href="/barista-fire-calculator" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🧮</span>
                  <h3 className="font-semibold text-gray-900">Barista Calculator</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Calculate your part-time FIRE strategy
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