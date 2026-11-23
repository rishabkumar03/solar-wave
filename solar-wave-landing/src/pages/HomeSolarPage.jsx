import { useEffect } from 'react'
import { Header } from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import ImageSlot from '../components/ImageSlot'

const homeConsiderations = [
  {
    number: '01',
    title: 'Your electricity use',
    text: 'Recent bills and the way your household uses power help frame a sensible starting point for system options.',
  },
  {
    number: '02',
    title: 'Your roof context',
    text: 'Roof type, approximate usable area, orientation, and shade can affect how a rooftop system is planned.',
  },
  {
    number: '03',
    title: 'Your priorities',
    text: 'Think about daytime consumption, budget, future plans, and whether storage is part of your requirements.',
  },
]

const systemComponents = [
  {
    number: '01',
    title: 'Solar modules',
    text: 'The written proposal should name the make, model, capacity, DCR (domestic-content requirement) status where required, and product warranty.',
  },
  {
    number: '02',
    title: 'Grid-connected inverter',
    text: 'Check the proposed model, technical specifications, protections, compatibility, and warranty terms.',
  },
  {
    number: '03',
    title: 'Mounting and electrical work',
    text: 'Review the structure, AC and DC cables, conduits, distribution boxes, breakers, earthing, and lightning protection.',
  },
  {
    number: '04',
    title: 'Monitoring and handover',
    text: 'Ask how generation is monitored and what system documents, warranties, and service details you will receive.',
  },
]

const homeSteps = [
  ['Start with your bill', 'Note recent monthly use, your utility consumer number, and what you want the system to do.'],
  ['Check official scheme information', 'Use the PM Surya Ghar portal to review current eligibility, system guidance, and application steps.'],
  ['Choose and compare a vendor', 'For central assistance, select a vendor registered on the National Portal. Compare the written scope, costs, equipment, and warranties.'],
  ['Follow the utility process', 'Portal submissions, utility requirements, metering, and any assistance are subject to official review and approval.'],
]

function HomeSolarPage() {
  useEffect(() => {
    const originalTitle = document.title
    const description = document.querySelector('meta[name="description"]')
    const originalDescription = description?.getAttribute('content')

    document.title = 'Home Rooftop Solar | Solar Wave Ranchi'
    description?.setAttribute('content', 'Explore residential rooftop solar options with Solar Wave in Ranchi, including system components, PM Surya Ghar guidance, and questions to review in a written proposal.')

    return () => {
      document.title = originalTitle
      if (description && originalDescription) description.setAttribute('content', originalDescription)
    }
  }, [])

  return (
    <>
      <Header />
      <main id="top" className="home-solar-page">
        <section className="home-solar-hero">
          <div className="page-shell home-solar-hero-grid">
            <div className="home-solar-hero-copy">
              <p className="eyebrow">RESIDENTIAL ROOFTOP SOLAR · RANCHI</p>
              <h1>Solar for your home, <span>made easier to understand.</span></h1>
              <p className="home-solar-hero-lead">
                Explore system options, equipment, and government-scheme guidance with clear information before you decide.
              </p>
              <div className="home-solar-hero-actions">
                <a className="button button-primary" href="#home-options">Explore home options <span aria-hidden="true">↓</span></a>
                <a className="button button-secondary" href={import.meta.env.BASE_URL + '#contact'}>Talk to Solar Wave</a>
              </div>
              <p className="home-solar-independent-note">Solar Wave is an independent service provider. Final system scope, savings, eligibility, and approvals depend on your requirements and current official rules.</p>
            </div>
            <div className="home-solar-hero-visual">
              <ImageSlot
                variant="hero-home"
                label="Residential rooftop solar"
                file="/images/solar-wave-home-rooftop.png"
                src="/images/solar-wave-home-rooftop.png"
                photoLabel="ROOFTOP SOLAR FOR HOMES"
                alt="A family discussing rooftop solar panels at home"
              />
            </div>
          </div>
        </section>

        <section className="section home-solar-needs" id="home-options">
          <div className="page-shell">
            <div className="section-heading section-heading-centered">
              <p className="eyebrow">A GOOD PLACE TO BEGIN</p>
              <h2>Start with the things that matter <span>to your household.</span></h2>
              <p>Your bill, roof context, and household priorities help shape a useful conversation about rooftop solar.</p>
            </div>
            <div className="home-solar-needs-grid">
              {homeConsiderations.map((item) => (
                <article className="home-solar-need-card" key={item.number}>
                  <span className="home-solar-number">{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-solar-components" id="home-system">
          <div className="page-shell home-solar-components-grid">
            <div className="home-solar-components-intro">
              <p className="eyebrow">WHAT GOES INTO A SYSTEM</p>
              <h2>Know what your <span>proposal includes.</span></h2>
              <p className="section-lead">The material proposal supplied for Solar Wave lists the main equipment and safety components. Ask for the exact make, model, specifications, price, and warranty in your own written scope.</p>
              <a className="text-link" href="#home-solar-scheme">Understand the scheme guidance <span aria-hidden="true">→</span></a>
            </div>
            <div className="home-solar-component-list">
              {systemComponents.map((item) => (
                <article className="home-solar-component" key={item.number}>
                  <span className="home-solar-number">{item.number}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-solar-scheme" id="home-solar-scheme">
          <div className="page-shell home-solar-scheme-grid">
            <div className="home-solar-scheme-copy">
              <p className="eyebrow eyebrow-light">PM SURYA GHAR · ELIGIBLE HOMES</p>
              <h2>Understand assistance <span>before you plan.</span></h2>
              <p>PM Surya Ghar’s central financial assistance is for eligible residential consumers. Applications and final eligibility are handled through the official portal and applicable utility process.</p>
              <div className="home-solar-scheme-links">
                <a className="button button-light" href="https://pmsuryaghar.gov.in/" target="_blank" rel="noopener noreferrer">Open official portal <span aria-hidden="true">↗</span></a>
                <a className="home-solar-guidelines-link" href="https://mnre.gov.in/static/uploads/2025/07/5307df6a2e5fa7bdf8a5efa80a5ab29c.pdf" target="_blank" rel="noopener noreferrer">Read MNRE guidelines <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="home-solar-assistance-card">
              <p className="home-solar-assistance-kicker">CURRENT STANDARD-STATE CENTRAL ASSISTANCE STRUCTURE</p>
              <div className="home-solar-rate-grid">
                <div>
                  <strong>₹30,000</strong>
                  <span>per kWp for the first 2 kWp</span>
                </div>
                <div>
                  <strong>₹18,000</strong>
                  <span>per kWp for the additional 1 kWp</span>
                </div>
              </div>
              <p className="home-solar-cap">The central assistance is capped at 3 kWp, currently up to ₹78,000 under this standard-state structure.</p>
              <p className="home-solar-assistance-note">For eligible residential systems only. Special-category state rates, any state support, technical requirements, and final approvals can differ. Confirm current details on the official portal; assistance is not guaranteed by Solar Wave.</p>
            </div>
          </div>
        </section>

        <section className="section home-solar-steps">
          <div className="page-shell">
            <div className="section-heading section-heading-centered">
              <p className="eyebrow">FROM QUESTION TO DECISION</p>
              <h2>A clear path to a <span>well-informed choice.</span></h2>
              <p>Use official scheme guidance and a written proposal to understand what applies to your home.</p>
            </div>
            <div className="home-solar-steps-grid">
              {homeSteps.map(([title, text], index) => (
                <article className="home-solar-step" key={title}>
                  <span className="home-solar-step-number">0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="home-solar-process-note">Solar Wave can help explain proposal details and questions to ask. Scheme eligibility, utility approvals, metering, and subsidy release are determined through the official process.</p>
          </div>
        </section>

        <section className="home-solar-contact-cta">
          <div className="page-shell home-solar-contact-inner">
            <div>
              <p className="eyebrow">READY TO TALK?</p>
              <h2>Bring your questions. <span>We’ll start there.</span></h2>
              <p>Share what you know about your electricity use and what you want to understand about home solar.</p>
            </div>
            <a className="button button-primary" href={import.meta.env.BASE_URL + '#contact'}>Contact Solar Wave <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default HomeSolarPage
