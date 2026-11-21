import { Logo } from '../index'
import { iconAssets } from '../../App'

const Icon = ({ name, size = 22 }) => {
  if (iconAssets[name]) {
    return <img className="solar-icon-image" src={iconAssets[name]} width={size} height={size} alt="" aria-hidden="true" />
  }

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <div className="footer-brand">
          <a href="#top" aria-label="Solar Wave home"><Logo /></a>
          <p>Helping homes and businesses in Ranchi explore rooftop solar with clear guidance and a considered plan.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/solarwaveranchi/" target="_blank" rel="noreferrer" aria-label="Solar Wave on Instagram">Instagram <span><Icon name="instagram" size={16} /></span></a>
            <a href="https://www.facebook.com/profile.php?id=61595588662902" target="_blank" rel="noreferrer" aria-label="Solar Wave on Facebook">Facebook <span><Icon name="facebook" size={16} /></span></a>
            <a href="https://youtube.com/@solarwaveranchi" target="_blank" rel="noreferrer" aria-label="Solar Wave on YouTube">YouTube <span><Icon name="youTube" size={16} /></span></a>
          </div>
        </div>
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <a href="#solutions">Home & business solar</a>
          <a href="#approach">Our approach</a>
          <a href="#quality">Equipment & quality</a>
          <a href="#partners">Partner with us</a>
        </div>
        <div className="footer-column">
          <h3>GET STARTED</h3>
          <a href="#process">How it works</a>
          <a href="#scheme">Scheme guidance</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Start an enquiry</a>
        </div>
        <div className="footer-column footer-contact">
          <h3>CONTACT SOLAR WAVE</h3>
          <a href="tel:+919835474174">+91 98354 74174</a>
          <a href="tel:+919470161421">+91 94701 61421</a>
          <a className="footer-whatsapp-link" href="https://wa.me/919835474174" target="_blank" rel="noopener noreferrer">WhatsApp our team <Icon name="whatsApp" size={15} /></a>
          <span>Ranchi, Jharkhand</span>
        </div>
      </div>
      <div className="page-shell footer-bottom">
        <span>© {new Date().getFullYear()} Solar Wave. All rights reserved.</span>
        <span>Scheme eligibility and benefits are subject to current official rules and approvals.</span>
        <span className="footer-credit">Developed by <a href="https://thekividigital.com/" target="_blank" rel="noopener noreferrer">The Kivi Digital</a></span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}

export default Footer

