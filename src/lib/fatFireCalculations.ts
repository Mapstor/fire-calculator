import { FatFireInputs, FatFireResults, FatFireProjection, LifestyleCategory } from '@/types/fatFire';
import { DEFAULTS } from './constants';

/**
 * Calculate the Fat FIRE number
 * Uses a more conservative withdrawal rate for luxury lifestyle sustainability
 */
export function calculateFatFireNumber(
  annualSpending: number,
  withdrawalRate: number = 0.035 // 3.5% is more conservative for Fat FIRE
): number {
  return annualSpending / withdrawalRate;
}

/**
 * Calculate Lean FIRE number for comparison
 */
export function calculateLeanFireNumber(withdrawalRate: number = 0.04): number {
  const leanAnnualSpending = 40000; // $40K/year for lean FIRE
  return leanAnnualSpending / withdrawalRate;
}

/**
 * Calculate Regular FIRE number for comparison
 */
export function calculateRegularFireNumber(withdrawalRate: number = 0.04): number {
  const regularAnnualSpending = 60000; // $60K/year for regular FIRE
  return regularAnnualSpending / withdrawalRate;
}

/**
 * Calculate years to reach a target amount
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
 * Calculate current savings rate
 */
export function calculateSavingsRate(
  monthlyIncome: number,
  monthlyContribution: number
): number {
  if (monthlyIncome <= 0) return 0;
  return (monthlyContribution / monthlyIncome) * 100;
}

/**
 * Calculate required savings rate to reach Fat FIRE by target age
 */
export function calculateRequiredSavingsRate(
  currentAge: number,
  targetAge: number,
  currentInvestments: number,
  fatFireNumber: number,
  monthlyIncome: number,
  annualReturn: number
): number {
  const yearsToTarget = targetAge - currentAge;
  if (yearsToTarget <= 0) return 0;
  
  const monthsToTarget = yearsToTarget * 12;
  const monthlyReturn = annualReturn / 12;
  
  // Calculate required monthly contribution using future value formula
  const futureValueOfCurrent = currentInvestments * Math.pow(1 + monthlyReturn, monthsToTarget);
  const remainingNeeded = fatFireNumber - futureValueOfCurrent;
  
  if (remainingNeeded <= 0) return 0;
  
  // Calculate monthly contribution needed
  const monthlyContributionNeeded = remainingNeeded / 
    ((Math.pow(1 + monthlyReturn, monthsToTarget) - 1) / monthlyReturn);
  
  return Math.min(100, (monthlyContributionNeeded / monthlyIncome) * 100);
}

/**
 * Generate lifestyle breakdown
 */
export function generateLifestyleBreakdown(inputs: FatFireInputs): LifestyleCategory[] {
  const totalMonthly = inputs.desiredMonthlySpending;
  
  // Default breakdown if not specified
  const housing = inputs.housingBudget || totalMonthly * 0.25;
  const travel = inputs.travelBudget / 12 || totalMonthly * 0.20;
  const healthcare = inputs.healthcareBudget || totalMonthly * 0.10;
  const entertainment = inputs.entertainmentBudget || totalMonthly * 0.15;
  const other = totalMonthly - housing - travel - healthcare - entertainment;
  
  return [
    {
      name: 'Housing & Property',
      monthlyAmount: housing,
      annualAmount: housing * 12,
      percentOfTotal: (housing / totalMonthly) * 100,
      icon: '🏡',
    },
    {
      name: 'Travel & Experiences',
      monthlyAmount: travel,
      annualAmount: travel * 12,
      percentOfTotal: (travel / totalMonthly) * 100,
      icon: '✈️',
    },
    {
      name: 'Healthcare & Insurance',
      monthlyAmount: healthcare,
      annualAmount: healthcare * 12,
      percentOfTotal: (healthcare / totalMonthly) * 100,
      icon: '🏥',
    },
    {
      name: 'Entertainment & Dining',
      monthlyAmount: entertainment,
      annualAmount: entertainment * 12,
      percentOfTotal: (entertainment / totalMonthly) * 100,
      icon: '🍽️',
    },
    {
      name: 'Other Expenses',
      monthlyAmount: other,
      annualAmount: other * 12,
      percentOfTotal: (other / totalMonthly) * 100,
      icon: '💳',
    },
  ].filter(cat => cat.monthlyAmount > 0);
}

/**
 * Generate projections for Fat FIRE journey
 */
export function generateFatFireProjections(
  inputs: FatFireInputs,
  fatFireNumber: number,
  leanFireNumber: number,
  regularFireNumber: number
): FatFireProjection[] {
  const projections: FatFireProjection[] = [];
  const realReturn = (inputs.expectedReturn || 0.07) - (inputs.inflationRate || 0.03);
  const inflationRate = inputs.inflationRate || 0.03;
  const withdrawalRate = inputs.withdrawalRate || 0.035;
  
  const yearsToProject = Math.min(50, (inputs.targetRetirementAge - inputs.currentAge) + 20);
  
  let assets = inputs.currentInvestments;
  const monthlyContribution = inputs.monthlyContribution;
  const monthlyReturn = inputs.expectedReturn / 12;
  
  let leanFireReached = false;
  let regularFireReached = false;
  let fatFireReached = false;
  
  for (let year = 0; year <= yearsToProject; year++) {
    const age = inputs.currentAge + year;
    const targetSpending = inputs.desiredMonthlySpending * 12 * Math.pow(1 + inflationRate, year);
    const passiveIncome = assets * withdrawalRate;
    
    // Check for milestones
    let milestone: 'lean' | 'regular' | 'fat' | undefined;
    if (!leanFireReached && assets >= leanFireNumber) {
      leanFireReached = true;
      milestone = 'lean';
    } else if (!regularFireReached && assets >= regularFireNumber) {
      regularFireReached = true;
      milestone = 'regular';
    } else if (!fatFireReached && assets >= fatFireNumber) {
      fatFireReached = true;
      milestone = 'fat';
    }
    
    projections.push({
      age,
      year,
      investedAssets: Math.round(assets),
      passiveIncome: Math.round(passiveIncome),
      targetSpending: Math.round(targetSpending),
      milestone,
    });
    
    // Update assets for next year
    if (age < inputs.targetRetirementAge) {
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
 * Calculate success probability based on conservative metrics
 */
export function calculateSuccessProbability(
  yearsToFatFire: number,
  currentSavingsRate: number,
  withdrawalRate: number
): number {
  // Simple heuristic based on key factors
  let probability = 95; // Base probability
  
  // Adjust based on timeline
  if (yearsToFatFire > 30) probability -= 10;
  else if (yearsToFatFire < 10) probability += 5;
  
  // Adjust based on savings rate
  if (currentSavingsRate < 30) probability -= 15;
  else if (currentSavingsRate > 60) probability += 5;
  
  // Adjust based on withdrawal rate
  if (withdrawalRate > 0.04) probability -= 10;
  else if (withdrawalRate <= 0.035) probability += 5;
  
  return Math.max(0, Math.min(100, probability));
}

/**
 * Main calculation function for Fat FIRE
 */
export function calculateFatFire(inputs: FatFireInputs): FatFireResults {
  const nominalReturn = inputs.expectedReturn || DEFAULTS.STOCK_RETURN;
  const inflation = inputs.inflationRate || DEFAULTS.INFLATION_RATE;
  const withdrawalRate = inputs.withdrawalRate || 0.035; // More conservative for Fat FIRE
  
  // Calculate FIRE numbers
  const annualSpendingTarget = inputs.desiredMonthlySpending * 12;
  const fatFireNumber = calculateFatFireNumber(annualSpendingTarget, withdrawalRate);
  const leanFireNumber = calculateLeanFireNumber(withdrawalRate);
  const regularFireNumber = calculateRegularFireNumber(withdrawalRate);
  
  // Check current status
  const hasReachedFatFire = inputs.currentInvestments >= fatFireNumber;
  const currentProgress = (inputs.currentInvestments / fatFireNumber) * 100;
  
  // Calculate timeline
  const yearsToFatFire = calculateYearsToTarget(
    inputs.currentInvestments,
    fatFireNumber,
    inputs.monthlyContribution,
    nominalReturn
  );
  const fatFireAge = inputs.currentAge + yearsToFatFire;
  
  const yearsToLeanFire = calculateYearsToTarget(
    inputs.currentInvestments,
    leanFireNumber,
    inputs.monthlyContribution,
    nominalReturn
  );
  
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
    fatFireNumber,
    inputs.monthlyIncome,
    nominalReturn
  );
  
  // Calculate passive income
  const monthlyPassiveIncome = (fatFireNumber * withdrawalRate) / 12;
  
  // Safety metrics
  const bufferAmount = inputs.currentInvestments > fatFireNumber ? 
    inputs.currentInvestments - fatFireNumber : 0;
  
  const successProbability = calculateSuccessProbability(
    yearsToFatFire,
    currentSavingsRate,
    withdrawalRate
  );
  
  // Generate projections and breakdown
  const projections = generateFatFireProjections(
    inputs,
    fatFireNumber,
    leanFireNumber,
    regularFireNumber
  );
  
  const lifestyleBreakdown = generateLifestyleBreakdown(inputs);
  
  return {
    fatFireNumber: Math.round(fatFireNumber),
    currentProgress: Math.round(currentProgress * 10) / 10,
    hasReachedFatFire,
    yearsToFatFire: Math.round(yearsToFatFire * 10) / 10,
    fatFireAge: Math.round(fatFireAge),
    annualSpendingTarget: Math.round(annualSpendingTarget),
    monthlyPassiveIncome: Math.round(monthlyPassiveIncome),
    currentSavingsRate: Math.round(currentSavingsRate),
    requiredSavingsRate: Math.round(requiredSavingsRate),
    leanFireNumber: Math.round(leanFireNumber),
    regularFireNumber: Math.round(regularFireNumber),
    yearsToLeanFire: Math.round(yearsToLeanFire * 10) / 10,
    yearsToRegularFire: Math.round(yearsToRegularFire * 10) / 10,
    successProbability: Math.round(successProbability),
    bufferAmount: Math.round(bufferAmount),
    projections,
    lifestyleBreakdown,
  };
}