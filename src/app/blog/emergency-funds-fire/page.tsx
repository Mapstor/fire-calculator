"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Shield, AlertTriangle, TrendingUp, DollarSign, 
  ChevronRight, Calculator, CheckCircle, XCircle,
  Umbrella, PiggyBank, Lock, Activity, Target, ArrowRight
} from 'lucide-react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart,
  RadialBar, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from 'recharts';

export default function EmergencyFundsFirePage() {
  const [monthlyExpenses, setMonthlyExpenses] = useState(4000);
  const [riskTolerance, setRiskTolerance] = useState('moderate');
  const [employmentType, setEmploymentType] = useState('w2');
  const [dependents, setDependents] = useState(0);
  const [healthConditions, setHealthConditions] = useState(false);
  const [currentSavings, setCurrentSavings] = useState(10000);

  // Calculate recommended emergency fund
  const calculateEmergencyFund = () => {
    let baseMonths = 6;
    
    // Adjust based on employment type
    if (employmentType === 'freelance') baseMonths += 3;
    if (employmentType === 'business') baseMonths += 6;
    
    // Adjust based on dependents
    baseMonths += dependents * 1.5;
    
    // Adjust based on health conditions
    if (healthConditions) baseMonths += 2;
    
    // Adjust based on risk tolerance
    if (riskTolerance === 'conservative') baseMonths += 3;
    if (riskTolerance === 'aggressive') baseMonths -= 2;
    
    // FIRE specific adjustments
    const fireAdjustment = 3; // Extra buffer for FIRE journey
    baseMonths += fireAdjustment;
    
    // Cap at reasonable maximum
    baseMonths = Math.min(baseMonths, 24);
    baseMonths = Math.max(baseMonths, 3);
    
    return {
      months: baseMonths,
      amount: baseMonths * monthlyExpenses,
      gap: Math.max(0, (baseMonths * monthlyExpenses) - currentSavings)
    };
  };

  const emergencyFund = calculateEmergencyFund();

  // Emergency fund tiers data
  const fundTiers = [
    { tier: 'Starter', months: 1, amount: monthlyExpenses * 1, color: '#ef4444' },
    { tier: 'Basic', months: 3, amount: monthlyExpenses * 3, color: '#f59e0b' },
    { tier: 'Standard', months: 6, amount: monthlyExpenses * 6, color: '#10b981' },
    { tier: 'Enhanced', months: 9, amount: monthlyExpenses * 9, color: '#3b82f6' },
    { tier: 'FIRE', months: 12, amount: monthlyExpenses * 12, color: '#6366f1' },
    { tier: 'Ultimate', months: 18, amount: monthlyExpenses * 18, color: '#8b5cf6' },
  ];

  // Savings progression data
  const savingsProgression = [
    { month: 0, traditional: 0, fire: 0 },
    { month: 3, traditional: 3000, fire: 6000 },
    { month: 6, traditional: 6000, fire: 15000 },
    { month: 9, traditional: 9000, fire: 27000 },
    { month: 12, traditional: 12000, fire: 42000 },
    { month: 18, traditional: 18000, fire: 65000 },
    { month: 24, traditional: 24000, fire: 90000 },
  ];

  // Risk scenarios
  const riskScenarios = [
    { scenario: 'Job Loss', probability: 15, impact: 95, coverage: 'Full salary replacement' },
    { scenario: 'Medical Emergency', probability: 25, impact: 70, coverage: 'Deductibles & out-of-pocket' },
    { scenario: 'Home Repair', probability: 40, impact: 30, coverage: 'Major repairs not covered' },
    { scenario: 'Car Breakdown', probability: 35, impact: 25, coverage: 'Repairs or replacement' },
    { scenario: 'Market Crash', probability: 20, impact: 60, coverage: 'Portfolio protection' },
    { scenario: 'Family Emergency', probability: 30, impact: 50, coverage: 'Travel & support costs' },
  ];

  // Fund allocation pie chart
  const fundAllocation = [
    { name: 'High-Yield Savings', value: 40, color: '#10b981' },
    { name: 'Money Market', value: 25, color: '#3b82f6' },
    { name: 'Short-term Bonds', value: 20, color: '#6366f1' },
    { name: 'Checking Account', value: 10, color: '#f59e0b' },
    { name: 'Cash/Physical', value: 5, color: '#94a3b8' },
  ];

  // Building timeline
  const buildingTimeline = [
    { phase: 'Month 1-3', goal: '$1,000', focus: 'Immediate emergencies', achieved: currentSavings >= 1000 },
    { phase: 'Month 4-6', goal: '1 month expenses', focus: 'Short-term buffer', achieved: currentSavings >= monthlyExpenses },
    { phase: 'Month 7-12', goal: '3 months expenses', focus: 'Job loss protection', achieved: currentSavings >= monthlyExpenses * 3 },
    { phase: 'Year 2', goal: '6 months expenses', focus: 'Standard emergency fund', achieved: currentSavings >= monthlyExpenses * 6 },
    { phase: 'Year 3+', goal: '12+ months', focus: 'FIRE-level security', achieved: currentSavings >= monthlyExpenses * 12 },
  ];

  // Opportunity cost analysis
  const opportunityCost = [
    { year: 1, emergencyFund: 24000, invested: 25200, difference: -1200 },
    { year: 2, emergencyFund: 24000, invested: 26460, difference: -2460 },
    { year: 3, emergencyFund: 24000, invested: 27783, difference: -3783 },
    { year: 5, emergencyFund: 24000, invested: 30622, difference: -6622 },
    { year: 10, emergencyFund: 24000, invested: 38697, difference: -14697 },
  ];

  // FIRE stage requirements
  const fireStageRequirements = [
    { stage: 'Pre-FIRE', months: 3, reasoning: 'Still have steady income' },
    { stage: 'Accumulation', months: 6, reasoning: 'Building wealth aggressively' },
    { stage: 'Coast FIRE', months: 9, reasoning: 'Reduced income, more time' },
    { stage: 'Barista FIRE', months: 12, reasoning: 'Part-time income only' },
    { stage: 'Lean FIRE', months: 18, reasoning: 'Minimal expenses, high risk' },
    { stage: 'Fat FIRE', months: 12, reasoning: 'Higher expenses, more buffer' },
    { stage: 'Post-FIRE', months: 24, reasoning: 'No active income, full buffer' },
  ];

  return (
    <article className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white relative overflow-hidden">
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
            <span className="text-sm text-white/80">18 min read</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Emergency Funds for FIRE: Building Resilient Safety Nets
          </h1>
          
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Design the perfect emergency fund for your FIRE journey. Learn optimal fund sizes, 
            building strategies, investment options, and how to balance security with opportunity cost.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="font-medium">Risk Management</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <PiggyBank className="w-5 h-5" />
              <span className="font-medium">Savings Strategy</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <Umbrella className="w-5 h-5" />
              <span className="font-medium">Financial Protection</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Emergency Funds Matter More for FIRE
            </h2>
            <p className="text-gray-700 mb-4">
              Emergency funds are the foundation of financial security, but for FIRE seekers, 
              they serve an even more critical role. Without traditional employment safety nets, 
              your emergency fund becomes your primary defense against life's uncertainties.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-1">78%</div>
                <p className="text-sm text-gray-600">FIRE seekers with 12+ months emergency fund</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-600 mb-1">$45,000</div>
                <p className="text-sm text-gray-600">Average FIRE emergency fund size</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-cyan-600 mb-1">2.3 years</div>
                <p className="text-sm text-gray-600">Average time to build full fund</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Calculator */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Emergency Fund Calculator for FIRE
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Expenses
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={monthlyExpenses}
                    onChange={(e) => setMonthlyExpenses(Number(e.target.value))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Employment Type
                </label>
                <select
                  value={employmentType}
                  onChange={(e) => setEmploymentType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="w2">W-2 Employee</option>
                  <option value="freelance">Freelance/Contract</option>
                  <option value="business">Business Owner</option>
                  <option value="retired">Already Retired</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Risk Tolerance
                </label>
                <select
                  value={riskTolerance}
                  onChange={(e) => setRiskTolerance(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                >
                  <option value="conservative">Conservative</option>
                  <option value="moderate">Moderate</option>
                  <option value="aggressive">Aggressive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Dependents
                </label>
                <input
                  type="number"
                  value={dependents}
                  onChange={(e) => setDependents(Number(e.target.value))}
                  min="0"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Emergency Savings
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={currentSavings}
                    onChange={(e) => setCurrentSavings(Number(e.target.value))}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={healthConditions}
                    onChange={(e) => setHealthConditions(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Chronic health conditions
                  </span>
                </label>
              </div>
            </div>

            {/* Results */}
            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Recommended Emergency Fund</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-emerald-600">
                    {emergencyFund.months.toFixed(0)}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Months of expenses</p>
                </div>
                <div className="bg-teal-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-teal-600">
                    ${emergencyFund.amount.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">Total fund needed</p>
                </div>
                <div className={`${emergencyFund.gap > 0 ? 'bg-red-50' : 'bg-green-50'} rounded-lg p-4`}>
                  <div className={`text-3xl font-bold ${emergencyFund.gap > 0 ? 'text-red-600' : 'text-green-600'}`}>
                    ${emergencyFund.gap.toLocaleString()}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {emergencyFund.gap > 0 ? 'Gap to fill' : 'Surplus'}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Current Progress</span>
                  <span>{Math.min(100, (currentSavings / emergencyFund.amount * 100)).toFixed(0)}%</span>
                </div>
                <div className="bg-gray-200 rounded-full h-4">
                  <div 
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(100, (currentSavings / emergencyFund.amount * 100))}%` }}
                  ></div>
                </div>
              </div>

              {emergencyFund.gap > 0 && (
                <div className="bg-amber-50 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Monthly savings needed:</strong> To reach your goal in 12 months, 
                    save ${Math.ceil(emergencyFund.gap / 12).toLocaleString()} per month.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Fund Tiers Visualization */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Emergency Fund Tiers for FIRE Journey
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={fundTiers}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="tier" />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                <Bar dataKey="amount" fill="#10b981">
                  {fundTiers.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fundTiers.map((tier, index) => (
              <div 
                key={index}
                className={`border-2 rounded-lg p-4 ${
                  currentSavings >= tier.amount 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-200'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{tier.tier}</h3>
                  {currentSavings >= tier.amount && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: tier.color }}>
                  ${tier.amount.toLocaleString()}
                </div>
                <p className="text-sm text-gray-600">{tier.months} month{tier.months > 1 ? 's' : ''} expenses</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Scenarios */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Your Emergency Fund Protects Against
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={riskScenarios}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="probability" stackId="1" stroke="#f59e0b" fill="#fbbf24" name="Probability (%)" />
                <Area type="monotone" dataKey="impact" stackId="2" stroke="#ef4444" fill="#f87171" name="Financial Impact (%)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {riskScenarios.map((risk, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">{risk.scenario}</h3>
                  <AlertTriangle className={`w-5 h-5 ${
                    risk.impact > 70 ? 'text-red-500' : 
                    risk.impact > 40 ? 'text-amber-500' : 'text-yellow-500'
                  }`} />
                </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <span className="text-xs text-gray-500">Probability</span>
                    <div className="text-sm font-semibold">{risk.probability}%</div>
                  </div>
                  <div>
                    <span className="text-xs text-gray-500">Impact</span>
                    <div className="text-sm font-semibold">{risk.impact}%</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{risk.coverage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fund Allocation Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Optimal Emergency Fund Allocation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={fundAllocation}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {fundAllocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Allocation Guidelines</h3>
              {fundAllocation.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-600">{item.value}%</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.name === 'High-Yield Savings' && 'Primary storage, 2-3% APY'}
                      {item.name === 'Money Market' && 'Higher yields, check writing'}
                      {item.name === 'Short-term Bonds' && '1-2 year duration, stable'}
                      {item.name === 'Checking Account' && 'Immediate access needs'}
                      {item.name === 'Cash/Physical' && 'Power outages, emergencies'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Pro Tip: Ladder Your Access</h3>
            <p className="text-sm text-blue-800">
              Structure your emergency fund in layers: immediate access (checking), 
              quick access (savings), and slightly delayed access (money market/bonds) 
              for better overall returns while maintaining liquidity.
            </p>
          </div>
        </section>

        {/* Building Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Emergency Fund Building Timeline
          </h2>

          <div className="space-y-4">
            {buildingTimeline.map((phase, index) => (
              <div 
                key={index}
                className={`border-l-4 pl-4 py-3 ${
                  phase.achieved 
                    ? 'border-green-500 bg-green-50' 
                    : index === 0 || buildingTimeline[index - 1].achieved 
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                      {phase.achieved && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{phase.focus}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{phase.goal}</div>
                    <div className="text-xs text-gray-500">
                      {phase.achieved ? 'Completed' : 'Target'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Acceleration Strategies</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Automate transfers on payday</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Direct deposit tax refunds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Save 100% of windfalls</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Temporary expense reduction</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Side hustle dedication</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Sell unused items</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FIRE vs Traditional Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            FIRE vs Traditional Emergency Fund Growth
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={savingsProgression}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom', offset: -5 }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="traditional" stroke="#94a3b8" strokeWidth={2} name="Traditional Approach" />
                <Line type="monotone" dataKey="fire" stroke="#10b981" strokeWidth={2} name="FIRE Approach" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Traditional Approach</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 3-6 months expenses target</li>
                <li>• $500-1,000/month savings rate</li>
                <li>• Lower priority vs retirement</li>
                <li>• Basic savings account storage</li>
                <li>• Rebuild slowly after use</li>
              </ul>
            </div>

            <div className="bg-emerald-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">FIRE Approach</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 12-24 months expenses target</li>
                <li>• $2,000-5,000/month savings rate</li>
                <li>• Top priority before investing</li>
                <li>• Optimized multi-account strategy</li>
                <li>• Rapid rebuild protocols</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Opportunity Cost Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            The Opportunity Cost Debate
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={opportunityCost}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom', offset: -5 }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value: any) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="emergencyFund" fill="#94a3b8" name="Emergency Fund (2% return)" />
                <Bar dataKey="invested" fill="#10b981" name="If Invested (7% return)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-amber-50 rounded-xl p-6">
            <h3 className="font-semibold text-amber-900 mb-3">The Peace of Mind Premium</h3>
            <p className="text-amber-800 mb-4">
              Yes, keeping $24,000 in emergency funds costs you ~$15,000 in opportunity cost 
              over 10 years. But consider what you're buying:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Tangible Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Never forced to sell investments at a loss</li>
                  <li>• Ability to take calculated risks</li>
                  <li>• No high-interest debt in emergencies</li>
                  <li>• Negotiation power (job, purchases)</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Intangible Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Reduced stress and anxiety</li>
                  <li>• Better sleep quality</li>
                  <li>• Improved relationships</li>
                  <li>• Mental bandwidth for opportunities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FIRE Stage Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Emergency Fund by FIRE Stage
          </h2>

          <div className="space-y-4">
            {fireStageRequirements.map((stage, index) => (
              <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold text-gray-900">{stage.stage}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-emerald-600">{stage.months}</span>
                    <span className="text-sm text-gray-500">months</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{stage.reasoning}</p>
                <div className="mt-2">
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width: `${(stage.months / 24) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-indigo-50 rounded-xl p-6">
            <h3 className="font-semibold text-indigo-900 mb-3">Dynamic Adjustment Strategy</h3>
            <p className="text-sm text-indigo-800 mb-3">
              Your emergency fund needs change throughout your FIRE journey. Adjust based on:
            </p>
            <ul className="space-y-2 text-sm text-indigo-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span><strong>Income stability:</strong> More variable income = larger fund</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span><strong>Portfolio size:</strong> Smaller portfolio = larger emergency fund</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span><strong>Market conditions:</strong> Bear markets = consider increasing</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span><strong>Life changes:</strong> New dependents, health issues = increase fund</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Advanced Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Advanced Emergency Fund Strategies
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">The Bond Ladder Approach</h3>
              <p className="text-sm text-gray-700 mb-3">
                Create a rolling ladder of 3-month CDs or Treasury bills:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Month 1-3: High-yield savings</li>
                <li>• Month 4-6: 3-month CD</li>
                <li>• Month 7-9: 6-month CD</li>
                <li>• Month 10-12: 9-month CD</li>
              </ul>
              <p className="text-xs text-purple-700 mt-3">
                Benefit: 0.5-1% higher returns with minimal liquidity sacrifice
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">The HELOC Backup</h3>
              <p className="text-sm text-gray-700 mb-3">
                Secure a HELOC while employed as emergency backup:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Keep smaller cash emergency fund</li>
                <li>• HELOC for true emergencies only</li>
                <li>• Invest the difference</li>
                <li>• Pay off immediately if used</li>
              </ul>
              <p className="text-xs text-blue-700 mt-3">
                Warning: Requires discipline and stable home value
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">The Roth IRA Bridge</h3>
              <p className="text-sm text-gray-700 mb-3">
                Use Roth IRA contributions as last-resort emergency fund:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Contributions withdrawable anytime</li>
                <li>• No penalties or taxes</li>
                <li>• Grows tax-free if unused</li>
                <li>• Preserves contribution space</li>
              </ul>
              <p className="text-xs text-green-700 mt-3">
                Best for: Those maxing retirement accounts
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-3">The Barbell Strategy</h3>
              <p className="text-sm text-gray-700 mb-3">
                Split between ultra-safe and moderate risk:
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 70% in high-yield savings</li>
                <li>• 30% in stable value funds</li>
                <li>• Rebalance quarterly</li>
                <li>• Higher returns, some volatility</li>
              </ul>
              <p className="text-xs text-amber-700 mt-3">
                Return boost: ~1-2% annually with minimal risk
              </p>
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Emergency Fund Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Investing Emergency Funds</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Never put emergency funds in stocks, crypto, or volatile assets. 
                    The point is stability, not growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Using for Non-Emergencies</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Vacations, new gadgets, and "great deals" are not emergencies. 
                    Maintain strict discipline about usage.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Not Adjusting for Inflation</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Review and increase your target annually. $30,000 today won't 
                    have the same purchasing power in 5 years.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-red-500 pl-4 py-3 bg-red-50">
              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">Single Account Storage</h3>
                  <p className="text-sm text-gray-700 mt-1">
                    Spread across multiple banks to maximize FDIC coverage and 
                    prevent total loss of access.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Your 90-Day Emergency Fund Action Plan
          </h2>

          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-6">Week-by-Week Implementation</h3>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Weeks 1-2: Assessment</h4>
                <ul className="text-sm space-y-1 text-emerald-100">
                  <li>✓ Calculate exact monthly expenses</li>
                  <li>✓ Determine target fund size</li>
                  <li>✓ Assess current savings</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Weeks 3-4: Setup</h4>
                <ul className="text-sm space-y-1 text-emerald-100">
                  <li>✓ Open high-yield savings account</li>
                  <li>✓ Set up automatic transfers</li>
                  <li>✓ Create visual tracking system</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Weeks 5-8: Acceleration</h4>
                <ul className="text-sm space-y-1 text-emerald-100">
                  <li>✓ Implement expense reductions</li>
                  <li>✓ Start side income if needed</li>
                  <li>✓ Sell unnecessary items</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold mb-2">Weeks 9-12: Optimization</h4>
                <ul className="text-sm space-y-1 text-emerald-100">
                  <li>✓ Review and adjust strategy</li>
                  <li>✓ Explore higher yield options</li>
                  <li>✓ Plan long-term approach</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Build Your Financial Foundation Today</h2>
            <p className="text-indigo-100 mb-6">
              A robust emergency fund is the cornerstone of FIRE success. Start building your 
              safety net and gain the confidence to pursue aggressive FIRE strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/fire-calculator"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Calculate FIRE Number
              </Link>
              <Link 
                href="/blog/fire-for-late-starters"
                className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-400 transition-colors"
              >
                <Target className="w-5 h-5" />
                Accelerated Strategies
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/fire-mindset-psychology" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Activity className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  FIRE Mindset & Psychology
                </h3>
                <p className="text-sm text-gray-600">
                  Mental preparation for financial independence journey.
                </p>
              </div>
            </Link>

            <Link href="/blog/fire-tax-optimization" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <Shield className="w-8 h-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  Tax Optimization Guide
                </h3>
                <p className="text-sm text-gray-600">
                  Maximize tax efficiency throughout your FIRE journey.
                </p>
              </div>
            </Link>

            <Link href="/blog/fire-withdrawal-strategies" className="group">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6">
                <TrendingUp className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                  Withdrawal Strategies
                </h3>
                <p className="text-sm text-gray-600">
                  Optimize your retirement drawdown for longevity.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}