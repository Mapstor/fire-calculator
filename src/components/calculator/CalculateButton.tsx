'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, RotateCw, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CalculateButtonProps {
  onCalculate: () => void;
  onReset: () => void;
  isCalculating: boolean;
  hasCalculated: boolean;
}

export default function CalculateButton({
  onCalculate,
  onReset,
  isCalculating,
  hasCalculated,
}: CalculateButtonProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onCalculate}
        disabled={isCalculating}
        className={cn(
          "flex items-center justify-center gap-2 px-6 py-3",
          "bg-primary-600 hover:bg-primary-700 text-white",
          "font-semibold rounded-lg shadow-lg",
          "transition-all duration-200",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          "w-full sm:w-auto"
        )}
      >
        {isCalculating ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Flame className="h-5 w-5" />
            </motion.div>
            <span>Calculate My FIRE Number</span>
          </>
        )}
      </motion.button>

      {hasCalculated && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onReset}
          className={cn(
            "flex items-center justify-center gap-2 px-6 py-3",
            "bg-gray-200 hover:bg-gray-300 text-gray-700",
            "font-medium rounded-lg",
            "transition-all duration-200",
            "w-full sm:w-auto"
          )}
        >
          <RotateCw className="h-5 w-5" />
          <span>Reset</span>
        </motion.button>
      )}
    </div>
  );
}