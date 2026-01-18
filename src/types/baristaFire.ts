import { CurrencyCode } from '@/types/calculator';

// Barista FIRE specific inputs
export interface BaristaFireInputs {
  // Basic inputs
  currentAge: number;
  targetRetirementAge: number;           // When to fully retire
  baristaStartAge: number;               // When to switch to part-time
  currentInvestments: number;            // Current invested assets
  monthlyExpenses: number;               // Current monthly spending
  
  // Part-time work assumptions
  expectedPartTimeIncome: number;        // Monthly part-time income
  includesHealthInsurance: boolean;      // Does part-time job provide health insurance?
  healthInsuranceCost: number;           // Monthly cost if not provided by employer
  
  // Optional inputs
  monthlyContribution: number;           // Current monthly savings (before Barista)
  
  // Advanced (optional)
  expectedReturn: number;                // Default 7%
  inflationRate: number;                 // Default 3%
  withdrawalRate: number;                // Default 4%
}

export interface BaristaFireResults {
  // Core results
  fullFireNumber: number;                // Full FIRE number (no work needed)
  baristaFireNumber: number;             // Amount needed to start Barista FIRE
  currentProgress: number;               // Percentage toward Barista FIRE (0-100+)
  hasReachedBaristaFire: boolean;       // True if can start Barista FIRE now
  
  // Timeline
  yearsToBarista: number | null;        // Years until Barista FIRE
  baristaAge: number | null;             // Age when Barista FIRE starts
  yearsOfPartTime: number;               // How many years of part-time work
  
  // Financial details
  monthlyPortfolioIncome: number;        // Income from investments during Barista
  monthlyIncomeGap: number;              // Gap that part-time income fills
  totalMonthlyIncome: number;            // Portfolio + part-time income
  
  // Comparison
  yearsToFullFire: number;               // Years to full FIRE without Barista
  yearsSavedVsFullFire: number;          // How many years earlier with Barista
  
  // For visualization
  projections: BaristaFireProjection[];
}

export interface BaristaFireProjection {
  age: number;
  year: number;
  phase: 'saving' | 'barista' | 'retired';
  investedAssets: number;
  monthlyIncome: number;                 // Total income (work + portfolio)
  monthlyExpenses: number;                // Inflation-adjusted
}

export interface BaristaFireExample {
  name: string;
  title: string;
  description: string;
  inputs: BaristaFireInputs;
  insight: string;
}