import type { Metadata } from 'next';
import { SITE_URL } from './site-meta';
import { AUTHOR } from './author';

/**
 * Single source of truth for blog post metadata.
 *
 * Every post page should call generateBlogMetadata(slug) for its `export const metadata`
 * and pass its slug to <ArticleSchema slug={...} />.
 *
 * To add a post: add an entry below + create the page folder.
 * To bump a post's "Last updated": change `updatedAt`.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string; // ISO date
  updatedAt: string;   // ISO date
  category: string;
  readTime: string;
}

export const POSTS: Record<string, BlogPost> = {
  "lean-fire-vs-fat-fire": {
    slug: "lean-fire-vs-fat-fire",
    title: "Lean FIRE vs Fat FIRE: Which Strategy Fits Your Lifestyle?",
    description:
      "Compare Lean FIRE vs Fat FIRE strategies side-by-side: target numbers, monthly spending, lifestyle trade-offs, and which approach fits your goals.",
    excerpt:
      "Compare minimum vs luxury retirement approaches with detailed calculator examples, real numbers, and lifestyle considerations for each FIRE strategy.",
    publishedAt: "2025-01-17",
    updatedAt: "2026-05-06",
    category: "Comparison",
    readTime: "12 min read",
  },
  "coast-fire-vs-barista-fire": {
    slug: "coast-fire-vs-barista-fire",
    title: "Coast FIRE vs Barista FIRE: The Semi-Retirement Showdown",
    description:
      "Coast FIRE vs Barista FIRE explained: how each works, the math behind both, and which semi-retirement path fits your situation.",
    excerpt:
      "Detailed analysis of two popular semi-retirement strategies. Learn how to step back from the grind while your money continues working.",
    publishedAt: "2025-01-18",
    updatedAt: "2026-05-06",
    category: "Comparison",
    readTime: "15 min read",
  },
  "complete-guide-coast-fire": {
    slug: "complete-guide-coast-fire",
    title: "The Complete Guide to Coast FIRE: Calculator, Strategy & Timeline",
    description:
      "Coast FIRE explained from scratch: the formula, age-based scenarios, an interactive calculator, and a 4-phase implementation plan.",
    excerpt:
      "Master the art of front-loading retirement savings to achieve financial freedom decades early.",
    publishedAt: "2025-01-19",
    updatedAt: "2026-05-06",
    category: "Deep Dive",
    readTime: "18 min read",
  },
  "couples-fire-strategy": {
    slug: "couples-fire-strategy",
    title: "Couples FIRE: How Dual Incomes Accelerate Independence",
    description:
      "Strategy guide for couples pursuing FIRE: tax optimization, joint contribution limits, expense sharing, and retiring on the same timeline.",
    excerpt:
      "Strategic guide for couples pursuing FIRE together. Tax optimization, expense sharing, and synchronized retirement planning.",
    publishedAt: "2025-01-20",
    updatedAt: "2026-05-06",
    category: "Strategy",
    readTime: "20 min read",
  },
  "fire-calculator-accuracy": {
    slug: "fire-calculator-accuracy",
    title: "FIRE Calculator Accuracy: Assumptions, Limitations & Best Use",
    description:
      "How accurate are FIRE calculators? A deep dive into the assumptions, sources of error, and the right way to use projections without misleading yourself.",
    excerpt:
      "Deep dive into FIRE calculator accuracy, assumptions, limitations, and how to use them effectively.",
    publishedAt: "2025-01-21",
    updatedAt: "2026-05-06",
    category: "Analysis",
    readTime: "16 min read",
  },
  "geographic-arbitrage-fire": {
    slug: "geographic-arbitrage-fire",
    title: "Geographic Arbitrage & FIRE: Location-Based Strategies",
    description:
      "How to use geographic arbitrage to reach FIRE faster: cost-of-living comparisons, location-adjusted FIRE numbers, and domestic vs international strategies.",
    excerpt:
      "Compare costs of living, calculate location-adjusted FIRE numbers, and explore domestic and international strategies.",
    publishedAt: "2025-01-22",
    updatedAt: "2026-05-06",
    category: "Strategy",
    readTime: "18 min read",
  },
  "fire-for-late-starters": {
    slug: "fire-for-late-starters",
    title: "FIRE for Late Starters: Achieving Independence After 40",
    description:
      "Realistic FIRE plan for late starters: catch-up contributions, accelerated savings rates, and timeline expectations when starting in your 40s or 50s.",
    excerpt:
      "Complete guide to achieving FIRE after 40. Accelerated savings strategies, catch-up contributions, and realistic timelines.",
    publishedAt: "2025-01-23",
    updatedAt: "2026-05-06",
    category: "Strategy",
    readTime: "20 min read",
  },
  "healthcare-planning-fire": {
    slug: "healthcare-planning-fire",
    title: "Healthcare Planning for FIRE: Pre-Medicare Strategies",
    description:
      "Bridging healthcare from early retirement to Medicare at 65: ACA subsidies, HSA strategy, COBRA, and cost projections through your gap years.",
    excerpt:
      "Complete guide to healthcare planning for early retirement: ACA strategies, cost projections, HSA optimization, and bridge coverage.",
    publishedAt: "2025-01-24",
    updatedAt: "2026-05-06",
    category: "Planning",
    readTime: "18 min read",
  },
  "fire-tax-optimization": {
    slug: "fire-tax-optimization",
    title: "FIRE Tax Optimization: Roth Ladders, Tax-Loss Harvesting, & More",
    description:
      "Tax strategies that meaningfully shorten your path to FIRE: Roth conversion ladders, capital gains harvesting, bracket management, and tax-advantaged sequencing.",
    excerpt:
      "Master tax optimization for FIRE: Roth conversion ladders, tax-loss harvesting, bracket management, and strategies to minimize lifetime taxes.",
    publishedAt: "2025-01-25",
    updatedAt: "2026-05-06",
    category: "Strategy",
    readTime: "22 min read",
  },
  "side-hustles-fire": {
    slug: "side-hustles-fire",
    title: "Side Hustles for FIRE: Income Streams That Move the Needle",
    description:
      "Which side hustles actually accelerate FIRE? Scalable income strategies, time efficiency, and how to add $20–50K annually without burning out.",
    excerpt:
      "The best side hustles to accelerate FIRE: scalable income strategies and time optimization to add meaningful annual savings.",
    publishedAt: "2025-01-26",
    updatedAt: "2026-05-06",
    category: "Income",
    readTime: "20 min read",
  },
  "fire-withdrawal-strategies": {
    slug: "fire-withdrawal-strategies",
    title: "FIRE Withdrawal Strategies: 4% Rule, Guardrails, & Beyond",
    description:
      "Compare withdrawal strategies for early retirement: the 4% rule, dynamic spending, guardrails, bucket strategies, and how each handles sequence-of-returns risk.",
    excerpt:
      "Master withdrawal strategies for early retirement. 4% rule variations, dynamic spending, bucket strategies for 50+ year retirements.",
    publishedAt: "2025-01-27",
    updatedAt: "2026-05-06",
    category: "Strategy",
    readTime: "18 min read",
  },
  "real-estate-fire": {
    slug: "real-estate-fire",
    title: "Real Estate for FIRE: Rentals, House Hacking & REITs",
    description:
      "How real estate fits into a FIRE plan: rental cash flow math, house hacking, BRRRR, and REIT alternatives for lower-effort exposure.",
    excerpt:
      "Master real estate investing for FIRE: rental strategies, house hacking, REITs, BRRRR, and passive income through property.",
    publishedAt: "2025-01-28",
    updatedAt: "2026-05-06",
    category: "Investment",
    readTime: "22 min read",
  },
  "fire-mindset-psychology": {
    slug: "fire-mindset-psychology",
    title: "FIRE Mindset & Psychology: The Mental Side of Early Retirement",
    description:
      "The non-financial side of FIRE: identity shifts, motivation, dealing with social pressure, and mentally preparing for life after work.",
    excerpt:
      "Master the psychological transformation required for FIRE success. Identity shifts, stress management, resilience, and mental preparation.",
    publishedAt: "2025-01-29",
    updatedAt: "2026-05-06",
    category: "Mindset",
    readTime: "15 min read",
  },
  "emergency-funds-fire": {
    slug: "emergency-funds-fire",
    title: "Emergency Funds for FIRE: Sizing, Storage, and Strategy",
    description:
      "How big should your emergency fund be at each FIRE stage? Where to keep it, when to invest it, and how to balance security with opportunity cost.",
    excerpt:
      "Design the perfect emergency fund for your FIRE journey: optimal sizes, building strategies, investment options.",
    publishedAt: "2025-01-30",
    updatedAt: "2026-05-06",
    category: "Planning",
    readTime: "18 min read",
  },
  "social-security-fire": {
    slug: "social-security-fire",
    title: "Social Security & FIRE: Optimizing Benefits for Early Retirees",
    description:
      "How early retirement affects Social Security: claiming strategies, the 35-year earnings rule, taxation, and integrating SS with your withdrawal plan.",
    excerpt:
      "Master Social Security optimization for FIRE: how early retirement impacts benefits, claiming strategies, tax implications.",
    publishedAt: "2026-02-01",
    updatedAt: "2026-05-06",
    category: "Planning",
    readTime: "22 min read",
  },
  "retire-by-50": {
    slug: "retire-by-50",
    title: "Can You Retire by 50? The Math, Savings Rates, and Real Scenarios",
    description:
      "What does it actually take to retire by 50? Required savings rate by starting age, the FIRE math, and three concrete scenarios from age 25, 30, and 35 starts.",
    excerpt:
      "What does it actually take to retire by 50? Required savings rates by starting age, the math, and three concrete scenarios.",
    publishedAt: "2026-04-15",
    updatedAt: "2026-05-08",
    category: "Strategy",
    readTime: "11 min read",
  },
  "sequence-of-returns-risk": {
    slug: "sequence-of-returns-risk",
    title: "Sequence-of-Returns Risk: The FIRE Risk That Trinity Doesn't Cover",
    description:
      "Why two retirees with identical lifetime returns can have wildly different outcomes — and how to defend a FIRE portfolio against bad luck in the first decade of retirement.",
    excerpt:
      "Two retirees with identical lifetime returns can have wildly different outcomes. Here's why early-retirement years are the most dangerous, and how to mitigate.",
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-08",
    category: "Analysis",
    readTime: "13 min read",
  },
  "how-long-does-1m-last": {
    slug: "how-long-does-1m-last",
    title: "How Long Does $1 Million Last in Retirement? (And $2M, $3M, $5M)",
    description:
      "How long $1M, $2M, $3M, and $5M last under different spending levels and withdrawal rates. With a sequence-of-returns risk overlay and the simple math.",
    excerpt:
      "How long does $1M actually last in retirement? Tables for $1M-$5M portfolios at multiple spending levels and withdrawal rates.",
    publishedAt: "2026-04-29",
    updatedAt: "2026-05-08",
    category: "Planning",
    readTime: "10 min read",
  },
  "retire-by-40": {
    slug: "retire-by-40",
    title: "Can You Retire by 40? The Aggressive FIRE Path & What It Requires",
    description:
      "Retiring by 40 requires extreme savings rates — 50% to 70%+ for most starting ages. Real math, three scenarios, and the lifestyle trade-offs that make it possible.",
    excerpt:
      "Retiring by 40 is the aggressive end of FIRE. Here's exactly what it takes — savings rates, lifestyle trade-offs, and three concrete scenarios.",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-08",
    category: "Strategy",
    readTime: "11 min read",
  },
  "fire-vs-traditional-retirement": {
    slug: "fire-vs-traditional-retirement",
    title: "FIRE vs Traditional Retirement: Side-by-Side Math, Risks, & Lifestyle",
    description:
      "FIRE vs traditional retirement compared on the metrics that matter: savings rate, target portfolio, retirement age, healthcare bridge, Social Security integration, and risk profile.",
    excerpt:
      "FIRE vs traditional retirement: same compound math, very different outcomes. Side-by-side comparison of savings rates, targets, healthcare bridge, and risk.",
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-08",
    category: "Comparison",
    readTime: "12 min read",
  },
};

export function getPost(slug: string): BlogPost {
  const post = POSTS[slug];
  if (!post) {
    throw new Error(`Unknown blog post slug: ${slug}`);
  }
  return post;
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function listCategories(): { name: string; slug: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of Object.values(POSTS)) {
    counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, slug: categoryToSlug(name), count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByCategorySlug(slug: string): BlogPost[] {
  return Object.values(POSTS).filter(
    (p) => categoryToSlug(p.category) === slug,
  );
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  Comparison: "Side-by-side breakdowns of FIRE strategies — when each path fits, what you trade off, and how the numbers differ.",
  "Deep Dive": "Long-form, thoroughly worked guides for readers who want the full mechanics behind a single FIRE strategy.",
  Strategy: "How to plan, optimize, and execute the FIRE journey — from couples planning to geographic arbitrage and tax efficiency.",
  Analysis: "Honest assessments of how FIRE math works in practice, including limitations and common pitfalls.",
  Planning: "The practical mechanics of early retirement — healthcare, Social Security, emergency funds, and the gap years before traditional retirement.",
  Income: "Strategies for accelerating FIRE through additional income — side hustles, scalable businesses, and high-leverage skills.",
  Investment: "Asset allocation, real estate, and portfolio strategies tailored to a long FIRE-style retirement horizon.",
  Mindset: "The psychological side of FIRE — identity shifts, motivation, and dealing with social pressure on the way to early retirement.",
};

export function getCategoryDescription(name: string): string {
  return CATEGORY_DESCRIPTIONS[name] ?? `Articles about ${name}.`;
}

export function generateBlogMetadata(slug: string): Metadata {
  const post = getPost(slug);
  const url = `${SITE_URL}/blog/${slug}`;
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [AUTHOR.name],
      siteName: "Financial FIRE Calculators",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: url,
    },
  };
}
