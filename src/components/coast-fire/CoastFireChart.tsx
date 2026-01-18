'use client';

import { CoastFireResults } from '@/types/coastFire';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
  Line,
  ComposedChart,
} from 'recharts';
import { formatCurrency, formatCompactNumber } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';

interface Props {
  results: CoastFireResults;
  currency: CurrencyCode;
}

export default function CoastFireChart({ results, currency }: Props) {
  // Transform data for chart
  const chartData = results.projections.map((p) => ({
    age: p.age,
    'Your Investments (Coasting)': p.investedAssets,
    'Coast FI Number': p.coastFireLine,
    'With Continued Saving': p.investedAssetsWithContributions,
    'FIRE Target': p.fireNumber,
  }));
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">Age {label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value, currency)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5">
      <h3 className="text-base font-semibold text-gray-900 mb-2">
        Investment Growth Analysis
      </h3>
      <p className="text-xs text-gray-500 mb-5 leading-relaxed">
        Projection comparing current investment trajectory against Coast FIRE requirements over time
      </p>
      
      <div className="h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="investmentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="savingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 12, fill: '#6b7280' }}
              label={{ value: 'Age', position: 'insideBottom', offset: -5, fill: '#6b7280' }}
            />
            
            <YAxis
              tick={{ fontSize: 12, fill: '#6b7280' }}
              tickFormatter={(value) => formatCompactNumber(value)}
              width={60}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* FIRE Target Line */}
            <ReferenceLine
              y={results.fireNumber}
              stroke="#f59e0b"
              strokeDasharray="5 5"
              strokeWidth={2}
              label={{
                value: 'FIRE Target',
                position: 'right',
                fill: '#f59e0b',
                fontSize: 12,
              }}
            />
            
            {/* Coast FI Number (decreasing line) */}
            <Line
              type="monotone"
              dataKey="Coast FI Number"
              stroke="#8b5cf6"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            
            {/* Investments WITH saving (if applicable) */}
            <Area
              type="monotone"
              dataKey="With Continued Saving"
              stroke="#10b981"
              strokeWidth={2}
              fill="url(#savingGradient)"
              dot={false}
            />
            
            {/* Current investments (coasting - no contributions) */}
            <Area
              type="monotone"
              dataKey="Your Investments (Coasting)"
              stroke="#0ea5e9"
              strokeWidth={2}
              fill="url(#investmentGradient)"
              dot={false}
              animationDuration={1500}
            />
            
            <Legend 
              verticalAlign="bottom" 
              height={36}
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      
      {/* Chart explanation */}
      <div className="mt-4 text-xs text-gray-500 space-y-1 leading-relaxed">
        <p>
          <span className="inline-block w-2.5 h-2.5 bg-primary-500 rounded mr-2"></span>
          <strong>Blue:</strong> Current investments (coast trajectory)
        </p>
        <p>
          <span className="inline-block w-2.5 h-2.5 bg-green-500 rounded mr-2"></span>
          <strong>Green:</strong> With continued contributions
        </p>
        <p>
          <span className="inline-block w-2.5 h-0.5 bg-purple-500 mr-2" style={{ verticalAlign: 'middle' }}></span>
          <strong>Purple:</strong> Coast FIRE threshold (decreasing)
        </p>
        <p>
          <span className="inline-block w-2.5 h-0.5 bg-amber-500 mr-2" style={{ verticalAlign: 'middle' }}></span>
          <strong>Orange:</strong> Full FIRE target
        </p>
      </div>
    </div>
  );
}