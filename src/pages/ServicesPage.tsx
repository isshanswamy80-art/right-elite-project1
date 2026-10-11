import { Hero, PageEnd, SectionTitle } from '../components/Layout'
import { projectPromises, services } from '../data'

const industries = ['Corporate Offices', 'Retail', 'Hospitality', 'Healthcare', 'Education', 'Banking & Finance', 'Residential']

export default function ServicesPage() {
  return (
    <main>
      <Hero
        eyebrow="ABOUT RIGHT ELITE"
        title={<>Designing Spaces.<br />Elevating Brands.</>}
        text="Right Elite Retail Pvt. Ltd. delivers corporate interiors, commercial fit-outs, visual merchandising, and turnkey execution solutions that bring spaces and brands to life."
        cta="Explore Our Services"
        ctaTo="#services"
      />

      <section id="services" className="services-intro page-shell section-pad">
        <SectionTitle centered eyebrow="WHAT WE DO" title={<>Designed Around<br />Your Business Needs.</>} />
        <p>From corporate workplaces to retail environments, we provide integrated solutions that combine design, manufacturing, visual merchandising, and execution.</p>
        <div className="service-index">{services.map((service, index) => <div key={service.title}><b>0{index + 1}</b><span>{service.title}</span></div>)}</div>
      </section>

      <section className="service-rows">
        {services.map((service, index) => (
          <article className={index % 2 ? 'service-row reverse' : 'service-row'} key={service.title}>
            <div className="service-image"><img src={service.image} alt={service.title} /></div>
            <div className="service-copy"><span className="service-number">0{index + 1}</span><h2>{service.title}</h2><div className="gold-rule" /><p>{service.description}</p><h3>Services Include:</h3><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div>
          </article>
        ))}
      </section>

      <section className="industries page-shell section-pad">
        <SectionTitle centered eyebrow="INDUSTRIES WE SERVE" title="Built for the way your business works." />
        <div className="industry-grid">{industries.map((industry, i) => <div key={industry}><span>{String(i + 1).padStart(2, '0')}</span><p>{industry}</p></div>)}</div>
      </section>

      <section className="promise-band">
        <div className="page-shell">
          <SectionTitle centered eyebrow="EVERY PROJECT INCLUDES" title="A dependable delivery standard." />
          <div className="promise-grid">{projectPromises.map(([title, text], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </section>

      <PageEnd ctaText="Whether it's a workplace, retail environment, or branded experience, we're ready to bring your vision to life." />
    </main>
  )
}
