const navigation = [
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Home solar', href: '/solar-for-home' },
  { label: 'Our approach', href: '/#approach' },
  { label: 'Process', href: '/#process' },
  { label: 'Partners', href: '/#partners' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <a className="brand-link" href="/#top" aria-label="Solar Wave home">
          <span className="brand-mark" aria-hidden="true">
            <img
              className="brand-mark-image"
              src={import.meta.env.BASE_URL + 'images/rounded-logo.png'}
              alt=""
            />
          </span>
          <span className="brand-type">
            <strong className="brand-name">
              <span className="brand-word-solar">SOLAR</span>
              <span className="brand-word-wave">WAVE</span>
            </strong>
            <small>SAGAR PROPERTY AND FINANCIALS</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
        </nav>
        <a className="header-cta" href="/#contact">
          Talk to our team <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => <a href={item.href} key={item.label}>{item.label}</a>)}
            <a href="/#contact">Talk to our team</a>
          </nav>
        </details>
      </div>
    </header>
  )
}

export { Header }
export default Header
