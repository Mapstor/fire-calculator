import { BaristaFireInputs, BaristaFireResults, BaristaFireProjection } from '@/types/baristaFire';
import { DEFAULTS } from './constants';

/**
 * Calculate the Barista FIRE number
 * This is the amount you need to start working part-time while your investments grow
 * The part-time income covers the gap between portfolio income and expenses
 */
export function calculateBaristaFireNumber(
  monthlyExpenses: number,
  monthlyPartTimeIncome: number,
  withdrawalRate: number = 0.04
): number {
  // Monthly income needed from portfolio = expenses - part-time income
  const monthlyPortfolioIncomeNeeded = Math.max(0, monthlyExpenses - monthlyPartTimeIncome);
  const annualPortfolioIncomeNeeded = monthlyPortfolioIncomeNeeded * 12;
  
  // Barista FIRE number = annual portfolio income needed / withdrawal rate
  return annualPortfolioIncomeNeeded / withdrawalRate;
}

/**
 * Calculate full FIRE number (traditional, no work needed)
 */
export function calculateFullFireNumber(
  annualExpenses: number,
  withdrawalRate: number = 0.04
): number {
  return annualExpenses / withdrawalRate;
}

/**
 * Calculate years to reach a target amount with contributions
 */
export function calculateYearsToTarget(
  currentAmount: number,
  targetAmount: number,
  annualContribution: number,
  realReturnRate: number
): number {
  if (currentAmount >= targetAmount) return 0;
  if (currentAmount <= 0 && annualContribution <= 0) return Infinity;
  
  let balance = currentAmount;
  let years = 0;
  const maxYears = 100;
  
  while (balance < targetAmount && years < maxYears) {
    balance = balance * (1 + realReturnRate) + annualContribution;
    years++;
  }
  
  return years >= maxYears ? Infinity : years;
}

/**
 * Generate projections for Barista FIRE journey
 */
export function generateBaristaFireProjections(
  inputs: BaristaFireInputs,
  baristaFireNumber: number,
  fullFireNumber: number
): BaristaFireProjection[] {
  const projections: BaristaFireProjection[] = [];
  const realReturn = (inputs.expectedReturn || 0.07) - (inputs.inflationRate || 0.03);
  const inflationRate = inputs.inflationRate || 0.03;
  const withdrawalRate = inputs.withdrawalRate || 0.04;
  
  const yearsToProject = inputs.targetRetirementAge - inputs.currentAge + 10;
  const yearsToBaristaStart = inputs.baristaStartAge - inputs.currentAge;
  const yearsOfBarista = inputs.targetRetirementAge - inputs.baristaStartAge;
  
  let assets = inputs.currentInvestments;
  const annualContribution = inputs.monthlyContribution * 12;
  
  for (let year = 0; year <= yearsToProject; year++) {
    const age = inputs.currentAge + year;
    let phase: 'saving' | 'barista' | 'retired';
    let monthlyIncome = 0;
    
    // Determine phase
    if (age < inputs.baristaStartAge) {
      phase = 'saving';
      // During saving phase, no income from portfolio
      monthlyIncome = 0;
    } else if (age < inputs.targetRetirementAge) {
      phase = 'barista';
      // During barista phase: part-time income + safe withdrawal from portfolio
      const portfolioIncome = (assets * withdrawalRate) / 12;
      monthlyIncome = inputs.expectedPartTimeIncome + portfolioIncome;
    } else {
      phase = 'retired';
      // During retirement: only portfolio income
      monthlyIncome = (assets * withdrawalRate) / 12;
    }
    
    // Inflation-adjusted expenses
    const monthlyExpenses = inputs.monthlyExpenses * Math.pow(1 + inflationRate, year);
    
    projections.push({
      age,
      year,
      phase,
      investedAssets: Math.round(assets),
      monthlyIncome: Math.round(monthlyIncome),
      monthlyExpenses: Math.round(monthlyExpenses),
    });
    
    // Update assets for next year
    if (phase === 'saving') {
      // Still accumulating
      assets = assets * (1 + realReturn) + annualContribution;
    } else if (phase === 'barista') {
      // Part-time work covers expenses, portfolio grows without withdrawal
      // Actually, we might withdraw a small amount if part-time doesn't cover all
      const annualShortfall = Math.max(0, 
        (monthlyExpenses - inputs.expectedPartTimeIncome) * 12
      );
      assets = assets * (1 + realReturn) - annualShortfall;
    } else {
      // Retired - withdrawing from portfolio
      const annualWithdrawal = monthlyExpenses * 12;
      assets = assets * (1 + realReturn) - annualWithdrawal;
    }
  }
  
  return projections;
}

/**
 * Main calculation function for Barista FIRE
 */
export function calculateBaristaFire(inputs: BaristaFireInputs): BaristaFireResults {
  const nominalReturn = inputs.expectedReturn || DEFAULTS.REAL_STOCK_RETURN + DEFAULTS.INFLATION_RATE;
  const inflation = inputs.inflationRate || DEFAULTS.INFLATION_RATE;
  const realReturn = nominalReturn - inflation;
  const withdrawalRate = inputs.withdrawalRate || DEFAULTS.SAFE_WITHDRAWAL_RATE;
  
  // Calculate expenses including health insurance if needed
  let adjustedMonthlyExpenses = inputs.monthlyExpenses;
  if (!inputs.includesHealthInsurance && inputs.healthInsuranceCost > 0) {
    adjustedMonthlyExpenses += inputs.healthInsuranceCost;
  }
  
  const annualExpenses = adjustedMonthlyExpenses * 12;
  
  // Calculate FIRE numbers
  const fullFireNumber = calculateFullFireNumber(annualExpenses, withdrawalRate);
  const baristaFireNumber = calculateBaristaFireNumber(
    adjustedMonthlyExpenses,
    inputs.expectedPartTimeIncome,
    withdrawalRate
  );
  
  // Check if already at Barista FIRE
  const hasReachedBaristaFire = inputs.currentInvestments >= baristaFireNumber;
  const currentProgress = (inputs.currentInvestments / baristaFireNumber) * 100;
  
  // Calculate years to Barista FIRE if still saving
  let yearsToBarista: number | null = null;
  let baristaAge: number | null = null;
  
  if (!hasReachedBaristaFire && inputs.monthlyContribution > 0) {
    yearsToBarista = calculateYearsToTarget(
      inputs.currentInvestments,
      baristaFireNumber,
      inputs.monthlyContribution * 12,
      realReturn
    );
    baristaAge = inputs.currentAge + yearsToBarista;
  } else if (hasReachedBaristaFire) {
    yearsToBarista = 0;
    baristaAge = inputs.currentAge;
  }
  
  // Calculate years to full FIRE (for comparison)
  const yearsToFullFire = calculateYearsToTarget(
    inputs.currentInvestments,
    fullFireNumber,
    inputs.monthlyContribution * 12,
    realReturn
  );
  
  // Years of part-time work
  const yearsOfPartTime = inputs.targetRetirementAge - (baristaAge || inputs.baristaStartAge);
  
  // Years saved vs full FIRE
  const yearsSavedVsFullFire = yearsToFullFire - (yearsToBarista || 0);
  
  // Monthly income calculations during Barista phase
  const monthlyPortfolioIncome = (baristaFireNumber * withdrawalRate) / 12;
  const totalMonthlyIncome = monthlyPortfolioIncome + inputs.expectedPartTimeIncome;
  const monthlyIncomeGap = adjustedMonthlyExpenses - monthlyPortfolioIncome;
  
  // Generate projections
  const projections = generateBaristaFireProjections(
    inputs,
    baristaFireNumber,
    fullFireNumber
  );
  
  return {
    fullFireNumber: Math.round(fullFireNumber),
    baristaFireNumber: Math.round(baristaFireNumber),
    currentProgress: Math.round(currentProgress * 10) / 10,
    hasReachedBaristaFire,
    yearsToBarista,
    baristaAge,
    yearsOfPartTime: Math.round(yearsOfPartTime),
    monthlyPortfolioIncome: Math.round(monthlyPortfolioIncome),
    monthlyIncomeGap: Math.round(monthlyIncomeGap),
    totalMonthlyIncome: Math.round(totalMonthlyIncome),
    yearsToFullFire: Math.round(yearsToFullFire),
    yearsSavedVsFullFire: Math.round(yearsSavedVsFullFire),
    projections,
  };
}