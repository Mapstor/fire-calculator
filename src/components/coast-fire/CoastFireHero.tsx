'use client';

import { CoastFireResults } from '@/types/coastFire';
import { motion } from 'framer-motion';
import CountUp from '@/components/ui/CountUp';
import { formatCurrency } from '@/lib/formatters';
import { Check, Clock } from 'lucide-react';
import { CurrencyCode } from '@/types/calculator';

interface Props {
  results: CoastFireResults;
  currency: CurrencyCode;
}

export default function CoastFireHero({ results, currency }: Props) {
  const currentInvestments = results.coastFireNumber + results.surplusAmount;
  
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-5 md:p-6 border border-gray-100">
      <h2 className="text-base font-semibold text-gray-900 mb-5">
        Coast FIRE Analysis
      </h2>
      
      {/* Main Coast FIRE Number */}
      <div className="text-center mb-6">
        <p className="text-xs text-gray-500 mb-2 font-medium">Coast FIRE Number</p>
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-primary-600"
        >
          <CountUp
            end={results.coastFireNumber}
            prefix={currency}
            duration={1.5}
          />
        </motion.div>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
          Investment amount required today for coast-to-retirement strategy
        </p>
      </div>
      
      {/* Status Badge */}
      <div className="flex justify-center mb-6">
        {results.hasReachedCoastFire ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1.5 rounded-full"
          >
            <Check className="w-4 h-4" />
            <span className="text-sm font-semibold">Coast FIRE Achieved</span>
          </motion.div>
        ) : (
          <div className="flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1.5 rounded-full">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">
              {results.currentProgress.toFixed(1)}% Progress
            </span>
          </div>
        )}
      </div>
      
      {/* Key Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          label="Full FIRE Number"
          value={formatCurrency(results.fireNumber, currency)}
          sublabel="Target at retirement"
        />
        <StatCard
          label="Current Investments"
          value={formatCurrency(currentInvestments, currency)}
          sublabel="What you have now"
        />
        <StatCard
          label={results.hasReachedCoastFire ? "Surplus" : "Gap"}
          value={formatCurrency(Math.abs(results.surplusAmount), currency)}
          sublabel={results.hasReachedCoastFire ? "Above Coast FI" : "Still needed"}
          highlight={results.hasReachedCoastFire}
        />
        <StatCard
          label="Projected FIRE Age"
          value={results.projectedFireAge.toString()}
          sublabel={`In ${results.yearsUntilFire} years`}
        />
      </div>
    </div>
  );
}

interface StatCardProps {
  label: string;
  value: string;
  sublabel: string;
  highlight?: boolean;
}

function StatCard({ label, value, sublabel, highlight = false }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className={`p-3 rounded-lg ${highlight ? 'bg-green-50' : 'bg-white'} border border-gray-100`}
    >
      <p className="text-xs text-gray-500 mb-1 font-medium">{label}</p>
      <p className={`text-lg font-bold ${highlight ? 'text-green-600' : 'text-gray-900'}`}>
        {value}
      </p>
      <p className="text-xs text-gray-400 mt-1 leading-tight">{sublabel}</p>
    </motion.div>
  );
}