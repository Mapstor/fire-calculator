'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, PiggyBank, Target } from 'lucide-react';
import { FireResults, CurrencyCode } from '@/types/calculator';
import { formatCurrency, formatPercent, formatYears } from '@/lib/formatters';
import { cn } from '@/lib/utils';

interface ResultsHeroProps {
  results: FireResults;
  currency: CurrencyCode;
}

export default function ResultsHero({ results, currency }: ResultsHeroProps) {
  const [displayNumber, setDisplayNumber] = useState(0);
  
  // Animate count up for FIRE number
  useEffect(() => {
    const target = results.fireNumber;
    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setDisplayNumber(target);
        clearInterval(timer);
      } else {
        setDisplayNumber(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [results.fireNumber]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl p-8 shadow-lg"
    >
      {/* FIRE Number */}
      <motion.div variants={itemVariants} className="text-center mb-6">
        <h3 className="text-lg font-medium text-primary-700 mb-2">
          Your FIRE Number
        </h3>
        <div className="text-5xl sm:text-6xl font-bold text-primary-900">
          {formatCurrency(displayNumber, currency)}
        </div>
        <p className="text-primary-600 mt-2">
          25x your annual expenses
        </p>
      </motion.div>

      {/* Main Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
      >
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-fire-light/20 rounded-lg">
              <Calendar className="h-5 w-5 text-fire" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Years to FIRE</p>
              <p className="text-2xl font-bold text-gray-900">
                {results.yearsToFire === -1 
                  ? 'Not achievable' 
                  : formatYears(results.yearsToFire)}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-success/20 rounded-lg">
              <Target className="h-5 w-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Your FIRE Age</p>
              <p className="text-2xl font-bold text-gray-900">
                {results.fireAge === -1 
                  ? 'N/A' 
                  : `Age ${Math.round(results.fireAge)}`}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Supporting Stats */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
      >
        <div className="text-center">
          <p className="text-sm text-primary-600">Savings Rate</p>
          <p className="text-xl font-bold text-primary-900">
            {formatPercent(results.savingsRate / 100)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-primary-600">Monthly Savings</p>
          <p className="text-xl font-bold text-primary-900">
            {formatCurrency(results.monthlySavings, currency)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-primary-600">Coast FIRE</p>
          <p className="text-xl font-bold text-primary-900">
            {formatCurrency(results.coastFireNumber, currency)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-primary-600">Coast Age</p>
          <p className="text-xl font-bold text-primary-900">
            {results.coastFireAge 
              ? `Age ${Math.round(results.coastFireAge)}`
              : 'N/A'}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}