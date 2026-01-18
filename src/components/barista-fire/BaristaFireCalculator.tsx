'use client';

import { useBaristaFireCalculator } from '@/hooks/useBaristaFireCalculator';
import BaristaFireInputs from './BaristaFireInputs';
import BaristaFireResults from './BaristaFireResults';
import BaristaFireChart from './BaristaFireChart';
import BaristaFireExamples from './BaristaFireExamples';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from '@/components/ui/ShareButton';
import { Coffee } from 'lucide-react';

export default function BaristaFireCalculator() {
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
  } = useBaristaFireCalculator();
  
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
      <BaristaFireExamples onLoadExample={loadExample} />
      
      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <BaristaFireInputs
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
              className="flex-1 bg-amber-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center justify-center gap-2">
                  <Coffee className="w-4 h-4 animate-pulse" />
                  Calculating...
                </span>
              ) : (
                'Calculate Barista FIRE'
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
                  calculatorType="barista-fire"
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
            <BaristaFireResults results={results} currency={currency} />
            
            <BaristaFireChart
              projections={results.projections}
              currency={currency}
              baristaStartAge={inputs.baristaStartAge}
              retirementAge={inputs.targetRetirementAge}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}