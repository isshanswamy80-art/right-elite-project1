import { Link } from 'react-router-dom'
import { Arrow, Hero, PageEnd, SectionTitle } from '../components/Layout'
import { projects } from '../data'

const brands = ['amazon easy', 'CASHIFY', 'AVAADA', 'Vakrangee', 'ANCHOR', 'ADVENT']
const stats = [
  ['100+', 'Projects Delivered'],
  ['Pan India', 'Execution'],
  ['End-to-End', 'Solutions'],
  ['Premium', 'Workmanship'],
]

const expertise = [
  ['Corporate Interiors', 'Thoughtfully designed workspaces that enhance functionality and brand identity.'],
  ['Visual Merchandising', 'Engaging retail environments that enhance customer experience and product visibility.'],
  ['Manufacturing', 'Custom furniture and display solutions built with precision and quality.'],
  ['Turnkey Execution', 'From planning to handover, we ensure smooth and timely project delivery.'],
]

export default function HomePage() {
  return (
    <main>
      <Hero
        home
        image="/assets/home-hero.png"
        title={<>Transforming Workspaces &amp;<br />Retail Experiences.</>}
        text="Right Elite Retail Pvt. Ltd. delivers premium corporate interiors, commercial fit-outs, visual merchandising, and turnkey execution solutions that bring brands and spaces to life."
        cta="Explore Projects"
        ctaTo="/projects"
      />

      <section className="brands-section page-shell">
        <div className="brands-label">Trusted by<br />Leading Brands</div>
        <div className="brand-list">{brands.map((brand) => <span key={brand}>{brand}</span>)}</div>
      </section>

      <section className="stats page-shell">
        {stats.map(([value, label]) => <div className="stat" key={value}><strong>{value}</strong><span>{label}</span></div>)}
      </section>

      <section className="intro-split page-shell section-pad">
        <div className="media-frame"><img src="/assets/about-preview.png" alt="Completed premium office interior" /></div>
        <div className="intro-copy">
          <SectionTitle eyebrow="WHO WE ARE" title={<>Creating Spaces That Reflect Vision,<br />Function &amp; Excellence.</>} />
          <p>Right Elite Retail Pvt. Ltd. delivers corporate interiors, commercial fit-outs, visual merchandising, and custom execution solutions. From concept to completion, we create spaces that are functional, engaging, and built around each brand's needs.</p>
          <Link className="button button-light" to="/about">Learn More About Us<Arrow /></Link>
        </div>
      </section>

      <section className="expertise-band">
        <div className="page-shell expertise-grid">
          <div className="expertise-lead">
            <SectionTitle eyebrow="OUR EXPERTISE" title={<>Integrated Solutions.<br />Seamless Execution.</>} />
            <p>Our expertise combines thoughtful design, precision manufacturing, and reliable execution to create impactful workspaces and retail environments.</p>
          </div>
          {expertise.map(([title, description], index) => (
            <article className="expertise-item" key={title}>
              <span className="service-mark">0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="page-shell projects-section section-pad">
        <SectionTitle eyebrow="FEATURED PROJECTS" title="Spaces we’re proud to deliver." />
        <div className="project-grid">
          {projects.map((project) => (
            <Link to="/projects" className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <span className="project-scrim" />
              <div><small>{project.category}</small><h3>{project.title}</h3></div>
            </Link>
          ))}
        </div>
      </section>

      <PageEnd />
    </main>
  )
}
