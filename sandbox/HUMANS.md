# HUMANS.md — Sandbox

> Human context for the active redesign playground.

The sandbox is where ideas get to exist before they have to explain themselves.

It is a working space for visual experiments, interface studies, code, writing, media, accessibility tests, viewer development, strange prototypes, and things that may never become portfolio work.

---

## Why It Exists

The main site is where things are presented.

The sandbox is where things are figured out.

That distinction matters.

An experiment can be incomplete and still be useful. It can be technically successful but conceptually unresolved. It can be visually interesting without having a practical destination. It can answer one question and create three more.

The sandbox gives those states somewhere to live.

---

# A Playground, Not a Waiting Room

The sandbox should remain easy to enter and easy to leave.

There is no requirement that everything become:

- polished
- generalized
- framework-based
- documented immediately
- production-ready
- a portfolio project

The useful outcome may simply be knowing what happened.

---

# How Ideas Move

A typical path might look like:

```text
shorthand thought
      ↓
rough experiment
      ↓
working behavior
      ↓
technical refinement
      ↓
visual / conceptual refinement
      ↓
feature
      ↓
project
```

But an experiment can also stop at any point.

```text
idea → experiment → done
```

No graduation is required.

---

# Tonal Modality

**Tonal Modality** is especially important here because the sandbox captures work while it is still changing.

The language surrounding an experiment may shift from:

```text
"make this thing work"
```

to:

```text
"the component isolates the interaction from the surrounding viewer"
```

to:

```text
"the boundary gives the experiment somewhere to be unstable without making the rest of the system unstable"
```

Those are not competing voices. They describe different layers of the same thought.

The first is working language.

The second is technical language.

The third is conceptual language.

The sandbox should have room for all three.

---

# Vernacular → Documentation

Short internet-style messages are often intentionally compressed.

They can contain:

- shorthand
- fragments
- repeated ideas
- sudden pivots
- technical vocabulary
- visual references
- emotional emphasis
- an implementation request mixed with a design question

An agent should be able to turn that into structured work without stripping away the reason the idea was interesting.

Likewise, a polished document should not pretend the original thought was always polished.

The movement from rough language to formal language is itself part of the development process.

---

# Matter of Fact → Artistic

Some experiments are easier to understand when described literally first.

For example:

> The viewer keeps the experiment in a narrow central viewport and reserves the surrounding space for context.

That explains the layout.

But the reason for the layout may be better expressed differently:

> The center becomes a contained field of activity while the surrounding space remains aware of what is happening inside it.

That describes the experience.

Both belong.

The point is not to make technical writing poetic. The point is to let the description reach the level of the idea being explored.

---

# Self-Reference

Descriptions generally avoid unnecessary first-person language.

The focus is usually on:

- the work
- the system
- the interaction
- the observation
- the result
- the effect

First person is useful when authorship or personal intent is specifically relevant.

The absence of constant "I" statements should not be mistaken for an absence of personality.

The personality is often carried by the choices of structure, vocabulary, references, and what is considered worth documenting.

---

# Technical Weeds Are Welcome

A small implementation detail can be worth documenting if it reveals why the experiment became what it is.

The sandbox can contain the details that a final portfolio page would omit:

- a browser quirk
- a CSS decision
- a failed interaction
- a rejected approach
- an accessibility discovery
- a viewer constraint
- a strange naming decision
- a small performance observation

The question is not whether the detail is too technical.

The question is whether it preserves something worth knowing.

---

# Changelogs Stay Short

When an experiment changes, its changelog should usually state the useful result rather than reproduce the entire thinking process.

```text
- Added isolated iframe loading to Viewer.
- Added keyboard navigation to experiment controls.
```

The deeper reasoning can live in notes or project documentation.

---

# Metadata Is Not Decoration

The sandbox is a useful place to explore the layer beneath the visible interface.

Metadata, semantic structure, alt text, accessible names, ARIA, filenames, identifiers, social previews, and viewer configuration can all carry meaning.

A visually minimal experiment may still be information-dense underneath.

That is not accidental clutter.

It can be part of how the work remains understandable to humans, browsers, search systems, assistive technology, and agents.

---

# Accessibility Is Part of the Experiment

Accessibility should be considered while an interaction is being developed rather than treated as a final inspection.

The sandbox can test:

- keyboard interaction
- focus movement
- semantic structure
- accessible names
- alt text
- contrast
- motion behavior
- responsive states
- reduced-motion alternatives

The goal is not simply compliance.

The goal is that the idea survives different ways of experiencing it.

---

# Vocabulary and Thought Lineage

The sandbox may accumulate unusual names.

Some are temporary. Some become persistent.

A particular word can become a compact reference to:

```text
an experiment
+ a previous version
+ a visual idea
+ a technical behavior
+ a conceptual thread
```

This creates a kind of vocabulary graph.

In places it can feel almost cryptographic: the word itself is small, but it points toward a larger history.

That does not mean every word is a secret code.

It means that naming can preserve thought lineage.

Do not casually replace an established term with a cleaner generic synonym if the original term has accumulated meaning.

---

# The Separate Sandbox Repository

The active playground remains inside `redesign` because experiments currently benefit from being close to the website.

`joeldom/sandbox` is the intended place for deeper agent-assisted work, reusable infrastructure, automation, or experiments that have become independent enough to need their own lifecycle.

The distinction is about purpose, not prestige.

An experiment being active does not mean it needs to move.

---

# Human Rules

- Make the experiment before deciding what it should become.
- Keep unfinished work when it still contains useful information.
- Let organization emerge from repetition.
- Preserve the weird parts when the weirdness is intentional.
- Keep useful implementation detail.
- Keep changelogs concise.
- Let project descriptions become more conceptual when the work calls for it.
- Treat metadata and accessibility as part of the design.
- Preserve vocabulary that carries lineage.
- Do not mistake shorthand for poor thinking.
- Do not mistake polish for better thinking.

---

# Direction

The sandbox should become a place where the distance between an idea and a working thing stays small.

Not every experiment needs to become a feature.

Not every feature needs to become a project.

But the path between them should remain visible when it contains something worth remembering.
