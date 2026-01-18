'use client';

import { BaristaFireInputs as InputsType } from '@/types/baristaFire';
import InputField from '@/components/ui/InputField';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { Calendar, Target, PiggyBank, Wallet, Coffee, Heart } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';

interface Props {
  inputs: InputsType;
  onChange: (field: keyof InputsType, value: number | boolean) => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export default function BaristaFireInputs({ inputs, onChange, currency, onCurrencyChange }: Props) {
  const currencySymbol = CURRENCIES[currency].symbol;
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Financial Details</h2>
        <CurrencySelector value={currency} onChange={onCurrencyChange} />
      </div>
      
      {/* Age Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <InputField
          label="Current Age"
          value={inputs.currentAge === 0 ? '' : inputs.currentAge}
          onChange={(v) => onChange('currentAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="30"
          helperText="Your age today"
        />
        
        <InputField
          label="Barista Start Age"
          value={inputs.baristaStartAge === 0 ? '' : inputs.baristaStartAge}
          onChange={(v) => onChange('baristaStartAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="40"
          helperText="When to go part-time"
        />
        
        <InputField
          label="Full Retirement Age"
          value={inputs.targetRetirementAge === 0 ? '' : inputs.targetRetirementAge}
          onChange={(v) => onChange('targetRetirementAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="60"
          helperText="Stop working entirely"
        />
      </div>
      
      {/* Financial Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Current Investments"
          value={inputs.currentInvestments}
          onChange={(v) => onChange('currentInvestments', Number(v))}
          type="currency"
          placeholder="50,000"
          prefix={currencySymbol}
          helperText="Total invested assets"
        />
        
        <InputField
          label="Monthly Expenses"
          value={inputs.monthlyExpenses}
          onChange={(v) => onChange('monthlyExpenses', Number(v))}
          type="currency"
          placeholder="4,000"
          prefix={currencySymbol}
          helperText="Current monthly spending"
        />
        
        <InputField
          label="Monthly Savings"
          value={inputs.monthlyContribution}
          onChange={(v) => onChange('monthlyContribution', Number(v))}
          type="currency"
          placeholder="1,500"
          prefix={currencySymbol}
          helperText="Current retirement savings"
        />
        
        <InputField
          label="Part-Time Income"
          value={inputs.expectedPartTimeIncome}
          onChange={(v) => onChange('expectedPartTimeIncome', Number(v))}
          type="currency"
          placeholder="2,000"
          prefix={currencySymbol}
          helperText="Expected monthly (after tax)"
        />
      </div>
      
      {/* Health Insurance Section */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Health Insurance Coverage</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.includesHealthInsurance}
              onChange={(e) => onChange('includesHealthInsurance', e.target.checked)}
              className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
            />
            <span className="text-sm text-gray-700">Part-time job includes health insurance</span>
          </label>
          
          {!inputs.includesHealthInsurance && (
            <InputField
              label="Monthly Health Insurance Cost"
              value={inputs.healthInsuranceCost}
              onChange={(v) => onChange('healthInsuranceCost', Number(v))}
              type="currency"
              placeholder="500"
              prefix={currencySymbol}
              helperText="If buying independently"
            />
          )}
        </div>
      </div>
    </div>
  );
}