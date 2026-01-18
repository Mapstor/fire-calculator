import { CurrencyCode } from '@/types/calculator';

// Lean FIRE specific inputs
export interface LeanFireInputs {
  // Basic inputs
  currentAge: number;
  targetRetirementAge: number;
  currentInvestments: number;
  monthlyIncome: number;
  
  // Lean lifestyle targets
  targetMonthlySpending: number;            // Target frugal spending (max $3,333/mo for $40K/year)
  currentMonthlyExpenses: number;           // Current spending to compare
  monthlyContribution: number;              // Current monthly savings
  
  // Expense breakdown (for budgeting)
  housingCost: number;                      // Rent/mortgage/utilities
  foodBudget: number;                       // Groceries and dining
  transportationCost: number;               // Car/public transit
  healthcareCost: number;                   // Insurance and medical
  otherEssentials: number;                  // Everything else
  
  // Geographic arbitrage
  considerGeoArbitrage: boolean;            // Planning to move to lower cost area
  geoArbitrageSavings: number;              // Percentage savings from relocation (0-50%)
  
  // Advanced (optional)
  expectedReturn: number;                   // Default 7%
  inflationRate: number;                    // Default 3%
  withdrawalRate: number;                   // Default 4%
  
  // Risk management
  hasEmergencyFund: boolean;                // Separate emergency fund
  emergencyFundMonths: number;              // Months of expenses in emergency fund
}

export interface LeanFireResults {
  // Core results
  leanFireNumber: number;                   // Total needed for Lean FIRE
  currentProgress: number;                  // Percentage toward Lean FIRE (0-100+)
  hasReachedLeanFire: boolean;             // True if already Lean FIRE
  
  // Timeline
  yearsToLeanFire: number;                 // Years until Lean FIRE
  leanFireAge: number;                     // Age when Lean FIRE achieved
  
  // Financial details
  annualSpendingTarget: number;            // Target annual spending
  monthlyPassiveIncome: number;            // Monthly income from investments at FIRE
  currentSavingsRate: number;              // Current savings rate percentage
  requiredSavingsRate: number;             // Required rate to hit target
  
  // Comparison metrics
  yearsVsRegularFire: number;              // Years saved vs regular FIRE
  amountVsRegularFire: number;             // Money saved vs regular FIRE
  
  // Budget analysis
  budgetFeasibility: 'easy' | 'moderate' | 'challenging' | 'very-challenging';
  monthlyBudgetGap: number;                // Gap between current and target spending
  
  // Geographic arbitrage impact
  geoArbitrageImpact: number;              // Years saved with geo arbitrage
  adjustedFireNumber: number;              // FIRE number with geo arbitrage
  
  // Risk metrics
  safetyCushion: number;                   // Emergency fund adequacy (%)
  flexibilityScore: number;                // Ability to adjust spending (0-100)
  
  // For visualization
  projections: LeanFireProjection[];
  budgetBreakdown: BudgetCategory[];
}

export interface LeanFireProjection {
  age: number;
  year: number;
  investedAssets: number;
  passiveIncome: number;                   // Annual passive income potential
  targetSpending: number;                  // Inflation-adjusted spending target
  phase: 'accumulation' | 'lean-fire';
}

export interface BudgetCategory {
  name: string;
  monthlyAmount: number;
  annualAmount: number;
  percentOfTotal: number;
  isOptimized: boolean;                    // Can this be reduced further?
}

export interface LeanFireExample {
  name: string;
  title: string;
  description: string;
  inputs: LeanFireInputs;
  insight: string;
}