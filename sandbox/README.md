# Sandbox

> A living workspace for experiments, prototypes, visual studies, interface ideas, code experiments, and things that are not ready to become projects yet.

The sandbox is the **playground of the redesign**.

It is both a human development space and an agent-readable workspace. Ideas can be tried, broken, rebuilt, documented, featured, promoted, abandoned, or simply left alone.

---

## Where It Lives

The active sandbox is:

```text
joeldom/redesign
└── gh-pages
    └── sandbox/
```

This is currently the right place for experiments that are being developed alongside or featured by the site.

A separate `joeldom/sandbox` repository is intended for deeper agent-assisted work, reusable tooling, automation, or experiments that become large or independent enough to need their own lifecycle.

**Do not move work simply because the sandbox is active.** High commit activity is acceptable in the current solo-contributor workflow.

---

## Start Here

| File | Purpose |
|---|---|
| [`README.md`](./README.md) | Quick sandbox map |
| [`HUMANS.md`](./HUMANS.md) | Human context and creative intent |
| [`AGENTS.md`](./AGENTS.md) | Agent operating rules and communication model |
| [`SANDBOX.md`](./SANDBOX.md) | Detailed sandbox and viewer architecture |

The general repository context remains available in [`../README.md`](../README.md), [`../HUMANS.md`](../HUMANS.md), and [`../AGENTS.md`](../AGENTS.md).

---

## What Belongs Here

An item may belong in the sandbox because it:

- tests an interaction
- explores a visual idea
- prototypes HTML/CSS/JS
- tests a component or viewer
- explores animation or motion
- tests responsive behavior
- tests accessibility
- experiments with metadata
- develops a writing or content concept
- explores media presentation
- investigates a technical problem
- may eventually become a feature or project
- is useful enough to keep without needing to become a project

The sandbox is allowed to be unfinished, strange, redundant, technical, visual, temporary, or difficult to categorize.

**Experiment first. Organize when organization becomes useful.**

---

## Current Inventory

| Item | Type | Link |
|---|---|---|
| R-TYPE | Experiment | [R-TYPE](./R-TYPE/) |
| TAS | Experiment | [TAS](./TAS/) |
| absolute | Experiment | [absolute](./absolute/) |
| album | Experiment | [album](./album/) |
| apparel | Experiment | [apparel](./apparel/) |
| arise | Experiment | [arise](./arise/) |
| cal | Experiment | [cal](./cal/) |
| destroy | Experiment | [destroy](./destroy/) |
| downflare | Experiment | [downflare](./downflare/) |
| ecco | Experiment | [ecco](./ecco/) |
| genre | Experiment | [genre](./genre/) |
| hidden | Experiment | [hidden](./hidden/) |
| img | Support | [img](./img/) |
| kronos | Experiment | [kronos](./kronos/) |
| layers | Experiment | [layers](./layers/) |
| modsynth | Experiment | [modsynth](./modsynth/) |
| motherbase | Experiment | [motherbase](./motherbase/) |
| neogeo | Experiment | [neogeo](./neogeo/) |
| opcost | Experiment | [opcost](./opcost/) |
| packets | Experiment | [packets](./packets/) |
| products | Experiment | [products](./products/) |
| prompt | Experiment | [prompt](./prompt/) |
| scam | Experiment | [scam](./scam/) |
| sorta | Experiment | [sorta](./sorta/) |
| static | Support | [static](./static/) |
| stream | Experiment | [stream](./stream/) |
| tagcloud | Experiment | [tagcloud](./tagcloud/) |
| tests | Tests | [tests](./tests/) |
| timecries | Experiment | [timecries](./timecries/) |
| uxbg | Experiment | [uxbg](./uxbg/) |
| v2 | Experiment | [v2](./v2/) |
| vidjs | Experiment | [vidjs](./vidjs/) |
| viewer | System / Experiment | [viewer](./viewer/) |
| writing | Experiment | [writing](./writing/) |

This inventory is useful as a human-readable index. The eventual registry should become the source of truth and generate the inventory rather than requiring the list to be maintained twice.

---

## Tonal Modality in the Sandbox

Sandbox notes may be rough. Documentation may be formal. A project walkthrough may become visual or conceptual. A changelog may reduce everything to one sentence.

This is intentional.

**Tonal Modality** allows the language around an experiment to change with the kind of thought being recorded.

```text
shorthand
   ↓
experiment
   ↓
matter-of-fact result
   ↓
technical detail
   ↓
visual / conceptual interpretation
```

Agents should preserve the distinction instead of flattening every note into one generic documentation voice.

A short note can contain a surprisingly dense idea. A long technical note can contain the exact detail that makes an implementation worth keeping. Neither should be judged by length alone.

---

## Metadata + Accessibility

The sandbox is also a place to test information that may not be visually obvious.

Treat the following as first-class experimental material:

- semantic HTML
- headings and document structure
- accessible names
- alt text
- ARIA where appropriate
- keyboard interaction
- focus behavior
- reduced-motion behavior
- contrast
- responsive behavior
- Open Graph / social metadata
- viewer metadata
- filenames and identifiers

A high-density metadata surface may be intentional. Do not remove metadata merely because it is invisible in the rendered interface.

---

## Thought Lineage

Names inside the sandbox may persist across experiments.

A word can be a feature name, a reference to an earlier prototype, a visual metaphor, a technical shorthand, or a compact pointer to a larger body of thought.

Some terminology therefore behaves almost like a symbolic key: small on the surface, connected to more context underneath.

Preserve established names unless there is a reason to change them.

Do not invent hidden meaning where none exists, but do not erase meaningful vocabulary simply because it looks unusual.

---

## Viewer Direction

The sandbox index is intended to become a reusable **Sandbox Viewer**, not merely a directory listing.

An experiment declares what it is. The viewer decides how it should be experienced.

Possible viewer types:

| Viewer | Purpose |
|---|---|
| `iframe` | Isolated executable HTML/CSS/JS experiment |
| `document` | Markdown or other readable content |
| `code` | Source display |
| `media` | Image, video, animation, or other media |
| `page` | Direct navigation |
| `custom` | Specialized viewer behavior |

The detailed viewer model lives in [`SANDBOX.md`](./SANDBOX.md).

---

## Experiment Lifecycle

```text
idea
  ↓
experiment
  ↓
live preview
  ↓
viewer
  ↓
style-guide / UX test
  ↓
feature
  ↓
project
```

Or simply:

```text
idea
  ↓
experiment
  ↓
done
```

No experiment is required to graduate.

---

## Promotion / Migration

Keep an experiment here while it benefits from being developed with the site.

Consider moving or duplicating it into `joeldom/sandbox` when it becomes:

- reusable infrastructure
- an agent-oriented tool
- automation
- substantially larger
- independent of the portfolio
- something that needs a dedicated development lifecycle

The repository boundary should serve the work.

---

## Related Files

- [`SANDBOX.md`](./SANDBOX.md) — detailed combined sandbox and viewer guide
- [`AGENTS.md`](./AGENTS.md) — agent rules
- [`HUMANS.md`](./HUMANS.md) — human context
- [`index.html`](./index.html) — sandbox index when present
- [`viewer/`](./viewer/) — viewer experiments
