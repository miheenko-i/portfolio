import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const selectedWork = [
  {
    title: 'AI workforce platform',
    company: 'Everworker',
    type: 'Product, web, AI',
    year: '2024 / 2026',
    text:
      'Product and web experiences for an AI workforce platform, including agent pages, platform pages, onboarding, workflow UI, diagrams, marketing assets, HubSpot pages and implementation support.',
  },
  {
    title: 'Travel technology systems',
    company: 'Simplenight',
    type: 'Marketplace UX',
    year: '2025 / 2026',
    text:
      'Booking journeys, itinerary management, account pages, payment flows, post purchase experiences, white label flows, dashboards and partner platforms.',
  },
  {
    title: 'Digital products and dashboards',
    company: 'ISDK',
    type: 'UI / UX, media, web',
    year: '2022 / 2026',
    text:
      'UI prototypes, dashboards, promo websites, landing pages, pre sales presentations, blog visuals and design systems for internal products and client projects.',
  },
  {
    title: 'Executive communication',
    company: 'McKinsey & Company',
    type: 'Decks and systems',
    year: '2019 / 2022',
    text:
      'Executive decks, workshops, print materials, Tableau and Power BI dashboard improvement, complex visual communication and design process coordination.',
  },
]

const mediaPreviews = [
  {
    title: 'AI product interface',
    type: 'UI shot',
    image: '/media/ui-01.jpg',
  },
  {
    title: 'Brand marks and logo systems',
    type: 'Logo design',
    image: '/media/logo-01.jpg',
  },
  {
    title: 'Executive presentation systems',
    type: 'Slides',
    image: '/media/slide-01.jpg',
  },
  {
    title: 'Motion and video design',
    type: 'Video frame',
    image: '/media/video-01.jpg',
  },
  {
    title: 'Interactive product prototypes',
    type: 'Prototype',
    image: '/media/prototype-01.jpg',
  },
  {
    title: 'Campaign graphics and visuals',
    type: 'Graphics',
    image: '/media/graphics-01.jpg',
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

const skills = [
  'Product design',
  'UX / UI',
  'Web design',
  'Media design',
  'Video design',
  'Presentation design',
  'Graphics',
  'Interactive prototypes',
  'Product demos',
  'AI workflows',
  'Codex',
  'AI agents',
  'Agentic AI',
  'LLMs',
  'Coding tools',
  'Automation',
  'HubSpot',
  'Basic frontend',
  'React basics',
  'CSS',
  'JavaScript',
  'Prototyping',
  'Design systems',
  'Brand identity',
  'Dashboards',
  'Figma',
  'Adobe Creative Suite',
  'PowerPoint',
  'Keynote',
  'Google Slides',
]

function App() {
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
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="page">
      <header className="hero" id="top">
        <div className="topbar">
          <a className="mark" href="#top" aria-label="Home">
            IM
          </a>

          <nav className="nav" aria-label="Main navigation">
            <a href="#work">Work</a>
            <a href="#media">Media</a>
            <a href="#resume">Resume</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="heroInner reveal">
          <p className="eyebrow">Product, Web, UI / UX Designer and AI powered builder</p>

          <figure className="portrait">
            <img src="/profile.png" alt="Ilya Mikheenko portrait" />
          </figure>

          <h1>Ilya Mikheenko</h1>

          <p className="heroLead">
            I work at the intersection of product, design, media and AI powered building, taking
            ideas from rough concepts to shipped experiences, interactive prototypes, websites,
            presentations and visual systems.
          </p>

          <div className="heroMeta">
            <div>
              <span>Product</span>
              <p>UX / UI, websites, product interfaces</p>
            </div>

            <div>
              <span>Media</span>
              <p>Videos, presentations, branding, graphics</p>
            </div>

            <div>
              <span>Prototype</span>
              <p>Interactive prototypes, demos, frontend basics</p>
            </div>

            <div>
              <span>AI</span>
              <p>Codex, LLM workflows, Agentic AI</p>
            </div>
          </div>
        </div>
      </header>

      <section className="statement reveal">
        <p>
          From UX, UI and prototypes to websites, media design, automation, AI workflows and
          implementation ready interfaces.
        </p>
      </section>

      <section className="section reveal" id="work">
        <div className="sectionHead">
          <h2>Selected work</h2>
          <span>01</span>
        </div>

        <div className="workGrid">
          {selectedWork.map((item) => (
            <article className="workCard" key={item.title}>
              <div className="cardMeta">
                <span>{item.type}</span>
                <span>{item.year}</span>
              </div>

              <div>
                <h3>{item.title}</h3>
                <p className="company">{item.company}</p>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="media">
        <div className="sectionHead">
          <h2>Media preview</h2>
          <span>02</span>
        </div>

        <div className="mediaGrid">
          {mediaPreviews.map((item, index) => (
            <article className={`mediaCard mediaCard${index + 1}`} key={item.title}>
              <img src={item.image} alt={item.title} />

              <div className="mediaOverlay">
                <span>{item.type}</span>
                <h3>{item.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section reveal" id="resume">
        <div className="sectionHead">
          <h2>Resume</h2>
          <span>03</span>
        </div>

        <div className="resumeList">
          {experience.map((item) => (
            <article className="resumeItem" key={`${item.company}${item.period}`}>
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

      <section className="section reveal" id="skills">
        <div className="sectionHead">
          <h2>Skills</h2>
          <span>04</span>
        </div>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="contact reveal" id="contact">
        <div className="sectionHead">
          <h2>Contact</h2>
          <span>05</span>
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
              Portfolio
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
  </React.StrictMode>
)