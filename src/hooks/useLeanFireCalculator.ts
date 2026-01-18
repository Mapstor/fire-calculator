'use client';

import { useState, useCallback } from 'react';
import { LeanFireInputs, LeanFireResults } from '@/types/leanFire';
import { calculateLeanFire } from '@/lib/leanFireCalculations';
import { DEFAULTS } from '@/lib/constants';
import { CurrencyCode } from '@/types/calculator';

const defaultInputs: LeanFireInputs = {
  currentAge: 25,
  targetRetirementAge: 45,
  currentInvestments: 20000,
  monthlyIncome: 5000,
  targetMonthlySpending: 2500, // $30K/year
  currentMonthlyExpenses: 4000,
  monthlyContribution: 2000,
  housingCost: 800,
  foodBudget: 400,
  transportationCost: 300,
  healthcareCost: 200,
  otherEssentials: 800,
  considerGeoArbitrage: false,
  geoArbitrageSavings: 0,
  expectedReturn: DEFAULTS.STOCK_RETURN,
  inflationRate: DEFAULTS.INFLATION_RATE,
  withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
  hasEmergencyFund: true,
  emergencyFundMonths: 6,
};

export function useLeanFireCalculator() {
  const [inputs, setInputs] = useState<LeanFireInputs>(defaultInputs);
  const [results, setResults] = useState<LeanFireResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  const updateInput = useCallback((field: keyof LeanFireInputs, value: number | boolean) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const calculate = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculatedResults = calculateLeanFire(inputs);
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
  
  const loadExample = useCallback((exampleInputs: LeanFireInputs) => {
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