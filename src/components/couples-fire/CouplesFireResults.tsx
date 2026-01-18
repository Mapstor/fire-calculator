'use client';

import { CouplesFireResults as ResultsType } from '@/types/couplesFire';
import { formatCurrency } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';
import { Heart, Clock, Users, TrendingUp, AlertCircle, Shield } from 'lucide-react';
import CountUp from '@/components/ui/CountUp';

interface Props {
  results: ResultsType;
  currency: CurrencyCode;
  partner1Name: string;
  partner2Name: string;
}

export default function CouplesFireResults({ results, currency, partner1Name, partner2Name }: Props) {
  return (
    <div className="space-y-6">
      {/* Progress Status */}
      {results.hasReachedFire ? (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-green-100 rounded-md">
              <Heart className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-900">
                FIRE Achieved Together!
              </p>
              <p className="text-xs text-green-700 mt-0.5">
                You have reached financial independence as a couple
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-rose-100 rounded-md">
              <Clock className="w-4 h-4 text-rose-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-rose-900">
                <CountUp end={parseFloat(results.yearsToFire.toFixed(1))} /> years to FIRE
              </p>
              <p className="text-xs text-rose-700 mt-0.5">
                {partner1Name}: age {results.fireAgePartner1} • {partner2Name}: age {results.fireAgePartner2}
              </p>
            </div>
          </div>
        </div>
      )}
      
      {/* Key Numbers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Heart className="w-4 h-4 text-rose-600" />
            <span className="text-xs text-gray-600">Combined FIRE</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            {formatCurrency(results.combinedFireNumber, currency)}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            {Math.round(results.currentProgress)}% achieved
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-xs text-gray-600">Savings Rate</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            <CountUp end={parseFloat(results.combinedSavingsRate.toFixed(1))} />%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Of combined income
          </p>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-xs text-gray-600">FI Score</span>
          </div>
          <p className="text-lg font-semibold text-gray-900">
            <CountUp end={parseFloat(results.financialIndependenceScore.toFixed(1))} />%
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Overall strength
          </p>
        </div>
      </div>
      
      {/* Individual Contributions */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Individual Contributions</h3>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">{partner1Name}</span>
              <span className="text-xs font-medium text-gray-900">
                {results.partner1Contribution}% • {formatCurrency(results.partner1FireNumber, currency)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-rose-500"
                style={{ width: `${results.partner1Contribution}%` }}
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-600">{partner2Name}</span>
              <span className="text-xs font-medium text-gray-900">
                {results.partner2Contribution}% • {formatCurrency(results.partner2FireNumber, currency)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="h-2 rounded-full bg-pink-500"
                style={{ width: `${results.partner2Contribution}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Optimization Benefits */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-green-900 mb-2">Tax Savings</h3>
          <p className="text-xl font-semibold text-green-900">
            {formatCurrency(results.taxSavingsMarriedJointly, currency)}
          </p>
          <p className="text-xs text-green-700 mt-1">Annual savings from joint filing</p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-blue-900 mb-2">Shared Expenses</h3>
          <p className="text-xl font-semibold text-blue-900">
            {formatCurrency(results.expenseSavingsFromSharing, currency)}
          </p>
          <p className="text-xs text-blue-700 mt-1">Monthly savings from sharing</p>
        </div>
      </div>
      
      {/* Single Income Scenario */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Single Income Resilience</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-xs text-gray-600">If only {partner1Name} works</span>
            <span className="text-sm font-medium text-gray-900">
              {results.singleIncomeScenario.yearsToFirePartner1Only === Infinity ? 
                'Not achievable' : 
                `${results.singleIncomeScenario.yearsToFirePartner1Only.toFixed(1)} years`
              }
            </span>
          </div>
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-xs text-gray-600">If only {partner2Name} works</span>
            <span className="text-sm font-medium text-gray-900">
              {results.singleIncomeScenario.yearsToFirePartner2Only === Infinity ? 
                'Not achievable' : 
                `${results.singleIncomeScenario.yearsToFirePartner2Only.toFixed(1)} years`
              }
            </span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            {results.singleIncomeScenario.viableWithSingleIncome ? (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs text-green-700">Single income backup viable</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-xs text-amber-700">Both incomes needed for FIRE</span>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Staggered Retirement */}
      {results.staggeredRetirement.yearsApart > 0 && (
        <div className="bg-amber-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="w-4 h-4 text-amber-600" />
            <h3 className="text-sm font-medium text-amber-900">Staggered Retirement Plan</h3>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-amber-700">
              {results.staggeredRetirement.partner1RetireFirst ? partner1Name : partner2Name} retires {results.staggeredRetirement.yearsApart} years earlier
            </p>
            <p className="text-xs text-amber-700">
              Bridge financing needed: {formatCurrency(results.staggeredRetirement.bridgeFinancing, currency)}
            </p>
            {results.staggeredRetirement.healthInsuranceGap && (
              <p className="text-xs text-red-700 font-medium">
                ⚠ Health insurance gap - plan for coverage
              </p>
            )}
          </div>
        </div>
      )}
      
      {/* Milestones */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Financial Milestones</h3>
        <div className="space-y-2">
          {results.milestones.map((milestone) => (
            <div key={milestone.name} className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${milestone.achieved ? 'bg-green-500' : 'bg-gray-300'}`} />
                <span className="text-xs text-gray-600">{milestone.name}</span>
              </div>
              <div className="text-right">
                {milestone.achieved ? (
                  <span className="text-xs font-medium text-green-600">Achieved ✓</span>
                ) : (
                  <>
                    <span className="text-sm font-medium text-gray-900">
                      {formatCurrency(milestone.targetAmount, currency)}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">
                      ({milestone.yearsToReach.toFixed(1)} yrs)
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}