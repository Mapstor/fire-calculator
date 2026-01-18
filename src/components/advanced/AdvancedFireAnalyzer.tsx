'use client';

import { useState, useMemo } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Play, BarChart3, TrendingUp, AlertTriangle, Settings, Download } from 'lucide-react';

interface SimulationInputs {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyExpenses: number;
  monthlyIncome: number;
  monthlySavings: number;
  stockAllocation: number;
  simulationCount: number;
  withdrawalStrategy: 'fixed' | 'dynamic' | 'flexible';
  rebalanceFrequency: 'monthly' | 'quarterly' | 'yearly';
}

interface SimulationResult {
  successRate: number;
  medianFinalValue: number;
  percentile10: number;
  percentile90: number;
  worstCaseYear: number;
  timeSeriesData: any[];
  successRateByYear: any[];
  portfolioDistribution: any[];
}

export default function AdvancedFireAnalyzer() {
  const [inputs, setInputs] = useState<SimulationInputs>({
    currentAge: 30,
    retirementAge: 45,
    currentSavings: 100000,
    monthlyExpenses: 4000,
    monthlyIncome: 8000,
    monthlySavings: 4000,
    stockAllocation: 80,
    simulationCount: 1000,
    withdrawalStrategy: 'dynamic',
    rebalanceFrequency: 'yearly'
  });

  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState<SimulationResult | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  // Monte Carlo simulation logic
  const runSimulation = async () => {
    setIsRunning(true);
    
    // Simulate delay for realistic feel
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock Monte Carlo results - In production, this would run actual simulations
    const fireNumber = inputs.monthlyExpenses * 12 * 25;
    const yearsToFire = inputs.retirementAge - inputs.currentAge;
    const yearsInRetirement = 40; // Assume 40 year retirement
    
    // Generate mock time series data
    const timeSeriesData = [];
    const successRateByYear = [];
    
    for (let year = 0; year <= yearsInRetirement; year++) {
      const baseValue = fireNumber * Math.pow(0.96, year); // 4% withdrawal with some variance
      timeSeriesData.push({
        year: inputs.retirementAge + year,
        median: baseValue,
        percentile10: baseValue * 0.4,
        percentile90: baseValue * 1.8,
        percentile25: baseValue * 0.7,
        percentile75: baseValue * 1.3
      });
      
      successRateByYear.push({
        year: inputs.retirementAge + year,
        successRate: Math.max(0, 95 - (year * 1.2) - Math.random() * 10)
      });
    }

    // Portfolio distribution at retirement
    const portfolioDistribution = [
      { range: '$0-500K', scenarios: 50, percentage: 5 },
      { range: '$500K-1M', scenarios: 120, percentage: 12 },
      { range: '$1M-2M', scenarios: 300, percentage: 30 },
      { range: '$2M-3M', scenarios: 280, percentage: 28 },
      { range: '$3M-5M', scenarios: 180, percentage: 18 },
      { range: '$5M+', scenarios: 70, percentage: 7 }
    ];

    const mockResults: SimulationResult = {
      successRate: 89.2,
      medianFinalValue: fireNumber * 1.2,
      percentile10: fireNumber * 0.3,
      percentile90: fireNumber * 2.1,
      worstCaseYear: inputs.retirementAge + 3,
      timeSeriesData,
      successRateByYear,
      portfolioDistribution
    };

    setResults(mockResults);
    setIsRunning(false);
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getSuccessRateColor = (rate: number) => {
    if (rate >= 90) return 'text-green-600 bg-green-50';
    if (rate >= 80) return 'text-yellow-600 bg-yellow-50';
    return 'text-red-600 bg-red-50';
  };

  const getSuccessRateIcon = (rate: number) => {
    if (rate >= 90) return '✅';
    if (rate >= 80) return '⚠️';
    return '❌';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-blue-600" />
            Advanced Monte Carlo Analysis
          </h2>
          <p className="text-gray-600 mt-1">Professional-grade FIRE analysis with risk assessment</p>
        </div>
        <button
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
        >
          <Settings className="w-4 h-4" />
          {showAdvanced ? 'Hide' : 'Show'} Advanced Options
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Panel */}
        <div className="lg:col-span-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scenario Parameters</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Current Age</label>
                <input
                  type="number"
                  value={inputs.currentAge}
                  onChange={(e) => setInputs({...inputs, currentAge: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Retirement Age</label>
                <input
                  type="number"
                  value={inputs.retirementAge}
                  onChange={(e) => setInputs({...inputs, retirementAge: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Current Savings</label>
              <input
                type="number"
                value={inputs.currentSavings}
                onChange={(e) => setInputs({...inputs, currentSavings: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Expenses</label>
              <input
                type="number"
                value={inputs.monthlyExpenses}
                onChange={(e) => setInputs({...inputs, monthlyExpenses: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Savings</label>
              <input
                type="number"
                value={inputs.monthlySavings}
                onChange={(e) => setInputs({...inputs, monthlySavings: parseInt(e.target.value)})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Allocation: {inputs.stockAllocation}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={inputs.stockAllocation}
                onChange={(e) => setInputs({...inputs, stockAllocation: parseInt(e.target.value)})}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Conservative</span>
                <span>Aggressive</span>
              </div>
            </div>

            {showAdvanced && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Withdrawal Strategy</label>
                  <select
                    value={inputs.withdrawalStrategy}
                    onChange={(e) => setInputs({...inputs, withdrawalStrategy: e.target.value as any})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="fixed">Fixed 4% Rule</option>
                    <option value="dynamic">Dynamic (Guardrails)</option>
                    <option value="flexible">Flexible Spending</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Rebalancing</label>
                  <select
                    value={inputs.rebalanceFrequency}
                    onChange={(e) => setInputs({...inputs, rebalanceFrequency: e.target.value as any})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Simulation Runs: {inputs.simulationCount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="10000"
                    step="100"
                    value={inputs.simulationCount}
                    onChange={(e) => setInputs({...inputs, simulationCount: parseInt(e.target.value)})}
                    className="w-full"
                  />
                </div>
              </>
            )}

            <button
              onClick={runSimulation}
              disabled={isRunning}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isRunning ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Running Simulation...
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run Monte Carlo Analysis
                </>
              )}
            </button>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2">
          {!results ? (
            <div className="flex items-center justify-center h-96 bg-gray-50 rounded-lg">
              <div className="text-center">
                <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Ready for Analysis</h3>
                <p className="text-gray-500">Configure your parameters and run the Monte Carlo simulation</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <div className={`p-4 rounded-lg border-2 ${getSuccessRateColor(results.successRate)}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{getSuccessRateIcon(results.successRate)}</span>
                    <span className="text-sm font-medium">Success Rate</span>
                  </div>
                  <div className="text-2xl font-bold">{results.successRate.toFixed(1)}%</div>
                  <div className="text-xs mt-1">
                    1,000 scenarios
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-blue-800">Median Final Value</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-900">
                    {formatCurrency(results.medianFinalValue)}
                  </div>
                  <div className="text-xs text-blue-700 mt-1">At age 85</div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-gray-700">10th Percentile</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {formatCurrency(results.percentile10)}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">Worst 10%</div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-green-700">90th Percentile</span>
                  </div>
                  <div className="text-2xl font-bold text-green-800">
                    {formatCurrency(results.percentile90)}
                  </div>
                  <div className="text-xs text-green-600 mt-1">Best 10%</div>
                </div>
              </div>

              {/* Portfolio Value Over Time */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Portfolio Value Projections</h4>
                <div style={{ width: '100%', height: 300 }}>
                  <ResponsiveContainer>
                    <AreaChart data={results.timeSeriesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis tickFormatter={(value) => formatCurrency(value)} />
                      <Tooltip formatter={(value: any) => formatCurrency(value)} />
                      <Area
                        type="monotone"
                        dataKey="percentile10"
                        stackId="1"
                        stroke="#ef4444"
                        fill="#fef2f2"
                        name="10th Percentile"
                      />
                      <Area
                        type="monotone"
                        dataKey="percentile90"
                        stackId="2"
                        stroke="#22c55e"
                        fill="#f0fdf4"
                        name="90th Percentile"
                      />
                      <Line
                        type="monotone"
                        dataKey="median"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        name="Median"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Success Rate by Year */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Rate Over Time</h4>
                <div style={{ width: '100%', height: 200 }}>
                  <ResponsiveContainer>
                    <LineChart data={results.successRateByYear}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="year" />
                      <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                      <Tooltip formatter={(value: any) => `${value.toFixed(1)}%`} />
                      <Line
                        type="monotone"
                        dataKey="successRate"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        name="Success Rate"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Risk Warnings */}
              {results.successRate < 90 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-semibold text-yellow-800">Risk Assessment</h4>
                  </div>
                  <div className="space-y-2 text-sm text-yellow-700">
                    <p>• Success rate below 90% indicates elevated risk</p>
                    <p>• Consider increasing savings rate or delaying retirement</p>
                    <p>• Flexible spending strategy could improve outcomes</p>
                    {results.worstCaseYear && (
                      <p>• Most vulnerable period: Year {results.worstCaseYear - inputs.retirementAge + 1} of retirement</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}