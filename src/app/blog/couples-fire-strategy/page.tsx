'use client';

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Users, Calculator, TrendingUp, Clock, Target, AlertCircle, CheckCircle, DollarSign, PiggyBank, Shield, Home, Baby, Briefcase, Globe, Calendar } from "lucide-react";
import { useState } from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, ComposedChart, RadialBarChart, RadialBar } from 'recharts';

const dualIncomeAdvantage = [
  { scenario: 'Single $100K Income', total: 100000, taxes: 22000, net: 78000, savings: 39000, years: 22 },
  { scenario: 'Dual $50K Each', total: 100000, taxes: 16000, net: 84000, savings: 42000, years: 20 },
  { scenario: 'Dual $75K Each', total: 150000, taxes: 28000, net: 122000, savings: 73000, years: 12 },
  { scenario: 'Dual $100K Each', total: 200000, taxes: 44000, net: 156000, savings: 109000, years: 8 },
];

const savingsAcceleration = [
  { year: 0, single: 0, couple: 0, powerCouple: 0 },
  { year: 5, single: 250000, couple: 400000, powerCouple: 650000 },
  { year: 10, single: 600000, couple: 950000, powerCouple: 1600000 },
  { year: 15, single: 1100000, couple: 1750000, powerCouple: 2900000 },
  { year: 20, single: 1750000, couple: 2800000, powerCouple: 4600000 },
];

const expenseSharing = [
  { category: 'Housing', single: 2500, couple: 3000, perPerson: 1500, savings: 1000 },
  { category: 'Utilities', single: 200, couple: 250, perPerson: 125, savings: 75 },
  { category: 'Internet', single: 80, couple: 80, perPerson: 40, savings: 40 },
  { category: 'Groceries', single: 400, couple: 600, perPerson: 300, savings: 100 },
  { category: 'Insurance', single: 300, couple: 450, perPerson: 225, savings: 75 },
  { category: 'Transportation', single: 600, couple: 800, perPerson: 400, savings: 200 },
];

const retirementStrategies = [
  { 
    strategy: 'Synchronized',
    partner1Retire: 45,
    partner2Retire: 45,
    totalWorkYears: 20,
    portfolioNeeded: 1750000,
    healthcareSolution: 'ACA Marketplace'
  },
  {
    strategy: 'Staggered',
    partner1Retire: 42,
    partner2Retire: 50,
    totalWorkYears: 22,
    portfolioNeeded: 1500000,
    healthcareSolution: 'Partner 2 employer'
  },
  {
    strategy: 'Sequential',
    partner1Retire: 40,
    partner2Retire: 55,
    totalWorkYears: 25,
    portfolioNeeded: 1250000,
    healthcareSolution: 'Continuous coverage'
  },
];

const taxOptimization = [
  { income: 80000, single: 13000, married: 9000, savings: 4000 },
  { income: 120000, single: 24000, married: 18000, savings: 6000 },
  { income: 160000, single: 38000, married: 28000, savings: 10000 },
  { income: 200000, single: 50000, married: 38000, savings: 12000 },
  { income: 250000, single: 68000, married: 52000, savings: 16000 },
];

const accountContributions = [
  { account: '401(k) Partner 1', limit: 23000, match: 6000, total: 29000 },
  { account: '401(k) Partner 2', limit: 23000, match: 4500, total: 27500 },
  { account: 'IRA Partner 1', limit: 7000, match: 0, total: 7000 },
  { account: 'IRA Partner 2', limit: 7000, match: 0, total: 7000 },
  { account: 'HSA Family', limit: 8300, match: 1000, total: 9300 },
  { account: 'Mega Backdoor', limit: 40000, match: 0, total: 40000 },
];

const relationshipDynamics = [
  { factor: 'Financial Goals', alignment: 9, impact: 'Critical' },
  { factor: 'Risk Tolerance', alignment: 7, impact: 'High' },
  { factor: 'Spending Habits', alignment: 6, impact: 'High' },
  { factor: 'Career Ambitions', alignment: 8, impact: 'Medium' },
  { factor: 'Family Planning', alignment: 9, impact: 'Critical' },
  { factor: 'Geographic Preferences', alignment: 7, impact: 'Medium' },
];

export default function CouplesFireStrategyArticle() {
  const [partner1Income, setPartner1Income] = useState(85000);
  const [partner2Income, setPartner2Income] = useState(75000);
  const [sharedExpenses, setSharedExpenses] = useState(5000);
  const [savingsRate, setSavingsRate] = useState(55);

  const totalIncome = partner1Income + partner2Income;
  const monthlySavings = Math.round((totalIncome * savingsRate / 100) / 12);
  const fireNumber = sharedExpenses * 12 * 25;
  const yearsToFire = Math.round(Math.log(fireNumber / (monthlySavings * 12 / 0.07)) / Math.log(1.07));

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
            <span>January 20, 2025</span>
            <span>•</span>
            <span>16 min read</span>
            <span>•</span>
            <span className="px-2 py-1 bg-rose-100 text-rose-800 rounded-full text-xs font-medium">Strategy Guide</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Couples FIRE Calculator: How Dual Incomes Accelerate Independence
          </h1>
          <p className="text-xl text-gray-600">
            Complete guide to achieving financial independence as a couple. Learn dual-income optimization, 
            tax strategies, synchronized retirement planning, and relationship dynamics for FIRE success.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose prose-lg max-w-none">
          
          {/* Introduction */}
          <section className="mb-12">
            <p className="text-lg leading-relaxed text-gray-700">
              Pursuing financial independence as a couple offers unique advantages that can cut years—even decades—off 
              your journey to FIRE. Two incomes, shared expenses, double the tax-advantaged account space, and 
              complementary skills create a powerful wealth-building engine. But it also requires alignment, 
              communication, and strategic planning that single FIRE seekers don't face.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700">
              This comprehensive guide explores how couples can leverage their partnership to accelerate FIRE, 
              navigate the challenges of joint financial planning, and create a retirement strategy that works for 
              both partners. Whether you're just starting or well on your way, you'll find actionable strategies 
              to optimize your dual-income advantage.
            </p>

            {/* Interactive Calculator */}
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-rose-900 mb-4">Quick Couples FIRE Calculator</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-rose-800">Partner 1 Income</label>
                    <input 
                      type="range" 
                      min="40000" 
                      max="200000" 
                      step="5000"
                      value={partner1Income}
                      onChange={(e) => setPartner1Income(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                    <span className="text-sm text-rose-700">${partner1Income.toLocaleString()}</span>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-rose-800">Partner 2 Income</label>
                    <input 
                      type="range" 
                      min="40000" 
                      max="200000" 
                      step="5000"
                      value={partner2Income}
                      onChange={(e) => setPartner2Income(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                    <span className="text-sm text-rose-700">${partner2Income.toLocaleString()}</span>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-rose-800">Joint Savings Rate</label>
                    <input 
                      type="range" 
                      min="30" 
                      max="70" 
                      value={savingsRate}
                      onChange={(e) => setSavingsRate(Number(e.target.value))}
                      className="w-full mt-1"
                    />
                    <span className="text-sm text-rose-700">{savingsRate}%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-3">Your Couples FIRE Projection</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Combined Income:</span>
                      <span className="font-bold">${totalIncome.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Monthly Savings:</span>
                      <span className="font-bold text-green-600">${monthlySavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">FIRE Number:</span>
                      <span className="font-bold">${fireNumber.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Years to FIRE:</span>
                      <span className="font-bold text-rose-600">{yearsToFire} years</span>
                    </div>
                  </div>
                  <Link 
                    href="/fire-calculator-couples" 
                    className="mt-4 block text-center px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors"
                  >
                    Use Full Calculator →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* The Dual Income Advantage */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Mathematics of Dual-Income FIRE</h2>
            
            <p className="text-lg leading-relaxed text-gray-700">
              Couples have a mathematical advantage in pursuing FIRE that goes beyond simply adding two incomes 
              together. Tax benefits, shared expenses, and economies of scale create a compounding effect that 
              can dramatically accelerate your timeline to financial independence.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 my-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Income Scenarios & Time to FIRE</h3>
              <ResponsiveContainer width="100%" height={300}>
                <ComposedChart data={dualIncomeAdvantage}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="scenario" angle={-20} textAnchor="end" height={100} />
                  <YAxis yAxisId="left" label={{ value: 'Annual Amount ($)', angle: -90, position: 'insideLeft' }} />
                  <YAxis yAxisId="right" orientation="right" label={{ value: 'Years to FIRE', angle: 90, position: 'insideRight' }} />
                  <Tooltip formatter={(value) => typeof value === 'number' ? value.toLocaleString() : value} />
                  <Legend />
                  <Bar yAxisId="left" dataKey="net" fill="#10b981" name="Net Income" />
                  <Bar yAxisId="left" dataKey="taxes" fill="#ef4444" name="Taxes" />
                  <Line yAxisId="right" type="monotone" dataKey="years" stroke="#f59e0b" name="Years to FIRE" strokeWidth={3} />
                </ComposedChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                Two $75K incomes reach FIRE faster than one $100K income due to lower tax rates and shared expenses
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 not-prose">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-green-900 mb-2">Tax Advantages</h3>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Lower effective tax rate</li>
                  <li>• Double standard deduction</li>
                  <li>• Income splitting benefits</li>
                  <li>• More tax bracket space</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <Home className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Shared Expenses</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Housing costs split</li>
                  <li>• Single utility bills</li>
                  <li>• Shared subscriptions</li>
                  <li>• Bulk buying power</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-purple-900 mb-2">Risk Mitigation</h3>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Two income sources</li>
                  <li>• Job loss protection</li>
                  <li>• Health insurance options</li>
                  <li>• Career flexibility</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Expense Optimization */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Shared Expenses</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Expense Comparison: Single vs Couple</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={expenseSharing}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis label={{ value: 'Monthly Cost ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `$${value}`} />
                  <Legend />
                  <Bar dataKey="single" fill="#94a3b8" name="Single Person" />
                  <Bar dataKey="perPerson" fill="#10b981" name="Per Person (Couple)" />
                  <Bar dataKey="savings" fill="#fbbf24" name="Savings per Person" />
                </BarChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                Couples save approximately $1,500/month per person through expense sharing
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">Fixed Cost Advantages</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Housing (rent/mortgage)</span>
                    <span className="font-bold text-green-900">40% savings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Utilities & Internet</span>
                    <span className="font-bold text-green-900">50% savings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Insurance (bundled)</span>
                    <span className="font-bold text-green-900">25% savings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-green-800">Streaming services</span>
                    <span className="font-bold text-green-900">50% savings</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Variable Cost Efficiencies</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800">Groceries (bulk buying)</span>
                    <span className="font-bold text-blue-900">25% savings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800">Transportation (car sharing)</span>
                    <span className="font-bold text-blue-900">30% savings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800">Travel (shared rooms)</span>
                    <span className="font-bold text-blue-900">35% savings</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-blue-800">Entertainment</span>
                    <span className="font-bold text-blue-900">20% savings</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tax Optimization Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Optimization for Couples</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Married couples have unique tax planning opportunities that can save tens of thousands annually. 
              Understanding how to optimize your filing status, retirement contributions, and income allocation 
              can dramatically accelerate your path to FIRE.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tax Savings: Single vs Married Filing Jointly</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={taxOptimization}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="income" 
                    tickFormatter={(value) => `$${value/1000}K`}
                    label={{ value: 'Combined Income', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    label={{ value: 'Annual Taxes ($)', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => `$${value/1000}K`}
                  />
                  <Tooltip formatter={(value) => value ? `$${value.toLocaleString()}` : ''} />
                  <Legend />
                  <Line type="monotone" dataKey="single" stroke="#ef4444" name="Two Singles" strokeWidth={2} />
                  <Line type="monotone" dataKey="married" stroke="#10b981" name="Married Filing Jointly" strokeWidth={2} />
                  <Line type="monotone" dataKey="savings" stroke="#fbbf24" name="Tax Savings" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                Married couples save $4,000-16,000 annually in taxes compared to two single filers
              </p>
            </div>

            <div className="space-y-6 not-prose">
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h3 className="text-lg font-semibold text-indigo-900 mb-4">Strategic Tax Moves for Couples</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-3">Income Optimization</h4>
                    <ul className="text-sm text-indigo-700 space-y-2">
                      <li>• Max out lower earner's 401(k) first</li>
                      <li>• Utilize spousal IRA contributions</li>
                      <li>• Strategic bonus timing</li>
                      <li>• Income shifting strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-800 mb-3">Deduction Strategies</h4>
                    <ul className="text-sm text-indigo-700 space-y-2">
                      <li>• $27,700 standard deduction (2024)</li>
                      <li>• Bunching charitable donations</li>
                      <li>• HSA family contributions</li>
                      <li>• Mortgage interest optimization</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Maximizing Retirement Account Space</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Account Type</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Annual Limit</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Employer Match</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Total Potential</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {accountContributions.map((account, index) => (
                        <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{account.account}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">${account.limit.toLocaleString()}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">${account.match.toLocaleString()}</td>
                          <td className="px-4 py-3 text-sm font-bold text-green-600">${account.total.toLocaleString()}</td>
                        </tr>
                      ))}
                      <tr className="bg-green-50">
                        <td className="px-4 py-3 text-sm font-bold text-green-900">Total Annual</td>
                        <td className="px-4 py-3 text-sm text-green-800">$110,300</td>
                        <td className="px-4 py-3 text-sm text-green-800">$11,500</td>
                        <td className="px-4 py-3 text-sm font-bold text-green-900">$119,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  Couples can shelter nearly $120K annually in tax-advantaged accounts
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Acceleration */}
          <section className="mb-12 not-prose">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Growth Acceleration</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Wealth Accumulation: Single vs Couples</h3>
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={savingsAcceleration}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                  <YAxis 
                    label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft' }}
                    tickFormatter={(value) => value ? `$${(value / 1000000).toFixed(1)}M` : ''}
                  />
                  <Tooltip formatter={(value) => value ? `$${value.toLocaleString()}` : ''} />
                  <Legend />
                  <defs>
                    <linearGradient id="single" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="couple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    </linearGradient>
                    <linearGradient id="power" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="single" stroke="#94a3b8" fillOpacity={1} fill="url(#single)" name="Single $75K" />
                  <Area type="monotone" dataKey="couple" stroke="#3b82f6" fillOpacity={1} fill="url(#couple)" name="Couple $150K" />
                  <Area type="monotone" dataKey="powerCouple" stroke="#10b981" fillOpacity={1} fill="url(#power)" name="Power Couple $200K+" />
                </AreaChart>
              </ResponsiveContainer>
              <p className="text-sm text-gray-600 mt-4">
                Couples reach traditional FIRE 5-10 years faster than singles with equivalent individual incomes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-2">1.6x</div>
                <div className="text-sm text-gray-600">Faster accumulation</div>
                <div className="text-xs text-gray-500 mt-2">Average couple vs single</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$1.5M</div>
                <div className="text-sm text-gray-600">Additional wealth at 20 years</div>
                <div className="text-xs text-gray-500 mt-2">Couple advantage</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">8-12</div>
                <div className="text-sm text-gray-600">Years to FIRE</div>
                <div className="text-xs text-gray-500 mt-2">Typical dual-income couple</div>
              </div>
            </div>
          </section>

          {/* Retirement Timing Strategies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Retirement Timing</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Couples have unique flexibility in retirement timing that can optimize healthcare coverage, 
              reduce portfolio requirements, and provide psychological benefits. The three main strategies each 
              offer distinct advantages.
            </p>

            <div className="space-y-6 not-prose">
              {retirementStrategies.map((strategy, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{strategy.strategy} Retirement</h3>
                      <p className="text-sm text-gray-600">
                        Partner 1: Age {strategy.partner1Retire} | Partner 2: Age {strategy.partner2Retire}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-green-600">${(strategy.portfolioNeeded / 1000000).toFixed(2)}M</p>
                      <p className="text-xs text-gray-600">Portfolio needed</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-xs text-gray-600 mb-1">Total Work Years</div>
                      <div className="font-bold text-gray-900">{strategy.totalWorkYears}</div>
                    </div>
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <div className="text-xs text-blue-600 mb-1">Healthcare Solution</div>
                      <div className="font-medium text-blue-900 text-xs">{strategy.healthcareSolution}</div>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <div className="text-xs text-green-600 mb-1">Risk Level</div>
                      <div className="font-bold text-green-900">
                        {strategy.strategy === 'Synchronized' ? 'Higher' : 
                         strategy.strategy === 'Staggered' ? 'Medium' : 'Lower'}
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Best For:</h4>
                    <p className="text-sm text-gray-600">
                      {strategy.strategy === 'Synchronized' ? 
                        'Couples who want to travel together and have sufficient savings for healthcare costs' :
                       strategy.strategy === 'Staggered' ? 
                        'Couples seeking balance between early freedom and healthcare security' :
                        'Risk-averse couples or those with different retirement readiness levels'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-xl p-6 mt-6 not-prose">
              <h3 className="text-lg font-semibold text-amber-900 mb-3">Healthcare Bridge Strategies</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Before Medicare (Under 65)</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• One partner works for benefits</li>
                    <li>• COBRA for 18 months transition</li>
                    <li>• ACA marketplace with subsidies</li>
                    <li>• Healthcare sharing ministries</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-amber-800 mb-2">Cost Considerations</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Budget $1,200-2,000/month</li>
                    <li>• Higher deductible plans + HSA</li>
                    <li>• Geographic arbitrage for lower costs</li>
                    <li>• Part-time work at 20 hrs/week</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Communication & Alignment */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Communication & Goal Alignment</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              The biggest challenge for couples pursuing FIRE isn't mathematical—it's relational. Success requires 
              ongoing communication, compromise, and alignment on both the journey and the destination.
            </p>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 not-prose">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Critical Alignment Areas</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={relationshipDynamics} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" domain={[0, 10]} />
                  <YAxis dataKey="factor" type="category" width={150} />
                  <Tooltip />
                  <Bar dataKey="alignment" fill="#3b82f6" name="Importance Score" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid md:grid-cols-2 gap-6 not-prose">
              <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                <h3 className="text-lg font-semibold text-rose-900 mb-4">Monthly Money Meetings</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-rose-800">Week 1: Review</h4>
                    <ul className="text-sm text-rose-700 mt-1">
                      <li>• Track spending vs budget</li>
                      <li>• Investment performance</li>
                      <li>• Progress to FIRE number</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-800">Week 2: Planning</h4>
                    <ul className="text-sm text-rose-700 mt-1">
                      <li>• Upcoming expenses</li>
                      <li>• Savings rate adjustments</li>
                      <li>• Investment rebalancing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-rose-800">Week 3: Dreams</h4>
                    <ul className="text-sm text-rose-700 mt-1">
                      <li>• Retirement vision alignment</li>
                      <li>• Travel and hobby planning</li>
                      <li>• Family considerations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4">Common Friction Points</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-purple-800">Risk Tolerance Mismatch</h4>
                    <p className="text-sm text-purple-700">
                      Solution: Create separate "play" investment accounts
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800">Spending Differences</h4>
                    <p className="text-sm text-purple-700">
                      Solution: Individual "fun money" budgets
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800">Career Ambition Gaps</h4>
                    <p className="text-sm text-purple-700">
                      Solution: Staggered retirement planning
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-800">Family Planning</h4>
                    <p className="text-sm text-purple-700">
                      Solution: Build flexibility into FIRE timeline
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Kids and FIRE */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FIRE with Children: Adjusting the Plan</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-6">
              Having children doesn't mean giving up on FIRE—it means adjusting your strategy. Many couples 
              successfully achieve financial independence with kids by planning ahead and making smart trade-offs.
            </p>

            <div className="bg-blue-50 rounded-xl p-6 not-prose">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Financial Impact of Children</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">Direct Costs (0-18)</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Childcare: $12-20K/year</li>
                    <li>• Healthcare: $2-4K/year</li>
                    <li>• Food/Clothing: $3-5K/year</li>
                    <li>• Activities: $2-5K/year</li>
                    <li className="font-bold pt-2">Total: $233K per child</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">Education Costs</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Public school: $0-3K/year</li>
                    <li>• Private school: $15-40K/year</li>
                    <li>• College (in-state): $25K/year</li>
                    <li>• College (private): $55K/year</li>
                    <li className="font-bold pt-2">529 target: $100-200K</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-3">FIRE Adjustments</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Add 3-5 years to timeline</li>
                    <li>• Increase FIRE number 20-30%</li>
                    <li>• Consider Barista FIRE</li>
                    <li>• Geographic arbitrage</li>
                    <li className="font-bold pt-2">New target: $2.2-2.5M</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Strategies for Parent FIRE</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-gray-700 space-y-1">
                    <li>• One parent stays home (saves childcare)</li>
                    <li>• Move to excellent public school districts</li>
                    <li>• Start 529s early for compound growth</li>
                    <li>• Teach kids about money and FIRE</li>
                  </ul>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Consider au pair vs daycare</li>
                    <li>• Family travel hacking strategies</li>
                    <li>• Multi-generational housing</li>
                    <li>• Community childcare swaps</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Couple FIRE Stories</h2>
            
            <div className="space-y-6 not-prose">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">The Tech Power Couple</h3>
                    <p className="text-sm text-gray-600">Software Engineers in Seattle</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    FIRE at 35
                  </span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Combined Income</div>
                    <div className="font-bold">$380K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Savings Rate</div>
                    <div className="font-bold">72%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Years to FIRE</div>
                    <div className="font-bold">7 years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">FIRE Number</div>
                    <div className="font-bold">$2.5M</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Strategies:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Maxed out all retirement accounts including mega backdoor Roth</li>
                    <li>• House hacked with duplex rental</li>
                    <li>• No car ownership (bike + transit)</li>
                    <li>• Traveled using credit card churning</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">The Teacher Duo</h3>
                    <p className="text-sm text-gray-600">Public School Teachers with Pensions</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Coast FIRE at 40
                  </span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Combined Income</div>
                    <div className="font-bold">$110K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Savings Rate</div>
                    <div className="font-bold">45%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Years to Coast</div>
                    <div className="font-bold">12 years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Coast Number</div>
                    <div className="font-bold">$600K</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Strategies:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Leveraged pension as bond allocation</li>
                    <li>• Summers off for side income (tutoring)</li>
                    <li>• Geographic arbitrage to low-cost area</li>
                    <li>• Planning to coast with substitute teaching</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">The Family Focused</h3>
                    <p className="text-sm text-gray-600">Marketing Manager + Stay-at-Home Parent</p>
                  </div>
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                    Barista FIRE at 45
                  </span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Single Income</div>
                    <div className="font-bold">$95K</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Savings Rate</div>
                    <div className="font-bold">35%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Years to Barista</div>
                    <div className="font-bold">15 years</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-600">Target Number</div>
                    <div className="font-bold">$1.1M</div>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Strategies:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• One parent home saves $20K/year childcare</li>
                    <li>• Side business (blog) generates $15K/year</li>
                    <li>• Planning part-time work once kids in school</li>
                    <li>• Using 529s for education planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Implementation Checklist */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Couples FIRE Action Plan</h2>
            
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-8 not-prose">
              <h3 className="text-xl font-semibold text-rose-900 mb-6">90-Day Couples FIRE Sprint</h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-medium text-rose-800 mb-4">Days 1-30: Foundation</h4>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Complete financial audit together</p>
                        <p className="text-sm text-gray-600">All accounts, debts, assets, expenses</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Define shared FIRE vision</p>
                        <p className="text-sm text-gray-600">Write out retirement lifestyle goals</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Calculate joint FIRE number</p>
                        <Link href="/fire-calculator-couples" className="text-sm text-rose-600 hover:text-rose-700">
                          Use Couples FIRE Calculator →
                        </Link>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Set up joint tracking system</p>
                        <p className="text-sm text-gray-600">Mint, YNAB, or spreadsheet</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-rose-800 mb-4">Days 31-60: Optimization</h4>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Review tax filing status</p>
                        <p className="text-sm text-gray-600">Married filing jointly vs separately</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Maximize employer benefits</p>
                        <p className="text-sm text-gray-600">401(k) matches, HSAs, insurance</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Consolidate and reduce expenses</p>
                        <p className="text-sm text-gray-600">Combine accounts, negotiate bills</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Open missing investment accounts</p>
                        <p className="text-sm text-gray-600">IRAs, taxable brokerage, 529s if needed</p>
                      </div>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-rose-800 mb-4">Days 61-90: Acceleration</h4>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Automate all investments</p>
                        <p className="text-sm text-gray-600">Set up automatic transfers post-paycheck</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Create "fun money" budgets</p>
                        <p className="text-sm text-gray-600">Individual discretionary spending</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Schedule monthly money dates</p>
                        <p className="text-sm text-gray-600">Recurring calendar events</p>
                      </div>
                    </label>
                    <label className="flex items-start gap-3">
                      <input type="checkbox" className="mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Plan retirement timing strategy</p>
                        <p className="text-sm text-gray-600">Synchronized, staggered, or sequential</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Power of Partnership</h2>
            
            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Pursuing FIRE as a couple isn't just about combining two incomes—it's about creating a synergy that 
              accelerates your journey to financial independence far beyond what either partner could achieve alone. 
              The mathematical advantages are compelling: shared expenses, tax optimization, and double the investment 
              space can cut your time to FIRE nearly in half.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              But the real power of couples FIRE lies in the partnership itself. Having someone to share the journey 
              with—to celebrate milestones, navigate challenges, and hold each other accountable—transforms what can 
              be a lonely pursuit into a shared adventure. The conversations about money become conversations about 
              values, dreams, and the life you want to build together.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Success requires more than spreadsheets and savings rates. It demands honest communication about risk 
              tolerance, lifestyle expectations, and retirement visions. It requires compromise when one partner wants 
              to save more aggressively while the other values present enjoyment. It means supporting each other through 
              job changes, market downturns, and the inevitable bumps along the way.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 mb-4">
              Whether you choose synchronized retirement to travel the world together, staggered timing for healthcare 
              security, or sequential retirement for maximum flexibility, the key is alignment and communication. Start 
              with your shared vision, leverage your combined financial power, and maintain open dialogue throughout 
              the journey.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Remember: the couple that FIRES together, retires together—often years or even decades before they ever 
              imagined possible. Your journey to financial independence isn't just about the destination; it's about 
              strengthening your partnership and building a life of shared purpose and freedom.
            </p>
          </section>

          {/* Related Resources */}
          <section className="mb-12 not-prose">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Continue Your Couples FIRE Journey</h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/fire-calculator-couples" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💑</span>
                  <h3 className="font-semibold text-gray-900">Couples Calculator</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Calculate your joint path to financial independence
                </p>
              </Link>

              <Link href="/blog/coast-fire-vs-barista-fire" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">⛵</span>
                  <h3 className="font-semibold text-gray-900">Semi-Retirement Options</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Explore Coast and Barista FIRE for couples
                </p>
              </Link>

              <Link href="/blog/lean-fire-vs-fat-fire" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">💰</span>
                  <h3 className="font-semibold text-gray-900">Lifestyle Choices</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Decide between Lean and Fat FIRE together
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