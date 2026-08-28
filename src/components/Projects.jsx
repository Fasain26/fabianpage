import { projects } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Projects() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="projects" ref={ref} className={`content-section${visible ? ' visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div
                className="project-image-placeholder"
                style={{ backgroundImage: `url('${project.image}')` }}
              ></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}