import { CoastFireInputs, CoastFireResults, CoastFireProjection } from '@/types/coastFire';
import { DEFAULTS } from './constants';

/**
 * Calculate the Coast FIRE number
 * This is the amount you need invested TODAY so that compound growth
 * will get you to your FIRE number by retirement age, without additional contributions.
 * 
 * Formula: CoastFI = FIRENumber / (1 + realReturn)^yearsUntilRetirement
 */
export function calculateCoastFireNumber(
  fireNumber: number,
  yearsUntilRetirement: number,
  realReturnRate: number = 0.05  // 7% return - 2% inflation = 5% real
): number {
  if (yearsUntilRetirement <= 0) return fireNumber;
  return fireNumber / Math.pow(1 + realReturnRate, yearsUntilRetirement);
}

/**
 * Calculate FIRE number from expenses and withdrawal rate
 */
export function calculateFireNumber(
  annualExpenses: number,
  withdrawalRate: number = 0.04
): number {
  return annualExpenses / withdrawalRate;
}

/**
 * Calculate years until current investments grow to target
 * Using compound growth formula solved for time
 */
export function calculateYearsToTarget(
  currentAmount: number,
  targetAmount: number,
  annualContribution: number,
  realReturnRate: number
): number {
  if (currentAmount >= targetAmount) return 0;
  if (currentAmount <= 0 && annualContribution <= 0) return Infinity;
  
  // Iterative approach for accuracy with contributions
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
 * Generate projections showing investment growth over time
 */
export function generateCoastFireProjections(
  inputs: CoastFireInputs,
  fireNumber: number
): CoastFireProjection[] {
  const projections: CoastFireProjection[] = [];
  const realReturn = (inputs.expectedReturn || 0.07) - (inputs.inflationRate || 0.03);
  const yearsToProject = Math.max(inputs.targetRetirementAge - inputs.currentAge + 10, 40);
  
  let assetsNoContrib = inputs.currentInvestments;
  let assetsWithContrib = inputs.currentInvestments;
  const annualContrib = (inputs.monthlyContribution || 0) * 12;
  
  for (let year = 0; year <= yearsToProject; year++) {
    const age = inputs.currentAge + year;
    const yearsUntilRetirement = Math.max(inputs.targetRetirementAge - age, 0);
    
    // Coast FIRE number decreases as you get closer to retirement
    const coastFireAtAge = yearsUntilRetirement > 0 
      ? calculateCoastFireNumber(fireNumber, yearsUntilRetirement, realReturn)
      : fireNumber;
    
    projections.push({
      age,
      year,
      investedAssets: Math.round(assetsNoContrib),
      investedAssetsWithContributions: Math.round(assetsWithContrib),
      coastFireLine: Math.round(coastFireAtAge),
      fireNumber: Math.round(fireNumber),
    });
    
    // Grow for next year
    assetsNoContrib = assetsNoContrib * (1 + realReturn);
    assetsWithContrib = assetsWithContrib * (1 + realReturn) + annualContrib;
  }
  
  return projections;
}

/**
 * Main calculation function for Coast FIRE
 */
export function calculateCoastFire(inputs: CoastFireInputs): CoastFireResults {
  // Calculate real return rate
  const nominalReturn = inputs.expectedReturn || DEFAULTS.REAL_STOCK_RETURN + DEFAULTS.INFLATION_RATE;
  const inflation = inputs.inflationRate || DEFAULTS.INFLATION_RATE;
  const realReturn = nominalReturn - inflation;
  const withdrawalRate = inputs.withdrawalRate || DEFAULTS.SAFE_WITHDRAWAL_RATE;
  
  // Calculate FIRE number
  const annualExpenses = inputs.monthlyExpenses * 12;
  const fireNumber = calculateFireNumber(annualExpenses, withdrawalRate);
  
  // Calculate Coast FIRE number (amount needed NOW)
  const yearsUntilRetirement = inputs.targetRetirementAge - inputs.currentAge;
  const coastFireNumber = calculateCoastFireNumber(fireNumber, yearsUntilRetirement, realReturn);
  
  // Check if already at Coast FIRE
  const hasReachedCoastFire = inputs.currentInvestments >= coastFireNumber;
  const currentProgress = (inputs.currentInvestments / coastFireNumber) * 100;
  const surplusAmount = inputs.currentInvestments - coastFireNumber;
  
  // Calculate when investments will reach full FIRE (without contributions)
  const yearsToFireFromNow = calculateYearsToTarget(
    inputs.currentInvestments,
    fireNumber,
    0, // No contributions - true coasting
    realReturn
  );
  const projectedFireAge = inputs.currentAge + yearsToFireFromNow;
  
  // Calculate years to Coast FIRE if still saving
  let yearsToCoastFire: number | null = null;
  let coastFireAge: number | null = null;
  
  if (!hasReachedCoastFire && inputs.monthlyContribution > 0) {
    // This is tricky - Coast FI number decreases as you age
    // We need to find when assets >= coastFireNumber at that age
    let balance = inputs.currentInvestments;
    const annualContrib = inputs.monthlyContribution * 12;
    
    for (let year = 1; year <= 50; year++) {
      balance = balance * (1 + realReturn) + annualContrib;
      const futureCoastNumber = calculateCoastFireNumber(
        fireNumber, 
        yearsUntilRetirement - year, 
        realReturn
      );
      
      if (balance >= futureCoastNumber) {
        yearsToCoastFire = year;
        coastFireAge = inputs.currentAge + year;
        break;
      }
    }
  } else if (hasReachedCoastFire) {
    yearsToCoastFire = 0;
    coastFireAge = inputs.currentAge;
  }
  
  // Inflation-adjusted expenses at retirement
  const monthlyExpensesAtRetirement = inputs.monthlyExpenses * 
    Math.pow(1 + inflation, yearsUntilRetirement);
  
  // Generate projections
  const projections = generateCoastFireProjections(inputs, fireNumber);
  
  return {
    fireNumber: Math.round(fireNumber),
    coastFireNumber: Math.round(coastFireNumber),
    currentProgress: Math.round(currentProgress * 10) / 10,
    hasReachedCoastFire,
    yearsToCoastFire,
    coastFireAge,
    projectedFireAge: Math.round(projectedFireAge * 10) / 10,
    yearsUntilFire: Math.round(yearsToFireFromNow * 10) / 10,
    monthlyExpensesAtRetirement: Math.round(monthlyExpensesAtRetirement),
    surplusAmount: Math.round(surplusAmount),
    projections,
  };
}