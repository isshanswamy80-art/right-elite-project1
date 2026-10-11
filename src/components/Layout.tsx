import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const navItems = [
  ['About', '/about'],
  ['Services', '/services'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Right Elite home">
          <img src="/assets/logo.png" alt="Right Elite Retail Pvt. Ltd." />
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={open ? 'primary-nav is-open' : 'primary-nav'}>
          {navItems.map(([label, to]) => (
            <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
              {label}
            </NavLink>
          ))}
          <Link className="button button-small quote-nav" to="/contact">GET A QUOTE</Link>
        </nav>
      </div>
    </header>
  )
}

type HeroProps = {
  eyebrow?: string
  title: ReactNode
  text: string
  cta: string
  ctaTo: string
  image?: string
  home?: boolean
}

export function Hero({ eyebrow, title, text, cta, ctaTo, image = '/assets/inner-hero.png', home = false }: HeroProps) {
  return (
    <section className={home ? 'hero hero-home' : 'hero'}>
      <img className="hero-image" src={image} alt="Premium Right Elite interior" />
      <div className="hero-shade" />
      <Header />
      <div className="hero-content page-shell">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <div className="gold-rule" />
        <p className="hero-copy">{text}</p>
        <Link className="button" to={ctaTo}>{cta}<Arrow /></Link>
      </div>
    </section>
  )
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true"><span /></span>
}

export function SectionTitle({ eyebrow, title, centered = false }: { eyebrow: string; title: ReactNode; centered?: boolean }) {
  return (
    <div className={centered ? 'section-title centered' : 'section-title'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <div className="gold-rule" />
    </div>
  )
}

export function CtaBand({ text = "From corporate offices to retail spaces and branded environments, we're ready to bring your vision to life." }: { text?: string }) {
  return (
    <section className="cta-band">
      <div className="page-shell cta-grid">
        <h2>Let's Build Something Exceptional <span>Together.</span></h2>
        <p>{text}</p>
        <Link className="button button-gold" to="/contact">Get a Free Consultation<Arrow /></Link>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-grid">
        <div className="footer-brand">
          <img src="/assets/logo.png" alt="Right Elite Retail Pvt. Ltd." />
          <p>Creating premium corporate interiors and retail environments with precision, innovation, and seamless execution across India.</p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/projects">Projects</Link><Link to="/contact">Contact</Link>
        </div>
        <div>
          <h3>Services</h3>
          <Link to="/services">Corporate Interiors</Link><Link to="/services">Commercial Fit-outs</Link><Link to="/services">Visual Merchandising</Link><Link to="/services">Manufacturing</Link><Link to="/services">Project Management</Link>
        </div>
        <div className="footer-contact">
          <h3>Contact</h3>
          <p><strong>Factory Address:</strong><br />Gala No. 2, New Mamta Industrial Estate, Kaman Road, Naigaon - East</p>
          <p><strong>Reg Address:</strong><br />D-4, Plot No. 236, Sagar Darshan CHSL, Gorai-2, Borivali - West</p>
          <div className="contact-inline"><a href="mailto:info@rightelite.in">info@rightelite.in</a><a href="tel:+917506045459">7506045459</a></div>
        </div>
      </div>
      <div className="page-shell footer-bottom"><span>© 2026 Right Elite Retail Pvt. Ltd. All Rights Reserved.</span><span>Privacy Policy | Terms & Conditions</span></div>
    </footer>
  )
}

export function PageEnd({ ctaText }: { ctaText?: string }) {
  return <><CtaBand text={ctaText} /><Footer /></>
}
