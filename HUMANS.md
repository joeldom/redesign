# HUMANS.md

> Human context for `joeldom/redesign`.

This repository is the working environment for the redesign of [joeldombek.com](https://www.joeldombek.com): a place where interface development, visual experimentation, writing, technical investigation, and the history of the work can exist together.

The important distinction is that this is not intended to be a perfectly clean representation of finished work. It is the place where finished work comes from.

---

## The Principle

**Iteration and creation happen at the same time.**

Ideas do not need to be completely formed before they can be built. A feature can begin as a sketch, a strange interaction, a line of shorthand, a visual reference, a technical problem, or a question that is easier to answer by making something.

The repository should make that cheap.

Some things become features.

Some become projects.

Some become documentation.

Some remain experiments.

Some are abandoned.

That is all useful history.

---

# The Sandbox Is a Playground

The active sandbox lives inside `redesign` because that is where many ideas currently need to be developed, tested, and sometimes featured directly alongside the site.

A separate `joeldom/sandbox` repository is intended for work that eventually benefits from a larger or more independent environment, especially agent-assisted experiments, reusable tooling, automation, or infrastructure.

There is no requirement to move something merely because it becomes active.

High commit activity is acceptable in a solo development workspace.

The repository should follow the work rather than forcing the work to follow an artificial repository structure.

---

# How the Work Is Written

There is no single correct voice for this project.

The writing can move between:

- shorthand and conversational notes
- concise changelog language
- matter-of-fact technical documentation
- detailed implementation analysis
- reflective design rationale
- visual description
- artistic or conceptual storytelling

This movement is intentional.

The term **Tonal Modality** describes this behavior: the register changes according to what the writing is trying to accomplish.

A bug report does not need the same language as a project description.

A changelog should not sound like an essay.

A visual experiment should not be forced into technical language when the visual idea itself is important.

A technical explanation should not become vague simply because the project has an artistic side.

---

# Shorthand Is Part of the Process

Working notes may be extremely compressed:

```text
viewer needs context but keep 60% center
maybe iframe
metadata should be visible to agent but not UI
```

Or they may over-explain one small point and then jump immediately to a concise instruction.

That is normal.

Shorthand is often a way of thinking in motion. It is not automatically final copy.

An agent should recover the intent from the shorthand rather than mechanically reproduce its surface form.

Conversely, polished documentation should not erase the underlying thought merely because the original note was informal.

---

# Matter of Fact → Conceptual

Project descriptions often work best when they establish concrete facts first and then allow the language to expand.

For example:

```text
The viewer isolates each experiment in an iframe.

That creates a boundary between the experiment and the interface presenting it.

The boundary is also part of the idea: the sandbox can contain something unstable without requiring the surrounding system to become unstable with it.
```

The first sentence explains behavior.

The second explains the relationship.

The third explains the concept.

That progression is useful because it lets technical and artistic language support each other instead of competing.

---

# Self-Reference

The writing generally avoids unnecessary self-reference.

The work, system, interaction, result, or effect should usually be the subject of the sentence.

First person is still appropriate when authorship, intent, experience, or impact is the point.

The goal is not to remove personality. It is to avoid turning every description into a biography of the person who made it.

---

# Detail Has a Purpose

Some work deserves to be documented deeply.

Technical weeds are welcome when they expose an interesting decision, constraint, experiment, implementation detail, or piece of reasoning.

Granularity should answer a useful question:

> Why was this worth thinking about?

A good technical note can show enough of the thought process that another person can understand not only what was built, but why this particular solution exists.

That is different from adding detail merely to make a document longer.

---

# Changelogs Are Different

Changelogs cut straight to the useful takeaway.

They should answer:

- What changed?
- What was added or removed?
- What meaningful behavior is different?

They generally should not contain the entire reasoning chain.

If the reasoning is important, it belongs in project documentation, an experiment note, or another durable artifact.

---

# Metadata, Accessibility, and Meaning

The site treats metadata as part of the interface.

Titles, descriptions, filenames, alt text, accessible names, ARIA, document structure, social metadata, viewer metadata, and other machine-readable information can carry real meaning even when they are not visible on the page.

Accessibility is therefore not a separate cleanup pass. It is part of making the system understandable across different ways of experiencing it.

High metadata density can also be intentional. Do not remove information merely because it is invisible to the casual viewer.

---

# Words Can Carry Lineage

Some words in this project are chosen because they connect multiple points in the work.

A feature name may refer to an earlier prototype. A version label may preserve an old idea. A seemingly unusual word may describe a visual relationship, technical behavior, or conceptual thread that is easier to recognize later than to explain in the moment.

This vocabulary can function almost like a lightweight symbolic system.

In places, it may border on cryptographic thinking: a particular word acts as a compact reference to a larger body of thought.

That does not mean every unusual word contains a secret.

It means established terminology should be treated with care.

When a term has already acquired meaning, preserve it unless there is a reason to change it.

---

# Design Thought as an Artifact

The repository is not only a collection of outputs.

It records some of the path between them.

That path may appear as:

```text
note
→
experiment
→
failed version
→
technical discovery
→
visual refinement
→
feature
→
project
```

The discarded or strange parts can be useful because they explain how the vocabulary and behavior of the finished work developed.

The goal is not to preserve every thought forever.

The goal is to preserve the thoughts that became part of the system.

---

# Human Working Rules

- Build before over-organizing.
- Keep experiments that are still teaching something.
- Do not confuse unfinished with useless.
- Prefer direct implementations when they are sufficient.
- Reuse the existing design system when it helps.
- Depart from it when the experiment is specifically testing a departure.
- Document decisions that would otherwise disappear.
- Keep changelogs concise.
- Let project documentation become detailed when the detail has value.
- Preserve established terminology and lineage.
- Treat accessibility and metadata as first-class concerns.
- Let technical and conceptual language coexist when both describe the work accurately.

---

# Content Map

- Production / portfolio → [joeldombek.com](https://www.joeldombek.com)
- Development environment → [joeldom.github.io/redesign](https://joeldom.github.io/redesign)
- Active sandbox → [`redesign/sandbox`](./sandbox/)
- Dedicated future sandbox → [`joeldom/sandbox`](https://github.com/joeldom/sandbox)
- Shared assets → [`joeldom/asset`](https://github.com/joeldom/asset)
- Resume → [`joeldom/resume`](https://github.com/joeldom/resume)

---

# Documentation Relationship

```text
README
  orientation

HUMANS
  intent + philosophy

AGENTS
  operating behavior

SANDBOX
  experimentation rules

PROJECT NOTES
  thought + implementation

CHANGELOG
  key takeaways
```

Each layer should make the next layer easier to understand without requiring all of the information to be duplicated.

---

# Direction

The redesign should remain a place where a technical system can still feel authored.

A page can be accessible, metadata-rich, responsive, and carefully implemented while also carrying visual language, references, strange details, and conceptual intent.

The code can explain the machine.

The documentation can explain the decision.

The project can explain the idea.

And sometimes a very particular word can quietly connect all three.
