import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

const selectedWork = [
  {
    title: 'AI workforce platform',
    company: 'Everworker',
    type: 'Product, web, AI',
    year: '2024 / 2026',
    visual: 'product',
    text:
      'Product and web experiences for an AI workforce platform, including agent pages, platform pages, onboarding, workflow UI, diagrams, marketing assets, HubSpot pages and implementation support.',
  },
  {
    title: 'Travel technology systems',
    company: 'Simplenight',
    type: 'Marketplace UX',
    year: '2025 / 2026',
    visual: 'mobile',
    text:
      'Booking journeys, itinerary management, account pages, payment flows, post purchase experiences, white label flows, dashboards and partner platforms.',
  },
  {
    title: 'Digital products and dashboards',
    company: 'ISDK',
    type: 'UI / UX, media, web',
    year: '2022 / 2026',
    visual: 'web',
    text:
      'UI prototypes, dashboards, promo websites, landing pages, pre sales presentations, blog visuals and design systems for internal products and client projects.',
  },
  {
    title: 'Executive communication',
    company: 'McKinsey & Company',
    type: 'Decks and systems',
    year: '2019 / 2022',
    visual: 'print',
    text:
      'Executive decks, workshops, print materials, Tableau and Power BI dashboard improvement, complex visual communication and design process coordination.',
  },
]

const studioRange = [
  {
    title: 'AI product interface systems',
    type: 'Product UI',
  },
  {
    title: 'Brand marks and visual language',
    type: 'Identity',
  },
  {
    title: 'Executive presentation systems',
    type: 'Slides',
  },
  {
    title: 'Motion, launch and campaign assets',
    type: 'Media',
  },
  {
    title: 'Interactive product prototypes',
    type: 'Prototype',
  },
  {
    title: 'Dashboards and complex communication',
    type: 'Systems',
  },
]

const experience = [
  {
    role: 'Web Designer',
    company: 'Everworker',
    period: 'March 2024 / May 2026',
    text:
      'Designed product and web experiences for an AI workforce platform. Created UI mockups, prototypes, visual systems, diagrams, marketing assets, responsive HubSpot pages, CSS and JavaScript improvements.',
  },
  {
    role: 'Design Team Lead',
    company: 'Simplenight',
    period: 'May 2025 / April 2026',
    text:
      'Designed travel technology experiences, white label booking flows, dashboards, partner platforms, sales decks, one pagers, booth graphics and event materials.',
  },
  {
    role: 'Media Design Lead',
    company: 'ISDK',
    period: 'January 2022 / April 2026',
    text:
      'Led UI, presentation, web and marketing design work. Implemented Agile design workflow and developed a style guide to standardize company materials.',
  },
  {
    role: 'Senior Graphic Designer',
    company: 'McKinsey & Company',
    period: 'January 2019 / January 2022',
    text:
      'Created UI and UX for web and mobile applications, print materials, executive presentations, dashboard visuals and workshop materials.',
  },
  {
    role: 'Senior Lead Designer',
    company: 'Golbex',
    period: 'December 2017 / December 2018',
    text:
      'Designed brand identities, corporate websites, promotional graphics, advertising materials and UI for cryptocurrency exchange products across web, iOS and Android.',
  },
]

const skillGroups = [
  {
    title: 'Product and UX',
    items: [
      'Product design',
      'UX / UI',
      'Interactive prototypes',
      'Product demos',
      'Design systems',
      'Dashboards',
      'Prototyping',
    ],
  },
  {
    title: 'Web and AI',
    items: [
      'Web design',
      'CSS',
      'HubSpot',
      'AI workflows',
      'AI agents',
      'Automation',
    ],
  },
  {
    title: 'Media and communication',
    items: [
      'Media design',
      'Video design',
      'Presentation design',
      'Graphics',
      'Brand identity',
    ],
  },
  {
    title: 'Tools',
    items: ['Figma', 'Adobe Creative Suite', 'PowerPoint', 'Google Slides', 'Codex', 'LLMs'],
  },
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

function App() {
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
  }, [])

  useEffect(() => {
    const updateScrollState = () => {
      setIsScrolled(window.scrollY > 8)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return (
    <main className={`page ${isScrolled ? 'is-scrolled' : ''} ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <div className="topbar">
        <a className="brand" href="#top" aria-label="Home">
          <span>Ilia Mikheenko</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <a href="#work" onClick={() => setIsMenuOpen(false)}>
            Work
          </a>
          <a href="#studio" onClick={() => setIsMenuOpen(false)}>
            Studio
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
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

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
              I design product interfaces, websites, AI workflow materials and B2B communication
              systems that help teams explain value clearly, move faster and turn early ideas into
              usable digital products.
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

        <div className="workList">
          {selectedWork.map((item, index) => (
            <article className="workRow reveal" key={item.title} style={{ '--i': index }}>
              <div className="workInfo">
                <span>{item.company}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className="workMeta">
                <span>{item.type}</span>
                <span>{item.year}</span>
              </div>
              <button className={`workPreview preview-${item.visual}`} type="button">
                <span>{item.title}</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section studioSection" id="studio">
        <div className="sectionHead reveal">
          <h2>
            <SplitText text="Studio range" />
          </h2>
        </div>

        <div className="studioGrid">
          {studioRange.map((item, index) => (
            <article className="studioItem reveal" key={item.title} style={{ '--i': index }}>
              <span>{item.type}</span>
              <h4>{item.title}</h4>
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
              <div className="resumeMeta">
                <p className="date">{item.period}</p>
                <p className="company">{item.company}</p>
              </div>

              <div className="resumeTitle">
                <h3>{item.role}</h3>
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
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
