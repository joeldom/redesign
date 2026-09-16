# Sandbox

> A living workspace for experiments, prototypes, visual studies, interface ideas, code experiments, and things that are not ready to become projects yet.

The sandbox is both a **human development space** and an **agent-readable workspace**. It exists to make experimentation cheap: ideas can be tried, changed, broken, rebuilt, documented, and revisited without needing to become polished projects first.

## Current sandbox

The active sandbox lives at [`redesign/sandbox`](https://github.com/joeldom/redesign/tree/gh-pages/sandbox) on the `gh-pages` branch. The directory currently contains the experiments and supporting spaces below. This README is the quick entry point; [`SANDBOX.md`](./SANDBOX.md) is the deeper operating guide.

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

## How to use it

### For humans

- Experiment first; organize when organization becomes useful.
- Keep unfinished work. A rough experiment can become a feature, a project, a reference, or nothing at all.
- Prefer small, reversible changes while exploring.
- Reuse existing site infrastructure when it helps, especially the shared style guide and established CSS variables/utilities.
- Document an experiment when its purpose, behavior, or setup would otherwise be easy to lose.

### For agents

Before changing anything:

1. Inspect the existing sandbox item and its surrounding files.
2. Preserve unrelated work and existing comments/structure unless a change requires otherwise.
3. Prefer the smallest useful change over a broad refactor.
4. Reuse existing site/style-guide resources instead of introducing duplicate systems.
5. Test the rendered result when working on HTML/CSS/JS.
6. Keep experiments independently understandable where practical.
7. Update documentation or viewer metadata when a change affects how an item is opened or understood.

Do not assume every sandbox item needs to be production-ready, generalized, framework-based, or cleaned up. The sandbox is explicitly allowed to be strange, redundant, temporary, visual, technical, or unfinished.

## Viewer direction

The sandbox is intended to grow into a viewer-driven workspace rather than simply a directory of links.

A sandbox item can eventually declare how it should be opened:

```js
{
  id: "example",
  title: "Example Experiment",
  path: "./example/",
  type: "html",
  viewer: {
    type: "iframe",
    mode: "fullscreen"
  }
}
```

Possible viewer types include:

- `iframe` — isolated live HTML/CSS/JS experiments.
- `document` — Markdown or other readable documents.
- `code` — source/code inspection.
- `media` — image, video, audio, or other media.
- `page` — a normal sandbox page.
- `custom` — specialized viewer behavior when an experiment needs it.

The default live-code direction is an iframe so an experiment's CSS and JavaScript can remain isolated from the sandbox shell. Where sandboxing is appropriate, use restrictive iframe permissions such as `sandbox="allow-scripts"` rather than granting capabilities automatically.

The eventual viewer can provide responsive layouts such as a full viewport, mobile presentation, padded presentation, or a large-screen central viewer with surrounding context. The current direction is roughly a 20% / 60% / 20% composition on large screens, with the central 60% acting like a narrow, devtools-like experiment viewport.

## Markdown is a first-class sandbox format

Markdown files should be viewable through the same viewer system. A rendered Markdown document can use the site's existing typography, spacing, colors, CSS variables, and other style-guide primitives instead of becoming a separate visual system.

This makes Markdown useful for:

- experiment notes
- design studies
- technical documentation
- agent instructions
- specifications
- source material
- temporary planning documents

## Style guide

Sandbox experiments should be able to consume the shared site's style language when useful. The goal is not to force every experiment into the same visual treatment, but to make the style guide available as a common foundation for typography, spacing, color, responsive behavior, components, and viewer UI.

An experiment may intentionally depart from the style guide when the experiment itself is testing a different visual or interaction direction.

## Repository model

The current active workspace is `joeldom/redesign/sandbox` because it is also where experiments can be featured directly on the portfolio site.

A separate [`joeldom/sandbox`](https://github.com/joeldom/sandbox) repository is intended for deeper or more autonomous agent work as the sandbox grows. Moving an experiment there should be treated as an organizational decision, not a requirement for every experiment.

High commit activity in `redesign` is acceptable while the sandbox is actively being developed and maintained as a solo-contributor workspace. There is no need to create branches solely to make the repository history look quieter.

## Experiment lifecycle

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

## Related files

- [`SANDBOX.md`](./SANDBOX.md) — detailed sandbox operating guide and combined human/agent instructions.
- [`index.html`](./index.html) — current sandbox index/viewer surface.
- [`viewer/`](./viewer/) — viewer-related experimentation.

---

### Copy/paste inventory

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
