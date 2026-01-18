'use client';

import { useState } from 'react';
import { CouplesFireExample, CouplesFireInputs } from '@/types/couplesFire';
import { ChevronDown, ChevronUp, Heart, Users, TrendingUp } from 'lucide-react';
import { DEFAULTS } from '@/lib/constants';

interface Props {
  onLoadExample: (inputs: CouplesFireInputs) => void;
}

const examples: CouplesFireExample[] = [
  {
    name: 'dual-income',
    title: 'Dual Income Power Couple',
    description: 'Both partners with strong careers maximizing savings',
    inputs: {
      partner1Name: 'Alex',
      partner1Age: 32,
      partner1Income: 95000,
      partner1CurrentSavings: 80000,
      partner1RetirementAge: 48,
      partner2Name: 'Sam',
      partner2Age: 30,
      partner2Income: 85000,
      partner2CurrentSavings: 60000,
      partner2RetirementAge: 48,
      combinedMonthlyExpenses: 6000,
      combinedMonthlySavings: 7000,
      sharedAssets: 50000,
      retirementSpendingTarget: 7000,
      synchronizedRetirement: true,
      includeChildren: false,
      childrenCount: 0,
      filingStatus: 'married-jointly',
      employerMatchPartner1: 5,
      employerMatchPartner2: 4,
      healthInsuranceProvider: 'partner1',
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      emergencyFundMonths: 12,
      lifeInsurance: true,
    },
    insight: 'High dual income enables FIRE in 16 years with 47% savings rate',
  },
  {
    name: 'family-focused',
    title: 'Family with Children',
    description: 'Planning FIRE with kids and education costs',
    inputs: {
      partner1Name: 'Jordan',
      partner1Age: 35,
      partner1Income: 70000,
      partner1CurrentSavings: 40000,
      partner1RetirementAge: 55,
      partner2Name: 'Casey',
      partner2Age: 34,
      partner2Income: 60000,
      partner2CurrentSavings: 35000,
      partner2RetirementAge: 55,
      combinedMonthlyExpenses: 7000,
      combinedMonthlySavings: 3000,
      sharedAssets: 25000,
      retirementSpendingTarget: 5000,
      synchronizedRetirement: true,
      includeChildren: true,
      childrenCount: 2,
      filingStatus: 'married-jointly',
      employerMatchPartner1: 3,
      employerMatchPartner2: 3,
      healthInsuranceProvider: 'both',
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      emergencyFundMonths: 9,
      lifeInsurance: true,
    },
    insight: 'Achievable in 20 years with careful planning around child expenses',
  },
  {
    name: 'staggered-retirement',
    title: 'Staggered Retirement',
    description: 'One partner retiring early, other continuing for benefits',
    inputs: {
      partner1Name: 'Morgan',
      partner1Age: 40,
      partner1Income: 110000,
      partner1CurrentSavings: 150000,
      partner1RetirementAge: 50,
      partner2Name: 'Riley',
      partner2Age: 38,
      partner2Income: 55000,
      partner2CurrentSavings: 75000,
      partner2RetirementAge: 55,
      combinedMonthlyExpenses: 5500,
      combinedMonthlySavings: 5000,
      sharedAssets: 100000,
      retirementSpendingTarget: 6000,
      synchronizedRetirement: false,
      includeChildren: false,
      childrenCount: 0,
      filingStatus: 'married-jointly',
      employerMatchPartner1: 6,
      employerMatchPartner2: 4,
      healthInsuranceProvider: 'partner2',
      expectedReturn: DEFAULTS.STOCK_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      emergencyFundMonths: 8,
      lifeInsurance: true,
    },
    insight: 'Strategic staggering maintains health insurance while optimizing retirement',
  },
];

export default function CouplesFireExamples({ onLoadExample }: Props) {
  const [isOpen, setIsOpen] = useState(true);
  
  const getIcon = (name: string) => {
    switch (name) {
      case 'dual-income':
        return <TrendingUp className="w-4 h-4" />;
      case 'family-focused':
        return <Users className="w-4 h-4" />;
      case 'staggered-retirement':
        return <Heart className="w-4 h-4" />;
      default:
        return <Heart className="w-4 h-4" />;
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
            Explore different couples FIRE strategies
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
                className="text-left p-3 border border-gray-200 rounded-lg hover:border-rose-300 hover:bg-rose-50 transition-all group"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className="p-1.5 bg-rose-100 rounded-md text-rose-600 group-hover:bg-rose-200 transition-colors">
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
                <p className="text-xs text-rose-600 font-medium">
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