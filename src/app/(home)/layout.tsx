import CleanStructuredData from '@/components/seo/CleanStructuredData';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Clean Schema Types for AI Visibility - No Fake Data */}
      
      {/* Main Website Schema */}
      <CleanStructuredData type="website" />
      
      {/* Calculator Application Schema */}
      <CleanStructuredData 
        type="calculator"
        data={{
          name: 'FIRE Calculator - Financial Independence Tool',
          description: 'Free calculator to determine your FIRE number, years to retirement, and financial independence path',
          url: 'https://firecalculator.com',
          features: [
            'Calculate FIRE Number (25x annual expenses)',
            'Project Years to Financial Independence',
            'Monte Carlo Simulation (1000 scenarios)',
            'Support for 5 FIRE Types (Traditional, Lean, Fat, Coast, Barista)',
            'Real-time Interactive Charts',
            'Inflation-Adjusted Projections',
            'Multiple Currency Support',
            'Mobile Responsive Design'
          ]
        }}
      />
      
      {/* How-To Schema for FIRE Calculation */}
      <CleanStructuredData 
        type="howto"
        data={{
          name: 'How to Calculate Your FIRE Number',
          description: 'Learn how to calculate the amount you need for Financial Independence and Early Retirement',
          totalTime: 'PT5M',
          steps: [
            {
              name: 'Determine Annual Expenses',
              text: 'Calculate your expected yearly spending in retirement including housing, food, healthcare, and entertainment.'
            },
            {
              name: 'Apply the 25x Rule',
              text: 'Multiply your annual expenses by 25. This is your FIRE number based on the 4% safe withdrawal rate.'
            },
            {
              name: 'Calculate Savings Rate',
              text: 'Subtract expenses from income to find your annual savings amount and savings rate percentage.'
            },
            {
              name: 'Project Time to FIRE',
              text: 'Using compound interest at 7% real returns, calculate years until your savings reach your FIRE number.'
            },
            {
              name: 'Optimize Your Plan',
              text: 'Adjust savings rate, expenses, or income to see how changes affect your retirement timeline.'
            }
          ]
        }}
      />
      
      {/* Breadcrumb Schema */}
      <CleanStructuredData 
        type="breadcrumb" 
        data={{
          items: [
            { name: 'Home', url: 'https://firecalculator.com' },
            { name: 'FIRE Calculator', url: 'https://firecalculator.com' }
          ]
        }}
      />
      
      {/* FAQ Schema */}
      <CleanStructuredData 
        type="faq" 
        data={{
          questions: [
            {
              question: "What is a FIRE Calculator?",
              answer: "A FIRE (Financial Independence, Retire Early) calculator is a financial planning tool that helps you determine how much money you need to save to retire early and live off your investments. It calculates your FIRE number based on your annual expenses and uses the 4% safe withdrawal rate."
            },
            {
              question: "How does the FIRE Calculator work?",
              answer: "The FIRE calculator works by taking your annual expenses and multiplying them by 25 (based on the 4% withdrawal rule). It then calculates how long it will take to reach this target based on your current savings, income, and savings rate, assuming a 7% real return on investments."
            },
            {
              question: "What is the 4% rule in FIRE?",
              answer: "The 4% rule states that you can safely withdraw 4% of your investment portfolio in the first year of retirement, then adjust for inflation each subsequent year. This rate has historically provided a 95% success rate for a 30-year retirement based on the Trinity Study."
            },
            {
              question: "How accurate is the FIRE Calculator?",
              answer: "The FIRE calculator provides estimates based on historical market data and established financial principles. While it uses proven methodologies like the 4% rule and historical average returns of 7% real, actual results will vary based on market conditions, inflation, and personal circumstances."
            },
            {
              question: "What types of FIRE can I calculate?",
              answer: "Our calculator supports multiple FIRE types: Traditional FIRE (balanced lifestyle), Lean FIRE (minimalist, under $40k/year), Fat FIRE (luxury, over $100k/year), Coast FIRE (front-load savings then coast), Barista FIRE (part-time work supplement), and Couples FIRE (dual income planning)."
            }
          ]
        }}
      />
      
      {children}
    </>
  );
}