import { experience } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Experience() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="experience" ref={ref} className={`content-section${visible ? ' visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="experience-timeline">
          {experience.map((item) => (
            <div className="timeline-item" key={item.title}>
              <h3>{item.title}</h3>
              <p className="timeline-period">
                {item.company} | {item.period}
              </p>
              <ul>
                {item.points.map((point, idx) => (
                  <li key={idx}>- {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}