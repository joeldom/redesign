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

**Canonical order:** this list follows the 45 gallery cards in [all/index.html](./index.html), top to bottom. Each card's original article markup is preserved verbatim below. Keep the image sequence in source order and keep project notes separate from the transcription; do not regroup this catalog by category.

Page source: [all/index.html on GitHub](https://github.com/joeldom/redesign/blob/gh-pages/all/index.html) · [live page](https://joeldom.github.io/redesign/all/index.html)

### 01. Exo — AI Agent Account

- **Card label:** AI Agent Account
- **Card category:** Brand
- **Viewer title:** Exo AI Agent
- **Image sequence (source order):** 1. `undefined`; 2. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image: url('https://joeldom.github.io/asset/images/EXO Launch-v2.png')"> -->
                    <!-- ALL_WORK.md follow-up — Exo — AI Agent Account: Already populated; proofread and verify technical details/status. -->
                    <article style="background-image:url('https://joeldom.github.io/asset/images/exo-square-190F7B.png'); background-size: 320px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="name">Exo</h3>
                                <h2>AI Agent Account</h2>
                            </div>
                        </a>

                        <!-- Simple semantic content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Brand</h3>
                            <div class="viewer-title">Exo AI Agent</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>Exo is an AI agent I developed to change how I handled content creation. Exo would take in ideas and prompts from a ticket it is assigned. It would then create the post in a PR and tagging me to approve and push with and
                                    without changes.It would utilize Discord or Twitter to send me a notification about the work and the larger idea being a way to test content with a social preview.
                                </p>
                                <p>At its core, Exo bridges the gap between ideation and impact. It integrates seamlessly with social ecosystems like Twitter (X) and Discord, automating posts while benchmarking data streams for optimal timing and engagement.
                                    This project allows me to think outside of just UIs and work on building tools that use AI along side working more with emerging DevOps patterns.</p>
                                <ul>
                                    <li><strong>AI Layer</strong>: OpenAI/Anthropic APIs for dynamic content curation.</li>
                                    <li><strong>Social APIs</strong>: Twitter API v2 (via <code>twitter-api-v2</code>) and Discord.js for secure, authenticated posting.</li>
                                    <li><strong>DevOps Tools</strong>: GitHub Actions for automated deployments, .env-based config for secure secrets, and CLI interactivity via Node's readline module.</li>
                                    <li><strong>Structure</strong>: Clean separation of concerns—<code>src/services/</code> for integrations, utils/ for formatting/validation, and logs/ for history tracking.</li>
                                </ul>
                                <h3>Goal</h3>
                                <p>The aim is to make a tool that is also productivity multiplier. The project incorporates new and emerging patterns with AI agents, Github automation/actions, Discord bots with social previews I have been working with for
                                    some time but wanted to connect to a new visual brand. After reading about
                                    <a href="https://xbow.com/" target="_blank">XBOW</a> that describes itself as "XBOW is an AI-powered penetration testing platform that delivers expert-level security testing at machine speed."</p>
                                <p>Check out the live repo at <a href="https://github.com/joeldom/exo" target="_blank">github.com/joeldom/exo</a> or follow updates on X <a href="https://x.com/ecco_exo" target="_blank">@ecco_exo</a>.</p>
                                <a href="https://joeldom.github.io/redesign/sandbox/prompt/" title="Exo AI Agent Account Case Study"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                    </article>
```

**Project note:** Already has long-form viewer content. Proofread the description, verify current implementation/status, and confirm the case study describes the same version.

### 02. Ghost — Emotive Chat feedback

- **Card label:** Emotive Chat feedback
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/ecco-ohno.png'); background-size: 400px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Ghost</h3>
                                <h2>Emotive Chat feedback</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Card label is “Emotive Chat feedback”; image is `ecco-ohno.png`; viewer content is absent. Add confirmed purpose, feedback problem, approach, evaluation, and outcome.

### 03. Ecco — Umbrella brand

- **Card label:** Umbrella brand
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/App Logo EccoAi.png'); background-size: 320px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Ecco</h3>
                                <h2>Umbrella brand</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Card label is “Umbrella brand”; image is `App Logo EccoAi.png`. Clarify Ecco's role and its relationship to Ghost/Exo only when confirmed.

### 04. Cred — JD

- **Card label:** Cred
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/Card-Concept.gif'); background-size: 420px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">JD</h3>
                                <h2>Cred</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Card label is “Cred”; image is `Card-Concept.gif`; viewer content is absent. Define what Cred is, audience/use case, and what the card concept represents.

### 05. S-Tier — Clothing line

- **Card label:** Clothing line
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/stier tag v2 text F.png'); background-size: 310px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">S-Tier</h3>
                                <h2>Clothing line</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Card label is “Clothing line”; image is `stier tag v2 text F.png`; viewer content is absent. Explain concept, audience, identity system, and applications.

### 06. Annual Report — 2025

- **Card label:** Annual Report
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/chip-2025.png'); background-size: 320px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">2025</h3>
                                <h2>Annual Report</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Card label is “Annual Report”; image is `chip-2025.png`; viewer content is absent. Add purpose, audience, content hierarchy, visual system, and deliverables.

### 07. Supplemental Icons — File System

- **Card label:** Supplemental Icons
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/Case Studies file.png'); background-size: 320px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">File System</h3>
                                <h2>Supplemental Icons</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Card label is “Supplemental Icons”; image is `Case Studies file.png`; viewer content is absent. Clarify the icon set's use case, taxonomy, design rules, and intended use.

### 08. TBD — Brand info byline

- **Card label:** Brand info byline
- **Card category:** (blank)
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/PS CS6 Splash/PS CS6 Splash.png'); background-size: 600px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">TBD</h3>
                                <h2>Brand info byline</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Placeholder: the title/name is explicitly TBD. Identify the intended project before writing project facts.

### 09. R-TYPE 0 — App Toolkit

- **Card label:** App Toolkit
- **Card category:** Brand
- **Viewer title:** R-TYPE 0
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/R-TYPE-0 Pro dot.png'); background-size: 526px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">R-TYPE 0</h3>
                                <h2>App Toolkit</h2>
                            </div>
                        </a>
                        <!-- Simple semantic content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Brand</h3>
                            <div class="viewer-title">R-TYPE 0</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>R-TYPE 0 is an AI agent I developed to change how I handled content creation. Exo would take in ideas and prompts from a ticket it is assigned. It would then create the post in a PR and tagging me to approve and push with
                                    and without changes.It would utilize Discord or Twitter to send me a notification about the work and the larger idea being a way to test content with a social preview.
                                </p>
                                <p>At its core, Exo bridges the gap between ideation and impact. It integrates seamlessly with social ecosystems like Twitter (X) and Discord, automating posts while benchmarking data streams for optimal timing and engagement.
                                    This project allows me to think outside of just UIs and work on building tools that use AI along side working more with emerging DevOps patterns.</p>
                                <ul>
                                    <li><strong>AI Layer</strong>: OpenAI/Anthropic APIs for dynamic content curation.</li>
                                    <li><strong>Social APIs</strong>: Twitter API v2 (via <code>twitter-api-v2</code>) and Discord.js for secure, authenticated posting.</li>
                                    <li><strong>DevOps Tools</strong>: GitHub Actions for automated deployments, .env-based config for secure secrets, and CLI interactivity via Node's readline module.</li>
                                    <li><strong>Structure</strong>: Clean separation of concerns—<code>src/services/</code> for integrations, utils/ for formatting/validation, and logs/ for history tracking.</li>
                                </ul>
                                <h3>Goal</h3>
                                <p>The aim is to make a tool that is also productivity multiplier. The project incorporates new and emerging patterns with AI agents, Github automation/actions, Discord bots with social previews I have been working with for
                                    some time but wanted to connect to a new visual brand. After reading about
                                    <a href="https://xbow.com/" target="_blank">XBOW</a> that describes itself as "XBOW is an AI-powered penetration testing platform that delivers expert-level security testing at machine speed."</p>
                                <p>Check out the live repo at
                                    <a href="https://github.com/joeldom/exo" target="_blank">github.com/joeldom/exo</a> or follow updates on X <a href="https://x.com/ecco_exo" target="_blank">@ecco_exo</a>.</p>
                            </div>
                        </div>
                    </article>
```

**Project note:** Viewer copy repeats Exo content and even names Exo. Replace overview, technology details, goal, and links with R-TYPE 0-specific information; do not assume Exo details apply.

### 10. Portfolio — Visual Identity

- **Card label:** Visual Identity
- **Card category:** Brand
- **Viewer title:** Portfolio
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/Disc Case red.png'); background-size: 300px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Portfolio</h3>
                                <h2>Visual Identity</h2>
                            </div>
                        </a>
                        <!-- Simple semantic content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Brand</h3>
                            <div class="viewer-title">Portfolio</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>This portfolio was built as an exploration into how work can be experienced rather than simply displayed. Traditional structures—grids, linear case studies, and predictable navigation—felt too fixed, too resolved. The goal
                                    became creating a system that allows different types of media to exist on their own terms, where UI, code, writing, and visual work are not forced into a single rigid format.</p>
                                <p>Rather than arriving at a single solution, the process involved iterating through multiple approaches—some focused on interaction, others on organization, others on visual experimentation. None fully captured the intent
                                    on their own. The final result pulls from each: combining interaction patterns that invite exploration, organizational systems that remain flexible, and a visual language that unifies without flattening the individuality
                                    of each project.</p>

                                <ul>
                                    <li><strong>Structure</strong>: A non-linear system that adapts to different media types instead of forcing uniform presentation.</li>
                                    <li><strong>Interaction</strong>: Subtle, layered behaviors that reveal themselves over time rather than upfront.</li>
                                    <li><strong>Visual Language</strong>: A cohesive aesthetic that balances clarity with depth and density.</li>
                                    <li><strong>Philosophy</strong>: Organization through coexistence—allowing complexity without sacrificing usability.</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>The aim is to create an environment that rewards exploration. At first glance, the interface appears minimal and controlled, but it contains hidden details, smaller interactions, and moments of discovery that unfold as
                                    the user engages with it. This approach shifts the experience from passive viewing to active navigation.</p>
                                <p>Ultimately, the portfolio reflects an ongoing process rather than a finished state. It embraces iteration, experimentation, and the balance between structure and complexity—serving not just as a collection of work, but
                                    as a system that evolves alongside it.</p>
                                <a href="https://joeldom.github.io/style-guide/ux" title="Login UX Case Study"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                    </article>
```

**Project note:** Existing overview describes the portfolio as an exploration of how UI, code, writing, and visual work can be experienced on their own terms. Add concrete implementation details only when confirmed.

### 11. Nothing Sacred — Discord Community

- **Card label:** Discord Community
- **Card category:** Community
- **Viewer title:** Nothing Sacred
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/logos/Decent-NS-lrg-box.png'); background-size: 200px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Nothing Sacred</h3>
                                <h2>Discord Community</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Community</h3>
                            <div class="viewer-title">Nothing Sacred</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is placeholder text. Add purpose, organization/moderation, participation patterns, identity, and intended outcome.

### 12. Creative Assembly — Creative Coalition

- **Card label:** Creative Coalition
- **Card category:** Community
- **Viewer title:** Creative Assembly
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/logos/creative-assembly-trans.png'); background-size: 300px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Creative Assembly</h3>
                                <h2>Creative Coalition</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Community</h3>
                            <div class="viewer-title">Creative Assembly</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is placeholder text. Clarify coalition purpose, participants, operating model, identity, and deliverables. Do not infer a relationship from assets alone.

### 13. JD Profile — Accounts Identity

- **Card label:** Accounts Identity
- **Card category:** Community
- **Viewer title:** JD Profile
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/logos/J-lattice-logo.png'); background-size: 300px auto;" itemid="brand-13">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">JD profile</h3>
                                <h2>Accounts Identity</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Community</h3>
                            <div class="viewer-title">JD Profile</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p><time datetime="2026-04-19 19:00">April 19</time>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer title is JD Profile; image is `J-lattice-logo.png`; viewer category currently says Community and may be wrong. Confirm scope and correct category.

### 14. JD Legacy Logo — v1

- **Card label:** v1
- **Card category:** Community
- **Viewer title:** JD Legacy Logo
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/logos/jd/467157210_10108153772851248_8435756456710865867_n.jpg'); background-size: 300px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">JD Legacy Logo</h3>
                                <h2>v1</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Community</h3>
                            <div class="viewer-title">JD Legacy Logo</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>First-round of proper branding used in profiles and overall aesthetic applied to personal work and site. [...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Existing viewer says this was the first round of proper branding used across profiles and the overall aesthetic applied to personal work/site. Add confirmed rationale, applications, and evolution.

### 15. Tao-Do — App Logo

- **Card label:** App Logo
- **Card category:** Community
- **Viewer title:** Tao-Do
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/logos/tao/tao-gray-ball.png'); background-size: 300px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Tao-Do</h3>
                                <h2>App Logo</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Community</h3>
                            <div class="viewer-title">Tao-Do</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is mostly placeholders. Confirm what Tao-Do is and what the logo represents, then document rationale and applications.

### 16. Stairs of Sisyphus — Digital Painting

- **Card label:** Digital Painting
- **Card category:** Digital Painting
- **Viewer title:** Stairs of Sisyphus
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/tetra.png'); background-size: auto 100%;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Stairs of Sisyphus</h3>
                                <h2>Digital Painting</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Digital Painting</h3>
                            <div class="viewer-title">Stairs of Sisyphus</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Add concept, composition, medium/tools, process, and intended interpretation; verify the `tetra.png` asset belongs to this work.

### 17. Social Preview — Meta Content

- **Card label:** Meta Content
- **Card category:** Meta Content
- **Viewer title:** Social Preview
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/social-preview.png'); background-size: 600px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Social Preview</h3>
                                <h2>Meta Content</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Meta Content</h3>
                            <div class="viewer-title">Social Preview</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Clarify whether this is a design artifact, social-card template, or implementation work; document purpose and use.

### 18. Ecco App — Mockup

- **Card label:** Mockup
- **Card category:** Mockup
- **Viewer title:** Ecco App
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/iPhone closeup EccoAi.png'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Ecco App</h3>
                                <h2>Mockup</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Mockup</h3>
                            <div class="viewer-title">Ecco App</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Describe product concept, user need, screens/flow, and which parts are exploratory versus implemented.

### 19. Progress Report — v1

- **Card label:** v1
- **Card category:** v1
- **Viewer title:** Progress Report
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/2026.png'); background-size: 450px auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Progress Report</h3>
                                <h2>v1</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">v1</h3>
                            <div class="viewer-title">Progress Report</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Identify what process the report tracks, timeframe, audience, and intended meaning of “v1.”

### 20. 2001: Space Odyssey — UI Patterns

- **Card label:** UI Patterns
- **Card category:** UI Patterns
- **Viewer title:** 2001: Space Odyssey
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/controls-v2.png'); background-size: 900px auto; background-position: 0px -18px;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">2001: Space Odyssey</h3>
                                <h2>UI Patterns</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI Patterns</h3>
                            <div class="viewer-title">2001: Space Odyssey</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Explain which UI patterns are studied, the behavior/visual conventions, and relevant takeaways.

### 21. Type Style Guide — v1

- **Card label:** v1
- **Card category:** v1
- **Viewer title:** Type Style Guide
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/type-example-full.png'); background-size: cover; background-position: 0px 0px;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Type Style Guide</h3>
                                <h2>v1</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">v1</h3>
                            <div class="viewer-title">Type Style Guide</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Document typefaces/roles, hierarchy, sizing/spacing rules, tokens, and intended use.

### 22. SpaceX Launch — Coco Beach '24

- **Card label:** Photography
- **Card category:** Photography
- **Viewer title:** SpaceX Launch: Coco Beach '24
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/photos/insta/419491343_340386028838911_4643232878049084887_n.jpg'); background-size: cover; background-position: 0 -244px;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">SpaceX Launch: Coco&nbsp;Beach&nbsp;'24</h3>
                                <h2>Photography</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Photography</h3>
                            <div class="viewer-title">SpaceX Launch: Coco&nbsp;Beach&nbsp;'24</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Add confirmed capture context, technique/equipment if relevant, editing approach, and event/date/location details.

### 23. Sandbox Hero — v1

- **Card label:** v1
- **Card category:** v1
- **Viewer title:** Sandbox Hero
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/sandbox-stretch-scale.gif'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Sandbox Hero</h3>
                                <h2>v1</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">v1</h3>
                            <div class="viewer-title">Sandbox Hero</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Document the hero experiment, media/interaction behavior, implementation approach, and relation to later sandbox versions.

### 24. POV Blood Moon

- **Card label:** Photography
- **Card category:** Photography
- **Viewer title:** POV Blood Moon
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/photos/insta/484783277_1221196709604749_5339685594673799894_n.jpg'); background-size: cover; background-position: 0px 0px;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">POV Blood Moon</h3>
                                <h2>Photography</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Photography</h3>
                            <div class="viewer-title">POV Blood Moon</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Add capture context and technique, and explain what “POV” distinguishes about this image.

### 25. Persist — Painting

- **Card label:** Painting
- **Card category:** Painting
- **Viewer title:** Persist
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/photos/insta/122258246_193456535490962_6960342295849992823_n.jpg'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Persist</h3>
                                <h2>Painting</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Painting</h3>
                            <div class="viewer-title">Persist</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Describe idea, medium, composition/process, and intended reading; confirm the selected image is representative.

### 26. Black Hole — Drawing Study

- **Card label:** Drawing Study
- **Card category:** Drawing Study
- **Viewer title:** Black Hole
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/photos/insta/116424306_114050756904892_5290358730903370648_n.jpg'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Black Hole</h3>
                                <h2>Drawing Study</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Drawing Study</h3>
                            <div class="viewer-title">Black Hole</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Add subject/prompt, medium, formal focus, and what the study explores.

### 27. Blood Moon

- **Card label:** Photography
- **Card category:** Photography
- **Viewer title:** Blood Moon
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/photos/insta/484228421_963763472464113_728353326294345947_n.jpg'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Blood Moon</h3>
                                <h2>Photography</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">Photography</h3>
                            <div class="viewer-title">Blood Moon</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Add capture context and selection rationale; differentiate it from POV Blood Moon.

### 28. Bounce: Keyframes — CSS Animation

- **Card label:** CSS Animation
- **Card category:** CSS Animation
- **Viewer title:** Bounce: Keyframes
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/samples/code-sample-keyframes.png'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Bounce: Keyframes</h3>
                                <h2>CSS Animation</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">CSS Animation</h3>
                            <div class="viewer-title">Bounce: Keyframes</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Explain animation goal, keyframe/timing approach, implementation details, and possible reuse.

### 29. Chat Help — UI

- **Card label:** UI
- **Card category:** UI
- **Viewer title:** Chat Help
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/samples/chat.png'); background-size: cover; background-position: 0px 0px;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Chat Help</h3>
                                <h2>UI</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Chat Help</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Describe support scenario, user need, conversation/interaction model, and how the UI helps resolve it.

### 30. Grid Properties — AG Grid JS

- **Card label:** AG Grid JS
- **Card category:** JS
- **Viewer title:** Grid Properties
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/samples/AGGrid-example.png'); background-size: cover;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat ">Grid Properties</h3>
                                <h2>AG Grid JS</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">JS</h3>
                            <div class="viewer-title">Grid Properties</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Document grid behavior/configuration, relevant AG Grid/JavaScript APIs, what the example demonstrates, and reusable learning.

### 31. Mellon — Trades & Transactions

- **Card label:** Mellon
- **Card category:** Trades & Transactions
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/samples/mellon-trade-panel-clean.png'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Trades & Transactions</h3>
                                <h2>Mellon</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Viewer is template text. Write the financial workflow/user problem, information hierarchy, interaction patterns, design decisions, and outcome. Keep sensitive client details out.

### 32. Coming Soon — transaction-card image

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`; 2. `undefined`; 3. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url( 'https://joeldom.github.io/asset/samples/Row 3 - ACTIVE TRXN____.png'); background-size: 150% auto; background-position: 0px 0px;"> -->
                    <!-- <article style="background-image:url( 'https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto; background-position: 0px 0px;"> -->
                    <!-- ALL_WORK.md follow-up — Coming Soon — transaction-card image: Identify actual project/feature; viewer title currently repeats Mellon: Trades & Transactions. -->
                    <article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Placeholder: generic title and repeated Mellon viewer title; identify the actual project/feature before changing the copy.

### 33. Mellon — Account

- **Card label:** Mellon
- **Card category:** Account
- **Viewer title:** (no viewer title)
- **Image sequence (source order):** 1. `undefined`; 2. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/samples/join.png'); background-size: 100% auto;"> -->
                    <!-- ALL_WORK.md follow-up — Mellon — Account: Viewer missing: add account experience, workflow, key information, and relationship to other Mellon entries. -->
                    <article style="background-image:url('https://joeldom.github.io/asset/samples/Queue.jpg'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Account</h3>
                                <h2>Mellon</h2>
                            </div>
                        </a>
                    </article>
```

**Project note:** Viewer content is absent. Add the account experience, workflow, key information, and relationship to the Trades & Transactions entry; verify both images are intended.

### 34. Coming Soon — placeholder 2

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 35. Coming Soon — placeholder 3

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix-destroy.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 36. Coming Soon — placeholder 4

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 37. Coming Soon — placeholder 5

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 38. Working on it — stay tuned

- **Card label:** stay tuned
- **Card category:** Working on it
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/samples/PS CS6 Splash.png'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Working on it</h3>
                                <h2>stay tuned</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

**Project note:** Placeholder: temporary label and repeated Mellon viewer content; intended project remains unconfirmed.

### 39. Coming Soon — placeholder 7

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 40. Coming Soon — placeholder 8

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 41. Coming Soon — placeholder 9

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix-destroy.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 42. Coming Soon — placeholder 10

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 43. Coming Soon — placeholder 11

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 44. Coming Soon — placeholder 12

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```

### 45. Coming Soon — placeholder 13

- **Card label:** tbd
- **Card category:** Coming Soon
- **Viewer title:** Mellon: Trades & Transactions
- **Image sequence (source order):** 1. `undefined`

**Verbatim article markup from `all/index.html`:**

```html
<article style="background-image:url('https://joeldom.github.io/asset/images/r/beyond-matrix.gif'); background-size: 100% auto;">
                        <a href="#" class="post-link">
                            <div class="article-inner">
                                <h3 class="cat">Coming Soon</h3>
                                <h2>tbd</h2>
                            </div>
                        </a>
                        <!-- Semantic viewer content -->
                        <div class="viewer-content" style="display: none;">
                            <h3 class="cat">UI</h3>
                            <div class="viewer-title">Mellon: Trades & Transactions</div>

                            <div class="viewer-description">
                                <h3>Overview</h3>
                                <p>[...]</p>

                                <ul>
                                    <li><strong>Structure</strong>: [...]</li>
                                    <li><strong>Interaction</strong>: [...]</li>
                                    <li><strong>Visual Language</strong>: [...]</li>
                                    <li><strong>Philosophy</strong>: [...]</li>
                                </ul>

                                <h3>Goal</h3>
                                <p>[...]</p>
                                <a href="#" title="[...]"><span class="see-more">Case Study</span></a>
                            </div>
                        </div>
                        <!--/ viewer content -->
                    </article>
```


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
_Last reviewed: 2026-10-20. The page-order transcription is reconciled against `all/index.html` on `gh-pages`. This document is a manually maintained catalog, not a runtime data source._
