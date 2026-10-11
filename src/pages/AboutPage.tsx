import { Hero, PageEnd, SectionTitle } from '../components/Layout'
import { processSteps } from '../data'

const reasons = ['End-to-End Project Execution', 'Premium Craftsmanship', 'Experienced Team', 'Pan-India Delivery', 'On-Time Completion']

export default function AboutPage() {
  return (
    <main>
      <Hero
        eyebrow="ABOUT RIGHT ELITE"
        title={<>Building Workspaces.<br />Creating Brand Experiences.</>}
        text="Right Elite Retail Pvt. Ltd. delivers premium corporate interiors, commercial fit-outs, visual merchandising, and execution solutions that bring spaces and brands to life."
        cta="Discover Our Story"
        ctaTo="#story"
      />

      <section id="story" className="story-section page-shell section-pad">
        <div>
          <SectionTitle eyebrow="OUR STORY" title={<>Driven by Quality.<br />Defined by Execution.</>} />
          <p>Right Elite brings together design, manufacturing, and execution to deliver premium spaces with precision and reliability. From corporate workplaces to retail environments and branded displays, we manage every stage with care, quality, and accountability.</p>
        </div>
        <div className="media-frame wide"><img src="/assets/contact-meeting.png" alt="Right Elite corporate interior" /></div>
      </section>

      <section className="mission-band">
        <div className="page-shell mission-grid">
          <article><span className="mission-icon">◎</span><div><h3>Our Mission</h3><p>To create inspiring business spaces and retail experiences through thoughtful design, quality craftsmanship, and reliable execution.</p></div></article>
          <article><span className="mission-icon">◉</span><div><h3>Our Vision</h3><p>To be a trusted partner for corporate and retail environments, recognized for excellence, integrity, and innovation.</p></div></article>
        </div>
      </section>

      <section className="about-process page-shell section-pad">
        <div className="reasons">
          <SectionTitle eyebrow="WHY RIGHT ELITE" title="Why Businesses Choose Us." />
          <ul>{reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul>
        </div>
        <div className="process-panel">
          <SectionTitle eyebrow="OUR PROCESS" title="From Vision to Reality" />
          <div className="process-grid">
            {processSteps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}
          </div>
        </div>
      </section>

      <PageEnd ctaText="Share your vision with us and let's create spaces that inspire and make an impact." />
    </main>
  )
}
