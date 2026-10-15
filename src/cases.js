import { everworker } from './everworker.js'
import { travelAI } from './travel-ai.js'

// Keep publishable copy here. Private source material does not belong in this repository.
// Each image can be replaced independently; see CASE_STUDIES.md.
export const productCases = [
  everworker,
  {
    id: 'intosquare',
    company: 'IntoSquare',
    title: 'From Figma to an editable website',
    category: 'Own product / Design tools',
    period: '2026',
    summary: 'A Figma plugin and Chrome extension that turn layouts into native, editable Squarespace blocks.',
    intro: 'IntoSquare connects a design file with a website that someone can continue to edit. The product spans two environments, so the experience includes both preparing a layout in Figma and checking the result in Squarespace.',
    role: 'Own product: product direction, import experience and interface design.',
    stage: 'Extensions published / Preparing launch',
    problem: 'A finished design is still separated from a working website. Rebuilding it by hand takes effort, while a fixed visual copy can be difficult for a client to maintain. The useful result is an editable page.',
    contribution: 'I worked on the product experience connecting the Figma plugin and Chrome extension: layout selection, transfer, import and review. The scope includes responsive behavior, conversion limits and the Free/Pro experience.',
    flow: ['Select a Figma layout', 'Prepare the transfer', 'Import in Squarespace', 'Review desktop and mobile', 'Continue editing native blocks'],
    decisions: [
      { title: 'Native blocks with explicit limits', text: 'The result uses editable Squarespace blocks. Typography and colors transfer, and Auto Layout maps to Stacks. Images use placeholders; complex effects and unsupported layers require manual work. Editability comes with a conversion boundary.' },
      { title: 'Two responsive paths', text: 'A designer can provide paired desktop and mobile frames, or use automatic mobile adaptation and review the result. Paired frames need a consistent structure.' },
      { title: 'Count successful imports', text: 'The Free plan includes five successful imports per site. Failed attempts do not consume that allowance. Pro supports repeated imports and Site Styles across sites.' },
    ],
    outcome: 'The Figma plugin and Chrome extension were published in October 2026. At this stage the product was preparing for launch; paid subscription sales had not started.',
    limit: 'Publication is a delivery milestone. Revenue, conversion and time-savings results are not claimed.',
    images: [
      { key: 'transfer', title: 'The connected import flow', caption: 'One import across the Figma plugin and Chrome extension.', src: null, alt: '' },
      { key: 'result', title: 'The editable result', caption: 'Source layout, native editable Squarespace blocks and responsive review.', src: null, alt: '' },
    ],
  },
  {
    id: 'simplenight-demo',
    company: 'Simplenight',
    title: 'A demo platform for enterprise sales',
    category: 'B2B SaaS / AI workflows',
    period: '2025 / 2026',
    summary: 'Helping the team adapt reusable demos, tools and datasets to a new customer without rebuilding the story each time.',
    intro: 'The internal demo platform helped the CEO and team show relevant product scenarios to enterprise prospects. It needed to make preparation faster while keeping company context, data and tool behavior understandable.',
    role: 'Interface design, interaction logic, AI workflows and use-case research, in collaboration with the development team.',
    stage: 'Internal platform / Collaborative product work',
    problem: 'A generic demonstration does not answer a specific customer’s questions. Preparing a relevant one involves a company, a scenario, tools and matching data. Reuse helps, but it also creates a risk of carrying over the wrong branding or dataset.',
    contribution: 'I helped the external development team with interfaces, interaction logic, AI workflows and use-case research. One implemented improvement was updating datasets with AI instead of editing them manually.',
    flow: ['Choose the company', 'Adapt a demo', 'Set up use cases and tools', 'Update the dataset', 'Review and preview'],
    flowNote: 'A simplified view of the preparation workflow. Individual requirements and implementation stages varied.',
    decisions: [
      { title: 'A clear content hierarchy', text: 'The requirements organized the workspace around Company, Demo, Use Cases and Tools. This makes the customer context explicit while allowing scenarios and tools to be reused.' },
      { title: 'Reuse with boundaries', text: 'Cloning requirements removed the source company’s branding and data. Company access and datasets were scoped separately. Reuse needed to preserve the structure without leaking one customer’s context into another.' },
      { title: 'Simple editing and advanced control', text: 'The specified prompt editor offered structured sections alongside a raw mode. Generated data, fixed mock datasets and real integrations were treated as different modes rather than interchangeable sources.' },
    ],
    outcome: 'The team implemented AI-assisted dataset updates. The broader case documents the interface and workflow work; it does not present every requirement as a shipped feature or claim a measured speed improvement.',
    limit: 'Any interactive reconstruction made in October 2026 is illustrative, with mock data and simulated AI. It is not the historical production application.',
    images: [
      { key: 'workspace', title: 'Company to demo workspace', caption: 'The company and demo structure, with client data removed.', src: null, alt: '' },
      { key: 'dataset', title: 'Dataset update and review', caption: 'Dataset preparation and review. Any reconstruction will be labeled as illustrative.', src: null, alt: '' },
    ],
  },
  travelAI,
  {
    id: 'verger',
    company: 'Verger',
    title: 'Places chosen around personal taste',
    category: 'Own product / Consumer AI',
    period: '2026',
    summary: 'An early product exploring recommendations that start with the places someone already loves.',
    intro: 'Verger grew from my own experience of spending too long choosing places while traveling. Search returned too many options, and AI often repeated the same popular suggestions.',
    role: 'Product concept and experience direction for an early personal project.',
    stage: 'Early testing / Manual access',
    problem: 'A long list of well-known places does not necessarily help someone decide where to go. Personal taste is a more useful starting point than popularity alone.',
    contribution: 'I began building an experience around favorite places as input for recommendations. Adding and rating places is intended to make the taste profile more useful over time.',
    flow: ['Add favorite places', 'Explore recommendations', 'Add or rate a place', 'Build a richer taste profile'],
    flowNote: 'The intended feedback loop under exploration in the early product.',
    decisions: [
      { title: 'Start from familiar places', text: 'Favorite places give the product a concrete signal of taste. The trade-off is asking for some effort before the first recommendation; the onboarding needs to make that effort worthwhile.' },
      { title: 'Keep the learning loop visible', text: 'Adding and rating places is part of the product concept. Whether that loop improves recommendation quality is a question for testing, rather than a result assumed in this case.' },
    ],
    outcome: 'An early version is being tested with access provided manually. The current milestone is learning from use, rather than a claim of proven recommendation quality or commercial traction.',
    limit: 'No user counts, monetization results or retention improvements are claimed.',
    images: [
      { key: 'taste', title: 'From favorites to recommendations', caption: 'Favorite places as input for the recommendation experience.', src: null, alt: '' },
    ],
  },
  {
    id: 'invoice-ux',
    company: 'Invoice UX',
    title: 'From a voice note to a checkable invoice',
    category: 'AI-assisted workflow / Mobile UX',
    period: '2026',
    summary: 'Exploring a simple way for a tradesperson to describe completed work, then check and edit the generated invoice.',
    intro: 'The starting point is an everyday task: a tradesperson describes the work they have completed and AI turns it into invoice content. The critical interaction is making that content easy to verify and correct.',
    role: 'UX direction and review of the AI-assisted invoice creation flow.',
    stage: 'Design exploration',
    problem: 'Generated line items are not ready to send just because they exist. A user needs to check the service, rate and quantity, and make small corrections without learning a separate editing flow.',
    contribution: 'I set the goal of a natural flow with few steps for additions and corrections. I proposed presenting services in the familiar manual-editor format, making rates clear and controls comfortable, and removing unnecessary numbering.',
    flow: ['Describe completed work', 'Review generated services', 'Correct rate and quantity', 'Review invoice details'],
    flowNote: 'Design exploration. Sending and payment behavior are outside this case.',
    decisions: [
      { title: 'A familiar editing model', text: 'The review should use a service layout the user already understands from manual entry. That keeps an AI-generated result editable rather than treating it as a separate, locked output.' },
      { title: 'Keep the overview focused', text: 'The overview scope centers on the payment summary, a New invoice action, the period, overdue invoices and invoice count. It gives the user a small set of useful next actions.' },
    ],
    outcome: 'The work defined UX criteria and explored how AI creation connects to manual review. It is presented as a design exploration without attributing a specific app release or ownership.',
    limit: 'App identity, release status and business outcomes are not claimed.',
    images: [
      { key: 'review', title: 'Generated services, familiar controls', caption: 'Voice input connected to editable invoice services, rates and quantities.', src: null, alt: '' },
    ],
  },
]

export function caseFromHash(hash) {
  const match = /^#case\/([a-z0-9-]+)$/.exec(hash)
  return match ? productCases.find((item) => item.id === match[1]) || null : null
}

