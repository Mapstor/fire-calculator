'use client';

import React from 'react';
import InputField from '@/components/ui/InputField';
import { Calendar, Target, DollarSign, CreditCard, PiggyBank } from 'lucide-react';
import { SimpleInputs as SimpleInputsType, CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';
import { parseCurrencyInput } from '@/lib/formatters';

interface SimpleInputsProps {
  values: SimpleInputsType;
  currency: CurrencyCode;
  onChange: (field: keyof SimpleInputsType, value: number) => void;
}

export default function SimpleInputs({
  values,
  currency,
  onChange,
}: SimpleInputsProps) {
  const currencySymbol = CURRENCIES[currency].symbol;

  const handleChange = (field: keyof SimpleInputsType, value: string) => {
    if (field === 'currentAge' || field === 'retirementAge') {
      const numValue = parseInt(value) || 0;
      onChange(field, numValue);
    } else {
      const numValue = parseCurrencyInput(value);
      onChange(field, numValue);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Your Information
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Current Age"
            value={values.currentAge}
            onChange={(value) => handleChange('currentAge', value)}
            icon={Calendar}
            type="number"
            placeholder="30"
            required
            helperText="Your age today"
          />
          
          <InputField
            label="Retirement Age"
            value={values.retirementAge}
            onChange={(value) => handleChange('retirementAge', value)}
            icon={Target}
            type="number"
            placeholder="50"
            required
            helperText="When you want to retire"
          />
          
          <InputField
            label="Monthly Income"
            value={values.monthlyIncome}
            onChange={(value) => handleChange('monthlyIncome', value)}
            icon={DollarSign}
            type="currency"
            prefix={currencySymbol}
            placeholder="5,000"
            required
            helperText="Total gross income per month"
          />
          
          <InputField
            label="Monthly Expenses"
            value={values.monthlyExpenses}
            onChange={(value) => handleChange('monthlyExpenses', value)}
            icon={CreditCard}
            type="currency"
            prefix={currencySymbol}
            placeholder="3,000"
            required
            helperText="Total expenses per month"
          />
          
          <InputField
            label="Current Savings"
            value={values.currentSavings}
            onChange={(value) => handleChange('currentSavings', value)}
            icon={PiggyBank}
            type="currency"
            prefix={currencySymbol}
            placeholder="10,000"
            required
            helperText="Total invested savings"
            className="md:col-span-2"
          />
        </div>
      </div>
    </div>
  );
}