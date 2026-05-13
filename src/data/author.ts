import { SITE_URL } from './site-meta';

/**
 * Site author / editorial voice.
 *
 * One named author for now (E-E-A-T signal for finance YMYL content).
 * Update this file when adding co-authors.
 */
export const AUTHOR = {
  name: "Mark S.",
  jobTitle: "Software Engineer",
  shortBio:
    "Software engineer in Denver, Colorado. Built these FIRE calculators to model his own path to early retirement; shares them free so anyone can run the same math.",
  fullBio:
    "Mark is a 32-year-old software engineer based in Denver, Colorado. After hitting a $254,000 salary in tech, he started asking a question every high earner eventually faces: do I have to keep doing this until 70, or can I retire early? Rather than take a financial advisor's word for it, he wanted to see the math. He built calculators for himself, refined them as friends started asking to use them, and eventually published them here so anyone can run the same numbers.",
  disclaimer:
    "Mark is not a Certified Financial Planner. This site is educational. The methodology is grounded in widely-cited research — primarily the 1998 Trinity Study (Cooley, Hubbard & Walz at Trinity University in San Antonio, TX) and Mr. Money Mustache's \"shockingly simple math\" framework. For personalized advice, consult a fiduciary planner via NAPFA (napfa.org) or the CFP Board (letsmakeaplan.org).",
  url: `${SITE_URL}/about#author`,
  location: {
    city: "Denver",
    region: "Colorado",
    country: "United States",
  },
} as const;
