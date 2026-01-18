'use client';

import { useState } from 'react';
import { BaristaFireExample, BaristaFireInputs } from '@/types/baristaFire';
import { ChevronDown, ChevronUp, Coffee, Heart, Briefcase } from 'lucide-react';
import { DEFAULTS } from '@/lib/constants';

interface Props {
  onLoadExample: (inputs: BaristaFireInputs) => void;
}

const examples: BaristaFireExample[] = [
  {
    name: 'tech-worker',
    title: 'Tech Worker to Coffee Shop',
    description: '35-year-old software developer planning to work at a coffee shop with benefits',
    inputs: {
      currentAge: 35,
      targetRetirementAge: 65,
      baristaStartAge: 45,
      currentInvestments: 250000,
      monthlyExpenses: 5000,
      expectedPartTimeIncome: 2500,
      includesHealthInsurance: true,
      healthInsuranceCost: 0,
      monthlyContribution: 3000,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
    },
    insight: 'Can transition to part-time in 10 years, 20 years earlier than full retirement',
  },
  {
    name: 'healthcare-conscious',
    title: 'Healthcare-Focused Saver',
    description: 'Prioritizing jobs with health insurance to bridge the gap to Medicare',
    inputs: {
      currentAge: 40,
      targetRetirementAge: 65,
      baristaStartAge: 50,
      currentInvestments: 400000,
      monthlyExpenses: 4000,
      expectedPartTimeIncome: 2000,
      includesHealthInsurance: true,
      healthInsuranceCost: 0,
      monthlyContribution: 2000,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
    },
    insight: 'Healthcare coverage makes Barista FIRE viable 15 years before Medicare eligibility',
  },
  {
    name: 'freelancer',
    title: 'Freelancer Transition',
    description: 'Moving from full-time to freelance consulting with private insurance',
    inputs: {
      currentAge: 32,
      targetRetirementAge: 60,
      baristaStartAge: 42,
      currentInvestments: 150000,
      monthlyExpenses: 3500,
      expectedPartTimeIncome: 3000,
      includesHealthInsurance: false,
      healthInsuranceCost: 600,
      monthlyContribution: 2500,
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
    },
    insight: 'Higher freelance income offsets private health insurance costs',
  },
];

export default function BaristaFireExamples({ onLoadExample }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'tech-worker':
        return <Coffee className="w-4 h-4" />;
      case 'healthcare-conscious':
        return <Heart className="w-4 h-4" />;
      case 'freelancer':
        return <Briefcase className="w-4 h-4" />;
      default:
        return <Coffee className="w-4 h-4" />;
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
            Explore different Barista FIRE paths
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
                className="text-left p-3 border border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all group"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className="p-1.5 bg-amber-100 rounded-md text-amber-600 group-hover:bg-amber-200 transition-colors">
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
                <p className="text-xs text-amber-600 font-medium">
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