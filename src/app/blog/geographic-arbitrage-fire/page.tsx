'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Globe, 
  MapPin, 
  DollarSign,
  Home,
  Plane,
  TrendingUp,
  Calculator,
  ChevronRight,
  Shield,
  Heart,
  Briefcase,
  Sun,
  Users,
  Building,
  Car,
  ShoppingCart,
  Wifi,
  Activity
} from 'lucide-react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  Area
} from 'recharts';

const metadata: Metadata = {
  title: "Geographic Arbitrage & FIRE: Location-Based Calculator Strategies",
  description: "Master geographic arbitrage for FIRE. Compare costs of living, calculate location-adjusted FIRE numbers, and explore domestic and international strategies for financial independence.",
  keywords: "geographic arbitrage fire, location independent fire, cost of living fire calculator, expat fire, geo arbitrage early retirement",
};

// Cost of living comparison data
const costOfLivingData = [
  { city: 'San Francisco', index: 244, housing: 496, groceries: 116, healthcare: 120, transport: 138, fireNumber: 2440000 },
  { city: 'New York City', index: 187, housing: 294, groceries: 115, healthcare: 110, transport: 127, fireNumber: 1870000 },
  { city: 'Seattle', index: 172, housing: 262, groceries: 108, healthcare: 106, transport: 122, fireNumber: 1720000 },
  { city: 'Austin', index: 142, housing: 178, groceries: 96, healthcare: 97, transport: 109, fireNumber: 1420000 },
  { city: 'Denver', index: 128, housing: 166, groceries: 102, healthcare: 104, transport: 106, fireNumber: 1280000 },
  { city: 'Phoenix', index: 108, housing: 124, groceries: 97, healthcare: 95, transport: 107, fireNumber: 1080000 },
  { city: 'Tampa', index: 94, housing: 98, groceries: 100, healthcare: 96, transport: 104, fireNumber: 940000 },
  { city: 'Memphis', index: 76, housing: 58, groceries: 92, healthcare: 87, transport: 96, fireNumber: 760000 },
];

// International comparison
const internationalData = [
  { country: 'Switzerland', costIndex: 197, qualityIndex: 95, safetyIndex: 92, healthcareIndex: 94, fireNeeded: 1970000 },
  { country: 'USA', costIndex: 100, qualityIndex: 85, safetyIndex: 78, healthcareIndex: 82, fireNeeded: 1000000 },
  { country: 'Portugal', costIndex: 49, qualityIndex: 82, safetyIndex: 85, healthcareIndex: 89, fireNeeded: 490000 },
  { country: 'Mexico', costIndex: 36, qualityIndex: 75, safetyIndex: 68, healthcareIndex: 77, fireNeeded: 360000 },
  { country: 'Thailand', costIndex: 34, qualityIndex: 78, safetyIndex: 72, healthcareIndex: 84, fireNeeded: 340000 },
  { country: 'Vietnam', costIndex: 28, qualityIndex: 71, safetyIndex: 70, healthcareIndex: 72, fireNeeded: 280000 },
];

// Monthly expense breakdown by location
const expenseBreakdown = [
  { category: 'Housing', sf: 4200, denver: 1600, lisbon: 800, bangkok: 600 },
  { category: 'Food', sf: 800, denver: 500, lisbon: 350, bangkok: 250 },
  { category: 'Transport', sf: 400, denver: 300, lisbon: 150, bangkok: 100 },
  { category: 'Healthcare', sf: 600, denver: 450, lisbon: 200, bangkok: 150 },
  { category: 'Entertainment', sf: 500, denver: 350, lisbon: 200, bangkok: 150 },
  { category: 'Other', sf: 500, denver: 300, lisbon: 200, bangkok: 150 },
];

// Quality of life factors
const qualityFactors = [
  { factor: 'Cost of Living', sf: 20, denver: 65, lisbon: 85, bangkok: 90 },
  { factor: 'Healthcare', sf: 85, denver: 80, lisbon: 82, bangkok: 75 },
  { factor: 'Safety', sf: 70, denver: 75, lisbon: 88, bangkok: 72 },
  { factor: 'Culture/Food', sf: 90, denver: 70, lisbon: 92, bangkok: 95 },
  { factor: 'Weather', sf: 85, denver: 75, lisbon: 90, bangkok: 70 },
  { factor: 'Infrastructure', sf: 80, denver: 85, lisbon: 75, bangkok: 70 },
];

// FIRE timeline comparison
const timelineComparison = [
  { year: 0, highCost: 0, mediumCost: 0, lowCost: 0, geoArbitrage: 0 },
  { year: 5, highCost: 150000, mediumCost: 175000, lowCost: 200000, geoArbitrage: 250000 },
  { year: 10, highCost: 350000, mediumCost: 425000, lowCost: 500000, geoArbitrage: 650000 },
  { year: 15, highCost: 600000, mediumCost: 750000, lowCost: 900000, geoArbitrage: 1200000 },
  { year: 20, highCost: 900000, mediumCost: 1150000, lowCost: 1400000, geoArbitrage: 1600000 },
  { year: 25, highCost: 1250000, mediumCost: 1600000, lowCost: 1900000, geoArbitrage: 2000000 },
];

// Tax considerations
const taxComparison = [
  { location: 'California', income: 13.3, capital: 13.3, property: 0.75, sales: 8.85, total: 36.2 },
  { location: 'Texas', income: 0, capital: 0, property: 1.8, sales: 8.25, total: 10.05 },
  { location: 'Florida', income: 0, capital: 0, property: 0.86, sales: 7.08, total: 7.94 },
  { location: 'Portugal NHR', income: 10, capital: 0, property: 0.8, sales: 23, total: 33.8 },
  { location: 'Malaysia MM2H', income: 0, capital: 0, property: 0, sales: 6, total: 6 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function GeographicArbitragePage() {
  const [currentLocation, setCurrentLocation] = useState('San Francisco');
  const [targetLocation, setTargetLocation] = useState('Denver');
  const [currentExpenses, setCurrentExpenses] = useState(100000);
  const [retirementAge, setRetirementAge] = useState(45);
  const [currentAge, setCurrentAge] = useState(30);
  const [showInternational, setShowInternational] = useState(false);

  // Calculate arbitrage savings
  const calculateArbitrage = () => {
    const currentIndex = costOfLivingData.find(c => c.city === currentLocation)?.index || 100;
    const targetIndex = costOfLivingData.find(c => c.city === targetLocation)?.index || 100;
    
    const adjustedExpenses = (currentExpenses * targetIndex) / currentIndex;
    const annualSavings = currentExpenses - adjustedExpenses;
    const fireReduction = annualSavings * 25;
    const yearsReduced = fireReduction / (currentExpenses * 0.25);
    
    return {
      adjustedExpenses: Math.round(adjustedExpenses),
      annualSavings: Math.round(annualSavings),
      fireReduction: Math.round(fireReduction),
      yearsReduced: Math.round(yearsReduced * 10) / 10,
      percentSaved: Math.round((annualSavings / currentExpenses) * 100)
    };
  };

  const arbitrage = calculateArbitrage();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <Globe className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Geographic Arbitrage & FIRE
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
              Location-based calculator strategies to accelerate financial independence through strategic relocation
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
              <MapPin className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">68%</span>
            </div>
            <p className="text-sm text-gray-600">Average cost reduction with geographic arbitrage</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">7-10 years</span>
            </div>
            <p className="text-sm text-gray-600">Earlier retirement with location optimization</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-8 h-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">$1.2M</span>
            </div>
            <p className="text-sm text-gray-600">Average FIRE number reduction</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed">
            Geographic arbitrage—earning in high-income areas while living in low-cost locations—is one of the most powerful accelerators for achieving FIRE. Whether you're working remotely, planning phased retirement, or ready for full FIRE, strategic location choices can cut years off your journey.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This comprehensive guide explores domestic and international arbitrage strategies, provides location-adjusted FIRE calculators, analyzes quality of life factors, and helps you create a personalized geographic strategy for financial independence.
          </p>
        </div>

        {/* Interactive Arbitrage Calculator */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Geographic Arbitrage Calculator</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Location
              </label>
              <select
                value={currentLocation}
                onChange={(e) => setCurrentLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {costOfLivingData.map(city => (
                  <option key={city.city} value={city.city}>{city.city}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Target Location
              </label>
              <select
                value={targetLocation}
                onChange={(e) => setTargetLocation(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                {costOfLivingData.map(city => (
                  <option key={city.city} value={city.city}>{city.city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Annual Expenses: ${currentExpenses.toLocaleString()}
            </label>
            <input
              type="range"
              min="30000"
              max="200000"
              step="5000"
              value={currentExpenses}
              onChange={(e) => setCurrentExpenses(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div className="bg-white p-6 rounded-xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-1">Adjusted Expenses</p>
                <p className="text-xl font-bold text-gray-900">
                  ${arbitrage.adjustedExpenses.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
                <p className="text-xl font-bold text-green-600">
                  ${arbitrage.annualSavings.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">FIRE Reduction</p>
                <p className="text-xl font-bold text-blue-600">
                  ${arbitrage.fireReduction.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Years Saved</p>
                <p className="text-xl font-bold text-purple-600">
                  {arbitrage.yearsReduced}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Cost Reduction</p>
                <p className="text-xl font-bold text-orange-600">
                  {arbitrage.percentSaved}%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Domestic Cost of Living Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">U.S. City Cost Comparison</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={costOfLivingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="city" angle={-45} textAnchor="end" height={80} />
                <YAxis yAxisId="left" label={{ value: 'Cost Index', angle: -90, position: 'insideLeft' }} />
                <YAxis yAxisId="right" orientation="right" label={{ value: 'FIRE Number ($)', angle: 90, position: 'insideRight' }} />
                <Tooltip formatter={(value, name) => {
                  if (name === 'FIRE Number') return `$${Number(value).toLocaleString()}`;
                  return value;
                }} />
                <Legend />
                <Bar yAxisId="left" dataKey="index" fill="#3b82f6" name="Cost Index" />
                <Line yAxisId="right" type="monotone" dataKey="fireNumber" stroke="#ef4444" strokeWidth={3} name="FIRE Number" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Low-Cost FIRE Cities</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Memphis, TN:</strong> $760k FIRE, no state income tax</li>
                <li>• <strong>Tucson, AZ:</strong> $820k FIRE, great weather</li>
                <li>• <strong>Pittsburgh, PA:</strong> $880k FIRE, cultural amenities</li>
                <li>• <strong>Cincinnati, OH:</strong> $850k FIRE, midwest charm</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-3">Hidden Costs to Consider</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• State income tax variations (0% to 13.3%)</li>
                <li>• Property tax differences (0.27% to 2.47%)</li>
                <li>• Healthcare access and quality</li>
                <li>• Natural disaster insurance requirements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Monthly Expense Breakdown */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Monthly Expense Breakdown by Location</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={expenseBreakdown}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="category" />
                <YAxis label={{ value: 'Monthly Cost ($)', angle: -90, position: 'insideLeft' }} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Bar dataKey="sf" fill="#ef4444" name="San Francisco" />
                <Bar dataKey="denver" fill="#f59e0b" name="Denver" />
                <Bar dataKey="lisbon" fill="#10b981" name="Lisbon" />
                <Bar dataKey="bangkok" fill="#3b82f6" name="Bangkok" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-4 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">${expenseBreakdown.reduce((sum, e) => sum + e.sf, 0).toLocaleString()}</p>
                <p className="text-sm text-gray-600">San Francisco Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">${expenseBreakdown.reduce((sum, e) => sum + e.denver, 0).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Denver Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">${expenseBreakdown.reduce((sum, e) => sum + e.lisbon, 0).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Lisbon Total</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gray-900">${expenseBreakdown.reduce((sum, e) => sum + e.bangkok, 0).toLocaleString()}</p>
                <p className="text-sm text-gray-600">Bangkok Total</p>
              </div>
            </div>
          </div>
        </section>

        {/* International Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">International FIRE Destinations</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 mb-6">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={internationalData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="country" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="Cost Index (inverted)" dataKey={(entry) => 100 - (entry.costIndex / 2)} stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                <Radar name="Quality of Life" dataKey="qualityIndex" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                <Radar name="Healthcare" dataKey="healthcareIndex" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                country: 'Portugal',
                flag: '🇵🇹',
                pros: ['Golden Visa program', 'NHR tax benefits', 'EU healthcare', 'Great weather'],
                cons: ['Language barrier', 'Bureaucracy', 'Lower salaries'],
                fireNumber: '$490,000',
                monthlyBudget: '$2,000-3,500'
              },
              {
                country: 'Mexico',
                flag: '🇲🇽',
                pros: ['Close to USA', 'Great weather', 'Low cost', 'Easy residency'],
                cons: ['Safety concerns', 'Healthcare varies', 'Infrastructure gaps'],
                fireNumber: '$360,000',
                monthlyBudget: '$1,500-2,500'
              },
              {
                country: 'Thailand',
                flag: '🇹🇭',
                pros: ['Elite visa program', 'Excellent healthcare', 'Great food', 'Expat community'],
                cons: ['Visa restrictions', 'Property ownership', 'Monsoon season'],
                fireNumber: '$340,000',
                monthlyBudget: '$1,200-2,000'
              }
            ].map((dest, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{dest.flag}</span>
                  <h3 className="text-lg font-bold text-gray-900">{dest.country}</h3>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-green-700 mb-1">Pros:</p>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {dest.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                  </ul>
                </div>
                <div className="mb-3">
                  <p className="text-sm font-semibold text-red-700 mb-1">Cons:</p>
                  <ul className="text-xs text-gray-600 space-y-0.5">
                    {dest.cons.map((con, i) => <li key={i}>• {con}</li>)}
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-sm"><strong>FIRE Number:</strong> {dest.fireNumber}</p>
                  <p className="text-sm"><strong>Monthly:</strong> {dest.monthlyBudget}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quality of Life Comparison */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Quality of Life Factors</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={qualityFactors}>
                <PolarGrid />
                <PolarAngleAxis dataKey="factor" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                <Radar name="San Francisco" dataKey="sf" stroke="#ef4444" fill="#ef4444" fillOpacity={0.2} />
                <Radar name="Denver" dataKey="denver" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.2} />
                <Radar name="Lisbon" dataKey="lisbon" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                <Radar name="Bangkok" dataKey="bangkok" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <p className="mt-4 text-sm text-gray-700">
              <strong>Note:</strong> Quality scores are subjective and vary by personal preference. Consider visiting potential locations for extended periods before committing.
            </p>
          </div>
        </section>

        {/* FIRE Timeline Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographic Arbitrage Impact on FIRE Timeline</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={timelineComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" label={{ value: 'Years', position: 'insideBottom' }} />
                <YAxis label={{ value: 'Net Worth ($)', angle: -90, position: 'insideLeft' }} tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`} />
                <Tooltip formatter={(value) => `$${Number(value).toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="highCost" stroke="#ef4444" strokeWidth={2} name="High Cost City" />
                <Line type="monotone" dataKey="mediumCost" stroke="#f59e0b" strokeWidth={2} name="Medium Cost City" />
                <Line type="monotone" dataKey="lowCost" stroke="#10b981" strokeWidth={2} name="Low Cost City" />
                <Line type="monotone" dataKey="geoArbitrage" stroke="#8b5cf6" strokeWidth={3} name="Geo-Arbitrage Strategy" strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
            
            <div className="mt-6 bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>Geo-Arbitrage Strategy:</strong> Work remotely from low-cost location or earn in high-cost city for 10 years, then relocate. This can accelerate FIRE by 7-10 years.
              </p>
            </div>
          </div>
        </section>

        {/* Tax Considerations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Tax Optimization by Location</h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={taxComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="location" angle={-45} textAnchor="end" height={80} />
                <YAxis label={{ value: 'Tax Rate (%)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Bar dataKey="income" fill="#ef4444" stackId="a" name="Income Tax" />
                <Bar dataKey="capital" fill="#f59e0b" stackId="a" name="Capital Gains" />
                <Bar dataKey="property" fill="#10b981" stackId="a" name="Property Tax" />
                <Bar dataKey="sales" fill="#3b82f6" stackId="a" name="Sales Tax" />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">U.S. Tax Haven States</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Florida:</strong> No income tax, low property tax</li>
                  <li>• <strong>Texas:</strong> No income tax, higher property tax</li>
                  <li>• <strong>Nevada:</strong> No income tax, no estate tax</li>
                  <li>• <strong>Tennessee:</strong> No income tax on wages</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">International Tax Programs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• <strong>Portugal NHR:</strong> 10% flat tax for 10 years</li>
                  <li>• <strong>Malaysia MM2H:</strong> Foreign income exempt</li>
                  <li>• <strong>Panama:</strong> Territorial taxation</li>
                  <li>• <strong>Dubai:</strong> Zero income tax</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Geographic Arbitrage Strategies</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy 1: Remote Work Arbitrage</h3>
                  <p className="text-gray-700 mb-3">
                    Maintain high-paying remote job while living in low-cost area. Save 50-70% of income.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> $150k San Francisco salary, live in Boise. Save $80k/year, FIRE in 12 years instead of 25.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Plane className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy 2: Phased International FIRE</h3>
                  <p className="text-gray-700 mb-3">
                    Work in high-income country, then relocate internationally for retirement.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> Accumulate $1M in USA, retire to Portugal on $30k/year (3% SWR).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Home className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy 3: Domestic Downsizing</h3>
                  <p className="text-gray-700 mb-3">
                    Move from HCOL to LCOL area within the same country, maintaining cultural familiarity.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> Sell $1.2M Bay Area home, buy $400k home in Raleigh, invest $800k difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <Sun className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy 4: Slow Travel FIRE</h3>
                  <p className="text-gray-700 mb-3">
                    Rotate between low-cost countries, avoiding tax residency while exploring the world.
                  </p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Example:</strong> 3 months each in Mexico, Thailand, Portugal, Turkey. Total cost: $24k/year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Framework */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Location Selection Framework</h2>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-2xl">
            <div className="space-y-6">
              {[
                {
                  phase: 'Research Phase',
                  items: [
                    'Calculate location-adjusted FIRE numbers',
                    'Research visa/residency requirements',
                    'Analyze healthcare systems and costs',
                    'Investigate tax implications',
                    'Join expat communities online'
                  ]
                },
                {
                  phase: 'Testing Phase',
                  items: [
                    'Visit for 1-3 months minimum',
                    'Try different neighborhoods',
                    'Test healthcare facilities',
                    'Calculate real living costs',
                    'Assess social/cultural fit'
                  ]
                },
                {
                  phase: 'Transition Phase',
                  items: [
                    'Secure visa/residency status',
                    'Set up banking and finances',
                    'Arrange healthcare coverage',
                    'Plan tax optimization',
                    'Build local network'
                  ]
                },
                {
                  phase: 'Optimization Phase',
                  items: [
                    'Fine-tune budget based on reality',
                    'Establish local service providers',
                    'Optimize tax strategies',
                    'Build emergency contingencies',
                    'Create exit strategy if needed'
                  ]
                }
              ].map((phase, index) => (
                <div key={index}>
                  <h3 className="font-bold text-gray-900 mb-3">{phase.phase}</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {phase.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full bg-indigo-600 flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-sm text-gray-700">{item}</span>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Geographic Arbitrage Mistakes</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                mistake: 'Underestimating Healthcare Costs',
                solution: 'Research insurance options, factor in medical tourism, budget for emergencies'
              },
              {
                mistake: 'Ignoring Visa Restrictions',
                solution: 'Understand visa runs, residency requirements, and work permissions upfront'
              },
              {
                mistake: 'Not Testing Location First',
                solution: 'Spend at least 3 months before committing, preferably during worst weather season'
              },
              {
                mistake: 'Overlooking Social Isolation',
                solution: 'Join expat communities, learn local language, maintain home country connections'
              },
              {
                mistake: 'Poor Tax Planning',
                solution: 'Consult international tax professionals, understand treaty benefits'
              },
              {
                mistake: 'Currency Risk Ignorance',
                solution: 'Diversify currency exposure, consider hedging strategies'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">!</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{item.mistake}</h3>
                    <p className="text-sm text-gray-700">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Resource Checklist */}
        <section className="mb-12">
          <div className="bg-gray-900 text-white p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Geographic Arbitrage Resource Kit</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-300">Cost of Living Tools</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Numbeo - Global cost comparisons</li>
                  <li>• Expatistan - Expat-focused data</li>
                  <li>• NomadList - Digital nomad rankings</li>
                  <li>• BestPlaces - U.S. city comparisons</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-300">Visa & Residency</h3>
                <ul className="space-y-2 text-sm">
                  <li>• VisaHQ - Visa requirements</li>
                  <li>• Sovereign Man - Residency guides</li>
                  <li>• Nomad Capitalist - Tax optimization</li>
                  <li>• ExpatFocus - Country guides</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-yellow-300">Healthcare Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li>• International Living - Healthcare rankings</li>
                  <li>• Cigna Global - Expat insurance</li>
                  <li>• SafetyWing - Nomad insurance</li>
                  <li>• WHO - Health system rankings</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-300">Community & Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>• r/ExpatFIRE - Reddit community</li>
                  <li>• InterNations - Expat network</li>
                  <li>• Facebook expat groups</li>
                  <li>• Meetup - Local communities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your 90-Day Geographic Arbitrage Action Plan</h2>
            
            <div className="space-y-4">
              {[
                { week: 'Week 1-2', task: 'Calculate current expenses and location-adjusted FIRE numbers for 10 target cities' },
                { week: 'Week 3-4', task: 'Research visa requirements, tax implications, and healthcare for top 5 locations' },
                { week: 'Week 5-6', task: 'Join online communities, connect with expats in target locations' },
                { week: 'Week 7-8', task: 'Create detailed budget projections including one-time relocation costs' },
                { week: 'Week 9-10', task: 'Plan exploratory visits, book accommodations for 1-month stays' },
                { week: 'Week 11-12', task: 'Test remote work setup, evaluate internet reliability and workspace options' },
                { week: 'Week 13', task: 'Make go/no-go decision, create detailed transition timeline' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-24">
                    <span className="text-sm font-semibold text-gray-600">{item.week}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{item.task}</p>
                  </div>
                  <input type="checkbox" className="w-5 h-5 text-green-600 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculate Your Location-Adjusted FIRE Number</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Calculator className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600">Traditional FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Base FIRE number calculation</p>
              </div>
            </Link>
            
            <Link href="/lean-fire-calculator" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <DollarSign className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600">Lean FIRE Calculator</h3>
                <p className="text-sm text-gray-600">Minimum viable FIRE budget</p>
              </div>
            </Link>
            
            <Link href="/blog/couples-fire-strategy" className="block group">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-all">
                <Users className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-purple-600">Couples FIRE Strategy</h3>
                <p className="text-sm text-gray-600">Dual-location strategies</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Accelerate Your FIRE Journey?</h2>
            <p className="text-lg mb-6 text-blue-100">
              Geographic arbitrage could cut your time to FIRE by 50% or more. Start planning your location strategy today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Calculate Your FIRE Number
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400 transition-colors"
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