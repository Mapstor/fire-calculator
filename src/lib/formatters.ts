import { CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from './constants';

export function formatCurrency(
  amount: number,
  currencyCode: CurrencyCode = 'USD'
): string {
  const currency = CURRENCIES[currencyCode];
  
  const formatter = new Intl.NumberFormat(currency.locale, {
    style: 'currency',
    currency: currency.code,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  return formatter.format(amount);
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.round(num));
}

export function formatPercent(
  decimal: number,
  decimals: number = 1
): string {
  const percentage = decimal * 100;
  return `${percentage.toFixed(decimals)}%`;
}

export function formatYears(years: number): string {
  if (years === 1) return '1 year';
  if (years % 1 === 0) return `${years} years`;
  return `${years.toFixed(1)} years`;
}

export function formatCompactNumber(
  num: number,
  currencyCode: CurrencyCode = 'USD'
): string {
  const currency = CURRENCIES[currencyCode];
  
  if (num >= 1000000) {
    return `${currency.symbol}${(num / 1000000).toFixed(2)}M`;
  } else if (num >= 100000) {
    return `${currency.symbol}${(num / 1000).toFixed(0)}K`;
  } else if (num >= 10000) {
    return `${currency.symbol}${(num / 1000).toFixed(1)}K`;
  } else {
    return formatCurrency(num, currencyCode);
  }
}

export function parseCurrencyInput(value: string): number {
  // Remove currency symbols, commas, and spaces
  const cleanValue = value.replace(/[^0-9.-]/g, '');
  const parsed = parseFloat(cleanValue);
  return isNaN(parsed) ? 0 : parsed;
}

// Format age with appropriate suffix
export function formatAge(age: number): string {
  return `Age ${Math.round(age)}`;
}

// Format monthly amount for display
export function formatMonthly(
  amount: number,
  currencyCode: CurrencyCode = 'USD'
): string {
  return `${formatCurrency(amount, currencyCode)}/mo`;
}

// Format annual amount for display
export function formatAnnual(
  amount: number,
  currencyCode: CurrencyCode = 'USD'
): string {
  return `${formatCurrency(amount, currencyCode)}/yr`;
}

// Format a number as a ratio (e.g., for savings rate)
export function formatRatio(value: number, total: number): string {
  if (total === 0) return '0%';
  const ratio = (value / total) * 100;
  return `${ratio.toFixed(1)}%`;
}

// Format time remaining in human-readable format
export function formatTimeRemaining(years: number): string {
  if (years < 0) return 'Not achievable';
  if (years === 0) return 'Already achieved!';
  if (years === 1) return '1 year';
  if (years < 1) {
    const months = Math.round(years * 12);
    return months === 1 ? '1 month' : `${months} months`;
  }
  
  const wholeYears = Math.floor(years);
  const months = Math.round((years - wholeYears) * 12);
  
  if (months === 0) {
    return `${wholeYears} years`;
  } else if (months === 1) {
    return `${wholeYears} years, 1 month`;
  } else {
    return `${wholeYears} years, ${months} months`;
  }
}

// Format large numbers with K, M, B suffixes
export function formatLargeNumber(num: number): string {
  if (num >= 1000000000) {
    return `${(num / 1000000000).toFixed(1)}B`;
  } else if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  } else {
    return num.toString();
  }
}

// Parse percentage input (handles "25%" or "0.25" formats)
export function parsePercentInput(value: string): number {
  const cleanValue = value.replace(/[^0-9.-]/g, '');
  const parsed = parseFloat(cleanValue);
  if (isNaN(parsed)) return 0;
  
  // If the value is greater than 1, assume it's already a percentage
  // Otherwise, assume it's a decimal
  return parsed > 1 ? parsed / 100 : parsed;
}

// Format input value for display in form fields
export function formatInputValue(
  value: number,
  type: 'currency' | 'percent' | 'number' = 'number'
): string {
  if (type === 'currency') {
    return value.toFixed(0);
  } else if (type === 'percent') {
    return (value * 100).toFixed(1);
  } else {
    return value.toString();
  }
}