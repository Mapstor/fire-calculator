interface SemanticContentProps {
  topic: 'fire-basics' | 'fire-calculation' | 'fire-types' | 'fire-strategies';
  visible?: boolean;
}

export default function SemanticContent({ topic, visible = false }: SemanticContentProps) {
  const getSemanticContent = () => {
    switch (topic) {
      case 'fire-basics':
        return {
          title: "What is FIRE (Financial Independence, Retire Early)?",
          content: `
            FIRE stands for Financial Independence, Retire Early. It's a financial movement focused on extreme saving and investing that allows for retirement much earlier than traditional retirement planning. 

            The fundamental principle of FIRE is achieving financial independence, which means having enough assets to live on without relying on employment income. This is typically calculated using the 4% rule, where you need 25 times your annual expenses invested to safely withdraw 4% per year indefinitely.

            FIRE practitioners typically save 50-70% of their income, compared to the traditional 10-15% savings rate. This extreme savings rate, combined with aggressive investing in low-cost index funds, allows people to retire in their 30s, 40s, or 50s instead of the traditional retirement age of 65.

            The movement gained popularity through blogs like Mr. Money Mustache and has been supported by academic research including the Trinity Study, which demonstrated the sustainability of the 4% withdrawal rate over 30+ year retirement periods.
          `
        };

      case 'fire-calculation':
        return {
          title: "How to Calculate Your FIRE Number",
          content: `
            Calculating your FIRE number involves several key components and formulas that have been established through decades of financial research.

            The basic FIRE formula is: FIRE Number = Annual Expenses × 25

            This multiplier of 25 comes from inverting the 4% safe withdrawal rate (1 ÷ 0.04 = 25). The 4% rule is based on the Trinity Study, which analyzed historical market data from 1926-1995 and found that a 4% withdrawal rate from a balanced portfolio (stocks and bonds) successfully funded retirement for 30+ years in 95% of historical scenarios.

            To calculate years to FIRE, use the compound interest formula:
            Years = log(1 + (FIRE Goal - Current Savings) ÷ Annual Savings) ÷ log(1 + Return Rate)

            Most FIRE calculations assume a 7% real (inflation-adjusted) return rate, based on historical S&P 500 performance. This accounts for the long-term average while being conservative by removing inflation effects.

            Advanced FIRE calculations consider factors like:
            - Sequence of returns risk (poor early retirement market performance)
            - Healthcare costs and insurance premiums
            - Tax implications of different account types
            - Geographic arbitrage opportunities
            - Inflation adjustments over time
          `
        };

      case 'fire-types':
        return {
          title: "Types of FIRE: Lean, Fat, Coast, Barista, and Couples",
          content: `
            The FIRE movement has evolved to include several distinct approaches, each suited to different lifestyles and financial situations.

            Lean FIRE focuses on achieving financial independence with minimal expenses, typically $30,000-40,000 annually. This requires approximately $750,000-1,000,000 in invested assets. Lean FIRE practitioners often utilize geographic arbitrage, living in low-cost areas or countries to stretch their money further.

            Traditional FIRE targets middle-class spending levels of $40,000-80,000 annually, requiring $1,000,000-2,000,000 in assets. This allows for a comfortable lifestyle similar to current middle-class standards.

            Fat FIRE aims for luxury retirement spending of $100,000+ annually, requiring $2,500,000+ in assets. This approach appeals to high earners who want to maintain expensive lifestyles without financial constraints.

            Coast FIRE represents a hybrid approach where individuals save aggressively early, then stop active saving and let compound growth carry them to traditional retirement age. The required amount varies by age - starting at 25 might require $100,000 to coast to a $1,000,000 retirement.

            Barista FIRE combines partial financial independence with part-time work. This requires less invested capital ($500,000-750,000) because part-time income covers some expenses and provides health insurance benefits.

            Couples FIRE leverages dual incomes and shared expenses to optimize the path to financial independence, often allowing for faster accumulation and shared financial goals.
          `
        };

      case 'fire-strategies':
        return {
          title: "FIRE Investment Strategies and Implementation",
          content: `
            Successful FIRE implementation requires specific investment strategies that balance growth with risk management over extended retirement periods.

            Asset Allocation: Most FIRE practitioners use a three-fund portfolio consisting of total stock market index funds, international stock index funds, and bond index funds. Common allocations range from aggressive (90% stocks, 10% bonds) for younger practitioners to moderate (70% stocks, 30% bonds) for those closer to retirement.

            Tax-Advantaged Accounts: FIRE strategies heavily utilize 401(k), 403(b), Traditional IRA, and Roth IRA accounts for tax optimization. The "ladder strategy" involves converting traditional retirement funds to Roth IRAs during early retirement years when income is low, minimizing tax impact.

            Taxable Investment Accounts: Since retirement account funds aren't accessible without penalties until age 59.5, FIRE practitioners maintain significant taxable investment accounts to bridge the gap. These accounts focus on tax-efficient index funds and ETFs.

            Expense Optimization: FIRE success depends on minimizing fees and expenses. This includes using low-cost brokerages like Vanguard, Fidelity, or Schwab, choosing funds with expense ratios under 0.20%, and avoiding actively managed funds with high fees.

            Geographic Arbitrage: Many FIRE practitioners relocate to lower-cost areas or countries to stretch their retirement funds. Popular destinations include Portugal, Mexico, Thailand, and lower-cost US states like Tennessee or Texas.

            Healthcare Planning: One of the biggest challenges in FIRE is healthcare coverage. Strategies include COBRA continuation, ACA marketplace plans, sharing ministries, or relocating to countries with universal healthcare.

            Sequence of Returns Risk: Early retirees face unique risks if poor market performance occurs early in retirement. Mitigation strategies include maintaining larger cash reserves, flexible spending, or part-time income during market downturns.
          `
        };

      default:
        return null;
    }
  };

  const content = getSemanticContent();
  
  if (!content) return null;

  return (
    <section 
      className={visible ? "max-w-4xl mx-auto px-4 py-8" : "sr-only"}
      aria-label={`Educational content about ${content.title}`}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.title}</h2>
      <div className="prose prose-gray max-w-none">
        {content.content.split('\n\n').map((paragraph, index) => (
          paragraph.trim() && (
            <p key={index} className="text-gray-700 mb-4 leading-relaxed">
              {paragraph.trim()}
            </p>
          )
        ))}
      </div>
    </section>
  );
}