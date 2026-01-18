'use client';

import { FatFireResults as ResultsType } from '@/types/fatFire';
import { formatCurrency } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';
import { Crown, Clock, TrendingUp, PiggyBank, Award, DollarSign } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

interface Props {
  results: ResultsType;
  currency: CurrencyCode;
}

export default function FatFireResults({ results, currency }: Props) {
  return (
    <div className="space-y-6">
      {/* Progress Status */}
      {results.hasReachedFatFire ? (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-purple-100 rounded-md">
              <Crown className="w-4 h-4 text-purple-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-900">
                Fat FIRE Achieved!
              </p>
              <p className="text-xs text-purple-700 mt-0.5">
                You have reached luxury financial independence
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-100 rounded-md">
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-amber-900">
                <CountUp end={parseFloat(results.yearsToFatFire.toFixed(1))} /> years to Fat FIRE
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Reach luxury retirement at age <CountUp end={parseFloat(results.fatFireAge.toFixed(1))} />
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Key Numbers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-gray-600">Fat FIRE Number</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.fatFireNumber, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {Math.round(results.currentProgress)}% achieved
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-600">Monthly Passive Income</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.monthlyPassiveIncome, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            At Fat FIRE
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <PiggyBank className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-gray-600">Savings Rate</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            <CountUp end={parseFloat(results.currentSavingsRate.toFixed(1))} />%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Need {results.requiredSavingsRate}%
          </p>
        </div>
      </div>
      
      {/* Milestone Comparison */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">FIRE Milestones Timeline</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Lean FIRE ($40K/yr)</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {results.yearsToLeanFire === 0 ? (
                <span className="text-green-600">Achieved ✓</span>
              ) : (
                <><CountUp end={parseFloat(results.yearsToLeanFire.toFixed(1))} /> years</>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Regular FIRE ($60K/yr)</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {results.yearsToRegularFire === 0 ? (
                <span className="text-green-600">Achieved ✓</span>
              ) : (
                <><CountUp end={parseFloat(results.yearsToRegularFire.toFixed(1))} /> years</>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Fat FIRE (${(results.annualSpendingTarget / 1000).toFixed(0)}K/yr)</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {results.hasReachedFatFire ? (
                <span className="text-purple-600">Achieved ✓</span>
              ) : (
                <><CountUp end={parseFloat(results.yearsToFatFire.toFixed(1))} /> years</>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Lifestyle Breakdown */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Target Lifestyle Breakdown</h3>
        <div className="space-y-2">
          {results.lifestyleBreakdown.map((category) => (
            <div key={category.name} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-2">
                <span className="text-base">{category.icon}</span>
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
      </div>
      
      {/* Success Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-purple-600" />
            <span className="text-xs text-purple-700">Success Probability</span>
          </div>
          <p className="text-xl font-semibold text-purple-900">
            <CountUp end={parseFloat(results.successProbability.toFixed(1))} />%
          </p>
        </div>
        
        {results.bufferAmount > 0 && (
          <div className="bg-green-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-xs text-green-700">Safety Buffer</span>
            </div>
            <p className="text-xl font-semibold text-green-900">
              {formatCurrency(results.bufferAmount, currency)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}