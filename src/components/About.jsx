import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const [sectionRef, sectionVisible] = useScrollAnimation();
  const [photoRef, photoVisible] = useScrollAnimation();

  return (
    <section id="about" ref={sectionRef} className={`content-section${sectionVisible ? ' visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div
            ref={photoRef}
            className={`profile-photo-placeholder slide-up${photoVisible ? ' visible' : ''}`}
          ></div>
          <p>
            I am a passionate and detail-oriented analyst with a deep fascination for the intersections of data,
            blockchain technology, and artificial intelligence. My goal is to leverage data-driven insights to solve
            complex problems and drive innovation. I thrive in dynamic environments where I can continuously learn
            and apply new skills to create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}