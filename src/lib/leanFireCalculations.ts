import { LeanFireInputs, LeanFireResults, LeanFireProjection, BudgetCategory } from '@/types/leanFire';
import { DEFAULTS } from './constants';

/**
 * Calculate the Lean FIRE number
 * Typically targets $40K or less in annual spending
 */
export function calculateLeanFireNumber(
  annualSpending: number,
  withdrawalRate: number = 0.04
): number {
  // Cap at $40K for true Lean FIRE
  const cappedSpending = Math.min(annualSpending, 40000);
  return cappedSpending / withdrawalRate;
}

/**
 * Calculate Regular FIRE number for comparison
 */
export function calculateRegularFireNumber(
  withdrawalRate: number = 0.04
): number {
  const regularAnnualSpending = 60000; // $60K/year for regular FIRE
  return regularAnnualSpending / withdrawalRate;
}

/**
 * Calculate years to reach target
 */
export function calculateYearsToTarget(
  currentAmount: number,
  targetAmount: number,
  monthlyContribution: number,
  annualReturn: number
): number {
  if (currentAmount >= targetAmount) return 0;
  
  const monthlyReturn = annualReturn / 12;
  let balance = currentAmount;
  let months = 0;
  const maxMonths = 600; // 50 years max
  
  while (balance < targetAmount && months < maxMonths) {
    balance = balance * (1 + monthlyReturn) + monthlyContribution;
    months++;
  }
  
  return months >= maxMonths ? Infinity : months / 12;
}

/**
 * Calculate savings rate
 */
export function calculateSavingsRate(
  monthlyIncome: number,
  monthlyContribution: number
): number {
  if (monthlyIncome <= 0) return 0;
  return (monthlyContribution / monthlyIncome) * 100;
}

/**
 * Calculate required savings rate to reach Lean FIRE by target age
 */
export function calculateRequiredSavingsRate(
  currentAge: number,
  targetAge: number,
  currentInvestments: number,
  leanFireNumber: number,
  monthlyIncome: number,
  annualReturn: number
): number {
  const yearsToTarget = targetAge - currentAge;
  if (yearsToTarget <= 0) return 0;
  
  const monthsToTarget = yearsToTarget * 12;
  const monthlyReturn = annualReturn / 12;
  
  const futureValueOfCurrent = currentInvestments * Math.pow(1 + monthlyReturn, monthsToTarget);
  const remainingNeeded = leanFireNumber - futureValueOfCurrent;
  
  if (remainingNeeded <= 0) return 0;
  
  const monthlyContributionNeeded = remainingNeeded / 
    ((Math.pow(1 + monthlyReturn, monthsToTarget) - 1) / monthlyReturn);
  
  return Math.min(100, (monthlyContributionNeeded / monthlyIncome) * 100);
}

/**
 * Assess budget feasibility
 */
export function assessBudgetFeasibility(
  targetMonthly: number,
  currentMonthly: number
): 'easy' | 'moderate' | 'challenging' | 'very-challenging' {
  const reductionNeeded = ((currentMonthly - targetMonthly) / currentMonthly) * 100;
  
  if (targetMonthly >= currentMonthly) return 'easy';
  if (reductionNeeded <= 20) return 'moderate';
  if (reductionNeeded <= 40) return 'challenging';
  return 'very-challenging';
}

/**
 * Calculate flexibility score
 */
export function calculateFlexibilityScore(
  hasEmergencyFund: boolean,
  emergencyFundMonths: number,
  geoArbitrage: boolean,
  savingsRate: number
): number {
  let score = 50; // Base score
  
  if (hasEmergencyFund) {
    score += Math.min(20, emergencyFundMonths * 2);
  }
  
  if (geoArbitrage) {
    score += 15;
  }
  
  if (savingsRate > 50) {
    score += 15;
  } else if (savingsRate > 30) {
    score += 10;
  }
  
  return Math.min(100, score);
}

/**
 * Generate budget breakdown
 */
export function generateBudgetBreakdown(inputs: LeanFireInputs): BudgetCategory[] {
  const total = inputs.targetMonthlySpending;
  
  // Use provided values or calculate defaults
  const housing = inputs.housingCost || total * 0.35;
  const food = inputs.foodBudget || total * 0.20;
  const transportation = inputs.transportationCost || total * 0.15;
  const healthcare = inputs.healthcareCost || total * 0.10;
  const other = inputs.otherEssentials || (total - housing - food - transportation - healthcare);
  
  return [
    {
      name: 'Housing',
      monthlyAmount: housing,
      annualAmount: housing * 12,
      percentOfTotal: (housing / total) * 100,
      isOptimized: housing <= total * 0.30,
    },
    {
      name: 'Food',
      monthlyAmount: food,
      annualAmount: food * 12,
      percentOfTotal: (food / total) * 100,
      isOptimized: food <= total * 0.15,
    },
    {
      name: 'Transportation',
      monthlyAmount: transportation,
      annualAmount: transportation * 12,
      percentOfTotal: (transportation / total) * 100,
      isOptimized: transportation <= total * 0.10,
    },
    {
      name: 'Healthcare',
      monthlyAmount: healthcare,
      annualAmount: healthcare * 12,
      percentOfTotal: (healthcare / total) * 100,
      isOptimized: healthcare <= total * 0.15,
    },
    {
      name: 'Other Essentials',
      monthlyAmount: other,
      annualAmount: other * 12,
      percentOfTotal: (other / total) * 100,
      isOptimized: other <= total * 0.25,
    },
  ].filter(cat => cat.monthlyAmount > 0);
}

/**
 * Generate projections for Lean FIRE journey
 */
export function generateLeanFireProjections(
  inputs: LeanFireInputs,
  leanFireNumber: number
): LeanFireProjection[] {
  const projections: LeanFireProjection[] = [];
  const realReturn = (inputs.expectedReturn || 0.07) - (inputs.inflationRate || 0.03);
  const inflationRate = inputs.inflationRate || 0.03;
  const withdrawalRate = inputs.withdrawalRate || 0.04;
  
  const yearsToProject = Math.min(50, (inputs.targetRetirementAge - inputs.currentAge) + 20);
  
  let assets = inputs.currentInvestments;
  const monthlyContribution = inputs.monthlyContribution;
  const monthlyReturn = inputs.expectedReturn / 12;
  
  let leanFireReached = false;
  
  for (let year = 0; year <= yearsToProject; year++) {
    const age = inputs.currentAge + year;
    const targetSpending = inputs.targetMonthlySpending * 12 * Math.pow(1 + inflationRate, year);
    const passiveIncome = assets * withdrawalRate;
    const phase = assets >= leanFireNumber ? 'lean-fire' : 'accumulation';
    
    if (!leanFireReached && assets >= leanFireNumber) {
      leanFireReached = true;
    }
    
    projections.push({
      age,
      year,
      investedAssets: Math.round(assets),
      passiveIncome: Math.round(passiveIncome),
      targetSpending: Math.round(targetSpending),
      phase,
    });
    
    // Update assets for next year
    if (age < inputs.targetRetirementAge && phase === 'accumulation') {
      // Still accumulating
      assets = assets * (1 + monthlyReturn) + monthlyContribution * 12;
    } else {
      // Retired - withdrawing
      assets = assets * (1 + realReturn) - targetSpending;
    }
  }
  
  return projections;
}

/**
 * Main calculation function for Lean FIRE
 */
export function calculateLeanFire(inputs: LeanFireInputs): LeanFireResults {
  const nominalReturn = inputs.expectedReturn || DEFAULTS.STOCK_RETURN;
  const inflation = inputs.inflationRate || DEFAULTS.INFLATION_RATE;
  const withdrawalRate = inputs.withdrawalRate || DEFAULTS.SAFE_WITHDRAWAL_RATE;
  
  // Calculate FIRE numbers
  const annualSpendingTarget = Math.min(inputs.targetMonthlySpending * 12, 40000);
  const leanFireNumber = calculateLeanFireNumber(annualSpendingTarget, withdrawalRate);
  const regularFireNumber = calculateRegularFireNumber(withdrawalRate);
  
  // Apply geographic arbitrage if applicable
  const geoArbitrageFactor = inputs.considerGeoArbitrage ? 
    (1 - inputs.geoArbitrageSavings / 100) : 1;
  const adjustedFireNumber = leanFireNumber * geoArbitrageFactor;
  
  // Check current status
  const hasReachedLeanFire = inputs.currentInvestments >= adjustedFireNumber;
  const currentProgress = (inputs.currentInvestments / adjustedFireNumber) * 100;
  
  // Calculate timeline
  const yearsToLeanFire = calculateYearsToTarget(
    inputs.currentInvestments,
    adjustedFireNumber,
    inputs.monthlyContribution,
    nominalReturn
  );
  const leanFireAge = inputs.currentAge + yearsToLeanFire;
  
  const yearsToRegularFire = calculateYearsToTarget(
    inputs.currentInvestments,
    regularFireNumber,
    inputs.monthlyContribution,
    nominalReturn
  );
  
  // Calculate savings rates
  const currentSavingsRate = calculateSavingsRate(
    inputs.monthlyIncome,
    inputs.monthlyContribution
  );
  
  const requiredSavingsRate = calculateRequiredSavingsRate(
    inputs.currentAge,
    inputs.targetRetirementAge,
    inputs.currentInvestments,
    adjustedFireNumber,
    inputs.monthlyIncome,
    nominalReturn
  );
  
  // Financial details
  const monthlyPassiveIncome = (adjustedFireNumber * withdrawalRate) / 12;
  const monthlyBudgetGap = inputs.currentMonthlyExpenses - inputs.targetMonthlySpending;
  
  // Comparison metrics
  const yearsVsRegularFire = yearsToRegularFire - yearsToLeanFire;
  const amountVsRegularFire = regularFireNumber - leanFireNumber;
  
  // Assess feasibility
  const budgetFeasibility = assessBudgetFeasibility(
    inputs.targetMonthlySpending,
    inputs.currentMonthlyExpenses
  );
  
  // Geographic arbitrage impact
  const geoArbitrageImpact = inputs.considerGeoArbitrage ? 
    yearsToLeanFire - calculateYearsToTarget(
      inputs.currentInvestments,
      leanFireNumber,
      inputs.monthlyContribution,
      nominalReturn
    ) : 0;
  
  // Risk metrics
  const safetyCushion = inputs.hasEmergencyFund ? 
    (inputs.emergencyFundMonths / 6) * 100 : 0;
  
  const flexibilityScore = calculateFlexibilityScore(
    inputs.hasEmergencyFund,
    inputs.emergencyFundMonths,
    inputs.considerGeoArbitrage,
    currentSavingsRate
  );
  
  // Generate projections and breakdown
  const projections = generateLeanFireProjections(inputs, adjustedFireNumber);
  const budgetBreakdown = generateBudgetBreakdown(inputs);
  
  return {
    leanFireNumber: Math.round(leanFireNumber),
    currentProgress: Math.round(currentProgress * 10) / 10,
    hasReachedLeanFire,
    yearsToLeanFire: Math.round(yearsToLeanFire * 10) / 10,
    leanFireAge: Math.round(leanFireAge),
    annualSpendingTarget: Math.round(annualSpendingTarget),
    monthlyPassiveIncome: Math.round(monthlyPassiveIncome),
    currentSavingsRate: Math.round(currentSavingsRate),
    requiredSavingsRate: Math.round(requiredSavingsRate),
    yearsVsRegularFire: Math.round(yearsVsRegularFire * 10) / 10,
    amountVsRegularFire: Math.round(amountVsRegularFire),
    budgetFeasibility,
    monthlyBudgetGap: Math.round(monthlyBudgetGap),
    geoArbitrageImpact: Math.round(Math.abs(geoArbitrageImpact) * 10) / 10,
    adjustedFireNumber: Math.round(adjustedFireNumber),
    safetyCushion: Math.round(safetyCushion),
    flexibilityScore: Math.round(flexibilityScore),
    projections,
    budgetBreakdown,
  };
}