'use client';

import { useState, useCallback } from 'react';
import { FatFireInputs, FatFireResults } from '@/types/fatFire';
import { calculateFatFire } from '@/lib/fatFireCalculations';
import { DEFAULTS } from '@/lib/constants';
import { CurrencyCode } from '@/types/calculator';

const defaultInputs: FatFireInputs = {
  currentAge: 30,
  targetRetirementAge: 50,
  currentInvestments: 100000,
  monthlyIncome: 15000,
  desiredMonthlySpending: 10000,
  currentMonthlyExpenses: 6000,
  monthlyContribution: 7000,
  housingBudget: 2500,
  travelBudget: 24000, // Annual
  healthcareBudget: 1000,
  entertainmentBudget: 1500,
  expectedReturn: DEFAULTS.STOCK_RETURN,
  inflationRate: DEFAULTS.INFLATION_RATE,
  withdrawalRate: 0.035, // More conservative for Fat FIRE
  includeRealEstate: true,
  includeTaxableBrokerage: true,
};

export function useFatFireCalculator() {
  const [inputs, setInputs] = useState<FatFireInputs>(defaultInputs);
  const [results, setResults] = useState<FatFireResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  const updateInput = useCallback((field: keyof FatFireInputs, value: number | boolean) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const calculate = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculatedResults = calculateFatFire(inputs);
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
  
  const loadExample = useCallback((exampleInputs: FatFireInputs) => {
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