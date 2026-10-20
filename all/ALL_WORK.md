# All Work — Project Catalog

> Working reference for `/all/index.html`. Keep project context here and implementation in the HTML until a future migration is explicitly planned.

## Workflow and source of truth

- **Do not move gallery entries into a JavaScript/data object yet.** Cards and viewer content remain hand-authored in `index.html`.
- `index.html` controls card order, labels, images, hidden viewer markup, and links. This file holds the fuller project notes, missing details, decisions, and follow-up questions.
- Update both files when a project is added or revised. The HTML has per-card comments to flag unresolved content.
- Do not infer project facts from an image or generic placeholder. Mark uncertain details for Joel to confirm.
- For each project, capture the information that applies: **overview, category, role/contribution, audience/problem, approach/key decisions, outcome/goal, deliverables, image(s), destination link, status**.
- Clearly generic placeholders are intentionally kept out of the project write-ups below. They remain listed in the placeholder section at the end so they can be identified and replaced later.
- The category sections below are the place to write the actual content first; the scanning tables are only for inventory and technical comparisons.
- Look for ones with [updated:DATE - TIME] to move the info into the page. Once added remove the date time and add ✅.
- Content of each entry should be captured verbatim from the page and added here where it exists and reconciled with any content here. Confirm this by checking if any file changes happened on the `https://joeldom.github.io/redesign/all/index.html` file.
- Make a version note in the page and `ALL_WORK.md` that should always align with each update [this doesn't currently exist].

## Viewer prototype comparison — v5 to v6

References:
- [Viewer v5 live](https://joeldom.github.io/redesign/sandbox/viewer/v5/)
- [Viewer v6 live](https://joeldom.github.io/redesign/sandbox/viewer/v6/)
- [v5 HTML](https://github.com/joeldom/redesign/blob/gh-pages/sandbox/viewer/v5/index.html)
- [v5 JavaScript](https://github.com/joeldom/redesign/blob/gh-pages/sandbox/viewer/v5/viewer-v5.js)
- [v6 HTML](https://github.com/joeldom/redesign/blob/gh-pages/sandbox/viewer/v6/index.html)
- [v6 JavaScript](https://github.com/joeldom/redesign/blob/gh-pages/sandbox/viewer/v6/viewer-v5.js)

### Changes at a glance

| Area | v5 | v6 | Implementation guidance |
|---|---|---|---|
| Gallery markup | Six prototype cards; three `.set` elements. | Six prototype cards; four `.set` elements. | Keep the project/card markup semantic and local to each card. |
| Exo image set | Three images. | Still three images. | Use `<div class="set" data-set-id="exo">` with child images for that project's image collection. |
| Exo Social image set | One image. | Seventeen images. The additional references include Exo branding plus logos/assets associated with Tetra, Nothing Sacred, Creative Assembly, Connective, From Software, Tree of Life, Oak, and a pixel-lattice image. | The v6 set demonstrates collection size, but its asset mix appears broader than Exo Social alone. Verify each asset's intended project/relationship before reusing it; don't treat set membership as verified project metadata. |
| Product info byline | A TBD tile with no set. | A `data-set-id="tbd"` set containing a missing-image placeholder. | The markup pattern supports adding a set, but this card is still a placeholder, not a completed project entry. |
| Arrow boundary state | `goToImage()` sets arrow opacity directly in JavaScript. | `goToImage()` toggles `.is-boundary` on previous/next arrows. | Prefer a class for visual state, then style the class in CSS. Before adopting this change, add/test the matching `.is-boundary` rule in the viewer stylesheet; the shared `/css/viewer.css` currently has no `.is-boundary` selector. |
| Dot/counter/arrow behavior | Vertical image track, dot navigation, previous/next arrows, and `n / total` counter are already present. | Same basic interaction model; the v6 comments mark the dot opacity work as completed. | Keep the active image index as the single source of truth for track position, active dot, counter, and arrow boundary state. Test these together. |
| Input methods | Wheel threshold, touch swipe, buttons, and keyboard arrows. | Same core input model. | These are existing v5 capabilities, not new v6 features. |
| Control visibility | Controls reveal on interaction and auto-hide after the configured delay. | Same basic behavior and 1,500 ms `controlsHideDelay` configuration. | Keep the delay configurable; test mouse movement, hover, wheel, touch, and keyboard use. |
| Close behavior | Close button, backdrop click, Escape key. | Same core close behavior. | Preserve keyboard and pointer exit paths; also verify focus handling and accessibility before production use. |
| Data source | HTML `.set` is the source of image URLs; comments propose future API hydration. | Same model; comments mention future API / `sets.json` hydration. | No API/data-object integration is implemented. Keep this as a future option only. |
| Loop/repeat | No implemented repeat control. | HTML TODO proposes a repeat/loop button at the end of a set. | Treat as an idea only. It is not implemented in v6. |
| Remaining tasks | TODOs include set-vs-group navigation, counters/arrows after selection, dot-state behavior, and consolidating CSS overrides. | Some TODOs are marked done; open items include a close control within the content area and correcting tile labels/category/location in viewer content. | Use the TODO list as a backlog, not proof that a feature is fully tested. Verify behavior in browser before marking complete. |

### What to implement later (not in the current All Work page)

The newer viewer changes are documented for reference only; **do not implement them into `/all/` now**.

1. **Per-card image sets.** Each card can contain a hidden `.set[data-set-id]` with `<img data-src="...">` entries. The viewer reads the set when a tile opens. One image uses a simple image area; two or more use the vertical gallery, arrows, dots, and counter.
2. **One consistent navigation state.** Keep the current image index authoritative; update track position, active dot, count label, and boundary state from it. Keep wheel/touch/button/keyboard inputs routed through the same navigation methods.
3. **CSS-owned visual state.** Replace inline opacity changes with classes such as `.is-boundary`, but add the corresponding CSS and test it. Do not assume v6's class change is styled by the shared stylesheet: `css/viewer.css` currently lacks that selector.
4. **Control auto-hide.** v5/v6 already use `VIEWER_CONFIG.controlsHideDelay = 1500`. Preserve the configurable delay and test all interaction types.
5. **Viewer content mapping.** The current script reads category/title/description from hidden `.viewer-content` markup. The v6 TODO explicitly notes that labels do not always transfer correctly into the viewer header. Confirm the tile label, category, location, and viewer title are mapped intentionally.
6. **Accessibility and cleanup.** Before adopting, test focus entry/return, focus visibility, scroll locking, Escape handling, close button labels, reduced motion, touch behavior, and event-listener cleanup. The prototype is not evidence these are all production-ready.
7. **Future API hydration is out of scope.** The `data-set-id` / `sets.json` concept is only documented as a future direction. Do not create a data object or API for the current gallery.

### What v6 tells us about project content

- The prototype has richer **image collection examples**, but it does not add a reliable project case study for the real projects in `/all/`.
- The 17-image Exo Social set includes assets whose filenames identify other brands/projects. Treat these as candidate visual references only until their intended use is confirmed.
- The v6 product-byline card is explicitly TBD and uses a missing-image icon. It adds a markup example, not usable project content.
- Neither version should override project descriptions in this catalog or the existing `/all/index.html` content without checking the source and intended project relationship.

## Project catalog by category

Use these sections to write or refine project content. The notes below distinguish what the page currently tells us from what still needs confirmation. An image or title is not treated as proof of details that are not present in the source.

## Brand and identity

### Exo — AI Agent Account [missing content from page]
- **Category:** Brand.
- **Current overview:** An AI agent developed to change the author's content-creation workflow. It takes ideas/prompts from assigned tickets, drafts posts in pull requests for approval, and sends notifications through Discord or X/Twitter. The stated broader aim is to connect content ideation, social previews, and emerging DevOps/agent patterns.
- **Technical details already in the page:** OpenAI/Anthropic APIs; Twitter API v2 via `twitter-api-v2`; Discord.js; GitHub Actions; environment-based secrets; Node readline CLI; service/utilities/log separation.
- **Links in current copy:** [Repository](https://github.com/joeldom/exo), [@ecco_exo on X](https://x.com/ecco_exo), [case study](https://joeldom.github.io/redesign/sandbox/prompt/).
- **Next:** Proofread the description for clarity and accuracy; verify current implementation/status and make sure the case study describes the same version of the project.
- **NOTE**: There is more info on the page than shown here. This needs reconciled to include the current page content. This is the template for other entries on how to show long-form content and sections.

### Ecco — Umbrella brand [updated:10.20.2026 - 2:00pm]
- **Category:** Brand.
- **Current evidence:** Card is labeled “Umbrella brand” and uses an Ecco AI app-logo image.
- **Next:** Write the role of Ecco as an umbrella identity; clarify how it relates to Ghost and Exo, which products/projects it covers, and what identity elements are shared. Do not assume those relationships without confirmation.

### Ghost — Emotive Chat feedback [updated:10.20.2026 - 2:00pm]
- **Category:** Brand, Design System.
- **Current evidence:** Card label “Emotive Chat feedback”; image is `ecco-ohno.png`; no viewer content exists.
- **Next:** Explain the feedback/user problem, the role of emotive chat feedback, the design or interaction approach, what was evaluated, and the outcome. Confirm whether Ghost is a product, concept, or identity.

### Cred — JD [updated:10.20.2026 - 2:00pm]
- **Category shown:** Brand
- **Current evidence:** Card label “Cred”; image is `Card-Concept.gif`; no viewer content exists.
- **Next:** Define what Cred is, the audience/use case, what the card concept represents, and the design decisions/status.

### S-Tier — Clothing line [updated:10.20.2026 - 2:00pm]
- **Category shown:** Brand, Design
- **Current evidence:** Card label “Clothing line”; image is `stier tag v2 text F.png`; no viewer content exists.
- **Next:** Explain the clothing-line concept, intended audience, brand/label system, and applications. Confirm what “S-Tier” means in the project's own context.

### Annual Report — 2025  [updated:10.20.2026 - 2:00pm]
- **Category shown:** Brand, Design
- **Current evidence:** Card label “Annual Report”; image is `chip-2025.png`; no viewer content exists.
- **Next:** Add the report's purpose, audience, content hierarchy, visual system, and deliverables. Confirm what organization/product the report represents.

### Supplemental Icons — File System
- **Current evidence:** Card label “Supplemental Icons”; image is `Case Studies file.png`; no viewer content exists.
- **Next:** Describe the icon set's use case, taxonomy, design rules, and where the icons are used. Confirm whether “File System” names the project or the icon category.

### R-TYPE 0 — App Toolkit
- **Category shown:** Brand.
- **Current evidence:** Viewer exists, but the overview and technical details repeat Exo copy; the copy even says “Exo” in the description. Its card image is `R-TYPE-0 Pro dot.png`.
- **Next:** Replace the inherited overview, technology list, goal, and links with R-TYPE 0-specific details. Confirm what “App Toolkit” covers and add the correct destination. Do not preserve Exo's technology claims unless they actually apply.

### Portfolio — Visual Identity
- **Category shown:** Brand.
- **Current overview:** A portfolio system intended to let different media types—UI, code, writing, and visual work—be experienced on their own terms rather than forced into a rigid grid or standard case-study structure. The text describes experimentation, layered interaction, a cohesive visual language, and iterative development.
- **Next:** Keep the existing direction if approved. Add concrete details about the actual implementation and key decisions only where they strengthen the explanation; avoid repeating the general philosophy.

### JD Profile — Accounts Identity
- **Current evidence:** Card label “Accounts Identity”; viewer title “JD Profile”; image is `J-lattice-logo.png`. The viewer category currently says Community, which may be wrong.
- **Next:** Confirm whether this is a personal account/profile identity system, a logo, or a broader account family. Then document the system's scope, applications, rationale, and correct category.

### JD Legacy Logo — v1  [updated:10.20.2026 - 2:00pm]
- **Category shown:** Brand.
- **Current evidence:** Viewer copy says this was the first round of proper branding used across profiles and the overall aesthetic applied to personal work/site. The remaining template fields are placeholders.
- **Next:** Preserve that existing historical note, then add what the mark looked like, where it was used, its design rationale, and what later identity versions changed. Verify the current Community category.

### Tao-Do — App Logo
- **Current evidence:** Card label “App Logo”; image is `tao-gray-ball.png`; viewer content is mostly template placeholders.
- **Next:** Confirm what Tao-Do is and what the logo represents; then describe the mark, constraints, rationale, and applications. Verify the current Community category.

### Type Style Guide — v1
- **Current evidence:** Card label “v1”; image is `type-example-full.png`; viewer is template text.
- **Next:** Document the typefaces/roles, hierarchy, sizing and spacing rules, tokens, and intended use. Distinguish this project from the separate style-guide repository if they are not the same artifact.

## Community and collective work

### Nothing Sacred — Discord Community
- **Current evidence:** Card label “Discord Community”; image is `Decent-NS-lrg-box.png`; viewer has placeholder fields for overview, structure, interaction, visual language, philosophy, and goal.
- **Next:** Fill those fields with the community's purpose, organization/moderation, participation patterns, identity, and intended outcome. Confirm the exact relationship between the “Nothing Sacred” name and the displayed asset.

### Creative Assembly — Creative Coalition
- **Current evidence:** Card label “Creative Coalition”; image is `creative-assembly-trans.png`; viewer has placeholder fields for overview, structure, interaction, visual language, philosophy, and goal.
- **Next:** Clarify the coalition's purpose, who it brings together, how it operates, the identity system, and the deliverables. The v6 viewer's Exo Social image set also references Creative Assembly logo assets, but that alone does not establish the relationship; confirm before linking those projects.

## Product, UX/UI, and interface work

### Ecco App — Mockup
- **Current evidence:** Card label “Mockup”; image is `iPhone closeup EccoAi.png`; viewer content is template text.
- **Next:** Describe the product concept and user need, what flow/screens the mockup represents, the UX decisions being demonstrated, and which parts are exploratory rather than implemented.

### Chat Help — UI
- **Current evidence:** Image is `samples/chat.png`; viewer has template content.
- **Next:** Describe the support scenario, user need, conversation/interaction model, and how the UI helps the user reach a resolution. Confirm whether this is a standalone concept or part of another product.

### Grid Properties — AG Grid JS
- **Current evidence:** Card label “AG Grid JS”; viewer title “Grid Properties”; image is `samples/AGGrid-example.png`; viewer has template content.
- **Next:** Document the grid behavior/configuration explored, relevant AG Grid/JavaScript APIs, what the example demonstrates, and the outcome or reusable learning.

### Mellon — Trades & Transactions
- **Category shown:** UI / Trades & Transactions.
- **Current evidence:** Image is `samples/mellon-trade-panel-clean.png`; viewer template has the generic overview/structure/interaction/visual-language/goal fields.
- **Next:** Write the financial workflow and user problem, the information/data hierarchy, important interaction patterns, design decisions, and what changed or improved. Keep confidential or client-sensitive specifics out of the public case study.

### Mellon — Account
- **Current evidence:** Card label “Mellon”; card title “Account”; image is `samples/join.png`; there is no viewer-content block.
- **Next:** Add viewer content describing the account experience, user workflow, key information, and relationship to the Trades & Transactions entry. Confirm whether the current image is the intended account-project visual.

## Art and visual work

### Stairs of Sisyphus — Digital Painting
- **Current evidence:** Category is Digital Painting; image is `images/tetra.png`; viewer has template content.
- **Next:** Add the concept, composition, medium/tools, process, and intended interpretation. Confirm whether “tetra” is the correct image asset for this titled work.

### Persist — Painting
- **Current evidence:** Category is Painting; image is `photos/insta/122258246_193456535490962_6960342295849992823_n.jpg`; viewer has template content.
- **Next:** Describe the idea, medium, composition/process, and intended reading. Confirm the asset is the final/representative image.

### Black Hole — Drawing Study
- **Current evidence:** Category is Drawing Study; image is `photos/insta/116424306_114050756904892_5290358730903370648_n.jpg`; viewer has template content.
- **Next:** Add the prompt or subject, medium, formal focus, and what the study explores.

### Social Preview — Meta Content
- **Current evidence:** Category is Meta Content; image is `images/social-preview.png`; viewer has template content.
- **Next:** Clarify whether this is a design artifact, a social-card template, or implementation work. Document the preview's purpose, required metadata, image/crop behavior, and how it is used by the site. Do not conflate this with Exo's social-preview workflow without confirming the connection.

## Photography

### SpaceX Launch — Coco Beach '24
- **Current evidence:** Category is Photography; image is `photos/insta/419491343_340386028838911_4643232878049084887_n.jpg`; viewer has template content.
- **Next:** Add capture context, technique/equipment if relevant, editing approach, and what makes the selected frame notable. Confirm the event/date/location details before publishing them.

### POV Blood Moon
- **Current evidence:** Category is Photography; image is `photos/insta/484783277_1221196709604749_5339685594673799894_n.jpg`; viewer has template content.
- **Next:** Add capture context and technique, then explain what “POV” distinguishes about this image. Keep it distinct from the separate Blood Moon entry below.

### Blood Moon
- **Current evidence:** Category is Photography; image is `photos/insta/484228421_963763472464113_728353326294345947_n.jpg`; viewer has template content.
- **Next:** Add capture context and selection rationale. Compare with POV Blood Moon so the two entries are clearly differentiated rather than duplicating copy.

## Code, prototypes, and interaction studies

### Progress Report — v1
- **Current evidence:** Card label “v1”; image is `images/2026.png`; viewer has template content.
- **Next:** Identify what project/process the report tracks, the timeframe, intended audience, and what the visual communicates. Confirm the intended meaning of “v1.”

### 2001: Space Odyssey — UI Patterns
- **Current evidence:** Category is UI Patterns; image is `images/controls-v2.png`; viewer has template content.
- **Next:** Explain which interface patterns are being referenced, what behaviors or visual conventions are being studied, and what design takeaways are relevant to the portfolio or another project.

### Sandbox Hero — v1
- **Current evidence:** Card label “v1”; image is `images/sandbox-stretch-scale.gif`; viewer has template content.
- **Next:** Document the hero experiment, the media/interaction behavior, the implementation approach, and how it relates to later sandbox versions. Confirm which version the image depicts.

### Bounce: Keyframes — CSS Animation
- **Current evidence:** Category is CSS Animation; image is `samples/code-sample-keyframes.png`; viewer has template content.
- **Next:** Explain the animation goal, keyframe/timing approach, implementation details, and where the pattern might be reused.

## Entries intentionally excluded from project write-ups

These are currently placeholders or cannot be identified confidently enough to write project facts without guessing.

| Current card label | Why it remains excluded |
|---|---|
| TBD — Brand info byline | The title/name is explicitly TBD; only the card image is present. |
| Coming Soon — transaction-card image | Generic title and repeated Mellon viewer title; intended project/feature is unknown. |
| Remaining Coming Soon cards (11 additional) | Generic titles, copied Mellon viewer content, and/or placeholder images. Together with the separate transaction-card placeholder above, there are 12 generic Coming Soon cards. Identify each card and its image before creating a project section. |
| Working on it — stay tuned | Temporary label and repeated Mellon viewer content; intended project is unconfirmed. |

### Cross-entry corrections to resolve

- **Repeated Mellon copy:** Several generic cards use the viewer title “Mellon: Trades & Transactions.” Do not assume those cards are Mellon projects.
- **Categories:** Some visible card labels and viewer categories disagree. Confirm the correct category before normalizing.
- **Links:** Replace `#` or generic case-study destinations only when a real destination is known.
- **Image identity:** Confirm that the image matches the named project; a filename or neighboring set is not sufficient proof.
- **Viewer prototype assets:** v6's Exo Social set includes images for multiple brands/projects. Verify each asset's intended use before incorporating it into a project entry.
- **HTML comments:** Keep unresolved follow-up notes close to the relevant card and update/remove them when the issue is resolved.

## Checklist for a new or revised project

- [ ] Add the project to the correct category section in this file first, using only confirmed details.
- [ ] Set the card's visible category/label and title in `all/index.html`.
- [ ] Verify the card image and any additional image-set assets.
- [ ] Add/update the hidden `.viewer-content` block with the correct category, title, overview, project-specific details, goal/outcome, and destination link when available.
- [ ] Add a nearby HTML follow-up comment if information remains unknown.
- [ ] Check for copied titles, categories, descriptions, images, or links from another entry.
- [ ] Test the card and viewer on the live page.
- [ ] Update the catalog status and remove the HTML follow-up comment only when the gap is resolved.

---
_Last reviewed: 2026-10-20. This document is a manually maintained catalog, not a runtime data source._
