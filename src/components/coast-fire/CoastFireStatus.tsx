'use client';

import { CoastFireResults } from '@/types/coastFire';
import { formatCurrency } from '@/lib/formatters';
import { Lightbulb, ArrowRight } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';

interface Props {
  results: CoastFireResults;
  currency: CurrencyCode;
}

export default function CoastFireStatus({ results, currency }: Props) {
  const currentInvestments = results.coastFireNumber + results.surplusAmount;
  
  if (results.hasReachedCoastFire) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <div className="p-1.5 bg-green-100 rounded-lg">
            <Lightbulb className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-green-900 mb-2">
              Coast FIRE Status: Achieved
            </h3>
            <p className="text-sm text-green-800 mb-3 leading-relaxed">
              Your current investments of <strong>{formatCurrency(currentInvestments, currency)}</strong> will 
              grow to <strong>{formatCurrency(results.fireNumber, currency)}</strong> by 
              age <strong>{results.projectedFireAge}</strong> through compound growth alone.
            </p>
            <div className="bg-green-100 rounded-lg p-3">
              <p className="text-xs text-green-900 font-medium mb-2">Strategic Options:</p>
              <ul className="space-y-1 text-xs text-green-800">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Discontinue retirement saving (optional)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Work to cover living expenses only</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Consider career transition opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span>Surplus: <strong>{formatCurrency(results.surplusAmount, currency)}</strong> buffer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
      <div className="flex items-start gap-3">
        <div className="p-1.5 bg-amber-100 rounded-lg">
          <Lightbulb className="w-4 h-4 text-amber-600" />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-amber-900 mb-2">
            Coast FIRE Progress: {results.currentProgress.toFixed(1)}%
          </h3>
          <p className="text-sm text-amber-800 mb-3 leading-relaxed">
            Additional <strong>{formatCurrency(Math.abs(results.surplusAmount), currency)}</strong> required 
            to reach Coast FIRE target of <strong>{formatCurrency(results.coastFireNumber, currency)}</strong>.
          </p>
          {results.yearsToCoastFire && results.coastFireAge && (
            <div className="bg-amber-100 rounded-lg p-3">
              <p className="text-xs text-amber-900 leading-relaxed">
                <strong>Projection:</strong> Coast FIRE milestone achievable in{' '}
                <strong>{results.yearsToCoastFire} years</strong> at age{' '}
                <strong>{results.coastFireAge}</strong> (current contribution rate).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}