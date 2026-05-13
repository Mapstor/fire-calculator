'use client';

import { useState } from 'react';
import { Wallet, Leaf, Flame, Crown, Calculator } from 'lucide-react';

function fmt(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

const FIRE_TYPES = [
  {
    name: 'Lean FIRE',
    Icon: Leaf,
    color: 'text-green-700',
    bg: 'bg-green-50',
    border: 'border-green-200',
    expenses: 35000,
    description: 'Frugal lifestyle, $30-40K/year',
  },
  {
    name: 'Traditional FIRE',
    Icon: Flame,
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    expenses: 60000,
    description: 'Average lifestyle, $50-80K/year',
  },
  {
    name: 'Fat FIRE',
    Icon: Crown,
    color: 'text-purple-700',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    expenses: 150000,
    description: 'Luxury lifestyle, $100K+/year',
  },
];

export default function FireNumberCalculator() {
  const [monthly, setMonthly] = useState(4000);

  const annualExpenses = monthly * 12;
  const fireNumber = annualExpenses * 25;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Calculate your FIRE number</h2>
      <p className="text-sm text-gray-600 mb-6">
        Your FIRE number is the total invested portfolio you need to retire and live off withdrawals indefinitely. Standard formula: <strong>annual expenses × 25</strong> (the inverse of the 4% safe withdrawal rate).
      </p>

      {/* Input */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div>
          <label
            htmlFor="monthlyExpenses"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
          >
            <Wallet className="w-4 h-4 text-primary-600" />
            Monthly retirement expenses
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
            <input
              id="monthlyExpenses"
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(Math.max(0, Number(e.target.value)))}
              step={100}
              min={0}
              className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg font-medium"
            />
          </div>
          <input
            type="range"
            min={1000}
            max={20000}
            step={250}
            value={Math.min(20000, Math.max(1000, monthly))}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="w-full mt-3"
            aria-label="Monthly expenses slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>$1K/mo</span>
            <span>$10K/mo</span>
            <span>$20K/mo</span>
          </div>
          <p className="text-xs text-gray-500 mt-3 leading-relaxed">
            Include all retirement living costs: housing, food, transportation, healthcare, insurance, travel, and a buffer for irregular expenses.
          </p>
        </div>

        {/* Output */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            Your numbers
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Annual expenses
              </div>
              <div className="text-2xl font-bold text-gray-900">
                ${annualExpenses.toLocaleString()}
              </div>
            </div>
            <div className="border-t border-primary-200 pt-3">
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Your FIRE number
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-700">
                {fmt(fireNumber)}
              </div>
              <div className="text-xs text-gray-600 mt-2">
                = ${annualExpenses.toLocaleString()} × 25 (the inverse of 4%)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FIRE flavor comparison */}
      <h3 className="text-base font-semibold text-gray-900 mb-3">
        How your FIRE number compares to common FIRE flavors
      </h3>
      <p className="text-xs text-gray-600 mb-4">
        Reference points using the 4% rule (× 25 multiplier) at each lifestyle level.
      </p>
      <div className="grid sm:grid-cols-3 gap-3">
        {FIRE_TYPES.map((type) => {
          const target = type.expenses * 25;
          const ratio = annualExpenses / type.expenses;
          const Icon = type.Icon;
          return (
            <div
              key={type.name}
              className={`${type.bg} ${type.border} border rounded-lg p-4`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon className={`w-5 h-5 ${type.color}`} />
                <h4 className={`font-semibold text-sm ${type.color}`}>{type.name}</h4>
              </div>
              <p className="text-xs text-gray-600 mb-2">{type.description}</p>
              <div className="text-xs text-gray-500">Annual expenses</div>
              <div className="text-base font-medium text-gray-900 mb-2">
                ${type.expenses.toLocaleString()}
              </div>
              <div className="text-xs text-gray-500">FIRE number</div>
              <div className={`text-lg font-bold ${type.color}`}>{fmt(target)}</div>
              <div className="text-xs text-gray-600 mt-2 pt-2 border-t border-gray-200">
                {ratio < 0.95 ? (
                  <>
                    Your spending is{' '}
                    <strong>{Math.round((1 - ratio) * 100)}% below</strong> this band
                  </>
                ) : ratio > 1.05 ? (
                  <>
                    Your spending is{' '}
                    <strong>{Math.round((ratio - 1) * 100)}% above</strong> this band
                  </>
                ) : (
                  <strong>You match this band</strong>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
