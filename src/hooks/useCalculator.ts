'use client';

import { useState, useCallback } from 'react';
import {
  SimpleInputs,
  AdvancedInputs,
  CalculatorInputs,
  CalculatorResults,
  CurrencyCode,
} from '@/types/calculator';
import { DEFAULTS } from '@/lib/constants';
import { calculateResults } from '@/lib/calculations';
import { runMonteCarloSimulation } from '@/lib/monteCarlo';

const DEFAULT_SIMPLE: SimpleInputs = {
  currentAge: DEFAULTS.CURRENT_AGE,
  retirementAge: DEFAULTS.RETIREMENT_AGE,
  monthlyIncome: 5000,
  monthlyExpenses: 3000,
  currentSavings: 10000,
};

const DEFAULT_ADVANCED: AdvancedInputs = {
  expectedReturn: DEFAULTS.BLENDED_RETURN,
  inflationRate: DEFAULTS.INFLATION_RATE,
  withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
  stockAllocation: DEFAULTS.STOCK_ALLOCATION,
  salaryGrowthRate: DEFAULTS.SALARY_GROWTH_RATE,
  sideIncome: 0,
  windfall: 0,
  includeSocialSecurity: false,
  socialSecurityAmount: 0,
  socialSecurityStartAge: DEFAULTS.SOCIAL_SECURITY_AGE,
  includePension: false,
  pensionAmount: 0,
  pensionStartAge: DEFAULTS.TRADITIONAL_RETIREMENT_AGE,
  retirementSpending: null,
  runMonteCarlo: false,
};

/**
 * Compute initial calculator results from default inputs.
 * Runs once at hook initialization so SSR/first paint shows real numbers
 * instead of an empty form (audit H9 — indexable numeric content).
 */
function computeInitialResults(): CalculatorResults | null {
  try {
    return calculateResults({
      ...DEFAULT_SIMPLE,
      advanced: DEFAULT_ADVANCED,
      currency: 'USD',
    });
  } catch {
    return null;
  }
}

export function useCalculator() {
  const [simpleInputs, setSimpleInputs] = useState<SimpleInputs>(DEFAULT_SIMPLE);
  const [advancedInputs, setAdvancedInputs] = useState<AdvancedInputs>(DEFAULT_ADVANCED);

  const [currency, setCurrency] = useState<CurrencyCode>('USD');
  const [results, setResults] = useState<CalculatorResults | null>(computeInitialResults);
  const [isCalculating, setIsCalculating] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  const updateSimpleInput = useCallback((
    field: keyof SimpleInputs,
    value: number
  ) => {
    setSimpleInputs(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const updateAdvancedInput = useCallback((
    field: keyof AdvancedInputs,
    value: any
  ) => {
    setAdvancedInputs(prev => ({
      ...prev,
      [field]: value,
    }));
  }, []);

  const calculate = useCallback(async () => {
    setIsCalculating(true);
    
    try {
      // Create combined inputs
      const inputs: CalculatorInputs = {
        ...simpleInputs,
        advanced: advancedInputs,
        currency,
      };

      // Calculate base results
      let calculatorResults = calculateResults(inputs);

      // Run Monte Carlo if requested
      if (advancedInputs.runMonteCarlo) {
        const fireNumber = calculatorResults.fire.fireNumber;
        const maxYears = Math.min(
          DEFAULTS.MAX_AGE - simpleInputs.currentAge,
          DEFAULTS.MAX_CHART_YEARS
        );
        
        // Add a small delay to show loading state
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const monteCarloResults = runMonteCarloSimulation(
          inputs,
          fireNumber,
          maxYears
        );
        
        calculatorResults = {
          ...calculatorResults,
          monteCarlo: monteCarloResults,
        };
      }

      setResults(calculatorResults);
      setHasCalculated(true);
    } catch (error) {
      console.error('Calculation error:', error);
    } finally {
      setIsCalculating(false);
    }
  }, [simpleInputs, advancedInputs, currency]);

  const reset = useCallback(() => {
    setSimpleInputs(DEFAULT_SIMPLE);
    setAdvancedInputs(DEFAULT_ADVANCED);
    setCurrency('USD');
    setResults(computeInitialResults());
    setHasCalculated(false);
  }, []);

  return {
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
  };
}