'use client';

import { useMemo, useState } from 'react';
import { Percent, Clock, Calendar, Calculator, TrendingUp } from 'lucide-react';
import { SAVINGS_RATE_YEARS } from '@/lib/constants';

/**
 * Years to FIRE given a savings rate `s` (0-1) and real return `r` (decimal).
 *
 *   FIRE number    = (1 - s) · income · 25
 *   annual savings = s · income
 *   FV = PMT · ((1+r)^n − 1) / r   →   n = ln((1-s)·25·r/s + 1) / ln(1+r)
 *
 * Income drops out — savings rate alone determines time-to-FIRE.
 */
function yearsToFireFromSavingsRate(rate: number, r: number): number {
  if (rate <= 0 || rate >= 1) return Infinity;
  if (r <= 0) return Infinity;
  const u = ((1 - rate) * 25 * r) / rate + 1;
  return Math.log(u) / Math.log(1 + r);
}

export default function SavingsRateCalculator() {
  const [rate, setRate] = useState(40); // percent
  const [returnRate, setReturnRate] = useState(7); // percent
  const [age, setAge] = useState(30);

  const result = useMemo(() => {
    const years = yearsToFireFromSavingsRate(rate / 100, returnRate / 100);
    return {
      years,
      retireAge: Math.round(age + years),
    };
  }, [rate, returnRate, age]);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-1">Calculate years to FIRE</h2>
      <p className="text-sm text-gray-600 mb-6">
        At any income, your <strong>savings rate</strong> alone determines how long it takes to retire — not the dollar amount.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-5">
          {/* Savings rate */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Percent className="w-4 h-4 text-primary-600" />
              Savings rate
              <span className="ml-auto text-base font-semibold text-primary-700">
                {rate}%
              </span>
            </label>
            <input
              type="range"
              min={5}
              max={90}
              step={1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full"
              aria-label="Savings rate percentage"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>5%</span>
              <span>50%</span>
              <span>90%</span>
            </div>
          </div>

          {/* Real return */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              Real return (after inflation)
              <span className="ml-auto text-base font-semibold text-emerald-700">
                {returnRate}%
              </span>
            </label>
            <input
              type="range"
              min={3}
              max={10}
              step={0.5}
              value={returnRate}
              onChange={(e) => setReturnRate(Number(e.target.value))}
              className="w-full"
              aria-label="Real return rate percentage"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>3%</span>
              <span>7% (default)</span>
              <span>10%</span>
            </div>
          </div>

          {/* Current age */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              Current age
              <span className="ml-auto text-base font-semibold text-blue-700">
                {age}
              </span>
            </label>
            <input
              type="range"
              min={18}
              max={60}
              step={1}
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full"
              aria-label="Current age"
            />
          </div>
        </div>

        {/* Output */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            Result
          </div>
          <div className="space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Years to FIRE
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-700">
                {Number.isFinite(result.years)
                  ? `${result.years.toFixed(1)} yrs`
                  : '—'}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Retirement age
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-700">
                {Number.isFinite(result.years) ? result.retireAge : '—'}
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed border-t border-primary-200 pt-3">
              Assumes a fixed savings rate, constant real return, and a 4% safe withdrawal rate. Starting balance of $0 (already-saved money would shorten the timeline further).
            </p>
          </div>
        </div>
      </div>

      {/* Reference table */}
      <div className="mt-8">
        <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <Clock className="w-4 h-4 text-gray-600" />
          Reference: years to FIRE at 5% real return
        </h3>
        <p className="text-xs text-gray-600 mb-3">
          From Mr. Money Mustache&apos;s &quot;shockingly simple math&quot; — assumes 5% real return, 4% withdrawal rate, $0 starting balance.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 text-left">
                <th className="py-2 font-semibold">Savings rate</th>
                <th className="py-2 font-semibold text-right">Years to FIRE</th>
                <th className="py-2 font-semibold text-right">Retire age (start at 25)</th>
              </tr>
            </thead>
            <tbody>
              {SAVINGS_RATE_YEARS.map((row) => (
                <tr key={row.rate} className="border-b border-gray-100">
                  <td className="py-1.5 text-gray-700">{row.rate}%</td>
                  <td className="py-1.5 text-right text-gray-900 font-medium">{row.years}</td>
                  <td className="py-1.5 text-right text-gray-700">{Math.round(25 + row.years)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
