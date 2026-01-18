import {
  CalculatorInputs,
  CalculatorResults,
  FireResults,
  YearlyProjection,
  Milestone,
  Milestones,
  SavingsRateImpact,
} from '@/types/calculator';
import { DEFAULTS } from './constants';

export function calculateFireNumber(
  annualExpenses: number,
  withdrawalRate: number = DEFAULTS.SAFE_WITHDRAWAL_RATE
): number {
  if (withdrawalRate <= 0) return 0;
  return annualExpenses / withdrawalRate;
}

export function calculateSavingsRate(
  annualIncome: number,
  annualExpenses: number
): number {
  if (annualIncome <= 0) return 0;
  const rate = ((annualIncome - annualExpenses) / annualIncome) * 100;
  return Math.max(0, Math.min(100, rate)); // Clamp between 0 and 100
}

export function calculateYearsToFire(
  currentSavings: number,
  annualSavings: number,
  fireNumber: number,
  realReturnRate: number = DEFAULTS.REAL_BLENDED_RETURN
): number {
  // If already at FIRE
  if (currentSavings >= fireNumber) return 0;
  
  // If not saving or negative savings
  if (annualSavings <= 0) return -1;
  
  // If return rate is 0, use simple division
  if (realReturnRate === 0) {
    const yearsNeeded = (fireNumber - currentSavings) / annualSavings;
    return yearsNeeded > 100 ? -1 : yearsNeeded;
  }
  
  // Iterative approach
  let balance = currentSavings;
  let years = 0;
  const maxYears = 100;
  
  while (balance < fireNumber && years < maxYears) {
    balance = balance * (1 + realReturnRate) + annualSavings;
    years++;
  }
  
  return years >= maxYears ? -1 : years;
}

export function calculateCoastFireNumber(
  fireNumber: number,
  yearsUntilRetirement: number,
  realReturnRate: number = DEFAULTS.REAL_BLENDED_RETURN
): number {
  if (yearsUntilRetirement <= 0) return fireNumber;
  if (realReturnRate <= 0) return fireNumber;
  
  return fireNumber / Math.pow(1 + realReturnRate, yearsUntilRetirement);
}

export function generateNetWorthProjection(
  inputs: CalculatorInputs,
  fireNumber: number
): YearlyProjection[] {
  const projections: YearlyProjection[] = [];
  const { currentAge, retirementAge, currentSavings } = inputs;
  const { advanced } = inputs;
  
  // Convert monthly to annual
  const annualIncome = (inputs.monthlyIncome + advanced.sideIncome) * 12;
  const annualExpenses = inputs.monthlyExpenses * 12;
  
  // Use real returns
  const realReturnRate = advanced.expectedReturn - advanced.inflationRate;
  const maxYears = Math.min(DEFAULTS.MAX_CHART_YEARS, DEFAULTS.MAX_AGE - currentAge);
  
  let netWorth = currentSavings + advanced.windfall;
  let income = annualIncome;
  let expenses = annualExpenses;
  
  for (let year = 0; year <= maxYears; year++) {
    const age = currentAge + year;
    
    // Adjust income for retirement
    if (age >= retirementAge) {
      income = 0; // No earned income in retirement
      
      // Add Social Security if applicable
      if (advanced.includeSocialSecurity && age >= advanced.socialSecurityStartAge) {
        income += advanced.socialSecurityAmount * 12;
      }
      
      // Add pension if applicable
      if (advanced.includePension && age >= advanced.pensionStartAge) {
        income += advanced.pensionAmount * 12;
      }
      
      // Adjust spending in retirement if specified
      if (advanced.retirementSpending !== null) {
        expenses = advanced.retirementSpending * 12;
      }
    } else {
      // Apply salary growth before retirement
      income = annualIncome * Math.pow(1 + advanced.salaryGrowthRate, year);
    }
    
    const annualSavings = Math.max(0, income - expenses);
    const investmentGains = netWorth * realReturnRate;
    const fireProgress = Math.min((netWorth / fireNumber) * 100, 100);
    
    projections.push({
      year,
      age,
      netWorth: Math.round(netWorth),
      contributions: Math.round(annualSavings),
      investmentGains: Math.round(investmentGains),
      fireProgress,
      income: Math.round(income),
      expenses: Math.round(expenses),
    });
    
    // Calculate next year's net worth
    netWorth = netWorth * (1 + realReturnRate) + annualSavings;
    
    // Stop if we've reached FIRE and passed retirement age
    if (fireProgress >= 100 && age >= retirementAge) {
      break;
    }
  }
  
  return projections;
}

export function calculateMilestones(
  projections: YearlyProjection[],
  coastFireNumber: number,
  fireNumber: number,
  currentAge: number
): Milestones {
  const currentNetWorth = projections[0]?.netWorth || 0;
  
  const today: Milestone = {
    name: 'today',
    label: 'Today',
    age: currentAge,
    years: 0,
    netWorth: currentNetWorth,
    achieved: true,
  };
  
  let twentyFivePercent: Milestone | null = null;
  let fiftyPercent: Milestone | null = null;
  let coastFire: Milestone | null = null;
  let seventyFivePercent: Milestone | null = null;
  let fire: Milestone | null = null;
  
  const targetTwentyFive = fireNumber * 0.25;
  const targetFifty = fireNumber * 0.5;
  const targetSeventyFive = fireNumber * 0.75;
  
  for (const p of projections) {
    if (!twentyFivePercent && p.netWorth >= targetTwentyFive) {
      twentyFivePercent = {
        name: 'twentyFivePercent',
        label: '25% FI',
        age: p.age,
        years: p.year,
        netWorth: p.netWorth,
        achieved: true,
      };
    }
    
    if (!fiftyPercent && p.netWorth >= targetFifty) {
      fiftyPercent = {
        name: 'fiftyPercent',
        label: '50% FI',
        age: p.age,
        years: p.year,
        netWorth: p.netWorth,
        achieved: true,
      };
    }
    
    if (!coastFire && p.netWorth >= coastFireNumber) {
      coastFire = {
        name: 'coastFire',
        label: 'Coast FI',
        age: p.age,
        years: p.year,
        netWorth: p.netWorth,
        achieved: true,
      };
    }
    
    if (!seventyFivePercent && p.netWorth >= targetSeventyFive) {
      seventyFivePercent = {
        name: 'seventyFivePercent',
        label: '75% FI',
        age: p.age,
        years: p.year,
        netWorth: p.netWorth,
        achieved: true,
      };
    }
    
    if (!fire && p.netWorth >= fireNumber) {
      fire = {
        name: 'fire',
        label: '🔥 FIRE',
        age: p.age,
        years: p.year,
        netWorth: p.netWorth,
        achieved: true,
      };
      break; // No need to continue
    }
  }
  
  return {
    today,
    twentyFivePercent,
    fiftyPercent,
    coastFire,
    seventyFivePercent,
    fire,
  };
}

export function calculateSavingsRateImpact(
  annualIncome: number,
  currentSavings: number,
  fireNumber: number,
  realReturnRate: number,
  currentSavingsRate: number
): SavingsRateImpact[] {
  const savingsRates = [10, 20, 30, 40, 50, 60, 70];
  const results: SavingsRateImpact[] = [];
  
  for (const rate of savingsRates) {
    const annualSavings = (annualIncome * rate) / 100;
    const yearsToFire = calculateYearsToFire(
      currentSavings,
      annualSavings,
      fireNumber,
      realReturnRate
    );
    
    results.push({
      savingsRate: rate,
      yearsToFire: yearsToFire === -1 ? 100 : yearsToFire,
      monthlySavings: annualSavings / 12,
      isCurrentRate: Math.abs(rate - currentSavingsRate) < 5,
    });
  }
  
  return results;
}

export function calculateResults(inputs: CalculatorInputs): CalculatorResults {
  // Convert monthly to annual
  const annualIncome = (inputs.monthlyIncome + inputs.advanced.sideIncome) * 12;
  const annualExpenses = inputs.monthlyExpenses * 12;
  const retirementExpenses = inputs.advanced.retirementSpending !== null
    ? inputs.advanced.retirementSpending * 12
    : annualExpenses;
  
  // Calculate real return rate
  const realReturnRate = inputs.advanced.expectedReturn - inputs.advanced.inflationRate;
  
  // Calculate FIRE number based on retirement expenses
  const fireNumber = calculateFireNumber(
    retirementExpenses,
    inputs.advanced.withdrawalRate
  );
  
  // Calculate savings rate
  const savingsRate = calculateSavingsRate(annualIncome, annualExpenses);
  const annualSavings = annualIncome - annualExpenses;
  
  // Calculate years to FIRE
  const yearsToFire = calculateYearsToFire(
    inputs.currentSavings + inputs.advanced.windfall,
    annualSavings,
    fireNumber,
    realReturnRate
  );
  
  // Calculate Coast FIRE
  const yearsUntilTraditional = DEFAULTS.TRADITIONAL_RETIREMENT_AGE - inputs.currentAge;
  const coastFireNumber = calculateCoastFireNumber(
    fireNumber,
    yearsUntilTraditional,
    realReturnRate
  );
  
  // Determine Coast FIRE age
  let coastFireAge: number | null = null;
  if (inputs.currentSavings >= coastFireNumber) {
    coastFireAge = inputs.currentAge;
  } else if (yearsToFire !== -1) {
    // Calculate when we'll reach coast FIRE
    const yearsToCoast = calculateYearsToFire(
      inputs.currentSavings + inputs.advanced.windfall,
      annualSavings,
      coastFireNumber,
      realReturnRate
    );
    if (yearsToCoast !== -1) {
      coastFireAge = inputs.currentAge + yearsToCoast;
    }
  }
  
  // Generate projections
  const projections = generateNetWorthProjection(inputs, fireNumber);
  
  // Calculate milestones
  const milestones = calculateMilestones(
    projections,
    coastFireNumber,
    fireNumber,
    inputs.currentAge
  );
  
  // Calculate savings rate impact
  const savingsRateImpact = calculateSavingsRateImpact(
    annualIncome,
    inputs.currentSavings + inputs.advanced.windfall,
    fireNumber,
    realReturnRate,
    savingsRate
  );
  
  // Prepare FIRE results
  const fire: FireResults = {
    fireNumber,
    yearsToFire,
    fireAge: yearsToFire === -1 ? -1 : inputs.currentAge + yearsToFire,
    coastFireNumber,
    coastFireAge,
    savingsRate,
    monthlySavings: annualSavings / 12,
    annualSavings,
  };
  
  return {
    inputs,
    fire,
    projections,
    milestones,
    monteCarlo: null, // Will be calculated separately if needed
    savingsRateImpact,
    calculatedAt: new Date(),
  };
}