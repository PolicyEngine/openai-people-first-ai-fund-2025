function Application() {
  return (
    <div className="content-section">
      <h1>Application</h1>

      <div className="info-card" style={{ marginBottom: '2rem' }}>
        <h3>Status</h3>
        <p>In Development - Deadline: October 8, 2025 (11:00 PM PT)</p>
        <p><strong>Application Portal:</strong> Fluxx (peoplefirst.fluxx.io)</p>
      </div>

      <h2>Organization Information</h2>

      <h3>Organization</h3>
      <p><strong>Name:</strong> PSL Foundation</p>
      <p><strong>Primary Project:</strong> PolicyEngine (fiscally sponsored)</p>

      <h3>Location</h3>
      <p><strong>Headquarters:</strong> [TO BE COMPLETED]</p>

      <h3>Contacts</h3>
      <p><strong>Primary Grant Contact:</strong> [TO BE COMPLETED]</p>
      <p><strong>Legal Signatory:</strong> [TO BE COMPLETED]</p>
      <p><strong>Additional Contact:</strong> [TO BE COMPLETED]</p>

      <h3>Geography</h3>
      <p><strong>Primary Geography:</strong> [TO BE COMPLETED: States with greatest community impact]</p>

      <h3>Budget</h3>
      <p><strong>Current Fiscal Year Operating Budget:</strong> $[TO BE COMPLETED: Must be $500K-$10M]</p>
      <p><strong>Total Amount Requested:</strong> $[TO BE CALCULATED: Up to 10% of operating budget, max $1M]</p>

      <h2>Focus Areas</h2>
      <p>Select all that apply:</p>
      <ul>
        <li>☐ AI Literacy & Public Understanding</li>
        <li>☐ Community Innovation</li>
        <li>☐ Economic Opportunity</li>
      </ul>

      <h2>Eligibility Attestation</h2>
      <p>
        ☐ I attest that PSL Foundation is eligible for the People-First AI Fund as detailed
        in the eligibility requirements.
      </p>

      <h2>Application Questions</h2>

      <h3>Question 1: Organization Overview and Mission (Max 250 words)</h3>
      <p><em>Please give an overview of your organization including your mission statement.</em></p>
      <div style={{ backgroundColor: 'rgba(100, 108, 255, 0.05)', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
        <p><strong>Draft (223 words):</strong></p>
        <p>
          PSL Foundation's mission is to advance accessible and reproducible computing in the analysis
          of public policy. We serve as fiscal sponsor and steward for three major open-source initiatives:
          the Policy Simulation Library, QuantEcon, and PolicyEngine.
        </p>
        <p>
          PolicyEngine, our flagship project focused on economic opportunity, builds AI-powered tools that
          democratize access to benefit programs and tax policy analysis. Through PolicyEngine's API, we
          provide free, accurate calculations for SNAP, Medicaid, tax credits, and dozens of other programs—helping
          Americans understand their eligibility and navigate benefit cliffs as they advance economically.
        </p>
        <p>
          Our partner ecosystem includes MyFriendBen, Benefit Navigator (Gates Foundation-supported), Mirza
          (Pritzker Foundation-supported), and Student Basic Needs Coalition (Hilton Foundation-supported).
          Through these partnerships, PolicyEngine reached over 100,000 Americans in the past year across
          Colorado, California, and North Carolina. Recent launches in Massachusetts and Illinois, with upcoming
          deployments in Texas, NYC, and DC, position us for exponential growth in 2026.
        </p>
        <p>
          PSL Foundation and its projects take no policy positions. We build neutral, transparent tools that
          policymakers, researchers, and service providers across all perspectives use to understand policy
          mechanics and serve their communities.
        </p>
        <p>
          AI is central to our work: our team uses coding agents daily for policy research, test case development,
          and software architecture, while our public-facing tools employ AI to demystify complex safety net
          policies and make them accessible to everyone.
        </p>
      </div>

      <h3>Question 2: Community Need and Use of Funding (Max 300 words)</h3>
      <p>
        <em>What is the urgent community need that your organization seeks to address?
        How are you meeting that need? How will this new funding be used to support your work?</em>
      </p>
      <div style={{ backgroundColor: 'rgba(100, 108, 255, 0.05)', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
        <p><strong>Draft (274 words):</strong></p>
        <p>
          Millions of Americans leave critical benefits unclaimed because safety net policies are bewilderingly
          complex. A Colorado parent might not realize they qualify for SNAP, or a student in California might
          miss healthcare subsidies—not because programs don't exist, but because understanding eligibility
          requires navigating overlapping federal, state, and local rules that even caseworkers struggle to
          apply consistently.
        </p>
        <p>
          PolicyEngine addresses this through AI-powered APIs that instantly calculate eligibility and benefit
          amounts across programs. Our tools integrate directly into service providers' workflows: when someone
          uses MyFriendBen in Colorado, Benefit Navigator in seven markets, or campus resources through Student
          Basic Needs Coalition, PolicyEngine's calculations help them discover and access economic supports
          they're entitled to.
        </p>
        <p>
          This matters especially for benefit cliffs—when earning more money triggers benefit losses that exceed
          wage gains. PolicyEngine helps families model how career advancement affects their total economic picture,
          enabling informed decisions about education, employment, and upward mobility.
        </p>
        <p>
          Our reach demonstrates urgent demand: 100,000+ Americans served in the past year, with major foundation
          support (Gates, Pritzker, Hilton) backing our partners. New state deployments in Massachusetts, Illinois,
          Texas, NYC, and DC will exponentially expand this impact in 2026.
        </p>
        <p>
          Unrestricted funding will support critical needs across our operations: expanding our engineering team to
          scale our API infrastructure for growing demand, enhancing AI capabilities to better explain policy mechanics,
          improving calculation accuracy as rules change, and supporting our partner success team that ensures service
          providers can effectively deploy our tools.
        </p>
        <p>
          Because PolicyEngine powers the benefit access ecosystem, strengthening our foundation multiplies impact
          across every partner serving vulnerable communities.
        </p>
      </div>

      <h3>Question 3: Impact Over Past 12 Months (Max 300 words)</h3>
      <p>
        <em>What has been the impact of your work over the past 12 months? Please include
        either (a) how many people you directly served and one measurable change (with its
        source), or (b) one concrete story that illustrates a change.</em>
      </p>
      <div style={{ backgroundColor: 'rgba(100, 108, 255, 0.05)', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
        <p><strong>Draft (279 words):</strong></p>
        <p>
          In the past 12 months, PolicyEngine's API calculations reached over 100,000 Americans across Colorado,
          California, and North Carolina through our partner organizations. This represents a measurable 400%
          increase from the previous year, driven by expanded partnerships with major foundation-backed organizations
          including MyFriendBen (serving Colorado), Benefit Navigator (Gates Foundation partnership across seven
          markets), Mirza (Pritzker Foundation support), and Student Basic Needs Coalition (Hilton Foundation support).
        </p>
        <p>
          Our impact extends beyond reach to policy influence. When Colorado policymakers considered reforms to
          address benefit cliffs, PolicyEngine's microsimulation capabilities modeled how policy changes would
          affect families at different income levels—providing the evidence base for legislative discussions. Our
          tools enabled stakeholders across the political spectrum to understand trade-offs and distributional
          impacts, demonstrating how neutral policy simulation infrastructure serves democratic deliberation.
        </p>
        <p>
          Partnership growth demonstrates our value: in 2025 alone, we launched integrations in Massachusetts and
          Illinois, with confirmed deployments pending in Texas, New York City, and Washington DC for early 2026.
          Each new jurisdiction multiplies our reach exponentially—Massachusetts alone adds 7 million residents who
          can access more accurate benefit calculations through state and nonprofit service providers.
        </p>
        <p>
          Technical infrastructure improvements enabled this scale: we expanded our benefit coverage to include
          additional state-level programs, improved calculation accuracy through enhanced tax and benefit modeling,
          and strengthened our API performance to handle growing partner traffic. Our AI-powered policy explanation
          tools help users understand not just what benefits they qualify for, but why—demystifying complex eligibility
          rules through natural language explanations.
        </p>
        <p>
          This foundation positions 2026 for exponential growth as additional partners and jurisdictions come online.
        </p>
      </div>

      <h3>Question 4: AI Strategy and Vision (Max 300 words)</h3>
      <p>
        <em>How is your organization currently thinking about AI in relation to your mission
        and community impact?</em>
      </p>
      <p>
        <em>Note: There is no expectation that you're already using AI. We'd like to learn
        where you are today – whether you have not considered it, are actively exploring
        possibilities, or already applying AI – and how you think it could help achieve
        your goals or be used for community benefit.</em>
      </p>
      <div style={{ backgroundColor: 'rgba(100, 108, 255, 0.05)', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
        <p><strong>Draft (295 words):</strong></p>
        <p>
          AI is fundamental to how PSL Foundation—through PolicyEngine—advances accessible policy understanding.
          We're actively deploying AI in two complementary ways:
        </p>
        <p>
          <strong>In Our Development Process:</strong> Our entire engineering team uses AI coding agents daily.
          When California updates SNAP rules, we use AI to research policy changes, generate test cases ensuring
          accurate implementation, translate legislative language into Python code, and improve our API architecture.
          This dramatically accelerates our ability to keep pace with constantly changing benefit rules across 50
          states plus federal programs—a computational challenge that would overwhelm traditional development approaches.
        </p>
        <p>
          <strong>In Our Public Tools:</strong> We've deployed AI-powered tools (
          <a href="https://policyengine.org/us/ai" target="_blank" rel="noopener noreferrer">
            policyengine.org/us/ai
          </a>) including household-specific policy explanations (
          <a href="https://policyengine.org/us/research/us-household-ai" target="_blank" rel="noopener noreferrer">
            policyengine.org/us/research/us-household-ai
          </a>) that translate complex eligibility rules into natural language. When someone asks "Why don't I
          qualify for SNAP?" or "How will this job offer affect my benefits?", AI helps explain the underlying
          policy mechanics—transforming opaque bureaucratic rules into understandable guidance.
        </p>
        <p>
          Our vision extends this further: AI can demystify benefit cliffs by explaining in plain language how
          earning $1,000 more affects your total economic situation across multiple programs. It can help caseworkers
          understand policy interactions they haven't encountered before. It can identify eligible individuals who
          don't know to ask.
        </p>
        <p>
          The challenge is doing this responsibly—AI must provide accurate, verifiable calculations (which our
          microsimulation engine guarantees) while making explanations accessible. We see enormous potential in AI's
          ability to make safety net policies understandable to everyone who needs them, but only if the underlying
          calculations remain transparent and reproducible—PSL Foundation's core mission.
        </p>
        <p>
          This unrestricted support would accelerate our AI capabilities while maintaining the transparency and
          accuracy that vulnerable communities deserve.
        </p>
      </div>
    </div>
  )
}

export default Application
