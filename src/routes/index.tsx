import { createFileRoute } from '@tanstack/react-router'
import {
  ArrowDown,
  ArrowRight,
  Check,
  ChevronRight,
  Dna,
  Eye,
  Fingerprint,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'
import { useState, type FormEvent } from 'react'

export const Route = createFileRoute('/')({
  component: PrysmPage,
})

const prysmBuyUrl = 'https://www.nuskin.com/us/en/mysite/jenniferkate/product/prysm-io-consumer-edition'
const kidsSupplementsUrl = 'https://www.nuskin.com/us/en/mysite/jenniferkate/product/pharmanex-jungamals-scs'
const grandsonScanReelUrl = 'https://www.instagram.com/reel/DWj7yNFjqtW/?obrf=dnp4dnpldzc3M243'

const navItems = [
  ['What it does', '#what-it-does'],
  ['How it works', '#how-it-works'],
  ['Family wellness', '#family-wellness'],
  ['For wellness pros', '#business-opportunity'],
  ['The science', '#science'],
  ['Supplements', '#supplements'],
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
    summary: 'Painless results in fifteen seconds.',
    detail: 'Place your index finger on the lens and get a clear antioxidant score without a lab visit.',
  },
  {
    number: '03',
    title: 'AI-powered science',
    summary: '200,000+ measurements per scan.',
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
    title: '20+ years of research',
    summary: 'Built on Nu Skin science leadership.',
    detail: 'Every scan draws on decades of antioxidant research and carotenoid measurement expertise.',
  },
  {
    number: '06',
    title: 'A younger biological age',
    summary: 'High carotenoids correlate with healthy aging.',
    detail: 'Use objective feedback to build habits that support long-term resilience and vitality.',
  },
]

const scanSteps = [
  ['01', 'Open the app', 'Launch Prysm iO™ and connect to your device.'],
  ['02', 'Place finger', 'Cover the lens with the pad of your index finger.'],
  ['03', 'Lights circle', 'Stay still while the sensor gathers spectral data.'],
  ['04', 'Get your score', 'Review your antioxidant score and track the trend.'],
]

const supplements = [
  ['LifePak+', 'Pharmanex', 'FOUNDATION', 'Broad-spectrum nutritional support designed to improve antioxidant status.'],
  ['ageLOC R²', 'Nu Skin', 'AGING', 'Cellular and metabolic support for long-term wellness resilience.'],
  ['Mind Full', 'MYND360', 'COGNITION', 'Targeted support for brain health, focus, and healthy memory.'],
  ['G3', 'Pharmanex', 'VISION', 'Carotenoid-rich nutrition supporting eye health and visual acuity.'],
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
          <div className="eyebrow"><span /> TRULY INTELLIGENT WELLNESS</div>
          <h1>YOUR BODY.<br /><em>IN FOCUS.</em></h1>
          <p className="hero-lead">A fifteen-second wellness scan that turns the nutrients in your skin into a score you can act on.</p>
          <p className="hero-note">Prysm iO™ measures skin carotenoid levels—your real-time antioxidant status, backed by more than twenty years of science.</p>
          <div className="hero-actions">
            <button className="button-primary" onClick={() => scrollTo('#family-wellness')}>For moms & families <ArrowRight size={14} /></button>
            <button className="button-secondary" onClick={() => scrollTo('#business-opportunity')}>For wellness professionals <ArrowRight size={14} /></button>
            <a className="button-secondary" href={prysmBuyUrl} target="_blank" rel="noopener noreferrer">Buy your PRYSM iO <ArrowRight size={14} /></a>
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
          <div><strong>43%</strong><span>AVG / SCORE LIFT</span></div>
        </div>
      </section>

      <section className="section" id="what-it-does">
        <SectionIntro kicker="WHAT IT DOES" title={<>KNOW IF YOUR<br /><em>ROUTINE IS WORKING.</em></>}>
          You deserve to know—not just hope. Prysm iO™ measures carotenoid nutrient levels in your skin, a trusted biomarker correlated with healthy aging.
        </SectionIntro>

        <div className="signal-flow">
          {[
            ['INPUT_', 'Your finger', 'Clean, dry, and placed over the lens for fifteen seconds.'],
            ['PROCESS_', 'Spectral Rai™', '200,000+ hyperspectral measurements analyzed with AI.'],
            ['OUTPUT_', 'Your Prysm Score', 'A real-time antioxidant score without needles or discomfort.'],
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
            <p>Carotenoids are powerful antioxidants found in colorful fruits and vegetables. They help neutralize free radicals, support healthy aging, and provide a measurable signal of nutritional status.</p>
          </div>
          <div className="mini-grid">
            <div><ShieldCheck /><span>Immune support</span></div>
            <div><Eye /><span>Eye & skin health</span></div>
            <div><Sparkles /><span>Healthy aging</span></div>
            <div><Dna /><span>Oxidative defense</span></div>
          </div>
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
        <SectionIntro kicker="HOW IT WORKS" title={<>SIMPLICITY.<br /><em>PROVE IT.</em></>}>
          No appointments. No blood draws. No waiting. Your antioxidant status, on demand.
        </SectionIntro>
        <div className="steps">
          {scanSteps.map(([number, title, detail]) => (
            <article key={number}>
              <span>{number}</span><Fingerprint /><h3>{title}</h3><p>{detail}</p>
            </article>
          ))}
        </div>
        <div className="scan-tip"><span>SCAN_PROTOCOL</span><p>Wash and dry hands, cover the lens fully, and avoid moving during the fifteen-second scan.</p></div>
      </section>

      <section className="section science-section" id="science">
        <SectionIntro kicker="THE SCIENCE" title={<>DATA, NOT<br /><em>GUESSWORK.</em></>}>
          A research platform engineered to turn complex optical signals into a simple, repeatable wellness score.
        </SectionIntro>
        <div className="science-grid">
          <div className="study-card">
            <span className="micro-label">CLINICAL_SIGNAL / 12_WEEKS</span>
            <div className="study-number">46<span>%</span></div>
            <h3>increase in skin carotenoid score</h3>
            <p>Observed in a randomized, double-blind, placebo-controlled Nu Skin study of healthy adults after twelve weeks of supplementation.</p>
            <div className="bar-chart" aria-label="Illustration of a 46 percent increase"><span /><span /></div>
          </div>
          <div className="technology-card">
            <img src="/images/prysm-scan.png" alt="Visible spectrum light passing through a transparent prism" />
            <div className="tech-list">
              {[
                ['200,000+', 'Hyperspectral absorption measurements'],
                ['AI calibration', 'Algorithmic analysis referencing Raman technology'],
                ['LED array', 'Optical controls designed for consistent readings'],
                ['20+ years', 'Antioxidant science and measurement expertise'],
              ].map(([label, detail]) => <div key={label}><strong>{label}</strong><span>{detail}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section supplement-section" id="supplements">
        <SectionIntro kicker="PRYSM CERTIFIED" title={<>BUILT TO<br /><em>MOVE THE NEEDLE.</em></>}>
          Products selected to support the nutritional pathways measured by your Prysm Score—so your routine has a result you can follow.
        </SectionIntro>
        <div className="supplement-grid">
          {supplements.map(([name, maker, tag, copy], index) => (
            <article key={name}>
              <div className="product-index">0{index + 1}</div>
              <span>{tag}</span><h3>{name}</h3><h4>{maker}</h4><p>{copy}</p>
              <button onClick={() => scrollTo('#contact')}>Ask about this product <ArrowRight size={14} /></button>
            </article>
          ))}
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
        <p className="family-disclosure">Business participation is optional. Earnings are not guaranteed; results depend on individual effort and other factors.</p>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <span className="micro-label">PERSONAL WELLNESS GUIDANCE</span>
          <h2>LET’S MAKE YOUR<br /><em>NEXT MOVE</em> MEASURABLE.</h2>
          <p>Ask Jennifer about PRYSM iO, choosing a routine, or adult scan options.</p>
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
        <div><strong>PRYSM iO</strong><span>TRULY INTELLIGENT WELLNESS</span></div>
        <p>Powered by 20+ years of antioxidant research and carotenoid measurement science.</p>
        <button onClick={() => scrollTo('#top')}>BACK TO TOP <ArrowDown size={13} /></button>
      </footer>
    </main>
  )
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
