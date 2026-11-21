import { useEffect, useRef, useState } from 'react';
import { useTypewriter } from './hooks/useTypewriter';
import { skills, skillGroups, certifications, experience, projects, contactLinks, education, tech } from './data/portfolioData';

const roles = ['AI Enthusiast', 'Data Scientist', 'AI/ML Engineer', 'Blockchain Explorer'];
const chapters = ['Teaching code to kids', '7,000+ records, one question', 'Sensors that talk back', 'Turning data into decisions'];
const img = (p) => encodeURI(p);

function Reveal({ children, className = '', as: T = 'div', ...rest }) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), o.disconnect()), { threshold: 0.15 });
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return <T ref={ref} className={`rv ${on ? 'in' : ''} ${className}`} {...rest}>{children}</T>;
}

function Count({ to, suffix = '' }) {
  const ref = useRef(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      o.disconnect();
      const t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / 1400, 1);
        setN(Math.round(to * (1 - Math.pow(1 - k, 3))));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    o.observe(ref.current);
    return () => o.disconnect();
  }, [to]);
  return <strong ref={ref}>{n.toLocaleString()}{suffix}</strong>;
}

function Boot({ done, onSkip }) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setP((v) => Math.min(v + 2, 100)), 70);
    return () => clearInterval(id);
  }, []);
  const ch = Math.min(Math.floor(p / 25), 3);
  return (
    <div className={`boot ${done ? 'done' : ''}`} style={{ '--p': p + '%' }}>
      <span className="ch">CH.0{ch + 1} / 04 · booting fabiano.exe · {p}%</span>
      <h2 key={ch} style={{ animation: 'up2 .5s' }}>{chapters[ch]}</h2>
      <div className="bar"><i /></div>
      <button onClick={onSkip}>Skip the story ↓</button>
    </div>
  );
}

function Simulator() {
  const [f, setF] = useState({ tenure: 6, charge: 85, contract: 'Month-to-month', support: false });
  const [step, setStep] = useState(-1);
  const [risk, setRisk] = useState(null);
  const [log, setLog] = useState(['Set a customer profile, then run the pipeline.']);
  const hops = ['Raw data', 'Cleaning', 'Features', 'Model', 'Risk score'];
  const logs = ['Loaded customer row', 'Handled missing values, encoded categories', 'Built tenure and contract features', 'Logistic model scored the profile', 'Risk ready'];
  const calc = () => {
    const c = { 'Month-to-month': 1.5, 'One year': 0.1, 'Two year': -1.3 }[f.contract];
    const z = -0.9 + c - 0.045 * f.tenure + 0.022 * (f.charge - 65) + (f.support ? -0.6 : 0.5);
    return Math.round((100 / (1 + Math.exp(-z))));
  };
  const run = () => {
    if (step >= 0 && step < 4) return;
    setRisk(null); setLog([]);
    hops.forEach((_, i) => setTimeout(() => {
      setStep(i); setLog((l) => [`> ${logs[i]}`, ...l].slice(0, 6));
      if (i === 4) setRisk(calc());
    }, i * 600));
  };
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.type === 'range' ? +e.target.value : e.target.value });
  const tone = risk === null ? '' : risk > 60 ? 'High risk' : risk > 35 ? 'Watch closely' : 'Likely to stay';
  return (
    <Reveal className="sim">
      <div className="card ctl">
        <span className="mono">Customer profile</span>
        <label>Tenure <b>{f.tenure} months</b></label><input type="range" min="1" max="72" value={f.tenure} onChange={set('tenure')} />
        <label>Monthly charge <b>${f.charge}</b></label><input type="range" min="20" max="120" value={f.charge} onChange={set('charge')} />
        <label>Contract</label>
        <select value={f.contract} onChange={set('contract')}><option>Month-to-month</option><option>One year</option><option>Two year</option></select>
        <label className="chk"><input type="checkbox" checked={f.support} onChange={set('support')} /> Has tech support</label>
        <button className="btn p run" onClick={run}>Run pipeline</button>
      </div>
      <div className="card">
        <span className="mono">Pipeline</span>
        <div className="hops">{hops.map((h, i) => <span key={h} className={`hop ${i <= step ? 'on' : ''}`}>{h}</span>)}</div>
        <div className="meter" style={{ '--r': (risk ?? 0) + '%' }}><i /></div>
        <div className="score">{risk === null ? '--' : risk + '%'}</div>
        <span className="mono">{tone || 'Churn risk'}</span>
        <div className="log">{log.map((l, i) => <div key={l + i}>{l}</div>)}</div>
        <p className="mono" style={{ marginTop: 10 }}>Simulated with illustrative weights, not my trained model.</p>
      </div>
    </Reveal>
  );
}

export default function App() {
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rail = useRef(null);
  const role = useTypewriter(roles);
  const api = `{\n  "name": "Fabiano Salmaen Intama",\n  "major": "Computer Science",\n  "focus": ["Data", "AI/ML"],\n  "school": "Binus University",\n  "status": "open to work"\n}`;
  const [typed, setTyped] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 3700);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!ready) return;
    let i = 0;
    const id = setInterval(() => { i += 2; setTyped(api.slice(0, i)); if (i >= api.length) clearInterval(id); }, 24);
    return () => clearInterval(id);
  }, [ready]);
  useEffect(() => {
    const move = (e) => document.documentElement.style.setProperty('--x', e.clientX + 'px') || document.documentElement.style.setProperty('--y', e.clientY + 'px');
    const sc = () => {
      setScrolled(scrollY > 40);
      const h = document.documentElement;
      h.style.setProperty('--p', (scrollY / (h.scrollHeight - innerHeight)) * 100 + '%');
    };
    addEventListener('mousemove', move); addEventListener('scroll', sc);
    return () => { removeEventListener('mousemove', move); removeEventListener('scroll', sc); };
  }, []);
  useEffect(() => {
    const el = rail.current;
    const fx = () => {
      const mid = el.scrollLeft + el.clientWidth / 2;
      [...el.children].forEach((c) => {
        const d = Math.min(Math.abs(c.offsetLeft + c.offsetWidth / 2 - mid) / el.clientWidth, 1);
        c.style.setProperty('--s', 1 - d * 0.1); c.style.setProperty('--o', 1 - d * 0.45);
      });
    };
    fx(); el.addEventListener('scroll', fx, { passive: true }); addEventListener('resize', fx);
    return () => { el.removeEventListener('scroll', fx); removeEventListener('resize', fx); };
  }, []);

  const months = 12;
  const nav = ['home', 'about', 'experience', 'work', 'simulator', 'skills', 'certifications', 'contact'];
  const doneCode = typed.split('\n');

  return (
    <>
      <div className="prog" /><div className="glow" />
      <Boot done={ready} onSkip={() => setReady(true)} />
      <nav className={scrolled ? 's' : ''}>
        <div className="wrap">
          <a href="#home" className="logo">fabiano<b>.</b>dev</a>
          <ul>{nav.slice(1).map((n) => <li key={n}><a href={`#${n}`}>{n[0].toUpperCase() + n.slice(1)}</a></li>)}</ul>
        </div>
      </nav>

      <main>
        <section id="home">
          <div className="wrap hero-grid">
            <div>
              <span className="pill mono"><i className="dot" /> Open to new opportunities</span>
              {ready && <h1><span><i>Fabiano</i></span><span><i>Salmaen</i></span><span><i>Intama</i></span></h1>}
              <p className="role">{role}<span className="cur" /></p>
              <p className="lead">I turn raw data into decisions: churn models, IoT sensors and tools that help students team up.</p>
              <div className="btns">
                <a className="btn p" href="#work">View my projects</a>
                <a className="btn" href="#contact">Get in touch</a>
              </div>
            </div>
            <div className="code" aria-hidden="true">
              <span className="h">GET /v1/fabiano → 200 OK</span>
              {doneCode.map((l, i) => <div key={i}>{l.replace(/"([^"]+)":/, '<k>$1</k>:').split(/<k>|<\/k>/).map((s, j) => (j === 1 ? <span className="k" key={j}>"{s}"</span> : <span className={l.includes(':') && j === 2 ? 'v' : ''} key={j}>{s}</span>))}</div>)}
              <span className="cur" />
            </div>
          </div>
        </section>

        <div className="mq" aria-hidden="true"><div>{[...tech, ...tech, ...tech, ...tech].map((t, i) => <span key={i}><b>✳</b> {t}</span>)}</div></div>

        <section id="about">
          <div className="wrap about">
            <Reveal className="photo"><span className="scan" /><img src={img('/images/ProfPic.jpeg')} alt="Fabiano Salmaen Intama" /></Reveal>
            <Reveal>
              <span className="mono">About</span>
              <h2>Where data meets AI.</h2>
              <p>Data and AI are where my curiosity keeps landing: finding the pattern inside the noise, then turning it into something people can act on. I build analytical pipelines and machine learning models to solve real problems, and I learn best by shipping, whether that means predicting customer churn or teaching a classroom to code.</p>
              <p style={{ marginTop: 14 }}>{education.degree} at {education.school}, {education.focus}. {education.period}.</p>
            </Reveal>
          </div>
          <div className="wrap">
            <Reveal className="stats">
              <div><Count to={7000} suffix="+" /><span className="mono">customer records analysed</span></div>
              <div><Count to={1} /><span className="mono">IEEE Published Paper</span></div>
              <div><Count to={skills.length} /><span className="mono">core skills</span></div>
              <div><Count to={months} /><span className="mono">months teaching code</span></div>
            </Reveal>
          </div>
        </section>

        <section id="experience">
          <div className="wrap">
            <Reveal><span className="mono">Experience</span><h2>Career log</h2></Reveal>
            {experience.map((x) => (
              <Reveal key={x.title}>
                <div className="axis mono"><span>2025</span><span>2026</span></div>
                <div className="track"><i style={{ '--l': '0%', '--w': '100%' }} /></div>
                <div className="card">
                  <span className="mono">{x.company} · {x.period}</span>
                  <h3>{x.title}</h3>
                  <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="work" style={{ paddingInline: 0 }}>
          <div className="wrap"><Reveal><span className="mono">Work</span><h2>Selected projects</h2><p className="lead">Scroll sideways. The project in the middle comes into focus.</p></Reveal></div>
          <div className="rail" ref={rail}>
            {projects.map((p) => (
              <article className="pj" key={p.title}>
                <div className="im"><img src={img(p.image)} alt={p.title} loading="lazy" /></div>
                <div className="b">
                  <h3>{p.title}</h3><p>{p.description}</p>
                  <div className="l">{p.links.map((l) => <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="simulator">
          <div className="wrap">
            <Reveal><span className="mono">Simulator</span><h2>Predict a churn, step by step</h2><p className="lead">The idea behind my churn project, made playable. Change a customer and watch it move through the pipeline.</p></Reveal>
            <Simulator />
          </div>
        </section>

        <section id="skills">
          <div className="wrap">
            <Reveal><span className="mono">Skills</span><h2>What I bring</h2></Reveal>
            {skillGroups.map((g) => (
              <Reveal key={g.title}>
                <h3 className="grp">{g.title}</h3>
                <div className="mods">{g.items.map((s) => <div className="mod" key={s}>{s}</div>)}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="certifications">
          <div className="wrap">
            <Reveal><span className="mono">Certifications</span><h2>Credentials</h2></Reveal>
            <Reveal className="certs">
              {certifications.map((c) => (
                <div className="card" key={c.title}>
                  <span className="mono">{c.issuer} · {c.year}</span>
                  <h3>{c.title}</h3>
                  {c.url && <a className="lnk" href={c.url} target="_blank" rel="noopener noreferrer">View credential ↗</a>}
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <Reveal>
              <span className="mono">Contact</span>
              <p className="big">Let's build something with data.</p>
              <p className="lead" style={{ marginTop: 18 }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.</p>
              <div className="links">{contactLinks.map((l) => <a key={l.label} href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{l.label}</a>)}</div>
            </Reveal>
          </div>
        </section>
      </main>
      <footer><div className="wrap mono">© {new Date().getFullYear()} Fabiano Salmaen Intama. All rights reserved.</div></footer>
    </>
  );
}
