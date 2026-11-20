function Logo() {
  return (
    <span className="solar-logo-crop">
      <img
        src={import.meta.env.BASE_URL + 'images/solar-wave-logo.png'}
        alt="Solar Wave — Sagar Property and Financials"
        loading="lazy"
      />
    </span>
  )
}

export default Logo
