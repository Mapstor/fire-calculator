'use client';

import React from 'react';
import NetWorthChart from './NetWorthChart';
import FireProgressChart from './FireProgressChart';
import MonteCarloChart from './MonteCarloChart';
import SavingsRateChart from './SavingsRateChart';
import { CalculatorResults, CurrencyCode } from '@/types/calculator';

interface ChartsGridProps {
  results: CalculatorResults;
  currency: CurrencyCode;
}

export default function ChartsGrid({ results, currency }: ChartsGridProps) {
  const currentNetWorth = results.projections[0]?.netWorth || 0;
  const currentProgress = (currentNetWorth / results.fire.fireNumber) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Net Worth Projection */}
      <div className="lg:col-span-1">
        <NetWorthChart
          projections={results.projections}
          fireNumber={results.fire.fireNumber}
          currency={currency}
        />
      </div>

      {/* FIRE Progress */}
      <div className="lg:col-span-1">
        <FireProgressChart
          currentProgress={currentProgress}
          currentNetWorth={currentNetWorth}
          fireTarget={results.fire.fireNumber}
          currency={currency}
        />
      </div>

      {/* Monte Carlo - only show if available */}
      {results.monteCarlo && (
        <div className="lg:col-span-1">
          <MonteCarloChart
            results={results.monteCarlo}
            fireNumber={results.fire.fireNumber}
            currentAge={results.inputs.currentAge}
            currency={currency}
          />
        </div>
      )}

      {/* Savings Rate Impact */}
      <div className="lg:col-span-1">
        <SavingsRateChart
          data={results.savingsRateImpact}
          currentRate={results.fire.savingsRate}
          currency={currency}
        />
      </div>
    </div>
  );
}