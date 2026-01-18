import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, DollarSign, Anchor, Coffee, Globe, Rocket, Heart, Shield, Briefcase, TrendingDown, Home, Brain, Umbrella, BarChart3, Banknote } from "lucide-react";

export const metadata: Metadata = {
  title: "FIRE Calculator Blog - Financial Independence Guides & Strategies",
  description: "Expert guides on FIRE strategies, calculator comparisons, and financial independence planning. Learn Lean FIRE, Fat FIRE, Coast FIRE, and more.",
  keywords: "fire blog, financial independence blog, fire calculator guides, early retirement strategies",
  openGraph: {
    title: "FIRE Calculator Blog - Financial Independence Guides & Strategies",
    description: "Expert guides on FIRE strategies and financial independence planning.",
    type: "website",
  },
};

const blogPosts = [
  {
    slug: "lean-fire-vs-fat-fire",
    title: "Lean FIRE vs Fat FIRE: Which Strategy Fits Your Lifestyle?",
    excerpt: "Compare minimum vs luxury retirement approaches with detailed calculator examples, real numbers, and lifestyle considerations for each FIRE strategy.",
    date: "January 17, 2025",
    readTime: "12 min read",
    category: "Comparison",
    categoryColor: "bg-blue-100 text-blue-800",
    icon: DollarSign,
    featured: false,
  },
  {
    slug: "coast-fire-vs-barista-fire",
    title: "Coast FIRE vs Barista FIRE: The Semi-Retirement Showdown",
    excerpt: "Detailed analysis of two popular semi-retirement strategies. Learn how to step back from the grind while your money continues working, with calculators and real scenarios.",
    date: "January 18, 2025",
    readTime: "15 min read",
    category: "Comparison",
    categoryColor: "bg-blue-100 text-blue-800",
    icon: Coffee,
    featured: false,
  },
  {
    slug: "complete-guide-coast-fire",
    title: "The Complete Guide to Coast FIRE: Calculator, Strategy & Timeline",
    excerpt: "Master the art of front-loading retirement savings to achieve financial freedom decades early. Detailed walkthrough with age-based scenarios, calculator tools, and actionable strategies.",
    date: "January 19, 2025",
    readTime: "18 min read",
    category: "Deep Dive",
    categoryColor: "bg-green-100 text-green-800",
    icon: Anchor,
    featured: false,
  },
  {
    slug: "couples-fire-strategy",
    title: "Couples FIRE Calculator: How Dual Incomes Accelerate Independence",
    excerpt: "Strategic guide for couples pursuing FIRE together. Learn tax optimization, expense sharing, and synchronized retirement planning with interactive calculators.",
    date: "January 20, 2025",
    readTime: "20 min read",
    category: "Strategy",
    categoryColor: "bg-purple-100 text-purple-800",
    icon: Users,
    featured: false,
  },
  {
    slug: "fire-calculator-accuracy",
    title: "FIRE Calculator Accuracy Guide: Understanding Assumptions & Limitations",
    excerpt: "Deep dive into FIRE calculator accuracy, assumptions, limitations, and how to use them effectively. Learn what makes calculations reliable and common pitfalls to avoid.",
    date: "January 21, 2025",
    readTime: "16 min read",
    category: "Analysis",
    categoryColor: "bg-red-100 text-red-800",
    icon: TrendingUp,
    featured: false,
  },
  {
    slug: "geographic-arbitrage-fire",
    title: "Geographic Arbitrage & FIRE: Location-Based Calculator Strategies",
    excerpt: "Master geographic arbitrage for FIRE. Compare costs of living, calculate location-adjusted FIRE numbers, and explore domestic and international strategies.",
    date: "January 22, 2025",
    readTime: "18 min read",
    category: "Strategy",
    categoryColor: "bg-indigo-100 text-indigo-800",
    icon: Globe,
    featured: false,
  },
  {
    slug: "fire-for-late-starters",
    title: "FIRE for Late Starters: Achieving Financial Independence After 40",
    excerpt: "Complete guide to achieving FIRE after 40. Learn accelerated savings strategies, catch-up contributions, and realistic timelines for late starters.",
    date: "January 23, 2025",
    readTime: "20 min read",
    category: "Strategy",
    categoryColor: "bg-purple-100 text-purple-800",
    icon: Rocket,
    featured: false,
  },
  {
    slug: "healthcare-planning-fire",
    title: "Healthcare Planning for FIRE: Pre-Medicare Strategies & Cost Calculators",
    excerpt: "Complete guide to healthcare planning for early retirement. Learn ACA strategies, cost projections, HSA optimization, and bridge coverage options.",
    date: "January 24, 2025",
    readTime: "18 min read",
    category: "Planning",
    categoryColor: "bg-emerald-100 text-emerald-800",
    icon: Heart,
    featured: false,
  },
  {
    slug: "fire-tax-optimization",
    title: "FIRE Tax Optimization Guide: Maximize Tax Efficiency in Retirement",
    excerpt: "Master tax optimization for FIRE. Learn Roth conversion ladders, tax-loss harvesting, bracket management, and strategies to minimize lifetime taxes.",
    date: "January 25, 2025",
    readTime: "22 min read",
    category: "Strategy",
    categoryColor: "bg-purple-100 text-purple-800",
    icon: Shield,
    featured: false,
  },
  {
    slug: "side-hustles-fire",
    title: "Side Hustles for FIRE: Income Streams to Accelerate Independence",
    excerpt: "Discover the best side hustles to accelerate FIRE. Learn scalable income strategies, time optimization, and how to add $20-50k annually to your savings.",
    date: "January 26, 2025",
    readTime: "20 min read",
    category: "Income",
    categoryColor: "bg-orange-100 text-orange-800",
    icon: Briefcase,
    featured: false,
  },
  {
    slug: "fire-withdrawal-strategies",
    title: "FIRE Withdrawal Strategies: Optimize Your Retirement Drawdown",
    excerpt: "Master withdrawal strategies for early retirement. Learn the 4% rule variations, dynamic spending, bucket strategies, and ensure your portfolio lasts 50+ years.",
    date: "January 27, 2025",
    readTime: "18 min read",
    category: "Strategy",
    categoryColor: "bg-teal-100 text-teal-800",
    icon: TrendingDown,
    featured: false,
  },
  {
    slug: "real-estate-fire",
    title: "Real Estate for FIRE: Property Investment Strategies",
    excerpt: "Master real estate investing for FIRE. Learn rental strategies, house hacking, REITs, BRRRR method, and build passive income through property.",
    date: "January 28, 2025",
    readTime: "22 min read",
    category: "Investment",
    categoryColor: "bg-amber-100 text-amber-800",
    icon: Home,
    featured: false,
  },
  {
    slug: "fire-mindset-psychology",
    title: "FIRE Mindset & Psychology: Mental Preparation for Early Retirement",
    excerpt: "Master the psychological transformation required for FIRE success. Learn to navigate identity shifts, manage stress, build resilience, and prepare mentally.",
    date: "January 29, 2025",
    readTime: "15 min read",
    category: "Mindset",
    categoryColor: "bg-pink-100 text-pink-800",
    icon: Brain,
    featured: false,
  },
  {
    slug: "emergency-funds-fire",
    title: "Emergency Funds for FIRE: Building Resilient Safety Nets",
    excerpt: "Design the perfect emergency fund for your FIRE journey. Learn optimal fund sizes, building strategies, investment options, and how to balance security with opportunity cost.",
    date: "January 30, 2025",
    readTime: "18 min read",
    category: "Planning",
    categoryColor: "bg-emerald-100 text-emerald-800",
    icon: Umbrella,
    featured: false,
  },
  {
    slug: "fire-investment-portfolio",
    title: "FIRE Investment Portfolio: Asset Allocation Strategies",
    excerpt: "Build the optimal investment portfolio for financial independence. Master asset allocation, rebalancing strategies, tax optimization, and risk management for maximum FIRE success.",
    date: "January 31, 2025",
    readTime: "20 min read",
    category: "Investment",
    categoryColor: "bg-indigo-100 text-indigo-800",
    icon: BarChart3,
    featured: false,
  },
  {
    slug: "social-security-fire",
    title: "Social Security & FIRE: Optimizing Benefits for Early Retirees",
    excerpt: "Master Social Security optimization for FIRE success. Learn how early retirement impacts benefits, claiming strategies, tax implications, and integration with your withdrawal plan.",
    date: "February 1, 2025",
    readTime: "22 min read",
    category: "Planning",
    categoryColor: "bg-blue-100 text-blue-800",
    icon: Banknote,
    featured: true,
  },
];

export default function BlogPage() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary-200" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              FIRE Calculator Blog
            </h1>
            <p className="text-xl sm:text-2xl text-primary-100 mb-6 max-w-3xl mx-auto">
              Expert guides, calculator comparisons, and strategies for achieving financial independence
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
          {blogPosts.filter(post => post.featured).map((post) => {
            const Icon = post.icon;
            return (
              <Link 
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="p-4 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                          {post.category}
                        </span>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-base text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-primary-600 font-medium group-hover:gap-3 transition-all">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        {/* All Posts Grid */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                >
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <Icon className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${post.categoryColor}`}>
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Blog Stats */}
        <section className="mt-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Complete FIRE Resource Library</h2>
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-indigo-600">17</div>
              <p className="text-sm text-gray-600">Comprehensive Guides</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-600">50+</div>
              <p className="text-sm text-gray-600">Interactive Calculators</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-600">100+</div>
              <p className="text-sm text-gray-600">Charts & Visualizations</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-600">60k+</div>
              <p className="text-sm text-gray-600">Words of Content</p>
            </div>
          </div>
          <p className="text-gray-700 text-center">
            From basic FIRE concepts to advanced optimization strategies, our complete library 
            covers every aspect of your financial independence journey.
          </p>
        </section>
      </main>
    </div>
  );
}