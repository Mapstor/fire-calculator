import { CurrencyCode } from '@/types/calculator';

// Couples FIRE specific inputs
export interface CouplesFireInputs {
  // Partner 1 Details
  partner1Name: string;
  partner1Age: number;
  partner1Income: number;                    // Annual income
  partner1CurrentSavings: number;            // Current retirement savings
  partner1RetirementAge: number;             // Desired retirement age
  
  // Partner 2 Details  
  partner2Name: string;
  partner2Age: number;
  partner2Income: number;                    // Annual income
  partner2CurrentSavings: number;            // Current retirement savings
  partner2RetirementAge: number;             // Desired retirement age
  
  // Combined Finances
  combinedMonthlyExpenses: number;           // Shared monthly expenses
  combinedMonthlySavings: number;            // Total monthly savings
  sharedAssets: number;                      // Joint investment accounts
  
  // Lifestyle & Goals
  retirementSpendingTarget: number;          // Monthly spending in retirement
  synchronizedRetirement: boolean;           // Retire together or separately
  includeChildren: boolean;                  // Factor in child expenses
  childrenCount: number;                     // Number of children
  
  // Tax & Benefits
  filingStatus: 'married-jointly' | 'married-separately';
  employerMatchPartner1: number;             // 401k match percentage
  employerMatchPartner2: number;             // 401k match percentage
  healthInsuranceProvider: 'partner1' | 'partner2' | 'both' | 'none';
  
  // Advanced (optional)
  expectedReturn: number;                    // Default 7%
  inflationRate: number;                     // Default 3%
  withdrawalRate: number;                    // Default 4%
  
  // Risk Planning
  emergencyFundMonths: number;               // Combined emergency fund
  lifeInsurance: boolean;                    // Term life insurance coverage
}

export interface CouplesFireResults {
  // Core results
  combinedFireNumber: number;                // Total needed for couple
  currentProgress: number;                   // Percentage toward FIRE (0-100+)
  hasReachedFire: boolean;                   // True if already FIRE
  
  // Timeline
  yearsToFire: number;                       // Years until FIRE achieved
  fireAgePartner1: number;                   // Partner 1's age at FIRE
  fireAgePartner2: number;                   // Partner 2's age at FIRE
  
  // Individual Contributions
  partner1Contribution: number;              // Partner 1's % of total savings
  partner2Contribution: number;              // Partner 2's % of total savings
  partner1FireNumber: number;                // Partner 1's portion of FIRE number
  partner2FireNumber: number;                // Partner 2's portion of FIRE number
  
  // Financial Details
  combinedAnnualIncome: number;              // Total household income
  combinedSavingsRate: number;               // Household savings rate
  monthlyRetirementIncome: number;           // Income in retirement
  
  // Optimization Opportunities
  taxSavingsMarriedJointly: number;          // Annual tax savings from joint filing
  expenseSavingsFromSharing: number;         // Monthly savings from shared expenses
  
  // Scenarios
  singleIncomeScenario: SingleIncomeScenario; // What if one partner stops working
  staggeredRetirement: StaggeredRetirement;   // Different retirement dates
  
  // Risk Metrics
  financialIndependenceScore: number;        // 0-100 couple's FI strength
  redundancyFactor: number;                  // Income source diversification
  
  // For visualization
  projections: CouplesFireProjection[];
  milestones: CouplesFireMilestone[];
}

export interface SingleIncomeScenario {
  yearsToFirePartner1Only: number;
  yearsToFirePartner2Only: number;
  criticalPartner: 'partner1' | 'partner2';  // Who contributes more
  viableWithSingleIncome: boolean;
}

export interface StaggeredRetirement {
  partner1RetireFirst: boolean;
  yearsApart: number;
  bridgeFinancing: number;                   // Money needed between retirements
  healthInsuranceGap: boolean;               // Coverage gap issue
}

export interface CouplesFireProjection {
  age: number;                               // Average age of couple
  year: number;
  combinedAssets: number;
  partner1Assets: number;
  partner2Assets: number;
  passiveIncome: number;
  targetSpending: number;
  phase: 'accumulation' | 'partial-retirement' | 'full-retirement';
}

export interface CouplesFireMilestone {
  name: string;
  targetAmount: number;
  yearsToReach: number;
  achieved: boolean;
}

export interface CouplesFireExample {
  name: string;
  title: string;
  description: string;
  inputs: CouplesFireInputs;
  insight: string;
}