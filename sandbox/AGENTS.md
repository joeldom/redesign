# AGENTS.md — Sandbox

> This document is both agent guidance and part of the authored sandbox documentation. Preserve its visual, historical, and navigational structure unless there is a reason to change it.

> Agent operating context for `redesign/gh-pages/sandbox/`.

The sandbox is an experimental workspace. It is not a staging environment that must be clean, generalized, or production-ready.

The primary rule is simple:

**Understand the experiment before changing it.**

---

## Before You Touch Anything

The sandbox is allowed to contain material that is useful beyond the immediate experiment: images, timelines, changelogs, notes, version history, maps, comments, metadata, and unfinished ideas. Do not remove or normalize these simply because they are not required to run the experiment.

An agent can create more work by making a change that appears to simplify things. Consider the human cost of reconstructing or backtracing lost context.

When work crosses experiments or versions, use:

**understand → preserve → change → verify**

rather than simplifying first and reconstructing context afterward.

Before You Touch Anything

1. Inspect the experiment and its surrounding files.
2. Read any local `README`, `AGENTS`, `HUMANS`, notes, or metadata.
3. Identify the experiment boundary.
4. Determine whether it is standalone or depends on shared assets.
5. Check for style-guide, viewer, or registry conventions.
6. Determine whether the experiment is intentionally unfinished.
7. Preserve unrelated work.

If the implementation looks strange, first determine whether the strangeness is the experiment.

---

## Sandbox Is Allowed to Be Weird

Do not normalize every experiment into the same architecture.

Avoid:

- framework adoption for its own sake
- broad refactors while exploring a local problem
- deleting comments because they look old
- removing duplicate code merely because duplication exists
- restructuring unrelated experiments
- renaming established terms without a reason
- turning every experiment into a reusable component
- prematurely optimizing the sandbox

A direct HTML/CSS/JS experiment may be exactly the right implementation.

---

# Communication + Tonal Modality

The sandbox records thought at different stages. The language should be allowed to reflect that.

**Tonal Modality** is the deliberate movement between registers such as:

- shorthand / vernacular
- concise status language
- matter-of-fact technical writing
- detailed implementation analysis
- reflective design rationale
- artistic / visual / conceptual description

An agent should not flatten these into one voice.

For example, a note may say:

```text
viewer feels too boxed in. maybe side context but keep center narrow.
```

A technical note may later say:

```text
The viewer reserves a central development viewport and uses the surrounding columns for context and controls.
```

A project description may then say:

```text
The narrow center creates a deliberate boundary: the experiment feels contained without becoming detached from the system presenting it.
```

These are three useful descriptions of the same thought at different levels.

Preserve that distinction.

---

## Shorthand

Treat informal prompts as working language.

They may:

- omit grammar
- change direction mid-message
- repeat an idea with increasing specificity
- over-explain one detail
- collapse several requirements into one sentence
- use established project vocabulary without defining it

Recover the intent before writing the final artifact.

Do not assume the final documentation should reproduce the shorthand.

Likewise, do not discard the shorthand's useful reasoning merely because it is informal.

---

## Depth and Verbosity

Do not confuse length with depth. A short note can contain high conceptual density; a long note can represent exploration rather than final doctrine.

Distinguish brevity from simplicity, length from importance, repetition from emphasis, shorthand from incompleteness, and technical detail from technical significance.

---

## Technical Detail

When a technical detail explains why an experiment exists, keep it.

Useful detail includes:

- implementation constraints
- browser behavior
- CSS architecture
- JavaScript behavior
- interaction states
- responsive decisions
- accessibility behavior
- metadata
- viewer isolation
- rejected approaches
- small discoveries that influenced the design

The standard is not "is this detailed?"

The standard is:

> **Does this detail explain something worth preserving?**

---

## Project Storytelling

When walking through an experiment, begin with concrete information when possible:

```text
what it is
→
how it works
→
why the implementation matters
→
what the experience is intended to communicate
```

A visual or conceptual pivot is allowed when the work calls for it.

Do not force poetic language into a bug fix.

Do not force a visual experiment to sound like an API reference.

---

## Self-Reference

Avoid unnecessary first-person language in generated project copy.

Prefer describing:

- the system
- the experiment
- the interaction
- the result
- the effect

Use first person when authorship, intent, or personal impact is genuinely relevant.

---

# Metadata + Accessibility

Sandbox experiments are also tests of how information survives outside the primary visual presentation.

When appropriate, inspect and preserve:

- semantic structure
- heading hierarchy
- alt text
- accessible names
- ARIA
- keyboard interaction
- focus states
- reduced motion
- contrast
- responsive behavior
- Open Graph metadata
- document metadata
- viewer metadata
- identifiers and filenames

High metadata density is not automatically noise.

Metadata can be part of the design system and part of the agent's ability to understand the experiment.

---

# Thought Lineage

Established terminology should be treated as intentional until shown otherwise.

A particular word may connect:

```text
current feature
      │
      ├── previous version
      ├── experiment
      ├── visual reference
      ├── implementation idea
      └── conceptual thread
```

Some words function like compact symbolic keys to a larger thought lineage.

This can border on cryptographic thinking in the sense that a small, particular token may encode or point toward more context than its surface meaning reveals.

Do not invent hidden meanings.

Do preserve known ones.

If renaming a feature or identifier would break that lineage, prefer keeping the established term and explaining it rather than replacing it with a generic synonym.

---

# Viewer Work

When working on the Sandbox Viewer:

- keep the viewer separate from experiment implementation
- prefer iframe isolation for executable experiments
- use the smallest necessary iframe permissions
- preserve responsive viewport behavior
- keep metadata small and explicit
- do not hard-code experiment-specific layouts into the viewer
- distinguish the experiment's declaration from the viewer's presentation

The viewer should make experiments easier to experience without becoming the experiment itself.

See [`SANDBOX.md`](./SANDBOX.md) for the broader architecture.

---

# Registry

The eventual sandbox registry should be the source of truth for item metadata and viewer behavior.

A typical item may contain:

```js
{
  id: "example",
  title: "Example Experiment",
  path: "./example/",
  type: "html",
  viewer: {
    type: "iframe"
  }
}
```

Keep registry metadata deliberately small.

Do not create fields before the viewer or index has a real need for them.

---

# Testing

For HTML/CSS/JS experiments:

1. Test the rendered result.
2. Test the intended interaction.
3. Check responsive behavior.
4. Check keyboard behavior when relevant.
5. Check accessibility semantics when relevant.
6. Check asset paths.
7. Check that the viewer remains isolated.

An experiment does not need a complete production test suite unless its purpose requires one.

---

# Promotion

An experiment can remain here indefinitely.

If it becomes a feature or project, document the transition rather than assuming the experiment's history no longer matters.

If it outgrows this directory, consider `joeldom/sandbox` when the work becomes:

- reusable infrastructure
- automation
- agent-oriented tooling
- substantially larger
- independent of the portfolio
- better served by its own development lifecycle

Do not migrate solely because there are many commits.

---

# Agent Completion Pattern

When reporting completed sandbox work, keep the response proportional to the change:

```text
Changed
- file → change

Reason
- why the change matters

Checked
- what was tested
```

For a complex experiment, include the important reasoning and implementation details.

For a one-line fix, do not write an essay.

The response itself should demonstrate Tonal Modality rather than merely describing it.
