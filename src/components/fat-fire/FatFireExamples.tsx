'use client';

import { useState } from 'react';
import { FatFireExample, FatFireInputs } from '@/types/fatFire';
import { ChevronDown, ChevronUp, Crown, Briefcase, Plane } from 'lucide-react';
import { DEFAULTS } from '@/lib/constants';

interface Props {
  onLoadExample: (inputs: FatFireInputs) => void;
}

const examples: FatFireExample[] = [
  {
    name: 'tech-executive',
    title: 'Tech Executive',
    description: 'Senior tech professional targeting $200K annual spending',
    inputs: {
      currentAge: 35,
      targetRetirementAge: 50,
      currentInvestments: 500000,
      monthlyIncome: 25000,
      desiredMonthlySpending: 16000,
      currentMonthlyExpenses: 8000,
      monthlyContribution: 12000,
      housingBudget: 4000,
      travelBudget: 36000,
      healthcareBudget: 1500,
      entertainmentBudget: 2500,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: 0.035,
      includeRealEstate: true,
      includeTaxableBrokerage: true,
    },
    insight: 'Achievable in 15 years with 48% savings rate on high income',
  },
  {
    name: 'business-owner',
    title: 'Business Owner',
    description: 'Entrepreneur planning luxury retirement after business exit',
    inputs: {
      currentAge: 40,
      targetRetirementAge: 55,
      currentInvestments: 1000000,
      monthlyIncome: 40000,
      desiredMonthlySpending: 25000,
      currentMonthlyExpenses: 12000,
      monthlyContribution: 20000,
      housingBudget: 6000,
      travelBudget: 60000,
      healthcareBudget: 2000,
      entertainmentBudget: 4000,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: 0.035,
      includeRealEstate: true,
      includeTaxableBrokerage: true,
    },
    insight: '$300K annual lifestyle achievable with business income',
  },
  {
    name: 'dual-income',
    title: 'Dual High Earners',
    description: 'Professional couple targeting comfortable early retirement',
    inputs: {
      currentAge: 32,
      targetRetirementAge: 52,
      currentInvestments: 300000,
      monthlyIncome: 30000,
      desiredMonthlySpending: 12000,
      currentMonthlyExpenses: 7000,
      monthlyContribution: 15000,
      housingBudget: 3000,
      travelBudget: 30000,
      healthcareBudget: 1200,
      entertainmentBudget: 2000,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: 0.035,
      includeRealEstate: true,
      includeTaxableBrokerage: true,
    },
    insight: 'Combined income enables Fat FIRE in 20 years',
  },
];

export default function FatFireExamples({ onLoadExample }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'tech-executive':
        return <Briefcase className="w-4 h-4" />;
      case 'business-owner':
        return <Crown className="w-4 h-4" />;
      case 'dual-income':
        return <Plane className="w-4 h-4" />;
      default:
        return <Crown className="w-4 h-4" />;
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
            Explore different Fat FIRE paths
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
                className="text-left p-3 border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all group"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className="p-1.5 bg-purple-100 rounded-md text-purple-600 group-hover:bg-purple-200 transition-colors">
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
                <p className="text-xs text-purple-600 font-medium">
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