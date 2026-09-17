# AGENTS.md

> Operating context for AI agents working in `joeldom/redesign`.

This file describes how an agent should work in the redesign repository, including how it should inspect code, preserve intent, document changes, and communicate with the human author.

The repository is a living design and development environment, not a conventional application repository. Code, content, experiments, visual studies, documentation, and historical artifacts may intentionally coexist.

---

## 1. Read the Repository as a System

Before changing anything:

1. Identify the relevant path and its parent context.
2. Read the nearest `README`, `AGENTS`, `HUMANS`, or project-specific documentation.
3. Inspect the existing implementation rather than assuming a conventional architecture.
4. Identify shared assets, CSS variables, style-guide dependencies, viewer conventions, and related experiments.
5. Determine whether the requested work is exploratory, corrective, documentary, or intended for production.
6. Preserve unrelated work.

Do not treat unfamiliar code as bad code merely because it is unconventional.

---

## 2. Human + Agent Collaboration

The agent is working inside an authored system. The goal is not to replace the author's judgment or flatten the work into generic best practices.

Prefer:

- understanding before refactoring
- small, reversible changes
- preserving comments that explain intent
- retaining unusual but purposeful structures
- asking when a missing decision materially affects the result
- explaining meaningful tradeoffs
- showing the actual change rather than narrating unnecessary process

When a request is specific, execute it directly. When the request is exploratory, help develop the idea without prematurely turning it into a rigid specification.

---

## 2.1 Change Safety: Do Not Create Work by Removing Work

An agent can create significant human recovery work by making a change that appears to simplify the repository.

Before removing, consolidating, renaming, or substantially restructuring existing material, inspect what purpose it may serve beyond its most obvious function.

This includes:

- visual elements in documentation
- changelogs
- content maps
- timelines
- nice-to-have or future-work sections
- comments and metadata
- versioned experiments
- unusual terminology
- historical or backup artifacts

These may be useful to humans, agents, navigation, authorship, continuity, or thought lineage even when they are not required for the document's primary operational purpose.

Do not remove something merely because it is not necessary for an agent to execute a task.

When a simplification could make the human author reconstruct, rediscover, or backtrace previous work, treat that recovery cost as part of the change.

### Research Before Rewrite

For changes that cross files, versions, or system boundaries, trace the existing relationships before consolidating them.

Example:

    live page
    → source HTML
    → CSS / JS dependencies
    → shared system
    → experiment
    → version history
    → current direction

When multiple versions of an experiment exist, determine what changed conceptually and functionally before assuming the newest version makes earlier versions obsolete.

A newer version may contain implementation progress while an older version preserves the reasoning, discovery, or constraints that produced it.

The default sequence is:

**understand → preserve → change → verify**

rather than:

**simplify → discover what was lost → reconstruct**

# 3. Tonal Modality

**Tonal Modality** is a deliberate part of how this repository communicates and how an agent should interpret context.

It is not a single writing style. It is a contextual switching system: the agent should choose an appropriate register, abstraction level, information density, and degree of detail without losing continuity of thought.

An agent should not force every response, changelog, project description, or technical note into one voice.

The appropriate mode depends on what is being communicated.

### Matter-of-fact

Use for:

- implementation status
- bugs and fixes
- file changes
- setup instructions
- dependencies
- accessibility findings
- compatibility notes
- changelog entries

Be direct. State what happened and what matters.

### Technical / Detailed

Use when the reader benefits from implementation granularity.

This may include:

- architecture
- CSS/JS behavior
- data structures
- interaction logic
- accessibility semantics
- performance considerations
- constraints
- alternatives considered
- reasoning behind a particular implementation

Technical depth is valuable when it reveals something worth understanding. Do not add technical detail merely to sound technical.

### Conversational / Vernacular

The author's shorthand can be fragmented, abbreviated, informal, repetitive, or highly compressed. Agents should understand that this is often a working language rather than the final prose.

Short messages may contain several ideas at once. They may shift direction mid-thought, over-explain one point, then become extremely concise on the next.

Do not automatically mirror every shorthand artifact into polished documentation. Extract the intent first.

### Artistic / Visual / Conceptual

Some projects need language that describes an experience rather than only an implementation.

A project walkthrough may begin matter-of-factly and then pivot into visual or conceptual storytelling when discussing:

- atmosphere
- visual relationships
- symbolism
- motion
- spatial behavior
- perception
- narrative intent
- why an interaction feels the way it does

This is not a failure of technical precision. It is another valid descriptive mode.

### Impact / Effect

Avoid unnecessary self-reference. Prefer describing the work, system, user experience, or resulting effect.

Use first person when emphasis on authorship, intent, or impact genuinely improves the sentence.

The default should generally be:

```text
what it does
→
why it matters
→
how it was made
```

rather than repeatedly:

```text
I did this
→
I did that
→
I decided...
```

---

## 4. Mode Switching Is Intentional

A single artifact may legitimately contain several tonal modes.

For example:

```text
CHANGELOG
matter-of-fact

PROJECT OVERVIEW
clear + descriptive

IMPLEMENTATION
technical + granular

DESIGN RATIONALE
analytical + reflective

VISUAL DESCRIPTION
artistic / conceptual

NOTES
conversational / shorthand
```

Do not homogenize these sections simply to make them sound as though they were written by one generic voice.

The shift itself can communicate the difference between an implementation fact and the thought surrounding it.

---

# 5. Thought Lineage

Some naming, versioning, feature labels, metadata, and documentation carry more information than their literal description suggests.

A particular word may refer to:

- an earlier experiment
- a discarded direction
- a visual metaphor
- a technical constraint
- a previous version
- a conceptual relationship
- an interaction pattern
- a piece of language used elsewhere in the system

Treat these words as possible **lineage markers**.

Do not casually rename them because a more generic name appears cleaner.

The repository may intentionally contain a vocabulary that behaves somewhat like a lightweight symbolic or cryptographic layer: the word is useful because it points backward as well as forward.

This does **not** mean inventing hidden meanings. It means preserving established terminology when the context indicates that it is intentional.

When documenting a feature, prefer the established term first and explain it when necessary.

When an unusual term, version name, feature name, metaphor, or repeated phrase appears, treat it as potentially meaningful before normalizing it. A particular term may be a compact reference to a larger body of previous work.

This is **semantic compression**: a small piece of language can point to an earlier experiment, decision, constraint, or conceptual relationship. The agent does not need to decode a secret; it needs to avoid destroying the pointer.

---

# 6. Metadata Is Part of the Interface

Metadata is not merely SEO decoration.

Treat titles, descriptions, alt text, ARIA labels, document structure, filenames, viewer metadata, Open Graph data, and related machine-readable information as part of the experience.

When changing an interface, consider:

- semantic HTML
- heading hierarchy
- meaningful link text
- alt text
- accessible names
- ARIA only where needed
- keyboard behavior
- focus behavior
- reduced-motion considerations
- contrast
- responsive behavior
- metadata consistency
- social previews
- machine-readable relationships

High metadata density can be intentional. Do not remove useful metadata simply because it is visually invisible.

Accessibility and metadata should support the same underlying clarity: a thing should remain understandable even when the visual presentation changes.

---

# 7. Documentation Depth

Use the document type to determine how much detail belongs in it.

### README
Orientation, purpose, structure, entry points, and current state.

### HUMANS
Intent, philosophy, authorship context, design principles, and how the system should be understood by people.

### AGENTS
Operational rules, preservation rules, decision-making context, and communication behavior.

### Project documentation
Detailed implementation, rationale, experiments, constraints, and thought process.

### Changelog
The key takeaways. Short, concrete, useful.

A changelog should not become a diary.

A technical document should not become a changelog merely because it is long.

---

# 8. Code and File Preservation

Unless explicitly asked otherwise:

- Do not delete comments merely to make code shorter.
- Do not replace a working implementation with a framework for convenience.
- Do not refactor unrelated files.
- Do not rename established files without a reason.
- Do not overwrite experimental work with a generalized abstraction.
- Preserve existing ASCII art, comments, metadata, and unusual structures when they are intentional.
- Prefer a focused edit over a wholesale rewrite.

When a full-file rewrite is genuinely required, preserve meaningful comments and surrounding conventions.

---

# 9. Sandbox Boundary

The active sandbox is:

```text
redesign/gh-pages/sandbox/
```

A dedicated sandbox repository also exists conceptually at:

```text
joeldom/sandbox
```

Use `redesign/sandbox` for experiments that benefit from being developed or featured with the site.

Use the separate sandbox when work becomes sufficiently independent, reusable, infrastructure-oriented, automation-heavy, or large enough to justify its own lifecycle.

Do not move work solely to reduce commit noise.

See `sandbox/AGENTS.md` and `sandbox/SANDBOX.md` for sandbox-specific rules.

---

# 10. Testing

For HTML/CSS/JS changes:

1. Check the actual rendered result when possible.
2. Check the affected responsive states.
3. Check interactions, not only static appearance.
4. Check keyboard/accessibility behavior when relevant.
5. Check that shared assets and paths still resolve.
6. Check that viewer isolation remains intact when working with sandbox experiments.

For documentation-only changes, check links, code fences, headings, and consistency with neighboring documentation.

---

# 11. Changelog Behavior

When making a changelog entry:

- lead with the concrete change
- avoid implementation trivia unless it is important
- use short bullets
- preserve established feature names
- mention impact when useful
- do not narrate the agent's process

Good:

```text
- Added keyboard navigation to the Sandbox Viewer.
- Preserved experiment-level CSS isolation through iframe loading.
```

Not useful:

```text
- I spent some time looking at the viewer and then decided that...
```

The deeper reasoning belongs in project documentation or notes.

---

# 12. When Explaining a Project

A project description can move through levels of abstraction:

```text
WHAT
→
HOW
→
WHY
→
WHAT IT FEELS LIKE
```

Do not force every project into a case-study template.

If the work is primarily technical, stay technical.

If the work has a strong visual or conceptual premise, allow the description to pivot into that language after the concrete facts are established.

The goal is not poetic writing for its own sake. The goal is to describe the thing at the level at which it actually exists.

---

# 13. When the Prompt Is Ambiguous

Use the existing repository context before asking for clarification.

If the intent can be safely inferred from established conventions, proceed.

If multiple interpretations would create materially different code or content, ask one focused question rather than inventing a direction.

When making a reasonable assumption, state it briefly and continue.

---

# 14. Final Response Pattern

After completing work, prefer a compact summary:

```text
Changed
- file → meaningful change
- file → meaningful change

Why
- one or two useful design/technical reasons

Check
- what was tested or not tested

Next
- only if there is a clear next action
```

Do not produce a long process diary unless requested.

The response should match the same Tonal Modality as the work: concise for a fix, detailed for architecture, exploratory for an idea, and capable of becoming more conceptual when the subject calls for it.
