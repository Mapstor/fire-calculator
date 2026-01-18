// Currency type
export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'CAD' | 'AUD' | 'CHF' | 'JPY';

// Input types
export interface SimpleInputs {
  currentAge: number;
  retirementAge: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  currentSavings: number;
}

export interface AdvancedInputs {
  // Investment assumptions
  expectedReturn: number;       // e.g., 0.07 for 7%
  inflationRate: number;        // e.g., 0.03 for 3%
  withdrawalRate: number;       // e.g., 0.04 for 4%
  stockAllocation: number;      // e.g., 0.90 for 90%
  
  // Income adjustments
  salaryGrowthRate: number;     // e.g., 0.02 for 2%
  sideIncome: number;           // monthly
  windfall: number;             // one-time amount
  
  // Retirement adjustments
  includeSocialSecurity: boolean;
  socialSecurityAmount: number; // monthly
  socialSecurityStartAge: number;
  includePension: boolean;
  pensionAmount: number;        // monthly
  pensionStartAge: number;
  retirementSpending: number | null; // null = same as current
  
  // Simulation
  runMonteCarlo: boolean;
}

export interface CalculatorInputs extends SimpleInputs {
  advanced: AdvancedInputs;
  currency: CurrencyCode;
}

// Output types
export interface FireResults {
  fireNumber: number;
  yearsToFire: number;
  fireAge: number;
  coastFireNumber: number;
  coastFireAge: number | null;
  savingsRate: number;
  monthlySavings: number;
  annualSavings: number;
}

export interface YearlyProjection {
  year: number;
  age: number;
  netWorth: number;
  contributions: number;
  investmentGains: number;
  fireProgress: number;         // 0-100
  income: number;
  expenses: number;
}

export interface Milestone {
  name: string;
  label: string;
  age: number;
  years: number;
  netWorth: number;
  achieved: boolean;
}

export interface Milestones {
  today: Milestone;
  twentyFivePercent: Milestone | null;
  fiftyPercent: Milestone | null;
  coastFire: Milestone | null;
  seventyFivePercent: Milestone | null;
  fire: Milestone | null;
}

export interface MonteCarloResults {
  percentile10: number[];
  percentile25: number[];
  median: number[];
  percentile75: number[];
  percentile90: number[];
  successRate: number;
  medianYearsToFire: number;
  simulations: number;
}

export interface SavingsRateImpact {
  savingsRate: number;
  yearsToFire: number;
  monthlySavings: number;
  isCurrentRate: boolean;
}

export interface CalculatorResults {
  inputs: CalculatorInputs;
  fire: FireResults;
  projections: YearlyProjection[];
  milestones: Milestones;
  monteCarlo: MonteCarloResults | null;
  savingsRateImpact: SavingsRateImpact[];
  calculatedAt: Date;
}

// Chart data types
export interface NetWorthChartData {
  age: number;
  netWorth: number;
  fireTarget: number;
}

export interface MonteCarloChartData {
  age: number;
  p10: number;
  p25: number;
  median: number;
  p75: number;
  p90: number;
  fireTarget: number;
}

export interface SavingsRateChartData {
  rate: string;
  years: number;
  isCurrent: boolean;
}

// URL params for sharing
export interface ShareableParams {
  age: number;
  ret: number;    // retirement age
  inc: number;    // monthly income
  exp: number;    // monthly expenses
  sav: number;    // current savings
  cur: string;    // currency
  // Advanced (optional)
  rtn?: number;   // expected return
  inf?: number;   // inflation
  wdr?: number;   // withdrawal rate
  stk?: number;   // stock allocation
  grw?: number;   // salary growth
  sid?: number;   // side income
  wnd?: number;   // windfall
  ss?: number;    // social security amount
  ssa?: number;   // ss start age
  pen?: number;   // pension amount
  pna?: number;   // pension start age
  rsp?: number;   // retirement spending
}