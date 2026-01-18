'use client';

import React from 'react';
import { Info } from 'lucide-react';
import { DEFAULTS } from '@/lib/constants';
import { formatPercent } from '@/lib/formatters';

export default function Assumptions() {
  return (
    <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
          <Info className="h-5 w-5 text-blue-600" />
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Default Assumptions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-800">
            <div>
              <p>• Expected return: {formatPercent(DEFAULTS.BLENDED_RETURN)}</p>
              <p>• Inflation rate: {formatPercent(DEFAULTS.INFLATION_RATE)}</p>
              <p>• Safe withdrawal rate: {formatPercent(DEFAULTS.SAFE_WITHDRAWAL_RATE)}</p>
            </div>
            
            <div>
              <p>• Stock allocation: {formatPercent(DEFAULTS.STOCK_ALLOCATION)}</p>
              <p>• Salary growth: {formatPercent(DEFAULTS.SALARY_GROWTH_RATE)}</p>
              <p>• Traditional retirement age: {DEFAULTS.TRADITIONAL_RETIREMENT_AGE}</p>
            </div>
          </div>
          
          <p className="text-xs text-blue-700 mt-3">
            All calculations use real (inflation-adjusted) returns. You can customize these assumptions in Advanced Options.
          </p>
        </div>
      </div>
    </div>
  );
}