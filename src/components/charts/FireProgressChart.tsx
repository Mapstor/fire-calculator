'use client';

import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts';
import { formatCurrency, formatPercent } from '@/lib/formatters';
import { CurrencyCode } from '@/types/calculator';

interface FireProgressChartProps {
  currentProgress: number; // 0-100
  currentNetWorth: number;
  fireTarget: number;
  currency: CurrencyCode;
}

export default function FireProgressChart({
  currentProgress,
  currentNetWorth,
  fireTarget,
  currency,
}: FireProgressChartProps) {
  const data = [{
    name: 'Progress',
    value: Math.min(currentProgress, 100),
    fill: currentProgress >= 100 ? '#10b981' : '#3b82f6',
  }];

  const circleSize = 200;
  const strokeWidth = 20;
  const innerRadius = (circleSize - strokeWidth * 2) / 2;
  const outerRadius = circleSize / 2;

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        FIRE Progress
      </h3>
      
      <div className="flex flex-col items-center">
        <div className="relative">
          <ResponsiveContainer width={circleSize} height={circleSize}>
            <RadialBarChart
              cx={circleSize / 2}
              cy={circleSize / 2}
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              barSize={strokeWidth}
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <PolarAngleAxis
                type="number"
                domain={[0, 100]}
                angleAxisId={0}
                tick={false}
              />
              
              <RadialBar
                background={{ fill: '#e5e7eb' }}
                dataKey="value"
                cornerRadius={10}
                fill={data[0].fill}
                animationBegin={0}
                animationDuration={1500}
              />
            </RadialBarChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-3xl font-bold text-gray-900">
              {formatPercent(currentProgress / 100)}
            </p>
            <p className="text-sm text-gray-600">to FIRE</p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            {formatCurrency(currentNetWorth, currency)}
          </p>
          <p className="text-xs text-gray-500">
            of {formatCurrency(fireTarget, currency)}
          </p>
        </div>
        
        {currentProgress >= 100 && (
          <div className="mt-4 px-3 py-1 bg-success/10 rounded-full">
            <p className="text-sm font-medium text-success">
              🎉 FIRE Achieved!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}