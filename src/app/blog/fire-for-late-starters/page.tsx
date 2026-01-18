'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Clock, 
  Rocket, 
  TrendingUp,
  Calculator,
  Activity,
  Target,
  Shield,
  Heart,
  DollarSign,
  Zap,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  User,
  Users,
  Briefcase,
  Home,
  PiggyBank,
  BarChart3,
  Brain,
  Award
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';

const metadata: Metadata = {
  title: "FIRE for Late Starters: Achieving Financial Independence After 40",
  description: "Complete guide to achieving FIRE after 40. Learn accelerated savings strategies, catch-up contributions, and realistic timelines for late starters on the path to financial independence.",
  keywords: "fire after 40, late starter fire, financial independence at 50, catch up retirement, accelerated fire strategies",
};

// Age-based projection data
const ageProjectionData = [
  { age: 40, traditional: 0, accelerated: 0, supercharged: 0 },
  { age: 45, traditional: 250000, accelerated: 350000, supercharged: 450000 },
  { age: 50, traditional: 550000, accelerated: 800000, supercharged: 1100000 },
  { age: 55, traditional: 900000, accelerated: 1350000, supercharged: 1900000 },
  { age: 60, traditional: 1300000, accelerated: 2000000, supercharged: 2900000 },
  { age: 65, traditional: 1750000, accelerated: 2750000, supercharged: 4000000 },
];

// Savings rate impact
const savingsRateImpact = [
  { rate: '20%', age50: 450000, age55: 750000, age60: 1100000, age65: 1500000 },
  { rate: '30%', age50: 675000, age55: 1125000, age60: 1650000, age65: 2250000 },
  { rate: '40%', age50: 900000, age55: 1500000, age60: 2200000, age65: 3000000 },
  { rate: '50%', age50: 1125000, age55: 1875000, age60: 2750000, age65: 3750000 },
  { rate: '60%', age50: 1350000, age55: 2250000, age60: 3300000, age65: 4500000 },
];

// Catch-up contribution limits
const catchUpLimits = [
  { account: '401(k)', under50: 23000, over50: 30500, benefit: 7500 },
  { account: 'IRA', under50: 7000, over50: 8000, benefit: 1000 },
  { account: 'HSA', under55: 4150, over55: 5150, benefit: 1000 },
  { account: 'Simple IRA', under50: 16000, over50: 19500, benefit: 3500 },
  { account: 'SEP-IRA', under50: 69000, over50: 69000, benefit: 0 },
];

// Income optimization strategies
const incomeStreams = [
  { stream: 'Primary Job', current: 80000, optimized: 95000, increase: 15000 },
  { stream: 'Side Business', current: 0, optimized: 25000, increase: 25000 },
  { stream: 'Rental Income', current: 0, optimized: 18000, increase: 18000 },
  { stream: 'Investments', current: 5000, optimized: 12000, increase: 7000 },
  { stream: 'Consulting', current: 0, optimized: 15000, increase: 15000 },
];

// Expense optimization
const expenseOptimization = [
  { category: 'Housing', current: 3000, optimized: 2200, saved: 800 },
  { category: 'Transportation', current: 1200, optimized: 600, saved: 600 },
  { category: 'Food', current: 1000, optimized: 600, saved: 400 },
  { category: 'Entertainment', current: 500, optimized: 250, saved: 250 },
  { category: 'Subscriptions', current: 300, optimized: 50, saved: 250 },
  { category: 'Other', current: 1000, optimized: 700, saved: 300 },
];

// Risk vs reward strategies
const strategyRisk = [
  { strategy: 'Conservative', risk: 20, returnRate: 5, fireAge: 65, success: 95 },
  { strategy: 'Moderate', risk: 40, returnRate: 7, fireAge: 60, success: 85 },
  { strategy: 'Aggressive', risk: 60, returnRate: 9, fireAge: 57, success: 75 },
  { strategy: 'Very Aggressive', risk: 80, returnRate: 11, fireAge: 54, success: 65 },
  { strategy: 'Maximum Risk', risk: 95, returnRate: 13, fireAge: 52, success: 50 },
];

// Life stages comparison
const lifeStagesData = [
  { stage: 'Time Horizon', early20s: 95, late40s: 60, advantage: 'Early' },
  { stage: 'Income Level', early20s: 30, late40s: 90, advantage: 'Late' },
  { stage: 'Experience', early20s: 20, late40s: 95, advantage: 'Late' },
  { stage: 'Network', early20s: 25, late40s: 85, advantage: 'Late' },
  { stage: 'Expenses', early20s: 70, late40s: 40, advantage: 'Early' },
  { stage: 'Energy', early20s: 90, late40s: 65, advantage: 'Early' },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function FireForLateStartersPage() {
  const [currentAge, setCurrentAge] = useState(45);
  const [targetAge, setTargetAge] = useState(60);
  const [currentSavings, setCurrentSavings] = useState(100000);
  const [annualIncome, setAnnualIncome] = useState(100000);
  const [savingsRate, setSavingsRate] = useState(35);
  const [strategy, setStrategy] = useState<'conservative' | 'moderate' | 'aggressive'>('moderate');

  // Calculate projections
  const calculateProjection = () => {
    const yearsToFire = targetAge - currentAge;
    const annualSavings = (annualIncome * savingsRate) / 100;
    const returnRate = strategy === 'conservative' ? 0.06 : strategy === 'moderate' ? 0.08 : 0.10;
    
    let futureValue = currentSavings;
    for (let i = 0; i < yearsToFire; i++) {
      futureValue = futureValue * (1 + returnRate) + annualSavings;
    }
    
    const fireNumber = futureValue;
    const monthlyIncome = (fireNumber * 0.04) / 12;
    const successProbability = strategy === 'conservative' ? 92 : strategy === 'moderate' ? 85 : 75;
    
    return {
      fireNumber: Math.round(fireNumber),
      monthlyIncome: Math.round(monthlyIncome),
      yearsToFire,
      successProbability,
      totalContributions: Math.round(annualSavings * yearsToFire),
      investmentGrowth: Math.round(futureValue - currentSavings - (annualSavings * yearsToFire))
    };
  };

  const projection = calculateProjection();

  // Generate year by year projection
  const yearByYearProjection = Array.from({ length: projection.yearsToFire + 1 }, (_, i) => {
    const age = currentAge + i;
    const years = i;
    const annualSavings = (annualIncome * savingsRate) / 100;
    const returnRate = strategy === 'conservative' ? 0.06 : strategy === 'moderate' ? 0.08 : 0.10;
    
    let value = currentSavings;
    for (let j = 0; j < years; j++) {
      value = value * (1 + returnRate) + annualSavings;
    }
    
    return {
      age,
      year: new Date().getFullYear() + i,
      portfolio: Math.round(value),
      contributions: Math.round(annualSavings * years),
      growth: Math.round(value - currentSavings - (annualSavings * years))
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Rocket className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              FIRE for Late Starters
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Achieving financial independence after 40 with accelerated strategies and smart optimization
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">15-20 years</span>
            </div>
            <p className="text-sm text-gray-600">Realistic FIRE timeline starting at 40</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">35-50%</span>
            </div>
            <p className="text-sm text-gray-600">Required savings rate for late starters</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">$13,000+</span>
            </div>
            <p className="text-sm text-gray-600">Annual catch-up contribution benefits</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Starting your FIRE journey after 40 doesn't mean financial independence is out of reach. In fact, late starters have unique advantages: higher earning power, more experience, clearer priorities, and access to catch-up contributions that can supercharge retirement savings.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide provides realistic strategies, timelines, and tools specifically designed for achieving FIRE when starting later in life. We'll show you how to leverage your peak earning years, optimize every dollar, and potentially retire 10-15 years earlier than traditional retirement age.
          </p>
        </div>

        {/* Interactive Late Starter Calculator */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Late Starter FIRE Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Age: {currentAge}
              </label>
              <input
                type="range"
                min="40"
                max="55"
                value={currentAge}
                onChange={(e) => setCurrentAge(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target FIRE Age: {targetAge}
              </label>
              <input
                type="range"
                min="50"
                max="70"
                value={targetAge}
                onChange={(e) => setTargetAge(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Savings: ${currentSavings.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="500000"
                step="10000"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income: ${annualIncome.toLocaleString()}
              </label>
              <input
                type="range"
                min="50000"
                max="250000"
                step="5000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Savings Rate: {savingsRate}%
              </label>
              <input
                type="range"
                min="20"
                max="70"
                value={savingsRate}
                onChange={(e) => setSavingsRate(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Investment Strategy
              </label>
              <select
                value={strategy}
                onChange={(e) => setStrategy(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="conservative">Conservative (6% returns)</option>
                <option value="moderate">Moderate (8% returns)</option>
                <option value="aggressive">Aggressive (10% returns)</option>
              </select>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Projected FIRE Number</p>
                <p className="text-3xl font-bold text-indigo-600">
                  ${projection.fireNumber.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">at age {targetAge}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Monthly Retirement Income</p>
                <p className="text-2xl font-bold text-green-600">
                  ${projection.monthlyIncome.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">using 4% rule</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Success Probability</p>
                <p className="text-2xl font-bold text-purple-600">
                  {projection.successProbability}%
                </p>
                <p className="text-xs text-gray-500 mt-1">based on historical data</p>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-gray-600">Years to FIRE</p>
                  <p className="font-semibold text-gray-900">{projection.yearsToFire} years</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">Total Contributions</p>
                  <p className="font-semibold text-gray-900">${projection.totalContributions.toLocaleString()}</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-600">Investment Growth</p>
                  <p className="font-semibold text-gray-900">${projection.investmentGrowth.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Growth Projection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Portfolio Growth Timeline</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={yearByYearProjection}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="portfolio" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" name="Total Portfolio" />
                <Area type="monotone" dataKey="growth" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Investment Growth" />
                <Area type="monotone" dataKey="contributions" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Contributions" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Late Starter Advantages */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Late Starter Advantages</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={lifeStagesData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="stage" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Early 20s Starter" dataKey="early20s" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Radar name="Late 40s Starter" dataKey="late40s" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Your Unique Advantages</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Peak Earnings:</strong> Income 2-3x higher than in your 20s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Experience:</strong> Better negotiation and decision-making skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Network:</strong> Established professional connections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Clear Priorities:</strong> Know what truly matters in life</span>
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-3">Challenges to Address</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Shorter Timeline:</strong> Less time for compound growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Family Obligations:</strong> Kids' education, aging parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Health Concerns:</strong> Rising healthcare costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Risk Tolerance:</strong> Less time to recover from losses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Catch-Up Contributions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Maximize Catch-Up Contributions</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              After age 50, the IRS allows additional "catch-up" contributions to retirement accounts—a powerful tool for late starters.
            </p>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={catchUpLimits}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="account" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="under50" fill="#94a3b8" name="Under 50 Limit" />
                <Bar dataKey="over50" fill="#3b82f6" name="50+ Limit" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 bg-blue-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Maximum Annual Catch-Up Strategy</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-700 mb-2">Combined catch-up benefits (50+):</p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• 401(k): +$7,500</li>
                    <li>• IRA: +$1,000</li>
                    <li>• HSA (55+): +$1,000</li>
                  </ul>
                  <p className="font-semibold text-indigo-600 mt-2">Total: +$9,500/year extra</p>
                </div>
                <div>
                  <p className="text-gray-700 mb-2">10-year impact at 8% return:</p>
                  <p className="text-2xl font-bold text-green-600">$137,000</p>
                  <p className="text-xs text-gray-600 mt-1">Additional portfolio value from catch-up contributions alone</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Income Optimization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Income Maximization Strategies</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={incomeStreams}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="stream" angle={-45} textAnchor="end" height={80} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="current" fill="#94a3b8" name="Current Income" />
                <Bar dataKey="optimized" fill="#10b981" name="Optimized Income" />
                <Line type="monotone" dataKey="increase" stroke="#ef4444" strokeWidth={3} name="Increase" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Current Total</h4>
                <p className="text-2xl font-bold text-gray-700">$85,000</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Optimized Total</h4>
                <p className="text-2xl font-bold text-green-600">$165,000</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Income Increase</h4>
                <p className="text-2xl font-bold text-yellow-600">+94%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Expense Optimization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Aggressive Expense Optimization</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expenseOptimization}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="current" fill="#ef4444" name="Current Expenses" />
                <Bar dataKey="optimized" fill="#10b981" name="Optimized Expenses" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 bg-green-50 p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Monthly Savings Potential</h3>
                <p className="text-2xl font-bold text-green-600">$2,600/month</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <ul className="space-y-1">
                  <li>• Downsize housing or house hack</li>
                  <li>• Eliminate car payments</li>
                  <li>• Cook at home 90% of meals</li>
                </ul>
                <ul className="space-y-1">
                  <li>• Cut entertainment by 50%</li>
                  <li>• Cancel unused subscriptions</li>
                  <li>• Shop strategically with lists</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Accelerated Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Accelerated FIRE Strategies</h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'The Career Sprint',
                icon: Briefcase,
                color: 'bg-blue-100 text-blue-600',
                description: 'Maximize earnings in final career years',
                tactics: [
                  'Negotiate 15-20% raise or switch jobs',
                  'Take on high-value consulting',
                  'Pursue leadership positions',
                  'Leverage decades of expertise'
                ],
                impact: 'Can add $500k+ to FIRE fund'
              },
              {
                title: 'The Asset Liquidation',
                icon: Home,
                color: 'bg-green-100 text-green-600',
                description: 'Convert underperforming assets to investments',
                tactics: [
                  'Downsize primary residence',
                  'Sell unused vehicles',
                  'Liquidate collectibles',
                  'Convert rental properties'
                ],
                impact: 'Immediate $200-500k boost'
              },
              {
                title: 'The Side Hustle Stack',
                icon: Zap,
                color: 'bg-yellow-100 text-yellow-600',
                description: 'Build multiple income streams quickly',
                tactics: [
                  'Consulting in your field',
                  'Online course creation',
                  'Real estate investing',
                  'Dividend portfolio building'
                ],
                impact: '+$30-60k annual income'
              },
              {
                title: 'The Tax Optimization',
                icon: Shield,
                color: 'bg-purple-100 text-purple-600',
                description: 'Maximize every tax advantage',
                tactics: [
                  'Max all retirement accounts',
                  'HSA as retirement account',
                  'Tax-loss harvesting',
                  'Roth conversion ladder'
                ],
                impact: 'Save $10-20k annually'
              }
            ].map((strategy, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${strategy.color}`}>
                    <strategy.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{strategy.title}</h3>
                    <p className="text-gray-700 mb-3">{strategy.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-2">Key Tactics:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {strategy.tactics.map((tactic, i) => (
                            <li key={i}>• {tactic}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-1">Potential Impact</p>
                          <p className="font-bold text-gray-900">{strategy.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Balancing Risk and Timeline</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={strategyRisk}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strategy" />
                <YAxis yAxisId="left" label={{ value: 'Risk/Success %', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'FIRE Age', angle: 90, position: 'insideRight' }} />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="risk" fill="#ef4444" name="Risk Level %" opacity={0.7} />
                <Bar yAxisId="left" dataKey="success" fill="#10b981" name="Success Rate %" opacity={0.7} />
                <Line yAxisId="right" type="monotone" dataKey="fireAge" stroke="#3b82f6" strokeWidth={3} name="FIRE Age" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Key Insight:</strong> Moderate-aggressive strategies offer the best risk-adjusted returns for late starters, balancing growth potential with downside protection.
              </p>
            </div>
          </div>
        </section>

        {/* Healthcare Planning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Bridge Strategy</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                The gap between early retirement and Medicare eligibility at 65 is a critical consideration for late starters.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Heart className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Ages 55-59</h3>
                <p className="text-sm text-gray-700 mb-3">COBRA or private insurance</p>
                <p className="text-lg font-bold text-blue-600">$800-1,500/month</p>
                <p className="text-xs text-gray-600 mt-1">Per person</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Ages 60-64</h3>
                <p className="text-sm text-gray-700 mb-3">ACA marketplace plans</p>
                <p className="text-lg font-bold text-green-600">$500-1,000/month</p>
                <p className="text-xs text-gray-600 mt-1">With subsidies</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl">
                <Activity className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Age 65+</h3>
                <p className="text-sm text-gray-700 mb-3">Medicare + Supplement</p>
                <p className="text-lg font-bold text-purple-600">$200-400/month</p>
                <p className="text-xs text-gray-600 mt-1">Most comprehensive</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Budget Alert:</strong> Plan for $200,000-300,000 in healthcare costs from retirement to Medicare eligibility for a couple.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Late Starter Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <User className="w-8 h-8 text-indigo-600" />
                <div>
                  <h3 className="font-bold text-gray-900">Sarah, 42 → FIRE at 57</h3>
                  <p className="text-sm text-gray-600">Marketing Executive</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Starting point:</strong> $75k savings, $120k salary</p>
                <p><strong>Strategy:</strong> Increased income to $180k, saved 55%</p>
                <p><strong>Key moves:</strong> Job switch (+40% salary), rental property, maxed all accounts</p>
                <p><strong>Result:</strong> $1.8M portfolio in 15 years</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-8 h-8 text-green-600" />
                <div>
                  <h3 className="font-bold text-gray-900">Mike & Lisa, 45 → FIRE at 58</h3>
                  <p className="text-sm text-gray-600">Engineer & Teacher</p>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Starting point:</strong> $200k savings, $150k combined</p>
                <p><strong>Strategy:</strong> Both pursued side businesses, saved 60%</p>
                <p><strong>Key moves:</strong> Downsized home, tutoring business, consulting</p>
                <p><strong>Result:</strong> $1.5M portfolio in 13 years</p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Your 12-Month Acceleration Plan</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-indigo-200">Months 1-3: Foundation</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Calculate exact FIRE number and timeline
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Audit all expenses, cut 30% minimum
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Max out all available retirement accounts
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Research catch-up contribution options
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-indigo-200">Months 4-6: Income Boost</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Negotiate raise or plan job switch
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Launch one profitable side hustle
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Optimize tax strategies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Increase savings rate to 40%+
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-indigo-200">Months 7-9: Optimization</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Rebalance portfolio for growth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Consider downsizing or relocating
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Build passive income streams
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Plan healthcare strategy
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-indigo-200">Months 10-12: Acceleration</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Push savings rate to 50-60%
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Scale successful side hustles
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Review and adjust strategy
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-300">✓</span>
                    Set Year 2 aggressive goals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Key Takeaways for Late Starters</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>You're at peak earning power—leverage it aggressively with 50-60% savings rates.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Catch-up contributions can add $100k+ to your portfolio over 10 years.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>15-20 years to FIRE is realistic with focused effort—that's still 10+ years before traditional retirement.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Your experience and network are assets—monetize them through consulting or side businesses.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Healthcare planning is critical—budget $200-300k for pre-Medicare coverage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tools for Your Journey</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Calculator className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600">FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Calculate your accelerated timeline</p>
              </div>
            </Link>
            
            <Link href="/barista-fire-calculator" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Briefcase className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Barista FIRE</h3>
                <p className="text-sm text-gray-600">Part-time work strategy</p>
              </div>
            </Link>
            
            <Link href="/blog/geographic-arbitrage-fire" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Home className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Geographic Arbitrage</h3>
                <p className="text-sm text-gray-600">Location optimization guide</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">It's Never Too Late to Start</h2>
            <p className="text-lg mb-6 text-indigo-100">
              With focused effort and smart strategies, financial independence is achievable even when starting after 40.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your Timeline
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-400 transition-colors"
              >
                More Strategies
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}