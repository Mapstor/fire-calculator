'use client';

import { CouplesFireProjection } from '@/types/couplesFire';
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
  projections: CouplesFireProjection[];
  currency: CurrencyCode;
  partner1Name: string;
  partner2Name: string;
  fireAge: number;
}

export default function CouplesFireChart({ 
  projections, 
  currency,
  partner1Name,
  partner2Name,
  fireAge
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
              Combined: <span className="font-medium text-gray-900">
                {formatCurrency(data.combinedAssets, currency)}
              </span>
            </p>
            <p className="text-xs text-gray-600">
              {partner1Name}: <span className="font-medium text-rose-600">
                {formatCurrency(data.partner1Assets, currency)}
              </span>
            </p>
            <p className="text-xs text-gray-600">
              {partner2Name}: <span className="font-medium text-pink-600">
                {formatCurrency(data.partner2Assets, currency)}
              </span>
            </p>
            <p className="text-xs font-medium mt-1 pt-1 border-t border-gray-100">
              Phase: <span className="text-rose-600 capitalize">{data.phase.replace('-', ' ')}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };
  
  return (
    <div className="space-y-6">
      {/* Combined Portfolio Growth */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Combined Portfolio Growth</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={projections} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorCombined" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 11 }}
              label={{ value: 'Average Age', position: 'insideBottom', offset: -10, style: { fontSize: 11 } }}
            />
            <YAxis 
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11 }}
              label={{ value: 'Portfolio Value', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine 
              x={fireAge} 
              stroke="#f43f5e" 
              strokeDasharray="5 5" 
              label={{ value: "FIRE", position: "top", fontSize: 10 }}
            />
            <Area 
              type="monotone" 
              dataKey="combinedAssets" 
              stroke="#f43f5e" 
              strokeWidth={2}
              fill="url(#colorCombined)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Individual Contributions Over Time */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Individual Asset Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={projections} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="age" 
              tick={{ fontSize: 11 }}
              label={{ value: 'Average Age', position: 'insideBottom', offset: -10, style: { fontSize: 11 } }}
            />
            <YAxis 
              tickFormatter={formatYAxis}
              tick={{ fontSize: 11 }}
              label={{ value: 'Assets', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: 11 }}
              iconSize={12}
            />
            <ReferenceLine 
              x={fireAge} 
              stroke="#f43f5e" 
              strokeDasharray="5 5" 
            />
            <Line 
              type="monotone" 
              dataKey="partner1Assets" 
              stroke="#f43f5e" 
              strokeWidth={2}
              dot={false}
              name={partner1Name}
            />
            <Line 
              type="monotone" 
              dataKey="partner2Assets" 
              stroke="#ec4899" 
              strokeWidth={2}
              dot={false}
              name={partner2Name}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Phase Timeline */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Retirement Phases</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="bg-blue-100 rounded-lg p-2 mb-2">
              <p className="text-xs font-medium text-blue-900">Accumulation</p>
            </div>
            <p className="text-xs text-gray-600">
              {projections.filter(p => p.phase === 'accumulation').length} years
            </p>
          </div>
          <div className="text-center">
            <div className="bg-amber-100 rounded-lg p-2 mb-2">
              <p className="text-xs font-medium text-amber-900">Partial Retirement</p>
            </div>
            <p className="text-xs text-gray-600">
              {projections.filter(p => p.phase === 'partial-retirement').length} years
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-lg p-2 mb-2">
              <p className="text-xs font-medium text-green-900">Full Retirement</p>
            </div>
            <p className="text-xs text-gray-600">
              {projections.filter(p => p.phase === 'full-retirement').length}+ years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}