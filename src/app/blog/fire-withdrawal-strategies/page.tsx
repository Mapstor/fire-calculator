'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  TrendingDown, 
  Shield, 
  Calculator,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Target,
  Zap,
  Clock,
  ChevronRight,
  LineChart as LineChartIcon,
  Award,
  Info,
  ArrowUpDown,
  Percent,
  Coins,
  PiggyBank,
  Building,
  Activity
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
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ScatterChart,
  Scatter,
  ZAxis,
  ReferenceLine
} from 'recharts';

const metadata: Metadata = {
  title: "FIRE Withdrawal Strategies: Optimize Your Retirement Drawdown",
  description: "Master withdrawal strategies for early retirement. Learn the 4% rule variations, dynamic spending, bucket strategies, and how to ensure your portfolio lasts 50+ years.",
  keywords: "fire withdrawal strategies, 4 percent rule, safe withdrawal rate, retirement drawdown, sequence of returns risk",
};

// Historical success rates data
const withdrawalSuccessRates = [
  { rate: 3.0, yr30: 100, yr40: 98, yr50: 95, yr60: 92 },
  { rate: 3.25, yr30: 100, yr40: 96, yr50: 91, yr60: 85 },
  { rate: 3.5, yr30: 98, yr40: 92, yr50: 85, yr60: 78 },
  { rate: 3.75, yr30: 96, yr40: 87, yr50: 77, yr60: 68 },
  { rate: 4.0, yr30: 95, yr40: 82, yr50: 69, yr60: 57 },
  { rate: 4.25, yr30: 91, yr40: 75, yr50: 59, yr60: 45 },
  { rate: 4.5, yr30: 86, yr40: 65, yr50: 48, yr60: 33 },
  { rate: 5.0, yr30: 73, yr40: 48, yr50: 28, yr60: 15 },
];

// Portfolio survival scenarios
const portfolioSurvival = [
  { year: 0, conservative: 1000000, balanced: 1000000, aggressive: 1000000, dynamic: 1000000 },
  { year: 5, conservative: 950000, balanced: 980000, aggressive: 1020000, dynamic: 1010000 },
  { year: 10, conservative: 880000, balanced: 940000, aggressive: 1000000, dynamic: 990000 },
  { year: 15, conservative: 800000, balanced: 880000, aggressive: 950000, dynamic: 960000 },
  { year: 20, conservative: 700000, balanced: 800000, aggressive: 870000, dynamic: 920000 },
  { year: 25, conservative: 580000, balanced: 700000, aggressive: 750000, dynamic: 870000 },
  { year: 30, conservative: 440000, balanced: 580000, aggressive: 600000, dynamic: 810000 },
];

// Withdrawal strategy comparison
const strategyComparison = [
  { strategy: 'Fixed 4%', flexibility: 20, safety: 75, complexity: 20, income: 40000 },
  { strategy: 'Variable %', flexibility: 60, safety: 85, complexity: 40, income: 35000 },
  { strategy: 'Guardrails', flexibility: 80, safety: 90, complexity: 60, income: 42000 },
  { strategy: 'Floor & Ceiling', flexibility: 70, safety: 88, complexity: 50, income: 38000 },
  { strategy: 'Dynamic SWR', flexibility: 90, safety: 92, complexity: 80, income: 41000 },
  { strategy: 'Bond Tent', flexibility: 40, safety: 95, complexity: 70, income: 36000 },
];

// Sequence of returns impact
const sequenceReturnsData = [
  { year: 1, goodStart: 120000, badStart: 80000, average: 100000 },
  { year: 2, goodStart: 144000, badStart: 72000, average: 105000 },
  { year: 3, goodStart: 165000, badStart: 68000, average: 110000 },
  { year: 4, goodStart: 185000, badStart: 66000, average: 115000 },
  { year: 5, goodStart: 205000, badStart: 65000, average: 120000 },
  { year: 10, goodStart: 320000, badStart: 55000, average: 150000 },
  { year: 15, goodStart: 480000, badStart: 40000, average: 180000 },
  { year: 20, goodStart: 680000, badStart: 20000, average: 210000 },
];

// Bucket strategy allocation
const bucketStrategy = [
  { bucket: 'Cash (Years 1-2)', amount: 80000, percentage: 8, purpose: 'Immediate needs', risk: 'None' },
  { bucket: 'Bonds (Years 3-7)', amount: 200000, percentage: 20, purpose: 'Near-term safety', risk: 'Low' },
  { bucket: 'Balanced (Years 8-15)', amount: 320000, percentage: 32, purpose: 'Medium growth', risk: 'Medium' },
  { bucket: 'Stocks (Years 16+)', amount: 400000, percentage: 40, purpose: 'Long-term growth', risk: 'High' },
];

// Dynamic spending rules
const dynamicSpendingData = [
  { portfolio: 800000, spending: 32000, percent: 4.0, adjustment: 'Decrease 10%' },
  { portfolio: 900000, spending: 36000, percent: 4.0, adjustment: 'Maintain' },
  { portfolio: 1000000, spending: 40000, percent: 4.0, adjustment: 'Base' },
  { portfolio: 1100000, spending: 42000, percent: 3.8, adjustment: 'Increase 5%' },
  { portfolio: 1200000, spending: 44000, percent: 3.7, adjustment: 'Increase 10%' },
  { portfolio: 1300000, spending: 46000, percent: 3.5, adjustment: 'Increase 15%' },
];

// Tax-efficient withdrawal order
const withdrawalOrder = [
  { source: 'RMDs', age: '73+', taxRate: 'Ordinary', order: 1 },
  { source: 'Taxable Dividends', age: 'Any', taxRate: 'Qualified', order: 2 },
  { source: 'Taxable Gains', age: 'Any', taxRate: 'Capital', order: 3 },
  { source: 'Traditional IRA', age: '59.5+', taxRate: 'Ordinary', order: 4 },
  { source: 'Roth Contributions', age: 'Any', taxRate: 'None', order: 5 },
  { source: 'Roth Earnings', age: '59.5+', taxRate: 'None', order: 6 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function WithdrawalStrategiesPage() {
  const [portfolioValue, setPortfolioValue] = useState(1500000);
  const [withdrawalRate, setWithdrawalRate] = useState(4.0);
  const [retirementLength, setRetirementLength] = useState(40);
  const [stockAllocation, setStockAllocation] = useState(60);
  const [strategy, setStrategy] = useState<'fixed' | 'variable' | 'guardrails'>('guardrails');

  // Calculate withdrawal metrics
  const calculateWithdrawal = () => {
    const annualWithdrawal = portfolioValue * (withdrawalRate / 100);
    const monthlyIncome = annualWithdrawal / 12;
    
    // Find success rate based on withdrawal rate and retirement length
    const rateData = withdrawalSuccessRates.find(r => r.rate === Math.round(withdrawalRate * 4) / 4) || 
                     withdrawalSuccessRates[3]; // Default to 3.75%
    
    let successRate;
    if (retirementLength <= 30) successRate = rateData.yr30;
    else if (retirementLength <= 40) successRate = rateData.yr40;
    else if (retirementLength <= 50) successRate = rateData.yr50;
    else successRate = rateData.yr60;
    
    // Calculate guardrails
    const upperGuardrail = portfolioValue * 1.2;
    const lowerGuardrail = portfolioValue * 0.8;
    const upperSpending = annualWithdrawal * 1.2;
    const lowerSpending = annualWithdrawal * 0.8;
    
    // Calculate safe perpetual withdrawal
    const perpetualRate = 3.3; // Conservative for 60+ years
    const perpetualWithdrawal = portfolioValue * (perpetualRate / 100);
    
    return {
      annualWithdrawal: Math.round(annualWithdrawal),
      monthlyIncome: Math.round(monthlyIncome),
      successRate,
      upperGuardrail: Math.round(upperGuardrail),
      lowerGuardrail: Math.round(lowerGuardrail),
      upperSpending: Math.round(upperSpending),
      lowerSpending: Math.round(lowerSpending),
      perpetualWithdrawal: Math.round(perpetualWithdrawal),
      yearsOfIncome: Math.round(portfolioValue / annualWithdrawal)
    };
  };

  const withdrawal = calculateWithdrawal();

  // Generate portfolio projection
  const portfolioProjection = Array.from({ length: retirementLength + 1 }, (_, i) => {
    const year = i;
    const inflationRate = 0.03;
    const returnRate = stockAllocation >= 60 ? 0.07 : stockAllocation >= 40 ? 0.06 : 0.05;
    const realReturn = returnRate - inflationRate;
    
    let value = portfolioValue;
    const annualSpending = withdrawal.annualWithdrawal * Math.pow(1 + inflationRate, year);
    
    // Simple projection (not accounting for volatility)
    for (let j = 0; j < year; j++) {
      value = value * (1 + realReturn) - (withdrawal.annualWithdrawal * Math.pow(1 + inflationRate, j));
      if (value < 0) value = 0;
    }
    
    return {
      year,
      age: 50 + year, // Assume retirement at 50
      portfolio: Math.round(Math.max(0, value)),
      withdrawal: Math.round(annualSpending),
      inflationAdjusted: Math.round(annualSpending / Math.pow(1 + inflationRate, year))
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-cyan-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <TrendingDown className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              FIRE Withdrawal Strategies
            </h1>
            <p className="text-xl sm:text-2xl text-teal-100 max-w-3xl mx-auto">
              Optimize your retirement drawdown to ensure your portfolio lasts 50+ years
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
              <Percent className="w-8 h-8 text-teal-600" />
              <span className="text-2xl font-bold text-gray-900">4%</span>
            </div>
            <p className="text-sm text-gray-600">Traditional safe withdrawal rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">3.3-3.5%</span>
            </div>
            <p className="text-sm text-gray-600">Recommended for 50+ year retirements</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Activity className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">95%+</span>
            </div>
            <p className="text-sm text-gray-600">Success with dynamic strategies</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            The withdrawal phase is where your FIRE plan meets reality. While accumulation gets the attention, withdrawal strategy determines whether your portfolio survives decades of retirement. The wrong approach can deplete your funds in 20 years; the right strategy can make your money last forever.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide explores withdrawal strategies beyond the basic 4% rule, including dynamic spending, guardrails, bucket strategies, and tax optimization. We'll show you how to maximize spending while ensuring your portfolio survives market crashes, inflation, and longevity risk.
          </p>
        </div>

        {/* Interactive Withdrawal Calculator */}
        <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Withdrawal Strategy Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Portfolio Value: ${portfolioValue.toLocaleString()}
              </label>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="100000"
                value={portfolioValue}
                onChange={(e) => setPortfolioValue(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Withdrawal Rate: {withdrawalRate}%
              </label>
              <input
                type="range"
                min="2.5"
                max="5.0"
                step="0.25"
                value={withdrawalRate}
                onChange={(e) => setWithdrawalRate(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retirement Length: {retirementLength} years
              </label>
              <input
                type="range"
                min="20"
                max="60"
                step="5"
                value={retirementLength}
                onChange={(e) => setRetirementLength(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stock Allocation: {stockAllocation}%
              </label>
              <input
                type="range"
                min="20"
                max="80"
                step="10"
                value={stockAllocation}
                onChange={(e) => setStockAllocation(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Annual Withdrawal</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${withdrawal.annualWithdrawal.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">per year</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Monthly Income</p>
                <p className="text-2xl font-bold text-teal-600">
                  ${withdrawal.monthlyIncome.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">inflation-adjusted</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Success Rate</p>
                <p className="text-2xl font-bold" style={{ 
                  color: withdrawal.successRate >= 90 ? '#10b981' : 
                         withdrawal.successRate >= 75 ? '#f59e0b' : '#ef4444' 
                }}>
                  {withdrawal.successRate}%
                </p>
                <p className="text-xs text-gray-500">historical</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Years Covered</p>
                <p className="text-2xl font-bold text-purple-600">
                  {withdrawal.yearsOfIncome}
                </p>
                <p className="text-xs text-gray-500">at current rate</p>
              </div>
            </div>
            
            <div className="p-4 bg-teal-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">Guardrails Strategy:</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">If portfolio rises to </span>
                  <span className="font-medium">${withdrawal.upperGuardrail.toLocaleString()}</span>
                  <span className="text-gray-600">, increase spending to </span>
                  <span className="font-medium text-green-600">${withdrawal.upperSpending.toLocaleString()}/yr</span>
                </div>
                <div>
                  <span className="text-gray-600">If portfolio falls to </span>
                  <span className="font-medium">${withdrawal.lowerGuardrail.toLocaleString()}</span>
                  <span className="text-gray-600">, reduce spending to </span>
                  <span className="font-medium text-red-600">${withdrawal.lowerSpending.toLocaleString()}/yr</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Rates by Withdrawal Rate */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Historical Success Rates</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={withdrawalSuccessRates}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rate" label={{ value: 'Withdrawal Rate (%)', position: 'insideBottom' }} />
                <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="yr30" stroke="#10b981" strokeWidth={2} name="30 Years" />
                <Line type="monotone" dataKey="yr40" stroke="#3b82f6" strokeWidth={2} name="40 Years" />
                <Line type="monotone" dataKey="yr50" stroke="#f59e0b" strokeWidth={2} name="50 Years" />
                <Line type="monotone" dataKey="yr60" stroke="#ef4444" strokeWidth={2} name="60 Years" />
                <ReferenceLine x={withdrawalRate} stroke="#8b5cf6" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Key Insight:</strong> The 4% rule has a 95% success rate for 30-year retirements but drops to 57% for 60 years. Early retirees should target 3.25-3.5% for high confidence.
              </p>
            </div>
          </div>
        </section>

        {/* Sequence of Returns Risk */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Sequence of Returns Risk</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              Early losses can devastate a portfolio, even if long-term returns are good. Starting retirement in a bear market is the biggest risk.
            </p>
            
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={sequenceReturnsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="goodStart" stroke="#10b981" strokeWidth={2} name="Good Start (+20% Year 1)" />
                <Line type="monotone" dataKey="average" stroke="#3b82f6" strokeWidth={2} name="Average Returns" />
                <Line type="monotone" dataKey="badStart" stroke="#ef4444" strokeWidth={2} name="Bad Start (-20% Year 1)" />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Mitigation: Bond Tent</h4>
                <p className="text-sm text-gray-700">Increase bonds to 60-70% at retirement, then glide back to stocks over 10 years</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Mitigation: Cash Buffer</h4>
                <p className="text-sm text-gray-700">Keep 2-3 years expenses in cash to avoid selling in downturns</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Mitigation: Flexible Spending</h4>
                <p className="text-sm text-gray-700">Reduce spending 10-20% during market declines</p>
              </div>
            </div>
          </div>
        </section>

        {/* Withdrawal Strategies Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Withdrawal Strategy Comparison</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={strategyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="strategy" angle={-20} textAnchor="end" height={60} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="flexibility" fill="#3b82f6" name="Flexibility %" />
                <Bar dataKey="safety" fill="#10b981" name="Safety %" />
                <Bar dataKey="complexity" fill="#f59e0b" name="Complexity %" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 space-y-4">
              {[
                {
                  name: 'Fixed 4% Rule',
                  description: 'Withdraw 4% initially, adjust for inflation annually',
                  pros: 'Simple, predictable income',
                  cons: 'No flexibility, may deplete in bad markets',
                  best: 'Short retirements, stable markets'
                },
                {
                  name: 'Variable Percentage',
                  description: 'Withdraw fixed % of portfolio balance each year',
                  pros: 'Portfolio never depletes',
                  cons: 'Income varies significantly',
                  best: 'Flexible spenders, long retirements'
                },
                {
                  name: 'Guardrails (Guyton-Klinger)',
                  description: 'Adjust spending based on portfolio performance thresholds',
                  pros: 'Balances safety and spending',
                  cons: 'More complex rules',
                  best: 'Most early retirees'
                },
                {
                  name: 'Dynamic SWR',
                  description: 'Adjust withdrawal rate based on market valuations and age',
                  pros: 'Maximizes safe spending',
                  cons: 'Requires active management',
                  best: 'Engaged retirees, volatile markets'
                }
              ].map((strategy, index) => (
                <div key={index} className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{strategy.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{strategy.description}</p>
                  <div className="grid md:grid-cols-3 gap-3 text-xs">
                    <div>
                      <span className="font-medium text-green-700">Pros: </span>
                      <span className="text-gray-600">{strategy.pros}</span>
                    </div>
                    <div>
                      <span className="font-medium text-red-700">Cons: </span>
                      <span className="text-gray-600">{strategy.cons}</span>
                    </div>
                    <div>
                      <span className="font-medium text-blue-700">Best for: </span>
                      <span className="text-gray-600">{strategy.best}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bucket Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Bucket Strategy</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              Divide your portfolio into time-based buckets to match assets with spending needs and reduce sequence risk.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              {bucketStrategy.map((bucket, index) => (
                <div key={index} className="text-center">
                  <div className={`h-32 flex items-end justify-center mb-2 ${
                    index === 0 ? 'bg-green-100' :
                    index === 1 ? 'bg-blue-100' :
                    index === 2 ? 'bg-yellow-100' :
                    'bg-red-100'
                  } rounded-lg`}>
                    <div 
                      className={`w-full ${
                        index === 0 ? 'bg-green-500' :
                        index === 1 ? 'bg-blue-500' :
                        index === 2 ? 'bg-yellow-500' :
                        'bg-red-500'
                      } rounded-t-lg`}
                      style={{ height: `${bucket.percentage}%` }}
                    />
                  </div>
                  <h4 className="font-semibold text-sm text-gray-900">{bucket.bucket}</h4>
                  <p className="text-2xl font-bold text-gray-800">${(bucket.amount / 1000).toFixed(0)}k</p>
                  <p className="text-xs text-gray-600">{bucket.purpose}</p>
                  <p className="text-xs font-medium mt-1" style={{
                    color: index === 0 ? '#10b981' :
                           index === 1 ? '#3b82f6' :
                           index === 2 ? '#f59e0b' :
                           '#ef4444'
                  }}>{bucket.risk} Risk</p>
                </div>
              ))}
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">How It Works:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Spend from Bucket 1 (cash) for immediate needs</li>
                <li>• Refill Bucket 1 from Bucket 2 (bonds) annually</li>
                <li>• Rebalance Buckets 2-4 based on market conditions</li>
                <li>• Never sell stocks during market downturns</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dynamic Spending Rules */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Dynamic Spending Framework</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={dynamicSpendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="portfolio" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <YAxis yAxisId="left" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => typeof value === 'number' ? value.toLocaleString() : value} />
                <Legend />
                <Bar yAxisId="left" dataKey="spending" fill="#10b981" name="Annual Spending" />
                <Line yAxisId="right" type="monotone" dataKey="percent" stroke="#ef4444" strokeWidth={2} name="Withdrawal %" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">Guardrails Rules:</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-4 p-3 bg-red-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  <div className="text-sm">
                    <span className="font-medium">Lower Guardrail: </span>
                    <span className="text-gray-700">If withdrawal rate exceeds 5%, cut spending by 10%</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-yellow-50 rounded-lg">
                  <ArrowUpDown className="w-5 h-5 text-yellow-600" />
                  <div className="text-sm">
                    <span className="font-medium">Middle Zone: </span>
                    <span className="text-gray-700">Between 3-5%, maintain inflation-adjusted spending</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <div className="text-sm">
                    <span className="font-medium">Upper Guardrail: </span>
                    <span className="text-gray-700">If withdrawal rate falls below 3%, increase spending by 10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tax-Efficient Withdrawal Order */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax-Efficient Withdrawal Sequencing</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="space-y-3 mb-6">
              {withdrawalOrder.map((source, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                  <div className="flex-shrink-0 w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                    {source.order}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{source.source}</h4>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                      <span>Age: {source.age}</span>
                      <span>•</span>
                      <span>Tax: {source.taxRate}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Tax Optimization Tips</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Stay in low tax brackets</li>
                  <li>• Harvest capital gains at 0%</li>
                  <li>• Manage IRMAA thresholds</li>
                  <li>• Consider Roth conversions</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Annual Tax Planning</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Review bracket status quarterly</li>
                  <li>• Plan year-end distributions</li>
                  <li>• Coordinate with spouse</li>
                  <li>• Track basis and gains</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Survival Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Portfolio Survival Analysis</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={portfolioSurvival}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years into Retirement', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="dynamic" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Dynamic Strategy" />
                <Area type="monotone" dataKey="aggressive" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} name="Aggressive (5%)" />
                <Area type="monotone" dataKey="balanced" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} name="Balanced (4%)" />
                <Area type="monotone" dataKey="conservative" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} name="Conservative (3%)" />
              </AreaChart>
            </ResponsiveContainer>
            
            <p className="mt-4 text-sm text-gray-700">
              <strong>Note:</strong> Dynamic strategies that adjust spending based on portfolio performance show the best long-term survival rates while maintaining higher spending levels.
            </p>
          </div>
        </section>

        {/* Implementation Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Implementing Your Withdrawal Strategy</h2>
          
          <div className="space-y-4">
            {[
              {
                phase: 'Year Before Retirement',
                tasks: [
                  'Calculate precise spending needs',
                  'Set up bucket allocations',
                  'Open necessary accounts',
                  'Plan first year withdrawals'
                ],
                color: 'border-blue-400 bg-blue-50'
              },
              {
                phase: 'First Year of Retirement',
                tasks: [
                  'Execute initial withdrawal plan',
                  'Set up automatic transfers',
                  'Monitor spending vs budget',
                  'Adjust for unexpected costs'
                ],
                color: 'border-green-400 bg-green-50'
              },
              {
                phase: 'Years 2-5',
                tasks: [
                  'Annual spending review',
                  'Rebalance portfolios',
                  'Adjust for inflation',
                  'Apply guardrails if needed'
                ],
                color: 'border-yellow-400 bg-yellow-50'
              },
              {
                phase: 'Ongoing Management',
                tasks: [
                  'Quarterly portfolio review',
                  'Annual strategy assessment',
                  'Tax optimization',
                  'Legacy planning updates'
                ],
                color: 'border-purple-400 bg-purple-50'
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Withdrawal Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Fixed Mindset',
                impact: 'Portfolio depletion in bad markets',
                solution: 'Build flexibility into your plan'
              },
              {
                mistake: 'Ignoring Inflation',
                impact: 'Purchasing power erosion',
                solution: 'Adjust spending annually for CPI'
              },
              {
                mistake: 'Emotional Decisions',
                impact: 'Panic selling in downturns',
                solution: 'Stick to predetermined rules'
              },
              {
                mistake: 'No Tax Planning',
                impact: 'Unnecessary tax drag',
                solution: 'Optimize withdrawal sources'
              },
              {
                mistake: 'Overspending Early',
                impact: 'Insufficient funds later',
                solution: 'Front-load conservative spending'
              },
              {
                mistake: 'Underspending Fear',
                impact: 'Reduced quality of life',
                solution: 'Use guardrails to spend safely'
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
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Your Withdrawal Strategy Checklist</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-teal-200">Setup Phase</h3>
                <div className="space-y-2">
                  {[
                    'Calculate detailed spending budget',
                    'Choose primary withdrawal strategy',
                    'Set up account structure',
                    'Plan tax optimization',
                    'Create emergency fund'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-teal-200">Ongoing Management</h3>
                <div className="space-y-2">
                  {[
                    'Monthly spending tracking',
                    'Quarterly portfolio review',
                    'Annual strategy adjustment',
                    'Tax loss harvesting',
                    'Rebalancing schedule'
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
            <h2 className="text-2xl font-bold mb-6">Key Withdrawal Strategy Takeaways</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>The 4% rule is a starting point—dynamic strategies with guardrails provide better outcomes for long retirements.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Sequence of returns risk in early retirement is the biggest threat—use bond tents and cash buffers.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>For 50+ year retirements, start with 3.25-3.5% withdrawal rates for 95%+ success probability.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Flexibility is key—be prepared to adjust spending ±20% based on market conditions.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Tax-efficient withdrawal ordering can add 5-10 years to portfolio longevity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Calculator className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600">FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Model withdrawal scenarios</p>
              </div>
            </Link>
            
            <Link href="/blog/fire-tax-optimization" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Tax Optimization</h3>
                <p className="text-sm text-gray-600">Minimize withdrawal taxes</p>
              </div>
            </Link>
            
            <Link href="/blog/healthcare-planning-fire" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Activity className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Healthcare Planning</h3>
                <p className="text-sm text-gray-600">Budget for medical costs</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Optimize Your Withdrawal Strategy</h2>
            <p className="text-lg mb-6 text-teal-100">
              The right withdrawal strategy can mean the difference between running out of money and leaving a legacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Test Your Strategy
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-400 transition-colors"
              >
                More FIRE Guides
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}