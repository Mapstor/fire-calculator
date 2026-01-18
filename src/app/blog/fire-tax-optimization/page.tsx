'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign,
  Shield,
  PiggyBank,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  FileText,
  Building,
  Briefcase,
  Award,
  Info,
  Zap,
  Target,
  Clock,
  BarChart3,
  ArrowUpDown,
  Coins
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
  Sankey,
  RadialBarChart,
  RadialBar,
  PolarAngleAxis
} from 'recharts';

const metadata: Metadata = {
  title: "FIRE Tax Optimization Guide: Maximize Tax Efficiency in Retirement",
  description: "Master tax optimization for FIRE. Learn Roth conversion ladders, tax-loss harvesting, bracket management, and strategies to minimize lifetime taxes in early retirement.",
  keywords: "fire tax optimization, roth conversion ladder, tax loss harvesting, fire tax strategies, early retirement taxes",
};

// Tax bracket data (2024)
const taxBrackets = [
  { bracket: '10%', single: 11600, married: 23200, max: 11600, cumTax: 1160 },
  { bracket: '12%', single: 47150, married: 94300, max: 35550, cumTax: 5426 },
  { bracket: '22%', single: 100525, married: 201050, max: 53375, cumTax: 17162 },
  { bracket: '24%', single: 191950, married: 383900, max: 91425, cumTax: 39110 },
  { bracket: '32%', single: 243725, married: 487450, max: 51775, cumTax: 55678 },
  { bracket: '35%', single: 609350, married: 731200, max: 365625, cumTax: 183625 },
  { bracket: '37%', single: 999999, married: 999999, max: 999999, cumTax: 999999 },
];

// Roth conversion ladder visualization
const rothLadderData = [
  { year: 'Year 1', traditional: 500000, convert: 50000, roth: 50000, taxable: 100000 },
  { year: 'Year 2', traditional: 445000, convert: 55000, roth: 108000, taxable: 90000 },
  { year: 'Year 3', traditional: 385000, convert: 60000, roth: 173000, taxable: 80000 },
  { year: 'Year 4', traditional: 320000, convert: 65000, roth: 244000, taxable: 70000 },
  { year: 'Year 5', traditional: 250000, convert: 70000, roth: 321000, taxable: 60000 },
  { year: 'Year 6+', traditional: 175000, convert: 0, roth: 321000, taxable: 50000, withdraw: 50000 },
];

// Tax efficiency by account type
const accountEfficiency = [
  { account: 'Taxable', contributions: 100, growth: 80, taxes: -35, net: 145 },
  { account: 'Traditional', contributions: 130, growth: 120, taxes: -50, net: 200 },
  { account: 'Roth', contributions: 100, growth: 100, taxes: 0, net: 200 },
  { account: 'HSA', contributions: 135, growth: 120, taxes: 0, net: 255 },
];

// Withdrawal strategy comparison
const withdrawalStrategies = [
  { age: 50, naive: 40000, optimized: 25000, difference: 15000 },
  { age: 55, naive: 45000, optimized: 28000, difference: 17000 },
  { age: 60, naive: 50000, optimized: 30000, difference: 20000 },
  { age: 65, naive: 35000, optimized: 20000, difference: 15000 },
  { age: 70, naive: 40000, optimized: 25000, difference: 15000 },
  { age: 75, naive: 45000, optimized: 30000, difference: 15000 },
];

// Tax-loss harvesting opportunity
const harvestingData = [
  { month: 'Jan', portfolio: 1000000, losses: -15000, harvested: 12000, saved: 3600 },
  { month: 'Mar', portfolio: 980000, losses: -8000, harvested: 6000, saved: 1800 },
  { month: 'Jun', portfolio: 1020000, losses: -5000, harvested: 4000, saved: 1200 },
  { month: 'Sep', portfolio: 990000, losses: -12000, harvested: 10000, saved: 3000 },
  { month: 'Dec', portfolio: 1050000, losses: -3000, harvested: 3000, saved: 900 },
];

// State tax comparison
const stateTaxData = [
  { state: 'California', income: 13.3, capital: 13.3, total: 26.6, fireImpact: 'High' },
  { state: 'New York', income: 10.9, capital: 10.9, total: 21.8, fireImpact: 'High' },
  { state: 'Texas', income: 0, capital: 0, total: 0, fireImpact: 'None' },
  { state: 'Florida', income: 0, capital: 0, total: 0, fireImpact: 'None' },
  { state: 'Washington', income: 0, capital: 7, total: 7, fireImpact: 'Low' },
  { state: 'Nevada', income: 0, capital: 0, total: 0, fireImpact: 'None' },
];

// Capital gains brackets
const capitalGainsData = [
  { income: 44625, rate: 0, type: 'single' },
  { income: 89250, rate: 0, type: 'married' },
  { income: 492300, rate: 15, type: 'single' },
  { income: 553850, rate: 15, type: 'married' },
  { income: 999999, rate: 20, type: 'single' },
  { income: 999999, rate: 20, type: 'married' },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function FireTaxOptimizationPage() {
  const [income, setIncome] = useState(60000);
  const [filingStatus, setFilingStatus] = useState<'single' | 'married'>('married');
  const [traditionalBalance, setTraditionalBalance] = useState(800000);
  const [rothBalance, setRothBalance] = useState(200000);
  const [taxableBalance, setTaxableBalance] = useState(300000);
  const [currentAge, setCurrentAge] = useState(45);
  const [retirementAge, setRetirementAge] = useState(50);

  // Calculate tax optimization
  const calculateTaxOptimization = () => {
    const standardDeduction = filingStatus === 'married' ? 29200 : 14600;
    const taxableIncome = Math.max(0, income - standardDeduction);
    
    // Find current tax bracket
    let currentBracket = '10%';
    let marginalRate = 0.10;
    let effectiveRate = 0;
    let totalTax = 0;
    
    const brackets = filingStatus === 'married' 
      ? [0, 23200, 94300, 201050, 383900, 487450, 731200]
      : [0, 11600, 47150, 100525, 191950, 243725, 609350];
    const rates = [0.10, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];
    
    for (let i = 0; i < brackets.length - 1; i++) {
      if (taxableIncome > brackets[i]) {
        const taxableInBracket = Math.min(taxableIncome - brackets[i], brackets[i + 1] - brackets[i]);
        totalTax += taxableInBracket * rates[i];
        currentBracket = `${rates[i] * 100}%`;
        marginalRate = rates[i];
      }
    }
    
    effectiveRate = income > 0 ? (totalTax / income) : 0;
    
    // Roth conversion recommendation
    const bracketRoom = brackets[brackets.findIndex(b => taxableIncome <= b)] - taxableIncome;
    const maxConversion = Math.min(bracketRoom, traditionalBalance / 10);
    
    // Capital gains harvesting
    const capitalGainsLimit = filingStatus === 'married' ? 89250 : 44625;
    const capitalGainsRoom = Math.max(0, capitalGainsLimit - taxableIncome);
    
    return {
      taxableIncome,
      totalTax: Math.round(totalTax),
      effectiveRate: Math.round(effectiveRate * 1000) / 10,
      marginalRate: Math.round(marginalRate * 1000) / 10,
      currentBracket,
      bracketRoom: Math.round(bracketRoom),
      maxConversion: Math.round(maxConversion),
      capitalGainsRoom: Math.round(capitalGainsRoom),
      savingsOpportunity: Math.round(maxConversion * marginalRate)
    };
  };

  const taxOptimization = calculateTaxOptimization();

  // Generate lifetime tax projection
  const lifetimeTaxProjection = Array.from({ length: 40 }, (_, i) => {
    const age = retirementAge + i;
    const year = i;
    const naiveTax = income * 0.15 * Math.pow(1.03, i);
    const optimizedTax = income * 0.08 * Math.pow(1.03, i);
    
    return {
      age,
      year,
      naive: Math.round(naiveTax),
      optimized: Math.round(optimizedTax),
      savings: Math.round(naiveTax - optimizedTax)
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              FIRE Tax Optimization Guide
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 max-w-3xl mx-auto">
              Strategic tax planning to minimize lifetime taxes and maximize wealth in early retirement
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
              <DollarSign className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">$500k+</span>
            </div>
            <p className="text-sm text-gray-600">Lifetime tax savings potential</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">0%</span>
            </div>
            <p className="text-sm text-gray-600">Possible federal tax rate in FIRE</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">5-7 years</span>
            </div>
            <p className="text-sm text-gray-600">Optimal Roth conversion window</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Tax optimization is one of the most powerful levers for accelerating FIRE and maximizing wealth in retirement. The difference between naive and optimized tax strategies can mean hundreds of thousands of dollars over your lifetime—potentially adding years to your retirement funds.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide covers advanced tax strategies including Roth conversion ladders, tax-loss harvesting, bracket management, state tax arbitrage, and withdrawal sequencing. We'll show you how to potentially pay zero federal taxes in early retirement while building tax-free wealth.
          </p>
        </div>

        {/* Interactive Tax Optimizer */}
        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Optimization Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income: ${income.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="200000"
                step="5000"
                value={income}
                onChange={(e) => setIncome(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filing Status
              </label>
              <select
                value={filingStatus}
                onChange={(e) => setFilingStatus(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Traditional IRA/401(k): ${traditionalBalance.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="2000000"
                step="50000"
                value={traditionalBalance}
                onChange={(e) => setTraditionalBalance(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Roth Balance: ${rothBalance.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="1000000"
                step="25000"
                value={rothBalance}
                onChange={(e) => setRothBalance(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Current Tax</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${taxOptimization.totalTax.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">Effective: {taxOptimization.effectiveRate}%</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Tax Bracket</p>
                <p className="text-2xl font-bold text-purple-600">
                  {taxOptimization.currentBracket}
                </p>
                <p className="text-xs text-gray-500">Marginal rate</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Bracket Room</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${taxOptimization.bracketRoom.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">For conversions</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">0% Cap Gains Room</p>
                <p className="text-2xl font-bold text-green-600">
                  ${taxOptimization.capitalGainsRoom.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">Tax-free harvest</p>
              </div>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Optimization Recommendations:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Convert ${taxOptimization.maxConversion.toLocaleString()} to Roth this year</li>
                <li>• Harvest ${taxOptimization.capitalGainsRoom.toLocaleString()} in capital gains at 0% tax</li>
                <li>• Potential tax savings: ${taxOptimization.savingsOpportunity.toLocaleString()}/year</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Roth Conversion Ladder */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Roth Conversion Ladder Strategy</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              The Roth conversion ladder allows penalty-free access to retirement accounts before 59½ by converting Traditional to Roth and waiting 5 years.
            </p>
            
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={rothLadderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="traditional" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} name="Traditional IRA" />
                <Area type="monotone" dataKey="roth" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Roth IRA" />
                <Area type="monotone" dataKey="taxable" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} name="Taxable Account" />
                <Area type="monotone" dataKey="withdraw" stackId="2" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.8} name="Roth Withdrawals" />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Years 1-5: Building the Ladder</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Convert optimal amount each year</li>
                  <li>• Stay in low tax brackets (10-12%)</li>
                  <li>• Live on taxable accounts</li>
                  <li>• Track 5-year clocks carefully</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Year 6+: Accessing Funds</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Withdraw converted amounts tax-free</li>
                  <li>• Continue converting for future years</li>
                  <li>• Maintain perpetual ladder</li>
                  <li>• Zero penalties before 59½</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tax Brackets Visualization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Federal Tax Bracket Management</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taxBrackets.slice(0, 6)}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bracket" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey={filingStatus === 'married' ? 'married' : 'single'} fill="#3b82f6" name="Income Threshold" />
                <Bar dataKey="cumTax" fill="#ef4444" name="Cumulative Tax" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Strategy:</strong> Fill lower brackets with Roth conversions while keeping total income below the next bracket jump. The 12% to 22% jump is especially important to avoid.
              </p>
            </div>
          </div>
        </section>

        {/* Account Efficiency Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Efficiency by Account Type</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={accountEfficiency}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="account" />
                <YAxis />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="contributions" stackId="a" fill="#94a3b8" name="After-Tax Contribution" />
                <Bar dataKey="growth" stackId="a" fill="#10b981" name="Tax-Free Growth" />
                <Bar dataKey="taxes" stackId="a" fill="#ef4444" name="Taxes Paid" />
                <Line type="monotone" dataKey="net" stroke="#3b82f6" strokeWidth={3} name="Net Value" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Taxable</h4>
                <p className="text-xs text-gray-600">Taxed going in and out</p>
                <p className="text-sm font-bold text-gray-700 mt-2">145% efficiency</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Traditional</h4>
                <p className="text-xs text-gray-600">Pre-tax in, taxed out</p>
                <p className="text-sm font-bold text-yellow-700 mt-2">200% efficiency</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Roth</h4>
                <p className="text-xs text-gray-600">Taxed in, tax-free out</p>
                <p className="text-sm font-bold text-green-700 mt-2">200% efficiency</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">HSA</h4>
                <p className="text-xs text-gray-600">Triple tax advantage</p>
                <p className="text-sm font-bold text-purple-700 mt-2">255% efficiency</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tax-Loss Harvesting */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax-Loss Harvesting Strategy</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={harvestingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar yAxisId="left" dataKey="harvested" fill="#10b981" name="Losses Harvested" />
                <Bar yAxisId="left" dataKey="saved" fill="#3b82f6" name="Tax Saved" />
                <Line yAxisId="right" type="monotone" dataKey="portfolio" stroke="#8b5cf6" strokeWidth={2} name="Portfolio Value" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Annual Benefits</h4>
                <p className="text-sm text-gray-700">• $3,000 ordinary income offset</p>
                <p className="text-sm text-gray-700">• Unlimited capital gains offset</p>
                <p className="text-sm text-gray-700">• Carryforward indefinitely</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
                <p className="text-sm text-gray-700">• Use similar ETFs/funds</p>
                <p className="text-sm text-gray-700">• Avoid wash sale rules</p>
                <p className="text-sm text-gray-700">• Rebalance tax-efficiently</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Lifetime Impact</h4>
                <p className="text-2xl font-bold text-purple-600">$150k+</p>
                <p className="text-xs text-gray-600">Over 30 years at 30% tax rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimized Withdrawal Sequencing</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={withdrawalStrategies}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="naive" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} name="Naive Strategy" />
                <Area type="monotone" dataKey="optimized" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Optimized Strategy" />
                <Area type="monotone" dataKey="difference" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.5} name="Tax Savings" />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Optimal Withdrawal Order</h4>
              <div className="space-y-3">
                {[
                  { phase: 'Phase 1 (50-55)', source: 'Taxable accounts + Roth contributions', reason: 'No penalties, manage capital gains' },
                  { phase: 'Phase 2 (55-59½)', source: 'Roth ladder conversions + dividends', reason: '5-year seasoned conversions' },
                  { phase: 'Phase 3 (59½-70)', source: 'Traditional IRA + Roth growth', reason: 'Penalty-free access, tax optimization' },
                  { phase: 'Phase 4 (70+)', source: 'RMDs + remaining Roth', reason: 'Required distributions, Roth last' }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">{phase.phase}</h5>
                      <p className="text-sm text-gray-700">Source: {phase.source}</p>
                      <p className="text-xs text-gray-600 mt-1">{phase.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* State Tax Optimization */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">State Tax Arbitrage</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stateTaxData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Bar dataKey="income" fill="#ef4444" name="Income Tax" />
                <Bar dataKey="capital" fill="#f59e0b" name="Capital Gains Tax" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Tax-Free States</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex justify-between">
                    <span>• Texas</span>
                    <span className="font-semibold text-green-600">Save $13,300/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Florida</span>
                    <span className="font-semibold text-green-600">Save $13,300/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Nevada</span>
                    <span className="font-semibold text-green-600">Save $13,300/year</span>
                  </li>
                  <li className="flex justify-between">
                    <span>• Tennessee</span>
                    <span className="font-semibold text-green-600">Save $10,900/year</span>
                  </li>
                </ul>
                <p className="text-xs text-gray-600 mt-3">*Savings based on $100k income vs California</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Strategic Moves</h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Realize gains before moving to high-tax state</li>
                  <li>• Do Roth conversions in low/no-tax states</li>
                  <li>• Time stock option exercises strategically</li>
                  <li>• Consider partial-year residency planning</li>
                </ul>
                <div className="mt-3 p-3 bg-yellow-100 rounded">
                  <p className="text-xs text-gray-700">
                    <strong>10-Year Impact:</strong> $133,000+ in tax savings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Tax Strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Coins className="w-8 h-8 text-yellow-600" />
                <h3 className="text-lg font-bold text-gray-900">Capital Gains Harvesting</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Reset cost basis while in 0% capital gains bracket
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sell appreciated assets</li>
                <li>• Immediately repurchase</li>
                <li>• No wash sale rules for gains</li>
                <li>• Save taxes on future sales</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="text-sm font-semibold text-green-700">Annual benefit: $5-10k</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
                <h3 className="text-lg font-bold text-gray-900">Donor-Advised Funds</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Bunch charitable deductions in high-income years
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Immediate tax deduction</li>
                <li>• Invest and grow tax-free</li>
                <li>• Grant to charities over time</li>
                <li>• Donate appreciated stock</li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded">
                <p className="text-sm font-semibold text-blue-700">Tax savings: 20-37%</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-8 h-8 text-purple-600" />
                <h3 className="text-lg font-bold text-gray-900">Mega Backdoor Roth</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Convert up to $43,500 after-tax 401(k) to Roth annually
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• After-tax 401(k) contributions</li>
                <li>• In-service withdrawals</li>
                <li>• Roll to Roth IRA</li>
                <li>• Tax-free growth forever</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded">
                <p className="text-sm font-semibold text-purple-700">10-year value: $650k+</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-8 h-8 text-green-600" />
                <h3 className="text-lg font-bold text-gray-900">Solo 401(k) Strategy</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                Self-employed super-savings with $69k+ annual limits
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Employee + employer contributions</li>
                <li>• Roth option available</li>
                <li>• Loan provisions</li>
                <li>• Asset protection</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="text-sm font-semibold text-green-700">Tax deferral: $25k+/year</p>
              </div>
            </div>
          </div>
        </section>

        {/* Zero Tax Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Zero Federal Tax Strategy</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl">
            <p className="text-gray-700 mb-6">
              With proper planning, married couples can have $120k+ in income and pay zero federal tax.
            </p>
            
            <div className="bg-white p-6 rounded-lg mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Example: Married Couple, $120,000 Income</h3>
              <div className="space-y-3">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Qualified Dividends & Capital Gains</span>
                  <span className="font-semibold">$89,250</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">Standard Deduction</span>
                  <span className="font-semibold">$29,200</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span className="text-gray-700">HSA Contribution</span>
                  <span className="font-semibold">$8,300</span>
                </div>
                <div className="flex justify-between p-3 bg-green-100 rounded">
                  <span className="font-bold text-gray-900">Federal Tax Owed</span>
                  <span className="font-bold text-green-600">$0</span>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Key Components</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Stay under 0% capital gains threshold</li>
                  <li>• Maximize standard deduction</li>
                  <li>• Use tax-advantaged accounts</li>
                  <li>• Harvest losses to offset gains</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Income Sources</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Qualified dividends: 0% tax</li>
                  <li>• Long-term capital gains: 0% tax</li>
                  <li>• Roth withdrawals: 0% tax</li>
                  <li>• HSA for medical: 0% tax</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Optimization Timeline</h2>
          
          <div className="space-y-4">
            {[
              {
                phase: '10 Years Before FIRE',
                tasks: [
                  'Max all tax-advantaged accounts',
                  'Start mega backdoor Roth if available',
                  'Build taxable account for bridge years',
                  'Track cost basis meticulously'
                ],
                color: 'border-blue-400 bg-blue-50'
              },
              {
                phase: '5 Years Before FIRE',
                tasks: [
                  'Model Roth conversion ladder',
                  'Plan state residency changes',
                  'Accelerate HSA contributions',
                  'Review asset location strategy'
                ],
                color: 'border-green-400 bg-green-50'
              },
              {
                phase: 'Year of FIRE',
                tasks: [
                  'Optimize final year income',
                  'Execute deferred compensation',
                  'Harvest gains/losses strategically',
                  'Start first Roth conversion'
                ],
                color: 'border-yellow-400 bg-yellow-50'
              },
              {
                phase: 'Early Retirement (Before 59½)',
                tasks: [
                  'Execute Roth ladder annually',
                  'Manage income for ACA subsidies',
                  'Capital gains harvesting',
                  'Monitor tax law changes'
                ],
                color: 'border-purple-400 bg-purple-50'
              },
              {
                phase: 'Traditional Retirement (59½+)',
                tasks: [
                  'Access all accounts penalty-free',
                  'Optimize for tax brackets',
                  'Plan for RMDs at 73',
                  'Consider QCDs for charity'
                ],
                color: 'border-red-400 bg-red-50'
              }
            ].map((phase, index) => (
              <div key={index} className={`border-l-4 ${phase.color} p-6 rounded-r-lg`}>
                <h3 className="font-bold text-gray-900 mb-3">{phase.phase}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {phase.tasks.map((task, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Tax Planning Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Converting Too Much to Roth',
                impact: 'Push into higher tax brackets',
                solution: 'Stay within 12% bracket for conversions'
              },
              {
                mistake: 'Forgetting State Taxes',
                impact: 'Surprise tax bills of $10k+',
                solution: 'Model both federal and state taxes'
              },
              {
                mistake: 'Missing 5-Year Clocks',
                impact: '10% early withdrawal penalty',
                solution: 'Track each conversion separately'
              },
              {
                mistake: 'Triggering IRMAA',
                impact: 'Medicare premiums increase $2-5k/year',
                solution: 'Keep MAGI under thresholds after 63'
              },
              {
                mistake: 'Poor Asset Location',
                impact: 'Unnecessary taxes on investments',
                solution: 'Bonds in IRA, stocks in taxable'
              },
              {
                mistake: 'Ignoring Tax Loss Harvesting',
                impact: 'Miss $50k+ lifetime savings',
                solution: 'Harvest losses systematically'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.mistake}</h3>
                    <p className="text-sm text-red-600 mb-2">Impact: {item.impact}</p>
                    <p className="text-sm text-green-700">✓ Solution: {item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Action Checklist */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Your Tax Optimization Action Plan</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-purple-200">Immediate Actions</h3>
                <div className="space-y-2">
                  {[
                    'Calculate current effective tax rate',
                    'Model Roth conversion scenarios',
                    'Review asset location',
                    'Set up tax-loss harvesting',
                    'Maximize all tax-deferred accounts'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-purple-200">Annual Review</h3>
                <div className="space-y-2">
                  {[
                    'Rebalance with tax efficiency',
                    'Execute Roth conversions',
                    'Harvest losses before year-end',
                    'Review bracket management',
                    'Plan next year\'s strategy'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Key Tax Optimization Takeaways</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Proper tax planning can save $500k+ over your lifetime and add 5-10 years to your portfolio longevity.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>The Roth conversion ladder is essential for penalty-free access to retirement funds before 59½.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Married couples can have $120k+ income and pay zero federal tax with proper planning.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>State tax arbitrage alone can save $10-15k annually by relocating to tax-free states.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Tax-loss harvesting, properly executed, adds 0.5-1% to annual returns through tax savings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tax Planning Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Calculator className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Model tax-efficient strategies</p>
              </div>
            </Link>
            
            <Link href="/blog/healthcare-planning-fire" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Shield className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Healthcare Planning</h3>
                <p className="text-sm text-gray-600">ACA subsidy optimization</p>
              </div>
            </Link>
            
            <Link href="/blog/geographic-arbitrage-fire" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Building className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Geographic Arbitrage</h3>
                <p className="text-sm text-gray-600">State tax optimization</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Start Optimizing Your Taxes Today</h2>
            <p className="text-lg mb-6 text-purple-100">
              Every year you wait costs thousands in lost tax savings and compound growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Tax-Efficient FIRE
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-400 transition-colors"
              >
                More Optimization Guides
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}