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
        <p><strong>Draft (203 words):</strong></p>
        <p>
          PSL Foundation's mission is to advance accessible and reproducible computing in the analysis of
          public policy. We steward three major open-source initiatives: the Policy Simulation Library,
          QuantEcon, and PolicyEngine.
        </p>
        <p>
          PolicyEngine, our flagship project, builds AI-powered tools providing to-the-dollar benefit
          calculations and tax policy analysis. Our API calculates eligibility and amounts for dozens of
          programs: individual tax credits federally and in all states (validated against NBER's TAXSIM
          tool via MOU to eventually replace it, and against Atlanta Fed's Policy Rules Database), plus
          SNAP, Medicaid, CHIP, ACA subsidies, WIC, and SSI nationwide, with cash welfare, childcare subsidies,
          energy assistance, housing vouchers, healthcare subsidies, and other state programs in deployed
          jurisdictions.
        </p>
        <p>
          This infrastructure powers partner organizations—MyFriendBen, Benefit Navigator, Mirza, Student
          Basic Needs Coalition—serving over 100,000 Americans in the past year. Major foundations (Gates,
          Pritzker, Hilton) support this ecosystem. Recent Massachusetts and Illinois launches, with upcoming
          Texas, NYC, and DC deployments, expand reach in 2026.
        </p>
        <p>
          All development happens openly on GitHub. NSF, Arnold Ventures, and NEO Philanthropy provide our
          core institutional support.
        </p>
        <p>
          PSL Foundation takes no policy positions—we build neutral tools serving policymakers and service
          providers across all perspectives. AI powers both our development (coding agents for policy research
          and implementation) and our public tools (demystifying complex safety net policies).
        </p>
      </div>

      <h3>Question 2: Community Need and Use of Funding (Max 300 words)</h3>
      <p>
        <em>What is the urgent community need that your organization seeks to address?
        How are you meeting that need? How will this new funding be used to support your work?</em>
      </p>
      <div style={{ backgroundColor: 'rgba(100, 108, 255, 0.05)', padding: '1rem', borderRadius: '4px', marginTop: '0.5rem' }}>
        <p><strong>Draft (268 words):</strong></p>
        <p>
          Millions of Americans leave benefits unclaimed because safety net policies are bewilderingly complex.
          A parent might not realize they qualify for SNAP, or a student might miss healthcare subsidies—not
          because programs don't exist, but because eligibility requires navigating overlapping federal, state,
          and local rules that even caseworkers struggle to apply consistently.
        </p>
        <p>
          PolicyEngine addresses this through AI-powered APIs providing to-the-dollar calculations across dozens
          of programs: tax credits federally and in all states (validated against NBER's TAXSIM and Atlanta Fed's
          Policy Rules Database), plus SNAP, Medicaid, healthcare subsidies, nutrition assistance, and disability
          benefits nationwide, with cash welfare, childcare subsidies, energy assistance, and housing vouchers in
          deployed states. When someone uses MyFriendBen, Benefit Navigator, or Student Basic Needs Coalition,
          PolicyEngine's calculations—integrated directly into their workflows—help discover economic supports
          they're entitled to.
        </p>
        <p>
          This especially matters for benefit cliffs: when earning more triggers benefit losses exceeding wage
          gains. PolicyEngine helps families model how career advancement affects their total economic picture,
          enabling informed decisions about education, employment, and upward mobility.
        </p>
        <p>
          Our reach demonstrates urgent demand: 100,000+ Americans served in the past year, with new Massachusetts
          and Illinois deployments and upcoming launches in Texas, NYC, and DC. All development happens openly on
          GitHub, backed by NSF, Arnold Ventures, and NEO Philanthropy.
        </p>
        <p>
          Unrestricted funding supports critical operational needs: expanding engineering to scale API infrastructure
          for growing demand, enhancing AI capabilities to better explain policy mechanics, maintaining calculation
          accuracy as rules change, and supporting partner success to ensure effective deployment.
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
        <p><strong>Draft (234 words):</strong></p>
        <p>
          In the past 12 months, PolicyEngine's API calculations reached over 100,000 Americans through partner
          organizations including MyFriendBen, Benefit Navigator, Mirza, and Student Basic Needs Coalition across
          Colorado, California, North Carolina, and expanding jurisdictions. Major foundations (Gates, Pritzker,
          Hilton) support this ecosystem.
        </p>
        <p>
          Our comprehensive coverage distinguishes us: we calculate individual tax programs including credits
          federally and in all 50 states, validated against NBER's TAXSIM (with MOU to replace it) and Atlanta
          Fed's Policy Rules Database. We cover SNAP, Medicaid, healthcare subsidies, nutrition assistance, and
          disability benefits nationwide, plus cash welfare, childcare subsidies, energy assistance, housing
          vouchers, and state supplements in deployed jurisdictions. Partners can screen clients for dozens of
          programs simultaneously with to-the-dollar accuracy.
        </p>
        <p>
          Beyond individual assistance, PolicyEngine serves policy analysis. When Colorado policymakers considered
          benefit cliff reforms, our microsimulation modeled impacts across income levels—enabling stakeholders
          across the political spectrum to understand trade-offs. This neutral infrastructure serves democratic
          deliberation.
        </p>
        <p>
          2025 brought Massachusetts and Illinois launches, with Texas, NYC, and DC deployments pending for early
          2026. Our 100% open-source development on GitHub, backed by NSF, Arnold Ventures, and NEO Philanthropy,
          ensures transparency and reproducibility.
        </p>
        <p>
          Technical advances enabled this scale: we enhanced our AI-powered policy explanations (
          <a href="https://policyengine.org/us/ai" target="_blank" rel="noopener noreferrer">
            policyengine.org/us/ai
          </a>) helping users understand not just what benefits they qualify for, but why. Natural language
          explanations transform opaque eligibility rules into accessible guidance, supporting both benefit access
          and civic understanding.
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
        <p><strong>Draft (234 words):</strong></p>
        <p>
          AI is fundamental to how PSL Foundation—through PolicyEngine—advances accessible policy understanding.
          We're actively deploying AI in two complementary ways:
        </p>
        <p>
          <strong>Development Process:</strong> Our entire engineering team uses AI coding agents daily. When
          California updates SNAP rules, we use AI to research policy changes, generate test cases, translate
          legislative language into Python code, and improve our API architecture. This accelerates keeping pace
          with constantly changing benefit rules across 50 states plus federal programs.
        </p>
        <p>
          <strong>Data Infrastructure:</strong> We use machine learning to build representative household datasets
          for each state and congressional district, integrating and calibrating dozens of disparate data sources.
          These datasets enable policy simulation and local-area benefit eligibility estimation with unprecedented
          precision—helping communities understand how many residents may be eligible for and claiming benefits in
          their area.
        </p>
        <p>
          <strong>Public Tools:</strong> We've deployed AI-powered calculation explanations (
          <a href="https://policyengine.org/us/ai" target="_blank" rel="noopener noreferrer">
            policyengine.org/us/ai
          </a>) that make results transparent. When PolicyEngine calculates someone's SNAP benefit at $322/month,
          AI explains the steps: maximum allotment, deductions for shelter/earnings/childcare, expected contribution.
          This works flexibly across all programs without hardcoding.
        </p>
        <p>
          Our vision extends this: refining ML datasets to county and city levels for hyper-local benefit access
          targeting, enabling natural language policy questions, conducting research on claiming patterns. AI could
          help caseworkers understand unfamiliar program interactions and identify eligible individuals.
        </p>
        <p>
          The challenge is maintaining accuracy alongside accessibility—AI explanations must match our microsimulation
          engine's verified calculations. This unrestricted support would accelerate our AI capabilities while
          preserving the transparency and accuracy that vulnerable communities deserve.
        </p>
      </div>
    </div>
  )
}

export default Application
