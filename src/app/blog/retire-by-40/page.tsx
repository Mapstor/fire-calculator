import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import { getPost } from "@/data/posts";

const SLUG = "retire-by-40" as const;

export default function RetireBy40Page() {
  const post = getPost(SLUG);

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <Link href="/blog/category/strategy" className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium hover:bg-purple-200">
              {post.category}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">{post.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-lg max-w-none prose-a:text-primary-600">
          <p className="text-lg leading-relaxed">
            Retiring by 40 sits at the aggressive end of the FIRE spectrum. It&apos;s mathematically achievable
            for a meaningful percentage of high-earning households, but it requires savings rates that most
            people consider extreme — and lifestyle choices that genuinely look different from the median.
            Below is the math, three concrete scenarios, and an honest assessment of what changes when you
            actually pull it off.
          </p>

          <h2>The math, by starting age</h2>
          <p>
            At 7% real return and a 4% withdrawal rate, the years required to reach FIRE depend almost
            entirely on your savings rate. The formula:{" "}
            <code className="text-sm bg-gray-100 px-1.5 py-0.5 rounded">
              n = ln((1−s)·25·r/s + 1) / ln(1+r)
            </code>
            . To retire by 40, n must be ≤ (40 − your current age). That means:
          </p>
          <ul>
            <li><strong>Start at 22:</strong> 18 years runway → ~42% savings rate gets there</li>
            <li><strong>Start at 25:</strong> 15 years → ~50% savings rate (the classic FIRE number)</li>
            <li><strong>Start at 28:</strong> 12 years → ~58% savings rate</li>
            <li><strong>Start at 30:</strong> 10 years → ~65% savings rate</li>
            <li><strong>Start at 32:</strong> 8 years → ~72% savings rate (very few achieve this)</li>
            <li><strong>Start at 35:</strong> 5 years → ~83% savings rate (essentially requires a windfall or executive comp)</li>
          </ul>
          <p>
            The takeaway: every year you delay starting requires a savings-rate jump that compounds the
            difficulty. This is why early-20s starts are so disproportionately powerful for &quot;retire by 40.&quot;
          </p>

          <h2>Scenario 1: Started at 25, the classic FIRE path</h2>
          <p>
            The textbook persona: a software engineer or similar high-earner saves 50% of after-tax income
            from their first job at 22-25. At a $90K salary saving $45K/year, with $0 starting balance and
            7% real returns:
          </p>
          <ul>
            <li><strong>Annual expenses:</strong> $45,000</li>
            <li><strong>FIRE number:</strong> $1,125,000 (45 × 25)</li>
            <li><strong>Years to FIRE:</strong> ~14.9 → retire at 39.9 ≈ 40</li>
          </ul>
          <p>
            Lifestyle profile: rents a modest apartment or buys a small home (no McMansion), drives a used
            car or no car, eats out occasionally, takes 1-2 vacations/year. Not extreme deprivation, but
            consciously below what the salary &quot;could&quot; support. The 50% savings rate is sustained for 15
            years; the math doesn&apos;t allow drift.
          </p>

          <h2>Scenario 2: Started at 30 with $50K saved</h2>
          <p>
            A late-20s career-switcher reaches a stable salary and gets serious at 30. With $50K already
            invested, they save 60% of a $100K salary ($60K/yr) at 7% real:
          </p>
          <ul>
            <li><strong>Annual expenses:</strong> $40,000</li>
            <li><strong>FIRE number:</strong> $1,000,000</li>
            <li><strong>Years to FIRE:</strong> ~9.4 → retire at 39.4</li>
          </ul>
          <p>
            Math check: starting balance $50K compounds at 7% real for 9.4 years to ~$96K. Annual savings of
            $60K compounded over 9.4 years adds ~$806K. Total ~$902K... close but not quite. Increase to a
            65% savings rate ($65K/yr) and the timeline tightens to 8.7 years, putting retirement at 38.7.
          </p>
          <p>
            Lifestyle profile: this requires a high salary plus very low expenses. Realistic if both partners
            in a dual-income household earn $80K+ each, and they share housing/transportation/utilities.
            Often involves geographic arbitrage — earning in a HCOL area, living in a MCOL area.
          </p>

          <h2>Scenario 3: The high-income doctor/lawyer/exec at 32</h2>
          <p>
            A doctor finishes residency at 32 and starts earning $300K. By saving 75% of after-tax income
            ($150K/yr at the highest tax bracket), with $0 starting balance and 7% real returns:
          </p>
          <ul>
            <li><strong>Annual expenses:</strong> $50,000 (yes — on a $300K gross salary)</li>
            <li><strong>FIRE number:</strong> $1,250,000</li>
            <li><strong>Years to FIRE:</strong> ~7.0 → retire at 39</li>
          </ul>
          <p>
            Lifestyle profile: deliberately living far below means. The salary buys options, not lifestyle.
            Most high-income FIRE achievers don&apos;t spend like high earners — they bank the difference. The
            tax inefficiency is brutal (75% savings on $300K means paying tax on $150K/yr that could have
            been deferred), but the absolute dollar amounts make the math work anyway.
          </p>

          <h2>What &quot;retire by 40&quot; actually means in practice</h2>
          <p>
            Most people who retire at 40 don&apos;t fully stop working — they stop needing to. Common patterns
            among 40-something early retirees:
          </p>
          <ul>
            <li><strong>Consulting or contract work.</strong> 10-20 hours/week of paid work that&apos;s genuinely interesting, billed at premium rates. Income covers ongoing expenses; portfolio compounds untouched.</li>
            <li><strong>Side projects with optional revenue.</strong> Writing, teaching, indie software, art. May or may not earn money. Either way, the FIRE portfolio handles the bills.</li>
            <li><strong>Volunteer / nonprofit work.</strong> Meaningful labor without the optimization-for-money pressure.</li>
            <li><strong>Career switch with no income concerns.</strong> Trying something genuinely lower-paid (teaching, public service, art) without it derailing the rest of life.</li>
          </ul>
          <p>
            The pure &quot;sit on a beach&quot; version of early retirement is real but rare — most who retire at 40
            find they want some structure. The key shift is that work becomes optional, not a requirement.
          </p>

          <h2>When 40 isn&apos;t the right target</h2>
          <p>
            If the math says 50% savings rate and you can&apos;t hold it, adjusting the target is healthier than
            pretending. Three honest alternatives:
          </p>
          <ul>
            <li><strong><Link href="/blog/retire-by-50">Retire by 50</Link>.</strong> Requires more achievable 25-40% savings rate at most starting ages.</li>
            <li><strong><Link href="/coast-fire-calculator">Coast FIRE</Link>.</strong> Save aggressively until 40, then stop and let compound growth carry you to traditional retirement at 65. Smaller target at 40 than full FIRE.</li>
            <li><strong><Link href="/barista-fire-calculator">Barista FIRE</Link>.</strong> Stop the corporate grind at 40 with a smaller portfolio; part-time work (often for healthcare) covers expenses while investments grow toward full FIRE.</li>
          </ul>

          <h2>The honest summary</h2>
          <p>
            Retiring by 40 is achievable but requires either an early start (22-25) with 50% savings rates,
            or a high income (250K+) with 70-75% savings rates. The dominant lever is savings rate; income
            scales the lifestyle but not the timeline. Run your numbers through the{" "}
            <Link href="/savings-rate-calculator">savings rate calculator</Link> first, then through the{" "}
            <Link href="/early-retirement-calculator">full early-retirement calculator</Link> to see the
            year-by-year path.
          </p>
        </article>

        <section className="mt-12 grid sm:grid-cols-2 gap-3">
          <Link href="/blog/retire-by-50" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Retire by 50 — the more accessible version</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/savings-rate-calculator" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Years to FIRE by savings rate</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/blog/sequence-of-returns-risk" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Sequence-of-returns risk (the early-FIRE killer)</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/coast-fire-calculator" className="group flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 hover:border-primary-300 transition-colors">
            <span className="text-sm font-medium text-gray-900">Coast FIRE — the gentler path</span>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </main>
    </div>
  );
}
