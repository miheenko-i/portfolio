# Product case studies

The existing React/Vite portfolio now has six product case studies. EverWorker is first, followed by IntoSquare, Simplenight Demo Platform, Travel AI, Verger and Invoice UX. The existing portrait, typography, contact information, resume and broader practice remain.

## Edit the content

`src/cases.js` contains the public-facing copy and image definitions. `src/CaseStudy.jsx` renders each case. Hash routes such as `#case/everworker` work with the existing GitHub Pages base path without server routing changes.

## Replace the image placeholders

1. Put approved, sanitized image files into `public/cases/`. Use WebP or AVIF when appropriate, with a sensible export size (roughly 1600 pixels wide for a full-width screen).
2. Find the corresponding image entry in `src/cases.js`.
3. Change `src: null` to a relative path such as `src: 'cases/everworker-v1.webp'`.
4. Add a descriptive `alt` and update `caption` to describe the actual image and its design credit.
5. Run `npm test` and `npm run build`, then check desktop and phone layouts. A failed image falls back to an explicit placeholder instead of a broken preview.

The first image in each case is also its work-list cover. No screenshots, client data, private documents or private source links have been published by this change.

## Image checklist

| Case | Needed images |
| --- | --- |
| EverWorker | First interface/canvas; second-version redesign; canvas and conversational worker creation. If showing version-three visuals, credit the external studio, with Ilia credited for product logic. |
| IntoSquare | One connected plugin/extension import; source Figma layout beside editable Squarespace result and a mobile check. |
| Simplenight Demo Platform | Sanitized company/demo hierarchy; AI-assisted dataset update and review. |
| Travel AI | Manual vs AI itinerary controls; a changed event visibly reflected in the plan. |
| Verger | Favorite-place input and recommendation experience. |
| Invoice UX | Voice input and editable invoice from the same product. |

## Editorial boundaries

- EverWorker: the developer-built platform existed before Ilia's first interface design in 2022. Ilia designed the first interface and second redesign; the third version's visual design belongs to another studio. Canvas came before a complementary chat for worker creation. Later version dates are not asserted.
- IntoSquare: plugin and extension publication is separate from paid launch, revenue and adoption.
- Simplenight: distinguish requirements, proposals and confirmed implementation. AI-assisted dataset updates are described as implemented; not every platform requirement is.
- October 2026 Demo Platform and Travel AI reconstructions use mock data/simulated AI and are not historical production applications. Label any future screenshots or links accordingly.
- Verger is early testing with manual access. Invoice UX is a neutral design exploration; do not infer app identity, ownership or a release.
- Keep results qualitative unless the underlying measurement and scope are verified. Do not add private evidence URLs to this public repository.

## Validation and release

- `npm test`: content safeguards and semantic React DOM flows, including deep links, back/forward, next-case navigation, repeated menu actions and image fallback.
- `npm run build`: production build.
- This repository's existing `pages.yml` deploys changes pushed to `main`. Work should be reviewed on the case-study branch before any merge or deployment.
- Browser-rendered desktop/mobile verification is separate from DOM tests and still needs a reachable preview. Do not describe semantic tests as visual QA.
