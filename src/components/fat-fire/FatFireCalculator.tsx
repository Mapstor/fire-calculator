'use client';

import { useFatFireCalculator } from '@/hooks/useFatFireCalculator';
import FatFireInputs from './FatFireInputs';
import FatFireResults from './FatFireResults';
import FatFireChart from './FatFireChart';
import FatFireExamples from './FatFireExamples';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from '@/components/ui/ShareButton';
import { Crown } from 'lucide-react';

export default function FatFireCalculator() {
  const {
    inputs,
    results,
    isCalculating,
    hasCalculated,
    currency,
    updateInput,
    calculate,
    reset,
    setCurrency,
    loadExample,
  } = useFatFireCalculator();
  
  const handleCalculate = () => {
    calculate();
  };
  
  const handleReset = () => {
    reset();
  };
  
  const shareData = {
    inputs,
    currency,
  };
  
  return (
    <div className="space-y-6">
      {/* Examples Section */}
      <FatFireExamples onLoadExample={loadExample} />
      
      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <FatFireInputs
            inputs={inputs}
            onChange={updateInput}
            currency={currency}
            onCurrencyChange={setCurrency}
          />
          
          {/* Action Buttons */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="flex-1 bg-purple-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4 animate-pulse" />
                  Calculating...
                </span>
              ) : (
                'Calculate Fat FIRE'
              )}
            </button>
            
            {hasCalculated && (
              <>
                <button
                  onClick={handleReset}
                  className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Reset
                </button>
                <ShareButton 
                  data={shareData}
                  calculatorType="fat-fire"
                />
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Results Section */}
      <AnimatePresence mode="wait">
        {results && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <FatFireResults results={results} currency={currency} />
            
            <FatFireChart
              projections={results.projections}
              lifestyleBreakdown={results.lifestyleBreakdown}
              currency={currency}
              currentAge={inputs.currentAge}
              retirementAge={inputs.targetRetirementAge}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}