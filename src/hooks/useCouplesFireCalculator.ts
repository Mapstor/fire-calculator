'use client';

import { useState, useCallback } from 'react';
import { CouplesFireInputs, CouplesFireResults } from '@/types/couplesFire';
import { calculateCouplesFire } from '@/lib/couplesFireCalculations';
import { DEFAULTS } from '@/lib/constants';
import { CurrencyCode } from '@/types/calculator';

const defaultInputs: CouplesFireInputs = {
  partner1Name: 'Partner 1',
  partner1Age: 30,
  partner1Income: 75000,
  partner1CurrentSavings: 50000,
  partner1RetirementAge: 50,
  partner2Name: 'Partner 2',
  partner2Age: 28,
  partner2Income: 65000,
  partner2CurrentSavings: 40000,
  partner2RetirementAge: 50,
  combinedMonthlyExpenses: 5000,
  combinedMonthlySavings: 4000,
  sharedAssets: 30000,
  retirementSpendingTarget: 6000,
  synchronizedRetirement: true,
  includeChildren: false,
  childrenCount: 0,
  filingStatus: 'married-jointly',
  employerMatchPartner1: 4,
  employerMatchPartner2: 3,
  healthInsuranceProvider: 'partner1',
  expectedReturn: DEFAULTS.STOCK_RETURN,
  inflationRate: DEFAULTS.INFLATION_RATE,
  withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
  emergencyFundMonths: 6,
  lifeInsurance: true,
};

export function useCouplesFireCalculator() {
  const [inputs, setInputs] = useState<CouplesFireInputs>(defaultInputs);
  const [results, setResults] = useState<CouplesFireResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  
  const updateInput = useCallback((field: keyof CouplesFireInputs, value: string | number | boolean) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  }, []);
  
  const calculate = useCallback(() => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const calculatedResults = calculateCouplesFire(inputs);
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
  
  const loadExample = useCallback((exampleInputs: CouplesFireInputs) => {
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