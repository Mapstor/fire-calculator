'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CalculatorInputs, SimpleInputs, AdvancedInputs, CurrencyCode } from '@/types/calculator';
import { DEFAULTS } from '@/lib/constants';

export function encodeParams(inputs: CalculatorInputs): string {
  const params = new URLSearchParams();
  
  // Simple inputs
  params.set('age', inputs.currentAge.toString());
  params.set('ret', inputs.retirementAge.toString());
  params.set('inc', inputs.monthlyIncome.toString());
  params.set('exp', inputs.monthlyExpenses.toString());
  params.set('sav', inputs.currentSavings.toString());
  params.set('cur', inputs.currency);
  
  // Advanced inputs (only if different from defaults)
  const { advanced } = inputs;
  if (advanced.expectedReturn !== DEFAULTS.BLENDED_RETURN) {
    params.set('rtn', (advanced.expectedReturn * 100).toFixed(1));
  }
  if (advanced.inflationRate !== DEFAULTS.INFLATION_RATE) {
    params.set('inf', (advanced.inflationRate * 100).toFixed(1));
  }
  if (advanced.withdrawalRate !== DEFAULTS.SAFE_WITHDRAWAL_RATE) {
    params.set('wdr', (advanced.withdrawalRate * 100).toFixed(1));
  }
  if (advanced.stockAllocation !== DEFAULTS.STOCK_ALLOCATION) {
    params.set('stk', (advanced.stockAllocation * 100).toFixed(0));
  }
  if (advanced.salaryGrowthRate !== DEFAULTS.SALARY_GROWTH_RATE) {
    params.set('grw', (advanced.salaryGrowthRate * 100).toFixed(1));
  }
  if (advanced.sideIncome > 0) {
    params.set('sid', advanced.sideIncome.toString());
  }
  if (advanced.windfall > 0) {
    params.set('wnd', advanced.windfall.toString());
  }
  if (advanced.includeSocialSecurity && advanced.socialSecurityAmount > 0) {
    params.set('ss', advanced.socialSecurityAmount.toString());
    params.set('ssa', advanced.socialSecurityStartAge.toString());
  }
  if (advanced.includePension && advanced.pensionAmount > 0) {
    params.set('pen', advanced.pensionAmount.toString());
    params.set('pna', advanced.pensionStartAge.toString());
  }
  if (advanced.retirementSpending !== null) {
    params.set('rsp', advanced.retirementSpending.toString());
  }
  
  return params.toString();
}

export function decodeParams(searchParams: URLSearchParams): Partial<CalculatorInputs> | null {
  const age = searchParams.get('age');
  const ret = searchParams.get('ret');
  const inc = searchParams.get('inc');
  const exp = searchParams.get('exp');
  const sav = searchParams.get('sav');
  const cur = searchParams.get('cur');
  
  // Require at least the basic params
  if (!age || !ret || !inc || !exp || !sav) {
    return null;
  }
  
  const simpleInputs: SimpleInputs = {
    currentAge: parseInt(age),
    retirementAge: parseInt(ret),
    monthlyIncome: parseFloat(inc),
    monthlyExpenses: parseFloat(exp),
    currentSavings: parseFloat(sav),
  };
  
  const advancedInputs: AdvancedInputs = {
    expectedReturn: searchParams.has('rtn') 
      ? parseFloat(searchParams.get('rtn')!) / 100 
      : DEFAULTS.BLENDED_RETURN,
    inflationRate: searchParams.has('inf')
      ? parseFloat(searchParams.get('inf')!) / 100
      : DEFAULTS.INFLATION_RATE,
    withdrawalRate: searchParams.has('wdr')
      ? parseFloat(searchParams.get('wdr')!) / 100
      : DEFAULTS.SAFE_WITHDRAWAL_RATE,
    stockAllocation: searchParams.has('stk')
      ? parseFloat(searchParams.get('stk')!) / 100
      : DEFAULTS.STOCK_ALLOCATION,
    salaryGrowthRate: searchParams.has('grw')
      ? parseFloat(searchParams.get('grw')!) / 100
      : DEFAULTS.SALARY_GROWTH_RATE,
    sideIncome: searchParams.has('sid')
      ? parseFloat(searchParams.get('sid')!)
      : 0,
    windfall: searchParams.has('wnd')
      ? parseFloat(searchParams.get('wnd')!)
      : 0,
    includeSocialSecurity: searchParams.has('ss'),
    socialSecurityAmount: searchParams.has('ss')
      ? parseFloat(searchParams.get('ss')!)
      : 0,
    socialSecurityStartAge: searchParams.has('ssa')
      ? parseInt(searchParams.get('ssa')!)
      : DEFAULTS.SOCIAL_SECURITY_AGE,
    includePension: searchParams.has('pen'),
    pensionAmount: searchParams.has('pen')
      ? parseFloat(searchParams.get('pen')!)
      : 0,
    pensionStartAge: searchParams.has('pna')
      ? parseInt(searchParams.get('pna')!)
      : DEFAULTS.TRADITIONAL_RETIREMENT_AGE,
    retirementSpending: searchParams.has('rsp')
      ? parseFloat(searchParams.get('rsp')!)
      : null,
    runMonteCarlo: false,
  };
  
  return {
    ...simpleInputs,
    advanced: advancedInputs,
    currency: (cur as CurrencyCode) || 'USD',
  };
}

export function useUrlParams() {
  const searchParams = useSearchParams();
  
  const getShareableUrl = (inputs: CalculatorInputs): string => {
    const params = encodeParams(inputs);
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    return `${baseUrl}?${params}`;
  };
  
  const loadFromUrl = (): Partial<CalculatorInputs> | null => {
    return decodeParams(searchParams);
  };
  
  return {
    getShareableUrl,
    loadFromUrl,
  };
}