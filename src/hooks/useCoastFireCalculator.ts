'use client';

import { useState, useCallback } from 'react';
import { CoastFireInputs, CoastFireResults } from '@/types/coastFire';
import { calculateCoastFire } from '@/lib/coastFireCalculations';
import { DEFAULTS } from '@/lib/constants';
import { CurrencyCode } from '@/types/calculator';

const defaultInputs: CoastFireInputs = {
  currentAge: 30,
  targetRetirementAge: 65,
  currentInvestments: 0,
  monthlyExpenses: 4000,
  monthlyContribution: 0,
  expectedReturn: DEFAULTS.STOCK_RETURN,
  inflationRate: DEFAULTS.INFLATION_RATE,
  withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
};

export function useCoastFireCalculator() {
  const [inputs, setInputs] = useState<CoastFireInputs>(defaultInputs);
  const [results, setResults] = useState<CoastFireResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  const updateInput = useCallback((field: keyof CoastFireInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const calculate = useCallback(() => {
    setIsCalculating(true);
    
    // Small delay for UX (shows loading state)
    setTimeout(() => {
      const calculatedResults = calculateCoastFire(inputs);
      setResults(calculatedResults);
      setIsCalculating(false);
      setHasCalculated(true);
    }, 500);
  }, [inputs]);
  
  const reset = useCallback(() => {
    setInputs(defaultInputs);
    setResults(null);
    setHasCalculated(false);
  }, []);
  
  const loadExample = useCallback((exampleInputs: CoastFireInputs) => {
    setInputs(exampleInputs);
    setResults(null);
    setHasCalculated(false);
  }, []);
  
  return {
    inputs,
    results,
    isCalculating,
    hasCalculated,
    currency,
    updateInput,
    calculate,
    reset,
    setCurrency,
    loadExample,
  };
}