'use client';

import { useState } from 'react';
import { ArrowLeftRight, Wallet, TrendingDown, Calculator } from 'lucide-react';

type Mode = 'portfolio' | 'withdrawal';

const SWR_PRESETS = [
  { label: '3.0% (very conservative)', value: 0.03 },
  { label: '3.5% (conservative)', value: 0.035 },
  { label: '4.0% (Trinity Study)', value: 0.04 },
  { label: '4.5% (slightly aggressive)', value: 0.045 },
  { label: '5.0% (aggressive)', value: 0.05 },
];

function fmt(n: number): string {
  return n.toLocaleString('en-US', { maximumFractionDigits: 0 });
}

export default function FourPercentRuleCalculator() {
  const [mode, setMode] = useState<Mode>('portfolio');
  const [annualExpenses, setAnnualExpenses] = useState(60000);
  const [portfolio, setPortfolio] = useState(1500000);
  const [swr, setSwr] = useState(0.04);

  const portfolioNeeded = annualExpenses / swr;
  const safeAnnualWithdrawal = portfolio * swr;
  const safeMonthlyWithdrawal = safeAnnualWithdrawal / 12;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 sm:p-8">
      {/* Mode toggle */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => setMode('portfolio')}
          className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-colors ${
            mode === 'portfolio'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          What portfolio do I need?
        </button>
        <ArrowLeftRight className="w-4 h-4 text-gray-400" />
        <button
          onClick={() => setMode('withdrawal')}
          className={`flex-1 py-2.5 px-4 text-sm font-medium rounded-lg transition-colors ${
            mode === 'withdrawal'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          What can I safely withdraw?
        </button>
      </div>

      {/* SWR selector */}
      <div className="mb-6 bg-gray-50 rounded-lg p-4">
        <label className="text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2 block">
          Safe withdrawal rate
        </label>
        <div className="flex flex-wrap gap-2">
          {SWR_PRESETS.map((preset) => (
            <button
              key={preset.value}
              onClick={() => setSwr(preset.value)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                swr === preset.value
                  ? 'bg-primary-100 text-primary-800 ring-2 ring-primary-300'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Inputs */}
        <div className="space-y-4">
          {mode === 'portfolio' ? (
            <div>
              <label
                htmlFor="annualExpenses"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
              >
                <Wallet className="w-4 h-4 text-primary-600" />
                Annual retirement expenses
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  id="annualExpenses"
                  type="number"
                  value={annualExpenses}
                  onChange={(e) => setAnnualExpenses(Number(e.target.value))}
                  step={1000}
                  min={0}
                  className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                ${fmt(annualExpenses / 12)}/month
              </p>
            </div>
          ) : (
            <div>
              <label
                htmlFor="portfolio"
                className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2"
              >
                <TrendingDown className="w-4 h-4 text-primary-600" />
                Total portfolio value
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  id="portfolio"
                  type="number"
                  value={portfolio}
                  onChange={(e) => setPortfolio(Number(e.target.value))}
                  step={10000}
                  min={0}
                  className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Across all retirement accounts (taxable, 401k, IRA, etc.)
              </p>
            </div>
          )}

          <div className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded p-3 leading-relaxed">
            The 4% rule was derived from the 1998 Trinity Study by Cooley, Hubbard, and Walz at Trinity University in San Antonio, Texas. It found that a 4% withdrawal rate adjusted yearly for inflation has a 95%+ historical success rate for 30-year retirements.
          </div>
        </div>

        {/* Output */}
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg p-5">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            Result
          </div>

          {mode === 'portfolio' ? (
            <>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Portfolio needed
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-4">
                ${fmt(portfolioNeeded)}
              </div>
              <div className="space-y-2 text-sm border-t border-primary-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Annual expenses:</span>
                  <span className="font-medium">${fmt(annualExpenses)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Withdrawal rate:</span>
                  <span className="font-medium">{(swr * 100).toFixed(1)}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Multiplier:</span>
                  <span className="font-medium">{(1 / swr).toFixed(1)}× expenses</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                Safe annual withdrawal
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-primary-700 mb-1">
                ${fmt(safeAnnualWithdrawal)}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                ≈ ${fmt(safeMonthlyWithdrawal)}/month
              </div>
              <div className="space-y-2 text-sm border-t border-primary-200 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Portfolio:</span>
                  <span className="font-medium">${fmt(portfolio)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Withdrawal rate:</span>
                  <span className="font-medium">{(swr * 100).toFixed(1)}%</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Sensitivity table */}
      <div className="mt-8">
        <h3 className="text-base font-semibold text-gray-900 mb-3">
          Withdrawal-rate sensitivity
        </h3>
        <p className="text-xs text-gray-600 mb-3">
          The same {mode === 'portfolio' ? 'expense level' : 'portfolio'} produces very different requirements at different SWRs:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300 text-left">
                <th className="py-2 font-semibold">SWR</th>
                <th className="py-2 font-semibold text-right">
                  {mode === 'portfolio' ? 'Portfolio needed' : 'Annual withdrawal'}
                </th>
                <th className="py-2 font-semibold text-right">
                  {mode === 'portfolio' ? 'Multiplier' : 'Monthly'}
                </th>
              </tr>
            </thead>
            <tbody>
              {SWR_PRESETS.map((preset) => (
                <tr
                  key={preset.value}
                  className={`border-b border-gray-100 ${
                    preset.value === swr ? 'bg-primary-50' : ''
                  }`}
                >
                  <td className="py-1.5 text-gray-700">
                    {(preset.value * 100).toFixed(1)}%
                  </td>
                  <td className="py-1.5 text-right text-gray-900 font-medium">
                    $
                    {fmt(
                      mode === 'portfolio'
                        ? annualExpenses / preset.value
                        : portfolio * preset.value,
                    )}
                  </td>
                  <td className="py-1.5 text-right text-gray-700">
                    {mode === 'portfolio'
                      ? `${(1 / preset.value).toFixed(1)}× expenses`
                      : `$${fmt((portfolio * preset.value) / 12)}/mo`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
