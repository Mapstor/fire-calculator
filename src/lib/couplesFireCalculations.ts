import { 
  CouplesFireInputs, 
  CouplesFireResults, 
  CouplesFireProjection,
  CouplesFireMilestone,
  SingleIncomeScenario,
  StaggeredRetirement 
} from '@/types/couplesFire';
import { DEFAULTS } from './constants';

/**
 * Calculate the combined FIRE number for a couple
 */
export function calculateCouplesFireNumber(
  annualSpending: number,
  withdrawalRate: number = 0.04
): number {
  return annualSpending / withdrawalRate;
}

/**
 * Calculate tax savings from married filing jointly
 */
export function calculateTaxSavings(
  partner1Income: number,
  partner2Income: number,
  filingStatus: string
): number {
  if (filingStatus !== 'married-jointly') return 0;
  
  // Simplified tax calculation - actual would be more complex
  const combinedIncome = partner1Income + partner2Income;
  const standardDeduction = 27700; // 2024 married filing jointly
  const taxableIncome = Math.max(0, combinedIncome - standardDeduction);
  
  // Rough estimate of tax savings (very simplified)
  const marginalRate = taxableIncome > 190000 ? 0.24 : 
                       taxableIncome > 90000 ? 0.22 : 0.12;
  
  return marginalRate * standardDeduction * 0.3; // Rough savings estimate
}

/**
 * Calculate expense savings from sharing
 */
export function calculateSharedExpenseSavings(
  monthlyExpenses: number
): number {
  // Couples typically save 20-30% on per-person expenses
  const singlePersonEquivalent = monthlyExpenses / 1.7; // 1.7x factor for couple vs single
  const savingsPerPerson = (monthlyExpenses / 2) - singlePersonEquivalent;
  return Math.max(0, -savingsPerPerson * 2); // Total monthly savings
}

/**
 * Calculate years to FIRE for couple
 */
export function calculateYearsToFire(
  currentAssets: number,
  targetAmount: number,
  annualSavings: number,
  annualReturn: number
): number {
  if (currentAssets >= targetAmount) return 0;
  
  let balance = currentAssets;
  let years = 0;
  const maxYears = 50;
  
  while (balance < targetAmount && years < maxYears) {
    balance = balance * (1 + annualReturn) + annualSavings;
    years++;
  }
  
  return years >= maxYears ? Infinity : years;
}

/**
 * Calculate single income scenarios
 */
export function calculateSingleIncomeScenario(
  inputs: CouplesFireInputs,
  fireNumber: number,
  realReturn: number
): SingleIncomeScenario {
  const currentAssets = inputs.partner1CurrentSavings + 
                        inputs.partner2CurrentSavings + 
                        inputs.sharedAssets;
  
  // Scenario 1: Only Partner 1 working
  const partner1OnlySavings = Math.max(0, 
    inputs.partner1Income - (inputs.combinedMonthlyExpenses * 12)
  );
  const yearsToFirePartner1Only = calculateYearsToFire(
    currentAssets,
    fireNumber,
    partner1OnlySavings,
    realReturn
  );
  
  // Scenario 2: Only Partner 2 working
  const partner2OnlySavings = Math.max(0,
    inputs.partner2Income - (inputs.combinedMonthlyExpenses * 12)
  );
  const yearsToFirePartner2Only = calculateYearsToFire(
    currentAssets,
    fireNumber,
    partner2OnlySavings,
    realReturn
  );
  
  const criticalPartner = inputs.partner1Income > inputs.partner2Income ? 
    'partner1' : 'partner2';
  
  const viableWithSingleIncome = 
    yearsToFirePartner1Only < Infinity || yearsToFirePartner2Only < Infinity;
  
  return {
    yearsToFirePartner1Only,
    yearsToFirePartner2Only,
    criticalPartner,
    viableWithSingleIncome,
  };
}

/**
 * Calculate staggered retirement scenario
 */
export function calculateStaggeredRetirement(
  inputs: CouplesFireInputs,
  fireNumber: number
): StaggeredRetirement {
  const partner1RetireFirst = inputs.partner1RetirementAge < inputs.partner2RetirementAge;
  const yearsApart = Math.abs(inputs.partner1RetirementAge - inputs.partner2RetirementAge);
  
  // Calculate bridge financing needed
  const earlyRetireeExpenses = inputs.combinedMonthlyExpenses * 0.6; // Rough estimate
  const bridgeFinancing = earlyRetireeExpenses * 12 * yearsApart;
  
  // Check health insurance gap
  const healthInsuranceGap = inputs.healthInsuranceProvider === 'partner1' ? 
    !partner1RetireFirst : 
    inputs.healthInsuranceProvider === 'partner2' ? 
    partner1RetireFirst : false;
  
  return {
    partner1RetireFirst,
    yearsApart,
    bridgeFinancing,
    healthInsuranceGap,
  };
}

/**
 * Generate projections for couples FIRE
 */
export function generateCouplesProjections(
  inputs: CouplesFireInputs,
  fireNumber: number
): CouplesFireProjection[] {
  const projections: CouplesFireProjection[] = [];
  const realReturn = (inputs.expectedReturn || 0.07) - (inputs.inflationRate || 0.03);
  const inflationRate = inputs.inflationRate || 0.03;
  const withdrawalRate = inputs.withdrawalRate || 0.04;
  
  const averageAge = (inputs.partner1Age + inputs.partner2Age) / 2;
  const yearsToProject = Math.max(
    inputs.partner1RetirementAge - inputs.partner1Age,
    inputs.partner2RetirementAge - inputs.partner2Age
  ) + 20;
  
  let partner1Assets = inputs.partner1CurrentSavings;
  let partner2Assets = inputs.partner2CurrentSavings;
  let sharedAssets = inputs.sharedAssets;
  
  const annualSavings = inputs.combinedMonthlySavings * 12;
  const partner1SaveRate = inputs.partner1Income / (inputs.partner1Income + inputs.partner2Income);
  const partner2SaveRate = 1 - partner1SaveRate;
  
  for (let year = 0; year <= yearsToProject; year++) {
    const currentAverageAge = averageAge + year;
    const partner1CurrentAge = inputs.partner1Age + year;
    const partner2CurrentAge = inputs.partner2Age + year;
    
    const combinedAssets = partner1Assets + partner2Assets + sharedAssets;
    const targetSpending = inputs.retirementSpendingTarget * 12 * Math.pow(1 + inflationRate, year);
    const passiveIncome = combinedAssets * withdrawalRate;
    
    // Determine phase
    let phase: 'accumulation' | 'partial-retirement' | 'full-retirement';
    if (partner1CurrentAge >= inputs.partner1RetirementAge && 
        partner2CurrentAge >= inputs.partner2RetirementAge) {
      phase = 'full-retirement';
    } else if (partner1CurrentAge >= inputs.partner1RetirementAge || 
               partner2CurrentAge >= inputs.partner2RetirementAge) {
      phase = 'partial-retirement';
    } else {
      phase = 'accumulation';
    }
    
    projections.push({
      age: Math.round(currentAverageAge),
      year,
      combinedAssets: Math.round(combinedAssets),
      partner1Assets: Math.round(partner1Assets),
      partner2Assets: Math.round(partner2Assets),
      passiveIncome: Math.round(passiveIncome),
      targetSpending: Math.round(targetSpending),
      phase,
    });
    
    // Update assets for next year
    if (phase === 'accumulation') {
      // Both working
      partner1Assets = partner1Assets * (1 + realReturn) + annualSavings * partner1SaveRate;
      partner2Assets = partner2Assets * (1 + realReturn) + annualSavings * partner2SaveRate;
      sharedAssets = sharedAssets * (1 + realReturn);
    } else if (phase === 'partial-retirement') {
      // One retired
      const workingIncome = partner1CurrentAge < inputs.partner1RetirementAge ? 
        inputs.partner1Income : inputs.partner2Income;
      const partialSavings = Math.max(0, workingIncome - targetSpending);
      
      partner1Assets = partner1Assets * (1 + realReturn);
      partner2Assets = partner2Assets * (1 + realReturn);
      sharedAssets = sharedAssets * (1 + realReturn) + partialSavings;
    } else {
      // Both retired - withdrawing
      const totalWithdrawal = targetSpending;
      const withdrawalRatio = sharedAssets / combinedAssets;
      
      sharedAssets = sharedAssets * (1 + realReturn) - totalWithdrawal * withdrawalRatio;
      partner1Assets = partner1Assets * (1 + realReturn) - totalWithdrawal * (partner1Assets / combinedAssets);
      partner2Assets = partner2Assets * (1 + realReturn) - totalWithdrawal * (partner2Assets / combinedAssets);
    }
  }
  
  return projections;
}

/**
 * Generate milestones for couples
 */
export function generateCouplesMilestones(
  currentAssets: number,
  fireNumber: number,
  annualSavings: number,
  realReturn: number
): CouplesFireMilestone[] {
  const milestones = [
    { name: 'Emergency Fund (6 months)', targetAmount: currentAssets * 0.1, percentage: 10 },
    { name: '25% to FIRE', targetAmount: fireNumber * 0.25, percentage: 25 },
    { name: 'Coast FIRE', targetAmount: fireNumber * 0.5, percentage: 50 },
    { name: '75% to FIRE', targetAmount: fireNumber * 0.75, percentage: 75 },
    { name: 'Full FIRE', targetAmount: fireNumber, percentage: 100 },
  ];
  
  return milestones.map(m => ({
    name: m.name,
    targetAmount: Math.round(m.targetAmount),
    yearsToReach: calculateYearsToFire(currentAssets, m.targetAmount, annualSavings, realReturn),
    achieved: currentAssets >= m.targetAmount,
  }));
}

/**
 * Main calculation function for Couples FIRE
 */
export function calculateCouplesFire(inputs: CouplesFireInputs): CouplesFireResults {
  const nominalReturn = inputs.expectedReturn || DEFAULTS.STOCK_RETURN;
  const inflation = inputs.inflationRate || DEFAULTS.INFLATION_RATE;
  const realReturn = nominalReturn - inflation;
  const withdrawalRate = inputs.withdrawalRate || DEFAULTS.SAFE_WITHDRAWAL_RATE;
  
  // Calculate combined finances
  const combinedAnnualIncome = inputs.partner1Income + inputs.partner2Income;
  const combinedCurrentAssets = inputs.partner1CurrentSavings + 
                                inputs.partner2CurrentSavings + 
                                inputs.sharedAssets;
  const annualExpenses = inputs.combinedMonthlyExpenses * 12;
  const annualSavings = inputs.combinedMonthlySavings * 12;
  const combinedSavingsRate = (annualSavings / combinedAnnualIncome) * 100;
  
  // Calculate FIRE number
  const annualRetirementSpending = inputs.retirementSpendingTarget * 12;
  const combinedFireNumber = calculateCouplesFireNumber(annualRetirementSpending, withdrawalRate);
  
  // Check current status
  const hasReachedFire = combinedCurrentAssets >= combinedFireNumber;
  const currentProgress = (combinedCurrentAssets / combinedFireNumber) * 100;
  
  // Calculate timeline
  const yearsToFire = calculateYearsToFire(
    combinedCurrentAssets,
    combinedFireNumber,
    annualSavings,
    realReturn
  );
  
  const fireAgePartner1 = inputs.partner1Age + yearsToFire;
  const fireAgePartner2 = inputs.partner2Age + yearsToFire;
  
  // Individual contributions
  const partner1ContributionRate = inputs.partner1Income / combinedAnnualIncome;
  const partner2ContributionRate = 1 - partner1ContributionRate;
  const partner1FireNumber = combinedFireNumber * partner1ContributionRate;
  const partner2FireNumber = combinedFireNumber * partner2ContributionRate;
  
  // Calculate optimizations
  const taxSavingsMarriedJointly = calculateTaxSavings(
    inputs.partner1Income,
    inputs.partner2Income,
    inputs.filingStatus
  );
  
  const expenseSavingsFromSharing = calculateSharedExpenseSavings(
    inputs.combinedMonthlyExpenses
  );
  
  // Calculate scenarios
  const singleIncomeScenario = calculateSingleIncomeScenario(
    inputs,
    combinedFireNumber,
    realReturn
  );
  
  const staggeredRetirement = calculateStaggeredRetirement(
    inputs,
    combinedFireNumber
  );
  
  // Risk metrics
  const financialIndependenceScore = Math.min(100, 
    (currentProgress * 0.4) + 
    (combinedSavingsRate * 0.3) + 
    ((inputs.emergencyFundMonths / 12) * 30)
  );
  
  const redundancyFactor = inputs.partner1Income > 0 && inputs.partner2Income > 0 ? 
    0.8 : 0.5;
  
  // Generate projections and milestones
  const projections = generateCouplesProjections(inputs, combinedFireNumber);
  const milestones = generateCouplesMilestones(
    combinedCurrentAssets,
    combinedFireNumber,
    annualSavings,
    realReturn
  );
  
  const monthlyRetirementIncome = (combinedFireNumber * withdrawalRate) / 12;
  
  return {
    combinedFireNumber: Math.round(combinedFireNumber),
    currentProgress: Math.round(currentProgress * 10) / 10,
    hasReachedFire,
    yearsToFire: Math.round(yearsToFire * 10) / 10,
    fireAgePartner1: Math.round(fireAgePartner1),
    fireAgePartner2: Math.round(fireAgePartner2),
    partner1Contribution: Math.round(partner1ContributionRate * 100),
    partner2Contribution: Math.round(partner2ContributionRate * 100),
    partner1FireNumber: Math.round(partner1FireNumber),
    partner2FireNumber: Math.round(partner2FireNumber),
    combinedAnnualIncome: Math.round(combinedAnnualIncome),
    combinedSavingsRate: Math.round(combinedSavingsRate),
    monthlyRetirementIncome: Math.round(monthlyRetirementIncome),
    taxSavingsMarriedJointly: Math.round(taxSavingsMarriedJointly),
    expenseSavingsFromSharing: Math.round(expenseSavingsFromSharing),
    singleIncomeScenario,
    staggeredRetirement,
    financialIndependenceScore: Math.round(financialIndependenceScore),
    redundancyFactor,
    projections,
    milestones,
  };
}