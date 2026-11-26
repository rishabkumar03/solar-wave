import { useState } from 'react'
import { iconAssets } from '../App'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbya3yd66S_GCarsNIlOMtdElafZnl5d-ZwKj1ErztfOsVdaZ2Eutk8C7UviPls8ZdKt/exec'

const whatsappLink = 'https://wa.me/919835474174?text=Hello%20Solar%20Wave%2C%20I%27d%20like%20to%20discuss%20rooftop%20solar.'

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

function EnquiryForm() {
  const [status, setStatus] = useState({ kind: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ kind: '', message: '' })
    const form = event.currentTarget
    if (!form.reportValidity()) return

    const fields = new FormData(form)
    const payload = {
      name: String(fields.get('name') || '').trim(),
      phone: String(fields.get('phone') || '').trim(),
      email: String(fields.get('email') || '').trim(),
      interest: String(fields.get('interest') || ''),
      message: String(fields.get('message') || '').trim(),
    }
    const endpoint = import.meta.env.VITE_LEAD_ENDPOINT || SCRIPT_URL

    if (!endpoint) {
      setStatus({
        kind: 'info',
        message: 'Online form storage is not connected yet. Please contact Solar Wave using the WhatsApp option below.',
      })
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        // text/plain keeps this a simple cross-origin request for Apps Script.
        // no-cors makes the response opaque, so its JSON body cannot be inspected here.
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      if (response.type !== 'opaque' && !response.ok) throw new Error('The form endpoint returned an error.')
      form.reset()
      setStatus({ kind: 'success', message: 'Thank you. Your enquiry request has been sent. Solar Wave will get back to you soon.' })
    } catch {
      setStatus({
        kind: 'error',
        message: 'Your enquiry could not be sent right now. Please try again or contact Solar Wave on WhatsApp.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="enquiry-card">
      <div className="form-heading">
        <span className="form-kicker">ENQUIRY</span>
        <h3>Let’s start with a conversation.</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="e.g. Nikhil Kumar" required minLength="2" />
        </label>
        <div className="form-row">
          <label>
            <span>Phone number</span>
            <input name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91" required pattern="(?:\+91|91|0)?[6-9][0-9]{9}" title="Enter a valid Indian mobile number." />
          </label>
          <label>
            <span>Email address <small>(optional)</small></span>
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" />
          </label>
        </div>
        <label>
          <span>I’m interested in</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="Home rooftop solar">Home solar</option>
            <option value="Business rooftop solar">Business solar</option>
            <option value="Solar partnership">Partnership</option>
            <option value="Other solar enquiry">Something else</option>
          </select>
        </label>
        <label>
          <span>Anything you’d like us to know <small>(optional)</small></span>
          <textarea name="message" rows="3" placeholder="Tell us about your roof, site, or question." />
        </label>
        <button className="button button-primary form-submit" type="submit" disabled={submitting}>
          {submitting ? 'Sending…' : 'Send Enquiry'} <span aria-hidden="true">↗</span>
        </button>
        {status.message && <p className={'form-status form-status-' + status.kind} role="status">{status.message}</p>}
        <p className="form-privacy">Your details are used to respond to this enquiry. Do not include sensitive financial information.</p>
      </form>
      <div className="form-divider"><span>OR</span></div>
      <a className="form-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
        <span className="form-whatsapp-icon"><Icon name="whatsApp" size={18} /></span> Continue on WhatsApp
      </a>
    </div>
  )
}

export default EnquiryForm
