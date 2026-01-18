'use client';

import { LeanFireInputs as InputsType } from '@/types/leanFire';
import InputField from '@/components/ui/InputField';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { Leaf, DollarSign, MapPin } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';

interface Props {
  inputs: InputsType;
  onChange: (field: keyof InputsType, value: number | boolean) => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export default function LeanFireInputs({ inputs, onChange, currency, onCurrencyChange }: Props) {
  const currencySymbol = CURRENCIES[currency].symbol;
  const maxLeanSpending = 3333; // $40K/year max for Lean FIRE
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Lean FIRE Planning</h2>
        <CurrencySelector value={currency} onChange={onCurrencyChange} />
      </div>
      
      {/* Age & Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Current Age"
          value={inputs.currentAge === 0 ? '' : inputs.currentAge}
          onChange={(v) => onChange('currentAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="25"
          helperText="Your age today"
        />
        
        <InputField
          label="Target Retirement Age"
          value={inputs.targetRetirementAge === 0 ? '' : inputs.targetRetirementAge}
          onChange={(v) => onChange('targetRetirementAge', v === '' ? 0 : Number(v))}
          type="number"
          placeholder="45"
          helperText="When to achieve Lean FIRE"
        />
      </div>
      
      {/* Financial Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField
          label="Current Investments"
          value={inputs.currentInvestments}
          onChange={(v) => onChange('currentInvestments', Number(v))}
          type="currency"
          placeholder="20,000"
          prefix={currencySymbol}
          helperText="Total invested assets"
        />
        
        <InputField
          label="Monthly Income"
          value={inputs.monthlyIncome}
          onChange={(v) => onChange('monthlyIncome', Number(v))}
          type="currency"
          placeholder="5,000"
          prefix={currencySymbol}
          helperText="Gross monthly income"
        />
        
        <InputField
          label="Current Monthly Expenses"
          value={inputs.currentMonthlyExpenses}
          onChange={(v) => onChange('currentMonthlyExpenses', Number(v))}
          type="currency"
          placeholder="4,000"
          prefix={currencySymbol}
          helperText="Current spending"
        />
        
        <InputField
          label="Monthly Savings"
          value={inputs.monthlyContribution}
          onChange={(v) => onChange('monthlyContribution', Number(v))}
          type="currency"
          placeholder="2,000"
          prefix={currencySymbol}
          helperText="Amount saved monthly"
        />
      </div>
      
      {/* Lean Spending Target */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Leaf className="w-4 h-4 text-green-600" />
          Target Lean Spending
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Target Monthly Spending"
            value={inputs.targetMonthlySpending}
            onChange={(v) => onChange('targetMonthlySpending', Math.min(Number(v), maxLeanSpending))}
            type="currency"
            placeholder="2,500"
            prefix={currencySymbol}
            helperText={`Max ${currencySymbol}${maxLeanSpending}/mo for Lean FIRE`}
          />
          
          <div className="bg-green-50 rounded-lg p-3 flex items-center justify-between">
            <span className="text-xs text-green-700">Annual Target:</span>
            <span className="text-sm font-semibold text-green-900">
              {currencySymbol}{(inputs.targetMonthlySpending * 12).toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      
      {/* Budget Breakdown */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Budget Breakdown</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Housing (Rent/Utilities)"
            value={inputs.housingCost}
            onChange={(v) => onChange('housingCost', Number(v))}
            type="currency"
            placeholder="800"
            prefix={currencySymbol}
            helperText="Monthly housing costs"
          />
          
          <InputField
            label="Food & Groceries"
            value={inputs.foodBudget}
            onChange={(v) => onChange('foodBudget', Number(v))}
            type="currency"
            placeholder="400"
            prefix={currencySymbol}
            helperText="Monthly food spending"
          />
          
          <InputField
            label="Transportation"
            value={inputs.transportationCost}
            onChange={(v) => onChange('transportationCost', Number(v))}
            type="currency"
            placeholder="300"
            prefix={currencySymbol}
            helperText="Car/transit costs"
          />
          
          <InputField
            label="Healthcare"
            value={inputs.healthcareCost}
            onChange={(v) => onChange('healthcareCost', Number(v))}
            type="currency"
            placeholder="200"
            prefix={currencySymbol}
            helperText="Insurance & medical"
          />
          
          <InputField
            label="Other Essentials"
            value={inputs.otherEssentials}
            onChange={(v) => onChange('otherEssentials', Number(v))}
            type="currency"
            placeholder="800"
            prefix={currencySymbol}
            helperText="Everything else"
          />
          
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-gray-600">Total Budget:</span>
              <span className="text-sm font-semibold text-gray-900">
                {currencySymbol}{(inputs.housingCost + inputs.foodBudget + inputs.transportationCost + inputs.healthcareCost + inputs.otherEssentials).toLocaleString()}/mo
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Geographic Arbitrage */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blue-600" />
          Geographic Arbitrage
        </h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.considerGeoArbitrage}
              onChange={(e) => onChange('considerGeoArbitrage', e.target.checked)}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="text-sm text-gray-700">Planning to relocate to lower cost area</span>
          </label>
          
          {inputs.considerGeoArbitrage && (
            <InputField
              label="Expected Cost Savings"
              value={inputs.geoArbitrageSavings}
              onChange={(v) => onChange('geoArbitrageSavings', Math.min(50, Number(v)))}
              type="number"
              placeholder="20"
              suffix="%"
              helperText="Reduction in living costs (max 50%)"
            />
          )}
        </div>
      </div>
      
      {/* Emergency Fund */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Risk Management</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.hasEmergencyFund}
              onChange={(e) => onChange('hasEmergencyFund', e.target.checked)}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <span className="text-sm text-gray-700">I have a separate emergency fund</span>
          </label>
          
          {inputs.hasEmergencyFund && (
            <InputField
              label="Emergency Fund Size"
              value={inputs.emergencyFundMonths}
              onChange={(v) => onChange('emergencyFundMonths', Number(v))}
              type="number"
              placeholder="6"
              suffix="months"
              helperText="Months of expenses covered"
            />
          )}
        </div>
      </div>
    </div>
  );
}