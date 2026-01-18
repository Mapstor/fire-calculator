'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, User, Play } from 'lucide-react';
import { EXAMPLE_PERSONAS } from '@/data/examplePersonas';
import { CalculatorInputs } from '@/types/calculator';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface ExamplesProps {
  onLoadExample: (inputs: CalculatorInputs) => void;
}

export default function Examples({ onLoadExample }: ExamplesProps) {
  const [expandedExample, setExpandedExample] = useState<string | null>('all'); // Expand all by default

  const examples = [
    {
      id: 'freshGraduate',
      name: 'Sarah, 23 - Fresh Graduate',
      description: 'Starting early with good savings habits',
      inputs: EXAMPLE_PERSONAS.freshGraduate,
      results: { fireNumber: 840000, years: 16, fireAge: 39, savingsRate: 37.8 },
      insight: 'Starting at 23 with solid savings rate = FIRE at 39, 6 years early.',
    },
    {
      id: 'midCareer',
      name: 'Marcus, 35 - Mid-Career Professional',
      description: 'Higher income compensating for later start',
      inputs: EXAMPLE_PERSONAS.midCareer,
      results: { fireNumber: 1650000, years: 14, fireAge: 49, savingsRate: 42.1 },
      insight: 'Higher income compensates for late start. FIRE at 49.',
    },
    {
      id: 'lateStarter',
      name: 'Patricia, 45 - Late Starter',
      description: 'Proving it\'s never too late to start',
      inputs: EXAMPLE_PERSONAS.lateStarter,
      results: { fireNumber: 1200000, years: 13, fireAge: 58, savingsRate: 43.8 },
      insight: 'Never too late! Social Security reduces needed savings.',
    },
    {
      id: 'coupleWithKids',
      name: 'The Johnsons, 32 - Couple With Kids',
      description: 'Family planning for financial independence',
      inputs: EXAMPLE_PERSONAS.coupleWithKids,
      results: { fireNumber: 1800000, years: 15, fireAge: 47, savingsRate: 35.7 },
      insight: 'Lower retirement spending (no childcare) makes FIRE achievable.',
    },
    {
      id: 'fatFire',
      name: 'David, 38 - Fat FIRE Tech Executive',
      description: 'High earner targeting luxurious retirement',
      inputs: EXAMPLE_PERSONAS.fatFire,
      results: { fireNumber: 4100000, years: 10, fireAge: 48, savingsRate: 57.1 },
      insight: 'High income + high savings rate = Fat FIRE at 48.',
    },
  ];

  const handleLoadExample = (inputs: CalculatorInputs) => {
    onLoadExample(inputs);
    // Scroll to calculator
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Real FIRE Examples
      </h2>
      <p className="text-gray-600 mb-6">
        See how different people can achieve financial independence. Click "Try This Example" to load their numbers into the calculator.
      </p>
      
      <div className="space-y-4">
        {examples.map((example) => (
          <div
            key={example.id}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setExpandedExample(
                expandedExample === example.id ? null : example.id
              )}
              className="w-full p-4 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <User className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{example.name}</h3>
                  <p className="text-sm text-gray-600">{example.description}</p>
                </div>
              </div>
              {(expandedExample === 'all' || expandedExample === example.id) ? (
                <ChevronUp className="h-5 w-5 text-gray-400" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </button>
            
            {(expandedExample === 'all' || expandedExample === example.id) && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Inputs</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>Age: {example.inputs.currentAge} → {example.inputs.retirementAge}</p>
                      <p>Income: {formatCurrency(example.inputs.monthlyIncome)}/mo</p>
                      <p>Expenses: {formatCurrency(example.inputs.monthlyExpenses)}/mo</p>
                      <p>Savings: {formatCurrency(example.inputs.currentSavings)}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Results</h4>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>FIRE Number: {formatCurrency(example.results.fireNumber)}</p>
                      <p>Years to FIRE: {example.results.years}</p>
                      <p>FIRE Age: {example.results.fireAge}</p>
                      <p>Savings Rate: {formatPercent(example.results.savingsRate / 100)}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Key Insight</h4>
                    <p className="text-sm text-gray-600 mb-3">{example.insight}</p>
                    
                    <button
                      onClick={() => handleLoadExample(example.inputs)}
                      className={cn(
                        "flex items-center gap-2 px-3 py-2",
                        "bg-primary-600 hover:bg-primary-700 text-white",
                        "text-sm font-medium rounded-lg transition-colors"
                      )}
                    >
                      <Play className="h-4 w-4" />
                      Try This Example
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}