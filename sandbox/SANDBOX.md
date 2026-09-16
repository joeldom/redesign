# Sandbox

> A living workspace for experiments, prototypes, visual studies, interface ideas, code experiments, and things that are not ready to become projects yet.

This directory is both a **human development space** and an **agent-readable workspace**.

It exists to make experimentation cheap.

The sandbox is allowed to be unfinished, strange, redundant, experimental, visual, technical, or temporary.

---

## Where the Sandbox Lives

### Current / Live Sandbox

**Repository**

`joeldom/redesign`

**Path**

`gh-pages/sandbox/`

**Live development**

The sandbox currently lives inside the `redesign` repository because the experiments are actively being developed and featured there.

This is intentional.

The repository is currently a solo-contributor environment, so high commit activity is not considered a problem by itself. Experiments do not need to be artificially separated into branches simply to reduce visible repository activity.

### Future Agent Sandbox

**Repository**

`joeldom/sandbox`

The separate `sandbox` repository is intended to become the more dedicated environment for agent-assisted experimentation, automation, reusable tooling, and work that eventually becomes too large or independent for the `redesign/sandbox` directory.

The two repositories are related, but they do not need to behave identically.

```text
joeldom/redesign
└── gh-pages
    └── sandbox
        ├── live experiments
        ├── featured experiments
        ├── prototypes
        └── experiments being developed with the website

joeldom/sandbox
├── future agent work
├── reusable sandbox infrastructure
├── larger experiments
├── automation
└── experiments that have outgrown redesign
```

---

# Humans

## What This Space Is For

The sandbox is not expected to represent finished work.

An experiment may exist here because it:

* tests an interaction
* explores a visual idea
* tests a CSS technique
* explores a JavaScript behavior
* prototypes a component
* tests a viewer
* experiments with animation
* explores responsive layouts
* tests accessibility behavior
* develops an idea that may eventually become part of the portfolio
* is useful enough to keep but not important enough to become a project
* simply needs somewhere to exist while being figured out

Do not optimize the sandbox prematurely.

Experiment first.

Organize when organization becomes useful.

---

## Development Philosophy

The sandbox should remain easy to enter and easy to leave.

Prefer:

* small experiments
* understandable files
* direct HTML/CSS/JS when appropriate
* reusable components when repetition proves useful
* the existing site style system when it improves consistency
* comments when they preserve important reasoning
* simple paths
* predictable naming
* experiments that can be opened directly in a browser

Avoid building infrastructure merely because an experiment *might* eventually need it.

---

# Agents

Agents working in this directory should treat the sandbox as an experimental environment rather than a production application.

## Before Changing Anything

Inspect the relevant experiment before modifying it.

Determine:

1. What files belong to the experiment?
2. Is it standalone?
3. Does it depend on shared assets?
4. Does it use the site's style-guide?
5. Is it intended to be featured?
6. Is there an existing viewer configuration?
7. Is the experiment intentionally unfinished?

Do not rewrite an experiment simply because its implementation is unconventional.

---

## Preserve Existing Work

Do not casually:

* remove comments
* rewrite complete files when a focused change is sufficient
* replace working implementations with frameworks
* rename files without a reason
* restructure unrelated experiments
* remove experimental code that appears intentional
* normalize every experiment into the same architecture

The sandbox is allowed to contain different approaches.

---

# Sandbox Registry

The sandbox index should eventually maintain a registry of experiments.

Each item should be described by enough metadata for the index and viewer to understand how it should be presented.

A future registry may look like:

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

The registry should eventually become the source of truth for the sandbox viewer.

---

# Sandbox Viewer

## Concept

The sandbox index should eventually become more than a directory listing.

Selecting an experiment should open it through a reusable **Sandbox Viewer**.

The viewer determines how an experiment should be presented.

Possible viewer types include:

| Viewer     | Purpose                                                |
| ---------- | ------------------------------------------------------ |
| `iframe`   | Run an HTML experiment in an isolated document         |
| `document` | Render Markdown or other readable content              |
| `code`     | Display source code                                    |
| `media`    | Display an image, video, animation, or other media     |
| `page`     | Navigate directly to a sandbox page                    |
| `custom`   | Allow an experiment to provide its own viewer behavior |

The important distinction is that **the sandbox item and the viewer are separate concepts**.

An experiment declares what it is.

The viewer decides how it should be experienced.

---

# Viewer Metadata

A future sandbox item may define its viewer like this:

```js
{
  id: "color-flow",
  title: "Generative ColorFlow",
  path: "./color-flow/",
  type: "html",

  viewer: {
    type: "iframe",
    mode: "fullscreen",
    width: "60vw",
    height: "100vh"
  }
}
```

A Markdown experiment could instead use:

```js
{
  id: "viewer-notes",
  title: "Viewer Notes",
  path: "./viewer-notes.md",
  type: "markdown",

  viewer: {
    type: "document",
    mode: "panel"
  }
}
```

The metadata should remain deliberately small.

---

# Why iframe for Live Experiments?

For experiments containing executable HTML/CSS/JS, an iframe should generally be preferred over injecting the experiment directly into the viewer DOM.

The iframe provides a useful boundary between:

```text
Sandbox Viewer
      │
      │ isolated document
      ▼
┌───────────────────────┐
│ Experiment             │
│ HTML                   │
│ CSS                    │
│ JavaScript             │
└───────────────────────┘
```

This prevents an experiment's CSS and JavaScript from accidentally modifying the viewer itself.

It also makes viewport experimentation much easier.

The experiment can believe it owns its entire document.

The viewer can control the size of that document.

---

# Live Preview

The eventual viewer should support live experiments without requiring the experiment to be rebuilt into the main website.

A first implementation can simply load:

```html
<iframe
  src="./experiment/"
  title="Sandbox experiment"
  loading="eager">
</iframe>
```

Later, the viewer can support:

* reload
* reset
* fullscreen
* viewport presets
* responsive testing
* source viewing
* opening the experiment directly
* optional live reload
* communication through `postMessage()`

The viewer itself should remain independent of the experiment.

---

# Viewer Layout

The viewer should support a small set of layout primitives rather than hard-coded layouts for individual experiments.

Conceptually:

```text
LARGE SCREEN

20%              60%              20%
┌────────────────┬────────────────┬────────────────┐
│                │                │                │
│                │                │                │
│   CONTEXT      │    EXPERIMENT  │     CONTEXT    │
│                │                │                │
│                │                │                │
└────────────────┴────────────────┴────────────────┘
```

The central area is the primary development viewport.

On smaller screens this should collapse toward a full-width experience:

```text
MOBILE

┌──────────────────────────────┐
│                              │
│          EXPERIMENT          │
│                              │
│       100vh - padding        │
│                              │
└──────────────────────────────┘
```

The viewer should use the site's existing responsive variables where possible.

Potential conceptual variables:

```scss
$full: 100%;
$mobile: 100vw;
$padding: ...;
$viewer-height: 100vh;
```

and, where appropriate:

```css
height: calc(100vh - var(--viewer-padding));
```

The exact values should be established by the existing design system rather than duplicated throughout experiments.

---

# Style Guide Integration

The sandbox should be able to use the existing site style-guide.

This is important.

Experiments should be able to test the actual visual language of the site rather than creating a completely disconnected visual system.

Where practical, sandbox experiments may consume:

* typography
* spacing
* colors
* CSS variables
* utility classes
* component styles
* responsive variables
* viewer primitives
* interaction conventions

The sandbox can therefore function as a **living extension of the style guide**.

An experiment may test a component before the component becomes part of the main site.

---

# Markdown as a Viewer

Markdown should eventually be treated as a first-class sandbox format.

A `.md` file should be able to open inside the same viewer system as an HTML experiment.

This creates a useful relationship:

```text
Sandbox
│
├── HTML experiments
├── CSS experiments
├── JavaScript experiments
├── images
├── video
├── Markdown
├── documentation
└── design-system experiments
```

A Markdown document could therefore become:

* experiment documentation
* design notes
* agent instructions
* technical notes
* project specifications
* source material
* rendered README content

The viewer can apply the site's typography and style system to the rendered document.

This makes Markdown another part of the sandbox's interface rather than merely a file format.

---

# Future Viewer Architecture

A simple first architecture:

```text
sandbox/index.html
        │
        ├── sandbox registry
        │
        ├── item list
        │
        └── viewer
              │
              ├── iframe
              ├── document
              ├── media
              └── code
```

Potential future implementation:

```js
function openSandboxItem(item) {
  switch (item.viewer?.type) {
    case "iframe":
      return openIframeViewer(item);

    case "document":
      return openDocumentViewer(item);

    case "media":
      return openMediaViewer(item);

    case "code":
      return openCodeViewer(item);

    default:
      return openIframeViewer(item);
  }
}
```

Keep this intentionally simple until multiple viewer types actually exist.

---

# Safety

The viewer should assume that sandbox experiments may contain arbitrary experimental code.

Do not execute sandbox code directly inside the viewer's own DOM when an iframe provides a reasonable alternative.

For live executable experiments:

```html
<iframe sandbox="allow-scripts"></iframe>
```

should be considered the default starting point.

Additional permissions should only be granted when an experiment actually requires them.

For example, do not automatically grant:

```text
allow-same-origin
allow-forms
allow-popups
allow-modals
allow-top-navigation
```

without a specific reason.

The goal is not to make the sandbox impossible to experiment in.

The goal is to keep the viewer from becoming unnecessarily coupled to whatever is being experimented with.

---

# Sandbox Item Table

This section should be generated from the actual contents of:

`redesign/gh-pages/sandbox/`

Each item should eventually include:

| Item                       | Type                         | Viewer                           | Description   | Open            |
| -------------------------- | ---------------------------- | -------------------------------- | ------------- | --------------- |
| *generated from directory* | HTML / CSS / JS / MD / media | iframe / document / media / code | *description* | [Open](./path/) |

The table should not become a manually maintained source of truth once the viewer registry exists.

The registry should be able to generate the table.

---

# Copyable Markdown Table

For documentation or README updates, the generated table should also be available as plain Markdown:

```markdown
| Item | Type | Viewer | Description | Open |
|---|---|---|---|---|
| _item_ | HTML | iframe | _description_ | [Open](./item/) |
```

The rendered table and copyable table should represent the same registry data.

---

# Moving an Experiment

An experiment does not need to move repositories simply because it becomes interesting.

Keep it in:

```text
redesign/gh-pages/sandbox/
```

while it benefits from being developed and featured there.

Consider moving or duplicating it into:

```text
joeldom/sandbox
```

when it becomes:

* infrastructure
* a reusable tool
* an agent-oriented experiment
* substantially larger
* independent of the portfolio
* something that needs its own development lifecycle
* something that would benefit from a dedicated repository

The repository boundary should serve the work rather than the other way around.

---

# Agent Working Agreement

When an agent is asked to work in this sandbox:

1. Inspect before changing.
2. Identify the experiment boundary.
3. Preserve unrelated work.
4. Prefer small, reversible changes.
5. Reuse existing site assets and style variables where appropriate.
6. Do not introduce a framework merely for convenience.
7. Do not restructure the sandbox unless requested.
8. Keep experiments independently understandable.
9. Test the actual rendered result when possible.
10. Update the registry when an experiment is added or its viewer behavior changes.
11. Keep documentation close to the experiment when the reasoning is specific to that experiment.
12. Treat this document as the shared operating context for both humans and agents.

---

# Direction

The long-term goal is not simply to have a directory called `sandbox`.

The goal is to make the sandbox a **small experimental operating environment for the site**.

It should allow:

```text
IDEA
  ↓
EXPERIMENT
  ↓
LIVE PREVIEW
  ↓
VIEWER
  ↓
STYLE-GUIDE TEST
  ↓
FEATURE
  ↓
PROJECT
```

while also allowing an experiment to remain exactly what it is:

```text
IDEA
  ↓
EXPERIMENT
  ↓
DONE
```

No experiment needs to graduate.

The sandbox exists so that ideas have somewhere to live.
