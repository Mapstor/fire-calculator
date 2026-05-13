/**
 * FIRE / personal finance glossary.
 * Each term is rendered as a <dt>/<dd> pair on /fire-glossary
 * and emitted as a DefinedTerm in JSON-LD for SEO.
 */

export interface GlossaryTerm {
  id: string;       // slug used for anchor links
  term: string;
  category: string;
  definition: string;
  example?: string;
}

export const GLOSSARY_CATEGORIES = [
  "Core FIRE",
  "FIRE Variants",
  "Withdrawal & Risk",
  "Tax & Accounts",
  "Healthcare",
  "Strategy & Math",
] as const;

export const GLOSSARY: GlossaryTerm[] = [
  // ── Core FIRE ──
  {
    id: "fire",
    term: "FIRE",
    category: "Core FIRE",
    definition:
      "Financial Independence, Retire Early. A movement and lifestyle goal where you save and invest aggressively so passive investment income can fully cover your expenses, freeing you from the need to work.",
    example: "Most FIRE adherents target a portfolio of 25× their annual expenses.",
  },
  {
    id: "fi",
    term: "FI (Financial Independence)",
    category: "Core FIRE",
    definition:
      "The state of having enough invested assets to cover your living expenses indefinitely without working. The 'FI' part of FIRE — some pursue FI without ever fully retiring.",
  },
  {
    id: "re",
    term: "RE (Retire Early)",
    category: "Core FIRE",
    definition:
      "The 'retire early' part of FIRE — leaving paid work decades before traditional retirement age. Some FIRE adherents skip this (FI without RE) and continue working in lower-stress or part-time roles.",
  },
  {
    id: "fire-number",
    term: "FIRE Number",
    category: "Core FIRE",
    definition:
      "The total invested assets you need to retire. Calculated as 25× your annual expenses (the inverse of a 4% safe withdrawal rate).",
    example: "If you spend $50,000/year, your FIRE number is $1,250,000.",
  },
  {
    id: "swr",
    term: "SWR (Safe Withdrawal Rate)",
    category: "Withdrawal & Risk",
    definition:
      "The percentage of your portfolio you can withdraw each year (adjusted for inflation) without depleting it over a target retirement period. The classic SWR is 4%.",
  },
  {
    id: "4-percent-rule",
    term: "4% Rule",
    category: "Withdrawal & Risk",
    definition:
      "The guideline that you can safely withdraw 4% of your starting portfolio in year one of retirement, then increase that amount by inflation each subsequent year, with a high probability of the portfolio lasting 30+ years.",
    example:
      "$1M portfolio × 4% = $40,000 first-year withdrawal; $41,200 next year if inflation is 3%.",
  },
  {
    id: "trinity-study",
    term: "Trinity Study",
    category: "Withdrawal & Risk",
    definition:
      "The 1998 study by Cooley, Hubbard & Walz at Trinity University in San Antonio, Texas, that empirically tested fixed-percentage withdrawal rates against historical US stock and bond returns from 1926 onward. It is the source of the popular '4% rule.'",
  },

  // ── FIRE Variants ──
  {
    id: "lean-fire",
    term: "Lean FIRE",
    category: "FIRE Variants",
    definition:
      "A frugal approach to FIRE where you minimize expenses (typically $40K/year or less) so you need a smaller portfolio (often $750K–$1M).",
  },
  {
    id: "fat-fire",
    term: "Fat FIRE",
    category: "FIRE Variants",
    definition:
      "A high-spending approach where you maintain $100K+ annual expenses in retirement, requiring a larger portfolio ($2.5M+) and typically a higher savings rate or income to reach.",
  },
  {
    id: "coast-fire",
    term: "Coast FIRE",
    category: "FIRE Variants",
    definition:
      "The milestone where your invested assets, left untouched, will compound to your full FIRE number by traditional retirement age (60–67) without further contributions. Once at Coast FIRE, you only need income to cover current expenses.",
    example:
      "At age 30 with a 5% real return and a $1.25M FIRE number, your Coast FIRE number is roughly $289,000.",
  },
  {
    id: "barista-fire",
    term: "Barista FIRE",
    category: "FIRE Variants",
    definition:
      "A hybrid approach where you have enough invested to retire 'soon,' but continue part-time work — often specifically for healthcare benefits — while investments grow toward full FIRE.",
  },
  {
    id: "couples-fire",
    term: "Couples FIRE",
    category: "FIRE Variants",
    definition:
      "FIRE planning for two-income households. Couples can leverage doubled tax-advantaged contribution limits, shared expenses (housing, utilities), and synchronized timelines to reach FIRE faster than singles.",
  },

  // ── Withdrawal & Risk ──
  {
    id: "sequence-of-returns-risk",
    term: "Sequence-of-Returns Risk",
    category: "Withdrawal & Risk",
    definition:
      "The risk that poor market returns early in retirement (when withdrawals begin) permanently impair the portfolio, even if average lifetime returns are normal. The same lifetime average return can produce very different outcomes based on the order of years.",
  },
  {
    id: "guardrails",
    term: "Guardrails (Withdrawal Strategy)",
    category: "Withdrawal & Risk",
    definition:
      "A dynamic withdrawal strategy (popularized by Guyton-Klinger) where you adjust spending up or down when the portfolio crosses pre-set thresholds. More resilient against sequence-of-returns risk than fixed-rate withdrawal.",
  },
  {
    id: "dynamic-withdrawal",
    term: "Dynamic Withdrawal",
    category: "Withdrawal & Risk",
    definition:
      "Any withdrawal strategy that adjusts spending based on portfolio performance — as opposed to the fixed inflation-adjusted withdrawals of the classic 4% rule.",
  },
  {
    id: "bond-tent",
    term: "Bond Tent",
    category: "Withdrawal & Risk",
    definition:
      "An asset-allocation glide path that increases bond allocation just before and at the start of retirement, then gradually shifts back to stocks. Designed to dampen sequence-of-returns risk during the most vulnerable years.",
  },

  // ── Tax & Accounts ──
  {
    id: "401k",
    term: "401(k)",
    category: "Tax & Accounts",
    definition:
      "An employer-sponsored, tax-advantaged retirement account. Employee elective deferral limit for 2026 is $24,500 (catch-up +$8,000 at age 50+).",
  },
  {
    id: "ira",
    term: "IRA (Individual Retirement Account)",
    category: "Tax & Accounts",
    definition:
      "A personal tax-advantaged retirement account. Comes in Traditional (tax-deferred) and Roth (tax-free withdrawals) flavors. 2026 contribution limit: $7,500 (catch-up +$1,000 at 50+).",
  },
  {
    id: "roth-ira",
    term: "Roth IRA",
    category: "Tax & Accounts",
    definition:
      "An IRA funded with after-tax dollars. Withdrawals in retirement (including investment growth) are tax-free. Direct contributions phase out at higher incomes.",
  },
  {
    id: "backdoor-roth",
    term: "Backdoor Roth",
    category: "Tax & Accounts",
    definition:
      "A workaround for high earners who exceed Roth IRA income limits: contribute to a Traditional IRA (non-deductible) then convert to Roth. The conversion itself has no income limit.",
  },
  {
    id: "mega-backdoor-roth",
    term: "Mega Backdoor Roth",
    category: "Tax & Accounts",
    definition:
      "An advanced tactic available in some 401(k) plans that allows after-tax contributions far above the standard $24,500 deferral limit, then converts them to Roth — potentially adding $40,000+ of Roth space per year.",
  },
  {
    id: "roth-conversion-ladder",
    term: "Roth Conversion Ladder",
    category: "Tax & Accounts",
    definition:
      "A FIRE-specific tactic where retirees convert Traditional 401(k)/IRA to Roth gradually each year (often filling lower tax brackets). After 5 years, conversions become available penalty-free, building a 'ladder' of accessible funds before age 59½.",
  },
  {
    id: "magi",
    term: "MAGI (Modified Adjusted Gross Income)",
    category: "Tax & Accounts",
    definition:
      "A modified version of Adjusted Gross Income used for many phase-out calculations: Roth IRA contribution eligibility, ACA subsidies, IRA deduction limits, and more.",
  },
  {
    id: "hsa",
    term: "HSA (Health Savings Account)",
    category: "Tax & Accounts",
    definition:
      "A triple-tax-advantaged account paired with a high-deductible health plan: contributions are tax-deductible, growth is tax-free, and withdrawals for qualified medical expenses are tax-free. 2026 limits: $4,400 individual, $8,750 family.",
  },

  // ── Healthcare ──
  {
    id: "aca",
    term: "ACA (Affordable Care Act)",
    category: "Healthcare",
    definition:
      "US healthcare law that created the individual marketplace and income-based premium subsidies. A critical FIRE planning tool because subsidies make pre-Medicare healthcare affordable for most early retirees.",
  },
  {
    id: "fpl",
    term: "FPL (Federal Poverty Level)",
    category: "Healthcare",
    definition:
      "The federal benchmark used to calculate ACA subsidy eligibility. Retirees often manage realized income to stay in subsidy-friendly bands of FPL.",
  },
  {
    id: "cobra",
    term: "COBRA",
    category: "Healthcare",
    definition:
      "Federal law allowing you to continue employer health coverage for up to 18 months after leaving a job — at full unsubsidized cost. Often used as a short-term bridge before switching to ACA marketplace plans.",
  },

  // ── Strategy & Math ──
  {
    id: "savings-rate",
    term: "Savings Rate",
    category: "Strategy & Math",
    definition:
      "The fraction of after-tax income you save and invest each year. By far the strongest lever in determining time-to-FIRE — far more important than investment return assumptions.",
    example:
      "At a 5% real return: 50% savings rate → ~17 years to FIRE; 25% savings rate → ~32 years.",
  },
  {
    id: "geographic-arbitrage",
    term: "Geographic Arbitrage",
    category: "Strategy & Math",
    definition:
      "The strategy of earning income in a high-cost area (or remotely) and spending in a low-cost area. Especially powerful for Lean FIRE — relocating to a cheaper region or country can dramatically reduce the FIRE number required.",
  },
  {
    id: "side-hustle",
    term: "Side Hustle",
    category: "Strategy & Math",
    definition:
      "Income earned outside a primary job. In FIRE planning, side hustles can substantially shorten time-to-FIRE — adding even $10K/year in extra savings can shave years off the timeline at high savings rates.",
  },
  {
    id: "compounding",
    term: "Compound Growth",
    category: "Strategy & Math",
    definition:
      "Earning returns on your previous returns, not just your contributions. The reason starting early matters so much for FIRE — a 25-year-old saving $500/month for 10 years and stopping ends up with more than a 35-year-old saving the same amount until 65.",
  },
  {
    id: "real-return",
    term: "Real Return (vs. Nominal)",
    category: "Strategy & Math",
    definition:
      "An investment return adjusted for inflation. Real returns reflect actual purchasing-power growth and are the appropriate input for long-horizon FIRE math. Long-term US stocks have averaged ~7% real (~10% nominal minus ~3% inflation).",
  },
  {
    id: "ssr",
    term: "Sequence of Returns Risk",
    category: "Withdrawal & Risk",
    definition:
      "See 'Sequence-of-Returns Risk' above. Two retirees with the same 30-year average return can have wildly different outcomes if one sees a market crash early in retirement and the other sees the crash late.",
  },
];
