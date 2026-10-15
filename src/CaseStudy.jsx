import React, { useEffect, useState } from 'react'
import { productCases } from './cases.js'

const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export function CaseImage({ image, compact = false }) {
  const [failed, setFailed] = useState(false)
  useEffect(() => setFailed(false), [image.src])
  return (
    <figure className={`caseImage${compact ? ' caseImageCompact' : ''}`}>
      {image.src && !failed ? (
        <img src={asset(image.src)} alt={image.alt || image.title} loading="lazy" onError={() => setFailed(true)} />
      ) : (
        <div className="imagePlaceholder">
          <span className="placeholderLabel">Image placeholder</span>
          <span className="placeholderTitle">{image.title}</span>
          <span className="placeholderNote">{failed ? 'Image unavailable. Approved screen to follow.' : 'Approved project screen to follow.'}</span>
        </div>
      )}
      {!compact && <figcaption>{image.caption}</figcaption>}
    </figure>
  )
}

export function CaseStudy({ item }) {
  const next = productCases[(productCases.indexOf(item) + 1) % productCases.length]
  return (
    <article className="caseStudy" aria-labelledby="case-title">
      <header className="caseHeader">
        <a className="textLink caseBack" href="#work">Back to selected work</a>
        <p className="caseCompany">{item.company}</p>
        <h1 id="case-title" tabIndex="-1">{item.title}</h1>
        <p className="caseIntro">{item.intro}</p>
        <dl className="caseFacts">
          <div><dt>My role</dt><dd>{item.role}</dd></div>
          <div><dt>Context</dt><dd>{item.category}<br />{item.period}</dd></div>
          <div><dt>Stage</dt><dd>{item.stage}</dd></div>
        </dl>
      </header>

      {item.downloads?.length > 0 && (
        <section className="caseSection caseDownloads" aria-labelledby="case-downloads-title">
          <h2 id="case-downloads-title">Case materials</h2>
          <div className="caseBody">
            <p>The full case study in Russian, with project screenshots.</p>
            <ul className="caseDownloadList">
              {item.downloads.map((file) => (
                <li key={file.path}>
                  <a href={asset(file.path)} download={file.path.split('/').pop()}>
                    <span>{file.label}</span>
                    <span className="caseDownloadFormat">{file.format}</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="caseSection">
        <h2>The problem</h2>
        <div className="caseBody"><p>{item.problem}</p></div>
      </section>

      <section className="caseSection">
        <h2>My contribution</h2>
        <div className="caseBody"><p>{item.contribution}</p></div>
      </section>

      {item.evolution && (
        <section className="caseSection">
          <h2>Across three versions</h2>
          <ol className="caseEvolution caseBody">
            {item.evolution.map((version) => <li key={version.title}><h3>{version.title}</h3><p>{version.text}</p></li>)}
          </ol>
        </section>
      )}

      {item.flow && (
        <section className="caseSection">
          <h2>The workflow</h2>
          <div className="caseBody">
            <ol className="caseFlow">{item.flow.map((step) => <li key={step}>{step}</li>)}</ol>
            {item.flowNote && <p className="caseNote">{item.flowNote}</p>}
          </div>
        </section>
      )}

      <div className="caseHeroImage"><CaseImage image={item.images[0]} /></div>

      <section className="caseSection">
        <h2>Design decisions</h2>
        <div className="caseBody caseDecisions">
          {item.decisions.map((decision) => <div key={decision.title}><h3>{decision.title}</h3><p>{decision.text}</p></div>)}
        </div>
      </section>

      {item.images.length > 1 && <div className="caseGallery">{item.images.slice(1).map((image) => <CaseImage image={image} key={image.key} />)}</div>}

      <section className="caseSection caseOutcome">
        <h2>Outcome and limits</h2>
        <div className="caseBody"><p>{item.outcome}</p><p className="caseNote">{item.limit}</p></div>
      </section>

      <footer className="caseFooter">
        <a className="textLink" href="#work">All selected work</a>
        <a className="nextCase" href={`#case/${next.id}`}><span>Next case</span><strong>{next.company}</strong><span aria-hidden="true">↗</span></a>
      </footer>
    </article>
  )
}

