# Sandbox

> A living workspace for experiments, prototypes, visual studies, interface ideas, code experiments, and things that are not ready to become projects yet.

This directory is both a **human development space** and an **agent-readable workspace**. It exists to make experimentation cheap: ideas can be tried, changed, broken, rebuilt, documented, and revisited without needing to become polished projects first.

## Where the Sandbox Lives

The active sandbox is currently `gh-pages/sandbox/` inside [`joeldom/redesign`](https://github.com/joeldom/redesign/tree/gh-pages/sandbox). This is intentional: experiments can be developed and featured alongside the portfolio while the repository remains a solo-contributor workspace.

A separate [`joeldom/sandbox`](https://github.com/joeldom/sandbox) repository is intended for deeper agent-assisted work, reusable sandbox infrastructure, automation, or experiments that eventually outgrow `redesign/sandbox`.

High commit activity is fine while this remains an active solo workspace. There is no need to create branches merely to make the repository history look quieter.

## Current Sandbox Inventory

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

## Human Working Rules

- Experiment first; organize when organization becomes useful.
- Keep unfinished work. A rough experiment can become a feature, project, reference, or nothing at all.
- Prefer small, reversible changes while exploring.
- Reuse existing site infrastructure when useful, especially the shared style guide and established CSS variables/utilities.
- Document an experiment when its purpose, behavior, or setup would otherwise be easy to lose.
- Do not optimize the sandbox prematurely.

## Agent Working Rules

Before changing anything:

1. Inspect the existing experiment and its surrounding files.
2. Identify dependencies on shared assets or the style guide.
3. Check whether existing viewer configuration or conventions apply.
4. Preserve unrelated work, comments, and structure unless a change requires otherwise.
5. Prefer the smallest useful change over a broad refactor.
6. Test the rendered result when working on HTML/CSS/JS.
7. Update documentation or viewer metadata when behavior changes.

Do not assume every sandbox item needs to be production-ready, generalized, framework-based, or cleaned up. The sandbox is explicitly allowed to be strange, redundant, temporary, visual, technical, or unfinished.

## Sandbox Viewer

The sandbox index is intended to become more than a directory listing. Selecting an experiment should eventually open it through a reusable **Sandbox Viewer**.

The experiment and its viewer are separate concepts: an experiment declares what it is, while the viewer decides how it should be experienced.

Possible viewer types:

| Viewer | Purpose |
|---|---|
| `iframe` | Run an HTML/CSS/JS experiment in an isolated document |
| `document` | Render Markdown or other readable content |
| `code` | Display source code |
| `media` | Display image, video, animation, or other media |
| `page` | Navigate directly to a sandbox page |
| `custom` | Specialized viewer behavior |

Example metadata:

```js
{
  id: "color-flow",
  title: "Generative ColorFlow",
  path: "./color-flow/",
  type: "html",
  viewer: {
    type: "iframe",
    mode: "fullscreen"
  }
}
```

For executable experiments, an iframe should generally be preferred so experiment CSS and JavaScript remain isolated from the viewer shell. A restrictive starting point is:

```html
<iframe sandbox="allow-scripts"></iframe>
```

Additional permissions should only be added when an experiment actually requires them.

## Viewer Layout

The viewer should support a small set of reusable responsive primitives rather than hard-coded layouts for individual experiments.

The current direction is roughly:

```text
LARGE SCREEN

20%              60%              20%
┌────────────────┬────────────────┬────────────────┐
│                │                │                │
│    CONTEXT     │   EXPERIMENT   │     CONTEXT    │
│                │                │                │
└────────────────┴────────────────┴────────────────┘
```

The central 60% acts as a narrow, devtools-like development viewport. On smaller screens, the viewer should collapse toward a full-width experience using the site's existing responsive variables and viewport conventions.

Conceptually this may use `100vh`, `$full`, `$mobile`, `$padding`, and related design-system values rather than duplicating hard-coded values across experiments.

## Markdown Is a First-Class Viewer Format

Markdown files should eventually open through the same viewer system as live experiments. Rendered Markdown can use the site's existing typography, spacing, colors, CSS variables, and style-guide primitives.

That makes Markdown useful for:

- experiment notes
- design studies
- technical documentation
- agent instructions
- specifications
- source material
- temporary planning documents

## Style Guide Integration

Sandbox experiments should be able to consume the shared site's visual language when useful: typography, spacing, colors, CSS variables, utility classes, component styles, responsive variables, viewer primitives, and interaction conventions.

The goal is not to force every experiment into one visual treatment. An experiment may intentionally depart from the style guide when that departure is what is being tested.

## Registry Direction

The sandbox index should eventually maintain a registry that becomes the source of truth for item presentation and viewer behavior:

```js
const sandboxItems = [
  {
    id: "example",
    title: "Example Experiment",
    path: "./example/",
    type: "html",
    viewer: "iframe"
  }
];
```

The eventual architecture is:

```text
sandbox/index.html
        │
        ├── sandbox registry
        ├── item list
        └── viewer
              ├── iframe
              ├── document
              ├── media
              └── code
```

The registry should eventually generate both the rendered item list and the copyable Markdown inventory rather than requiring two manually maintained lists.

## Experiment Lifecycle

A useful path is:

```text
idea
  ↓
experiment
  ↓
live preview
  ↓
viewer
  ↓
style-guide / UX testing
  ↓
feature or project
```

There is no requirement that an experiment graduate. Keeping something in the sandbox is a valid outcome.

## Related Files

- [`SANDBOX.md`](./SANDBOX.md) — the detailed combined human/agent operating guide.
- [`index.html`](./index.html) — sandbox index/viewer surface when present.
- [`viewer/`](./viewer/) — viewer-related experimentation.

## Copyable Inventory

```markdown
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
```
