'use client';

import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import { MonteCarloResults, CurrencyCode } from '@/types/calculator';
import { formatCurrency, formatCompactNumber, formatPercent } from '@/lib/formatters';

interface MonteCarloChartProps {
  results: MonteCarloResults;
  fireNumber: number;
  currentAge: number;
  currency: CurrencyCode;
}

export default function MonteCarloChart({
  results,
  fireNumber,
  currentAge,
  currency,
}: MonteCarloChartProps) {
  // Prepare data for chart
  const data = results.median.map((value, index) => ({
    age: currentAge + index,
    p10: results.percentile10[index],
    p25: results.percentile25[index],
    median: results.median[index],
    p75: results.percentile75[index],
    p90: results.percentile90[index],
  }));

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-900 mb-2">
            Age {label}
          </p>
          <div className="space-y-1 text-xs">
            <p className="text-gray-600">
              90th: {formatCurrency(payload[0]?.value || 0, currency)}
            </p>
            <p className="text-gray-600">
              75th: {formatCurrency(payload[1]?.value || 0, currency)}
            </p>
            <p className="text-primary-600 font-medium">
              Median: {formatCurrency(payload[2]?.value || 0, currency)}
            </p>
            <p className="text-gray-600">
              25th: {formatCurrency(payload[3]?.value || 0, currency)}
            </p>
            <p className="text-gray-600">
              10th: {formatCurrency(payload[4]?.value || 0, currency)}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  const formatYAxis = (value: number) => {
    return formatCompactNumber(value, currency);
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Monte Carlo Simulation
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          {results.simulations} scenarios • {formatPercent(results.successRate / 100)} success rate
        </p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="p90Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dbeafe" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#dbeafe" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="p75Gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#bfdbfe" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#bfdbfe" stopOpacity={0.3} />
            </linearGradient>
            <linearGradient id="medianGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.3} />
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          
          <XAxis
            dataKey="age"
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          
          <YAxis
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickFormatter={formatYAxis}
          />
          
          <Tooltip content={customTooltip} />
          
          <ReferenceLine
            y={fireNumber}
            stroke="#f59e0b"
            strokeDasharray="5 5"
            label={{
              value: "FIRE Target",
              position: "left",
              style: { fill: '#f59e0b', fontSize: 12 },
            }}
          />
          
          <Area
            type="monotone"
            dataKey="p90"
            stroke="none"
            fill="url(#p90Gradient)"
            animationBegin={0}
            animationDuration={1500}
          />
          
          <Area
            type="monotone"
            dataKey="p75"
            stroke="none"
            fill="url(#p75Gradient)"
            animationBegin={100}
            animationDuration={1500}
          />
          
          <Area
            type="monotone"
            dataKey="median"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="none"
            animationBegin={200}
            animationDuration={1500}
          />
          
          <Area
            type="monotone"
            dataKey="p25"
            stroke="none"
            fill="url(#p75Gradient)"
            animationBegin={100}
            animationDuration={1500}
          />
          
          <Area
            type="monotone"
            dataKey="p10"
            stroke="none"
            fill="url(#p90Gradient)"
            animationBegin={0}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex items-center justify-center gap-4 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-blue-200"></div>
          <span className="text-gray-600">10-90th percentile</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-blue-300"></div>
          <span className="text-gray-600">25-75th percentile</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-1 bg-blue-600"></div>
          <span className="text-gray-600">Median</span>
        </div>
      </div>
    </div>
  );
}