import { useEffect } from 'react'
import { Header } from './components/Header/Header'
import Footer from './components/Footer/Footer'
import EnquiryForm from './components/EnquiryForm'
import ImageSlot from './components/ImageSlot'
import './App.css'

const iconAssets = {
  rupee: 'https://res.cloudinary.com/z3uu8k9m/image/upload/v1795274748/001-rupee.png',
  setting: 'https://res.cloudinary.com/z3uu8k9m/image/upload/v1795274753/004-settings.png',
  home: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155214/003-home.png',
  business: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155214/005-store.png',
  sun: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155214/010-sun.png',
  check: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155214/006-checklist.png',
  plan: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155215/007-paper.png',
  install: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155215/008-like.png',
  leaf: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155214/002-tea.png',
  bolt: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155215/011-thunder.png',
  pen: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155214/009-fountain-pen.png',
  solarPanel: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795175218/solar-cell.png',
  call: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155215/012-phone-call.png',
  location: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795155215/013-map.png',
  whatsApp: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795261621/apple.png',
  instagram: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795261622/instagram.png',
  youTube: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795261620/youtube.png',
  facebook: 'https://res.cloudinary.com/gicu3fz6/image/upload/v1795261620/facebook.png'
}

const Icon = ({ name, size = 22, className = '' }) => {
  if (iconAssets[name]) {
    return <img className={['solar-icon-image', className].filter(Boolean).join(' ')} src={iconAssets[name]} width={size} height={size} alt="" aria-hidden="true" />
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

const steps = [
  { number: '01', icon: 'plan', title: 'Discuss your goals', text: 'We talk through your electricity use, property type, and what you want solar to do for you.' },
  { number: '02', icon: 'solarPanel', title: 'Explore system options', text: 'We explain suitable system choices and answer questions about components and process.' },
  { number: '03', icon: 'install', title: 'Get a clear proposal', text: 'Review the proposed equipment, scope, warranty details, and project milestones.' },
  { number: '04', icon: 'pen', title: 'Plan installation and handover', text: 'Move forward based on the agreed scope, applicable approvals, installation, and handover.' },
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

        <section className="intro-strip" aria-label="Solar Wave approach">
          <div className="page-shell intro-strip-grid">
            <div><span className="strip-icon"><Icon name="rupee" size={46} className="strip-icon-image" /></span><span><strong>Easy EMI Available</strong></span></div>
            <div><span className="strip-icon"><Icon name="leaf" size={46} className="strip-icon-image strip-icon-image-leaf" /></span><span><strong>Better for the Environment</strong></span></div>
            <div><span className="strip-icon"><Icon name="home" size={46} className="strip-icon-image" /></span><span><strong>Clean Energy for Every Home</strong></span></div>
            <div><span className="strip-icon"><Icon name="setting" size={46} className="strip-icon-image" /></span><span><strong>Government Subsidy Benefit</strong></span></div>
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
                  <div className="solution-icon"><Icon name="home" size={40} /></div>
                  <p className="card-kicker">FOR HOMEOWNERS</p>
                  <h3>Solar for your home</h3>
                  <p>Explore how rooftop solar may fit your home, electricity use, and available roof area.</p>
                  <a className="text-link" href={import.meta.env.BASE_URL + 'solar-for-home/'}>Explore home solar <Icon name="arrow" size={17} /></a>
                </div>
              </article>
              <article className="solution-card">
                <ImageSlot variant="business" label="Local business rooftop" file="/images/solar-wave-business-rooftop.png" alt="Shop or business rooftop solar image" />
                <div className="solution-card-content">
                  <div className="solution-icon solution-icon-green"><Icon name="business" size={40} /></div>
                  <p className="card-kicker">FOR SHOPS & BUSINESSES</p>
                  <h3>Solar for your business</h3>
                  <p>Discuss your operating needs, site conditions, and the system scope that could suit your business.</p>
                  <a className="text-link" href="#contact">Discuss business solar <Icon name="arrow" size={17} /></a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="scheme-section scheme-banner-section" id="scheme-modiji" aria-label="PM Surya Ghar rooftop solar scheme">
          <div className="scheme-banner-frame">
            <img
              className="scheme-banner-image"
              src="https://res.cloudinary.com/gicu3fz6/image/upload/v1795260694/%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%AF_%E0%A4%98%E0%A4%B0.jpg.jpg"
              alt="PM Surya Ghar campaign banner with the Government of India scheme artwork, clean-energy pledge, and Prime Minister Narendra Modi."
              width="1896"
              height="296"
              loading="eager"
              decoding="async"
            />
            <div className="scheme-banner-actions">
              <a
                className="button scheme-banner-button scheme-banner-button-primary"
                href="https://solarrooftop.pmsuryaghar.gov.in/notification/172_notification.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View official notification <Icon name="arrow" size={18} />
              </a>
              <a className="button scheme-banner-button scheme-banner-button-secondary" href="#contact">
                Contact us <Icon name="arrow" size={18} />
              </a>
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
                  <div className="process-top"><span className="process-icon"><Icon name={step.icon} size={30} /></span><span className="process-number">{step.number}</span></div>
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
            </div>
            <div className="quality-copy">
              <p className="eyebrow">QUALITY YOU CAN UNDERSTAND</p>
              <h2>Know what goes into <span>your system.</span></h2>
              <p className="section-lead">A proposal should make the system scope easy to review—from modules and inverter options to mounting, protection, and safety details.</p>
              <div className="quality-list">
                <div><span className="quality-list-icon"><Icon name="sun" size={22} /></span><span><strong>Panel options</strong><small>Review the proposed make, model, specifications, and warranty.</small></span></div>
                <div><span className="quality-list-icon"><Icon name="bolt" size={22} /></span><span><strong>System components</strong><small>Understand inverter, cabling, structure, and electrical protection in the scope.</small></span></div>
                <div><span className="quality-list-icon"><Icon name="pen" size={22} /></span><span><strong>Written details</strong><small>Confirm final equipment, availability, warranty, and milestones in your proposal.</small></span></div>
              </div>
              <p className="quality-note">Equipment brands shown in proposals are subject to the final site-specific scope and availability.</p>
            </div>
          </div>
        </section>

        

        <section className="scheme-section scheme-guidance-section" id="scheme-guidance">
          <div className="page-shell scheme-grid">
            <div><img src='https://res.cloudinary.com/gicu3fz6/image/upload/v1795159507/Cheerful_Solar_Panel_Mascot-removebg-preview.png' size={27} /></div>
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
                <a href="tel:+919835474174"><span className="contact-direct-icon"><Icon name="call" size={20} /></span><span><small>CALL SOLAR WAVE</small><strong>+91 98354 74174</strong></span></a>
                <a href="tel:+919470161421"><span className="contact-direct-icon"><Icon name="call" size={20} /></span><span><small>ALTERNATE NUMBER</small><strong>+91 94701 61421</strong></span></a>
                <a href="https://wa.me/919835474174?text=Hello%20Solar%20Wave%2C%20I%27d%20like%20to%20discuss%20rooftop%20solar." target="_blank" rel="noopener noreferrer"><span className="contact-direct-icon"><Icon name="whatsApp" size={20} /></span><span><small>WHATSAPP</small><strong>Message our team</strong></span></a>
              </div>
              <div className="contact-location"><Icon name="location" size={17} /><span>Ranchi, Jharkhand</span></div>
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
export { iconAssets }
