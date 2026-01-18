'use client';

import { useLeanFireCalculator } from '@/hooks/useLeanFireCalculator';
import LeanFireInputs from './LeanFireInputs';
import LeanFireResults from './LeanFireResults';
import LeanFireChart from './LeanFireChart';
import LeanFireExamples from './LeanFireExamples';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from '@/components/ui/ShareButton';
import { Leaf } from 'lucide-react';

export default function LeanFireCalculator() {
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
  } = useLeanFireCalculator();
  
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
      <LeanFireExamples onLoadExample={loadExample} />
      
      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <LeanFireInputs
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
              className="flex-1 bg-green-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center justify-center gap-2">
                  <Leaf className="w-4 h-4 animate-pulse" />
                  Calculating...
                </span>
              ) : (
                'Calculate Lean FIRE'
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
                  calculatorType="lean-fire"
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
            <LeanFireResults results={results} currency={currency} />
            
            <LeanFireChart
              projections={results.projections}
              budgetBreakdown={results.budgetBreakdown}
              currency={currency}
              currentAge={inputs.currentAge}
              retirementAge={inputs.targetRetirementAge}
              leanFireNumber={results.leanFireNumber}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}