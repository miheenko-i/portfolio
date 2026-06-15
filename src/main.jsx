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
      'Basic frontend',
      'React basics',
      'CSS',
      'JavaScript',
      'HubSpot',
      'AI workflows',
      'AI agents',
      'LLMs',
      'Codex',
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
    items: ['Figma', 'Adobe Creative Suite', 'PowerPoint', 'Keynote', 'Google Slides'],
  },
]

const skills = skillGroups.flatMap((group) =>
  group.items.map((skill) => ({
    group: group.title,
    name: skill,
  })),
)

function App() {
  const [skillsView, setSkillsView] = useState('tags')

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

  return (
    <main className="page">
      <header className="hero reveal" id="top">
        <div className="topbar">
          <a className="brand" href="#top" aria-label="Home">
            <span>Ilia Mikheenko</span>
            <span>Design + AI build</span>
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#studio">Studio</a>
            <a href="#resume">Resume</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="mailLink" href="mailto:mobile.mih@gmail.com">
            mobile.mih@gmail.com
          </a>
        </div>

        <div className="heroInner">
          <div className="heroCopy">
            <p className="eyebrow">Product, Web, UI / UX Designer and AI powered builder</p>

            <h1>
              Design and media expertise for digital products, AI workflows and B2B
              communication.
            </h1>

            <p className="heroLead">
              I help teams turn early ideas into shipped experiences: interfaces, websites,
              prototypes, decks, visual systems and implementation ready design.
            </p>
          </div>

          <aside className="heroAside">
            <figure className="portrait">
              <img src={asset('/profile.png')} alt="Ilya Mikheenko portrait" />
            </figure>
          </aside>
        </div>
      </header>

      <section className="statement reveal">
        <p className="storyText">
          I started with HTML pages after school
          <button className="inlinePreview preview-html" type="button" aria-label="HTML after classes preview" />, then
          took my first paid web projects at university
          <button className="inlinePreview preview-web" type="button" aria-label="First websites preview" />. Street
          advertising
          <button className="inlinePreview preview-print" type="button" aria-label="Street advertising preview" /> taught
          me craft and production; a mobile startup
          <button className="inlinePreview preview-mobile" type="button" aria-label="Mobile startup preview" /> brought
          me into product work; consulting and startup teams
          <button className="inlinePreview preview-product" type="button" aria-label="Startup product preview" /> made
          me sharper, calmer and better at helping people turn early ideas into useful systems.
        </p>
      </section>

      <section className="section workSection" id="work">
        <div className="sectionHead reveal">
          <h2>Selected work</h2>
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
          <h2>Studio range</h2>
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

      <section className="section resumeSection" id="resume">
        <div className="sectionHead reveal">
          <h2>Resume</h2>
        </div>

        <div className="resumeList">
          {experience.map((item, index) => (
            <article
              className="resumeItem reveal"
              key={`${item.company}${item.period}`}
              style={{ '--i': index }}
            >
              <p className="date">{item.period}</p>

              <div>
                <h3>{item.role}</h3>
                <p className="company">{item.company}</p>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skillsSection" id="skills">
        <div className="sectionHead skillsHead reveal">
          <h2>Skills</h2>

          <div className="viewToggle" aria-label="Skills view">
            <button
              aria-pressed={skillsView === 'tags'}
              className={skillsView === 'tags' ? 'is-active' : ''}
              type="button"
              onClick={() => setSkillsView('tags')}
            >
              Tags
            </button>
            <button
              aria-pressed={skillsView === 'list'}
              className={skillsView === 'list' ? 'is-active' : ''}
              type="button"
              onClick={() => setSkillsView('list')}
            >
              List
            </button>
          </div>
        </div>

        {skillsView === 'tags' ? (
          <div className="skills skills-tags" key="tags">
            {skills.map((skill, index) => (
              <span style={{ '--i': index % 12 }} key={skill.name}>
                {skill.name}
              </span>
            ))}
          </div>
        ) : (
          <div className="skills skills-list" key="list">
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
        )}
      </section>

      <section className="contact reveal" id="contact">
        <div className="sectionHead">
          <h2>Contact</h2>
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
