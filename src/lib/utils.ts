import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Validate if a value is a valid number
export function isValidNumber(value: any): boolean {
  return !isNaN(value) && isFinite(value);
}

// Generate a unique ID
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// Sleep function for animations
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Check if we're in a browser environment
export function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

// Get value from local storage
export function getFromLocalStorage<T>(key: string, defaultValue: T): T {
  if (!isBrowser()) return defaultValue;
  
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage:`, error);
    return defaultValue;
  }
}

// Save value to local storage
export function saveToLocalStorage<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving to localStorage:`, error);
  }
}

// Deep clone an object
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// Check if two numbers are approximately equal (useful for floating point comparison)
export function approximatelyEqual(a: number, b: number, epsilon = 0.001): boolean {
  return Math.abs(a - b) < epsilon;
}

// Linear interpolation
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * clamp(t, 0, 1);
}

// Map a value from one range to another
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  const normalized = (value - inMin) / (inMax - inMin);
  return lerp(outMin, outMax, normalized);
}

// Format a date for display
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

// Calculate compound interest
export function compoundInterest(
  principal: number,
  rate: number,
  years: number
): number {
  return principal * Math.pow(1 + rate, years);
}

// Calculate present value
export function presentValue(
  futureValue: number,
  rate: number,
  years: number
): number {
  if (rate === 0) return futureValue;
  return futureValue / Math.pow(1 + rate, years);
}

// Round to specified decimal places
export function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

// Check if a value is within a range
export function inRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max;
}

// Throttle function calls
export function throttle<T extends (...args: any[]) => any>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}