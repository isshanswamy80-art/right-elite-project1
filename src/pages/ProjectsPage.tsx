import { Hero, PageEnd, SectionTitle } from '../components/Layout'
import { projects } from '../data'

export default function ProjectsPage() {
  return (
    <main>
      <Hero
        eyebrow="OUR PROJECTS"
        title={<>Spaces Built to Perform.<br />Designed to Inspire.</>}
        text="Explore workplace and retail environments delivered with thoughtful design, premium workmanship, and seamless on-site execution."
        cta="View Projects"
        ctaTo="#project-list"
      />
      <section id="project-list" className="projects-page page-shell section-pad">
        <SectionTitle eyebrow="FEATURED PROJECTS" title="Selected work across offices, retail and branded spaces." />
        <div className="project-grid project-grid-large">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />
              <span className="project-scrim" />
              <div><small>{project.category}</small><h3>{project.title}</h3><span className="project-number">0{index + 1}</span></div>
            </article>
          ))}
        </div>
      </section>
      <PageEnd />
    </main>
  )
}
