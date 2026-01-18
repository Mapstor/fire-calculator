'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Info, ChevronDown, ChevronUp, Calculator, TrendingUp, Shield, AlertCircle } from 'lucide-react';
import { DEFAULTS } from '@/lib/constants';
import { formatPercent } from '@/lib/formatters';

export default function EnhancedAssumptions() {
  const [expanded, setExpanded] = useState(false); // Collapsed by default

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
          <Info className="h-5 w-5 text-blue-600" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-blue-900">
              Calculator Assumptions & Methodology
            </h3>
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              {expanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
          </div>
          
          {/* Always visible key assumptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white/70 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <p className="text-xs font-medium text-gray-600">Returns</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{formatPercent(DEFAULTS.BLENDED_RETURN)}</p>
              <p className="text-xs text-gray-500">Expected annual return</p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <Shield className="h-4 w-4 text-blue-600" />
                <p className="text-xs font-medium text-gray-600">Withdrawal</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{formatPercent(DEFAULTS.SAFE_WITHDRAWAL_RATE)}</p>
              <p className="text-xs text-gray-500">Safe withdrawal rate</p>
            </div>
            
            <div className="bg-white/70 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="h-4 w-4 text-orange-600" />
                <p className="text-xs font-medium text-gray-600">Inflation</p>
              </div>
              <p className="text-lg font-bold text-gray-900">{formatPercent(DEFAULTS.INFLATION_RATE)}</p>
              <p className="text-xs text-gray-500">Annual inflation rate</p>
            </div>
          </div>

          {expanded && (
            <div className="space-y-4">
              {/* Detailed Assumptions */}
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-medium text-blue-900 mb-3">Investment Assumptions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Stock Market Returns:</span>
                      <span className="font-medium text-gray-900">{formatPercent(DEFAULTS.STOCK_RETURN)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Bond Returns:</span>
                      <span className="font-medium text-gray-900">{formatPercent(DEFAULTS.BOND_RETURN)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Default Stock Allocation:</span>
                      <span className="font-medium text-gray-900">{formatPercent(DEFAULTS.STOCK_ALLOCATION)}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Real Return (after inflation):</span>
                      <span className="font-medium text-gray-900">{formatPercent(DEFAULTS.REAL_BLENDED_RETURN)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Salary Growth Rate:</span>
                      <span className="font-medium text-gray-900">{formatPercent(DEFAULTS.SALARY_GROWTH_RATE)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monte Carlo Simulations:</span>
                      <span className="font-medium text-gray-900">{DEFAULTS.SIMULATION_COUNT.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Methodology Explanation */}
              <div className="bg-yellow-50/70 rounded-lg p-4 border border-yellow-200">
                <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
                  <Calculator className="h-4 w-4" />
                  How We Calculate
                </h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• <strong>FIRE Number:</strong> Annual expenses × 25 (based on 4% rule)</li>
                  <li>• <strong>Years to FIRE:</strong> Compound interest formula with regular contributions</li>
                  <li>• <strong>Real Returns:</strong> All projections adjusted for {formatPercent(DEFAULTS.INFLATION_RATE)} inflation</li>
                  <li>• <strong>Monte Carlo:</strong> 1,000 simulations using historical market volatility</li>
                </ul>
              </div>

              {/* Important Notes */}
              <div className="bg-red-50/70 rounded-lg p-4 border border-red-200">
                <h4 className="font-medium text-red-900 mb-2">Important Considerations</h4>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>• Past performance doesn't guarantee future results</li>
                  <li>• Actual returns vary significantly year-to-year</li>
                  <li>• Sequence of returns risk can impact early retirement</li>
                  <li>• Healthcare costs before Medicare age need special planning</li>
                </ul>
              </div>

              {/* Learn More Links */}
              <div className="flex flex-wrap gap-2 pt-2">
                <Link 
                  href="/methodology"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-blue-200 rounded-full text-xs text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  <Info className="h-3 w-3" />
                  Detailed Methodology
                </Link>
                <Link 
                  href="/blog/fire-calculator-accuracy"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-blue-200 rounded-full text-xs text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Calculator Accuracy Analysis
                </Link>
                <Link 
                  href="/faq"
                  className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-blue-200 rounded-full text-xs text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Common Questions
                </Link>
              </div>

              <p className="text-xs text-blue-700 italic">
                💡 Tip: You can customize all these assumptions in the "Advanced Options" section below the calculator.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}