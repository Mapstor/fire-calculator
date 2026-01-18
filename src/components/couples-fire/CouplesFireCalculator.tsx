'use client';

import { useCouplesFireCalculator } from '@/hooks/useCouplesFireCalculator';
import CouplesFireInputs from './CouplesFireInputs';
import CouplesFireResults from './CouplesFireResults';
import CouplesFireChart from './CouplesFireChart';
import CouplesFireExamples from './CouplesFireExamples';
import { motion, AnimatePresence } from 'framer-motion';
import ShareButton from '@/components/ui/ShareButton';
import { Heart } from 'lucide-react';

export default function CouplesFireCalculator() {
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
  } = useCouplesFireCalculator();
  
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
  
  const averageFireAge = results ? (results.fireAgePartner1 + results.fireAgePartner2) / 2 : 0;
  
  return (
    <div className="space-y-6">
      {/* Examples Section */}
      <CouplesFireExamples onLoadExample={loadExample} />
      
      {/* Calculator Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <CouplesFireInputs
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
              className="flex-1 bg-rose-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm hover:bg-rose-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCalculating ? (
                <span className="flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 animate-pulse" />
                  Calculating...
                </span>
              ) : (
                'Calculate Couples FIRE'
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
                  calculatorType="couples-fire"
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
            <CouplesFireResults 
              results={results} 
              currency={currency}
              partner1Name={inputs.partner1Name}
              partner2Name={inputs.partner2Name}
            />
            
            <CouplesFireChart
              projections={results.projections}
              currency={currency}
              partner1Name={inputs.partner1Name}
              partner2Name={inputs.partner2Name}
              fireAge={Math.round(averageFireAge)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}