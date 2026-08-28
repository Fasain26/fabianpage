import { contactLinks } from '../data/portfolioData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [ref, visible] = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className={`content-section${visible ? ' visible' : ''}`}>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious
          vision. Feel free to reach out.
        </p>
        <div className="contact-links">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              className="contact-button"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}