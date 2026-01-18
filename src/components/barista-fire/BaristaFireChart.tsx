'use client';

import { BaristaFireProjection } from '@/types/baristaFire';
import { formatCurrency } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

interface Props {
  projections: BaristaFireProjection[];
  currency: CurrencyCode;
  baristaStartAge: number;
  retirementAge: number;
}

export default function BaristaFireChart({ 
  projections, 
  currency,
  baristaStartAge,
  retirementAge 
}: Props) {
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };
  
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-xs font-medium text-gray-900 mb-2">Age {label}</p>
          <div className="space-y-1">
            <p className="text-xs text-gray-600">
              Assets: <span className="font-medium text-gray-900">
                {formatCurrency(data.investedAssets, currency)}
              </span>
            </p>
            <p className="text-xs text-gray-600">
              Income: <span className="font-medium text-gray-900">
                {formatCurrency(data.monthlyIncome, currency)}/mo
              </span>
            </p>
            <p className="text-xs text-gray-600">
              Expenses: <span className="font-medium text-gray-900">
                {formatCurrency(data.monthlyExpenses, currency)}/mo
              </span>
            </p>
            <p className="text-xs font-medium mt-1 pt-1 border-t border-gray-100">
              Phase: <span className="text-amber-600 capitalize">{data.phase}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="space-y-6">
      {/* Portfolio Growth Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Portfolio Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={projections} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorAssets" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 11 }}
              label={{ value: 'Age', position: 'insideBottom', offset: -10, style: { fontSize: 11 } }}
            />
            <YAxis 
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11 }}
              label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine 
              x={baristaStartAge} 
              stroke="#f59e0b" 
              strokeDasharray="5 5" 
              label={{ value: "Barista", position: "top", fontSize: 10 }}
            />
            <ReferenceLine 
              x={retirementAge} 
              stroke="#10b981" 
              strokeDasharray="5 5" 
              label={{ value: "Retire", position: "top", fontSize: 10 }}
            />
            <Area 
              type="monotone" 
              dataKey="investedAssets" 
              stroke="#f59e0b" 
              strokeWidth={2}
              fill="url(#colorAssets)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Income vs Expenses Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Monthly Income vs Expenses</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={projections} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 11 }}
              label={{ value: 'Age', position: 'insideBottom', offset: -10, style: { fontSize: 11 } }}
            />
            <YAxis 
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11 }}
              label={{ value: 'Monthly Amount', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: 11 }}
              iconSize={12}
            />
            <ReferenceLine 
              x={baristaStartAge} 
              stroke="#f59e0b" 
              strokeDasharray="5 5" 
            />
            <ReferenceLine 
              x={retirementAge} 
              stroke="#10b981" 
              strokeDasharray="5 5" 
            />
            <Line 
              type="monotone" 
              dataKey="monthlyIncome" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={false}
              name="Income"
            />
            <Line 
              type="monotone" 
              dataKey="monthlyExpenses" 
              stroke="#ef4444" 
              strokeWidth={2}
              dot={false}
              name="Expenses"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Phase Timeline */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Life Phases</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="bg-blue-100 rounded-lg p-2 mb-2">
              <p className="text-xs font-medium text-blue-900">Saving</p>
            </div>
            <p className="text-xs text-gray-600">
              {projections.filter(p => p.phase === 'saving').length} years
            </p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 rounded-lg p-2 mb-2">
              <p className="text-xs font-medium text-amber-900">Barista</p>
            </div>
            <p className="text-xs text-gray-600">
              {projections.filter(p => p.phase === 'barista').length} years
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-2 mb-2">
              <p className="text-xs font-medium text-green-900">Retired</p>
            </div>
            <p className="text-xs text-gray-600">
              {projections.filter(p => p.phase === 'retired').length}+ years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}