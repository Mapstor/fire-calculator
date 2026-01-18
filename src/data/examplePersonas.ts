import { CalculatorInputs } from '@/types/calculator';

export const EXAMPLE_PERSONAS: Record<string, CalculatorInputs> = {
  freshGraduate: {
    currentAge: 23,
    retirementAge: 45,
    monthlyIncome: 4500,
    monthlyExpenses: 2800,
    currentSavings: 5000,
    currency: 'USD',
    advanced: {
      expectedReturn: 0.07,
      inflationRate: 0.03,
      withdrawalRate: 0.04,
      stockAllocation: 0.90,
      salaryGrowthRate: 0.03, // Higher for early career
      sideIncome: 0,
      windfall: 0,
      includeSocialSecurity: false,
      socialSecurityAmount: 0,
      socialSecurityStartAge: 67,
      includePension: false,
      pensionAmount: 0,
      pensionStartAge: 65,
      retirementSpending: null,
      runMonteCarlo: true,
    },
  },
  
  midCareer: {
    currentAge: 35,
    retirementAge: 50,
    monthlyIncome: 9500,
    monthlyExpenses: 5500,
    currentSavings: 85000,
    currency: 'USD',
    advanced: {
      expectedReturn: 0.07,
      inflationRate: 0.03,
      withdrawalRate: 0.04,
      stockAllocation: 0.85,
      salaryGrowthRate: 0.02,
      sideIncome: 0,
      windfall: 0,
      includeSocialSecurity: false,
      socialSecurityAmount: 0,
      socialSecurityStartAge: 67,
      includePension: false,
      pensionAmount: 0,
      pensionStartAge: 65,
      retirementSpending: null,
      runMonteCarlo: true,
    },
  },
  
  lateStarter: {
    currentAge: 45,
    retirementAge: 60,
    monthlyIncome: 8000,
    monthlyExpenses: 4500,
    currentSavings: 150000,
    currency: 'USD',
    advanced: {
      expectedReturn: 0.06, // More conservative
      inflationRate: 0.03,
      withdrawalRate: 0.04,
      stockAllocation: 0.70, // More conservative
      salaryGrowthRate: 0.01,
      sideIncome: 0,
      windfall: 0,
      includeSocialSecurity: true,
      socialSecurityAmount: 2200,
      socialSecurityStartAge: 67,
      includePension: false,
      pensionAmount: 0,
      pensionStartAge: 65,
      retirementSpending: 4000, // Reduced in retirement
      runMonteCarlo: true,
    },
  },
  
  coupleWithKids: {
    currentAge: 32,
    retirementAge: 50,
    monthlyIncome: 14000,
    monthlyExpenses: 9500,
    currentSavings: 120000,
    currency: 'USD',
    advanced: {
      expectedReturn: 0.07,
      inflationRate: 0.03,
      withdrawalRate: 0.04,
      stockAllocation: 0.85,
      salaryGrowthRate: 0.02,
      sideIncome: 500, // Rental income
      windfall: 0,
      includeSocialSecurity: false,
      socialSecurityAmount: 0,
      socialSecurityStartAge: 67,
      includePension: false,
      pensionAmount: 0,
      pensionStartAge: 65,
      retirementSpending: 6000, // No childcare
      runMonteCarlo: true,
    },
  },
  
  fatFire: {
    currentAge: 38,
    retirementAge: 50,
    monthlyIncome: 28000,
    monthlyExpenses: 12000,
    currentSavings: 750000,
    currency: 'USD',
    advanced: {
      expectedReturn: 0.07,
      inflationRate: 0.03,
      withdrawalRate: 0.035, // More conservative
      stockAllocation: 0.80,
      salaryGrowthRate: 0.03,
      sideIncome: 0,
      windfall: 200000, // Stock vesting
      includeSocialSecurity: false,
      socialSecurityAmount: 0,
      socialSecurityStartAge: 67,
      includePension: false,
      pensionAmount: 0,
      pensionStartAge: 65,
      retirementSpending: null,
      runMonteCarlo: true,
    },
  },
};