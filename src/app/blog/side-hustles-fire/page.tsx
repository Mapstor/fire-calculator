'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Briefcase, 
  TrendingUp, 
  DollarSign,
  Clock,
  Zap,
  Users,
  Globe,
  Code,
  Camera,
  Home,
  Car,
  BookOpen,
  Package,
  Smartphone,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Target,
  Award,
  BarChart3,
  PiggyBank,
  Rocket
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
  Treemap
} from 'recharts';

const metadata: Metadata = {
  title: "Side Hustles for FIRE: Income Streams to Accelerate Financial Independence",
  description: "Discover the best side hustles to accelerate FIRE. Learn scalable income strategies, time optimization, and how to add $20-50k annually to your savings rate.",
  keywords: "fire side hustles, passive income fire, side business financial independence, extra income early retirement",
};

// Side hustle income potential
const hustleIncomeData = [
  { hustle: 'Freelancing', startup: 100, monthly: 3000, annual: 36000, hours: 20, scalability: 85 },
  { hustle: 'Online Course', startup: 500, monthly: 5000, annual: 60000, hours: 10, scalability: 95 },
  { hustle: 'Rental Property', startup: 30000, monthly: 2000, annual: 24000, hours: 5, scalability: 80 },
  { hustle: 'E-commerce', startup: 2000, monthly: 4000, annual: 48000, hours: 15, scalability: 90 },
  { hustle: 'Consulting', startup: 200, monthly: 6000, annual: 72000, hours: 12, scalability: 70 },
  { hustle: 'Content Creation', startup: 300, monthly: 2500, annual: 30000, hours: 25, scalability: 88 },
  { hustle: 'App Development', startup: 1000, monthly: 4500, annual: 54000, hours: 8, scalability: 92 },
  { hustle: 'Tutoring', startup: 50, monthly: 1500, annual: 18000, hours: 15, scalability: 60 },
];

// Income growth trajectory
const incomeGrowthData = [
  { month: 1, traditional: 5000, withSide: 5500, difference: 500 },
  { month: 3, traditional: 5000, withSide: 6000, difference: 1000 },
  { month: 6, traditional: 5000, withSide: 7000, difference: 2000 },
  { month: 9, traditional: 5000, withSide: 8000, difference: 3000 },
  { month: 12, traditional: 5200, withSide: 9000, difference: 3800 },
  { month: 18, traditional: 5400, withSide: 10500, difference: 5100 },
  { month: 24, traditional: 5600, withSide: 12000, difference: 6400 },
];

// FIRE timeline impact
const fireImpactData = [
  { scenario: 'No Side Hustle', savings: 30000, years: 25, total: 1500000 },
  { scenario: '+$1k/month', savings: 42000, years: 20, total: 1500000 },
  { scenario: '+$2k/month', savings: 54000, years: 17, total: 1500000 },
  { scenario: '+$3k/month', savings: 66000, years: 14, total: 1500000 },
  { scenario: '+$4k/month', savings: 78000, years: 12, total: 1500000 },
  { scenario: '+$5k/month', savings: 90000, years: 10, total: 1500000 },
];

// Skill to hustle mapping
const skillHustleMap = [
  { skill: 'Writing', hustles: ['Freelancing', 'Blogging', 'Copywriting', 'Course Creation'], avgIncome: 3500 },
  { skill: 'Programming', hustles: ['Web Dev', 'App Creation', 'Automation', 'SaaS'], avgIncome: 5500 },
  { skill: 'Teaching', hustles: ['Tutoring', 'Courses', 'Coaching', 'Workshops'], avgIncome: 3000 },
  { skill: 'Design', hustles: ['Freelance', 'Templates', 'Merch', 'UI/UX'], avgIncome: 4000 },
  { skill: 'Marketing', hustles: ['Consulting', 'Agency', 'Affiliate', 'Ads Management'], avgIncome: 4500 },
  { skill: 'Finance', hustles: ['Consulting', 'Bookkeeping', 'Tax Prep', 'Planning'], avgIncome: 5000 },
];

// Time allocation breakdown
const timeAllocationData = [
  { category: 'Main Job', hours: 40, color: '#3b82f6' },
  { category: 'Side Hustle', hours: 15, color: '#10b981' },
  { category: 'Sleep', hours: 49, color: '#6b7280' },
  { category: 'Personal', hours: 35, color: '#f59e0b' },
  { category: 'Commute', hours: 5, color: '#ef4444' },
  { category: 'Growth', hours: 10, color: '#8b5cf6' },
  { category: 'Family', hours: 14, color: '#ec4899' },
];

// Passive income progression
const passiveIncomeData = [
  { year: 0, active: 0, semiPassive: 0, passive: 0, total: 0 },
  { year: 1, active: 24000, semiPassive: 6000, passive: 0, total: 30000 },
  { year: 2, active: 20000, semiPassive: 15000, passive: 5000, total: 40000 },
  { year: 3, active: 15000, semiPassive: 22000, passive: 13000, total: 50000 },
  { year: 4, active: 10000, semiPassive: 28000, passive: 22000, total: 60000 },
  { year: 5, active: 5000, semiPassive: 30000, passive: 35000, total: 70000 },
];

// ROI comparison
const roiComparison = [
  { hustle: 'Stock Photos', investment: 500, year1: 1200, year3: 4800, roi: 860 },
  { hustle: 'YouTube', investment: 1000, year1: 2000, year3: 15000, roi: 1400 },
  { hustle: 'Course', investment: 2000, year1: 8000, year3: 36000, roi: 1700 },
  { hustle: 'SaaS', investment: 5000, year1: 12000, year3: 72000, roi: 1340 },
  { hustle: 'Rental', investment: 30000, year1: 24000, year3: 72000, roi: 140 },
  { hustle: 'Affiliate', investment: 200, year1: 3000, year3: 18000, roi: 8900 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#14b8a6'];

export default function SideHustlesPage() {
  const [currentIncome, setCurrentIncome] = useState(70000);
  const [targetMonthly, setTargetMonthly] = useState(3000);
  const [hoursAvailable, setHoursAvailable] = useState(20);
  const [riskTolerance, setRiskTolerance] = useState<'low' | 'medium' | 'high'>('medium');
  const [skillLevel, setSkillLevel] = useState<'beginner' | 'intermediate' | 'expert'>('intermediate');

  // Calculate side hustle impact
  const calculateImpact = () => {
    const annualSideIncome = targetMonthly * 12;
    const totalIncome = currentIncome + annualSideIncome;
    const savingsRate = 0.5; // Assume 50% savings on side income
    const additionalSavings = annualSideIncome * savingsRate;
    
    // Calculate FIRE timeline reduction
    const baseSavings = currentIncome * 0.3; // Assume 30% base savings rate
    const newSavings = baseSavings + additionalSavings;
    const fireTarget = currentIncome * 25 * 0.8; // 80% of current income for FIRE
    
    const baseYears = fireTarget / baseSavings / 12;
    const newYears = fireTarget / newSavings / 12;
    const yearsReduced = baseYears - newYears;
    
    // Recommend hustles based on criteria
    const recommendedHustles = hustleIncomeData.filter(h => {
      const meetsIncome = h.monthly >= targetMonthly * 0.7;
      const meetsHours = h.hours <= hoursAvailable;
      const meetsRisk = 
        (riskTolerance === 'low' && h.startup < 1000) ||
        (riskTolerance === 'medium' && h.startup < 5000) ||
        (riskTolerance === 'high');
      return meetsIncome && meetsHours && meetsRisk;
    }).slice(0, 3);
    
    return {
      annualSideIncome,
      totalIncome,
      additionalSavings,
      fireTarget,
      baseYears: Math.round(baseYears * 10) / 10,
      newYears: Math.round(newYears * 10) / 10,
      yearsReduced: Math.round(yearsReduced * 10) / 10,
      recommendedHustles,
      hourlyRate: Math.round(targetMonthly / (hoursAvailable * 4))
    };
  };

  const impact = calculateImpact();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Briefcase className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Side Hustles for FIRE
            </h1>
            <p className="text-xl sm:text-2xl text-orange-100 max-w-3xl mx-auto">
              Build income streams that accelerate financial independence by 5-15 years
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
              <span className="text-2xl font-bold text-gray-900">$36k</span>
            </div>
            <p className="text-sm text-gray-600">Average annual side hustle income</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Clock className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">15-20 hrs</span>
            </div>
            <p className="text-sm text-gray-600">Weekly time investment</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <Rocket className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">7-10 years</span>
            </div>
            <p className="text-sm text-gray-600">Faster FIRE with side income</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Side hustles aren't just about extra money—they're powerful FIRE accelerators that can cut your journey to financial independence by a decade or more. The right side hustle can add $20-50k annually to your income while building skills, networks, and potentially passive income streams.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide analyzes the most effective side hustles for FIRE seekers, provides frameworks for choosing and scaling income streams, and shows you exactly how additional income impacts your timeline to financial freedom.
          </p>
        </div>

        {/* Interactive Impact Calculator */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Side Hustle Impact Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Income: ${currentIncome.toLocaleString()}
              </label>
              <input
                type="range"
                min="30000"
                max="150000"
                step="5000"
                value={currentIncome}
                onChange={(e) => setCurrentIncome(Number(e.target.value))}
                className="w-full"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Monthly Side Income: ${targetMonthly.toLocaleString()}
              </label>
              <input
                type="range"
                min="500"
                max="10000"
                step="500"
                value={targetMonthly}
                onChange={(e) => setTargetMonthly(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hours Available Per Week: {hoursAvailable}
              </label>
              <input
                type="range"
                min="5"
                max="40"
                value={hoursAvailable}
                onChange={(e) => setHoursAvailable(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk Tolerance
              </label>
              <select
                value={riskTolerance}
                onChange={(e) => setRiskTolerance(e.target.value as any)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="low">Low (minimal investment)</option>
                <option value="medium">Medium (some investment)</option>
                <option value="high">High (willing to invest)</option>
              </select>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Annual Side Income</p>
                <p className="text-2xl font-bold text-gray-900">
                  ${impact.annualSideIncome.toLocaleString()}
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">FIRE Years Saved</p>
                <p className="text-2xl font-bold text-green-600">
                  {impact.yearsReduced} years
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">New FIRE Timeline</p>
                <p className="text-2xl font-bold text-blue-600">
                  {impact.newYears} years
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-1">Target Hourly Rate</p>
                <p className="text-2xl font-bold text-purple-600">
                  ${impact.hourlyRate}/hr
                </p>
              </div>
            </div>
            
            {impact.recommendedHustles.length > 0 && (
              <div className="p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">Recommended Hustles for You:</p>
                <div className="grid md:grid-cols-3 gap-3">
                  {impact.recommendedHustles.map((hustle, index) => (
                    <div key={index} className="text-sm bg-white p-2 rounded">
                      <p className="font-semibold">{hustle.hustle}</p>
                      <p className="text-gray-600">${hustle.monthly}/mo • {hustle.hours}hrs/wk</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FIRE Timeline Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How Side Hustles Accelerate FIRE</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={fireImpactData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scenario" angle={-20} textAnchor="end" height={60} />
                <YAxis yAxisId="left" label={{ value: 'Annual Savings ($)', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'Years to FIRE', angle: 90, position: 'insideRight' }} />
                <Tooltip formatter={(value) => typeof value === 'number' ? value.toLocaleString() : value} />
                <Legend />
                <Bar yAxisId="left" dataKey="savings" fill="#10b981" name="Annual Savings" />
                <Line yAxisId="right" type="monotone" dataKey="years" stroke="#ef4444" strokeWidth={3} name="Years to FIRE" />
              </ComposedChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Key Insight:</strong> Each additional $1,000/month in side income can reduce your FIRE timeline by 2-3 years, assuming you save 70%+ of side hustle income.
              </p>
            </div>
          </div>
        </section>

        {/* Top Side Hustles Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top FIRE-Friendly Side Hustles</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={hustleIncomeData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="hustle" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Scalability Score" dataKey="scalability" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Radar name="Income (÷1000)" dataKey={(item) => item.monthly / 1000 * 10} stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {hustleIncomeData.slice(0, 8).map((hustle, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">{hustle.hustle}</h4>
                  <div className="mt-2 space-y-1 text-xs">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Startup:</span>
                      <span className="font-medium">${hustle.startup}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Monthly:</span>
                      <span className="font-medium text-green-600">${hustle.monthly}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Hours/wk:</span>
                      <span className="font-medium">{hustle.hours}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Scale:</span>
                      <span className="font-medium">{hustle.scalability}%</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Income Growth Trajectory */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Income Growth Timeline</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={incomeGrowthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" label={{ value: 'Months', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="traditional" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} name="Traditional Job Only" />
                <Area type="monotone" dataKey="difference" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} name="Side Hustle Income" />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Months 1-6</h4>
                <p className="text-sm text-gray-700">Building foundation, learning curve, establishing systems</p>
                <p className="text-lg font-bold text-yellow-600 mt-2">$500-2,000/mo</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Months 6-12</h4>
                <p className="text-sm text-gray-700">Scaling up, optimizing processes, building reputation</p>
                <p className="text-lg font-bold text-green-600 mt-2">$2,000-4,000/mo</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Year 2+</h4>
                <p className="text-sm text-gray-700">Established systems, premium pricing, passive elements</p>
                <p className="text-lg font-bold text-blue-600 mt-2">$4,000-10,000/mo</p>
              </div>
            </div>
          </div>
        </section>

        {/* Passive Income Evolution */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Evolution to Passive Income</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <AreaChart data={passiveIncomeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom' }} />
                <YAxis tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Area type="monotone" dataKey="passive" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.7} name="Passive Income" />
                <Area type="monotone" dataKey="semiPassive" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.7} name="Semi-Passive" />
                <Area type="monotone" dataKey="active" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.7} name="Active Work" />
              </AreaChart>
            </ResponsiveContainer>
            
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 mb-3">The Passive Income Ladder</h4>
              <div className="space-y-3">
                {[
                  { phase: 'Phase 1: Active Income', description: 'Trading time for money directly (freelancing, consulting)', percentage: '100% active' },
                  { phase: 'Phase 2: Productized Services', description: 'Standardized offerings, templates, systems', percentage: '60% active' },
                  { phase: 'Phase 3: Digital Products', description: 'Courses, apps, content that sells while you sleep', percentage: '30% active' },
                  { phase: 'Phase 4: Investment Income', description: 'Reinvest profits into dividend stocks, real estate', percentage: '5% active' }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{phase.phase}</p>
                      <p className="text-sm text-gray-600">{phase.description}</p>
                      <p className="text-xs text-orange-600 mt-1">{phase.percentage}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ROI Analysis */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Side Hustle ROI Analysis</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={roiComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hustle" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => typeof value === 'number' ? value.toLocaleString() : value} />
                <Legend />
                <Bar dataKey="roi" fill="#8b5cf6" name="3-Year ROI %" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Best ROI:</strong> Low-investment digital products (affiliate marketing, stock photos, content) offer the highest returns, while high-investment options (rentals) provide stability but lower percentage returns.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Hustle Guides */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Top 6 FIRE Side Hustles Deep Dive</h2>
          
          <div className="space-y-6">
            {[
              {
                title: 'Freelancing/Consulting',
                icon: Briefcase,
                income: '$2,000-10,000/month',
                time: '10-30 hours/week',
                startup: '$0-500',
                pros: ['Immediate income', 'Use existing skills', 'Flexible schedule', 'High hourly rates'],
                cons: ['Trading time for money', 'Client management', 'Income fluctuations'],
                howTo: ['Identify your most valuable skill', 'Create profiles on Upwork/Fiverr', 'Network in your industry', 'Gradually raise rates'],
                fireScore: 85
              },
              {
                title: 'Online Courses',
                icon: BookOpen,
                income: '$1,000-20,000/month',
                time: '5-15 hours/week (after creation)',
                startup: '$200-2,000',
                pros: ['Passive income potential', 'Scalable', 'Build authority', 'Help others'],
                cons: ['Upfront time investment', 'Marketing required', 'Competition'],
                howTo: ['Choose profitable niche', 'Create comprehensive curriculum', 'Use Teachable/Thinkific', 'Build email list'],
                fireScore: 92
              },
              {
                title: 'E-commerce/FBA',
                icon: Package,
                income: '$500-15,000/month',
                time: '10-20 hours/week',
                startup: '$1,000-10,000',
                pros: ['Semi-passive', 'Scalable', 'Multiple platforms', 'Physical products'],
                cons: ['Inventory risk', 'Competition', 'Customer service'],
                howTo: ['Research winning products', 'Start with dropshipping', 'Move to private label', 'Optimize listings'],
                fireScore: 78
              },
              {
                title: 'Content Creation',
                icon: Camera,
                income: '$500-25,000/month',
                time: '15-40 hours/week',
                startup: '$100-1,000',
                pros: ['Creative outlet', 'Multiple revenue streams', 'Build audience', 'Long-term asset'],
                cons: ['Slow start', 'Algorithm dependent', 'Burnout risk'],
                howTo: ['Pick platform (YouTube/Blog/Podcast)', 'Consistent publishing schedule', 'SEO optimization', 'Diversify income'],
                fireScore: 80
              },
              {
                title: 'App/Software Development',
                icon: Code,
                income: '$1,000-50,000/month',
                time: '10-30 hours/week',
                startup: '$100-5,000',
                pros: ['Highly scalable', 'Passive potential', 'Global market', 'Recurring revenue'],
                cons: ['Technical skills needed', 'Maintenance required', 'Marketing costs'],
                howTo: ['Validate idea first', 'Build MVP', 'Launch on Product Hunt', 'Iterate based on feedback'],
                fireScore: 88
              },
              {
                title: 'Real Estate (Rental/Airbnb)',
                icon: Home,
                income: '$500-5,000/month per property',
                time: '5-10 hours/week',
                startup: '$5,000-50,000',
                pros: ['Appreciation', 'Tax benefits', 'Leverage', 'Tangible asset'],
                cons: ['High capital', 'Management hassles', 'Market dependent'],
                howTo: ['Start with house hacking', 'Research markets', 'Build team', 'Scale with BRRRR method'],
                fireScore: 82
              }
            ].map((hustle, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-orange-100 rounded-lg">
                      <hustle.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{hustle.title}</h3>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <span>{hustle.income}</span>
                        <span>•</span>
                        <span>{hustle.time}</span>
                        <span>•</span>
                        <span>Startup: {hustle.startup}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{hustle.fireScore}</p>
                    <p className="text-xs text-gray-600">FIRE Score</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold text-green-800 mb-2">Pros</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {hustle.pros.map((pro, i) => (
                        <li key={i}>• {pro}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold text-yellow-800 mb-2">Cons</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {hustle.cons.map((con, i) => (
                        <li key={i}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h4 className="text-sm font-semibold text-blue-800 mb-2">How to Start</h4>
                    <ul className="text-xs text-gray-700 space-y-1">
                      {hustle.howTo.map((step, i) => (
                        <li key={i}>• {step}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Time Management */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Time Allocation Strategy</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Weekly Time Budget (168 hours)</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={timeAllocationData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="hours"
                    >
                      {timeAllocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-2 mt-4">
                  {timeAllocationData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                        <span>{item.category}</span>
                      </div>
                      <span className="font-medium">{item.hours} hrs</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Optimal Side Hustle Schedule</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-gray-900">Weekday Mornings (5-7am)</h5>
                    <p className="text-sm text-gray-600">Deep work, content creation, course development</p>
                    <p className="text-xs text-blue-600 mt-1">10 hours/week potential</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-gray-900">Weekday Evenings (7-10pm)</h5>
                    <p className="text-sm text-gray-600">Client work, admin, marketing</p>
                    <p className="text-xs text-green-600 mt-1">9 hours/week potential</p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded-lg">
                    <h5 className="font-medium text-gray-900">Weekend Blocks</h5>
                    <p className="text-sm text-gray-600">Batch work, planning, major projects</p>
                    <p className="text-xs text-yellow-600 mt-1">8 hours/week potential</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-gray-900">Lunch Breaks</h5>
                    <p className="text-sm text-gray-600">Quick tasks, emails, social media</p>
                    <p className="text-xs text-purple-600 mt-1">3 hours/week potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scaling Strategy */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Scaling Your Side Hustle</h2>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl">
            <div className="space-y-4">
              {[
                {
                  stage: 'Stage 1: Validation ($0-1k/month)',
                  tasks: [
                    'Test your idea with 5-10 customers',
                    'Refine your offering based on feedback',
                    'Document processes and systems',
                    'Track time and profitability'
                  ],
                  duration: '1-3 months'
                },
                {
                  stage: 'Stage 2: Growth ($1-5k/month)',
                  tasks: [
                    'Automate repetitive tasks',
                    'Raise prices by 20-50%',
                    'Build recurring revenue',
                    'Outsource low-value work'
                  ],
                  duration: '3-9 months'
                },
                {
                  stage: 'Stage 3: Scale ($5-10k/month)',
                  tasks: [
                    'Hire virtual assistants',
                    'Create premium offerings',
                    'Build sales funnels',
                    'Diversify traffic sources'
                  ],
                  duration: '9-18 months'
                },
                {
                  stage: 'Stage 4: Optimize ($10k+/month)',
                  tasks: [
                    'Focus on highest ROI activities',
                    'Build team and delegate',
                    'Create passive income products',
                    'Consider exit or acquisition'
                  ],
                  duration: '18+ months'
                }
              ].map((stage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900">{stage.stage}</h3>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{stage.duration}</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {stage.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Side Hustle Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Starting Too Many at Once',
                impact: 'Diluted focus, slow progress',
                solution: 'Master one before adding another'
              },
              {
                mistake: 'Undercharging for Services',
                impact: 'Burnout, low ROI',
                solution: 'Price based on value, not time'
              },
              {
                mistake: 'No Systems or Automation',
                impact: 'Cannot scale beyond hours',
                solution: 'Document and automate from day 1'
              },
              {
                mistake: 'Ignoring Taxes',
                impact: 'Surprise bills, penalties',
                solution: 'Set aside 25-30% for taxes'
              },
              {
                mistake: 'Lifestyle Inflation',
                impact: 'No FIRE acceleration',
                solution: 'Save 70%+ of side income'
              },
              {
                mistake: 'Neglecting Main Job',
                impact: 'Lost primary income',
                solution: 'Maintain performance standards'
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
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Your 90-Day Side Hustle Launch Plan</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-orange-200">Days 1-30: Research & Setup</h3>
                <div className="space-y-2">
                  {[
                    'Assess skills and interests',
                    'Research profitable niches',
                    'Analyze competition',
                    'Set income goals',
                    'Choose primary hustle'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-orange-200">Days 31-60: Launch & Test</h3>
                <div className="space-y-2">
                  {[
                    'Create basic offering',
                    'Get first 3 customers',
                    'Set up payment systems',
                    'Build online presence',
                    'Track time and revenue'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-3 text-orange-200">Days 61-90: Scale & Optimize</h3>
                <div className="space-y-2">
                  {[
                    'Reach $1000/month target',
                    'Automate one process',
                    'Raise prices 20%',
                    'Get 10 testimonials',
                    'Plan quarter 2 goals'
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
            <h2 className="text-2xl font-bold mb-6">Key Side Hustle Takeaways</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>A successful side hustle can accelerate FIRE by 7-10 years through additional savings and compound growth.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Focus on scalable, passive-potential hustles that can grow beyond trading time for money.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Save 70%+ of side hustle income to maximize FIRE acceleration—avoid lifestyle inflation.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Start with one hustle and master it before diversifying—depth beats breadth initially.</p>
              </div>
              <div className="flex items-start gap-3">
                <Award className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p>Build systems and automation from day one to create a business, not another job.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Resources to Accelerate Your FIRE</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Target className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600">FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Model side hustle impact</p>
              </div>
            </Link>
            
            <Link href="/blog/fire-tax-optimization" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <PiggyBank className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Tax Optimization</h3>
                <p className="text-sm text-gray-600">Minimize side hustle taxes</p>
              </div>
            </Link>
            
            <Link href="/blog/fire-for-late-starters" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Rocket className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Late Starter Guide</h3>
                <p className="text-sm text-gray-600">Accelerate with side income</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Start Your Side Hustle Today</h2>
            <p className="text-lg mb-6 text-orange-100">
              Every month you delay is thousands in lost compound growth. Launch your first side hustle this week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your New Timeline
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-300 transition-colors"
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