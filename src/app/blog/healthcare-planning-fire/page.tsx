'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Heart, 
  Shield, 
  DollarSign,
  Activity,
  Calculator,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Users,
  Building,
  Globe,
  Briefcase,
  ChevronRight,
  Info,
  Zap,
  Clock,
  PiggyBank,
  FileText,
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
  Radar,
  Sankey
} from 'recharts';

const metadata: Metadata = {
  title: "Healthcare Planning for FIRE: Pre-Medicare Strategies & Cost Calculators",
  description: "Complete guide to healthcare planning for early retirement. Learn ACA strategies, cost projections, HSA optimization, and bridge coverage options before Medicare.",
  keywords: "fire healthcare, early retirement healthcare, aca fire strategy, pre-medicare coverage, hsa fire planning",
};

// Healthcare cost by age data
const healthcareCostByAge = [
  { age: 35, individual: 5400, couple: 10800, family: 16200 },
  { age: 40, individual: 6200, couple: 12400, family: 18600 },
  { age: 45, individual: 7400, couple: 14800, family: 22200 },
  { age: 50, individual: 9200, couple: 18400, family: 27600 },
  { age: 55, individual: 11800, couple: 23600, family: 35400 },
  { age: 60, individual: 14600, couple: 29200, family: 43800 },
  { age: 64, individual: 16800, couple: 33600, family: 50400 },
];

// ACA subsidy cliff data
const acaSubsidyData = [
  { income: 30000, premium: 1200, subsidy: 7200, net: 1200, percent: 4 },
  { income: 40000, premium: 3200, subsidy: 5200, net: 3200, percent: 8 },
  { income: 50000, premium: 4500, subsidy: 3900, net: 4500, percent: 9 },
  { income: 60000, premium: 5400, subsidy: 3000, net: 5400, percent: 9 },
  { income: 70000, premium: 6300, subsidy: 2100, net: 6300, percent: 9 },
  { income: 80000, premium: 7200, subsidy: 1200, net: 7200, percent: 9 },
  { income: 90000, premium: 8400, subsidy: 0, net: 8400, percent: 9.3 },
];

// Coverage options comparison
const coverageOptions = [
  { option: 'Employer COBRA', cost: 1800, duration: 18, quality: 95, flexibility: 20 },
  { option: 'ACA Bronze', cost: 450, duration: 100, quality: 60, flexibility: 80 },
  { option: 'ACA Silver', cost: 650, duration: 100, quality: 70, flexibility: 80 },
  { option: 'ACA Gold', cost: 850, duration: 100, quality: 80, flexibility: 80 },
  { option: 'Private Insurance', cost: 1200, duration: 100, quality: 85, flexibility: 90 },
  { option: 'Health Share', cost: 400, duration: 100, quality: 50, flexibility: 60 },
  { option: 'International', cost: 300, duration: 100, quality: 70, flexibility: 100 },
];

// HSA growth projection
const hsaProjection = [
  { year: 0, balance: 10000, contributions: 0, growth: 0, medical: 0 },
  { year: 5, balance: 45000, contributions: 35000, growth: 10000, medical: 0 },
  { year: 10, balance: 95000, contributions: 70000, growth: 25000, medical: 0 },
  { year: 15, balance: 165000, contributions: 105000, growth: 60000, medical: 0 },
  { year: 20, balance: 260000, contributions: 140000, growth: 120000, medical: 0 },
  { year: 25, balance: 385000, contributions: 175000, growth: 210000, medical: 0 },
  { year: 30, balance: 550000, contributions: 210000, growth: 340000, medical: 0 },
];

// State marketplace comparison
const stateMarketplaceData = [
  { state: 'California', avgPremium: 426, plans: 12, rating: 85 },
  { state: 'Texas', avgPremium: 461, plans: 8, rating: 72 },
  { state: 'Florida', avgPremium: 478, plans: 9, rating: 74 },
  { state: 'New York', avgPremium: 498, plans: 14, rating: 88 },
  { state: 'Colorado', avgPremium: 412, plans: 10, rating: 82 },
  { state: 'Washington', avgPremium: 405, plans: 11, rating: 86 },
];

// Healthcare inflation data
const inflationData = [
  { year: 2020, general: 1.2, healthcare: 4.1, difference: 2.9 },
  { year: 2021, general: 6.8, healthcare: 5.3, difference: -1.5 },
  { year: 2022, general: 7.5, healthcare: 6.2, difference: -1.3 },
  { year: 2023, general: 3.4, healthcare: 5.8, difference: 2.4 },
  { year: 2024, general: 2.9, healthcare: 5.5, difference: 2.6 },
  { year: 2025, general: 2.5, healthcare: 5.2, difference: 2.7 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];

export default function HealthcarePlanningPage() {
  const [retirementAge, setRetirementAge] = useState(50);
  const [familySize, setFamilySize] = useState<'individual' | 'couple' | 'family'>('couple');
  const [annualIncome, setAnnualIncome] = useState(60000);
  const [hsaBalance, setHsaBalance] = useState(25000);
  const [healthStatus, setHealthStatus] = useState<'excellent' | 'good' | 'fair'>('good');
  const [state, setState] = useState('California');

  // Calculate healthcare costs
  const calculateHealthcareCosts = () => {
    const yearsToMedicare = 65 - retirementAge;
    const baseCost = familySize === 'individual' ? 8400 : familySize === 'couple' ? 16800 : 25200;
    const healthMultiplier = healthStatus === 'excellent' ? 0.8 : healthStatus === 'good' ? 1 : 1.3;
    const inflationRate = 0.055; // 5.5% healthcare inflation
    
    let totalCost = 0;
    let yearByYear = [];
    
    for (let i = 0; i < yearsToMedicare; i++) {
      const yearCost = baseCost * healthMultiplier * Math.pow(1 + inflationRate, i);
      totalCost += yearCost;
      yearByYear.push({
        year: i + 1,
        age: retirementAge + i,
        cost: Math.round(yearCost)
      });
    }
    
    // ACA subsidy calculation
    const fpl = familySize === 'individual' ? 14580 : familySize === 'couple' ? 19720 : 28120;
    const incomePercent = (annualIncome / fpl) * 100;
    const subsidyEligible = incomePercent <= 400;
    const estimatedSubsidy = subsidyEligible ? Math.max(0, baseCost - (annualIncome * 0.085)) : 0;
    
    return {
      totalCost: Math.round(totalCost),
      annualAverage: Math.round(totalCost / yearsToMedicare),
      yearsToMedicare,
      subsidyEligible,
      estimatedSubsidy: Math.round(estimatedSubsidy),
      netAnnualCost: Math.round(baseCost * healthMultiplier - estimatedSubsidy),
      yearByYear
    };
  };

  const healthcareCosts = calculateHealthcareCosts();

  // Generate year by year projection
  const yearByYearCosts = healthcareCosts.yearByYear.slice(0, 15);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Heart className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Healthcare Planning for FIRE
            </h1>
            <p className="text-xl sm:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Master pre-Medicare healthcare strategies and calculate your coverage costs for early retirement
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
              <Shield className="w-8 h-8 text-emerald-600" />
              <span className="text-2xl font-bold text-gray-900">$280k</span>
            </div>
            <p className="text-sm text-gray-600">Average healthcare costs from 50 to Medicare</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">$7,200</span>
            </div>
            <p className="text-sm text-gray-600">Average annual ACA subsidy</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">5.5%</span>
            </div>
            <p className="text-sm text-gray-600">Annual healthcare inflation rate</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Healthcare is often the biggest concern—and expense—for early retirees. The gap between leaving employer coverage and Medicare eligibility at 65 requires careful planning, strategic income management, and a thorough understanding of your options.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide covers ACA optimization, HSA strategies, international options, and provides calculators to estimate your pre-Medicare healthcare costs. We'll show you how to minimize expenses while maintaining quality coverage throughout early retirement.
          </p>
        </div>

        {/* Interactive Healthcare Cost Calculator */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pre-Medicare Healthcare Cost Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Retirement Age: {retirementAge}
              </label>
              <input
                type="range"
                min="40"
                max="64"
                value={retirementAge}
                onChange={(e) => setRetirementAge(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Family Size
              </label>
              <select
                value={familySize}
                onChange={(e) => setFamilySize(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="individual">Individual</option>
                <option value="couple">Couple</option>
                <option value="family">Family (2+ children)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Income (MAGI): ${annualIncome.toLocaleString()}
              </label>
              <input
                type="range"
                min="20000"
                max="150000"
                step="5000"
                value={annualIncome}
                onChange={(e) => setAnnualIncome(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Health Status
              </label>
              <select
                value={healthStatus}
                onChange={(e) => setHealthStatus(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500"
              >
                <option value="excellent">Excellent (minimal care needed)</option>
                <option value="good">Good (routine care)</option>
                <option value="fair">Fair (chronic conditions)</option>
              </select>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Cost to Medicare</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${healthcareCosts.totalCost.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">{healthcareCosts.yearsToMedicare} years</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Annual Average</p>
                <p className="text-2xl font-bold text-emerald-600">
                  ${healthcareCosts.annualAverage.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">before subsidies</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">ACA Subsidy</p>
                <p className="text-2xl font-bold text-blue-600">
                  ${healthcareCosts.estimatedSubsidy.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  {healthcareCosts.subsidyEligible ? 'eligible' : 'not eligible'}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Net Annual Cost</p>
                <p className="text-2xl font-bold text-purple-600">
                  ${healthcareCosts.netAnnualCost.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">after subsidies</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Planning Tip:</strong> Add 20-30% buffer to these estimates for unexpected medical costs and premium increases.
              </p>
            </div>
          </div>
        </div>

        {/* Year by Year Cost Projection */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Year-by-Year Healthcare Costs</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={yearByYearCosts}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="age" label={{ value: 'Age', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area 
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#10b981" 
                  fill="#10b981" 
                  fillOpacity={0.3}
                  name="Annual Healthcare Cost"
                />
              </AreaChart>
            </ResponsiveContainer>
            
            <p className="mt-4 text-sm text-gray-700">
              Healthcare costs typically increase 5-6% annually, outpacing general inflation. This projection includes medical inflation but not potential changes in health status.
            </p>
          </div>
        </section>

        {/* ACA Strategy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">ACA Optimization Strategies</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Income Management for Maximum Subsidies</h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={acaSubsidyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="income" tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="subsidy" stackId="a" fill="#10b981" name="Subsidy Amount" />
                <Bar dataKey="net" stackId="a" fill="#3b82f6" name="Your Cost" />
                <Line type="monotone" dataKey="percent" stroke="#ef4444" strokeWidth={2} name="% of Income" yAxisId="right" />
                <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Income Sweet Spots</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 138-250% FPL: Maximum subsidies</li>
                  <li>• 250-400% FPL: Moderate subsidies</li>
                  <li>• &gt;400% FPL: No subsidies (cliff)</li>
                  <li>• Consider Roth conversions carefully</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Income Control Tactics</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tax-gain harvesting in low years</li>
                  <li>• Strategic withdrawal timing</li>
                  <li>• Business expense bunching</li>
                  <li>• Donor-advised fund contributions</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <FileText className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Silver Plan Strategy</h3>
              <p className="text-sm text-gray-700 mb-3">
                Best for most - qualifies for cost-sharing reductions if income &lt;250% FPL
              </p>
              <p className="text-xs text-gray-600">Deductible: $2,000-4,000</p>
              <p className="text-xs text-gray-600">Max OOP: $6,000-8,000</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Zap className="w-8 h-8 text-yellow-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bronze + HSA</h3>
              <p className="text-sm text-gray-700 mb-3">
                Lower premiums, HSA eligibility, best for healthy individuals
              </p>
              <p className="text-xs text-gray-600">Deductible: $6,000-7,000</p>
              <p className="text-xs text-gray-600">HSA Contribution: $4,150</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Award className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Gold Plan Safety</h3>
              <p className="text-sm text-gray-700 mb-3">
                Higher premiums but lower out-of-pocket for chronic conditions
              </p>
              <p className="text-xs text-gray-600">Deductible: $500-1,500</p>
              <p className="text-xs text-gray-600">Max OOP: $4,000-6,000</p>
            </div>
          </div>
        </section>

        {/* HSA Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">HSA: The Ultimate FIRE Healthcare Tool</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={hsaProjection}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="balance" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} name="Total Balance" />
                <Area type="monotone" dataKey="growth" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.5} name="Investment Growth" />
                <Area type="monotone" dataKey="contributions" stackId="3" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.7} name="Contributions" />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6 bg-purple-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">HSA Triple Tax Advantage Strategy</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Accumulation Phase (Working)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Max contributions: $4,150 individual, $8,300 family</li>
                    <li>• Invest 100% in growth funds</li>
                    <li>• Pay medical expenses out-of-pocket</li>
                    <li>• Save all medical receipts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Distribution Phase (FIRE)</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tax-free withdrawals for saved receipts</li>
                    <li>• Pay current medical expenses</li>
                    <li>• After 65: penalty-free for any expense</li>
                    <li>• No RMDs ever</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Options Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Coverage Options Compared</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={coverageOptions}>
                <PolarGrid />
                <PolarAngleAxis dataKey="option" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Quality Score" dataKey="quality" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Radar name="Flexibility Score" dataKey="flexibility" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left">Option</th>
                    <th className="px-4 py-2 text-center">Monthly Cost</th>
                    <th className="px-4 py-2 text-center">Duration</th>
                    <th className="px-4 py-2 text-center">Best For</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">COBRA</td>
                    <td className="px-4 py-3 text-center">$1,800</td>
                    <td className="px-4 py-3 text-center">18 months</td>
                    <td className="px-4 py-3">Short gap, maintaining doctors</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">ACA Plans</td>
                    <td className="px-4 py-3 text-center">$450-850</td>
                    <td className="px-4 py-3 text-center">Unlimited</td>
                    <td className="px-4 py-3">Most early retirees</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Private Insurance</td>
                    <td className="px-4 py-3 text-center">$1,200</td>
                    <td className="px-4 py-3 text-center">Unlimited</td>
                    <td className="px-4 py-3">High income, specific needs</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Health Sharing</td>
                    <td className="px-4 py-3 text-center">$400</td>
                    <td className="px-4 py-3 text-center">Unlimited</td>
                    <td className="px-4 py-3">Healthy, no pre-existing</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">International</td>
                    <td className="px-4 py-3 text-center">$300</td>
                    <td className="px-4 py-3 text-center">Varies</td>
                    <td className="px-4 py-3">Expats, travelers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* State Marketplace Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Best States for ACA Coverage</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stateMarketplaceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="state" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="avgPremium" fill="#ef4444" name="Avg Premium ($)" />
                <Bar yAxisId="left" dataKey="plans" fill="#3b82f6" name="Plans Available" />
                <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#10b981" strokeWidth={3} name="Quality Rating" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Top States for Coverage</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• California - Covered California, great subsidies</li>
                  <li>• Massachusetts - Universal coverage culture</li>
                  <li>• New York - Strong marketplace, no underwriting</li>
                  <li>• Washington - Apple Health expansion</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">States to Approach Carefully</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Texas - Limited Medicaid, fewer options</li>
                  <li>• Florida - No Medicaid expansion</li>
                  <li>• Rural states - Limited provider networks</li>
                  <li>• Check network adequacy before moving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* International Options */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">International Healthcare Options</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Globe className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Medical Tourism</h3>
              <p className="text-sm text-gray-700 mb-3">
                Major procedures at 20-30% of US costs
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Mexico: Dental, prescriptions</li>
                <li>• Thailand: Surgery, wellness</li>
                <li>• India: Complex procedures</li>
                <li>• Turkey: Cosmetic, dental</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Shield className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Expat Insurance</h3>
              <p className="text-sm text-gray-700 mb-3">
                Global coverage excluding US: $200-600/month
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Cigna Global</li>
                <li>• Allianz Care</li>
                <li>• IMG Global</li>
                <li>• SafetyWing Nomad</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <Building className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Residency Programs</h3>
              <p className="text-sm text-gray-700 mb-3">
                Countries with excellent universal healthcare
              </p>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Portugal: NHR program</li>
                <li>• Spain: Non-lucrative visa</li>
                <li>• France: Long-stay visa</li>
                <li>• Malaysia: MM2H program</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Healthcare Inflation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare vs General Inflation</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={inflationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
                <Line type="monotone" dataKey="general" stroke="#3b82f6" strokeWidth={2} name="General Inflation" />
                <Line type="monotone" dataKey="healthcare" stroke="#ef4444" strokeWidth={2} name="Healthcare Inflation" />
                <Line type="monotone" dataKey="difference" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Difference" />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Critical Planning Factor:</strong> Healthcare costs historically rise 2-3% faster than general inflation. A $10,000 annual healthcare budget today could be $18,000 in 10 years.
              </p>
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Healthcare Transition Timeline</h2>
          
          <div className="space-y-4">
            {[
              {
                phase: '5 Years Before FIRE',
                items: [
                  'Max HSA contributions and invest',
                  'Research ACA options in target states',
                  'Build medical expense documentation',
                  'Consider HDHP for HSA eligibility'
                ],
                color: 'bg-blue-100 border-blue-300'
              },
              {
                phase: '1 Year Before FIRE',
                items: [
                  'Calculate projected MAGI for subsidies',
                  'Schedule preventive care and procedures',
                  'Update prescriptions for mail-order',
                  'Research providers in network'
                ],
                color: 'bg-green-100 border-green-300'
              },
              {
                phase: 'FIRE Transition',
                items: [
                  'Elect COBRA if needed (60-day window)',
                  'Apply during ACA open enrollment',
                  'Set up estimated tax payments',
                  'Establish care with new providers'
                ],
                color: 'bg-yellow-100 border-yellow-300'
              },
              {
                phase: 'Ongoing Management',
                items: [
                  'Annual income optimization for subsidies',
                  'Review plan options each November',
                  'Track out-of-pocket expenses',
                  'Maintain HSA investment strategy'
                ],
                color: 'bg-purple-100 border-purple-300'
              }
            ].map((phase, index) => (
              <div key={index} className={`border-l-4 ${phase.color} pl-6 py-4`}>
                <h3 className="font-bold text-gray-900 mb-3">{phase.phase}</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {phase.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Healthcare Planning Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Underestimating Costs',
                impact: 'Budget shortfall of $100k+',
                solution: 'Use 6% inflation, add 30% buffer'
              },
              {
                mistake: 'Missing COBRA Deadline',
                impact: 'Gap in coverage',
                solution: 'Mark 60-day election period'
              },
              {
                mistake: 'Income Cliff at 400% FPL',
                impact: 'Loss of all subsidies',
                solution: 'Careful income management'
              },
              {
                mistake: 'Wrong Network Selection',
                impact: 'No covered providers',
                solution: 'Verify before enrollment'
              },
              {
                mistake: 'Ignoring Prescription Costs',
                impact: '$500+ monthly surprises',
                solution: 'Check formularies, use GoodRx'
              },
              {
                mistake: 'No Backup Plan',
                impact: 'Financial crisis if sick',
                solution: 'Maintain emergency fund'
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
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Your Healthcare Planning Checklist</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-emerald-200">Financial Preparation</h3>
                <div className="space-y-2">
                  {[
                    'Calculate total healthcare costs to 65',
                    'Build HSA to $100k+ if possible',
                    'Plan for $15-20k annual expenses',
                    'Create separate healthcare fund',
                    'Model different income scenarios'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-emerald-200">Coverage Strategy</h3>
                <div className="space-y-2">
                  {[
                    'Research ACA plans in your state',
                    'Understand subsidy qualifications',
                    'Identify in-network providers',
                    'Plan prescription management',
                    'Consider backup options'
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
            <h2 className="text-2xl font-bold mb-6">Key Healthcare Planning Takeaways</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <p>Budget $280-400k for healthcare from age 50 to Medicare for a couple.</p>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                <p>ACA subsidies can reduce costs by 50-80% with proper income management.</p>
              </div>
              <div className="flex items-start gap-3">
                <PiggyBank className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p>HSAs are the ultimate triple-tax-advantaged healthcare and retirement tool.</p>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Start planning 5 years before FIRE for smooth healthcare transition.</p>
              </div>
              <div className="flex items-start gap-3">
                <Globe className="w-6 h-6 text-purple-400 flex-shrink-0 mt-0.5" />
                <p>International options can reduce costs by 70% with proper planning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Healthcare Planning Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Calculator className="w-8 h-8 text-emerald-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600">FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Include healthcare in planning</p>
              </div>
            </Link>
            
            <Link href="/blog/fire-for-late-starters" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Users className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Late Starter Guide</h3>
                <p className="text-sm text-gray-600">Healthcare bridge strategies</p>
              </div>
            </Link>
            
            <Link href="/blog/geographic-arbitrage-fire" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Globe className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Geographic Arbitrage</h3>
                <p className="text-sm text-gray-600">Healthcare cost optimization</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Don't Let Healthcare Derail Your FIRE Plans</h2>
            <p className="text-lg mb-6 text-emerald-100">
              With proper planning and strategy, healthcare costs are manageable in early retirement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your FIRE Number
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
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