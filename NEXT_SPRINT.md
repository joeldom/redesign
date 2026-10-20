# Next Sprint — Viewer, Player, and Work

> Working checklist for the next focused session. Read this before resuming Viewer / Player work. Update the boxes as work is verified; do not mark an item complete from memory alone.

## Sprint goal

Stabilize the current Viewer and Player experiments, collect and reconcile the Work content they will use, then plan the Viewer integration into the Work page. Keep the Work filter as a later step until the content and category metadata are dependable.

## 1. Resume with a source check

- [ ] Inspect the current source for Viewer v5 and v6 before editing; compare actual differences and preserve useful behavior from both.
- [ ] Inspect the current Player / UXBG v9 and v10 source before editing; confirm the media selector and its current test options rather than assuming their implementation.
- [ ] Confirm the current state of the relevant HTML, CSS, JavaScript, media assets, and comments. Record any discrepancy between the live demo and repository source.

## 2. Viewer

References: [v5](https://joeldom.github.io/redesign/sandbox/viewer/v5/) · [v6](https://joeldom.github.io/redesign/sandbox/viewer/v6/) · [Viewer source](https://github.com/joeldom/redesign/tree/gh-pages/sandbox/viewer/)

- [ ] Compare v5 and v6 behavior and useful project/content metadata; reconcile with the richer descriptions already on the Work page.
- [ ] Verify the v6 Exo Social set expansion (17 images), placeholder product byline, and arrow boundary states (is-boundary) against the actual source and rendered behavior.
- [ ] Check whether the boundary-state CSS exists and works; correct any mismatch without regressing wheel/touch, keyboard navigation, pagination/counters, or auto-hide behavior.
- [ ] Resolve known content mismatches, including the copied R-TYPE 0 content.
- [ ] Record the Viewer behavior that should be ported to Work, keeping experimental behavior separate from approved integration decisions.

## 3. Player / UXBG

References: [v9](https://joeldom.github.io/redesign/sandbox/uxbg/v9/) · [v10](https://joeldom.github.io/redesign/sandbox/uxbg/v10/) · [UXBG source](https://github.com/joeldom/redesign/tree/gh-pages/sandbox/uxbg/)

- [ ] Fix / validate the stacking and placement of player buttons so they appear above the media as intended without unintentionally blocking the tile interface.
- [ ] Define and test the interaction case where the user starts playing media but still needs to access the v10 tiles, carrying forward the relevant v9 behavior. Check pointer hit areas, hover/idle hiding, lock/eye states, focus, and keyboard access.
- [ ] Inspect the media-selector dropdown and its small set of test options; verify each option actually switches media and that fallback behavior is clear.
- [ ] Explore a night-vision wave video or generative wave experiment as a distinct media option—not just the Gundam placeholder. Keep this creative experiment separate from fixing core player behavior.
- [ ] Preserve intentional behavior and existing comments while testing the interaction states; do not assume the newest version makes earlier versions obsolete.

## 4. Work content and assets

Reference: [Work catalog notes](https://github.com/joeldom/redesign/blob/gh-pages/all/ALL_WORK.md) · [Work page](https://github.com/joeldom/redesign/tree/gh-pages/all/)

- [ ] Inventory the files/assets for every Work item that contains multiple slides or images; identify missing slides and add the appropriate assets to each item.
- [ ] Flesh out each Work item's details while preparing the content for the Viewer: title, description, category, image/slide order, cover/thumbnail, and any known project metadata.
- [ ] Reconcile Work-page descriptions against Viewer content and project assets; flag unknowns rather than guessing.
- [ ] Keep the Work page and all/ALL_WORK.md aligned, preserving the catalog's existing page order and source-vs-interpretation distinction.

## 5. Integrate Viewer into Work

- [ ] Once the Viewer and content are understood, plan and port the selected Viewer behavior into the Work page.
- [ ] Test the combined experience with real Work items and multi-slide sets, including navigation, responsive layout, keyboard/focus behavior, and empty/missing asset cases.
- [ ] Verify that integrating the Viewer does not break existing Work tiles, descriptions, links, or page structure.

## 6. Later: combined Work search and category filter

**Do not prioritize implementation until Viewer integration and Work content are in good shape.**

- [ ] Revisit the existing filter sketch and the current notes in TODO.md.
- [ ] Design a combined text field plus selectable checkboxes/chips for categories, allowing multiple categories at once instead of creating separate pages for every narrow category.
- [ ] Establish consistent category metadata first; then test text search and multi-category filtering together, including no-result behavior.
- [ ] Align the implementation with the project's existing data / Viewer model where practical, without prematurely committing to a data architecture before the current content is audited.

## Session restart protocol

1. Read this checklist and the relevant sections of AGENTS.md, sandbox/README.md, and all/ALL_WORK.md.
2. Inspect the current files and live demos; treat this checklist as intent and priorities, not proof that a feature currently works.
3. Start with a source comparison and a short findings list before changing code.
4. Update this checklist when priorities change or a task is verified complete.
5. Keep unrelated work out of this sprint. KUMO is integrated; pause further KUMO development unless a specific refinement is needed.
