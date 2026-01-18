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
} from 'recharts';
import { YearlyProjection, CurrencyCode } from '@/types/calculator';
import { formatCurrency, formatCompactNumber } from '@/lib/formatters';

interface NetWorthChartProps {
  projections: YearlyProjection[];
  fireNumber: number;
  currency: CurrencyCode;
}

export default function NetWorthChart({
  projections,
  fireNumber,
  currency,
}: NetWorthChartProps) {
  const data = projections.map(p => ({
    age: p.age,
    netWorth: p.netWorth,
    fireTarget: fireNumber,
  }));

  const customTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-900">
            Age {label}
          </p>
          <p className="text-sm text-primary-600">
            Net Worth: {formatCurrency(payload[0].value, currency)}
          </p>
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
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Net Worth Projection
      </h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="netWorthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          
          <XAxis
            dataKey="age"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickFormatter={(value) => `${value}`}
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
            dataKey="netWorth"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#netWorthGradient)"
            animationBegin={300}
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}