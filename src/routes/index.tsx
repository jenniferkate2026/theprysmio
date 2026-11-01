import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Carrot,
  Check,
  ChevronRight,
  CircleDashed,
  Dna,
  Eye,
  Fingerprint,
  Gift,
  Menu,
  Plus,
  Power,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react'
import { useEffect, useState, type FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: PrysmPage,
})

const prysmBuyUrl = 'https://www.nuskin.com/us/en/mysite/jenniferkate/product/prysm-io-consumer-edition'
const prysmBundleUrl = 'https://www.nuskin.com/us/en/mysite/jenniferkate/product/prysm-io-healthy-habits-bundle-US'
const storefrontUrl = 'https://jenniferkate.nuskin.com'
const guaranteeUrl = 'https://www.nuskin.com/us/en/site/prysm-certified-guarantee'
const opportunityUrl = 'https://www.nuskin.com/us/en/site/opportunity/nu-skin-sales-performance-plan'
const affiliateSignupUrl = 'https://nskn.co/xzpvAX'
const bookScanUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSe-xUFjOKO27LdsW2Egxo-SeSnI5mzePgnKFmiqM8r1mfX_TA/viewform'
const kidsSupplementsUrl = 'https://www.nuskin.com/us/en/mysite/jenniferkate/product/pharmanex-jungamals-scs'
const grandsonScanReelUrl = 'https://www.instagram.com/reel/DWj7yNFjqtW/?obrf=dnp4dnpldzc3M243'
const phoneDisplay = '864-710-7673'
const phoneHref = 'tel:8647107673'
const email = 'jen@thejenniferkate.com'

const navItems = [
  ['What it does', '#what-it-does'],
  ['How it works', '#how-it-works'],
  ['Families', '#family-wellness'],
  ['Science', '#science'],
  ['Supplements', '#supplements'],
  ['Shop', '#get-yours'],
  ['Book a scan', '#book'],
  ['Business', '#business-opportunity'],
]

const benefits = [
  {
    number: '01',
    title: 'Track real progress',
    summary: 'See how your score changes over time.',
    detail: 'Connect nutrition, supplements, and daily choices to a number you can actually follow.',
  },
  {
    number: '02',
    title: 'No blood tests',
    summary: 'Painless, instant results in 15 seconds.',
    detail: 'Place your index finger on the lens and get a clear antioxidant score without a lab visit.',
  },
  {
    number: '03',
    title: 'AI-powered science',
    summary: '700,000+ measurements per scan.',
    detail: 'Spectral Rai™ technology analyzes hyperspectral absorption data with AI calibration.',
  },
  {
    number: '04',
    title: 'Scan anywhere',
    summary: 'Portable device, instant insights.',
    detail: 'A compact device and companion app make consistent tracking easy at home or on the road.',
  },
  {
    number: '05',
    title: 'Family friendly',
    summary: 'Scan the whole household and compare.',
    detail: 'A legal guardian adds family members inside the app, so everyone can follow their own score.',
  },
  {
    number: '06',
    title: 'See your habits',
    summary: 'Watch how food and supplements show up in your score.',
    detail: 'Your score reflects your habits over the last several weeks, so you can see what is working.',
  },
]

const scanSteps = [
  { number: '01', title: 'Power on', detail: 'Press the power button to turn on the device.', Icon: Power },
  { number: '02', title: 'Place finger', detail: 'Place the pad of your index finger over the lens. The scan begins automatically.', note: '↳ Do not remove your finger during the scan.', Icon: Fingerprint },
  { number: '03', title: 'Lights circle', detail: 'LEDs circle for 15 seconds while 700,000+ measurements are taken. A single flashing light reveals your score color zone.', Icon: CircleDashed },
  { number: '04', title: 'Read your score', detail: 'After 10 seconds, the indicators turn off. Download the app for deeper insights, trends, and personalized recommendations.', Icon: Smartphone },
]

const bestPractices = [
  'Place device on a flat, level surface',
  'Finger must be clean and dry',
  'Clean the lens regularly with a soft cloth',
  'Center the pad of your finger on the lens',
  'Finger must fully cover the lens',
  'Avoid moving during the 15-second scan',
]

const scoreRanges = [
  ['Lowest', 'under 200', 12],
  ['Lower', '200–299', 16],
  ['Moderate', '300–399', 19],
  ['Moderate to High', '400–549', 25],
  ['Higher', '550–749', 19],
  ['Highest', '750–1200', 9],
] as const

const supplements = [
  ['LifePak®', 'Pharmanex®', 'FOUNDATION', 'Essential vitamins, minerals, and phytonutrients — the foundation of your supplement stack.'],
  ['Collagen+', 'Beauty Focus®', 'SKIN', 'Supports skin hydration and elasticity. Targeted collagen support for skin, hair, nails and joints.'],
  ['Youth', 'ageLOC®', 'AGING', 'Supports youthful aging with metabolic support and long-term wellness resilience.'],
  ['Mind Full', 'MYND360™', 'COGNITION', 'Brain health and memory support. Longevity-focused cellular health and mental clarity.'],
  ['G3', 'Pharmanex®', 'ANTIOXIDANT', 'Antioxidant-rich superfruit blend. Potent defense against free radical damage.'],
  ['Eye Formula', 'Pharmanex®', 'VISION', 'Targeted carotenoid support for eye health and visual acuity.'],
]

const accessories = [
  ['Prysm iO Consumer Case', '$26'],
  ['Prysm iO BR Stand + BR Case', '$50'],
  ['Calibration Disc + Cleaning Cloth', '$5'],
]

const faqs: Array<[string, React.ReactNode]> = [
  ['Does it hurt?', 'No. Just place your fingertip on the lens for 15 seconds.'],
  ['Is this a medical test?', 'No. It’s a wellness education tool, not a diagnosis.'],
  ['How do I raise my score?', 'Eat more colorful fruits and veggies, sleep well, move your body, and take Prysm Certified supplements.'],
  ['How often should I rescan?', 'Every 30–60 days to see your trend.'],
  ['Can I get scanned for free?', <>Yes. <a href="#book">Book a free scan with me.</a></>],
  ['Do I need to buy anything?', 'No purchase is required for a scan.'],
]

function PrysmPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeBenefit, setActiveBenefit] = useState(0)
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const scrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormState('sending')
    const form = event.currentTarget
    const encodedData = new URLSearchParams()
    for (const [key, value] of new FormData(form).entries()) {
      encodedData.append(key, String(value))
    }
    try {
      const response = await fetch('/contact-form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData.toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      form.reset()
      setFormState('sent')
    } catch {
      setFormState('error')
    }
  }

  return (
    <main>
      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('#top')} aria-label="Back to top">
          <strong>PRYSM iO</strong>
          <span>BY JENNIFER KATE</span>
        </button>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <button key={href} onClick={() => scrollTo(href)}>{label}</button>
          ))}
        </nav>
        <button className="header-cta" onClick={() => scrollTo('#contact')}>Get started <ArrowRight size={14} /></button>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(([label, href]) => (
            <button key={href} onClick={() => scrollTo(href)}>{label}<ChevronRight size={18} /></button>
          ))}
          <button onClick={() => scrollTo('#contact')}>Talk to Jennifer<ArrowRight size={18} /></button>
        </div>
      )}

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy reveal">
          <div className="eyebrow"><span /> SPECTRAL RAI TECHNOLOGY</div>
          <h1 className="hero-title">KNOW YOUR BODY.<br /><em>PROOF, NOT PROMISES.</em></h1>
          <p className="hero-lead">Prysm iO™ measures your skin carotenoid levels in just 15 seconds — giving you a real-time antioxidant score backed by 20+ years of science.</p>
          <p className="hero-note">Your wellness partner. Jennifer Kate — Truly Intelligent Wellness.</p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => scrollTo('#family-wellness')}>For moms & families <ArrowRight size={14} /></button>
            <button className="button-secondary" onClick={() => scrollTo('#business-opportunity')}>For wellness professionals <ArrowRight size={14} /></button>
            <button className="button-secondary" onClick={() => scrollTo('#get-yours')}>Get yours today <ArrowRight size={14} /></button>
          </div>
        </div>

        <div className="prism-stage" aria-label="A glowing prismatic wellness scanner">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="scan-ring"><span /></div>
          <div className="prism-shell">
            <div className="prism-face face-a" />
            <div className="prism-face face-b" />
            <div className="prism-face face-c" />
          </div>
          <span className="stage-label label-one">SPECTRAL_RAI</span>
          <span className="stage-label label-two">AI_CALIBRATED</span>
          <span className="stage-label label-three">15_SEC_SCAN</span>
        </div>

        <div className="hero-stats">
          <div><strong>15</strong><span>SEC / SCAN TIME</span></div>
          <div><strong>20+</strong><span>YRS / RESEARCH</span></div>
          <div><strong>43%</strong><span>AVG / SCORE INCREASE</span></div>
        </div>
      </section>

      <section className="section family-section" id="family-wellness">
        <SectionIntro kicker="WELLNESS FOR THE WHOLE FAMILY" title={<>MAKE WELLNESS<br /><em>A FAMILY HABIT.</em></>}>
          Simple routines practiced together can make colorful foods, movement, and everyday wellness feel more natural and fun for kids.
        </SectionIntro>
        <div className="family-guide">
          <div><span className="micro-label">MOMS, START HERE</span><p>Start here: watch my grandson scan, see how families can make wellness fun, then get your own PRYSM iO. The app and family setup are handled on your phone.</p></div>
          <div className="family-guide-actions">
            <a href={grandsonScanReelUrl} target="_blank" rel="noopener noreferrer">1. Watch my grandson scan <ArrowRight size={14} /></a>
            <a href={prysmBuyUrl} target="_blank" rel="noopener noreferrer">2. Buy your own PRYSM iO <ArrowRight size={14} /></a>
            <a href="/downloads/prysm-family-score-tracker.svg" download>3. Get the free family tracker <ArrowDown size={14} /></a>
          </div>
        </div>
        <div className="family-habits">
          <article><span>01 / MAKE IT EVERYDAY</span><h3>Start with simple choices</h3><p>Let kids help choose colorful fruits and vegetables, move together, and celebrate the small choices your family repeats.</p></article>
          <article><span>02 / MAKE IT FUN</span><h3>Celebrate the effort</h3><p>Use a family goal and score tracker to spark curiosity. Celebrate showing up and trying, rather than focusing on a particular number.</p></article>
          <article><span>03 / MAKE IT YOURS</span><h3>Keep it age-appropriate</h3><p>Use your own device and the app on your phone. A legal guardian adds family members and gives permission inside the app.</p></article>
        </div>
        <div className="family-links">
          <a className="family-feature" href={grandsonScanReelUrl} target="_blank" rel="noopener noreferrer">
            <span className="micro-label">A LITTLE FAMILY MOMENT</span>
            <strong>Watch my grandson try his PRYSM scan</strong>
            <span>See his excitement with the quick fingertip scan.</span>
            <span className="family-link-action">WATCH THE REEL <ArrowRight size={15} /></span>
          </a>
          <a className="family-feature family-product" href={kidsSupplementsUrl} target="_blank" rel="noopener noreferrer">
            <span className="micro-label">KIDS’ NUTRITION</span>
            <strong>Explore Pharmanex® Kids Jungamals®</strong>
            <span>See the children’s multivitamin on my Nu Skin site.</span>
            <span className="family-link-action">VIEW KIDS’ VITAMINS <ArrowRight size={15} /></span>
          </a>
        </div>
        <div className="family-tools">
          <div>
            <span className="micro-label">FREE PRINTABLES</span>
            <h3>Make healthy habits fun to track.</h3>
            <p>Download and edit these family tools before printing. Use them to record scores, practice a simple goal, and celebrate effort.</p>
            <div className="family-downloads">
              <a className="button-primary" href="/downloads/prysm-family-score-tracker.svg" download>Download editable score tracker <ArrowDown size={14} /></a>
              <a className="button-secondary" href="/downloads/prysm-family-goal-chart.svg" download>Download editable goal chart <ArrowDown size={14} /></a>
            </div>
          </div>
          <aside className="family-note">
            <strong>Keep it positive.</strong>
            <p>PRYSM iO scores are a wellness tracking tool, not a medical diagnosis. Ask your child’s healthcare professional about nutrition and supplements for your child.</p>
          </aside>
        </div>
        <p className="family-disclosure">I’m an independent Nu Skin Brand Affiliate. I may earn from purchases made through my Nu Skin link.</p>
      </section>

      <section className="section business-section" id="business-opportunity">
        <SectionIntro kicker="FOR WELLNESS PROFESSIONALS" title={<>GROW YOUR<br /><em>WELLNESS BUSINESS.</em></>}>
          Medspa owners, health coaches, and gym owners: explore adding PRYSM iO and wellness products to the services and routines you already offer.
        </SectionIntro>
        <div className="business-path">
          <div><span className="micro-label">A BUSINESS PATH TO EXPLORE</span><h3>Build around tools you believe in.</h3><p>Learn how I use the PRYSM iO device and Nu Skin products, what brand affiliate participation involves, and whether it fits your business. I’ll share what I know so you can decide if it’s right for you.</p></div>
          <div className="business-path-actions">
            <span>01 / See how the device can support wellness conversations</span>
            <span>02 / Explore products and customer subscriptions</span>
            <span>03 / Ask about the independent affiliate opportunity</span>
            <button className="button-primary" onClick={() => scrollTo('#contact')}>Ask about the business path <ArrowRight size={14} /></button>
          </div>
        </div>

        <div className="business-steps-head">
          <span className="micro-label">START YOUR PRYSM iO BUSINESS</span>
          <h3>Love your score? Share it with others.</h3>
          <p>Here’s how to start scanning with me.</p>
        </div>
        <div className="business-steps">
          <article>
            <span>01</span>
            <h4>Talk to me first.</h4>
            <p>Ask questions and see if it fits your life.</p>
            <button className="text-link" onClick={() => scrollTo('#contact')}>Talk to Jennifer <ArrowRight size={13} /></button>
          </article>
          <article>
            <span>02</span>
            <h4>Join as a Nu Skin Brand Affiliate under my team.</h4>
            <p className="sponsor-id">Sponsor: REMIKATE COLLECTIVE LLC<br />Sponsor ID: US02592629</p>
            <a className="text-link" href={affiliateSignupUrl} target="_blank" rel="noopener noreferrer">Get my signup link <ArrowRight size={13} /></a>
          </article>
          <article>
            <span>03</span>
            <h4>Get your Prysm <span className="io">iO</span>.</h4>
            <p>Every Prysm iO purchase comes with free gifts: a Supplement Discovery Sample Box (Nu Biome, Collagen+, M-Smart, Colostrum Defense, LifePak Nano, and G3 samples) plus a printed Prysm iO catalog.</p>
          </article>
          <article>
            <span>04</span>
            <h4>Get Prysm <span className="io">iO</span> certified.</h4>
            <p>Complete Nu Skin’s certification training.</p>
          </article>
          <article>
            <span>05</span>
            <h4>Start scanning.</h4>
            <p>Friends, family, gyms, spas, and events.</p>
          </article>
        </div>
        <div className="addons-line">
          <strong>Helpful add-ons:</strong> {accessories.map(([name, price]) => `${name} (${price})`).join(' · ')}
          <button className="text-link" onClick={() => scrollTo('#get-yours')}>See accessories in the shop <ArrowRight size={13} /></button>
        </div>
        <p className="family-disclosure">I’m an independent Nu Skin Brand Affiliate. Business participation is optional. Income is not guaranteed; results depend on your own effort and other factors. <a href={opportunityUrl} target="_blank" rel="noopener noreferrer">See Nu Skin’s official opportunity details.</a></p>
      </section>

      <section className="section" id="what-it-does">
        <SectionIntro kicker="WHAT IT DOES" title={<>KNOW IF YOUR<br /><em>ROUTINE IS WORKING.</em></>}>
          You deserve to know — not just hope. Prysm iO™ measures carotenoid nutrient levels in your skin, a trusted biomarker correlated with healthy aging.
        </SectionIntro>

        <div className="signal-flow">
          {[
            ['INPUT_', 'Your finger', 'Place the pad of your index finger on the lens. Clean, dry, 15 seconds.'],
            ['PROCESS_', 'Spectral Rai™', '700,000+ hyperspectral absorption measurements analyzed by AI referencing Raman technology.'],
            ['OUTPUT_', 'Your Prysm Score', 'A real-time antioxidant score correlated with healthy aging — no blood test, no discomfort.'],
          ].map(([tag, title, copy], index) => (
            <article key={tag}>
              <span>{tag}</span><h3>{title}</h3><p>{copy}</p>
              {index < 2 && <ChevronRight className="flow-arrow" />}
            </article>
          ))}
        </div>

        <div className="carotenoid-panel">
          <div>
            <span className="micro-label">UNDERSTANDING_CAROTENOIDS</span>
            <h3>THE ANTIOXIDANT<br />YOUR BODY IS CRAVING</h3>
            <p>Carotenoids are powerful antioxidants found in colorful fruits and vegetables. They help protect your body by neutralizing harmful free radicals — the biggest drivers of aging. Eating colorful fruits and vegetables can help raise your carotenoid levels.</p>
          </div>
          <div className="mini-grid">
            <div><ShieldCheck /><span>Antioxidant support</span></div>
            <div><Carrot /><span>Colorful nutrition</span></div>
            <div><Sparkles /><span>Healthy habits</span></div>
            <div><Dna /><span>Oxidative defense</span></div>
          </div>
        </div>

        <div className="explorer-head">
          <span className="micro-label">WHY YOU’LL LOVE IT</span>
          <h3>Intelligence meets simplicity.</h3>
        </div>
        <div className="benefit-explorer">
          <div className="benefit-list">
            {benefits.map((benefit, index) => (
              <button className={activeBenefit === index ? 'active' : ''} key={benefit.number} onClick={() => setActiveBenefit(index)}>
                <span>{benefit.number}</span><strong>{benefit.title}</strong><ChevronRight size={18} />
              </button>
            ))}
          </div>
          <div className="benefit-detail">
            <span>{benefits[activeBenefit].number} / 06</span>
            <h3>{benefits[activeBenefit].title}</h3>
            <strong>{benefits[activeBenefit].summary}</strong>
            <p>{benefits[activeBenefit].detail}</p>
          </div>
        </div>
      </section>

      <section className="section scan-section" id="how-it-works">
        <div className="scan-image-wrap">
          <img src="/images/prysm-device.png" alt="A glowing violet prism representing the Prysm iO scanner" />
          <div className="image-code">DEVICE / 01<br />OPTICAL WELLNESS SENSOR</div>
        </div>
        <SectionIntro kicker="HOW IT WORKS" title={<>FOUR STEPS.<br /><em>15 SECONDS.</em></>}>
          No appointments. No blood draws. No waiting. Your antioxidant status, on demand.
        </SectionIntro>
        <div className="steps">
          {scanSteps.map(({ number, title, detail, note, Icon }) => (
            <article key={number}>
              <span>{number}</span><Icon /><h3>{title}</h3><p>{detail}</p>
              {note && <p className="step-note">{note}</p>}
            </article>
          ))}
        </div>
        <div className="best-practices">
          <span>BEST_PRACTICES<br />FOR_ACCURATE_SCANS</span>
          <ul>
            {bestPractices.map((tip) => <li key={tip}>{tip}</li>)}
          </ul>
        </div>
      </section>

      <section className="section score-section" id="your-score">
        <SectionIntro kicker="READ YOUR SCORE" title={<>WHAT YOUR SCORE<br /><em>IS TELLING YOU.</em></>}>
          Carotenoids are antioxidants your body can’t make on its own. You get them from colorful food like carrots, sweet potatoes, tomatoes, spinach, kale, peppers, and berries, or from supplements. Your Prysm iO score is one snapshot of the carotenoids in your skin. It reflects your habits over the last several weeks, not just yesterday.
        </SectionIntro>
        <div className="score-grid">
          <div className="score-scale">
            <div className="score-scale-head"><span className="micro-label">SCORE RANGE</span><span className="micro-label">OF PEOPLE SCANNED</span></div>
            {scoreRanges.map(([label, range, percent], index) => (
              <div className="score-row" key={label}>
                <strong>{label}</strong>
                <small>{range}</small>
                <div className="score-bar"><span style={{ width: `${(percent / 25) * 100}%`, opacity: 0.35 + index * 0.13 }} /></div>
                <em>{percent}%</em>
              </div>
            ))}
            <p className="score-note">Higher scores line up with daily supplements, 4+ servings of fruits and veggies, good sleep, no smoking, and regular exercise. Prysm iO is not a medical device.</p>
          </div>
          <div className="score-lists">
            <div>
              <span className="micro-label">THINGS THAT CAN LOWER YOUR SCORE</span>
              <ul className="check-list minus">
                <li>Not many fruits and vegetables</li>
                <li>Smoking or being around smoke</li>
                <li>Lots of sun without protection</li>
                <li>Stress and poor sleep</li>
                <li>Heavy processed-food eating</li>
              </ul>
            </div>
            <div>
              <span className="micro-label">THINGS THAT CAN HELP RAISE IT</span>
              <ul className="check-list">
                <li>Eat more color every day</li>
                <li>Add Prysm Certified supplements</li>
                <li>Stay consistent</li>
                <li>Re-scan in 30 to 60 days and watch your trend</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="family-disclosure">Your score is for wellness education. It is not a diagnosis or a medical test.</p>

        <div className="eye-panel">
          <div>
            <span className="micro-label">EYE_HEALTH</span>
            <h3>Carotenoids + your eyes.</h3>
            <p>Two carotenoids, lutein and zeaxanthin, collect in the back of your eye in an area called the macula. That’s the part of your eye that handles sharp, center vision. They help filter blue light, including light from screens. Your body can’t make them.</p>
            <p className="eye-disclaimer"><Eye size={14} /> Prysm iO measures skin carotenoids. It does not check your eyes or vision. See your eye doctor for any vision concerns.</p>
          </div>
          <div className="eye-lists">
            <div>
              <span className="micro-label">YOU GET THEM FROM</span>
              <ul className="check-list dot">
                <li>Spinach, kale, and collard greens</li>
                <li>Egg yolks</li>
                <li>Corn</li>
                <li>Orange and yellow peppers</li>
                <li>Supplements like Pharmanex Eye Formula</li>
              </ul>
            </div>
            <div>
              <span className="micro-label">GOOD FOR</span>
              <ul className="check-list">
                <li>Anyone on screens all day</li>
                <li>People over 40</li>
                <li>Anyone who doesn’t eat many leafy greens</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section science-section" id="science">
        <SectionIntro kicker="THE SCIENCE" title={<>RESULTS THAT<br /><em>PROVE IT.</em></>}>
          A research platform engineered to turn complex optical signals into a simple, repeatable wellness score.
        </SectionIntro>
        <div className="science-grid">
          <div className="study-card">
            <span className="micro-label">CLINICAL_STUDY_RESULTS</span>
            <div className="study-number">43<span>%</span></div>
            <h3>Average score increase</h3>
            <p>In a randomized, double-blind, placebo-controlled study by Nu Skin, 46 healthy adults ages 20–65 showed an average 43–46% increase in skin carotenoid scores after 12 weeks of supplementation.</p>
            <div className="study-meta">
              <div><strong>46</strong><span>participants</span></div>
              <div><strong>12 WK</strong><span>study duration</span></div>
            </div>
            <div className="bar-chart" aria-label="Illustration of a 43 percent average increase"><span /><span /></div>
          </div>
          <div className="technology-card">
            <img src="/images/prysm-scan.png" alt="Visible spectrum light passing through a transparent prism" />
            <div className="tech-card-label"><span className="micro-label">SPECTRAL_RAI_TECHNOLOGY</span><strong>What powers it</strong></div>
            <div className="tech-list">
              {[
                ['700,000+', 'Hyperspectral absorption measurements per scan'],
                ['AI calibration', 'Algorithm driven by AI referencing Raman technology'],
                ['LED array', 'Factors out biological markers that could interfere with your score'],
                ['20+ years', 'Nu Skin leadership in antioxidant science & carotenoid measurement'],
              ].map(([label, detail]) => <div key={label}><strong>{label}</strong><span>{detail}</span></div>)}
            </div>
          </div>
        </div>

        <div className="compare">
          <div>
            <span className="micro-label">PRYSM iO™ — NEW GENERATION</span>
            <h3>PRYSM <span className="io">iO</span></h3>
            <ul className="check-list">
              <li>Spectral Rai Technology</li>
              <li>Portable — no leasing</li>
              <li>Faster 15-second scans</li>
              <li>Fingertip scan</li>
              <li>AI calibration</li>
            </ul>
          </div>
          <div>
            <span className="micro-label">BIOPHOTONIC SCANNER — LEGACY</span>
            <h3>BioPhotonic Scanner</h3>
            <ul className="check-list minus">
              <li>Raman Spectroscopy</li>
              <li>Requires leasing</li>
              <li>Slower palm scan</li>
              <li>Palm scan</li>
              <li>20+ years validated</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section supplement-section" id="supplements">
        <SectionIntro kicker="PRYSM CERTIFIED" title={<>SUPPLEMENTS PROVEN<br /><em>TO RAISE YOUR SCORE.</em></>}>
          Prysm Certified means Nu Skin’s scientists are confident this product will raise your Prysm Score over time. These are the products that move the needle.
        </SectionIntro>
        <div className="supplement-grid six">
          {supplements.map(([name, maker, tag, copy], index) => (
            <article key={name}>
              <div className="product-index">0{index + 1}</div>
              <span>{tag}</span><h3>{name}</h3><h4>{maker}</h4><p>{copy}</p>
              <button onClick={() => scrollTo('#contact')}>Ask about this product <ArrowRight size={14} /></button>
            </article>
          ))}
        </div>
        <div className="supplement-footer">
          <p>More Prysm Certified products are in development.</p>
          <button className="button-secondary" onClick={() => scrollTo('#contact')}>Ask Jennifer <ArrowRight size={14} /></button>
        </div>
      </section>

      <section className="section shop-section" id="get-yours">
        <SectionIntro kicker="GET YOURS" title={<>READY? GET YOUR<br /><em>PRYSM iO TODAY.</em></>}>
          Order straight from my Nu Skin shop. It ships right to your door, and I’m here to help you read your score and pick your next step.
        </SectionIntro>
        <div className="shop-grid">
          <article className="shop-card featured">
            <span className="shop-badge">MOST POPULAR</span>
            <h3>PRYSM <span className="io">iO</span> + Healthy Habits Bundle</h3>
            <p>The scanner plus the daily nutrition that’s made to move your score. Set your supplements to subscription and save every month.</p>
            <a className="button-primary" href={prysmBundleUrl} target="_blank" rel="noopener noreferrer">Buy the bundle <ArrowRight size={14} /></a>
          </article>
          <article className="shop-card">
            <span className="micro-label">JUST THE DEVICE</span>
            <h3>PRYSM <span className="io">iO</span> Scanner</h3>
            <span className="shop-price">$375 retail</span>
            <p>Just the device. Scan anytime, anywhere, and track your score in the app.</p>
            <a className="button-secondary" href={prysmBuyUrl} target="_blank" rel="noopener noreferrer">Buy the scanner <ArrowRight size={14} /></a>
          </article>
        </div>
        <div className="shop-extras">
          <div>
            <span className="micro-label"><Gift size={12} /> FREE GIFT</span>
            <h3>Sample box + catalog</h3>
            <p>Every Prysm iO purchase includes a Supplement Discovery Sample Box (Collagen+, Nu Biome, LifePak Nano, G3, M-Smart, Colostrum Defense) plus a printed Prysm catalog.</p>
          </div>
          <div>
            <span className="micro-label">ACCESSORIES</span>
            <ul className="accessory-list">
              {accessories.map(([name, price]) => (
                <li key={name}><a href={storefrontUrl} target="_blank" rel="noopener noreferrer"><span>{name}</span><em>{price} · Add to order <ArrowRight size={12} /></em></a></li>
              ))}
            </ul>
          </div>
          <div>
            <span className="micro-label"><BadgeCheck size={12} /> GUARANTEE</span>
            <h3>Prysm Certified Guarantee</h3>
            <p>Take a Prysm Certified product (LifePak, Beauty Focus Collagen+, ageLOC Y-Span, Eye Formula, or G3) on a Nu Skin subscription for 60 days. If your Prysm Score doesn’t go up, Nu Skin will refund the product price. Shipping not included. Requirements apply.</p>
            <a className="text-link" href={guaranteeUrl} target="_blank" rel="noopener noreferrer">See guarantee details <ArrowRight size={13} /></a>
          </div>
        </div>
        <p className="family-disclosure">Products are sold through Nu Skin. I’m an independent Nu Skin Brand Affiliate. The guarantee covers Prysm Certified products, not the scanner itself.</p>
      </section>

      <section className="section book-section" id="book">
        <SectionIntro kicker="BOOK A SCAN" title={<>BRING PRYSM iO<br /><em>TO YOU.</em></>}>
          Want your own score, or want to share this with your people? I do free 15-second scans one-on-one and at pop-up events: gyms, spas, churches, small businesses, and groups.
        </SectionIntro>
        <div className="book-grid">
          <article><span>01</span><h3>Get your score</h3><p>Meet up with me for a quick, free scan and talk through your results.</p></article>
          <article><span>02</span><h3>Host a scan event</h3><p>Bring a free scan pop-up to your business or group. I bring the scanner; you bring the people.</p></article>
          <article><span>03</span><h3>Book a call</h3><p>Have questions first? Let’s talk.</p></article>
        </div>
        <div className="book-actions">
          <a className="button-primary" href={bookScanUrl} target="_blank" rel="noopener noreferrer">Book a scan or event <ArrowRight size={14} /></a>
          <button className="button-secondary" onClick={() => scrollTo('#contact')}>Send me a question <ArrowRight size={14} /></button>
        </div>
        <p className="family-disclosure">PRYSM iO scans are for wellness education only. They do not diagnose, treat, or prevent any disease.</p>
      </section>

      <section className="section faq-section" id="faq">
        <SectionIntro kicker="FAQ" title={<>QUESTIONS,<br /><em>ANSWERED.</em></>}>
          Quick answers to what people ask me most.
        </SectionIntro>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>{question}<Plus size={20} /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <span className="micro-label">PERSONAL WELLNESS GUIDANCE</span>
          <h2>START YOUR<br /><em>WELLNESS</em> SCAN.</h2>
          <p>Ask Jennifer about PRYSM iO, choosing a routine, or adult scan options.</p>
          <div className="contact-data">
            <div><span>CONSULTANT</span><strong>Jennifer Kate</strong><small>Truly Intelligent Wellness</small></div>
            <div><span>DIRECT LINE</span><a href={phoneHref}>{phoneDisplay}</a></div>
            <div><span>EMAIL</span><a href={`mailto:${email}`}>{email}</a></div>
            <div><span>MY LOCAL TIME</span><LocalTime /></div>
          </div>
          <blockquote className="contact-quote"><p>“Ask me how 15 seconds can change your life.”</p><small>— JENNIFER KATE</small></blockquote>
          <div className="contact-signature"><span>JK</span><div><strong>Jennifer Kate</strong><small>Independent Nu Skin Brand Affiliate</small></div></div>
        </div>

        <div className="form-wrap">
          <a className="button-secondary purchase-link" href={prysmBuyUrl} target="_blank" rel="noopener noreferrer">Buy your PRYSM iO on my Nu Skin site <ArrowRight size={14} /></a>
          <p className="form-intro">Curious? Tell me what you’d like to know, and I’ll follow up.</p>
          {formState === 'sent' ? (
            <div className="form-message"><Check /><span>TRANSMISSION RECEIVED</span><h3>Thank you.</h3><p>Jennifer has your note and will be in touch shortly.</p><button onClick={() => setFormState('idle')}>Send another</button></div>
          ) : (
            <form name="prysm-inquiry" onSubmit={submitForm}>
              <input type="hidden" name="form-name" value="prysm-inquiry" />
              <input type="hidden" name="source" value="PRYSM iO website" />
              <p className="hidden-field"><label>Do not fill this out<input name="bot-field" /></label></p>
              <label><span>YOUR NAME</span><input name="name" placeholder="Name" required /></label>
              <label><span>EMAIL ADDRESS</span><input type="email" name="email" placeholder="you@example.com" required /></label>
              <label><span>PHONE NUMBER (OPTIONAL)</span><input type="tel" name="phone" placeholder="Add a number for a call or text" /></label>
              <label><span>PREFERRED CONTACT</span><select name="preferred_contact" required defaultValue="">
                <option value="" disabled>Choose one</option>
                <option value="Email">Email</option>
                <option value="Text">Text</option>
                <option value="Phone call">Phone call</option>
              </select></label>
              <label><span>WHAT ARE YOU INTERESTED IN?</span><select name="interest" required defaultValue="">
                <option value="" disabled>Choose one</option>
                <option value="Learn about the PRYSM iO device">Learning about the PRYSM iO device</option>
                <option value="Requesting a free scan">Booking a free scan or scan event</option>
                <option value="Questions about using PRYSM iO with my family">Questions about using PRYSM iO with my family</option>
                <option value="Buying my own device">Buying my own device</option>
                <option value="Wellness business opportunity">Wellness business opportunity</option>
                <option value="Other wellness question">Another wellness question</option>
              </select></label>
              <label><span>MAIN WELLNESS GOAL (OPTIONAL)</span><input name="primary_goal" placeholder="What would you like to learn or work on?" /></label>
              <label><span>YOUR MESSAGE (OPTIONAL)</span><textarea name="message" rows={3} placeholder="Share a question. Please don’t include private medical details." /></label>
              <label className="consent-field"><input type="checkbox" name="contact_consent" value="yes" required /><span className="consent-copy">I agree Jennifer may contact me about this inquiry using my preferred contact method.</span></label>
              <button className="button-primary submit-button" type="submit" disabled={formState === 'sending'}>
                {formState === 'sending' ? 'Sending...' : 'Send my inquiry'} <ArrowRight size={15} />
              </button>
              {formState === 'error' && <p className="form-error">Something went wrong. Please try again.</p>}
            </form>
          )}
        </div>
      </section>

      <footer>
        <div>
          <strong>PRYSM iO</strong>
          <span>TRULY INTELLIGENT WELLNESS</span>
          <span className="footer-contact"><a href={phoneHref}>{phoneDisplay}</a> · <a href={`mailto:${email}`}>{email}</a></span>
        </div>
        <p>Powered by 20+ years of antioxidant research and patent-pending Spectral Rai Technology. By Nu Skin / Pharmanex.<small>© 2026 Jennifer Kate · Independent Nu Skin Brand Affiliate. Prysm iO is a trademark of Nu Skin.</small></p>
        <button onClick={() => scrollTo('#top')}>BACK TO TOP <ArrowDown size={13} /></button>
      </footer>
    </main>
  )
}

function LocalTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit', timeZone: 'America/New_York', timeZoneName: 'short' }).format(new Date()))
    update()
    const timer = window.setInterval(update, 30000)
    return () => window.clearInterval(timer)
  }, [])
  return <strong>{time || 'Eastern Time'}</strong>
}

function SectionIntro({ kicker, title, children }: { kicker: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="section-intro">
      <div className="eyebrow"><span />{kicker}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  )
}
