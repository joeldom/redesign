# Systems Redesign

> The development environment for the redesign of [joeldombek.com](https://www.joeldombek.com).

`redesign` is where the site is developed as a living system: ideas are collected, interfaces are tested, content is shaped, experiments are documented, and working pieces are promoted into the site.

The repository is intentionally part portfolio, part laboratory, and part development record.

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

The active experimental space is [`sandbox/`](./sandbox/).

It is intentionally permissive: visual studies, HTML/CSS/JS experiments, interaction tests, writing, media, accessibility work, viewer development, and unfinished ideas can coexist there.

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
- Dedicated future sandbox → [joeldom/sandbox](https://github.com/joeldom/sandbox)
- Shared assets → [joeldom/asset](https://github.com/joeldom/asset)
- Resume → [joeldom/resume](https://github.com/joeldom/resume)

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

The same fact does not need to be repeated at every level. Each document should add the context its reader needs.

---

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

---

### Resume v2

- [Resume v2 test directory](https://github.com/joeldom/resume/tree/master/v2) — experimental resume layout/content pass with embedded print styling.
