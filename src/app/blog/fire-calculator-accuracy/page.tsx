'use client';

import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  ChevronRight,
  Target,
  BarChart3,
  LineChart as LineChartIcon,
  Activity,
  Shield,
  Zap,
  Brain,
  Search,
  Settings
} from 'lucide-react';
import {
  LineChart as RechartsLineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';

const metadata: Metadata = {
  title: "FIRE Calculator Accuracy Guide: Understanding Assumptions & Limitations",
  description: "Deep dive into FIRE calculator accuracy, assumptions, limitations, and how to use them effectively. Learn what makes calculations reliable and common pitfalls to avoid.",
  keywords: "fire calculator accuracy, fire calculator assumptions, retirement calculator limitations, fire number reliability, financial independence calculator accuracy",
};

// Monte Carlo simulation data
const monteCarloData = [
  { percentile: '5th', amount: 980000, label: 'Worst Case' },
  { percentile: '25th', amount: 1150000, label: 'Below Average' },
  { percentile: '50th', amount: 1300000, label: 'Median' },
  { percentile: '75th', amount: 1480000, label: 'Above Average' },
  { percentile: '95th', amount: 1750000, label: 'Best Case' },
];

// Market return variations
const marketReturnData = [
  { year: '2019', assumed: 7, actual: 28.9, difference: 21.9 },
  { year: '2020', assumed: 7, actual: 16.3, difference: 9.3 },
  { year: '2021', assumed: 7, actual: 26.9, difference: 19.9 },
  { year: '2022', assumed: 7, actual: -19.4, difference: -26.4 },
  { year: '2023', assumed: 7, actual: 24.2, difference: 17.2 },
  { year: '2024', assumed: 7, actual: 23.8, difference: 16.8 },
];

// Inflation impact over time
const inflationImpactData = [
  { year: 0, purchasing2: 100000, purchasing3: 100000, purchasing4: 100000 },
  { year: 10, purchasing2: 82035, purchasing3: 74409, purchasing4: 67556 },
  { year: 20, purchasing2: 67297, purchasing3: 55368, purchasing4: 45639 },
  { year: 30, purchasing2: 55207, purchasing3: 41199, purchasing4: 30832 },
  { year: 40, purchasing2: 45289, purchasing3: 30656, purchasing4: 20829 },
];

// Withdrawal rate success rates
const withdrawalRateData = [
  { rate: 3.0, success30: 100, success40: 98, success50: 95 },
  { rate: 3.5, success30: 98, success40: 94, success50: 87 },
  { rate: 4.0, success30: 95, success40: 87, success50: 76 },
  { rate: 4.5, success30: 88, success40: 73, success50: 57 },
  { rate: 5.0, success30: 76, success40: 56, success50: 35 },
];

// Calculator accuracy factors
const accuracyFactors = [
  { factor: 'Market Returns', weight: 35, impact: 'High' },
  { factor: 'Inflation', weight: 25, impact: 'High' },
  { factor: 'Spending Changes', weight: 20, impact: 'Medium' },
  { factor: 'Tax Assumptions', weight: 15, impact: 'Medium' },
  { factor: 'Life Events', weight: 5, impact: 'Low' },
];

// Assumption reliability radar
const assumptionReliability = [
  { assumption: 'Historical Averages', reliability: 75 },
  { assumption: 'Fixed Spending', reliability: 45 },
  { assumption: 'Constant Inflation', reliability: 60 },
  { assumption: 'Tax Rates', reliability: 55 },
  { assumption: 'No Major Events', reliability: 30 },
  { assumption: 'Portfolio Allocation', reliability: 70 },
];

export default function FireCalculatorAccuracyPage() {
  const [selectedScenario, setSelectedScenario] = useState<'optimistic' | 'realistic' | 'conservative'>('realistic');
  const [timeHorizon, setTimeHorizon] = useState(30);
  const [inflationRate, setInflationRate] = useState(3);
  const [returnAssumption, setReturnAssumption] = useState(7);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Calculate confidence intervals
  const calculateConfidence = () => {
    const baseAmount = 1000000;
    const scenarios = {
      optimistic: { multiplier: 0.8, confidence: 65 },
      realistic: { multiplier: 1.0, confidence: 85 },
      conservative: { multiplier: 1.3, confidence: 95 }
    };
    
    const scenario = scenarios[selectedScenario];
    return {
      fireNumber: baseAmount * scenario.multiplier,
      confidence: scenario.confidence,
      range: {
        low: baseAmount * scenario.multiplier * 0.85,
        high: baseAmount * scenario.multiplier * 1.15
      }
    };
  };

  const confidence = calculateConfidence();

  // Generate projection variance data
  const projectionVariance = Array.from({ length: timeHorizon }, (_, i) => {
    const year = i + 1;
    const base = 100000 * Math.pow(1.07, year);
    const optimistic = 100000 * Math.pow(1.10, year);
    const conservative = 100000 * Math.pow(1.04, year);
    
    return {
      year,
      base: Math.round(base),
      optimistic: Math.round(optimistic),
      conservative: Math.round(conservative),
      variance: Math.round((optimistic - conservative) / 2)
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ChevronRight className="w-4 h-4 rotate-180" />
            Back to Blog
          </Link>
          
          <div className="flex items-center gap-4 mb-3">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              Analysis
            </span>
            <span className="text-sm text-white/80">16 min read</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            FIRE Calculator Accuracy Guide
          </h1>
          
          <p className="text-lg text-primary-100 mb-6 max-w-3xl leading-relaxed">
            Understanding assumptions, limitations, and how to use FIRE calculators effectively for reliable retirement planning
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Target className="w-5 h-5" />
              <span className="font-medium">Accuracy Analysis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Calculator className="w-5 h-5" />
              <span className="font-medium">Calculator Guide</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-medium">Limitations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">85%</span>
            </div>
            <p className="text-sm text-gray-600">Average accuracy for 20-year projections</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">±15%</span>
            </div>
            <p className="text-sm text-gray-600">Typical variance in FIRE numbers</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">95%</span>
            </div>
            <p className="text-sm text-gray-600">Success with conservative assumptions</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            FIRE calculators are powerful tools for retirement planning, but their accuracy depends on numerous assumptions about the future. Understanding these assumptions, their limitations, and how to interpret results is crucial for making informed financial decisions.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide examines the accuracy of FIRE calculators, explores their underlying assumptions, identifies common pitfalls, and provides strategies for using them effectively in your financial independence journey.
          </p>
        </div>

        {/* Interactive Confidence Calculator */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculator Confidence Estimator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Scenario Assumption
              </label>
              <select
                value={selectedScenario}
                onChange={(e) => setSelectedScenario(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                <option value="optimistic">Optimistic (10% returns)</option>
                <option value="realistic">Realistic (7% returns)</option>
                <option value="conservative">Conservative (4% returns)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Horizon: {timeHorizon} years
              </label>
              <input
                type="range"
                min="10"
                max="50"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Estimated FIRE Number</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${confidence.fireNumber.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Confidence Level</p>
                <p className="text-2xl font-bold text-primary-600">
                  {confidence.confidence}%
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Expected Range</p>
                <p className="text-lg font-semibold text-gray-700">
                  ${(confidence.range.low / 1000).toFixed(0)}k - ${(confidence.range.high / 1000).toFixed(0)}k
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Assumptions Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Core Calculator Assumptions</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">1. Market Return Assumptions</h3>
            
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={marketReturnData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: 'Return %', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="assumed" fill="#94a3b8" name="Assumed Return" />
                  <Bar dataKey="actual" fill="#3b82f6" name="Actual Return" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Common Assumption</p>
                <p className="text-sm text-gray-700">7-10% annual returns based on historical S&P 500 average</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Reality Check</p>
                <p className="text-sm text-gray-700">Actual returns vary wildly year-to-year (-40% to +40%)</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">2. Inflation Impact</h3>
            
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={inflationImpactData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom' }} />
                  <YAxis label={{ value: 'Purchasing Power ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                  <Legend />
                  <Line type="monotone" dataKey="purchasing2" stroke="#10b981" name="2% Inflation" strokeWidth={2} />
                  <Line type="monotone" dataKey="purchasing3" stroke="#f59e0b" name="3% Inflation" strokeWidth={2} />
                  <Line type="monotone" dataKey="purchasing4" stroke="#ef4444" name="4% Inflation" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Key Insight:</strong> A 1% difference in inflation assumption can change your required FIRE number by 20-30% over 30 years.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">3. Withdrawal Rate Success</h3>
            
            <div className="mb-6">
              <ResponsiveContainer width="100%" height={300}>
                <RechartsLineChart data={withdrawalRateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="rate" label={{ value: 'Withdrawal Rate (%)', position: 'insideBottom' }} />
                  <YAxis label={{ value: 'Success Rate (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="success30" stroke="#10b981" name="30 Years" strokeWidth={2} />
                  <Line type="monotone" dataKey="success40" stroke="#f59e0b" name="40 Years" strokeWidth={2} />
                  <Line type="monotone" dataKey="success50" stroke="#ef4444" name="50 Years" strokeWidth={2} />
                </RechartsLineChart>
              </ResponsiveContainer>
            </div>
            
            <p className="text-sm text-gray-700">
              The famous 4% rule has a 95% success rate for 30-year retirements but drops to 76% for 50-year retirements. Early retirees should consider 3.5% or lower.
            </p>
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Calculator Pitfalls</h2>
          
          <div className="space-y-4">
            {[
              {
                icon: XCircle,
                color: 'text-red-600',
                title: 'Ignoring Sequence of Returns Risk',
                description: 'Poor returns early in retirement can devastate a portfolio, even if long-term averages are met.'
              },
              {
                icon: XCircle,
                color: 'text-red-600',
                title: 'Underestimating Healthcare Costs',
                description: 'Pre-Medicare healthcare can cost $15,000-30,000/year for a couple.'
              },
              {
                icon: XCircle,
                color: 'text-red-600',
                title: 'Fixed Spending Assumption',
                description: 'Real spending varies significantly - typically higher early in retirement, lower in middle years, higher again for healthcare.'
              },
              {
                icon: AlertTriangle,
                color: 'text-yellow-600',
                title: 'Tax Simplification',
                description: 'Most calculators use simple tax assumptions that may not reflect your actual tax situation.'
              },
              {
                icon: AlertTriangle,
                color: 'text-yellow-600',
                title: 'Ignoring Life Changes',
                description: 'Major events like marriage, divorce, children, or health issues can dramatically alter plans.'
              }
            ].map((pitfall, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <pitfall.icon className={`w-6 h-6 ${pitfall.color} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{pitfall.title}</h3>
                    <p className="text-gray-700">{pitfall.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Monte Carlo Simulation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Understanding Monte Carlo Simulations</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              Monte Carlo simulations run thousands of scenarios with varying returns to show probability distributions rather than single estimates.
            </p>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monteCarloData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Bar dataKey="amount" fill="#3b82f6">
                  {monteCarloData.map((entry, index) => (
                    <Bar key={`cell-${index}`} fill={
                      index === 0 ? '#ef4444' :
                      index === 1 ? '#f59e0b' :
                      index === 2 ? '#3b82f6' :
                      index === 3 ? '#10b981' :
                      '#059669'
                    } />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">✓ Advantages</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Shows range of possible outcomes</li>
                  <li>• Accounts for market volatility</li>
                  <li>• Provides confidence levels</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">⚠ Limitations</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Still based on historical data</li>
                  <li>• Assumes normal distributions</li>
                  <li>• Can't predict black swan events</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projection Variance Chart */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Projection Variance Over Time</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={projectionVariance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="optimistic" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.3} name="Optimistic" />
                <Area type="monotone" dataKey="base" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} name="Base Case" />
                <Area type="monotone" dataKey="conservative" stackId="3" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} name="Conservative" />
              </AreaChart>
            </ResponsiveContainer>
            
            <p className="mt-4 text-sm text-gray-700">
              <strong>Key Insight:</strong> Projection uncertainty increases exponentially with time. A 30-year projection can have a 300%+ variance between optimistic and conservative scenarios.
            </p>
          </div>
        </section>

        {/* Reliability Assessment */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Assumption Reliability Assessment</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={assumptionReliability}>
                <PolarGrid />
                <PolarAngleAxis dataKey="assumption" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Reliability %" dataKey="reliability" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 space-y-2">
              {assumptionReliability.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{item.assumption}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.reliability >= 70 ? 'bg-green-500' :
                          item.reliability >= 50 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${item.reliability}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-12 text-right">{item.reliability}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices for Accurate Planning</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Brain,
                title: 'Use Multiple Calculators',
                description: 'Compare results from different calculators to identify consensus and outliers.',
                color: 'bg-blue-100 text-blue-600'
              },
              {
                icon: Settings,
                title: 'Adjust Key Variables',
                description: 'Test sensitivity by varying return rates, inflation, and spending by ±1-2%.',
                color: 'bg-purple-100 text-purple-600'
              },
              {
                icon: Shield,
                title: 'Build Safety Margins',
                description: 'Add 10-25% buffer to your FIRE number for unexpected events.',
                color: 'bg-green-100 text-green-600'
              },
              {
                icon: Activity,
                title: 'Plan for Flexibility',
                description: 'Include backup plans like part-time work or geographic arbitrage.',
                color: 'bg-yellow-100 text-yellow-600'
              },
              {
                icon: Search,
                title: 'Regular Recalculation',
                description: 'Update calculations annually with actual data and adjusted assumptions.',
                color: 'bg-red-100 text-red-600'
              },
              {
                icon: Zap,
                title: 'Stress Test Scenarios',
                description: 'Model worst-case scenarios like 2008 or 2020 market conditions.',
                color: 'bg-indigo-100 text-indigo-600'
              }
            ].map((practice, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${practice.color}`}>
                    <practice.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{practice.title}</h3>
                    <p className="text-gray-700">{practice.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator Comparison Table */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculator Feature Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Basic</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Advanced</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Professional</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Monte Carlo Simulation</td>
                  <td className="px-6 py-4 text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Variable Spending</td>
                  <td className="px-6 py-4 text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Tax Optimization</td>
                  <td className="px-6 py-4 text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Healthcare Costs</td>
                  <td className="px-6 py-4 text-center"><XCircle className="w-5 h-5 text-red-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Social Security</td>
                  <td className="px-6 py-4 text-center"><AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900">Accuracy Range</td>
                  <td className="px-6 py-4 text-center text-sm">±30%</td>
                  <td className="px-6 py-4 text-center text-sm">±15%</td>
                  <td className="px-6 py-4 text-center text-sm">±10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Real-World Validation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real-World Validation Studies</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Trinity Study Update (2020)</h3>
              <p className="text-gray-700 mb-4">
                Analysis of 1926-2019 data confirms 4% rule holds for 30-year retirements but suggests 3.3% for 40+ years.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">96% Success Rate</span>
                <span className="text-sm text-gray-600">30-year retirement with 4% SWR</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Early Retirement Now Analysis</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive study showing sequence of returns risk can reduce safe withdrawal rates to 3.25-3.5% for early retirees.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">3.5% Recommended</span>
                <span className="text-sm text-gray-600">50-year retirement horizon</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Vanguard Research (2021)</h3>
              <p className="text-gray-700 mb-4">
                Dynamic spending strategies can increase sustainable withdrawal rates by 0.5-1% while maintaining portfolio longevity.
              </p>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">+0.7% Average Increase</span>
                <span className="text-sm text-gray-600">With dynamic spending rules</span>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Calculator Accuracy Action Plan</h2>
            
            <div className="space-y-4">
              {[
                'Start with conservative assumptions (6% returns, 3% inflation, 3.5% SWR)',
                'Run calculations on at least 3 different calculators',
                'Test sensitivity with ±1% variations in key parameters',
                'Add 15-25% safety margin to base FIRE number',
                'Plan for healthcare costs explicitly ($15-30k/year)',
                'Include flexibility options (part-time work, geographic arbitrage)',
                'Recalculate annually with updated data',
                'Consider professional validation for plans over $2M'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="mb-12">
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Key Takeaways</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p>FIRE calculators are tools, not crystal balls - they provide estimates based on assumptions that will never perfectly match reality.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p>Conservative assumptions and safety margins are your best defense against uncertainty.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p>Regular recalculation and course correction are more important than initial precision.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p>Flexibility in retirement planning (ability to work, reduce spending, relocate) dramatically improves success rates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Your Assumptions</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Calculator className="w-8 h-8 text-primary-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600">Traditional FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Test with standard assumptions</p>
              </div>
            </Link>
            
            <Link href="/coast-fire-calculator" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Coast FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Model front-loaded savings</p>
              </div>
            </Link>
            
            <Link href="/methodology" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Info className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Our Methodology</h3>
                <p className="text-sm text-gray-600">Detailed calculation methods</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Calculate with Confidence?</h2>
            <p className="text-lg mb-6 text-primary-100">
              Use our calculators with proper assumptions and safety margins for reliable retirement planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Calculating
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white font-semibold rounded-lg hover:bg-primary-400 transition-colors"
              >
                More Guides
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}