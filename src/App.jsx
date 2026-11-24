import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, Camera, Check, Code2, ExternalLink, Github, GraduationCap, Mail, Menu, Mic2, X } from 'lucide-react'
import { certificate, education, interests, profile, projects, skillGroups } from './data/portfolio.js'

const navItems = [['About', 'about'], ['Education', 'education'], ['Skills', 'skills'], ['Projects', 'projects'], ['Contact', 'contact']]
const rotatingWords = ['curious by nature', 'learning by building', 'thinking in systems']

function useAssetExists(path, expectedType) {
  const [exists, setExists] = useState(false)
  useEffect(() => {
    let active = true
    fetch(path, { method: 'HEAD' }).then((response) => {
      const contentType = response.headers.get('content-type') || ''
      if (active) setExists(response.ok && contentType.includes(expectedType))
    }).catch(() => {})
    return () => { active = false }
  }, [path, expectedType])
  return exists
}

function useReveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      nodes.forEach((node) => node.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><a className="brand" href="#home" aria-label="Shubhi Awasthi, home"><span className="brand-mark">SA</span><span>Shubhi Awasthi<span className="brand-dot">.</span></span></a>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Say hello <ArrowUpRight size={15} /></a></nav>
  </header>
}

function SectionHeading({ eyebrow, title, children }) {
  return <div className="section-heading" data-reveal><span className="eyebrow"><i />{eyebrow}</span><h2>{title}</h2>{children && <p>{children}</p>}</div>
}

function Hero() {
  const photoExists = useAssetExists('/images/shubhi-profile.jpg', 'image/jpeg')
  const [word, setWord] = useState(0)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const timer = window.setInterval(() => setWord((current) => (current + 1) % rotatingWords.length), 3200)
    return () => window.clearInterval(timer)
  }, [])
  return <section className="hero wrap" id="home">
    <div className="hero-copy"><span className="hero-kicker"><span className="status-dot" /> OPEN TO LEARNING & COLLABORATION</span><p className="hero-pretitle">Hello, I'm</p><h1>{profile.name}<span className="title-period">.</span></h1>
      <p className="hero-title">Emerging Computer Science Engineer <span>&amp; Software Developer</span></p>
      <p className="hero-intro">{profile.intro}</p><p className="rotating-line" aria-live="polite"><span className="rotate-caret">↳</span> <span key={word} className="rotating-word">{rotatingWords[word]}</span></p>
      <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowDown size={16} /></a><a className="button button-outline" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
      <div className="hero-location"><GraduationCap size={16} /><span>{profile.university}</span><b>·</b><span>B.Tech CSE <em>’30</em></span></div>
    </div>
    <div className="hero-visual" aria-label="Profile portrait area"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="portrait-frame">{photoExists ? <img src="/images/shubhi-profile.jpg" alt="Portrait of Shubhi Awasthi" fetchPriority="high" /> : <div className="portrait-placeholder"><span>SA</span><small>PORTRAIT</small></div>}<span className="portrait-caption">BASED IN MATHURA, INDIA</span></div><div className="visual-note"><span className="note-spark">✳</span><span>Ideas into<br />possibility</span></div><div className="hero-index">01 <span>/</span> 09</div></div>
    <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
  </section>
}

function About() {
  return <section className="section wrap about-section" id="about"><SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Learning with <span>intention.</span></>}><>{profile.about}</></SectionHeading><div className="about-aside" data-reveal><div className="about-index">01 <span>—</span> ABOUT</div><p>Always ready to learn. Innovative in my thinking. Focused on solving problems efficiently.</p><div className="about-stamp"><span>GLA</span><small>UNIVERSITY<br />MATHURA</small></div></div></section>
}

function Education() {
  return <section className="section education-section" id="education"><div className="wrap"><SectionHeading eyebrow="THE LEARNING JOURNEY" title={<>Education<span>.</span></>}><>Building a strong foundation, one step at a time.</></SectionHeading><div className="education-list">{education.map((item, index) => <article className={`education-card ${item.current ? 'current' : ''}`} key={item.title} data-reveal><span className="education-count">0{index + 1}</span><div className="education-main"><span className="education-level">{item.level}</span><h3>{item.title}<span>{item.field && ` · ${item.field}`}</span></h3><p>{item.institution}</p>{item.note && <span className="education-note">{item.note}</span>}</div><span className="education-year">{item.date}</span></article>)}</div></div></section>
}

function Skills() {
  return <section className="section wrap" id="skills"><SectionHeading eyebrow="WHAT I'M EXPLORING" title={<>Tools & <span>interests.</span></>}><>A growing toolkit across programming, the web, and the ideas behind them.</></SectionHeading><div className="skills-grid">{skillGroups.map((group, index) => <article className="skill-card" key={group.title} data-reveal><div className="skill-card-top"><span className="skill-icon">{index === 0 ? <Code2 size={19} /> : index === 1 ? <ArrowRight size={19} /> : <BookOpen size={19} />}</span><span className="skill-number">0{index + 1}</span></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section>
}

function Projects() {
  return <section className="section projects-section" id="projects"><div className="wrap"><SectionHeading eyebrow="SELECTED WORK" title={<>Projects<span>.</span></>}><>A space for experiments, ideas, and things made along the way.</></SectionHeading>
    {projects.length ? <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}><h3>{project.title}</h3><p>{project.description}</p></article>)}</div> : <div className="empty-project" data-reveal><div className="empty-art" aria-hidden="true"><span className="art-square"/><span className="art-ring"/><span className="art-cross">✳</span><span className="art-line"/></div><div className="empty-copy"><span className="eyebrow"><i /> IN THE MAKING</span><h3>Good things take<br /><span>a little curiosity.</span></h3><p>I'm building and exploring new ideas. Projects will appear here as I turn what I learn into practical work.</p><span className="coming-soon"><span /> Coming soon</span></div><span className="empty-index">WORK / 001</span></div>}</div></section>
}

function Certification() {
  const certificateExists = useAssetExists(certificate.file, 'application/pdf')
  return <section className="section wrap certification-section" id="certifications"><SectionHeading eyebrow="A MILESTONE" title={<>Certification<span>.</span></>}><>A learning milestone in full stack development.</></SectionHeading><article className="certificate-card" data-reveal><div className="certificate-left"><span className="certificate-seal"><Check size={20} /></span><span className="certificate-label">CERTIFICATE OF EXCELLENCE</span><h3>{certificate.program}</h3><p>Presented through the {certificate.organizer}</p><div className="partner-list">{certificate.partners.map((partner) => <span key={partner}>{partner}</span>)}</div></div><div className="certificate-right"><span className="certificate-overline">RECOGNITION</span><p>{certificate.note}</p><div className="signatory-list">{certificate.signatories.map((signatory) => <span key={signatory}>{signatory}</span>)}</div>{certificateExists && <a className="certificate-link" href={certificate.file} target="_blank" rel="noreferrer">View certificate <ExternalLink size={15} /></a>}</div><span className="certificate-watermark" aria-hidden="true">✳</span></article></section>
}

function Interests() {
  const icons = [<BookOpen size={18} />, <Camera size={18} />, <Mic2 size={18} />]
  return <section className="interests-section"><div className="wrap interests-inner"><div><span className="eyebrow"><i /> OUTSIDE THE SCREEN</span><h2>Curiosity has<br /><span>many forms.</span></h2></div><div className="interest-list">{interests.map((interest, index) => <div className="interest-item" key={interest}><span className="interest-icon">{icons[index]}</span><span>{interest}</span><span className="interest-index">0{index + 1}</span></div>)}</div></div></section>
}

function Contact() {
  const [formMessage, setFormMessage] = useState('')
  function submitContact(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio message from ${data.get('name')}`)
    const body = encodeURIComponent(`Hi Shubhi,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nReply to: ${data.get('email')}`)
    setFormMessage('Your email app is opening with the message details.')
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }
  return <section className="section contact-section" id="contact"><div className="wrap"><SectionHeading eyebrow="LET'S CONNECT" title={<>Have a thought?<br /><span>Say hello.</span></>}><>For a conversation, a question, or just to connect — my inbox is open.</></SectionHeading><div className="contact-grid"><div className="contact-details" data-reveal><a className="email-link" href={`mailto:${profile.email}`}><span className="contact-icon"><Mail size={18} /></span><span><small>EMAIL ME</small>{profile.email}</span><ArrowUpRight size={18} /></a><a className="social-link" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /><span>GitHub</span><ArrowUpRight size={15} /></a><a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-icon">in</span><span>LinkedIn</span><ArrowUpRight size={15} /></a></div><form className="contact-form" onSubmit={submitContact} data-reveal><div className="form-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Name" /></label><label>Your email<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label></div><label>Your message<textarea name="message" rows="4" required minLength="10" placeholder="What's on your mind?" /></label><div className="form-submit-row"><button className="button button-dark" type="submit">Open email app <ArrowUpRight size={16} /></button><span>This opens your email app. No message is stored here.</span></div>{formMessage && <p className="form-message" role="status">{formMessage}</p>}</form></div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">SA</span><span>Shubhi Awasthi<span className="brand-dot">.</span></span></a><span>Learning, making, and figuring it out.</span><a href="#home" className="back-top">BACK TO TOP ↑</a><small>© {new Date().getFullYear()} SHUBHI AWASTHI</small></div></footer>
}

export default function App() {
  useReveal()
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar /><main id="main"><Hero /><div className="section-rule wrap"/><About /><Education /><Skills /><Projects /><Certification /><Interests /><Contact /></main><Footer /></>
}
