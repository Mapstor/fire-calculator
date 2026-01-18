import { CurrencyCode } from '@/types/calculator';

// Fat FIRE specific inputs
export interface FatFireInputs {
  // Basic inputs
  currentAge: number;
  targetRetirementAge: number;
  currentInvestments: number;
  monthlyIncome: number;                    // Higher income expected for Fat FIRE
  
  // Luxury lifestyle targets
  desiredMonthlySpending: number;           // Target luxury spending in retirement
  currentMonthlyExpenses: number;           // Current living expenses
  monthlyContribution: number;              // Current monthly savings
  
  // Lifestyle categories (optional breakdown)
  housingBudget: number;                    // Housing/mortgage/rent
  travelBudget: number;                     // Annual travel budget
  healthcareBudget: number;                 // Premium healthcare costs
  entertainmentBudget: number;              // Dining, hobbies, entertainment
  
  // Advanced (optional)
  expectedReturn: number;                   // Default 7%
  inflationRate: number;                    // Default 3%
  withdrawalRate: number;                   // Default 3.5% (more conservative)
  
  // Asset allocation
  includeRealEstate: boolean;               // Planning to own property
  includeTaxableBrokerage: boolean;         // Beyond retirement accounts
}

export interface FatFireResults {
  // Core results
  fatFireNumber: number;                    // Total needed for Fat FIRE
  currentProgress: number;                  // Percentage toward Fat FIRE (0-100+)
  hasReachedFatFire: boolean;              // True if already Fat FIRE
  
  // Timeline
  yearsToFatFire: number;                  // Years until Fat FIRE
  fatFireAge: number;                      // Age when Fat FIRE achieved
  
  // Financial details
  annualSpendingTarget: number;            // Desired annual spending
  monthlyPassiveIncome: number;            // Monthly income from investments
  currentSavingsRate: number;              // Current savings rate percentage
  requiredSavingsRate: number;             // Required rate to hit target
  
  // Milestones
  leanFireNumber: number;                  // For comparison ($40K/year)
  regularFireNumber: number;               // For comparison ($60K/year)
  yearsToLeanFire: number;                 // When basic FI achieved
  yearsToRegularFire: number;              // When standard FI achieved
  
  // Safety metrics
  successProbability: number;              // Based on conservative assumptions
  bufferAmount: number;                    // Extra cushion above target
  
  // For visualization
  projections: FatFireProjection[];
  lifestyleBreakdown: LifestyleCategory[];
}

export interface FatFireProjection {
  age: number;
  year: number;
  investedAssets: number;
  passiveIncome: number;                   // Annual passive income potential
  targetSpending: number;                  // Inflation-adjusted spending target
  milestone?: 'lean' | 'regular' | 'fat';  // Milestone reached this year
}

export interface LifestyleCategory {
  name: string;
  monthlyAmount: number;
  annualAmount: number;
  percentOfTotal: number;
  icon: string;
}

export interface FatFireExample {
  name: string;
  title: string;
  description: string;
  inputs: FatFireInputs;
  insight: string;
}