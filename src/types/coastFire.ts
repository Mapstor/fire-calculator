import { CurrencyCode } from '@/types/calculator';

// Coast FIRE specific inputs
export interface CoastFireInputs {
  // Basic inputs
  currentAge: number;
  targetRetirementAge: number;      // When you want to actually retire (e.g., 65)
  currentInvestments: number;        // Current invested assets
  monthlyExpenses: number;           // Current monthly spending
  
  // Optional inputs
  monthlyContribution: number;       // Current monthly savings (to show if already coasting)
  
  // Advanced (optional)
  expectedReturn: number;            // Default 7%
  inflationRate: number;             // Default 3%
  withdrawalRate: number;            // Default 4%
}

export interface CoastFireResults {
  // Core results
  fireNumber: number;                // Target FIRE number at retirement
  coastFireNumber: number;           // Amount needed NOW to coast
  currentProgress: number;           // Percentage toward Coast FIRE (0-100+)
  hasReachedCoastFire: boolean;      // True if current investments >= coastFireNumber
  
  // If not yet at Coast FIRE
  yearsToCoastFire: number | null;   // Years until reaching Coast FI (if still saving)
  coastFireAge: number | null;       // Age when Coast FI is reached
  
  // If already at Coast FIRE
  projectedFireAge: number;          // When investments will hit full FIRE number
  yearsUntilFire: number;            // Years from now until full FIRE
  
  // Additional insights
  monthlyExpensesAtRetirement: number; // Inflation-adjusted expenses
  surplusAmount: number;             // How much over/under Coast FI number
  
  // For visualization
  projections: CoastFireProjection[];
}

export interface CoastFireProjection {
  age: number;
  year: number;
  investedAssets: number;            // Without additional contributions
  investedAssetsWithContributions: number; // With continued saving
  coastFireLine: number;             // Coast FI number at this age
  fireNumber: number;                // Target FIRE number (constant)
}

export interface CoastFireExample {
  name: string;
  title: string;
  description: string;
  inputs: CoastFireInputs;
  insight: string;
}