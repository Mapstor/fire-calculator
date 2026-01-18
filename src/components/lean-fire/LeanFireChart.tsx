'use client';

import { LeanFireProjection, BudgetCategory } from '@/types/leanFire';
import { formatCurrency } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

interface Props {
  projections: LeanFireProjection[];
  budgetBreakdown: BudgetCategory[];
  currency: CurrencyCode;
  currentAge: number;
  retirementAge: number;
  leanFireNumber: number;
}

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6'];

export default function LeanFireChart({ 
  projections, 
  budgetBreakdown,
  currency,
  currentAge,
  retirementAge,
  leanFireNumber
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
              Passive Income: <span className="font-medium text-gray-900">
                {formatCurrency(data.passiveIncome, currency)}/yr
              </span>
            </p>
            <p className="text-xs text-gray-600">
              Target Spending: <span className="font-medium text-gray-900">
                {formatCurrency(data.targetSpending, currency)}/yr
              </span>
            </p>
            <p className="text-xs font-medium mt-1 pt-1 border-t border-gray-100">
              Phase: <span className="text-green-600 capitalize">{data.phase.replace('-', ' ')}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };
  
  const pieData = budgetBreakdown.map(cat => ({
    name: cat.name,
    value: cat.monthlyAmount,
    optimized: cat.isOptimized,
  }));
  
  const CustomPieLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
    
    if (percent < 0.05) return null;
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="text-xs font-medium"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  
  return (
    <div className="space-y-6">
      {/* Portfolio Growth Chart */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Path to Lean FIRE</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={projections} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
            <defs>
              <linearGradient id="colorLean" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
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
              y={leanFireNumber} 
              stroke="#10b981" 
              strokeDasharray="5 5" 
              label={{ value: "Lean FIRE", position: "right", fontSize: 10 }}
            />
            <ReferenceLine 
              x={retirementAge} 
              stroke="#3b82f6" 
              strokeDasharray="5 5" 
              label={{ value: "Target", position: "top", fontSize: 10 }}
            />
            <Area 
              type="monotone" 
              dataKey="investedAssets" 
              stroke="#10b981" 
              strokeWidth={2}
              fill="url(#colorLean)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Income vs Expenses */}
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-4">Passive Income vs Target Spending</h3>
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
              label={{ value: 'Annual Amount', angle: -90, position: 'insideLeft', style: { fontSize: 11 } }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ fontSize: 11 }}
              iconSize={12}
            />
            <ReferenceLine 
              x={retirementAge} 
              stroke="#3b82f6" 
              strokeDasharray="5 5" 
            />
            <Line 
              type="monotone" 
              dataKey="passiveIncome" 
              stroke="#10b981" 
              strokeWidth={2}
              dot={false}
              name="Passive Income"
            />
            <Line 
              type="monotone" 
              dataKey="targetSpending" 
              stroke="#ef4444" 
              strokeWidth={2}
              dot={false}
              name="Target Spending"
              strokeDasharray="3 3"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      {/* Budget Allocation */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Lean Budget Allocation</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={CustomPieLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                formatter={(value) => value ? formatCurrency(value as number, currency) : ''}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-4">Budget Optimization</h3>
          <div className="space-y-3">
            {budgetBreakdown.map((category, index) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-gray-600">{category.name}</span>
                  <span className="text-xs font-medium text-gray-900">
                    {formatCurrency(category.monthlyAmount, currency)}
                  </span>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${category.isOptimized ? 'bg-green-500' : 'bg-amber-500'}`}
                      style={{ width: `${category.percentOfTotal}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}