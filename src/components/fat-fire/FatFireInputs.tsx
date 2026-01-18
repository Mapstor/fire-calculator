'use client';

import { FatFireInputs as InputsType } from '@/types/fatFire';
import InputField from '@/components/ui/InputField';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { Crown } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';

interface Props {
  inputs: InputsType;
  onChange: (field: keyof InputsType, value: number | boolean) => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export default function FatFireInputs({ inputs, onChange, currency, onCurrencyChange }: Props) {
  const currencySymbol = CURRENCIES[currency].symbol;
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Luxury Retirement Planning</h2>
        <CurrencySelector value={currency} onChange={onCurrencyChange} />
      </div>
      
      {/* Age & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Current Age"
          value={inputs.currentAge === 0 ? '' : inputs.currentAge}
          onChange={(v) => onChange('currentAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="30"
          helperText="Your age today"
        />
        
        <InputField
          label="Target Retirement Age"
          value={inputs.targetRetirementAge === 0 ? '' : inputs.targetRetirementAge}
          onChange={(v) => onChange('targetRetirementAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="50"
          helperText="When to achieve Fat FIRE"
        />
      </div>
      
      {/* Financial Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Current Investments"
          value={inputs.currentInvestments}
          onChange={(v) => onChange('currentInvestments', Number(v))}
          type="currency"
          placeholder="100,000"
          prefix={currencySymbol}
          helperText="Total invested assets"
        />
        
        <InputField
          label="Monthly Income"
          value={inputs.monthlyIncome}
          onChange={(v) => onChange('monthlyIncome', Number(v))}
          type="currency"
          placeholder="15,000"
          prefix={currencySymbol}
          helperText="Gross monthly income"
        />
        
        <InputField
          label="Current Monthly Savings"
          value={inputs.monthlyContribution}
          onChange={(v) => onChange('monthlyContribution', Number(v))}
          type="currency"
          placeholder="7,000"
          prefix={currencySymbol}
          helperText="Amount saved monthly"
        />
        
        <InputField
          label="Current Monthly Expenses"
          value={inputs.currentMonthlyExpenses}
          onChange={(v) => onChange('currentMonthlyExpenses', Number(v))}
          type="currency"
          placeholder="6,000"
          prefix={currencySymbol}
          helperText="Current spending"
        />
      </div>
      
      {/* Luxury Lifestyle Target */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Crown className="w-4 h-4 text-purple-600" />
          Target Luxury Spending
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Desired Monthly Spending"
            value={inputs.desiredMonthlySpending}
            onChange={(v) => onChange('desiredMonthlySpending', Number(v))}
            type="currency"
            placeholder="10,000"
            prefix={currencySymbol}
            helperText="Target lifestyle in retirement"
          />
          
          <div className="bg-purple-50 rounded-lg p-3 flex items-center justify-between">
            <span className="text-xs text-purple-700">Annual Target:</span>
            <span className="text-sm font-semibold text-purple-900">
              {currencySymbol}{(inputs.desiredMonthlySpending * 12).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      
      {/* Lifestyle Breakdown (Optional) */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Lifestyle Breakdown (Optional)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Housing Budget"
            value={inputs.housingBudget}
            onChange={(v) => onChange('housingBudget', Number(v))}
            type="currency"
            placeholder="2,500"
            prefix={currencySymbol}
            helperText="Monthly housing costs"
          />
          
          <InputField
            label="Annual Travel Budget"
            value={inputs.travelBudget}
            onChange={(v) => onChange('travelBudget', Number(v))}
            type="currency"
            placeholder="24,000"
            prefix={currencySymbol}
            helperText="Yearly travel spending"
          />
          
          <InputField
            label="Healthcare Budget"
            value={inputs.healthcareBudget}
            onChange={(v) => onChange('healthcareBudget', Number(v))}
            type="currency"
            placeholder="1,000"
            prefix={currencySymbol}
            helperText="Monthly healthcare"
          />
          
          <InputField
            label="Entertainment & Dining"
            value={inputs.entertainmentBudget}
            onChange={(v) => onChange('entertainmentBudget', Number(v))}
            type="currency"
            placeholder="1,500"
            prefix={currencySymbol}
            helperText="Monthly entertainment"
          />
        </div>
      </div>
      
      {/* Asset Planning */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Asset Planning</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.includeRealEstate}
              onChange={(e) => onChange('includeRealEstate', e.target.checked)}
              className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <span className="text-sm text-gray-700">Planning to own real estate</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.includeTaxableBrokerage}
              onChange={(e) => onChange('includeTaxableBrokerage', e.target.checked)}
              className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <span className="text-sm text-gray-700">Using taxable brokerage accounts</span>
          </label>
        </div>
      </div>
    </div>
  );
}