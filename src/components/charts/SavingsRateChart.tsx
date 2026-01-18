'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { SavingsRateImpact, CurrencyCode } from '@/types/calculator';
import { formatCurrency, formatYears } from '@/lib/formatters';

interface SavingsRateChartProps {
  data: SavingsRateImpact[];
  currentRate: number;
  currency: CurrencyCode;
}

export default function SavingsRateChart({
  data,
  currentRate,
  currency,
}: SavingsRateChartProps) {
  const chartData = data.map(item => ({
    rate: `${item.savingsRate}%`,
    years: item.yearsToFire,
    monthlySavings: item.monthlySavings,
    isCurrent: item.isCurrentRate,
  }));

  const getBarColor = (years: number, isCurrent: boolean) => {
    if (isCurrent) return '#f59e0b'; // Orange for current
    if (years <= 10) return '#10b981'; // Green for fast
    if (years <= 20) return '#3b82f6'; // Blue for moderate
    if (years <= 30) return '#8b5cf6'; // Purple for slow
    return '#ef4444'; // Red for very slow
  };

  const customTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-900">
            Savings Rate: {data.rate}
          </p>
          <p className="text-sm text-gray-600">
            Years to FIRE: {formatYears(data.years)}
          </p>
          <p className="text-sm text-gray-600">
            Monthly: {formatCurrency(data.monthlySavings, currency)}
          </p>
          {data.isCurrent && (
            <p className="text-xs text-fire font-medium mt-1">
              Current Rate
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  // Calculate potential time savings
  const currentData = data.find(d => d.isCurrentRate);
  const nextHigherRate = data.find(d => 
    d.savingsRate > (currentData?.savingsRate || 0) && 
    d.savingsRate <= (currentData?.savingsRate || 0) + 10
  );
  
  let timeSavingsMessage = '';
  if (currentData && nextHigherRate) {
    const yearsSaved = currentData.yearsToFire - nextHigherRate.yearsToFire;
    if (yearsSaved > 0) {
      timeSavingsMessage = `Increasing savings by 10% saves ${formatYears(yearsSaved)}`;
    }
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Savings Rate Impact
      </h3>
      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart
          data={chartData}
          layout="horizontal"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          
          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickFormatter={(value) => `${value}y`}
          />
          
          <YAxis
            type="category"
            dataKey="rate"
            tick={{ fontSize: 12, fill: '#6b7280' }}
          />
          
          <Tooltip content={customTooltip} />
          
          <Bar 
            dataKey="years" 
            radius={[0, 4, 4, 0]}
            animationBegin={0}
            animationDuration={1500}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={getBarColor(entry.years, entry.isCurrent)}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {timeSavingsMessage && (
        <div className="mt-4 p-3 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-700">
            💡 {timeSavingsMessage}
          </p>
        </div>
      )}
      
      <div className="mt-3 flex items-center justify-center gap-3 text-xs">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-success"></div>
          <span className="text-gray-600">≤10 years</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-primary-600"></div>
          <span className="text-gray-600">11-20 years</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-purple-600"></div>
          <span className="text-gray-600">21-30 years</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded bg-fire"></div>
          <span className="text-gray-600">Current</span>
        </div>
      </div>
    </div>
  );
}