'use client';

import { BaristaFireResults as ResultsType } from '@/types/baristaFire';
import { formatCurrency } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';
import { Coffee, Target, Clock, TrendingUp, DollarSign, Calendar } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

interface Props {
  results: ResultsType;
  currency: CurrencyCode;
}

export default function BaristaFireResults({ results, currency }: Props) {
  return (
    <div className="space-y-6">
      {/* Progress Status */}
      {results.hasReachedBaristaFire ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-green-100 rounded-md">
              <Coffee className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-900">
                Ready for Barista FIRE!
              </p>
              <p className="text-xs text-green-700 mt-0.5">
                You can start working part-time now while maintaining your lifestyle
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
                {results.yearsToBarista && results.yearsToBarista > 0 ? (
                  <>
                    <CountUp end={results.yearsToBarista} decimals={1} /> years to Barista FIRE
                  </>
                ) : (
                  'Calculating your path to Barista FIRE...'
                )}
              </p>
              <p className="text-xs text-amber-700 mt-0.5">
                Continue saving to reach your part-time freedom number
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Key Numbers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Coffee className="w-4 h-4 text-amber-600" />
            <span className="text-xs text-gray-600">Barista FIRE Number</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.baristaFireNumber, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {Math.round(results.currentProgress)}% achieved
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-gray-600">Full FIRE Number</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.fullFireNumber, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            No work needed
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-600">Years Saved</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            <CountUp end={results.yearsSavedVsFullFire} decimals={0} />
          </p>
          <p className="text-xs text-gray-500 mt-1">
            vs. full FIRE
          </p>
        </div>
      </div>
      
      {/* Timeline Summary */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Your Barista FIRE Timeline</h3>
        <div className="space-y-3">
          {results.baristaAge && (
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-600">Start part-time work at age</span>
              <span className="text-sm font-medium text-gray-900">
                <CountUp end={results.baristaAge} decimals={0} />
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Years of part-time work</span>
            <span className="text-sm font-medium text-gray-900">
              <CountUp end={results.yearsOfPartTime} decimals={0} />
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Monthly income needed</span>
            <span className="text-sm font-medium text-gray-900">
              {formatCurrency(results.totalMonthlyIncome, currency)}
            </span>
          </div>
        </div>
      </div>
      
      {/* Income Breakdown */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Barista Phase Income</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-xs text-gray-600">Portfolio income (4% rule)</span>
            <span className="text-sm font-medium text-gray-900">
              {formatCurrency(results.monthlyPortfolioIncome, currency)}
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-xs text-gray-600">Part-time work income</span>
            <span className="text-sm font-medium text-gray-900">
              +{formatCurrency(Math.abs(results.monthlyIncomeGap), currency)}
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <span className="text-xs font-medium text-gray-900">Total monthly income</span>
            <span className="text-sm font-semibold text-green-600">
              {formatCurrency(results.totalMonthlyIncome, currency)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}