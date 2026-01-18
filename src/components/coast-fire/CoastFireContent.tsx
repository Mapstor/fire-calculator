export default function CoastFireContent() {
  return (
    <article className="prose prose-sm max-w-none mt-12 prose-headings:text-gray-900 prose-h2:text-lg prose-h2:font-semibold prose-h3:text-base prose-h3:font-medium prose-p:text-sm prose-p:text-gray-600 prose-p:leading-relaxed prose-ul:text-sm prose-li:text-gray-600 prose-strong:text-gray-900">
      <h2>What is Coast FIRE?</h2>
      <p>
        Coast FIRE (Financial Independence, Retire Early) is a financial milestone where you've saved enough money that, without any additional contributions, your investments will grow to support your retirement through compound interest alone. Once you reach Coast FIRE, you only need to earn enough to cover your current living expenses – no more retirement savings required.
      </p>
      <p>
        Think of it as reaching the top of a hill on a bicycle. You've done the hard work of pedaling uphill (aggressive saving), and now you can coast downhill to your destination (retirement) without additional effort.
      </p>
      
      <h2>How is Coast FIRE Different from Regular FIRE?</h2>
      <p>
        Traditional FIRE requires you to save aggressively until you've accumulated 25x your annual expenses – your full "FIRE number." Only then can you stop working entirely.
      </p>
      <p>
        Coast FIRE is a milestone on the way to full FIRE. It's the point where you've saved enough that time and compound growth will do the rest. You still need income to cover expenses, but the pressure of retirement saving is gone.
      </p>
      
      <h3>The Coast FIRE Formula</h3>
      <p>Your Coast FIRE number is calculated as:</p>
      <pre className="bg-gray-100 p-4 rounded-lg">
        Coast FIRE Number = FIRE Number ÷ (1 + real return)^years until retirement
      </pre>
      <p>
        For example, if you need $1,500,000 to retire (your FIRE number), plan to retire at 65, are currently 35, and expect 5% real returns, your Coast FIRE number would be:
      </p>
      <pre className="bg-gray-100 p-4 rounded-lg">
        $1,500,000 ÷ (1.05)^30 = $347,000
      </pre>
      <p>
        This means if you have $347,000 invested at age 35, you've reached Coast FIRE. That money will grow to $1,500,000 by age 65 without adding another dollar.
      </p>
      
      <h2>Benefits of Coast FIRE</h2>
      
      <h3>1. Career Flexibility</h3>
      <p>
        Once you hit Coast FIRE, high income becomes optional. You could switch from a stressful $150,000 job to a fulfilling $50,000 job without jeopardizing retirement. Many Coast FIRE practitioners become teachers, work for nonprofits, or pursue creative careers that were previously "too risky."
      </p>
      
      <h3>2. Reduced Burnout</h3>
      <p>
        The pressure to save 50-70% of your income can lead to burnout. Coast FIRE lets you ease off the accelerator while still reaching your destination. You can spend more on life today while knowing retirement is secured.
      </p>
      
      <h3>3. Geographic Freedom</h3>
      <p>
        When you only need to cover current expenses, you can live anywhere. Move to a lower cost-of-living area, travel while working remotely, or relocate internationally. Your investments grow regardless of where you live.
      </p>
      
      <h3>4. Part-Time Work Options</h3>
      <p>
        Coast FIRE makes part-time work viable. If your expenses are $3,000/month, you might only need to work 20-25 hours per week instead of 40+. This creates time for hobbies, family, health, and personal projects.
      </p>
      
      <h2>How to Calculate Your Coast FIRE Number</h2>
      
      <h3>Step 1: Determine Your FIRE Number</h3>
      <p>
        Your FIRE number = Annual retirement expenses × 25 (based on 4% withdrawal rate)
      </p>
      <p>
        If you expect to spend $50,000/year in retirement: $50,000 × 25 = $1,250,000
      </p>
      
      <h3>Step 2: Choose Your Target Retirement Age</h3>
      <p>
        When do you want to be fully financially independent? For Coast FIRE, many people use traditional retirement ages (60-67) since the goal is coasting, not early retirement.
      </p>
      
      <h3>Step 3: Calculate Years Until Retirement</h3>
      <p>
        Simply: Target retirement age - Current age = Years until retirement
      </p>
      
      <h3>Step 4: Apply the Coast FIRE Formula</h3>
      <p>
        Using a conservative 5% real return (accounting for inflation):
      </p>
      <p>
        Coast FIRE Number = FIRE Number ÷ (1.05)^years
      </p>
      
      <h2>Coast FIRE vs. Barista FIRE</h2>
      <p>
        These terms are often confused but are slightly different:
      </p>
      <ul>
        <li><strong>Coast FIRE:</strong> You have enough saved that you could stop saving entirely. You work to cover current expenses only.</li>
        <li><strong>Barista FIRE:</strong> You've saved a significant amount but not quite enough. You work part-time (like at Starbucks) for income AND health insurance benefits, while your investments continue growing.</li>
      </ul>
      <p>
        Barista FIRE often requires more active management, while Coast FIRE is truly "set and forget."
      </p>
      
      <h2>Common Coast FIRE Questions</h2>
      
      <h3>What if the market crashes after I reach Coast FIRE?</h3>
      <p>
        This is a valid concern. A significant market downturn early in your coast period could extend your timeline. Mitigation strategies include:
      </p>
      <ul>
        <li>Using a more conservative expected return (4-5% instead of 7%)</li>
        <li>Building a buffer above your Coast FIRE number</li>
        <li>Maintaining the option to save more if markets decline significantly</li>
      </ul>
      
      <h3>Should I really stop saving after Coast FIRE?</h3>
      <p>
        You don't have to! Many people continue saving at a reduced rate, which provides extra security and potentially earlier full retirement. The key insight is that you no longer <em>need</em> to save – it becomes optional.
      </p>
      
      <h3>What about inflation?</h3>
      <p>
        Our calculator uses "real returns" (nominal returns minus inflation) so all numbers are in today's dollars. Your Coast FIRE number accounts for your expenses maintaining purchasing power over time.
      </p>
      
      <h3>How does Coast FIRE work with Social Security?</h3>
      <p>
        Social Security can significantly reduce your FIRE number. If you'll receive $2,000/month from Social Security starting at 67, that's $24,000/year you don't need your investments to provide. This lowers both your FIRE number and your Coast FIRE number.
      </p>
      
      <h2>Is Coast FIRE Right for You?</h2>
      <p>
        Coast FIRE is ideal if you:
      </p>
      <ul>
        <li>Want to reduce career stress without fully retiring</li>
        <li>Dream of a career change to something more fulfilling but lower-paying</li>
        <li>Value flexibility and optionality over maximizing wealth</li>
        <li>Started saving early and have time on your side</li>
        <li>Want a more sustainable path than aggressive FIRE timelines</li>
      </ul>
      <p>
        Coast FIRE may not be ideal if you:
      </p>
      <ul>
        <li>Want to retire as early as possible (full FIRE is more aggressive)</li>
        <li>Have unstable income and need maximum savings during good years</li>
        <li>Are already close to traditional retirement age (less compounding time)</li>
      </ul>
      
      <h2>Start Your Coast FIRE Journey</h2>
      <p>
        Use the calculator above to find your Coast FIRE number. You might be surprised – many people are closer to Coast FIRE than they think, especially if they started investing in their 20s. Even if you're not there yet, knowing your target gives you something concrete to work toward.
      </p>
      <p>
        Remember: Coast FIRE isn't about being lazy or giving up on financial goals. It's about recognizing when compound growth becomes your primary wealth-building tool, freeing you to design a life around more than just maximizing income.
      </p>
    </article>
  );
}