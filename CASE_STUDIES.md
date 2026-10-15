# Product case studies

The existing React/Vite portfolio now has six product case studies. EverWorker is first, followed by IntoSquare, Simplenight Demo Platform, Travel AI, Verger and Invoice UX. The existing portrait, typography, contact information, resume remain.

## Edit the content

`src/cases.js` contains the case list. The EverWorker story and original screenshot definitions are in `src/everworker.js`. Travel AI is in `src/travel-ai.js`; other cases remain in `src/cases.js`. `src/CaseStudy.jsx` renders each case. Hash routes such as `#case/everworker` work with the existing GitHub Pages base path without server routing changes.

## Replace the image placeholders

1. Put approved, sanitized image files into `public/cases/`. Use WebP or AVIF when appropriate, with a sensible export size (roughly 1600 pixels wide for a full-width screen).
2. Find the corresponding image entry in `src/cases.js`.
3. Change `src: null` to a relative path such as `src: 'cases/everworker-v1.webp'`.
4. Add a descriptive `alt` and update `caption` to describe the actual image and its design credit.
5. Run `npm test` and `npm run build`, then check desktop and phone layouts. A failed image falls back to an explicit placeholder instead of a broken preview.

The first image in each case is also its work-list cover. EverWorker uses seventeen original, owner-approved project screenshots. Travel AI uses original audit excerpts and labeled mobile reconstruction captures. The remaining cases use explicit placeholders. Never publish private source links.

## Image checklist

| Case | Needed images |
| --- | --- |
| EverWorker | Seventeen original PNG screens in `public/cases/everworker/`: studio before/after, home and settings, canvas/settings overview, canvas guidance and agent library, four wizard/flow screens, three assistant/editor screens, and three catalog/detail screens. All screens stack vertically on desktop and mobile; each opens at full size. Keep the design credits and illustrative-data note. |
| IntoSquare | One connected plugin/extension import; source Figma layout beside editable Squarespace result and a mobile check. |
| Simplenight Demo Platform | Sanitized company/demo hierarchy; AI-assisted dataset update and review. |
| Travel AI | Seven focused original audit excerpts and six mobile screenshots from the labeled interactive reconstruction. Keep source/reconstruction captions, aspect ratios and full-size links. |
| Verger | Favorite-place input and recommendation experience. |
| Invoice UX | Voice input and editable invoice from the same product. |

## Editorial boundaries

- EverWorker: visual node connections existed before Ilia's redesign. His platform involvement began in 2022. The later iterations focus on the second half of 2025, with a shift toward ready-made workers in early 2026. Distinguish the early chat for testing existing agents from the later authoring assistant. Ilia proposed the implemented setup wizard and authoring assistance; version-three visual design belongs to another studio. Results are qualitative. Screenshot figures and placeholder copy are not measured outcomes.
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

## EverWorker download archive

The PDF, DOCX and screenshot ZIP remain at their existing paths in `public/downloads/everworker/`. The owner requested removal of their links from the English website case; the files themselves are unchanged.


## Editorial components and Travel AI

Long-form cases support selective phrase emphasis, three unquoted editorial takeaways and compact outcome blocks. These are the designer’s narrative summaries, not attributed customer quotations. All image groups remain single-column. Portrait reconstruction images are centered at a readable phone width rather than enlarged to desktop width.

Travel AI distinguishes original audit findings/proposals, confirmed implementation, and a newly reconstructed interactive flow. The reported outcome is approximate checkout reach among roughly 100 test participants in the Philippines deployment. It is a recalled test result, not a paid-booking conversion rate, baseline comparison or causal revenue claim. No precise release date or later product status is asserted.

The original audit excerpts exclude the contact-information panel. Reconstruction screens use mock data and are not historical shipped-product screenshots. Never remove these distinctions when editing the case.

The homepage omits Studio Range at the owner’s request. Skills are grouped into Product & UX, UI & Design Systems, AI & Prototyping, and Tools, without proficiency ratings. Skills and Contact use content-driven height instead of a full-viewport minimum to avoid a large empty gap.
