import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EnquiryForm from './components/EnquiryForm'
import ImageSlot from './components/ImageSlot'
import './App.css'

const Icon = ({ name, size = 22 }) => {
  const shapes = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-7h6v7" /></>,
    business: <><path d="M4 21V5l8-3 8 3v16M2 21h20M8 8h1m6 0h1M8 12h1m6 0h1M10 21v-5h4v5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    check: <><path d="m5 12 4 4L19 6" /><circle cx="12" cy="12" r="9" /></>,
    roof: <><path d="m3 11 9-7 9 7" /><path d="M5 10v10h14V10M9 20v-6h6v6" /><path d="M8 9h8" /></>,
    plan: <><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8m-8 4h5" /></>,
    install: <><path d="m14 7 3-3 3 3-3 3" /><path d="m17 7-7 7" /><path d="m5 19 5-5 4 4-5 5H5z" /><path d="m14 14 5 5" /></>,
    leaf: <><path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 10-6 8-16Z" /><path d="M4 21c3-5 6-8 12-11" /></>,
    arrow: <><path d="M5 12h14m-6-6 6 6-6 6" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />,
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {shapes[name] || shapes.sun}
    </svg>
  )
}

const steps = [
  { number: '01', icon: 'plan', title: 'Discuss your goals', text: 'We talk through your electricity use, property type, and what you want solar to do for you.' },
  { number: '02', icon: 'roof', title: 'Explore system options', text: 'We explain suitable system choices and answer questions about components and process.' },
  { number: '03', icon: 'check', title: 'Get a clear proposal', text: 'Review the proposed equipment, scope, warranty details, and project milestones.' },
  { number: '04', icon: 'install', title: 'Plan installation and handover', text: 'Move forward based on the agreed scope, applicable approvals, installation, and handover.' },
]

function App() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll(
      '.hero-copy, .hero-visual, .intro-strip-grid > div, .section-heading, .solution-card, .clarity-copy, .clarity-image-wrap, .process-card, .quality-visual, .quality-copy, .scheme-portrait, .scheme-copy, .scheme-official-context, .scheme-actions, .scheme-badge, .scheme-grid > .button, .partner-copy, .partner-grid > .image-slot, .faq-heading, .faq-list, .contact-copy, .enquiry-card'
    ))

    if (!targets.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!('IntersectionObserver' in window)) return

    targets.forEach((element, index) => {
      element.classList.add('scroll-reveal')
      element.style.setProperty('--reveal-delay', (Math.min(index % 4, 3) * 70) + 'ms')
    })

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    targets.forEach((element) => observer.observe(element))
    document.documentElement.classList.add('reveal-ready')

    return () => {
      observer.disconnect()
      document.documentElement.classList.remove('reveal-ready')
      targets.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-revealed')
        element.style.removeProperty('--reveal-delay')
      })
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="hero-section hero-fullscreen" id="top">
          <div className="hero-backdrop" aria-hidden="true">
            <ImageSlot
              variant="hero-background"
              label="Rooftop solar at sunset"
              file="/images/solar-wave-rooftop-sunset.png"
              src="/images/solar-wave-rooftop-sunset.png"
              alt=""
            />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="page-shell hero-grid">
            <div className="hero-copy">
              <h1>Your rooftop could <span>do more.</span></h1>
              <p className="hero-description">
                Clear guidance for homes and businesses exploring rooftop solar, with a plan shaped around your needs.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Discuss your solar plan</a>
                <a className="button button-secondary" href="tel:+919835474174">Talk to Solar Wave</a>
              </div>
            </div>
          </div>
        </section>

        {/* space for modiji banner */}

        <section className="intro-strip" aria-label="Solar Wave approach">
          <div className="page-shell intro-strip-grid">
            <div><span className="strip-icon"><Icon name="roof" size={19} /></span><span><strong>Begin with your needs</strong><small>Goals and electricity use</small></span></div>
            <div><span className="strip-icon"><Icon name="plan" size={19} /></span><span><strong>Understand the proposal</strong><small>Scope and equipment options</small></span></div>
            <div><span className="strip-icon"><Icon name="check" size={19} /></span><span><strong>Know the next steps</strong><small>Process, installation, handover</small></span></div>
          </div>
        </section>

        <section className="section section-solutions" id="solutions">
          <div className="page-shell">
            <div className="section-heading section-heading-centered">
              <p className="eyebrow">SOLAR FOR YOUR SPACE</p>
              <h2>Different roofs. <span>One clear starting point.</span></h2>
              <p>Tell us what you are planning. We’ll help you understand the right questions to ask about your site and solar system.</p>
            </div>
            <div className="solution-grid">
              <article className="solution-card">
                <ImageSlot variant="home" label="Residential rooftop" file="/images/solar-wave-home-rooftop.png" alt="Residential rooftop solar image" />
                <div className="solution-card-content">
                  <div className="solution-icon"><Icon name="home" /></div>
                  <p className="card-kicker">FOR HOMEOWNERS</p>
                  <h3>Solar for your home</h3>
                  <p>Explore how rooftop solar may fit your home, electricity use, and available roof area.</p>
                  <a className="text-link" href="#contact">Ask about home solar <Icon name="arrow" size={17} /></a>
                </div>
              </article>
              <article className="solution-card">
                <ImageSlot variant="business" label="Local business rooftop" file="/images/solar-wave-business-rooftop.png" alt="Shop or business rooftop solar image" />
                <div className="solution-card-content">
                  <div className="solution-icon solution-icon-green"><Icon name="business" /></div>
                  <p className="card-kicker">FOR SHOPS & BUSINESSES</p>
                  <h3>Solar for your business</h3>
                  <p>Discuss your operating needs, site conditions, and the system scope that could suit your business.</p>
                  <a className="text-link" href="#contact">Discuss business solar <Icon name="arrow" size={17} /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        


        <section className="section section-clarity" id="approach">
          <div className="page-shell clarity-grid">
            <div className="clarity-copy">
              <p className="eyebrow">INSTALLATION & HANDOVER</p>
              <h2>Move from a clear proposal to <span>installation.</span></h2>
              <p className="section-lead">Once you understand and accept the written scope, the next steps move through applicable approvals, installation, and handover.</p>
              <div className="clarity-points">
                <div><span className="check-mark"><Icon name="check" size={16} /></span><span><strong>The agreed scope</strong><small>Review system details, equipment, and written milestones.</small></span></div>
                <div><span className="check-mark"><Icon name="check" size={16} /></span><span><strong>The installation plan</strong><small>Understand what happens during installation and handover.</small></span></div>
                <div><span className="check-mark"><Icon name="check" size={16} /></span><span><strong>Your handover details</strong><small>Know the documents, warranty, and system information to keep.</small></span></div>
              </div>
              <a href="#process" className="text-link">See how the process works <Icon name="arrow" size={17} /></a>
            </div>
            <div className="clarity-image-wrap">
              <ImageSlot variant="team" label="Illustrative rooftop installation" file="/images/solar-wave-installation-team.png" src="/images/solar-wave-installation-team.png" photoLabel="ILLUSTRATIVE INSTALLATION IMAGE" alt="Two solar workers wearing safety gear installing rooftop solar panels" />
            </div>
          </div>
        </section>

        <section className="section section-process" id="process">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow">FROM FIRST QUESTION TO HANDOVER</p>
              <h2>A straightforward path to <span>rooftop solar.</span></h2>
              <p>Understand each stage before making a decision. The final scope and timeline depend on your site and project requirements.</p>
            </div>
            <div className="process-grid">
              {steps.map((step) => (
                <article className="process-card" key={step.number}>
                  <div className="process-top"><span className="process-icon"><Icon name={step.icon} /></span><span className="process-number">{step.number}</span></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-quality" id="quality">
          <div className="page-shell quality-grid">
            <div className="quality-visual">
              <ImageSlot variant="equipment" label="Rooftop solar array" file="/images/solar-wave-rooftop-array.png" src="/images/solar-wave-rooftop-array.png" photoLabel="ILLUSTRATIVE ROOFTOP SYSTEM" alt="Solar panel array on a raised rooftop structure with homes and greenery in the distance" />
              <div className="quality-detail-inset">
                <ImageSlot
                  variant="equipment-detail"
                  label="Solar system equipment"
                  file="/images/solar-wave-equipment-detail.png"
                  alt="Close-up illustrative view of a solar inverter and electrical components"
                  photoLabel="ILLUSTRATIVE EQUIPMENT"
                />
              </div>
              <div className="quality-photo-caption"><span className="caption-line" /> COMPONENTS, EXPLAINED CLEARLY</div>
            </div>
            <div className="quality-copy">
              <p className="eyebrow">QUALITY YOU CAN UNDERSTAND</p>
              <h2>Know what goes into <span>your system.</span></h2>
              <p className="section-lead">A proposal should make the system scope easy to review—from modules and inverter options to mounting, protection, and safety details.</p>
              <div className="quality-list">
                <div><span className="quality-list-icon"><Icon name="sun" size={18} /></span><span><strong>Panel options</strong><small>Review the proposed make, model, specifications, and warranty.</small></span></div>
                <div><span className="quality-list-icon"><Icon name="bolt" size={18} /></span><span><strong>System components</strong><small>Understand inverter, cabling, structure, and electrical protection in the scope.</small></span></div>
                <div><span className="quality-list-icon"><Icon name="check" size={18} /></span><span><strong>Written details</strong><small>Confirm final equipment, availability, warranty, and milestones in your proposal.</small></span></div>
              </div>
              <p className="quality-note">Equipment brands shown in proposals are subject to the final site-specific scope and availability.</p>
            </div>
          </div>
        </section>

        

        <section className="scheme-section scheme-guidance-section" id="scheme-guidance">
          <div className="page-shell scheme-grid">
            <div className="scheme-badge"><Icon name="sun" size={27} /><span>PM<br />SURYA GHAR</span></div>
            <div className="scheme-copy">
              <p className="eyebrow eyebrow-light">GUIDANCE ON ELIGIBILITY & PROCESS</p>
              <h2>Government support may be available for <span>eligible homes.</span></h2>
              <p>Scheme benefits, eligibility, and required steps depend on current official rules and approvals. We can help you understand the process and questions to check for your home.</p>
            </div>
            <a className="button button-light" href="#contact">Ask about the process <Icon name="arrow" size={18} /></a>
          </div>
        </section>
        <section className="section section-partners" id="partners">
          <div className="page-shell partner-grid">
            <div className="partner-copy">
              <p className="eyebrow">LET’S BUILD LOCAL CONNECTIONS</p>
              <h2>Good work grows through <span>good partnerships.</span></h2>
              <p className="section-lead">Solar Wave is open to conversations with suppliers, installers, builders, architects, and others working around rooftop solar.</p>
              <a className="button button-primary" href="#contact">Explore a partnership <Icon name="arrow" size={18} /></a>
            </div>
            <ImageSlot variant="partner" label="Solar Wave partner conversation" file="/images/solar-wave-partnership.png" alt="Local solar and construction professionals discussing a rooftop project" />
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="page-shell faq-grid">
            <div className="section-heading faq-heading">
              <p className="eyebrow">GOOD QUESTIONS, CLEAR ANSWERS</p>
              <h2>Before you <span>get started.</span></h2>
              <p>Have a question that isn’t covered here? Talk to Solar Wave about your roof and requirements.</p>
              <a className="text-link" href="#contact">Send us your question <Icon name="arrow" size={17} /></a>
            </div>
            <div className="faq-list">
              <details>
                <summary>What should I share when I contact Solar Wave?<span className="faq-plus" /></summary>
                <p>You can share whether you are considering solar for a home or business, your general electricity needs, and the questions you would like answered.</p>
              </details>
              <details>
                <summary>Can I choose the equipment brand?<span className="faq-plus" /></summary>
                <p>Available options depend on the system scope, current availability, and site requirements. Ask for the proposed make, model, and warranty in writing.</p>
              </details>
              <details>
                <summary>Will my home qualify for a government subsidy?<span className="faq-plus" /></summary>
                <p>Eligibility and approval depend on current official scheme rules and the required process. Confirm the latest conditions before making a decision.</p>
              </details>
              <details>
                <summary>Does solar mean my electricity bill becomes zero?<span className="faq-plus" /></summary>
                <p>Bill outcomes depend on usage, system size, utility rules, and other factors. A specific bill result cannot be promised in advance.</p>
              </details>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-shell contact-grid">
            <div className="contact-copy">
              <p className="eyebrow eyebrow-light">LET’S TALK ABOUT YOUR ROOF</p>
              <h2>Take the first step toward a <span>clearer solar plan.</span></h2>
              <p>Tell us a little about your solar plans. Solar Wave will respond to discuss possible options and next steps.</p>
              <div className="contact-direct">
                <a href="tel:+919835474174"><span className="contact-direct-icon"><Icon name="bolt" size={17} /></span><span><small>CALL SOLAR WAVE</small><strong>+91 98354 74174</strong></span></a>
                <a href="https://wa.me/919835474174?text=Hello%20Solar%20Wave%2C%20I%27d%20like%20to%20discuss%20rooftop%20solar." target="_blank" rel="noreferrer"><span className="contact-direct-icon"><Icon name="arrow" size={17} /></span><span><small>WHATSAPP</small><strong>Message our team</strong></span></a>
              </div>
              <div className="contact-location"><Icon name="roof" size={18} /><span>Ranchi, Jharkhand</span></div>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App








