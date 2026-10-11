import { Hero, PageEnd, SectionTitle } from '../components/Layout'

const contactDetails = [
  ['ADDRESS:', 'Gala No 4, Jadhav Wadi, Nadeem Ind. Est., Kaman Bhiwandi Road, Naigaon (E), 401208'],
  ['PHONE:', '+91 75060 45459'],
  ['E-MAIL:', 'info@rightelite.in'],
  ['BUSINESS HOURS:', 'Monday - Saturday\n10:00 AM - 7:00 PM'],
]

export default function ContactPage() {
  return (
    <main>
      <Hero
        eyebrow="CONTACT US"
        title={<>Let's Build Something<br />Exceptional Together.</>}
        text="Whether you're planning a corporate office, retail environment, commercial fit-out, or residential interior, our team is ready to bring your vision to life."
        cta="Get a Quote"
        ctaTo="#contact-details"
      />
      <section id="contact-details" className="contact-section page-shell section-pad">
        <div className="contact-copy">
          <SectionTitle eyebrow="GET IN TOUCH" title={<>We'd love to hear<br />about your project.</>} />
          <p>Get in touch with our team for consultations, project inquiries or partnership opportunities.</p>
          <div className="contact-list">
            {contactDetails.map(([label, value], index) => (
              <div key={label}><span className="contact-icon">0{index + 1}</span><p><strong>{label}</strong><br />{value.split('\n').map((line) => <span key={line}>{line}<br /></span>)}</p></div>
            ))}
          </div>
          <div className="contact-actions"><a className="button button-dark" href="mailto:info@rightelite.in">Email Us</a><a className="button button-light" href="tel:+917506045459">Call Now</a></div>
        </div>
        <div className="contact-image"><img src="/assets/contact-meeting.png" alt="Right Elite meeting room interior" /></div>
      </section>
      <PageEnd ctaText="Ready to transform your space? Let's build something exceptional together." />
    </main>
  )
}
