"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Users, DollarSign, Calendar, TrendingUp, 
  ChevronRight, Calculator, Clock, Shield,
  AlertTriangle, CheckCircle, Banknote, Target, ArrowRight
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell
} from 'recharts';

export default function SocialSecurityFirePage() {
  const [currentAge, setCurrentAge] = useState(35);
  const [salary, setSalary] = useState(100000);
  const [fireAge, setFireAge] = useState(45);
  const [workYears, setWorkYears] = useState(20);
  const [claimAge, setClaimAge] = useState(67);

  // Calculate Social Security benefits
  const calculateBenefits = () => {
    // Simplified calculation - actual SSA formula is more complex
    const avgSalary = Math.min(salary, 160200); // 2023 wage cap
    const aime = (avgSalary * workYears) / (35 * 12); // Average Indexed Monthly Earnings
    
    let pia = 0; // Primary Insurance Amount
    
    // 2023 bend points
    if (aime <= 1115) {
      pia = aime * 0.9;
    } else if (aime <= 6721) {
      pia = 1115 * 0.9 + (aime - 1115) * 0.32;
    } else {
      pia = 1115 * 0.9 + (6721 - 1115) * 0.32 + (aime - 6721) * 0.15;
    }
    
    // Adjust for claiming age
    let adjustmentFactor = 1;
    if (claimAge < 67) {
      adjustmentFactor = 1 - ((67 - claimAge) * 12 * 0.0055); // Reduction factor
    } else if (claimAge > 67) {
      adjustmentFactor = 1 + ((claimAge - 67) * 0.08); // Delayed retirement credits
    }
    
    const monthlyBenefit = Math.max(0, pia * adjustmentFactor);
    const annualBenefit = monthlyBenefit * 12;
    
    return {
      monthly: Math.round(monthlyBenefit),
      annual: Math.round(annualBenefit),
      lifetime: Math.round(annualBenefit * (85 - claimAge)),
      pia: Math.round(pia)
    };
  };

  const benefits = calculateBenefits();

  // Claiming age comparison
  const claimingAgeComparison = [
    { age: 62, monthlyBenefit: Math.round(benefits.pia * 0.75), reduction: 25, lifetime: Math.round(benefits.pia * 0.75 * 12 * 23) },
    { age: 63, monthlyBenefit: Math.round(benefits.pia * 0.80), reduction: 20, lifetime: Math.round(benefits.pia * 0.80 * 12 * 22) },
    { age: 64, monthlyBenefit: Math.round(benefits.pia * 0.867), reduction: 13.3, lifetime: Math.round(benefits.pia * 0.867 * 12 * 21) },
    { age: 65, monthlyBenefit: Math.round(benefits.pia * 0.933), reduction: 6.7, lifetime: Math.round(benefits.pia * 0.933 * 12 * 20) },
    { age: 66, monthlyBenefit: Math.round(benefits.pia * 0.967), reduction: 3.3, lifetime: Math.round(benefits.pia * 0.967 * 12 * 19) },
    { age: 67, monthlyBenefit: Math.round(benefits.pia), reduction: 0, lifetime: Math.round(benefits.pia * 12 * 18) },
    { age: 68, monthlyBenefit: Math.round(benefits.pia * 1.08), reduction: -8, lifetime: Math.round(benefits.pia * 1.08 * 12 * 17) },
    { age: 69, monthlyBenefit: Math.round(benefits.pia * 1.16), reduction: -16, lifetime: Math.round(benefits.pia * 1.16 * 12 * 16) },
    { age: 70, monthlyBenefit: Math.round(benefits.pia * 1.24), reduction: -24, lifetime: Math.round(benefits.pia * 1.24 * 12 * 15) },
  ];

  // FIRE scenarios impact
  const fireScenarios = [
    { scenario: 'Traditional Retirement', workYears: 35, benefit: 100, impact: 'Full benefits' },
    { scenario: 'FIRE at 50', workYears: 25, benefit: 75, impact: 'Reduced by ~25%' },
    { scenario: 'FIRE at 45', workYears: 20, benefit: 60, impact: 'Reduced by ~40%' },
    { scenario: 'FIRE at 40', workYears: 15, benefit: 45, impact: 'Reduced by ~55%' },
    { scenario: 'FIRE at 35', workYears: 10, benefit: 30, impact: 'Reduced by ~70%' },
  ];

  // Income replacement strategies
  const incomeReplacement = [
    { source: 'Social Security', percentage: 40, color: '#3b82f6' },
    { source: 'Portfolio Withdrawals', percentage: 45, color: '#10b981' },
    { source: 'Part-time Work', percentage: 10, color: '#f59e0b' },
    { source: 'Other Benefits', percentage: 5, color: '#8b5cf6' },
  ];

  // Break-even analysis
  const breakEvenAnalysis = [
    { age: 78, early: 192000, full: 198000, delayed: 186000 },
    { age: 80, early: 216000, full: 234000, delayed: 222000 },
    { age: 82, early: 240000, full: 270000, delayed: 258000 },
    { age: 84, early: 264000, full: 306000, delayed: 294000 },
    { age: 86, early: 288000, full: 342000, delayed: 330000 },
    { age: 88, early: 312000, full: 378000, delayed: 366000 },
    { age: 90, early: 336000, full: 414000, delayed: 402000 },
  ];

  // Tax implications
  const taxImplications = [
    { income: 25000, taxable: 0, rate: 0 },
    { income: 32000, taxable: 4250, rate: 17 },
    { income: 44000, taxable: 10200, rate: 23 },
    { income: 60000, taxable: 18700, rate: 31 },
    { income: 80000, taxable: 27700, rate: 35 },
    { income: 100000, taxable: 36700, rate: 37 },
  ];

  // FIRE optimization strategies
  const optimizationStrategies = [
    { 
      strategy: 'Maximize High-Income Years',
      description: 'Work highest-paying jobs before FIRE',
      impact: 'High',
      complexity: 'Low'
    },
    { 
      strategy: 'Delay Claiming to 70',
      description: 'Use portfolio for early retirement income',
      impact: 'High',
      complexity: 'Medium'
    },
    { 
      strategy: 'Part-time Consulting',
      description: 'Continue earning credits post-FIRE',
      impact: 'Medium',
      complexity: 'Medium'
    },
    { 
      strategy: 'Spousal Claiming Strategy',
      description: 'Optimize married couples benefits',
      impact: 'High',
      complexity: 'High'
    },
    { 
      strategy: 'Tax Bracket Management',
      description: 'Control taxable income in retirement',
      impact: 'Medium',
      complexity: 'High'
    },
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Planning
            </span>
            <span className="text-sm text-white/80">22 min read</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Social Security & FIRE: Optimizing Benefits for Early Retirees
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Master Social Security optimization for FIRE success. Learn how early retirement impacts benefits, 
            claiming strategies, tax implications, and integration with your withdrawal plan.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Users className="w-5 h-5" />
              <span className="font-medium">Benefit Optimization</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Claiming Strategy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Tax Planning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              The FIRE-Social Security Connection
            </h2>
            <p className="text-gray-700 mb-4">
              Social Security remains a significant income source even for FIRE retirees, but early retirement 
              dramatically impacts benefit calculations. Understanding these implications is crucial for 
              optimizing your overall retirement income strategy.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-600 mb-1">35 years</div>
                <p className="text-sm text-gray-600">Work history used for benefit calculation</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-indigo-600 mb-1">8%/year</div>
                <p className="text-sm text-gray-600">Annual increase for delaying past full retirement age</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-600 mb-1">25-50%</div>
                <p className="text-sm text-gray-600">Typical benefit reduction for early FIRE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Social Security Benefit Calculator
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Age
                </label>
                <input
                  type="number"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(Number(e.target.value))}
                  min="25"
                  max="70"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Annual Salary
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(Number(e.target.value))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  FIRE Age
                </label>
                <input
                  type="number"
                  value={fireAge}
                  onChange={(e) => setFireAge(Number(e.target.value))}
                  min="30"
                  max="67"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Work Years
                </label>
                <input
                  type="number"
                  value={workYears}
                  onChange={(e) => setWorkYears(Number(e.target.value))}
                  min="10"
                  max="40"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Claiming Age
                </label>
                <select
                  value={claimAge}
                  onChange={(e) => setClaimAge(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={62}>62 (Early)</option>
                  <option value={65}>65</option>
                  <option value={67}>67 (Full)</option>
                  <option value={70}>70 (Delayed)</option>
                </select>
              </div>
            </div>

            {/* Results */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Estimated Benefits</h3>
              
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-600">${benefits.monthly.toLocaleString()}</div>
                  <p className="text-sm text-gray-600">Monthly Benefit</p>
                </div>
                <div className="bg-indigo-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-indigo-600">${benefits.annual.toLocaleString()}</div>
                  <p className="text-sm text-gray-600">Annual Benefit</p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-purple-600">${Math.round(benefits.lifetime / 1000)}k</div>
                  <p className="text-sm text-gray-600">Lifetime Benefits</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">{workYears}</div>
                  <p className="text-sm text-gray-600">Qualifying Years</p>
                </div>
              </div>

              {workYears < 35 && (
                <div className="bg-amber-50 rounded-lg p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-amber-900">Impact of Early FIRE</h4>
                      <p className="text-sm text-amber-800 mt-1">
                        Working only {workYears} years means {35 - workYears} years of $0 earnings in your 
                        benefit calculation, reducing your Social Security by approximately {Math.round((35 - workYears) / 35 * 100)}%.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {claimAge !== 67 && (
                <div className={`rounded-lg p-4 ${claimAge < 67 ? 'bg-red-50' : 'bg-green-50'}`}>
                  <h4 className={`font-semibold ${claimAge < 67 ? 'text-red-900' : 'text-green-900'}`}>
                    {claimAge < 67 ? 'Early Claiming Penalty' : 'Delayed Retirement Credit'}
                  </h4>
                  <p className={`text-sm mt-1 ${claimAge < 67 ? 'text-red-800' : 'text-green-800'}`}>
                    {claimAge < 67 
                      ? `Claiming at ${claimAge} reduces your benefit by ${Math.round((67 - claimAge) * 6.67)}% permanently.`
                      : `Delaying until ${claimAge} increases your benefit by ${(claimAge - 67) * 8}% permanently.`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Claiming Age Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Claiming Age Strategy Analysis
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={claimingAgeComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" label={{ value: 'Claiming Age', position: 'insideBottom', offset: -5 }} />
                <YAxis yAxisId="left" label={{ value: 'Monthly Benefit ($)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'Lifetime Benefits ($)', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="monthlyBenefit" fill="#3b82f6" name="Monthly Benefit" />
                <Line yAxisId="right" type="monotone" dataKey="lifetime" stroke="#10b981" strokeWidth={2} name="Lifetime Benefits" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2">Early Claiming (62-66)</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Permanent benefit reduction</li>
                <li>• Income may still be earned</li>
                <li>• Good for poor health/urgent need</li>
                <li>• Earnings test applies until FRA</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Full Retirement Age (67)</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• 100% of calculated benefit</li>
                <li>• No earnings test</li>
                <li>• Benchmark for comparison</li>
                <li>• Most common claiming age</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Delayed Claiming (68-70)</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• 8% annual increase until 70</li>
                <li>• Maximum possible benefit</li>
                <li>• Best for longevity</li>
                <li>• Requires bridge income</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FIRE Impact Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How FIRE Age Affects Social Security Benefits
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={fireScenarios}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Benefit Level (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Bar dataKey="benefit" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            {fireScenarios.map((scenario, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{scenario.scenario}</h3>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      Work Years: <span className="font-semibold">{scenario.workYears}</span>
                    </span>
                    <span className="text-sm text-gray-600">
                      Benefit: <span className="font-semibold text-indigo-600">{scenario.benefit}%</span>
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{scenario.impact}</p>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-indigo-600 h-2 rounded-full"
                      style={{ width: `${scenario.benefit}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-amber-50 rounded-xl p-6">
            <h3 className="font-semibold text-amber-900 mb-3">Key Insights for FIRE Planning</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Every missing work year reduces benefits by ~3%</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Higher salaries in working years matter more</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Part-time work post-FIRE can help</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Benefits are still meaningful at 50-70% levels</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Delaying claims can offset early retirement impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Consider spouse's benefits in planning</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Income Replacement Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Retirement Income Replacement Strategy
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={incomeReplacement}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.source}: ${entry.percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="percentage"
                  >
                    {incomeReplacement.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">FIRE Income Sources</h3>
              
              {incomeReplacement.map((source, index) => (
                <div key={index} className="border-l-4 pl-4" style={{ borderLeftColor: source.color }}>
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-gray-900">{source.source}</h4>
                    <span className="text-2xl font-bold" style={{ color: source.color }}>
                      {source.percentage}%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {source.source === 'Social Security' && 'Inflation-adjusted government benefit'}
                    {source.source === 'Portfolio Withdrawals' && '4% rule from investment accounts'}
                    {source.source === 'Part-time Work' && 'Flexible income from consulting/projects'}
                    {source.source === 'Other Benefits' && 'Pensions, annuities, rental income'}
                  </p>
                </div>
              ))}

              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Integration Strategy</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Use portfolio income from FIRE to age 62-70</li>
                  <li>• Delay Social Security to maximize benefits</li>
                  <li>• Part-time work can bridge gaps and add credits</li>
                  <li>• Coordinate with spouse's claiming strategy</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Break-Even Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Break-Even Analysis: When Does Delaying Pay Off?
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={breakEvenAnalysis}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom', offset: -5 }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="early" stroke="#ef4444" strokeWidth={2} name="Claim at 62" />
                <Line type="monotone" dataKey="full" stroke="#3b82f6" strokeWidth={2} name="Claim at 67" />
                <Line type="monotone" dataKey="delayed" stroke="#10b981" strokeWidth={2} name="Claim at 70" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-red-50 rounded-lg p-4">
              <h3 className="font-semibold text-red-900 mb-2">Early Claiming (62)</h3>
              <ul className="text-sm text-red-800 space-y-1">
                <li>• Best if life expectancy &lt; 78</li>
                <li>• Immediate income need</li>
                <li>• Poor health considerations</li>
                <li>• Subject to earnings test</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Full Retirement (67)</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Balanced approach</li>
                <li>• Break-even around 80-82</li>
                <li>• No earnings restrictions</li>
                <li>• Standard planning baseline</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">Delayed Claiming (70)</h3>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• Best if life expectancy &gt; 82</li>
                <li>• Maximum benefit optimization</li>
                <li>• Requires bridge income</li>
                <li>• Good health assumption</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tax Implications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Social Security Tax Implications
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={taxImplications}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="income" tickFormatter={(value) => `$${(value / 1000)}k`} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="rate" stroke="#ef4444" fill="#fecaca" name="Tax Rate (%)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Tax Thresholds (2023)</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Combined Income &lt; $25k (single)</span>
                  <span className="font-semibold text-green-600">0% taxable</span>
                </div>
                <div className="flex justify-between">
                  <span>$25k - $34k (single)</span>
                  <span className="font-semibold text-yellow-600">50% taxable</span>
                </div>
                <div className="flex justify-between">
                  <span>&gt; $34k (single)</span>
                  <span className="font-semibold text-red-600">85% taxable</span>
                </div>
                <div className="pt-2 border-t text-xs text-gray-500">
                  *Married filing jointly: $32k/$44k thresholds
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-3">FIRE Tax Strategies</h3>
              <ul className="text-sm text-blue-800 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Use Roth accounts to control taxable income</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Time Roth conversions strategically</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Manage withdrawal timing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Consider geographic arbitrage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 rounded-xl p-6">
            <h3 className="font-semibold text-amber-900 mb-3">Combined Income Calculation</h3>
            <p className="text-sm text-amber-800 mb-3">
              <strong>Combined Income =</strong> Adjusted Gross Income + Nontaxable Interest + 50% of Social Security Benefits
            </p>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Example for FIRE Retiree:</h4>
              <div className="space-y-1 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Portfolio withdrawals (taxable):</span>
                  <span>$30,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Social Security benefit:</span>
                  <span>$20,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Municipal bond interest:</span>
                  <span>$2,000</span>
                </div>
                <div className="flex justify-between border-t pt-1 font-semibold">
                  <span>Combined Income:</span>
                  <span>$42,000</span>
                </div>
                <div className="text-xs text-gray-500">
                  Result: 85% of Social Security is taxable ($17,000)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optimization Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Advanced Social Security Optimization Strategies
          </h2>

          <div className="space-y-4">
            {optimizationStrategies.map((strategy, index) => (
              <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900 text-lg">{strategy.strategy}</h3>
                  <div className="flex items-center gap-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      strategy.impact === 'High' ? 'bg-green-100 text-green-800' :
                      strategy.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {strategy.impact} Impact
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      strategy.complexity === 'High' ? 'bg-red-100 text-red-800' :
                      strategy.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {strategy.complexity} Complexity
                    </span>
                  </div>
                </div>
                <p className="text-gray-700">{strategy.description}</p>

                {strategy.strategy === 'Maximize High-Income Years' && (
                  <div className="mt-4 bg-blue-50 rounded-lg p-4">
                    <h4 className="font-medium text-blue-900 mb-2">Implementation:</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Negotiate salary increases before FIRE</li>
                      <li>• Take on high-paying consulting projects</li>
                      <li>• Maximize bonus years through timing</li>
                      <li>• Consider job changes for salary bumps</li>
                    </ul>
                  </div>
                )}

                {strategy.strategy === 'Spousal Claiming Strategy' && (
                  <div className="mt-4 bg-purple-50 rounded-lg p-4">
                    <h4 className="font-medium text-purple-900 mb-2">Married Couple Strategies:</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Lower earner claims early, higher earner delays</li>
                      <li>• Spousal benefits (50% of partner's FRA benefit)</li>
                      <li>• Survivor benefits planning</li>
                      <li>• "Do-over" strategies within first 12 months</li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* FIRE Integration Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FIRE-Social Security Integration Roadmap
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Pre-FIRE Phase (Working Years)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Salary Optimization</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Maximize high-earning years</li>
                    <li>• Aim for 35 years of substantial earnings</li>
                    <li>• Track annual SS statements</li>
                    <li>• Consider part-time work impact</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Planning Foundation</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Create SS account at ssa.gov</li>
                    <li>• Estimate benefits at different FIRE ages</li>
                    <li>• Factor reduced benefits into FIRE number</li>
                    <li>• Plan claiming strategy</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Early FIRE Phase (Ages 30-62)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Income Bridge Strategy</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Use portfolio for primary income</li>
                    <li>• Consider part-time work for credits</li>
                    <li>• Roth conversion opportunities</li>
                    <li>• Healthcare coverage planning</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefit Monitoring</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Annual benefit estimates</li>
                    <li>• Update projections with actual earnings</li>
                    <li>• Monitor policy changes</li>
                    <li>• Adjust FIRE plan as needed</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Claiming Phase (Ages 62-70)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Decision Factors</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Health and life expectancy</li>
                    <li>• Portfolio performance</li>
                    <li>• Tax situation</li>
                    <li>• Spousal coordination</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Integration with FIRE</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Reduce portfolio withdrawal needs</li>
                    <li>• Tax-efficient income coordination</li>
                    <li>• Estate planning considerations</li>
                    <li>• Long-term care planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Social Security Mistakes for FIRE
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Ignoring SS in FIRE Planning</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Even reduced benefits can provide $1,000-2,000/month. This significantly 
                    impacts your required portfolio size and withdrawal rates.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Claiming at 62 Without Analysis</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Automatic early claiming can cost hundreds of thousands in lifetime benefits. 
                    Run break-even analyses based on your health and financial situation.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Not Coordinating Spousal Benefits</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Married couples can optimize combined benefits through strategic timing. 
                    Plan together, not individually.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Overlooking Tax Implications</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    High portfolio withdrawals can make SS benefits taxable. Coordinate withdrawal 
                    strategies to minimize total tax burden.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your Social Security Action Plan
          </h2>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Next 90 Days</h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Week 1-2: Assessment</h4>
                <ul className="text-sm space-y-1 text-blue-100">
                  <li>✓ Create account at ssa.gov</li>
                  <li>✓ Review annual SS statement</li>
                  <li>✓ Estimate benefits at different FIRE ages</li>
                  <li>✓ Calculate impact on FIRE number</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Week 3-4: Strategy Development</h4>
                <ul className="text-sm space-y-1 text-blue-100">
                  <li>✓ Run break-even analysis for claiming ages</li>
                  <li>✓ Coordinate with spouse if married</li>
                  <li>✓ Factor into tax planning</li>
                  <li>✓ Identify optimization opportunities</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Month 2-3: Implementation</h4>
                <ul className="text-sm space-y-1 text-blue-100">
                  <li>✓ Adjust FIRE withdrawal strategy</li>
                  <li>✓ Update financial projections</li>
                  <li>✓ Plan high-income maximization</li>
                  <li>✓ Set annual review schedule</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Integrate Social Security Into Your FIRE Plan</h2>
            <p className="text-emerald-100 mb-6">
              Don't leave money on the table. Even with reduced benefits, Social Security can provide 
              $300,000-500,000 in lifetime value. Optimize your claiming strategy today.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/fire-calculator"
                className="inline-flex items-center gap-2 bg-white text-emerald-600 px-6 py-3 rounded-lg font-medium hover:bg-emerald-50 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Update FIRE Calculator
              </Link>
              <Link 
                href="/blog/fire-withdrawal-strategies"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-400 transition-colors"
              >
                <Target className="w-5 h-5" />
                Withdrawal Strategies
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/fire-tax-optimization" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Shield className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  Tax Optimization Guide
                </h3>
                <p className="text-sm text-gray-600">
                  Maximize tax efficiency throughout your FIRE journey.
                </p>
              </div>
            </Link>

            <Link href="/blog/fire-withdrawal-strategies" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <TrendingUp className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  Withdrawal Strategies
                </h3>
                <p className="text-sm text-gray-600">
                  Optimize retirement drawdown for portfolio longevity.
                </p>
              </div>
            </Link>

            <Link href="/blog/healthcare-planning-fire" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  Healthcare Planning
                </h3>
                <p className="text-sm text-gray-600">
                  Complete healthcare coverage strategy for early retirement.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}