import { useTypewriter } from '../hooks/useTypewriter';

const texts = ['AI Enthusiast', 'Data Scientist', 'AI/ML Engineer', 'Blockchain Explorer'];

export default function Hero() {
  const typedText = useTypewriter(texts);

  const handleScroll = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="fade-in">Fabiano Salmaen Intama</h1>
          <p className="tagline">
            <span className="typewriter-text">{typedText}</span>
            <span className="cursor">&nbsp;</span>
          </p>
          <a href="#projects" className="cta-button fade-in" onClick={(e) => handleScroll(e, '#projects')}>
            View My Projects
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <a href="#about" onClick={(e) => handleScroll(e, '#about')}>
          <span></span>
        </a>
      </div>
    </section>
  );
}