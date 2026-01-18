'use client';

import React, { useState } from 'react';
import InputField from '@/components/ui/InputField';
import { ChevronDown, ChevronUp, TrendingUp, Wallet, Users, Calculator } from 'lucide-react';
import { AdvancedInputs as AdvancedInputsType, CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';
import { parseCurrencyInput, parsePercentInput } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface AdvancedInputsProps {
  values: AdvancedInputsType;
  currency: CurrencyCode;
  onChange: (field: keyof AdvancedInputsType, value: any) => void;
}

export default function AdvancedInputs({
  values,
  currency,
  onChange,
}: AdvancedInputsProps) {
  const [isExpanded, setIsExpanded] = useState(true); // Expanded by default
  const currencySymbol = CURRENCIES[currency].symbol;

  const handleNumberChange = (field: keyof AdvancedInputsType, value: string) => {
    const numValue = parseCurrencyInput(value);
    onChange(field, numValue);
  };

  const handlePercentChange = (field: keyof AdvancedInputsType, value: string) => {
    const numValue = parsePercentInput(value);
    onChange(field, numValue);
  };

  const handleCheckboxChange = (field: keyof AdvancedInputsType, checked: boolean) => {
    onChange(field, checked);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
      >
        <span className="text-base font-medium text-gray-900">
          Advanced Options
        </span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      
      <div className={cn(
        "transition-all duration-300 ease-in-out",
        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      )}>
        <div className="p-6 space-y-6">
          {/* Investment Assumptions */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Investment Assumptions
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Expected Return"
                value={values.expectedReturn * 100}
                onChange={(value) => handlePercentChange('expectedReturn', value)}
                type="percent"
                suffix="%"
                placeholder="7"
                helperText="Annual return before inflation"
              />
              
              <InputField
                label="Inflation Rate"
                value={values.inflationRate * 100}
                onChange={(value) => handlePercentChange('inflationRate', value)}
                type="percent"
                suffix="%"
                placeholder="3"
                helperText="Expected annual inflation"
              />
              
              <InputField
                label="Withdrawal Rate"
                value={values.withdrawalRate * 100}
                onChange={(value) => handlePercentChange('withdrawalRate', value)}
                type="percent"
                suffix="%"
                placeholder="4"
                helperText="Safe withdrawal rate in retirement"
              />
              
              <InputField
                label="Stock Allocation"
                value={values.stockAllocation * 100}
                onChange={(value) => handlePercentChange('stockAllocation', value)}
                type="percent"
                suffix="%"
                placeholder="90"
                helperText="Percentage in stocks vs bonds"
              />
            </div>
          </div>

          {/* Income Adjustments */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Income Adjustments
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField
                label="Salary Growth Rate"
                value={values.salaryGrowthRate * 100}
                onChange={(value) => handlePercentChange('salaryGrowthRate', value)}
                type="percent"
                suffix="%"
                placeholder="2"
                helperText="Annual salary increase"
              />
              
              <InputField
                label="Side Income"
                value={values.sideIncome}
                onChange={(value) => handleNumberChange('sideIncome', value)}
                type="currency"
                prefix={currencySymbol}
                placeholder="500"
                helperText="Monthly side income"
              />
              
              <InputField
                label="One-Time Windfall"
                value={values.windfall}
                onChange={(value) => handleNumberChange('windfall', value)}
                type="currency"
                prefix={currencySymbol}
                placeholder="0"
                helperText="Inheritance, bonus, etc."
                className="md:col-span-2"
              />
            </div>
          </div>

          {/* Retirement Adjustments */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Retirement Adjustments
            </h4>
            
            <div className="space-y-4">
              {/* Social Security */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={values.includeSocialSecurity}
                    onChange={(e) => handleCheckboxChange('includeSocialSecurity', e.target.checked)}
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Include Social Security
                  </span>
                </label>
                
                {values.includeSocialSecurity && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
                    <InputField
                      label="Monthly Amount"
                      value={values.socialSecurityAmount}
                      onChange={(value) => handleNumberChange('socialSecurityAmount', value)}
                      type="currency"
                      prefix={currencySymbol}
                      placeholder="2,000"
                    />
                    
                    <InputField
                      label="Start Age"
                      value={values.socialSecurityStartAge}
                      onChange={(value) => handleNumberChange('socialSecurityStartAge', value)}
                      type="number"
                      placeholder="67"
                    />
                  </div>
                )}
              </div>

              {/* Pension */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={values.includePension}
                    onChange={(e) => handleCheckboxChange('includePension', e.target.checked)}
                    className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Include Pension
                  </span>
                </label>
                
                {values.includePension && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
                    <InputField
                      label="Monthly Amount"
                      value={values.pensionAmount}
                      onChange={(value) => handleNumberChange('pensionAmount', value)}
                      type="currency"
                      prefix={currencySymbol}
                      placeholder="1,500"
                    />
                    
                    <InputField
                      label="Start Age"
                      value={values.pensionStartAge}
                      onChange={(value) => handleNumberChange('pensionStartAge', value)}
                      type="number"
                      placeholder="65"
                    />
                  </div>
                )}
              </div>

              {/* Retirement Spending */}
              <div>
                <InputField
                  label="Retirement Monthly Spending"
                  value={values.retirementSpending || ''}
                  onChange={(value) => {
                    const numValue = value === '' ? null : parseCurrencyInput(value);
                    onChange('retirementSpending', numValue);
                  }}
                  type="currency"
                  prefix={currencySymbol}
                  placeholder="Same as current expenses"
                  helperText="Leave blank to use current expenses"
                />
              </div>
            </div>
          </div>

          {/* Monte Carlo Simulation */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={values.runMonteCarlo}
                onChange={(e) => handleCheckboxChange('runMonteCarlo', e.target.checked)}
                className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
              />
              <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <Calculator className="h-4 w-4" />
                Run Monte Carlo Simulation
              </span>
            </label>
            <p className="text-xs text-gray-500 ml-6 mt-1">
              Simulate 1,000 market scenarios for probability analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}