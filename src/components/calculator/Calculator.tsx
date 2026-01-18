'use client';

import React, { useRef, useEffect } from 'react';
import SimpleInputs from './SimpleInputs';
import AdvancedInputs from './AdvancedInputs';
import CalculateButton from './CalculateButton';
import Results from './Results';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { ResultsLoadingSkeleton } from '@/components/ui/LoadingSkeleton';
import { useCalculator } from '@/hooks/useCalculator';
import { cn } from '@/lib/utils';

export default function Calculator() {
  const resultsRef = useRef<HTMLDivElement>(null);
  
  const {
    simpleInputs,
    advancedInputs,
    currency,
    results,
    isCalculating,
    hasCalculated,
    updateSimpleInput,
    updateAdvancedInput,
    setCurrency,
    calculate,
    reset,
  } = useCalculator();

  // Scroll to results after calculation
  useEffect(() => {
    if (hasCalculated && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [hasCalculated]);

  return (
    <>
      <div className={cn(
        "bg-white rounded-xl shadow-lg p-6 sm:p-8",
        "border border-gray-100"
      )}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            FIRE Calculator
          </h2>
          <CurrencySelector
            value={currency}
            onChange={setCurrency}
          />
        </div>
        
        <div className="space-y-6">
          <SimpleInputs
            values={simpleInputs}
            currency={currency}
            onChange={updateSimpleInput}
          />
          
          <AdvancedInputs
            values={advancedInputs}
            currency={currency}
            onChange={updateAdvancedInput}
          />
          
          <div className="pt-4 flex justify-center sm:justify-start">
            <CalculateButton
              onCalculate={calculate}
              onReset={reset}
              isCalculating={isCalculating}
              hasCalculated={hasCalculated}
            />
          </div>
        </div>
      </div>

      {isCalculating && (
        <div ref={resultsRef}>
          <ResultsLoadingSkeleton />
        </div>
      )}

      {hasCalculated && results && !isCalculating && (
        <div ref={resultsRef}>
          <Results
            results={results}
            currency={currency}
          />
        </div>
      )}
    </>
  );
}