'use client';

import { useState, useCallback } from 'react';
import { BaristaFireInputs, BaristaFireResults } from '@/types/baristaFire';
import { calculateBaristaFire } from '@/lib/baristaFireCalculations';
import { DEFAULTS } from '@/lib/constants';
import { CurrencyCode } from '@/types/calculator';

const defaultInputs: BaristaFireInputs = {
  currentAge: 30,
  targetRetirementAge: 60,
  baristaStartAge: 40,
  currentInvestments: 50000,
  monthlyExpenses: 4000,
  expectedPartTimeIncome: 2000,
  includesHealthInsurance: true,
  healthInsuranceCost: 0,
  monthlyContribution: 1500,
  expectedReturn: DEFAULTS.STOCK_RETURN,
  inflationRate: DEFAULTS.INFLATION_RATE,
  withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
};

export function useBaristaFireCalculator() {
  const [inputs, setInputs] = useState<BaristaFireInputs>(defaultInputs);
  const [results, setResults] = useState<BaristaFireResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  const updateInput = useCallback((field: keyof BaristaFireInputs, value: number | boolean) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const calculate = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculatedResults = calculateBaristaFire(inputs);
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
  
  const loadExample = useCallback((exampleInputs: BaristaFireInputs) => {
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