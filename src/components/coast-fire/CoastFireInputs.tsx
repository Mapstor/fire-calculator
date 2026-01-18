'use client';

import { CoastFireInputs as InputsType } from '@/types/coastFire';
import InputField from '@/components/ui/InputField';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { Calendar, Target, PiggyBank, Wallet, TrendingUp } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';

interface Props {
  inputs: InputsType;
  onChange: (field: keyof InputsType, value: number) => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export default function CoastFireInputs({ inputs, onChange, currency, onCurrencyChange }: Props) {
  const currencySymbol = CURRENCIES[currency].symbol;
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Investment Details</h2>
        <CurrencySelector value={currency} onChange={onCurrencyChange} />
      </div>
      
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
          placeholder="65"
          helperText="When you want to fully retire"
        />
        
        <InputField
          label="Current Investments"
          value={inputs.currentInvestments}
          onChange={(v) => onChange('currentInvestments', Number(v))}
          type="currency"
          placeholder="100,000"
          prefix={currencySymbol}
          helperText="401k, IRA, brokerage accounts"
        />
        
        <InputField
          label="Monthly Expenses"
          value={inputs.monthlyExpenses}
          onChange={(v) => onChange('monthlyExpenses', Number(v))}
          type="currency"
          placeholder="4,000"
          prefix={currencySymbol}
          helperText="Your current monthly spending"
        />
      </div>
      
      <div className="pt-3 border-t border-gray-200">
        <InputField
          label="Monthly Contributions (Optional)"
          value={inputs.monthlyContribution}
          onChange={(v) => onChange('monthlyContribution', Number(v))}
          type="currency"
          placeholder="1,000"
          prefix={currencySymbol}
          helperText="Current monthly retirement savings"
        />
        <p className="mt-2 text-xs text-gray-500 leading-relaxed">
          Include to calculate timeline to Coast FIRE milestone
        </p>
      </div>
    </div>
  );
}