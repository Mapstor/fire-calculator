'use client';

import React from 'react';
import { CURRENCIES } from '@/lib/constants';
import { CurrencyCode } from '@/types/calculator';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CurrencySelectorProps {
  value: CurrencyCode;
  onChange: (value: CurrencyCode) => void;
  className?: string;
}

export default function CurrencySelector({
  value,
  onChange,
  className,
}: CurrencySelectorProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as CurrencyCode);
  };

  const currentCurrency = CURRENCIES[value];

  return (
    <div className={cn("relative inline-block", className)}>
      <select
        value={value}
        onChange={handleChange}
        className={cn(
          "appearance-none bg-white border border-gray-300 rounded-lg",
          "pl-3 pr-8 py-2 text-sm font-medium text-gray-700",
          "hover:border-gray-400 focus:outline-none focus:ring-2",
          "focus:ring-primary-500 focus:border-primary-500",
          "cursor-pointer transition-colors"
        )}
      >
        {Object.entries(CURRENCIES).map(([code, currency]) => (
          <option key={code} value={code}>
            {currency.symbol} {code}
          </option>
        ))}
      </select>
      
      <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
        <ChevronDown className="h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
}