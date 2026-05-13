/**
 * IRS contribution limits for the current tax year.
 *
 * Sources:
 *   HSA — IRS Rev. Proc. 2025-25
 *   401(k) / IRA — IRS Notice (annual cost-of-living adjustments)
 *
 * Update each January with the new tax year's published limits.
 * Last reviewed: 2026-05.
 */

export const CURRENT_TAX_YEAR = 2026 as const;

// Health Savings Account (HDHP-paired)
export const HSA_LIMITS = {
  individual: 4400,
  family: 8750,
  catchUp55Plus: 1000,
} as const;

// 401(k) employee elective deferrals
export const K401_LIMITS = {
  employeeDeferral: 24500,
  catchUp50Plus: 8000,
} as const;

// Traditional & Roth IRA
export const IRA_LIMITS = {
  contribution: 7500,
  catchUp50Plus: 1000,
} as const;
