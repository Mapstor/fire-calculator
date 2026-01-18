'use client';

import { CouplesFireInputs as InputsType } from '@/types/couplesFire';
import InputField from '@/components/ui/InputField';
import CurrencySelector from '@/components/ui/CurrencySelector';
import { Heart, User, DollarSign, Home, Users } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';
import { CURRENCIES } from '@/lib/constants';

interface Props {
  inputs: InputsType;
  onChange: (field: keyof InputsType, value: string | number | boolean) => void;
  currency: CurrencyCode;
  onCurrencyChange: (currency: CurrencyCode) => void;
}

export default function CouplesFireInputs({ inputs, onChange, currency, onCurrencyChange }: Props) {
  const currencySymbol = CURRENCIES[currency].symbol;
  
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">Joint Financial Planning</h2>
        <CurrencySelector value={currency} onChange={onCurrencyChange} />
      </div>
      
      {/* Partner 1 Details */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <User className="w-4 h-4 text-rose-600" />
          Partner 1 Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Name"
            value={inputs.partner1Name}
            onChange={(v) => onChange('partner1Name', v)}
            type="text"
            placeholder="Partner 1"
            helperText="Optional nickname"
          />
          
          <InputField
            label="Current Age"
            value={inputs.partner1Age}
            onChange={(v) => onChange('partner1Age', Number(v))}
            type="number"
            placeholder="30"
            helperText="Current age"
          />
          
          <InputField
            label="Annual Income"
            value={inputs.partner1Income}
            onChange={(v) => onChange('partner1Income', Number(v))}
            type="currency"
            placeholder="75,000"
            prefix={currencySymbol}
            helperText="Gross annual income"
          />
          
          <InputField
            label="Current Savings"
            value={inputs.partner1CurrentSavings}
            onChange={(v) => onChange('partner1CurrentSavings', Number(v))}
            type="currency"
            placeholder="50,000"
            prefix={currencySymbol}
            helperText="Individual retirement accounts"
          />
          
          <InputField
            label="Target Retirement Age"
            value={inputs.partner1RetirementAge}
            onChange={(v) => onChange('partner1RetirementAge', Number(v))}
            type="number"
            placeholder="50"
            helperText="Desired retirement age"
          />
          
          <InputField
            label="401k Match"
            value={inputs.employerMatchPartner1}
            onChange={(v) => onChange('employerMatchPartner1', Number(v))}
            type="number"
            placeholder="4"
            suffix="%"
            helperText="Employer match percentage"
          />
        </div>
      </div>
      
      {/* Partner 2 Details */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <User className="w-4 h-4 text-pink-600" />
          Partner 2 Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Name"
            value={inputs.partner2Name}
            onChange={(v) => onChange('partner2Name', v)}
            type="text"
            placeholder="Partner 2"
            helperText="Optional nickname"
          />
          
          <InputField
            label="Current Age"
            value={inputs.partner2Age}
            onChange={(v) => onChange('partner2Age', Number(v))}
            type="number"
            placeholder="28"
            helperText="Current age"
          />
          
          <InputField
            label="Annual Income"
            value={inputs.partner2Income}
            onChange={(v) => onChange('partner2Income', Number(v))}
            type="currency"
            placeholder="65,000"
            prefix={currencySymbol}
            helperText="Gross annual income"
          />
          
          <InputField
            label="Current Savings"
            value={inputs.partner2CurrentSavings}
            onChange={(v) => onChange('partner2CurrentSavings', Number(v))}
            type="currency"
            placeholder="40,000"
            prefix={currencySymbol}
            helperText="Individual retirement accounts"
          />
          
          <InputField
            label="Target Retirement Age"
            value={inputs.partner2RetirementAge}
            onChange={(v) => onChange('partner2RetirementAge', Number(v))}
            type="number"
            placeholder="50"
            helperText="Desired retirement age"
          />
          
          <InputField
            label="401k Match"
            value={inputs.employerMatchPartner2}
            onChange={(v) => onChange('employerMatchPartner2', Number(v))}
            type="number"
            placeholder="3"
            suffix="%"
            helperText="Employer match percentage"
          />
        </div>
      </div>
      
      {/* Combined Finances */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3 flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-600" />
          Combined Finances
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Shared Assets"
            value={inputs.sharedAssets}
            onChange={(v) => onChange('sharedAssets', Number(v))}
            type="currency"
            placeholder="30,000"
            prefix={currencySymbol}
            helperText="Joint investment accounts"
          />
          
          <InputField
            label="Monthly Expenses"
            value={inputs.combinedMonthlyExpenses}
            onChange={(v) => onChange('combinedMonthlyExpenses', Number(v))}
            type="currency"
            placeholder="5,000"
            prefix={currencySymbol}
            helperText="Total household expenses"
          />
          
          <InputField
            label="Monthly Savings"
            value={inputs.combinedMonthlySavings}
            onChange={(v) => onChange('combinedMonthlySavings', Number(v))}
            type="currency"
            placeholder="4,000"
            prefix={currencySymbol}
            helperText="Total monthly savings"
          />
          
          <InputField
            label="Retirement Spending"
            value={inputs.retirementSpendingTarget}
            onChange={(v) => onChange('retirementSpendingTarget', Number(v))}
            type="currency"
            placeholder="6,000"
            prefix={currencySymbol}
            helperText="Monthly target in retirement"
          />
        </div>
      </div>
      
      {/* Tax & Insurance Options */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Tax & Insurance</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Filing Status</label>
            <select
              value={inputs.filingStatus}
              onChange={(e) => onChange('filingStatus', e.target.value)}
              className="w-full h-12 px-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="married-jointly">Married Filing Jointly</option>
              <option value="married-separately">Married Filing Separately</option>
            </select>
          </div>
          
          <div>
            <label className="text-xs font-medium text-gray-700 mb-1 block">Health Insurance</label>
            <select
              value={inputs.healthInsuranceProvider}
              onChange={(e) => onChange('healthInsuranceProvider', e.target.value)}
              className="w-full h-12 px-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="partner1">{inputs.partner1Name}'s Employer</option>
              <option value="partner2">{inputs.partner2Name}'s Employer</option>
              <option value="both">Both Have Coverage</option>
              <option value="none">Private/Marketplace</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Family Planning */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Family Planning</h3>
        <div className="space-y-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.synchronizedRetirement}
              onChange={(e) => onChange('synchronizedRetirement', e.target.checked)}
              className="h-4 w-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <span className="text-sm text-gray-700">Plan to retire at the same time</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.includeChildren}
              onChange={(e) => onChange('includeChildren', e.target.checked)}
              className="h-4 w-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <span className="text-sm text-gray-700">Include children in planning</span>
          </label>
          
          {inputs.includeChildren && (
            <InputField
              label="Number of Children"
              value={inputs.childrenCount}
              onChange={(v) => onChange('childrenCount', Number(v))}
              type="number"
              placeholder="2"
              helperText="Current or planned"
            />
          )}
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={inputs.lifeInsurance}
              onChange={(e) => onChange('lifeInsurance', e.target.checked)}
              className="h-4 w-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
            />
            <span className="text-sm text-gray-700">Have term life insurance</span>
          </label>
        </div>
      </div>
      
      {/* Emergency Fund */}
      <div className="pt-3 border-t border-gray-200">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Risk Management</h3>
        <InputField
          label="Emergency Fund"
          value={inputs.emergencyFundMonths}
          onChange={(v) => onChange('emergencyFundMonths', Number(v))}
          type="number"
          placeholder="6"
          suffix="months"
          helperText="Combined emergency fund coverage"
        />
      </div>
    </div>
  );
}