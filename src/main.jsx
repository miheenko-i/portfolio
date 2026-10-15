import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { productCases, caseFromHash } from './cases.js'
import { CaseStudy, CaseImage } from './CaseStudy.jsx'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const experience = [
  {
    role: 'Product and Web Designer',
    company: 'EverWorker',
    logo: 'EW',
    period: 'Started in 2022',
    employment: 'Full-time remote',
    text:
      'Designed the first interface version for the existing platform from 2022 and the second version’s new design, including canvas and chat experiences. Contributed logic to the third version; another studio created its visual design. Also worked on web experiences and implementation support.',
  },
  {
    role: 'Design Team Lead',
    company: 'Simplenight',
    logo: 'SN',
    period: '2025 - 2026',
    employment: 'Full-time remote',
    text:
      'Designed travel technology experiences, white label booking flows, dashboards, partner platforms, sales decks, one pagers, booth graphics and event materials.',
  },
  {
    role: 'Media Design Lead',
    company: 'ISDK',
    logo: 'IS',
    period: '2022 - 2026',
    employment: 'Full-time remote',
    text:
      'Led UI, presentation, web and marketing design work. Implemented Agile design workflow and developed a style guide to standardize company materials.',
  },
  {
    role: 'Senior Graphic Designer',
    company: 'McKinsey & Company',
    logo: 'M',
    period: '2019 - 2022',
    employment: 'Full-time office',
    text:
      'Created UI and UX for web and mobile applications, print materials, executive presentations, dashboard visuals and workshop materials.',
  },
  {
    role: 'Senior Lead Designer',
    company: 'Golbex',
    logo: 'G',
    period: '2017 - 2018',
    employment: 'Full-time remote',
    text:
      'Designed brand identities, corporate websites, promotional graphics, advertising materials and UI for cryptocurrency exchange products across web, iOS and Android.',
  },
]

const skillGroups = [
  { title: 'Product & UX', items: ['Complex workflows', 'User journeys and scenarios', 'UX audits', 'Customer interviews', 'Interaction design'] },
  { title: 'UI & Design Systems', items: ['Product UI', 'Design systems', 'Responsive web design', 'Dashboards', 'Visual communication'] },
  { title: 'AI & Prototyping', items: ['Conversational AI', 'AI agent workflows', 'Interactive prototypes', 'Product demos', 'AI-assisted building', 'HTML / CSS basics'] },
  { title: 'Tools', items: ['Figma', 'Codex', 'Adobe Creative Suite', 'PowerPoint', 'HubSpot'] },
]

function SplitText({ text }) {
  return (
    <span className="splitText" aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          className={`splitChar${char === ' ' ? ' splitSpace' : ''}`}
          style={{ '--char': index }}
          aria-hidden="true"
          key={`${char}${index}`}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}

export function App() {
  const [hash, setHash] = useState(window.location.hash)
  const activeCase = caseFromHash(hash)

  useEffect(() => {
    const change = () => { setHash(window.location.hash); setIsMenuOpen(false) }
    const escape = (event) => { if (event.key === 'Escape') setIsMenuOpen(false) }
    window.addEventListener('hashchange', change)
    window.addEventListener('keydown', escape)
    return () => { window.removeEventListener('hashchange', change); window.removeEventListener('keydown', escape) }
  }, [])

  useEffect(() => {
    document.title = activeCase ? `${activeCase.company} | Ilia Mikheenko` : 'Ilia Mikheenko'
    const frame = requestAnimationFrame(() => {
      if (activeCase) {
        window.scrollTo(0, 0)
        document.getElementById('case-title')?.focus({ preventScroll: true })
      } else if (hash && !hash.startsWith('#case/')) {
        document.getElementById(hash.slice(1))?.scrollIntoView()
      }
    })
    return () => cancelAnimationFrame(frame)
  }, [hash, activeCase])
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [activeCase])

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <main className={`page ${isScrolled || activeCase ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <a className="skipLink" href={activeCase ? '#case-title' : '#work'} onClick={activeCase ? (event) => { event.preventDefault(); document.getElementById('case-title')?.focus() } : undefined}>Skip to content</a>
      <div className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span>Ilia Mikheenko</span>
        </a>

        <nav className="nav" aria-label="Main navigation" id="main-navigation">
          <a href="#work" onClick={() => setIsMenuOpen(false)}>
            Work
          </a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>
            Experience
          </a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>
            Skills
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
          <div className="mobileNavContacts" aria-label="Quick contact">
            <a href="https://www.google.com/maps/search/?api=1&query=Batumi%2C%20Georgia" target="_blank" rel="noreferrer">Batumi, Georgia</a>
            <a href="https://www.linkedin.com/in/miheenko/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:mobile.mih@gmail.com">Email</a>
          </div>
        </nav>

        <div className="navTools" aria-label="Contact details">
          <a
            className="locationLink"
            href="https://www.google.com/maps/search/?api=1&query=Batumi%2C%20Georgia"
            target="_blank"
            rel="noreferrer"
          >
            Batumi, Georgia
          </a>
          <a
            className="iconLink"
            href="https://www.linkedin.com/in/miheenko/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>
          <a className="iconLink" href="mailto:mobile.mih@gmail.com" aria-label="Email">
            @
          </a>
        </div>

        <button
          className="menuButton"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      {activeCase ? <CaseStudy item={activeCase} /> : <>
      <header className="hero is-visible" id="top" style={{ '--hero-bg': `url(${asset('/hero-background.jpg')})` }}>

        <div className="heroInner">
          <h1 aria-label="Ilia Mikheenko">
            <span className="titleLine">
              <SplitText text="Ilia" />
            </span>
            <span className="titleLine">
              <SplitText text="Mikheenko" />
            </span>
          </h1>

          <div className="heroCopy">
            <p className="heroLead">
              I design product interfaces for complex workflows, AI tools and everyday tasks.
              My work connects product logic, clear interactions and visual systems, from early
              platform versions to hands-on prototypes.
            </p>

            <div className="heroActions">
              <a href="#work">Selected work</a>
              <a href="mailto:mobile.mih@gmail.com">Start a project</a>
            </div>
          </div>
        </div>
      </header>

      <section className="section workSection" id="work">
        <div className="sectionHead reveal">
          <h2>
            <SplitText text="Selected work" />
          </h2>
        </div>

        <p className="workIntro">Product work across AI platforms, design tools and everyday workflows. Each case covers the problem, my contribution and the limits of what the work demonstrates.</p>
        <div className="workList">
          {productCases.map((item, index) => (
            <article className="workRow productRow reveal" key={item.id} style={{ '--i': Math.min(index, 2) }}>
              <div className="workInfo">
                <span>{item.company}</span>
                <h3><a href={`#case/${item.id}`}>{item.title}</a></h3>
                <p>{item.summary}</p>
                <a className="textLink caseReadLink" href={`#case/${item.id}`} aria-label={`Read ${item.company} case study`}>Read case study <span aria-hidden="true">↗</span></a>
              </div>
              <div className="workMeta"><span>{item.category}</span><span>{item.period}</span></div>
              <a className="caseCover" href={`#case/${item.id}`} aria-label={`View ${item.company} case study`}><CaseImage image={item.images[0]} compact /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section resumeSection" id="experience">
        <div className="sectionHead reveal">
          <h2>
            <SplitText text="Experience" />
          </h2>
          <p className="sectionIntro">
            I started with HTML after school and learned design through real work: print, outdoor
            ads, mobile products, consulting and startups. That mix made me practical, calm with
            complexity and focused on turning rough ideas into things teams can actually use.
          </p>
        </div>

        <div className="resumeList">
          {experience.map((item, index) => (
            <article
              className="resumeItem reveal"
              key={`${item.company}${item.period}`}
              style={{ '--i': index }}
            >
              <div className="companyLogo" aria-hidden="true">
                {item.logo}
              </div>

              <div className="resumeMeta">
                <p className="date">{item.period}</p>
                <p className="date">{item.employment}</p>
              </div>

              <div className="resumeTitle">
                <h3>{item.company}</h3>
                <p className="role">{item.role}</p>
              </div>

              <p className="resumeText">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <div className="sectionHead skillsHead reveal">
          <h2>
            <SplitText text="Skills" />
          </h2>
        </div>

        <div className="skills skills-list">
          {skillGroups.map((group, groupIndex) => (
            <section className="skillGroup" key={group.title} style={{ '--i': groupIndex }}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((skill, index) => (
                  <span style={{ '--i': index % 12 }} key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="contact reveal" id="contact">
        <div className="sectionHead">
          <h2>
            <SplitText text="Contact" />
          </h2>
        </div>

        <div className="contactGrid">
          <p>
            Available for selected product design, web design, media design, AI workflow,
            presentation system and visual communication projects.
          </p>

          <div className="links">
            <a href="mailto:mobile.mih@gmail.com">mobile.mih@gmail.com</a>
            <a href="https://www.linkedin.com/in/miheenko/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://omburo.com" target="_blank" rel="noreferrer">
              omburo.com
            </a>
          </div>
        </div>
      </section>
      </>}
    </main>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


