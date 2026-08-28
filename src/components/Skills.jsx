import { skills } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="skills" ref={ref} className={`content-section${visible ? ' visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill}>{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}