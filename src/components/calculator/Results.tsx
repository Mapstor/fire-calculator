'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CalculatorResults, CurrencyCode } from '@/types/calculator';
import ResultsHero from './ResultsHero';
import MilestoneTimeline from '@/components/timeline/MilestoneTimeline';
import ChartsGrid from '@/components/charts/ChartsGrid';
import ActionButtons from './ActionButtons';

interface ResultsProps {
  results: CalculatorResults;
  currency: CurrencyCode;
}

export default function Results({ results, currency }: ResultsProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-8 space-y-6"
    >
      <ResultsHero
        results={results.fire}
        currency={currency}
      />
      
      <MilestoneTimeline
        milestones={results.milestones}
        currency={currency}
      />
      
      <ChartsGrid
        results={results}
        currency={currency}
      />
      
      {/* Action buttons placeholder - will be implemented in Phase 11 */}
      <ActionButtons
        results={results}
        currency={currency}
      />
    </motion.div>
  );
}