'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Dot,
} from 'recharts';
import { Milestones, CurrencyCode, Milestone } from '@/types/calculator';
import { formatCurrency } from '@/lib/formatters';

interface MilestoneTimelineProps {
  milestones: Milestones;
  currency: CurrencyCode;
}

export default function MilestoneTimeline({ milestones, currency }: MilestoneTimelineProps) {
  const allMilestones = [
    milestones.today,
    milestones.twentyFivePercent,
    milestones.fiftyPercent,
    milestones.coastFire,
    milestones.seventyFivePercent,
    milestones.fire,
  ].filter(Boolean);

  // Prepare data for the chart
  const chartData = allMilestones.map(milestone => {
    if (!milestone || !milestones.fire) return null;
    
    let percentage = 0;
    if (milestone.name === 'today') percentage = (milestone.netWorth / milestones.fire.netWorth) * 100;
    else if (milestone.name === 'twentyFivePercent') percentage = 25;
    else if (milestone.name === 'fiftyPercent') percentage = 50;
    else if (milestone.name === 'seventyFivePercent') percentage = 75;
    else if (milestone.name === 'fire') percentage = 100;
    else if (milestone.name === 'coastFire') {
      // Coast FIRE is typically around 30-40% of FIRE number, position it appropriately
      percentage = (milestone.netWorth / milestones.fire.netWorth) * 100;
    }
    
    return {
      years: milestone.years,
      percentage: Math.round(percentage),
      age: milestone.age,
      netWorth: milestone.netWorth,
      label: milestone.label,
      name: milestone.name,
    };
  }).filter(Boolean).sort((a, b) => a!.years - b!.years);

  const getColor = (name: string) => {
    if (name === 'today') return '#3b82f6';
    if (name === 'fire') return '#f59e0b';
    if (name === 'coastFire') return '#10b981';
    return '#60a5fa';
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{data.label}</p>
          <p className="text-sm text-gray-600">Age {data.age}</p>
          <p className="text-sm text-gray-600">
            {data.years === 0 ? 'Now' : `Year ${data.years}`}
          </p>
          <p className="text-sm font-medium text-primary-600">
            {formatCurrency(data.netWorth, currency)}
          </p>
          <p className="text-sm font-medium text-gray-700">
            {data.percentage}% to FIRE
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    const color = getColor(payload.name);
    
    return (
      <g transform={`translate(${cx},${cy})`}>
        <circle r="6" fill={color} stroke="#fff" strokeWidth="2" />
        {payload.name === 'fire' && (
          <text 
            y="-10" 
            textAnchor="middle" 
            fill={color} 
            fontSize="20"
          >
            🔥
          </text>
        )}
      </g>
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Your Journey to Financial Independence
      </h3>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={chartData} 
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="years" 
              label={{ value: 'Years from Now', position: 'insideBottom', offset: -5 }}
              domain={[0, 'dataMax']}
              ticks={chartData.filter(d => d !== null).map(d => d!.years)}
            />
            <YAxis 
              label={{ value: '% to FIRE', angle: -90, position: 'insideLeft' }}
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Reference lines for key percentages */}
            <ReferenceLine y={25} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={50} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={75} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={100} stroke="#f59e0b" strokeWidth={2} />
            
            <Line 
              type="monotone" 
              dataKey="percentage" 
              stroke="#3b82f6"
              strokeWidth={3}
              dot={<CustomDot />}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-500"></div>
          <span className="text-gray-600">Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary-400"></div>
          <span className="text-gray-600">FI Milestones</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success"></div>
          <span className="text-gray-600">Coast FIRE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-fire"></div>
          <span className="text-gray-600">FIRE 🔥</span>
        </div>
      </div>
    </motion.div>
  );
}