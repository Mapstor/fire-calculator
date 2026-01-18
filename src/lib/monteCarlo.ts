import { MonteCarloResults, CalculatorInputs } from '@/types/calculator';
import { DEFAULTS } from './constants';

// Box-Muller transform for generating normally distributed random numbers
function randomNormal(mean: number, stdDev: number): number {
  let u1 = 0, u2 = 0;
  
  // Ensure we don't get 0, which would cause log(0) = -Infinity
  while (u1 === 0) u1 = Math.random();
  while (u2 === 0) u2 = Math.random();
  
  const z0 = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  return z0 * stdDev + mean;
}

// Run a single simulation path
function runSingleSimulation(
  currentSavings: number,
  annualSavings: number,
  fireNumber: number,
  years: number,
  stockAllocation: number,
  stockMean: number,
  stockStdDev: number,
  bondMean: number,
  bondStdDev: number,
  salaryGrowthRate: number
): number[] {
  const path: number[] = [];
  let balance = currentSavings;
  let savings = annualSavings;
  
  for (let year = 0; year < years; year++) {
    // Generate random returns for this year
    const stockReturn = randomNormal(stockMean, stockStdDev);
    const bondReturn = randomNormal(bondMean, bondStdDev);
    
    // Calculate blended return based on allocation
    const portfolioReturn = stockReturn * stockAllocation + 
                           bondReturn * (1 - stockAllocation);
    
    // Apply returns and add savings
    balance = balance * (1 + portfolioReturn) + savings;
    
    // Ensure balance doesn't go negative
    balance = Math.max(0, balance);
    
    path.push(balance);
    
    // Apply salary growth for next year's savings
    savings = savings * (1 + salaryGrowthRate);
    
    // Early exit if FIRE is achieved
    if (balance >= fireNumber) {
      // Fill the rest of the path with the FIRE number
      while (path.length < years) {
        balance = balance * (1 + portfolioReturn);
        path.push(balance);
      }
      break;
    }
  }
  
  return path;
}

// Calculate percentiles from all simulation paths
function calculatePercentiles(
  paths: number[][],
  percentiles: number[]
): Record<number, number[]> {
  const result: Record<number, number[]> = {};
  const numYears = paths[0].length;
  
  for (const percentile of percentiles) {
    result[percentile] = [];
    
    for (let year = 0; year < numYears; year++) {
      // Get all values for this year across all simulations
      const yearValues = paths.map(path => path[year]).sort((a, b) => a - b);
      
      // Calculate the percentile index
      const index = Math.floor((percentile / 100) * yearValues.length);
      result[percentile].push(yearValues[index]);
    }
  }
  
  return result;
}

// Main Monte Carlo simulation function
export function runMonteCarloSimulation(
  inputs: CalculatorInputs,
  fireNumber: number,
  years: number = 40,
  simulations: number = DEFAULTS.SIMULATION_COUNT
): MonteCarloResults {
  const { currentSavings, monthlyIncome, monthlyExpenses, advanced } = inputs;
  
  // Calculate annual values
  const annualIncome = (monthlyIncome + advanced.sideIncome) * 12;
  const annualExpenses = monthlyExpenses * 12;
  const annualSavings = annualIncome - annualExpenses;
  
  // Add windfall to starting balance
  const startingBalance = currentSavings + advanced.windfall;
  
  // Use historical parameters for returns
  const stockMean = DEFAULTS.REAL_STOCK_RETURN;
  const stockStdDev = DEFAULTS.STOCK_STD_DEV;
  const bondMean = DEFAULTS.REAL_BOND_RETURN;
  const bondStdDev = DEFAULTS.BOND_STD_DEV;
  
  // Run all simulations
  const allPaths: number[][] = [];
  const yearsToFireArray: number[] = [];
  
  for (let sim = 0; sim < simulations; sim++) {
    const path = runSingleSimulation(
      startingBalance,
      annualSavings,
      fireNumber,
      years,
      advanced.stockAllocation,
      stockMean,
      stockStdDev,
      bondMean,
      bondStdDev,
      advanced.salaryGrowthRate
    );
    
    allPaths.push(path);
    
    // Find years to FIRE for this simulation
    const fireYearIndex = path.findIndex(value => value >= fireNumber);
    if (fireYearIndex !== -1) {
      yearsToFireArray.push(fireYearIndex + 1);
    }
  }
  
  // Calculate percentiles
  const percentileData = calculatePercentiles(
    allPaths,
    [10, 25, 50, 75, 90]
  );
  
  // Calculate success rate (percentage of simulations that reached FIRE)
  const successCount = yearsToFireArray.length;
  const successRate = (successCount / simulations) * 100;
  
  // Calculate median years to FIRE
  let medianYearsToFire = -1;
  if (yearsToFireArray.length > 0) {
    yearsToFireArray.sort((a, b) => a - b);
    const midIndex = Math.floor(yearsToFireArray.length / 2);
    medianYearsToFire = yearsToFireArray[midIndex];
  }
  
  return {
    percentile10: percentileData[10],
    percentile25: percentileData[25],
    median: percentileData[50],
    percentile75: percentileData[75],
    percentile90: percentileData[90],
    successRate,
    medianYearsToFire,
    simulations,
  };
}

// Simplified Monte Carlo for quick calculations
export function runQuickMonteCarlo(
  currentSavings: number,
  annualSavings: number,
  fireNumber: number,
  stockAllocation: number = 0.9,
  years: number = 40
): MonteCarloResults {
  // Create a simplified inputs object
  const inputs: CalculatorInputs = {
    currentAge: 30,
    retirementAge: 50,
    monthlyIncome: (annualSavings / 12) / 0.3, // Assume 30% savings rate
    monthlyExpenses: ((annualSavings / 12) / 0.3) * 0.7,
    currentSavings,
    currency: 'USD',
    advanced: {
      expectedReturn: DEFAULTS.BLENDED_RETURN,
      inflationRate: DEFAULTS.INFLATION_RATE,
      withdrawalRate: DEFAULTS.SAFE_WITHDRAWAL_RATE,
      stockAllocation,
      salaryGrowthRate: DEFAULTS.SALARY_GROWTH_RATE,
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
  };
  
  return runMonteCarloSimulation(inputs, fireNumber, years, 100); // Run fewer simulations for quick calc
}