import test, { before, after, beforeEach, afterEach } from 'node:test'
import assert from 'node:assert/strict'
import { writeFile, unlink, readFile } from 'node:fs/promises'
import { build } from 'esbuild'
import { JSDOM } from 'jsdom'
import { productCases, caseFromHash } from '../src/cases.js'

const dom = new JSDOM('<!doctype html><html><body><div id="test-root"></div></body></html>', { url: 'https://portfolio.test/portfolio/', pretendToBeVisual: true })
Object.assign(globalThis, {
  window: dom.window, document: dom.window.document,
  HTMLElement: dom.window.HTMLElement,
  IS_REACT_ACT_ENVIRONMENT: true,
  requestAnimationFrame: (fn) => setTimeout(fn, 0), cancelAnimationFrame: clearTimeout,
  IntersectionObserver: class { observe(el) { el.classList.add('is-visible') } unobserve() {} disconnect() {} },
})
Object.defineProperty(globalThis, 'navigator', { configurable: true, value: dom.window.navigator })
dom.window.scrollTo = () => {}
dom.window.HTMLElement.prototype.scrollIntoView = () => {}
const { default: React, act } = await import('react')
const { createRoot } = await import('react-dom/client')
let App, CaseImage, root
const container = document.getElementById('test-root')
const appBundle = new URL('.app-test.mjs', import.meta.url)
const imageBundle = new URL('.image-test.mjs', import.meta.url)
const settle = () => new Promise((resolve) => setTimeout(resolve, 40))
async function navigate(hash) { await act(async () => { window.location.hash = hash; await settle() }) }
async function mount() { await act(async () => { root.render(React.createElement(App)); await settle() }) }
async function click(el) { assert.ok(el, 'Expected a clickable element'); await act(async () => { el.click(); await settle() }) }

before(async () => {
  for (const [entry, output] of [['../src/main.jsx', appBundle], ['../src/CaseStudy.jsx', imageBundle]]) {
    const result = await build({ entryPoints: [new URL(entry, import.meta.url).pathname], bundle: true, write: false, format: 'esm', platform: 'node', packages: 'external', loader: { '.css': 'empty' }, define: { 'import.meta.env.BASE_URL': JSON.stringify('/portfolio/') } })
    await writeFile(output, result.outputFiles[0].text)
  }
  ;({ App } = await import(appBundle.href))
  ;({ CaseImage } = await import(imageBundle.href))
})
beforeEach(() => { window.history.replaceState({}, '', '/portfolio/'); root = createRoot(container) })
afterEach(async () => { await act(async () => root.unmount()); container.innerHTML = '' })
after(async () => { await unlink(appBundle); await unlink(imageBundle); dom.window.close() })

test('six unique, complete case studies and no private source URLs', () => {
  assert.equal(productCases.length, 6)
  assert.equal(new Set(productCases.map((item) => item.id)).size, 6)
  for (const item of productCases) {
    for (const key of ['id', 'company', 'title', 'role', 'problem', 'contribution', 'outcome', 'limit']) assert.ok(item[key], `${item.id}: ${key}`)
    assert.ok(item.images.length)
    assert.ok(item.decisions.length >= 2)
    assert.doesNotMatch(JSON.stringify(item), /mail\.google|chatgpt\.com\/c\/|drive\.google|figma\.com\/file|[—–·]/)
  }
})

test('EverWorker leads with accurate scope and contribution boundaries', () => {
  const item = productCases[0]
  assert.equal(item.id, 'everworker')
  assert.match(item.intro, /developer-built/)
  assert.match(item.intro, /2022/)
  assert.match(item.role, /another studio/)
  assert.match(item.contribution, /complemented/)
  assert.match(item.problem, /without a development background/)
  assert.equal(item.evolution.length, 3)
})

test('hash parsing is bounded and unknown cases fail safely', () => {
  assert.equal(caseFromHash('#case/travel-ai')?.id, 'travel-ai')
  for (const hash of ['', '#work', '#case/not-found', '#case/%3Cscript%3E', '#case/travel-ai/extra']) assert.equal(caseFromHash(hash), null)
})

test('home lists every case with working routes and labeled image placeholders', async () => {
  await mount()
  assert.equal(container.querySelectorAll('.productRow').length, 6)
  assert.equal(container.querySelectorAll('.imagePlaceholder').length, 6)
  for (const item of productCases) assert.ok(container.querySelector(`.caseReadLink[href="#case/${item.id}"]`))
  assert.equal(container.querySelectorAll('.practiceItem').length, 2)
})

test('every case can be opened, focused, and returned to selected work', async () => {
  await mount()
  for (const item of productCases) {
    await click(container.querySelector(`.caseReadLink[href="#case/${item.id}"]`))
    assert.equal(container.querySelector('#case-title').textContent, item.title)
    assert.equal(document.title, `${item.company} | Ilia Mikheenko`)
    assert.equal(document.activeElement.id, 'case-title')
    assert.ok(container.textContent.includes('Outcome and limits'))
    await click(container.querySelector('.caseBack'))
    assert.ok(container.querySelector('#work'))
    assert.equal(container.querySelectorAll('.productRow.is-visible').length, 6)
  }
})

test('direct case deep links render on first load', async () => {
  window.history.replaceState({}, '', '/portfolio/#case/everworker')
  await mount()
  assert.match(container.querySelector('#case-title').textContent, /AI workforce/)
  assert.equal(container.querySelector('.hero'), null)
})

test('next-case navigation cycles through six cases', async () => {
  window.history.replaceState({}, '', '/portfolio/#case/everworker')
  await mount()
  for (let index = 0; index < 6; index++) await click(container.querySelector('.nextCase'))
  assert.equal(window.location.hash, '#case/everworker')
  assert.equal(container.querySelectorAll('.caseStudy').length, 1)
})

test('browser back and forward restore the correct case', async () => {
  await mount()
  await navigate('#case/everworker')
  await navigate('#case/intosquare')
  await act(async () => { window.history.back(); await settle() })
  assert.match(container.querySelector('#case-title').textContent, /AI workforce/)
  await act(async () => { window.history.forward(); await settle() })
  assert.match(container.querySelector('#case-title').textContent, /Figma/)
})

test('menu supports repeated toggles, Escape, and close after navigation', async () => {
  await mount()
  const menu = () => container.querySelector('.menuButton')
  await click(menu()); assert.equal(menu().getAttribute('aria-expanded'), 'true')
  await click(menu()); assert.equal(menu().getAttribute('aria-expanded'), 'false')
  await click(menu())
  await act(async () => window.dispatchEvent(new dom.window.KeyboardEvent('keydown', { key: 'Escape' })))
  assert.equal(menu().getAttribute('aria-expanded'), 'false')
  await click(menu())
  await click(container.querySelector('.nav a[href="#experience"]'))
  assert.equal(menu().getAttribute('aria-expanded'), 'false')
})

test('missing images are honest placeholders and failed replacements remain useful', async () => {
  const item = { title: 'Test screen', caption: 'Screenshot caption', src: 'cases/test.webp', alt: 'A real approved screen' }
  await act(async () => root.render(React.createElement(CaseImage, { image: item })))
  let img = container.querySelector('img')
  assert.equal(img.getAttribute('src'), '/portfolio/cases/test.webp')
  assert.equal(img.alt, item.alt)
  await act(async () => img.dispatchEvent(new dom.window.Event('error')))
  assert.equal(container.querySelector('img'), null)
  assert.match(container.textContent, /Image unavailable/)
  await act(async () => root.render(React.createElement(CaseImage, { image: { ...item, src: 'cases/fixed.webp' } })))
  img = container.querySelector('img')
  assert.equal(img.getAttribute('src'), '/portfolio/cases/fixed.webp')
})

test('unknown case links render the home safely', async () => {
  window.history.replaceState({}, '', '/portfolio/#case/missing')
  await mount()
  assert.ok(container.querySelector('#work'))
  assert.equal(container.querySelector('.caseStudy'), null)
})

test('reduced-motion styles leave animated text visible', async () => {
  const css = await readFile(new URL('../src/style.css', import.meta.url), 'utf8')
  assert.match(css, /prefers-reduced-motion: reduce[\s\S]*\.splitChar, \.heroLead, \.heroActions \{ opacity: 1 !important/)
  assert.match(css, /@media \(max-width: 820px\)[\s\S]*\.caseSection \{ grid-template-columns: 1fr/)
})
