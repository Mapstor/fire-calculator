'use client';

import { useState } from 'react';
import { LeanFireExample, LeanFireInputs } from '@/types/leanFire';
import { ChevronDown, ChevronUp, Leaf, Home, Globe } from 'lucide-react';
import { DEFAULTS } from '@/lib/constants';

interface Props {
  onLoadExample: (inputs: LeanFireInputs) => void;
}

const examples: LeanFireExample[] = [
  {
    name: 'minimalist',
    title: 'Urban Minimalist',
    description: 'Single person living frugally in a mid-size city',
    inputs: {
      currentAge: 27,
      targetRetirementAge: 42,
      currentInvestments: 30000,
      monthlyIncome: 4500,
      targetMonthlySpending: 2000,
      currentMonthlyExpenses: 3500,
      monthlyContribution: 2000,
      housingCost: 600,
      foodBudget: 300,
      transportationCost: 150,
      healthcareCost: 150,
      otherEssentials: 800,
      considerGeoArbitrage: false,
      geoArbitrageSavings: 0,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      hasEmergencyFund: true,
      emergencyFundMonths: 12,
    },
    insight: 'Achievable in 15 years with disciplined saving and spending',
  },
  {
    name: 'geo-arbitrage',
    title: 'Geographic Arbitrage',
    description: 'Planning to retire in a low-cost country',
    inputs: {
      currentAge: 35,
      targetRetirementAge: 45,
      currentInvestments: 75000,
      monthlyIncome: 6000,
      targetMonthlySpending: 1500,
      currentMonthlyExpenses: 4000,
      monthlyContribution: 3000,
      housingCost: 400,
      foodBudget: 250,
      transportationCost: 100,
      healthcareCost: 100,
      otherEssentials: 650,
      considerGeoArbitrage: true,
      geoArbitrageSavings: 30,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      hasEmergencyFund: true,
      emergencyFundMonths: 18,
    },
    insight: 'Geo-arbitrage cuts 5+ years off retirement timeline',
  },
  {
    name: 'frugal-family',
    title: 'Frugal Family',
    description: 'Family of 3 pursuing Lean FIRE together',
    inputs: {
      currentAge: 32,
      targetRetirementAge: 48,
      currentInvestments: 50000,
      monthlyIncome: 7000,
      targetMonthlySpending: 3000,
      currentMonthlyExpenses: 5000,
      monthlyContribution: 2500,
      housingCost: 1000,
      foodBudget: 600,
      transportationCost: 400,
      healthcareCost: 300,
      otherEssentials: 700,
      considerGeoArbitrage: false,
      geoArbitrageSavings: 0,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      hasEmergencyFund: true,
      emergencyFundMonths: 9,
    },
    insight: 'Family Lean FIRE possible with careful budgeting',
  },
];

export default function LeanFireExamples({ onLoadExample }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'minimalist':
        return <Leaf className="w-4 h-4" />;
      case 'geo-arbitrage':
        return <Globe className="w-4 h-4" />;
      case 'frugal-family':
        return <Home className="w-4 h-4" />;
      default:
        return <Leaf className="w-4 h-4" />;
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <div>
          <h2 className="text-base font-semibold text-gray-900">Example Scenarios</h2>
          <p className="text-xs text-gray-600 mt-0.5">
            Explore different Lean FIRE paths
          </p>
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
      
      {isOpen && (
        <div className="px-6 pb-4">
          <div className="grid md:grid-cols-3 gap-3">
            {examples.map((example) => (
              <button
                key={example.name}
                onClick={() => onLoadExample(example.inputs)}
                className="text-left p-3 border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all group"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className="p-1.5 bg-green-100 rounded-md text-green-600 group-hover:bg-green-200 transition-colors">
                    {getIcon(example.name)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {example.title}
                    </h3>
                    <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                      {example.description}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-green-600 font-medium">
                  {example.insight}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}