# All Work — Project Catalog

> Working reference for `/all/index.html`. Keep project context here and implementation in the HTML until a future migration is explicitly planned.

## Workflow and source of truth

- **Canonical page:** [all/index.html](./index.html) in this same directory. The live page is [the All Work page](https://joeldom.github.io/redesign/all/index.html).
- **This companion file:** [all/ALL_WORK.md](./ALL_WORK.md), beside `index.html`. Start here for the catalog workflow, then open the page; do not search another folder or branch for this file.
- The gallery cards and viewer content remain hand-authored in `index.html`. **Do not move gallery entries into a JavaScript/data object.**
- **Keep the catalog in page order.** The `Project catalog in page order` section below follows the gallery from first card to last; do not regroup entries into category sections.
- For every entry, preserve the page's content verbatim, including all paragraphs, headings, lists, GOAL text, and links. Keep notes/interpretations separate from the verbatim source transcription.
- Record each card's image sequence in the exact source order. Do not infer project relationships or image purpose from filenames or neighboring cards.
- Reconcile timestamp notes marked `[updated:DATE - TIME]` against the page. Remove a timestamp and add `✅` **only after the specific information has been added to the page and verified**. Do not invent missing project details to clear a timestamp.
- When either file changes, update both files' version/review note so they stay aligned. Verify the change in `all/index.html` and in this file before marking work complete.
- Update the nearby HTML follow-up comment when a page gap is resolved; leave it in place while the information is unknown.
- Keep implementation notes and future viewer ideas separate from actual project content.
- For unresolved details, write a clear question for Joel instead of guessing.
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

## Project catalog in page order

**Canonical order:** follows the gallery cards in [all/index.html](./index.html), from top to bottom. This section preserves the page's card labels and viewer markup verbatim; do not regroup entries by category. Image references are listed in source order for each card. Project notes follow the source excerpt and must not be used to silently rewrite the verbatim transcription.

Page source: [all/index.html on GitHub](https://github.com/joeldom/redesign/blob/gh-pages/all/index.html) · [live page](https://joeldom.github.io/redesign/all/index.html)


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
_Last reviewed: 2026-10-20. Page order and verbatim card markup reconciled against `all/index.html` on `gh-pages`. This document is a manually maintained catalog, not a runtime data source._
