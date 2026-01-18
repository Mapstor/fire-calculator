'use client';

import { LeanFireResults as ResultsType } from '@/types/leanFire';
import { formatCurrency } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';
import { Leaf, Clock, TrendingDown, Shield, MapPin, AlertCircle } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

interface Props {
  results: ResultsType;
  currency: CurrencyCode;
}

export default function LeanFireResults({ results, currency }: Props) {
  const getFeasibilityColor = (feasibility: string) => {
    switch (feasibility) {
      case 'easy': return 'text-green-600';
      case 'moderate': return 'text-blue-600';
      case 'challenging': return 'text-amber-600';
      case 'very-challenging': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };
  
  const getFeasibilityBg = (feasibility: string) => {
    switch (feasibility) {
      case 'easy': return 'bg-green-50 border-green-200';
      case 'moderate': return 'bg-blue-50 border-blue-200';
      case 'challenging': return 'bg-amber-50 border-amber-200';
      case 'very-challenging': return 'bg-red-50 border-red-200';
      default: return 'bg-gray-50 border-gray-200';
    }
  };
  
  return (
    <div className="space-y-6">
      {/* Progress Status */}
      {results.hasReachedLeanFire ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-green-100 rounded-md">
              <Leaf className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-900">
                Lean FIRE Achieved!
              </p>
              <p className="text-xs text-green-700 mt-0.5">
                You have reached minimalist financial independence
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-blue-100 rounded-md">
              <Clock className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-blue-900">
                <CountUp end={results.yearsToLeanFire} decimals={1} /> years to Lean FIRE
              </p>
              <p className="text-xs text-blue-700 mt-0.5">
                Achieve freedom at age <CountUp end={results.leanFireAge} decimals={0} />
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Budget Feasibility Assessment */}
      <div className={`rounded-lg p-4 border ${getFeasibilityBg(results.budgetFeasibility)}`}>
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className={`w-4 h-4 ${getFeasibilityColor(results.budgetFeasibility)}`} />
          <span className={`text-sm font-medium ${getFeasibilityColor(results.budgetFeasibility)}`}>
            Budget Transition: {results.budgetFeasibility.charAt(0).toUpperCase() + results.budgetFeasibility.slice(1).replace('-', ' ')}
          </span>
        </div>
        <p className="text-xs text-gray-600">
          {results.monthlyBudgetGap > 0 ? (
            <>Need to reduce spending by {formatCurrency(results.monthlyBudgetGap, currency)}/month</>
          ) : (
            <>Already within Lean FIRE budget target!</>
          )}
        </p>
      </div>
      
      {/* Key Numbers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-600">Lean FIRE Number</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.adjustedFireNumber, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {Math.round(results.currentProgress)}% achieved
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingDown className="w-4 h-4 text-blue-600" />
            <span className="text-xs text-gray-600">Monthly Target</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.annualSpendingTarget / 12, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Max for Lean FIRE
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-gray-600">Flexibility Score</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            <CountUp end={results.flexibilityScore} decimals={0} />%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Risk resilience
          </p>
        </div>
      </div>
      
      {/* Comparison with Regular FIRE */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Lean vs Regular FIRE</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Years saved</span>
            <span className="text-sm font-medium text-green-600">
              <CountUp end={results.yearsVsRegularFire} decimals={1} /> years earlier
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Money needed</span>
            <span className="text-sm font-medium text-green-600">
              {formatCurrency(results.amountVsRegularFire, currency)} less
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Required savings rate</span>
            <span className="text-sm font-medium text-gray-900">
              <CountUp end={results.requiredSavingsRate} decimals={0} />% 
              <span className="text-xs text-gray-500 ml-1">(current: {results.currentSavingsRate}%)</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Geographic Arbitrage Impact */}
      {results.geoArbitrageImpact > 0 && (
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-medium text-blue-900">Geographic Arbitrage Impact</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-700">Time saved</span>
              <span className="text-sm font-medium text-blue-900">
                <CountUp end={results.geoArbitrageImpact} decimals={1} /> years
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-blue-700">Adjusted target</span>
              <span className="text-sm font-medium text-blue-900">
                {formatCurrency(results.adjustedFireNumber, currency)}
              </span>
            </div>
          </div>
        </div>
      )}
      
      {/* Budget Breakdown */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Target Budget Breakdown</h3>
        <div className="space-y-2">
          {results.budgetBreakdown.map((category) => (
            <div key={category.name} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${category.isOptimized ? 'bg-green-500' : 'bg-amber-500'}`} />
                <span className="text-xs text-gray-600">{category.name}</span>
              </div>
              <div className="text-right">
                <span className="text-sm font-medium text-gray-900">
                  {formatCurrency(category.monthlyAmount, currency)}
                </span>
                <span className="text-xs text-gray-500 ml-2">
                  ({Math.round(category.percentOfTotal)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-1"></span>
            Optimized
            <span className="inline-block w-2 h-2 bg-amber-500 rounded-full ml-3 mr-1"></span>
            Can be reduced
          </p>
        </div>
      </div>
    </div>
  );
}