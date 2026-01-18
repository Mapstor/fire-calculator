import { CurrencyCode } from '@/types/calculator';

// Default assumptions for FIRE calculations
export const DEFAULTS = {
  // Ages
  CURRENT_AGE: 30,
  RETIREMENT_AGE: 50,
  TRADITIONAL_RETIREMENT_AGE: 65,
  SOCIAL_SECURITY_AGE: 67,
  MAX_AGE: 100,
  
  // Returns (nominal)
  STOCK_RETURN: 0.10,
  BOND_RETURN: 0.05,
  BLENDED_RETURN: 0.08,
  
  // Inflation
  INFLATION_RATE: 0.03,
  
  // Real returns (after inflation)
  REAL_STOCK_RETURN: 0.07,
  REAL_BOND_RETURN: 0.02,
  REAL_BLENDED_RETURN: 0.05,
  CONSERVATIVE_REAL_RETURN: 0.04,
  
  // Withdrawal
  SAFE_WITHDRAWAL_RATE: 0.04,
  CONSERVATIVE_WITHDRAWAL_RATE: 0.035,
  
  // Allocation
  STOCK_ALLOCATION: 0.90,
  BOND_ALLOCATION: 0.10,
  
  // Growth
  SALARY_GROWTH_RATE: 0.02,
  
  // Monte Carlo
  STOCK_STD_DEV: 0.18,
  BOND_STD_DEV: 0.08,
  SIMULATION_COUNT: 1000,
  
  // Formatting
  MIN_CHART_YEARS: 5,
  MAX_CHART_YEARS: 50,
} as const;

// Currency configurations
export const CURRENCIES = {
  USD: { code: 'USD', symbol: '$', locale: 'en-US', name: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', locale: 'de-DE', name: 'Euro' },
  GBP: { code: 'GBP', symbol: '£', locale: 'en-GB', name: 'British Pound' },
  CAD: { code: 'CAD', symbol: 'C$', locale: 'en-CA', name: 'Canadian Dollar' },
  AUD: { code: 'AUD', symbol: 'A$', locale: 'en-AU', name: 'Australian Dollar' },
  CHF: { code: 'CHF', symbol: 'CHF', locale: 'de-CH', name: 'Swiss Franc' },
  JPY: { code: 'JPY', symbol: '¥', locale: 'ja-JP', name: 'Japanese Yen' },
} as const;

// Savings rate to years mapping (for reference)
export const SAVINGS_RATE_YEARS = [
  { rate: 10, years: 51 },
  { rate: 15, years: 43 },
  { rate: 20, years: 37 },
  { rate: 25, years: 32 },
  { rate: 30, years: 28 },
  { rate: 35, years: 25 },
  { rate: 40, years: 22 },
  { rate: 45, years: 19 },
  { rate: 50, years: 17 },
  { rate: 55, years: 14.5 },
  { rate: 60, years: 12.5 },
  { rate: 65, years: 10.5 },
  { rate: 70, years: 8.5 },
  { rate: 75, years: 7 },
  { rate: 80, years: 5.5 },
] as const;