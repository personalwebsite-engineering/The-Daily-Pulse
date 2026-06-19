// =============================================
// THE DAILY PULSE — ARTICLE DATA
// =============================================
// To use real news, replace with NewsAPI:
//   https://newsapi.org/docs — free tier available
//   Replace ARTICLES array by fetching from:
//   https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_KEY
// =============================================

const ARTICLES = [

  // ── WORLD ────────────────────────────────
  {
    id: 'w1',
    slug: 'climate-summit-historic-agreement',
    title: 'World Leaders Sign Historic Climate Accord at Geneva Summit',
    subtitle: 'The 2026 Geneva Accord sets binding net-zero targets for 190 nations, marking the most sweeping climate agreement in history',
    category: 'world',
    author: 'Sarah Mitchell',
    authorRole: 'Senior International Correspondent',
    date: '2026-06-18',
    readTime: 6,
    image: 'https://picsum.photos/seed/climate1/1200/600',
    thumbnail: 'https://picsum.photos/seed/climate1/600/380',
    featured: true,
    breaking: true,
    tags: ['Climate', 'UN', 'Environment', 'Geneva', 'Diplomacy'],
    content: `
      <p>GENEVA — In what diplomats are calling the most consequential environmental agreement of the century, representatives from 190 nations signed the Geneva Climate Accord on Wednesday, committing their countries to legally binding net-zero carbon emissions targets by 2040 — a full decade ahead of the previous Paris Agreement timeline.</p>

      <p>The accord, hammered out over 11 days of intense negotiations at the Palais des Nations, introduces a global carbon pricing mechanism that will charge industries $120 per metric ton of CO₂ by 2030. Revenue generated — estimated at $2.4 trillion annually — will fund a sweeping Green Transition Fund designed to help developing nations shift away from fossil fuels without sacrificing economic growth.</p>

      <blockquote><p>"This is not the end of the road. It is the moment we decided there would be a road worth walking." — UN Secretary-General Amara Diallo</p></blockquote>

      <p>The agreement faced a last-minute crisis on Tuesday night when three major oil-producing nations threatened to withdraw over provisions requiring immediate reductions in domestic fossil fuel subsidies. A compromise allowing a seven-year phase-out period brought them back to the table, though environmental groups criticized the concession as too generous to petrostates.</p>

      <h2>What the Accord Means in Practice</h2>

      <p>For signatory nations, the accord mandates annual emissions reporting under a new independent verification body, the Global Climate Accountability Council, which has authority to levy financial penalties on non-compliant countries. The mechanism — absent from previous agreements — is widely seen as the accord's most significant innovation. "Targets without teeth have gotten us nowhere," said Dr. Elena Voronova, a climate scientist who advised the EU delegation. "This changes the calculus."</p>

      <p>Markets responded cautiously on Thursday, with renewable energy stocks surging while traditional oil and gas equities dipped. Economists warn that the transition will require coordinated investment of more than $6 trillion over the next 14 years to succeed — a figure that will demand unprecedented public-private partnership at a global scale.</p>
    `,
  },
  {
    id: 'w2',
    slug: 'eu-economic-pact-signed',
    title: 'EU and Southeast Asian Nations Sign Landmark Trade Pact',
    subtitle: 'The agreement eliminates tariffs on 94% of goods and creates the world\'s largest free-trade zone',
    category: 'world',
    author: 'Marcus Okafor',
    authorRole: 'Europe Correspondent',
    date: '2026-06-17',
    readTime: 4,
    image: 'https://picsum.photos/seed/eu-trade/1200/600',
    thumbnail: 'https://picsum.photos/seed/eu-trade/600/380',
    featured: false,
    breaking: false,
    tags: ['EU', 'Trade', 'ASEAN', 'Economy'],
    content: `
      <p>BRUSSELS — After seven years of negotiations, the European Union and ten Southeast Asian nations formally signed a comprehensive free-trade agreement on Thursday, eliminating tariffs on the vast majority of goods traded between the two blocs and establishing new standards for digital commerce, intellectual property, and environmental compliance.</p>

      <p>The agreement covers roughly 1.1 billion people and an estimated $3.8 trillion in annual trade. EU trade ministers celebrated the deal as proof that multilateralism remains viable, while critics in several member states warned that the rapid removal of agricultural protections could devastate rural economies in France, Germany, and Poland.</p>

      <p>The pact includes a novel "climate conditionality" clause — the first of its kind in a major trade agreement — that allows either party to impose temporary tariffs on imports from industries that fail to meet agreed emissions benchmarks. The clause passed only after months of resistance from several ASEAN members, who argued it could function as a form of green protectionism.</p>

      <p>Implementation will be phased over five years, with the most sensitive product categories — including rice, palm oil, and automotive parts — subject to the longest adjustment periods. Trade analysts expect the deal to add an estimated 0.8% to EU GDP within a decade, though the distributional effects across member states remain a subject of intense political debate.</p>
    `,
  },
  {
    id: 'w3',
    slug: 'humanitarian-crisis-eastern-region',
    title: 'Aid Agencies Warn of Deepening Crisis as Conflict Displaces Millions',
    subtitle: 'The UN says 4.2 million people have been displaced in the past eight months, with humanitarian access severely restricted',
    category: 'world',
    author: 'Amara Hassan',
    authorRole: 'Humanitarian Affairs Reporter',
    date: '2026-06-16',
    readTime: 5,
    image: 'https://picsum.photos/seed/humanitarian/1200/600',
    thumbnail: 'https://picsum.photos/seed/humanitarian/600/380',
    featured: false,
    breaking: false,
    tags: ['Humanitarian', 'Conflict', 'UN', 'Refugees'],
    content: `
      <p>NAIROBI — The United Nations Office for the Coordination of Humanitarian Affairs issued an emergency appeal Thursday for $2.8 billion in aid, warning that 4.2 million people displaced by ongoing conflict in the region face an acute shortage of food, clean water, and medical supplies as the rainy season intensifies travel and delivery obstacles.</p>

      <p>Access to conflict-affected areas has remained severely restricted, with humanitarian convoys blocked at checkpoints for weeks at a time. Aid organizations report that only 23% of needed supplies have reached their intended recipients since January, a figure OCHA describes as "catastrophically insufficient for preventing mass casualties."</p>

      <p>The International Committee of the Red Cross has warned that improvised detention facilities in contested zones hold an unknown number of civilians, and called on all armed parties to allow independent inspection. Several governments have pledged additional contributions to emergency funds, though aid workers on the ground say funding announcements rarely translate into timely field operations.</p>

      <p>Neighboring countries have absorbed the largest share of displaced populations, straining already-stretched public services. Health officials in the region report sharp increases in cholera, measles, and acute malnutrition, particularly among children under five. "The numbers are not statistics," said Dr. Priya Rajan, a field physician with Médecins Sans Frontières. "Each one is a family that had somewhere to be."</p>
    `,
  },
  {
    id: 'w4',
    slug: 'india-china-diplomacy',
    title: 'India and China Resume High-Level Talks After Three-Year Freeze',
    subtitle: 'Foreign ministers meet in New Delhi in the highest-level bilateral contact since the 2023 border standoff',
    category: 'world',
    author: 'Priya Sharma',
    authorRole: 'South Asia Bureau Chief',
    date: '2026-06-15',
    readTime: 4,
    image: 'https://picsum.photos/seed/india-china/1200/600',
    thumbnail: 'https://picsum.photos/seed/india-china/600/380',
    featured: false,
    breaking: false,
    tags: ['India', 'China', 'Diplomacy', 'Asia'],
    content: `
      <p>NEW DELHI — Indian and Chinese foreign ministers held their first in-person talks in three years on Friday, signaling a cautious but significant diplomatic thaw between the two nuclear-armed neighbors after years of heightened tensions following a deadly border clash in the Galwan Valley.</p>

      <p>The talks, held at the Indian foreign ministry's historic Hyderabad House, lasted nearly five hours and covered trade normalization, the status of disputed Himalayan border zones, and coordination on regional security issues. No joint statement was released, which analysts read as a sign that the two sides remain far apart on core territorial disputes.</p>

      <p>Both governments framed the meeting as a "reset conversation" rather than a formal negotiation. Indian officials noted that trade between the two countries has quietly recovered to near-record levels despite political tensions, creating economic incentives for improved relations that neither side can easily afford to ignore. Bilateral trade exceeded $135 billion in the previous fiscal year, even as both governments maintained pointed public rhetoric.</p>

      <p>Regional observers noted that external pressure — particularly China's strained relationship with Western partners and India's deepening defense ties with the United States and Australia — may have created a narrow diplomatic window. A second round of talks is expected to be announced within weeks, though the timeline and agenda remain subject to negotiation.</p>
    `,
  },
  {
id: 'w5',
slug: 'monu-shares-his-story',
title: 'Monu Opens Up About His Identity',
subtitle: 'A personal story about self-acceptance, confidence, and living authentically.',
category: 'entertainment',
author: 'Staff Writer',
authorRole: 'Reporter',
date: '2026-06-19',
readTime: 3,
image: 'https://example.com/monu.jpg',
thumbnail: 'https://example.com/monu-thumb.jpg',
featured: false,
breaking: false,
tags: ['Identity', 'LGBTQ+', 'Community'],
content: ` <p>Monu, a  character in this example article, recently shared that he is gay and spoke about the importance of being honest about who he is.</p>

```
<p>He described his journey toward self-acceptance and said that support from friends and family played a major role in helping him feel comfortable expressing himself.</p>

<blockquote>
  <p>"Being myself has given me confidence and peace of mind," Monu said.</p>
</blockquote>

<h2>Message of Acceptance</h2>

<p>Monu hopes that his story encourages others to embrace their identities and treat one another with respect and understanding.</p>
```

`,
},

  // ── POLITICS ─────────────────────────────
  {
    id: 'p1',
    slug: 'senate-infrastructure-bill',
    title: 'Senate Passes $1.2 Trillion Infrastructure Bill in Rare Bipartisan Vote',
    subtitle: 'The sweeping legislation funds broadband, clean water, and bridge repair across all 50 states, passing 68-31',
    category: 'politics',
    author: 'James Whitfield',
    authorRole: 'Washington Correspondent',
    date: '2026-06-18',
    readTime: 5,
    image: 'https://picsum.photos/seed/senate/1200/600',
    thumbnail: 'https://picsum.photos/seed/senate/600/380',
    featured: true,
    breaking: true,
    tags: ['Senate', 'Infrastructure', 'Bipartisan', 'Congress'],
    content: `
      <p>WASHINGTON — The Senate passed a sweeping $1.2 trillion infrastructure package on Thursday in a 68-31 vote that drew support from 19 Republicans, marking one of the most significant bipartisan legislative achievements in recent memory and delivering a major political win for the administration ahead of the November midterm elections.</p>

      <p>The legislation — the American Renewal Act — allocates $550 billion in new spending over eight years for roads, bridges, passenger rail, broadband internet, clean water infrastructure, and the removal of lead pipes from municipal water systems. It also includes $73 billion for the electrical grid, $65 billion for broadband expansion in rural areas, and $7.5 billion for electric vehicle charging networks nationwide.</p>

      <blockquote><p>"This is not a red bill or a blue bill. It's a bill that fixes things." — Sen. Rob Portman (R-OH)</p></blockquote>

      <p>The legislation will now move to the House, where progressive members have signaled they will push for additions including expanded social spending. House leadership has indicated a vote within three weeks, though the margin for passage remains narrow and the final shape of the bill uncertain.</p>

      <h2>What the Bill Funds</h2>

      <p>The bill's signature provisions include the largest federal investment in passenger rail since the creation of Amtrak, with $66 billion earmarked for Amtrak modernization and new high-speed corridors connecting mid-sized cities. Transportation advocates praised the rail provisions as a generational shift in federal transportation philosophy, while freight industry groups raised concerns about mandated electrification timelines they called "technically unrealistic."</p>

      <p>Economists from across the political spectrum broadly agreed that the spending addresses genuine infrastructure deficits, though they differed sharply on whether the bill's financing mechanism — a mix of unspent pandemic relief funds and projected savings from improved tax enforcement — will actually offset its cost as proponents claim.</p>
    `,
  },
  {
    id: 'p2',
    slug: 'presidential-approval-shift',
    title: 'Presidential Approval Climbs to 52% Following Economic Report',
    subtitle: 'A new Gallup survey shows the administration\'s strongest polling numbers in 18 months as inflation cools',
    category: 'politics',
    author: 'Rebecca Torres',
    authorRole: 'Political Reporter',
    date: '2026-06-16',
    readTime: 3,
    image: 'https://picsum.photos/seed/approval-poll/1200/600',
    thumbnail: 'https://picsum.photos/seed/approval-poll/600/380',
    featured: false,
    breaking: false,
    tags: ['Polls', 'White House', 'Economy', 'Elections'],
    content: `
      <p>WASHINGTON — Presidential job approval has risen to 52% in the latest Gallup monthly survey, the administration's best showing since early 2024 and a six-point gain over the previous month. The improvement tracks closely with a separate consumer confidence report showing Americans' outlook on personal finances reaching its highest level in two years.</p>

      <p>The polling uptick comes after three consecutive months of easing inflation, with the Consumer Price Index falling to 2.4% year-over-year in May — approaching the Federal Reserve's 2% target. Analysts note that incumbent parties historically benefit when pocketbook conditions improve in the 12 months before an election, though the effect is neither automatic nor guaranteed at this stage of the cycle.</p>

      <p>The survey found that economic optimism is not uniform. Younger voters and renters remain significantly more pessimistic than homeowners and older respondents, reflecting the continued impact of elevated housing costs and student debt. The administration has pointed to recently passed rental assistance measures and an expanded income-driven student loan repayment program as evidence of concrete action on both fronts.</p>

      <p>Opposition strategists warned against reading too much into a single poll, pointing to persistent dissatisfaction on immigration and public safety issues that, in their view, represent more durable electoral liabilities heading into November's midterm contests.</p>
    `,
  },
  {
    id: 'p3',
    slug: 'midterm-realignment',
    title: 'Suburban Voters Are Reshaping American Politics — Again',
    subtitle: 'A decade of shifting loyalties in the suburbs has produced a new electoral battleground that defies traditional party lines',
    category: 'politics',
    author: 'Daniel Osei',
    authorRole: 'National Political Correspondent',
    date: '2026-06-14',
    readTime: 6,
    image: 'https://picsum.photos/seed/elections/1200/600',
    thumbnail: 'https://picsum.photos/seed/elections/600/380',
    featured: false,
    breaking: false,
    tags: ['Elections', 'Suburbs', 'Realignment', 'Midterms'],
    content: `
      <p>ATLANTA — In the sprawling ring of subdivisions and strip malls that encircle this city, something unusual is happening: registered Republicans are attending town halls organized by local Democratic officials, while longtime Democrats quietly tell pollsters they might vote for the other party's school board candidate. Welcome to the new American suburb, where the old rules no longer apply.</p>

      <p>The shifting of suburban voters — college-educated homeowners, in particular — has been the single most decisive electoral force in American politics since 2016. Over the past decade, these communities have moved from reliably Republican to genuinely contested, producing the narrow margins that swung control of Congress and, ultimately, the White House in successive cycles.</p>

      <p>What's driving it is less a coherent ideology than a collection of anxieties: about school quality, property taxes, local crime statistics, and a political environment that many suburban voters describe as exhaustingly polarized. Focus groups conducted in competitive suburban counties in Georgia, Arizona, and Wisconsin reveal voters who are deeply skeptical of both parties but unwilling to disengage entirely.</p>

      <p>Political scientists debate whether this represents a durable realignment or a series of circumstantial swings. What is beyond dispute is that suburban votes will determine which party controls the House and Senate after November — and that neither party has yet found a message that reliably consolidates these voters rather than simply renting their support one cycle at a time.</p>
    `,
  },

  // ── BUSINESS ─────────────────────────────
  {
    id: 'b1',
    slug: 'fed-rate-decision',
    title: 'Federal Reserve Holds Rates Steady, Signals One Cut by Year-End',
    subtitle: 'Fed Chair says inflation is "on the right path" but the central bank needs more data before acting',
    category: 'business',
    author: 'Carol Nakamura',
    authorRole: 'Economics Correspondent',
    date: '2026-06-18',
    readTime: 4,
    image: 'https://picsum.photos/seed/federal-reserve/1200/600',
    thumbnail: 'https://picsum.photos/seed/federal-reserve/600/380',
    featured: false,
    breaking: false,
    tags: ['Federal Reserve', 'Interest Rates', 'Inflation', 'Economy'],
    content: `
      <p>WASHINGTON — The Federal Reserve held its benchmark interest rate unchanged at 4.75% on Wednesday, as widely expected, but signaled that a single quarter-point reduction before the end of 2026 remains likely if inflation continues its gradual decline toward the central bank's 2% target. Markets rallied modestly on the announcement, with the S&P 500 gaining 0.6%.</p>

      <p>Fed Chair Jerome Powell, speaking at a press conference following the Federal Open Market Committee meeting, characterized the current inflation trajectory as "encouraging but incomplete," noting that the services sector and shelter costs continue to put upward pressure on the index even as goods inflation has largely normalized. He declined to specify which meeting might produce a rate reduction, emphasizing that all decisions remain data-dependent.</p>

      <p>The updated "dot plot" — a chart showing individual FOMC members' rate projections — shifted slightly in a dovish direction compared to March, with nine of nineteen participants projecting one cut this year versus six in the previous survey. None projected more than two cuts, a signal that the era of rapid rate reductions hoped for by markets and borrowers remains unlikely in the near term.</p>

      <p>Mortgage rates, which have hovered above 7% for 18 months, are unlikely to fall meaningfully until the Fed begins its easing cycle. Housing market economists note that the combination of high rates and limited inventory continues to depress transaction volumes to levels not seen since the early 1990s, creating what some describe as a "housing gridlock" that monetary policy alone cannot resolve.</p>
    `,
  },
  {
    id: 'b2',
    slug: 'tech-merger-wave',
    title: 'Tech\'s Merger Wave Draws Antitrust Fire from Both Sides of the Atlantic',
    subtitle: 'Three major acquisitions announced in 90 days have placed regulators in Washington and Brussels on a collision course with Silicon Valley',
    category: 'business',
    author: 'Alex Kim',
    authorRole: 'Technology Business Reporter',
    date: '2026-06-17',
    readTime: 5,
    image: 'https://picsum.photos/seed/merger-tech/1200/600',
    thumbnail: 'https://picsum.photos/seed/merger-tech/600/380',
    featured: false,
    breaking: false,
    tags: ['Mergers', 'Antitrust', 'Big Tech', 'Regulation'],
    content: `
      <p>SAN FRANCISCO — In the space of 90 days, Silicon Valley's largest companies have announced three blockbuster acquisitions totaling more than $180 billion — a burst of consolidation that has triggered simultaneous investigations by the Justice Department, the Federal Trade Commission, and the European Commission, raising the prospect of a regulatory confrontation that could reshape the technology industry for a generation.</p>

      <p>The deals — one involving cloud infrastructure, one in the AI chip market, and one targeting a major data analytics company — each individually cross the traditional thresholds that draw antitrust scrutiny. Taken together, they represent what one senior DOJ official described as a "moment of genuine concern" about competitive dynamics in markets that have become essential infrastructure for the modern economy.</p>

      <p>Technology executives argue that the acquisitions are necessary to compete with state-backed rivals in China and to fund the scale of research investment required in the AI era. "You cannot regulate your way to global competitiveness," said one CEO whose company is involved in a pending deal, speaking on condition of anonymity because the acquisition has not cleared regulatory review. Antitrust economists counter that the competitive threat argument has historically been used to justify mergers that ultimately harmed consumers and innovation.</p>

      <p>The political dimension complicates the regulatory calculus. Technology policy has become one of the few genuinely bipartisan flashpoints in Washington, with lawmakers from both parties expressing concern about market concentration — though they disagree sharply about remedies. In Brussels, the EU's Digital Markets Act gives regulators broader tools to block or restructure deals than their American counterparts currently possess.</p>
    `,
  },
  {
    id: 'b3',
    slug: 'small-business-recovery',
    title: 'Small Business Formation Is Booming — and Defying the Skeptics',
    subtitle: 'New data shows startup rates among businesses with fewer than 20 employees are at their highest level since the 1980s',
    category: 'business',
    author: 'Tanya Fernandez',
    authorRole: 'Small Business Reporter',
    date: '2026-06-15',
    readTime: 4,
    image: 'https://picsum.photos/seed/small-biz/1200/600',
    thumbnail: 'https://picsum.photos/seed/small-biz/600/380',
    featured: false,
    breaking: false,
    tags: ['Small Business', 'Startups', 'Economy', 'Entrepreneurship'],
    content: `
      <p>NEW YORK — Despite elevated borrowing costs and persistent concerns about consumer spending, new business formation among small enterprises — those with fewer than 20 employees — is running at its highest rate since the Bureau of Labor Statistics began tracking the metric in 1994. Approximately 5.1 million new businesses were registered in the United States last year, nearly double the pre-pandemic annual average.</p>

      <p>The surge is driven by a confluence of factors: remote work has lowered the barrier to launching service businesses; AI tools have reduced the cost of basic business operations; and a generation of workers who weathered pandemic-era layoffs appears markedly more willing than their predecessors to pursue self-employment as a primary career path rather than a fallback option.</p>

      <p>The data challenge a conventional narrative that economic uncertainty suppresses entrepreneurship. Economists who study business formation suggest the opposite may be true in some conditions: when labor markets are tight and workers have leverage, the relative risk of starting a business declines. A failed venture no longer necessarily means unemployment — it often means returning to a job market that is still hiring.</p>

      <p>Not all of the new ventures will survive. Failure rates for small businesses remain stubbornly high, with roughly 20% closing within the first year and nearly half within five years. But researchers note that even failed startups transfer skills, networks, and knowledge that make the broader entrepreneurial ecosystem more resilient. "We are in a period of creative destruction," said economist Maria Chen of the Brookings Institution. "The churn itself is productive."</p>
    `,
  },
  {
    id: 'b4',
    slug: 'supply-chain-stabilizes',
    title: 'Global Supply Chains Are Finally Healing. Here\'s What Changed.',
    subtitle: 'After four years of disruption, shipping costs, lead times, and inventory levels are returning to pre-pandemic norms',
    category: 'business',
    author: 'Leo Zhang',
    authorRole: 'Global Trade Reporter',
    date: '2026-06-13',
    readTime: 5,
    image: 'https://picsum.photos/seed/supply-chain/1200/600',
    thumbnail: 'https://picsum.photos/seed/supply-chain/600/380',
    featured: false,
    breaking: false,
    tags: ['Supply Chain', 'Trade', 'Logistics', 'Manufacturing'],
    content: `
      <p>ROTTERDAM — The world's busiest port is, for the first time in four years, running on schedule. Container throughput at Rotterdam's Europoort terminals — long a barometer for global trade health — has normalized, with average vessel wait times falling from a peak of 12 days in 2022 to under 36 hours. The improvement is replicated at ports from Los Angeles to Singapore, signaling that the era of supply chain dysfunction triggered by the pandemic may finally be ending.</p>

      <p>The normalization reflects a combination of demand moderation, expanded port capacity, and a fundamental rewiring of logistics networks by companies that spent the past four years building redundancy into systems that had been optimized, almost pathologically, for efficiency. "Just-in-time is not dead, but it no longer means zero inventory," said Dr. Helena Braun, a supply chain professor at Erasmus University. "Companies learned the hard way that lean systems have no shock absorbers."</p>

      <p>Shipping rates, which hit record highs during the disruption, have fallen by more than 80% from their 2022 peaks, easing cost pressures on manufacturers and retailers. The reduction has not yet translated fully into lower consumer prices, in part because retailers are using improved margins to rebuild balance sheets thinned during the disruption years, and in part because wage inflation in transportation and logistics has partially offset logistics cost savings.</p>

      <p>The recovery is uneven. Semiconductor supply chains — critical for electronics, automotive, and defense industries — remain structurally constrained, with new fabrication capacity still years from coming online in volumes sufficient to eliminate periodic shortfalls. Geopolitical concentration risk, particularly dependence on Taiwan for advanced chips, remains the supply chain vulnerability that keeps corporate risk officers up at night.</p>
    `,
  },

  // ── TECH ─────────────────────────────────
  {
    id: 't1',
    slug: 'ai-medical-diagnosis',
    title: 'AI System Outperforms Specialist Physicians in Early Cancer Detection Study',
    subtitle: 'A Johns Hopkins trial found the model correctly identified 94.3% of early-stage tumors — 12 points higher than the specialist average',
    category: 'tech',
    author: 'Dr. Nora Patel',
    authorRole: 'Science & Technology Correspondent',
    date: '2026-06-18',
    readTime: 7,
    image: 'https://picsum.photos/seed/ai-medical/1200/600',
    thumbnail: 'https://picsum.photos/seed/ai-medical/600/380',
    featured: true,
    breaking: false,
    tags: ['AI', 'Medicine', 'Cancer', 'Healthcare', 'Machine Learning'],
    content: `
      <p>BALTIMORE — A clinical trial at Johns Hopkins Medicine has produced what researchers are calling a landmark result in the decades-long effort to apply artificial intelligence to early cancer detection: an AI diagnostic system achieved a 94.3% accuracy rate in identifying early-stage tumors across five cancer types, outperforming a panel of 24 specialist physicians whose average accuracy was 82.1% on the same image set.</p>

      <p>The study, published Wednesday in the New England Journal of Medicine, evaluated the system across 47,000 medical imaging scans — including CT, MRI, and pathology slides — in a blinded protocol designed to prevent researchers from influencing results. The model was developed by a collaboration between Johns Hopkins, MIT, and a medical AI startup, trained on a dataset of 4.2 million anonymized patient scans.</p>

      <blockquote><p>"This is not a replacement for physicians. It is what physicians deserve to have — a tireless second opinion that has seen more cases than any human ever could." — Dr. Rachel Kim, principal investigator</p></blockquote>

      <p>The performance gap was most pronounced for early-stage detections, where the AI's advantage over specialist consensus was 15 percentage points. Late-stage identification rates were broadly comparable, consistent with the hypothesis that AI systems are particularly well-suited to identifying subtle early-stage patterns that human reviewers can miss under the time pressure of a clinical setting. The model also produced dramatically fewer false positives, a persistent problem with current screening methods that leads to unnecessary follow-up procedures and patient anxiety.</p>

      <h2>From Trial to Clinic</h2>

      <p>Translating the trial results into standard clinical practice faces significant regulatory, logistical, and equity hurdles. The FDA has not yet approved any AI diagnostic system for independent clinical use in oncology, though several are authorized as decision-support tools. Researchers also acknowledge that the training data, while large, skews toward patients treated at large academic medical centers — a demographic that may not fully represent the diversity of presentations seen in community hospitals and rural clinics.</p>

      <p>Perhaps the most pressing question is access. If AI diagnostic tools of this caliber require sophisticated imaging equipment and robust digital infrastructure, their benefits may accrue disproportionately to wealthy health systems and patients who already have the best access to specialist care. "The worst possible outcome would be a technology that widens the gap it has the potential to close," said Dr. Kim. The research team says equitable deployment is a core design priority for the next phase of the program.</p>
    `,
  },
  {
    id: 't2',
    slug: 'quantum-computing-funding',
    title: 'Quantum Computing Startup Raises $820M in Record-Breaking Round',
    subtitle: 'The funding will accelerate development of a fault-tolerant 1,000-qubit processor the company says could arrive by 2028',
    category: 'tech',
    author: 'Evan Park',
    authorRole: 'Venture & Technology Reporter',
    date: '2026-06-17',
    readTime: 4,
    image: 'https://picsum.photos/seed/quantum/1200/600',
    thumbnail: 'https://picsum.photos/seed/quantum/600/380',
    featured: false,
    breaking: false,
    tags: ['Quantum Computing', 'Startups', 'Venture Capital', 'Technology'],
    content: `
      <p>BOSTON — QuantumLeap Technologies, a Boston-based quantum computing company founded in 2020 by a team of former MIT physicists, has raised $820 million in a Series C round led by Andreessen Horowitz and a consortium of sovereign wealth funds, making it the largest single funding round in quantum computing history and valuing the company at approximately $9.4 billion.</p>

      <p>The company has developed a novel error-correction architecture it calls "topological shielding" that its engineers claim dramatically reduces the number of physical qubits needed to achieve computational fault tolerance — the threshold at which a quantum computer can correct its own errors reliably enough to perform useful calculations. Achieving fault tolerance at scale has been the field's most persistent technical challenge.</p>

      <p>QuantumLeap claims its approach could produce a commercially useful 1,000-qubit processor by 2028, which would represent a major acceleration of timelines most quantum physicists have publicly cited. Independent researchers have reviewed portions of the company's published work and describe the approach as "scientifically credible but unproven at scale" — a characterization that captures both the excitement and the uncertainty surrounding the field.</p>

      <p>If the technical claims hold, the implications for cryptography, drug discovery, financial modeling, and materials science could be profound. Practically speaking, the near-term use cases will likely be narrow and specialized — quantum computing is not expected to replace classical computers for most applications for decades. But for specific classes of optimization and simulation problems, the advantage could be decisive and economically significant.</p>
    `,
  },
  {
    id: 't3',
    slug: 'social-media-regulation',
    title: 'Congress Advances Most Sweeping Social Media Regulation in U.S. History',
    subtitle: 'The Platform Accountability Act would impose new duties of care, algorithmic transparency requirements, and data portability rights',
    category: 'tech',
    author: 'Mia Laurent',
    authorRole: 'Tech Policy Reporter',
    date: '2026-06-16',
    readTime: 5,
    image: 'https://picsum.photos/seed/social-media-reg/1200/600',
    thumbnail: 'https://picsum.photos/seed/social-media-reg/600/380',
    featured: false,
    breaking: false,
    tags: ['Social Media', 'Regulation', 'Congress', 'Big Tech', 'Policy'],
    content: `
      <p>WASHINGTON — The Senate Commerce Committee advanced the Platform Accountability Act on Tuesday in a 16-9 bipartisan vote, sending to the full Senate a bill that would impose the most significant federal regulation on social media companies since Section 230 established the internet's liability framework in 1996. Tech stocks fell sharply on the news, with Meta, TikTok parent ByteDance, and X Corporation each losing more than 4% in after-hours trading.</p>

      <p>The legislation, a compromise between more aggressive House proposals and industry-backed alternatives, would require platforms with more than 50 million monthly active users to conduct and publish annual algorithmic impact assessments, give users the right to download and transfer their data, and establish a new duty of care for content that a reasonable person would find harmful — particularly as it relates to minors.</p>

      <p>Platform companies argue that the duty-of-care standard is impractically vague and that algorithmic transparency requirements would expose trade secrets while doing little to improve user safety. Civil liberties groups, meanwhile, worry that liability provisions could pressure platforms to over-moderate political speech, particularly from marginalized communities whose content is disproportionately flagged by automated systems.</p>

      <p>The bill's passage in the full Senate is not assured. Several swing-vote members have signaled they want changes to the minor-protection provisions, which some characterize as constitutional overreach, and the timeline for floor debate remains unclear. The House version is more aggressive on both algorithmic disclosure and platform liability, meaning that any bill reaching the President's desk would require significant conference committee work.</p>
    `,
  },
  {
    id: 't4',
    slug: 'ev-battery-breakthrough',
    title: 'New Battery Chemistry Doubles EV Range and Charges in 12 Minutes',
    subtitle: 'A team at Stanford has demonstrated a solid-state battery cell that could transform the economics of electric vehicles',
    category: 'tech',
    author: 'Chris Tanaka',
    authorRole: 'Energy Technology Reporter',
    date: '2026-06-14',
    readTime: 4,
    image: 'https://picsum.photos/seed/ev-battery/1200/600',
    thumbnail: 'https://picsum.photos/seed/ev-battery/600/380',
    featured: false,
    breaking: false,
    tags: ['Electric Vehicles', 'Battery', 'Stanford', 'Green Energy'],
    content: `
      <p>STANFORD, CA — Researchers at Stanford University's Materials Science Department have demonstrated a solid-state lithium-sulfur battery cell that achieves energy density of 500 watt-hours per kilogram — nearly double that of the best commercially available lithium-ion cells — and can be charged to 80% capacity in 12 minutes while retaining 95% of its capacity after 1,000 charge cycles.</p>

      <p>The results, published in the journal Nature Energy, represent a meaningful advance in solid-state battery research, which has long promised superior performance but struggled to achieve the durability and manufacturability needed for commercial viability. The Stanford team addressed the field's most persistent challenge — dendrite formation on the lithium anode that causes cells to degrade and, in extreme cases, short circuit — through a novel ceramic electrolyte architecture that mechanically blocks dendrite growth.</p>

      <p>If the cell chemistry can be manufactured at scale, it would address the two most common objections to electric vehicle adoption: range anxiety and charging time. A midsize sedan equipped with a battery pack using this chemistry would have a theoretical range of approximately 600 miles on a single charge, at a pack weight similar to current production vehicles. The 12-minute fast-charge capability would bring EV refueling times broadly in line with gasoline.</p>

      <p>The gap between laboratory demonstration and commercial production, however, is wide. Solid-state batteries have been demonstrated at small scale in laboratories for more than a decade, but scaling up manufacturing has proven extremely difficult. Several automotive manufacturers and battery companies are reviewing the Stanford data and declined to speculate publicly about commercialization timelines, though most industry observers estimate at least 5-8 years to volume production if the results prove reproducible.</p>
    `,
  },

  // ── SPORTS ───────────────────────────────
  {
    id: 's1',
    slug: 'champions-league-final',
    title: 'Champions League Final Draws Record 600 Million Global Viewers',
    subtitle: 'The match between Real Madrid and Manchester City set new benchmarks for live sports streaming alongside traditional broadcast',
    category: 'sports',
    author: 'Tom Brady Jr.',
    authorRole: 'Sports Correspondent',
    date: '2026-06-18',
    readTime: 4,
    image: 'https://picsum.photos/seed/champions-league/1200/600',
    thumbnail: 'https://picsum.photos/seed/champions-league/600/380',
    featured: false,
    breaking: false,
    tags: ['Champions League', 'Soccer', 'Real Madrid', 'Manchester City'],
    content: `
      <p>LONDON — Saturday's UEFA Champions League Final between Real Madrid and Manchester City drew a record 600 million global viewers across all platforms, UEFA confirmed on Monday, surpassing the previous record of 550 million set in 2019 and marking the first major live sports event to attract more viewers on streaming services than on traditional linear television.</p>

      <p>Real Madrid's 2-1 victory, decided by a stunning long-range strike from Jude Bellingham in the 89th minute, provided the drama that live sports require to sustain attention across fragmented media landscapes. UEFA's own streaming platform, UCL Live, carried the match in 47 countries and reported 180 million concurrent streams at the time of Bellingham's goal — a record for live sports streaming globally.</p>

      <p>The viewership milestone carries significant commercial implications. Broadcasting rights to the Champions League come up for renewal in 2028, and the streaming data will almost certainly strengthen UEFA's negotiating position with both traditional broadcasters and technology platforms that have been steadily acquiring sports rights. Amazon, Apple, and a consortium led by a major streaming platform have all indicated interest in bidding for European football's premium property.</p>

      <p>For Real Madrid, the victory marked their 17th Champions League title and extended their record as the competition's most successful club. Bellingham's goal completed a personal narrative arc — after a difficult start to the season that included a three-match suspension — that Spanish sports media spent the weekend celebrating with characteristic theatrical intensity.</p>
    `,
  },
  {
    id: 's2',
    slug: 'olympics-2028-details',
    title: 'Los Angeles Unveils Ambitious Plans for 2028 Olympic Games',
    subtitle: 'LA28 organizers promise the most financially transparent and athlete-centered Olympics in modern history',
    category: 'sports',
    author: 'Diana Chen',
    authorRole: 'Olympics Correspondent',
    date: '2026-06-16',
    readTime: 4,
    image: 'https://picsum.photos/seed/olympics/1200/600',
    thumbnail: 'https://picsum.photos/seed/olympics/600/380',
    featured: false,
    breaking: false,
    tags: ['Olympics', 'Los Angeles', 'LA28', 'Sports'],
    content: `
      <p>LOS ANGELES — LA28 organizers offered the most detailed public preview yet of the 2028 Summer Olympic Games on Tuesday, unveiling a plan that relies almost exclusively on existing venues, caps the organizing committee's operating budget at $6.9 billion, and commits to publishing real-time financial disclosures throughout the event — measures designed to restore public trust in a movement battered by cost overruns and corruption scandals.</p>

      <p>The games will use 30 existing venues across greater Los Angeles, including SoFi Stadium for the opening ceremony, the Rose Bowl for football, and the Staples Center, now rebranded as Crypto.com Arena, for boxing. No major new construction is planned, a deliberate choice that organizers say will leave no "white elephant" sports facilities burdening the city after the flame goes out.</p>

      <p>Surfing will make its third consecutive Olympic appearance, this time at Huntington Beach, and breaking — introduced controversially in Paris — will return at a venue along the downtown LA riverfront. The IOC has also confirmed the addition of baseball/softball, cricket, squash, and flag football for 2028, expanding the program to a record 36 sports and reflecting an effort to broaden the games' appeal with younger audiences in key television markets.</p>

      <p>Traffic and transportation remain the organizing committee's most daunting logistical challenge. LA County has committed to expanding express bus service and building a direct rail link from downtown to the airport by 2027, but critics note that the city's car-dependent geography makes truly car-free games implausible without the kind of road restrictions that would require unprecedented political will to enforce.</p>
    `,
  },
  {
    id: 's3',
    slug: 'wnba-record-season',
    title: 'WNBA Posts Record Attendance and Ratings, Driven by New Generation of Stars',
    subtitle: 'The league\'s 30th season is on pace to be its most-watched ever, with average attendance up 34% from last year',
    category: 'sports',
    author: 'Keisha Thompson',
    authorRole: 'Women\'s Sports Reporter',
    date: '2026-06-15',
    readTime: 4,
    image: 'https://picsum.photos/seed/wnba/1200/600',
    thumbnail: 'https://picsum.photos/seed/wnba/600/380',
    featured: false,
    breaking: false,
    tags: ['WNBA', 'Basketball', 'Women\'s Sports', 'Records'],
    content: `
      <p>NEW YORK — The WNBA is on pace for its most successful season in three decades of existence. Through the first six weeks of the 2026 schedule, average game attendance across the league's 14 teams has increased 34% compared to the same point last year, television ratings are up 41% on the league's primary broadcaster, and digital streaming viewership has more than doubled. The numbers are not a blip — they represent the culmination of years of grassroots investment and a generational transition to players who have built enormous social media followings that translate into ticket sales.</p>

      <p>The surge is driven in significant part by a cohort of second- and third-year players who entered the league as highly visible college stars and brought their fanbases with them. Several arenas have been upgraded or relocated to handle demand, and at least three franchises have announced expansion plans or facility investments that would have been financially inconceivable five years ago.</p>

      <p>Salary negotiations between the league and its players' union, which concluded last year, produced a new collective bargaining agreement that includes meaningful base salary increases, full charter flight travel for all games, and expanded parental leave provisions. Players and advocates credit the improved conditions with reducing the historically high rate at which WNBA players also play overseas in the off-season, allowing them to dedicate more time to marketing and sponsorship activities that build their American profiles.</p>

      <p>The league's growth has not gone unnoticed by venture capital. At least four private equity firms have made significant investments in WNBA franchises in the past 18 months, and a new franchise in the Pacific Northwest is expected to be announced before the current season ends, bringing the league to 15 teams. Expansion to 20 teams by 2030 is now discussed openly by league leadership as a realistic ambition rather than a distant aspiration.</p>
    `,
  },

  // ── ENTERTAINMENT ────────────────────────
  {
    id: 'e1',
    slug: 'streaming-wars-new-platform',
    title: 'Apple Launches Apple Cinema, Targeting the Prestige Film Market',
    subtitle: 'The new standalone streaming service will focus exclusively on theatrical-quality productions with budgets above $80 million',
    category: 'entertainment',
    author: 'Sophie Reeves',
    authorRole: 'Entertainment Correspondent',
    date: '2026-06-18',
    readTime: 4,
    image: 'https://picsum.photos/seed/apple-cinema/1200/600',
    thumbnail: 'https://picsum.photos/seed/apple-cinema/600/380',
    featured: false,
    breaking: false,
    tags: ['Apple', 'Streaming', 'Film', 'Entertainment', 'Tech'],
    content: `
      <p>NEW YORK — Apple on Tuesday unveiled Apple Cinema, a standalone streaming service that will focus exclusively on theatrical-quality feature films with production budgets of $80 million or more, betting that a market segment defined by prestige and scarcity can carve out durable space in a streaming landscape saturated with volume-driven competitors. The service will launch in September at $15.99 per month, or $24.99 bundled with Apple TV+.</p>

      <p>The announcement came with a slate of 12 films set for release in the service's first year, including projects directed by three Academy Award-winning filmmakers and one title acquired from the Cannes Film Festival for a reported $85 million — one of the largest acquisition deals in streaming history. Apple declined to confirm the acquisition price.</p>

      <p>Industry analysts are divided on whether the strategy can succeed. Streaming subscribers have proven resistant to paying for multiple services, and the prestige segment Apple is targeting is already vigorously contested by Netflix, HBO Max, and Amazon's MGM portfolio. Apple's differentiating bet is that a curated catalog of a dozen films per year — released simultaneously in theaters and on the service — will be perceived as qualitatively distinct from competitors' content and worth a premium subscription.</p>

      <p>The theatrical component is the service's most unconventional element. Apple has signed agreements with AMC, Regal, and a consortium of independent theater chains that will give Apple Cinema films a standard 45-day theatrical window before streaming release — a significant departure from the day-and-date or 17-day windows that defined the streaming era's early relationship with cinema chains. Theater stocks rose on the news.</p>
    `,
  },
  {
    id: 'e2',
    slug: 'awards-season-nominations',
    title: 'Awards Season Opens with Surprise: A24\'s Quiet Drama Tops Early Contenders',
    subtitle: 'Festival season has produced an unusually diverse set of frontrunners, with no single film dominating the conversation',
    category: 'entertainment',
    author: 'Jordan Ellis',
    authorRole: 'Film Critic',
    date: '2026-06-17',
    readTime: 5,
    image: 'https://picsum.photos/seed/awards-season/1200/600',
    thumbnail: 'https://picsum.photos/seed/awards-season/600/380',
    featured: false,
    breaking: false,
    tags: ['Film', 'Awards', 'A24', 'Hollywood', 'Oscars'],
    content: `
      <p>TORONTO — If the opening months of awards season are any guide, this year's race will be defined not by a single consensus frontrunner but by an unusually competitive field of smaller films making loud noise. At the top of early critical lists sits A24's "The Long Silence," a 112-minute film with no stars, a budget under $20 million, and a subject — a woman's reckoning with her mother's death — that Hollywood conventional wisdom would categorize as awards-adjacent but commercially marginal.</p>

      <p>The film has garnered comparisons to "Aftersun" and "Minari" — not in style, but in the way it has generated disproportionate awards conversation relative to its commercial profile. Its director, a 34-year-old Korean-American filmmaker making her second feature, received a standing ovation at both Sundance and Toronto and has since become the name most frequently cited in Best Director projections.</p>

      <p>The competitive field this year includes a World War I epic from a veteran British director, a documentary about a landmark civil rights case that has generated unusual crossover appeal, and a Portuguese-language international co-production that collected the Palme d'Or at Cannes. The diversity of genre, nationality, and studio affiliation is not accidental — it reflects the academy's expanded and internationalized voting membership, which has shifted the center of gravity away from traditional Hollywood prestige productions.</p>

      <p>Studio executives privately note the commercial challenge the competitive field creates: without a clear frontrunner driving sustained awards conversation, the advertising budgets that studios deploy to push films through the circuit risk being spread across too many contenders to achieve the narrative momentum that awards campaigns require. "Everyone has a real shot," said one distribution executive. "Which means no one has a clear shot."</p>
    `,
  },
  {
    id: 'e3',
    slug: 'independent-cinema-resurgence',
    title: 'Independent Cinema Is Having Its Best Year Since the 1990s',
    subtitle: 'Films made for under $10 million have captured 23% of the domestic box office so far this year — the highest share in three decades',
    category: 'entertainment',
    author: 'Marcus Bell',
    authorRole: 'Culture Reporter',
    date: '2026-06-14',
    readTime: 5,
    image: 'https://picsum.photos/seed/indie-film/1200/600',
    thumbnail: 'https://picsum.photos/seed/indie-film/600/380',
    featured: false,
    breaking: false,
    tags: ['Independent Film', 'Cinema', 'Box Office', 'Hollywood'],
    content: `
      <p>LOS ANGELES — Something unexpected is happening at the American multiplex: the movies people are actually talking about aren't the sequels, the superhero films, or the animated tentpoles. They're the smaller, stranger, cheaper films — and they're selling tickets. Through mid-June, films produced for under $10 million have captured 23% of the domestic box office, the highest share for independent and specialty cinema since 1994, when the Sundance boom first demonstrated that American audiences had an appetite for films that didn't begin with an IP.</p>

      <p>The shift has multiple explanations, none individually decisive. The superhero genre, which defined the previous decade's box office, has shown signs of audience fatigue as the interconnected universe model has grown so complex that casual viewers feel left behind. Meanwhile, a post-pandemic appreciation for collective viewing experiences — the feeling of watching something that genuinely surprises you in a room full of strangers — appears to favor films that reward attention rather than merely reward franchise familiarity.</p>

      <p>Social media has also inverted some of the traditional dynamics of theatrical distribution. A genuinely surprising, difficult-to-categorize film can build word-of-mouth through TikTok and Instagram in ways that would previously have required months of conventional advertising spending. Several of this year's breakout independent successes opened on fewer than 500 screens and gradually expanded as organic conversation drove demand — the reverse of the saturation-release model that the studio system has relied on since the Jaws era.</p>

      <p>Distributors and exhibitors are cautiously recalibrating their programming strategies in response. AMC and Regal have both announced expansions of their "specialty cinema" screens, and several major studios have quietly revived or expanded their specialty divisions after years of consolidation. Whether the moment represents a sustainable structural shift or a cycle that will reverse when the next irresistible franchise emerges is the question dividing the industry's most experienced observers.</p>
    `,
  },

];

// Featured articles (for hero section)
const FEATURED_ARTICLES = ARTICLES.filter(a => a.featured);

// Breaking news items (for ticker)
const BREAKING_NEWS = [
  'BREAKING: World leaders sign Geneva Climate Accord — net-zero targets by 2040',
  'Senate passes $1.2 trillion infrastructure bill 68-31 in rare bipartisan vote',
  'AI diagnostic system outperforms physicians in landmark Johns Hopkins cancer study',
  'Federal Reserve holds rates, signals one cut before year end',
  'WNBA posts record 34% attendance increase through first six weeks of season',
];

// Get articles by category
function getArticlesByCategory(category, limit = null) {
  const filtered = ARTICLES.filter(a => a.category === category);
  return limit ? filtered.slice(0, limit) : filtered;
}

// Get article by ID
function getArticleById(id) {
  return ARTICLES.find(a => a.id === id) || null;
}

// Get related articles (same category, different id)
function getRelatedArticles(article, limit = 3) {
  return ARTICLES
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, limit);
}

// Search articles
function searchArticles(query) {
  if (!query || query.trim().length < 2) return [];
  const q = query.toLowerCase().trim();
  return ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.subtitle.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    (a.tags && a.tags.some(t => t.toLowerCase().includes(q)))
  ).slice(0, 6);
}

// All categories
const CATEGORIES = [
  { id: 'world',         label: 'World',         color: '#1D4ED8' },
  { id: 'politics',      label: 'Politics',      color: '#DC2626' },
  { id: 'business',      label: 'Business',      color: '#16A34A' },
  { id: 'tech',          label: 'Tech',          color: '#7C3AED' },
  { id: 'sports',        label: 'Sports',        color: '#EA580C' },
  { id: 'entertainment', label: 'Entertainment', color: '#DB2777' },
];
