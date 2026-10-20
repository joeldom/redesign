# Systems Redesign

> The development environment for the redesign of [joeldombek.com](https://www.joeldombek.com).

`redesign` is where the site is developed as a living system: ideas are collected, interfaces are tested, content is shaped, experiments are documented, and working pieces are promoted into the site.

The repository is intentionally part portfolio, part laboratory, and part development record.

The distinction between those roles matters: **Sandbox is for functional design**—features, behavior, prototypes, and experiments—while **Work is a visual sampler and overview** of created pieces across their categories. Work can include a small logo or photograph as well as a larger project; inclusion means it is developed enough to snapshot and recognize, not that it can never be iterated.

---

## Start Here

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | Project map and entry point |
| [`AGENTS.md`](./AGENTS.md) | Agent operating instructions and communication model |
| [`HUMANS.md`](./HUMANS.md) | Human context, intent, and project philosophy |
| [`TODO.md`](./TODO.md) | Active work and contribution context |
| [`sandbox/README.md`](./sandbox/README.md) | Sandbox entry point |
| [`sandbox/AGENTS.md`](./sandbox/AGENTS.md) | Sandbox-specific agent rules |
| [`sandbox/HUMANS.md`](./sandbox/HUMANS.md) | Sandbox-specific human context |

`CLAUDE.md` may exist for historical compatibility. `AGENTS.md` is the current general agent reference.

---

## What This Repository Is

The redesign environment supports a progression rather than a single build pipeline:

```text
idea
  ↓
prototype
  ↓
sandbox / test
  ↓
interface + content refinement
  ↓
feature
  ↓
project / portfolio
  ↓
production
```

The arrows are directional, not mandatory. Some experiments remain experiments. Some ideas become documentation. Some become visual language. Some disappear.

The point is to preserve the path well enough that useful work can be revisited.

---

## Sandbox

The active functional-design workspace is [`sandbox/`](./sandbox/).

It is intentionally permissive: feature experiments, HTML/CSS/JS prototypes, interaction tests, viewer/player development, utilities, and unfinished behavior studies can coexist there. Its purpose is to explore how something works or behaves; it is not a staging queue that every item must leave.

The `/all/` Work page has a different job: it is a visual sampler and overview of created work across categories. A logo, photograph, or other small piece can qualify if it is sufficiently realized to stand on its own. Its inclusion records a snapshot of work worth representing while leaving room for later iteration. See [`all/ALL_WORK.md`](./all/ALL_WORK.md) for catalog rules and [`sandbox/README.md`](./sandbox/README.md) for functional experiments.

A separate `joeldom/sandbox` repository is intended for larger or more agent-oriented work when an experiment benefits from an independent lifecycle.

The repository boundary should serve the work. High commit activity in the active solo workspace is not itself a reason to reorganize it.

---

## Working Model

This is not only a code repository. It is also a record of design thought.

A useful implementation should preserve both:

- **what changed** — the concrete implementation
- **why it changed** — the design reasoning, constraint, observation, or effect that made the change worth making

Technical documentation may go deep when the details matter. Changelogs should usually cut directly to the useful takeaway. A project description may move from matter-of-fact explanation into visual, artistic, or conceptual storytelling when the work itself calls for that shift.

That difference is intentional and is documented more fully in `AGENTS.md` and `HUMANS.md`.

---

## Content Map

- Production / portfolio → [joeldombek.com](https://www.joeldombek.com)
- Development site → [joeldom.github.io/redesign](https://joeldom.github.io/redesign)
- Active sandbox → [redesign/sandbox](https://github.com/joeldom/redesign/tree/gh-pages/sandbox)
- All Work catalog → [`all/ALL_WORK.md`](./all/ALL_WORK.md), the companion reference for the `/all/` page and its project-content workflow
- Sandbox guide → [`sandbox/README.md`](./sandbox/README.md), covering how experiments and non-portfolio work are organized and described
- Dedicated future sandbox → [joeldom/sandbox](https://github.com/joeldom/sandbox)
- Shared assets → [joeldom/asset](https://github.com/joeldom/asset)
- Resume → [joeldom/resume](https://github.com/joeldom/resume)

### Landing page: portable / FTP workflow

The GitHub Pages landing page is maintained in `index.html`. When a top-page feature changes, the FTP-uploadable portable copy must be brought into parity; updating only `index.html` is not a complete integration.

| File | Role |
|---|---|
| [`index.html`](./index.html) | Main GitHub Pages landing page and source for top-page integration |
| [`index_portable.html`](./index_portable.html) | Current portable copy for manual FTP upload; **all local asset references must be absolute URLs** |
| [`index_portable-10-20-2026.html`](./index_portable-10-20-2026.html) | Dated portable backup; preserve as historical backup |
| [`bkup/10-20-2026/index.html`](./bkup/10-20-2026/index.html) | Undated-name snapshot of the main page as of 2026-10-20 |
| [`bkup/10-20-2026/portable.html`](./bkup/10-20-2026/portable.html) | Undated-name snapshot of the portable page as of 2026-10-20 |

For top-page work, prototype and verify the behavior in the relevant sandbox first, then integrate it into the main page and portable copy. Refresh the undated snapshot files after the implementation is settled; retain dated backups unchanged. See [`AGENTS.md`](./AGENTS.md) for the required integration and verification checklist.

---

## Documentation Model

Documentation is deliberately split by audience and depth:

```text
README
  ↓
orientation / map

HUMANS
  ↓
intent / philosophy / context

AGENTS
  ↓
operating behavior / conventions / response model

project documentation
  ↓
implementation / reasoning / history

changelog
  ↓
key takeaways
```

The same fact does not need to be repeated at every level. Each document should add the context its reader needs. For `/all/` content, use [`all/ALL_WORK.md`](./all/ALL_WORK.md) alongside [`all/index.html`](./all/index.html): it explains why the catalog exists, how entries are transcribed and reconciled, and which changes must stay synchronized. For work that is still an experiment or does not belong in the portfolio catalog, use the [sandbox README](./sandbox/README.md) for its broader classification and description conventions.

---


## Features Under Development

The development site is both a portfolio surface and a place to build, isolate, and verify new interactions before they are promoted.

- **KUMO / 雲血** — an opt-in visual treatment for the landing-page splash, introduced in [the KUMO proof of concept](./sandbox/kumo/) and integrated into the main page. The footer `JOELDOMBEK` trigger toggles the splash between `grid-bg` and `雲血`; shared `theme.js` handles global light/dark mode, while [`js/kumo.js`](./js/kumo.js) owns KUMO behavior. Keep it opt-in; dark mode remains the default. **KUMO is integrated, so pause further development unless a specific refinement is needed.** Version meaningful refinements and keep the sandbox demo until a deliberate snapshot is selected for promotion. Any top-page refinement must also update the [portable page](./index_portable.html) and current snapshots.
- **Viewer.js** — full-browser media viewing for experiments, collections, and project content.
- **UXBG / Player.js** — embedded media and navigation/player behavior, including control visibility and interaction states.
- **Work / Projects data model** — a planned move toward reusable project data that individual work pages can selectively load. This is a goal, not yet a completed architecture.

Treat these as active development areas unless a feature's own notes explicitly identify it as complete. Prototypes should be tested in the sandbox before being integrated into the main landing page.

## Version History

| Version | Date | Notes |
|---|---|---|
| v1.7 | September 2026 | Documentation model expanded to include tonal modality, communication behavior, metadata/accessibility, and design thought lineage |
| v1.6 | March 2026 | Grey Box refinement and agent workflow documentation |
| v1.5 | January 2026 | Sandbox flow consolidation and Night Mode audit |
| v1.4 | November 2025 | Theme toggle synchronization |
| v1.3 | October 2025 | Work sections, image enlargement, footer refinement |
| v1.2 | September 2025 | Night Mode pass, footer componentization, `_temp_` pages |
| v1.1 | August 2025 | Landing refresh and portable page consistency |
| v1.0 | July 2025 | Initial environment, asset repo, EXO project, S-Tier links |

## Changelog

### September 2026
- Reframed repository documentation around a shared human/agent communication model.
- Added explicit guidance for **Tonal Modality**: technical, matter-of-fact, concise, conversational, and artistic/conceptual modes may coexist and shift according to context.
- Documented the relationship between metadata, accessibility, implementation detail, and design thought lineage.
- Established the sandbox as an active playground rather than a staging area that must remain tidy.

### August 2026
- Viewer.js and Player.js became major sandbox features.
- Viewer supports full-browser media viewing; Player.js supports media within the primary navigation experience.

### April 2026
- Added All/Work page references.
- Continued Viewer experimentation for collections and projects.
- Added video/content player experiments.
- Added agent/human documentation files.
- Added Kronos Trade app experiment.

### October 2025
- Added `brand`, `interface`, `photography`, `writing`, and `all` directories.
- Added image enlargement behavior to tiles.
- Refined footer links and navigation theme behavior.
- Added shared strings to the asset repository.

### September 2025
- Continued Night Mode across major visual components.
- Refined footer sizing and parallax behavior.
- Established top-level temporary surfaces for Sandbox, Gallery, and Landing.

### August 2025
- Refreshed the landing page.
- Improved Sandbox and App consistency.
- Prepared pages for portability to the production FTP environment.

### July 2025
- Added asset-repository content for features.
- Refreshed off-platform links.
- Initialized EXO work.
- Continued GitHub Pages environment changes.
- Added S-Tier clothing-line assets.