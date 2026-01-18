'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  Building, 
  DollarSign,
  TrendingUp,
  Calculator,
  Shield,
  Key,
  MapPin,
  Percent,
  ChevronRight,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  PiggyBank,
  Target,
  Award,
  Clock,
  Users,
  Briefcase,
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Sankey
} from 'recharts';

const metadata: Metadata = {
  title: "Real Estate for FIRE: Property Investment Strategies for Financial Independence",
  description: "Master real estate investing for FIRE. Learn rental strategies, house hacking, REITs, BRRRR method, and how to build passive income through property investments.",
  keywords: "real estate fire, rental property financial independence, house hacking, BRRRR strategy, REITs fire portfolio",
};

// Real estate strategy comparison
const strategyComparison = [
  { strategy: 'House Hacking', initial: 25000, cashFlow: 800, appreciation: 3, effort: 30, scalability: 60 },
  { strategy: 'Buy & Hold', initial: 60000, cashFlow: 500, appreciation: 4, effort: 40, scalability: 80 },
  { strategy: 'BRRRR', initial: 40000, cashFlow: 600, appreciation: 5, effort: 80, scalability: 95 },
  { strategy: 'Airbnb/STR', initial: 50000, cashFlow: 1500, appreciation: 3, effort: 70, scalability: 70 },
  { strategy: 'REITs', initial: 1000, cashFlow: 200, appreciation: 7, effort: 5, scalability: 100 },
  { strategy: 'Syndications', initial: 50000, cashFlow: 400, appreciation: 6, effort: 10, scalability: 85 },
];

// Cash flow progression
const cashFlowProgression = [
  { year: 0, properties: 0, monthlyFlow: 0, equity: 0, netWorth: 0 },
  { year: 1, properties: 1, monthlyFlow: 500, equity: 10000, netWorth: 35000 },
  { year: 3, properties: 2, monthlyFlow: 1200, equity: 45000, netWorth: 120000 },
  { year: 5, properties: 3, monthlyFlow: 2100, equity: 95000, netWorth: 245000 },
  { year: 7, properties: 4, monthlyFlow: 3200, equity: 165000, netWorth: 440000 },
  { year: 10, properties: 5, monthlyFlow: 4500, equity: 280000, netWorth: 780000 },
];

// Return comparison
const returnComparison = [
  { investment: 'Rental Property', cashFlow: 6, appreciation: 4, taxBenefit: 3, leverage: 5, total: 18 },
  { investment: 'Stock Market', cashFlow: 2, appreciation: 8, taxBenefit: 0, leverage: 0, total: 10 },
  { investment: 'REITs', cashFlow: 4, appreciation: 6, taxBenefit: 1, leverage: 0, total: 11 },
  { investment: 'Bonds', cashFlow: 3, appreciation: 1, taxBenefit: 0, leverage: 0, total: 4 },
];

// Market analysis data
const marketMetrics = [
  { metric: 'Price/Rent Ratio', ideal: '< 15', good: '15-20', avoid: '> 20' },
  { metric: 'Cap Rate', ideal: '> 8%', good: '6-8%', avoid: '< 6%' },
  { metric: 'Cash-on-Cash', ideal: '> 10%', good: '8-10%', avoid: '< 8%' },
  { metric: '1% Rule', ideal: '> 1%', good: '0.8-1%', avoid: '< 0.8%' },
  { metric: 'Population Growth', ideal: '> 2%/yr', good: '1-2%/yr', avoid: '< 1%/yr' },
];

// BRRRR strategy breakdown
const brrrrBreakdown = [
  { phase: 'Buy', month: 1, invested: 50000, value: 100000, cashOut: 0 },
  { phase: 'Rehab', month: 3, invested: 70000, value: 100000, cashOut: 0 },
  { phase: 'Rent', month: 4, invested: 70000, value: 140000, cashOut: 500 },
  { phase: 'Refinance', month: 6, invested: 15000, value: 140000, cashOut: 500 },
  { phase: 'Repeat', month: 7, invested: 15000, value: 140000, cashOut: 500 },
];

// Property types comparison
const propertyTypes = [
  { type: 'Single Family', cashFlow: 500, appreciation: 85, management: 30, liquidity: 80 },
  { type: 'Duplex', cashFlow: 900, appreciation: 75, management: 45, liquidity: 70 },
  { type: 'Fourplex', cashFlow: 1600, appreciation: 70, management: 60, liquidity: 60 },
  { type: 'Apartment', cashFlow: 3000, appreciation: 65, management: 80, liquidity: 40 },
  { type: 'Commercial', cashFlow: 2500, appreciation: 60, management: 50, liquidity: 30 },
];

// Financing options
const financingOptions = [
  { type: 'Conventional', down: 20, rate: 7.5, pros: 'Low rates', cons: 'Income requirements' },
  { type: 'FHA', down: 3.5, rate: 7.8, pros: 'Low down payment', cons: 'Owner-occupied only' },
  { type: 'VA', down: 0, rate: 7.2, pros: 'No down payment', cons: 'Veterans only' },
  { type: 'Portfolio', down: 25, rate: 8.5, pros: 'Flexible terms', cons: 'Higher rates' },
  { type: 'Hard Money', down: 30, rate: 12, pros: 'Fast closing', cons: 'Expensive' },
  { type: 'Seller Finance', down: 10, rate: 6, pros: 'Negotiable', cons: 'Rare' },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];

export default function RealEstateFirePage() {
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [monthlyRent, setMonthlyRent] = useState(2000);
  const [propertyPrice, setPropertyPrice] = useState(200000);
  const [downPayment, setDownPayment] = useState(20);
  const [interestRate, setInterestRate] = useState(7.5);
  const [strategy, setStrategy] = useState<'buyhold' | 'brrrr' | 'househack'>('buyhold');

  // Calculate real estate metrics
  const calculateMetrics = () => {
    const downPaymentAmount = propertyPrice * (downPayment / 100);
    const loanAmount = propertyPrice - downPaymentAmount;
    const monthlyPayment = (loanAmount * (interestRate / 100 / 12)) / (1 - Math.pow(1 + (interestRate / 100 / 12), -360));
    
    // Operating expenses (30% of rent typical)
    const operatingExpenses = monthlyRent * 0.30;
    const netOperatingIncome = monthlyRent - operatingExpenses;
    const cashFlow = netOperatingIncome - monthlyPayment;
    
    // Key metrics
    const capRate = (netOperatingIncome * 12) / propertyPrice;
    const cashOnCashReturn = (cashFlow * 12) / downPaymentAmount;
    const onePercentRule = monthlyRent / propertyPrice;
    const priceToRentRatio = propertyPrice / (monthlyRent * 12);
    
    // FIRE impact
    const annualCashFlow = cashFlow * 12;
    const fireContribution = annualCashFlow * 25; // Using 4% rule
    const paybackPeriod = downPaymentAmount / annualCashFlow;
    
    return {
      downPaymentAmount: Math.round(downPaymentAmount),
      monthlyPayment: Math.round(monthlyPayment),
      cashFlow: Math.round(cashFlow),
      capRate: Math.round(capRate * 1000) / 10,
      cashOnCashReturn: Math.round(cashOnCashReturn * 1000) / 10,
      onePercentRule: Math.round(onePercentRule * 10000) / 100,
      priceToRentRatio: Math.round(priceToRentRatio * 10) / 10,
      annualCashFlow: Math.round(annualCashFlow),
      fireContribution: Math.round(fireContribution),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10
    };
  };

  const metrics = calculateMetrics();

  // Generate 10-year projection
  const tenYearProjection = Array.from({ length: 11 }, (_, i) => {
    const year = i;
    const appreciationRate = 0.04;
    const rentGrowthRate = 0.03;
    
    const propertyValue = propertyPrice * Math.pow(1 + appreciationRate, year);
    const monthlyRentProjected = monthlyRent * Math.pow(1 + rentGrowthRate, year);
    const annualCashFlow = monthlyRentProjected * 12 * 0.7 - (metrics.monthlyPayment * 12);
    const equity = propertyValue - (propertyPrice - metrics.downPaymentAmount);
    const totalReturn = equity + (annualCashFlow * year);
    
    return {
      year,
      propertyValue: Math.round(propertyValue),
      rent: Math.round(monthlyRentProjected),
      cashFlow: Math.round(annualCashFlow),
      equity: Math.round(equity),
      totalReturn: Math.round(totalReturn)
    };
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Home className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Real Estate for FIRE
            </h1>
            <p className="text-xl sm:text-2xl text-amber-100 max-w-3xl mx-auto">
              Build passive income and accelerate financial independence through strategic property investments
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
              <span className="text-2xl font-bold text-gray-900">$2-5k</span>
            </div>
            <p className="text-sm text-gray-600">Monthly cash flow per property</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">12-18%</span>
            </div>
            <p className="text-sm text-gray-600">Average total return with leverage</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Building className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">5-7</span>
            </div>
            <p className="text-sm text-gray-600">Properties to replace average income</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Real estate is one of the most powerful wealth-building tools for achieving FIRE. Unlike traditional investments, real estate offers multiple returns: cash flow, appreciation, tax benefits, and leverage. With the right strategy, rental properties can replace your income in 5-10 years.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide covers everything from house hacking and the BRRRR method to REITs and syndications. We'll show you how to analyze deals, finance properties, manage rentals, and build a real estate portfolio that generates passive income for life.
          </p>
        </div>

        {/* Interactive Property Calculator */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Rental Property Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Price: ${propertyPrice.toLocaleString()}
              </label>
              <input
                type="range"
                min="50000"
                max="500000"
                step="10000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Rent: ${monthlyRent.toLocaleString()}
              </label>
              <input
                type="range"
                min="500"
                max="5000"
                step="100"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Down Payment: {downPayment}%
              </label>
              <input
                type="range"
                min="3.5"
                max="30"
                step="0.5"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interest Rate: {interestRate}%
              </label>
              <input
                type="range"
                min="5"
                max="10"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Monthly Cash Flow</p>
                <p className="text-2xl font-bold" style={{ 
                  color: metrics.cashFlow > 0 ? '#10b981' : '#ef4444' 
                }}>
                  ${metrics.cashFlow.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">after all expenses</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Cash-on-Cash</p>
                <p className="text-2xl font-bold text-blue-600">
                  {metrics.cashOnCashReturn}%
                </p>
                <p className="text-xs text-gray-500">annual return</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Cap Rate</p>
                <p className="text-2xl font-bold text-purple-600">
                  {metrics.capRate}%
                </p>
                <p className="text-xs text-gray-500">NOI/Price</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">1% Rule</p>
                <p className="text-2xl font-bold" style={{ 
                  color: metrics.onePercentRule >= 1 ? '#10b981' : 
                         metrics.onePercentRule >= 0.8 ? '#f59e0b' : '#ef4444' 
                }}>
                  {metrics.onePercentRule}%
                </p>
                <p className="text-xs text-gray-500">rent/price ratio</p>
              </div>
            </div>
            
            <div className="p-4 bg-amber-50 rounded-lg">
              <p className="text-sm font-semibold text-gray-900 mb-2">FIRE Impact:</p>
              <div className="grid md:grid-cols-3 gap-3 text-sm">
                <div>
                  <span className="text-gray-600">Annual passive income: </span>
                  <span className="font-medium text-green-600">${metrics.annualCashFlow.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-600">FIRE contribution: </span>
                  <span className="font-medium text-blue-600">${metrics.fireContribution.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-gray-600">Payback period: </span>
                  <span className="font-medium">{metrics.paybackPeriod} years</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Real Estate Strategy Comparison</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={strategyComparison}>
                <PolarGrid />
                <PolarAngleAxis dataKey="strategy" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Scalability" dataKey="scalability" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Radar name="Cash Flow (÷10)" dataKey={(item) => item.cashFlow / 10} stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {strategyComparison.map((strategy, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">{strategy.strategy}</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Initial:</span>
                      <span className="font-medium">${(strategy.initial / 1000).toFixed(0)}k</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cash Flow:</span>
                      <span className="font-medium text-green-600">${strategy.cashFlow}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Effort:</span>
                      <span className="font-medium">{strategy.effort}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Scale:</span>
                      <span className="font-medium text-blue-600">{strategy.scalability}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10-Year Projection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">10-Year Property Performance</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={tenYearProjection}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom' }} />
                <YAxis yAxisId="left" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `$${value}`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="totalReturn" fill="#10b981" fillOpacity={0.3} stroke="#10b981" name="Total Return" />
                <Area yAxisId="left" type="monotone" dataKey="equity" fill="#3b82f6" fillOpacity={0.3} stroke="#3b82f6" name="Equity" />
                <Line yAxisId="right" type="monotone" dataKey="rent" stroke="#f59e0b" strokeWidth={2} name="Monthly Rent" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>10-Year Projection:</strong> Property value grows to ${tenYearProjection[10].propertyValue.toLocaleString()}, 
                monthly rent increases to ${tenYearProjection[10].rent.toLocaleString()}, 
                total return reaches ${tenYearProjection[10].totalReturn.toLocaleString()}.
              </p>
            </div>
          </div>
        </section>

        {/* BRRRR Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The BRRRR Method</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-6">
              Buy, Rehab, Rent, Refinance, Repeat - The strategy for infinite returns and rapid portfolio scaling.
            </p>
            
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={brrrrBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="phase" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="invested" fill="#ef4444" name="Cash Invested" />
                <Line type="monotone" dataKey="value" stroke="#10b981" strokeWidth={3} name="Property Value" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">BRRRR Process:</h4>
              <div className="space-y-3">
                {[
                  { phase: 'Buy', description: 'Purchase distressed property below market (70% ARV)', investment: '$50,000' },
                  { phase: 'Rehab', description: 'Renovate to increase value and rentability', investment: '+$20,000' },
                  { phase: 'Rent', description: 'Place quality tenants at market rates', income: '$1,500/mo' },
                  { phase: 'Refinance', description: 'Cash-out refi at 75% of new value', recovery: '$55,000 back' },
                  { phase: 'Repeat', description: 'Use recovered capital for next property', result: 'Infinite returns' }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900">{step.phase}</h5>
                      <p className="text-sm text-gray-700">{step.description}</p>
                      <p className="text-sm font-medium text-amber-600 mt-1">
                        {step.investment || step.income || step.recovery || step.result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cash Flow Progression */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Path to Financial Independence</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={cashFlowProgression}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Year', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="netWorth" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} name="Net Worth" />
                <Area type="monotone" dataKey="equity" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} name="Equity" />
                <Area type="monotone" dataKey={(item) => item.monthlyFlow * 12} stackId="3" stroke="#10b981" fill="#10b981" fillOpacity={0.7} name="Annual Cash Flow" />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-green-600">$4,500</p>
                <p className="text-sm text-gray-700">Monthly passive income</p>
                <p className="text-xs text-gray-600 mt-1">After 10 years (5 properties)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-600">$780k</p>
                <p className="text-sm text-gray-700">Total net worth</p>
                <p className="text-xs text-gray-600 mt-1">Equity + appreciation</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-purple-600">15%</p>
                <p className="text-sm text-gray-700">Average annual return</p>
                <p className="text-xs text-gray-600 mt-1">Cash flow + appreciation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Property Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Property Type Analysis</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={propertyTypes}>
                <PolarGrid />
                <PolarAngleAxis dataKey="type" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Appreciation" dataKey="appreciation" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Radar name="Liquidity" dataKey="liquidity" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Radar name="Management" dataKey="management" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best for Beginners</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span><strong>Single Family:</strong> Easier financing, management, and exit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span><strong>Duplex:</strong> House hack opportunity, dual income</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Best for Scale</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span><strong>Fourplex:</strong> Maximum residential financing, economies of scale</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5" />
                    <span><strong>Apartments:</strong> Professional management, significant cash flow</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Financing Strategies</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Down</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900">Rate</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Pros</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Cons</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {financingOptions.map((option, index) => (
                  <tr key={index}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{option.type}</td>
                    <td className="px-4 py-3 text-sm text-center">{option.down}%</td>
                    <td className="px-4 py-3 text-sm text-center">{option.rate}%</td>
                    <td className="px-4 py-3 text-sm text-green-600">{option.pros}</td>
                    <td className="px-4 py-3 text-sm text-red-600">{option.cons}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> Start with owner-occupied loans (FHA/VA) for lowest down payments, then transition to conventional loans as you scale.
            </p>
          </div>
        </section>

        {/* Market Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Selection Criteria</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="space-y-4">
              {marketMetrics.map((metric, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                  <h4 className="font-semibold text-gray-900 mb-2">{metric.metric}</h4>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-700">Ideal</p>
                      <p className="text-lg font-bold text-green-600">{metric.ideal}</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-yellow-700">Good</p>
                      <p className="text-lg font-bold text-yellow-600">{metric.good}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-700">Avoid</p>
                      <p className="text-lg font-bold text-red-600">{metric.avoid}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Top Markets 2024</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Austin, TX - Tech growth</li>
                  <li>• Raleigh, NC - Population boom</li>
                  <li>• Tampa, FL - No state tax</li>
                  <li>• Phoenix, AZ - Affordability</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Research Tools</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Rentometer - Rent analysis</li>
                  <li>• Zillow - Property data</li>
                  <li>• City-Data - Demographics</li>
                  <li>• BLS.gov - Employment stats</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* REITs Alternative */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">REITs: The Passive Alternative</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Direct Ownership vs REITs</h4>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={returnComparison}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="investment" angle={-20} textAnchor="end" height={60} />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="total" fill="#3b82f6" name="Total Return %" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">REIT Advantages</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>No property management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Instant diversification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>High liquidity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                    <span>Low minimum investment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <span>No leverage or control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
                    <span>Market correlation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Real Estate Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Ignoring 50% Rule',
                impact: 'Negative cash flow surprise',
                solution: 'Budget 50% of rent for expenses'
              },
              {
                mistake: 'No Reserve Fund',
                impact: 'Crisis during vacancies',
                solution: '6 months expenses per property'
              },
              {
                mistake: 'Bad Tenant Screening',
                impact: 'Evictions and damage',
                solution: 'Thorough background checks'
              },
              {
                mistake: 'Wrong Market Timing',
                impact: 'Buying at peak prices',
                solution: 'Focus on cash flow, not appreciation'
              },
              {
                mistake: 'Over-leveraging',
                impact: 'Bankruptcy risk',
                solution: 'Keep debt-to-income under 45%'
              },
              {
                mistake: 'DIY Everything',
                impact: 'Burnout and mistakes',
                solution: 'Build professional team'
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

        {/* Action Plan */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Your First Property Action Plan</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-amber-200">Months 1-3: Preparation</h3>
                <div className="space-y-2">
                  {[
                    'Build credit to 700+',
                    'Save for down payment',
                    'Get pre-approved',
                    'Research markets',
                    'Build team (agent, lender)'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-amber-200">Months 4-6: Acquisition</h3>
                <div className="space-y-2">
                  {[
                    'Analyze 100 properties',
                    'Make 10+ offers',
                    'Inspect thoroughly',
                    'Negotiate repairs',
                    'Close on property'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-amber-200">Months 7+: Operation</h3>
                <div className="space-y-2">
                  {[
                    'Market for tenants',
                    'Screen applicants',
                    'Set up systems',
                    'Track finances',
                    'Plan next property'
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
            <h2 className="text-2xl font-bold mb-6">Real Estate FIRE Takeaways</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>5-7 rental properties can replace the average American income through passive cash flow.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>House hacking and BRRRR strategies allow you to build a portfolio with minimal capital.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Focus on cash flow over appreciation—positive monthly income is what enables FIRE.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Real estate offers 4 returns: cash flow, appreciation, tax benefits, and mortgage paydown.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Start with one property and learn—experience is the best teacher in real estate.</p>
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
                <Calculator className="w-8 h-8 text-amber-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-amber-600">FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Include rental income</p>
              </div>
            </Link>
            
            <Link href="/blog/side-hustles-fire" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Briefcase className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Side Hustles</h3>
                <p className="text-sm text-gray-600">Fund your down payments</p>
              </div>
            </Link>
            
            <Link href="/blog/fire-tax-optimization" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Shield className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Tax Strategies</h3>
                <p className="text-sm text-gray-600">Real estate tax benefits</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Start Building Your Real Estate Portfolio</h2>
            <p className="text-lg mb-6 text-amber-100">
              Real estate has created more millionaires than any other investment. Start your property journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your FIRE Number
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-400 transition-colors"
              >
                More FIRE Strategies
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
}