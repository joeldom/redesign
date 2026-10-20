# All Work — Project Catalog

> Working catalog beside `index.html`. Records existing project details, content gaps, and next steps.

## Workflow

- Keep cards and viewer content hand-authored in `index.html`. **Do not migrate entries to a JavaScript/data object yet.**
- `index.html` controls order, labels, images, viewer content, and links. This file tracks known context and open questions.
- Update both files when adding or revising a project. Inline HTML comments before cards flag specific follow-ups.
- Do not invent missing project facts. Leave unknowns for Joel to confirm.
- For each entry, capture what applies: title, category, overview, role/contribution, process/key decisions, goal/outcome, image, case-study/repository link, and status.
- Replace `[...]`, `TBD`, `tbd`, `Coming Soon`, and copied descriptions only after the intended project is identified.

## Populated entries / known copy

### Exo — AI Agent Account
- **Category:** Brand.
- **Existing copy:** AI-assisted content workflow driven by assigned tickets; posts drafted through pull requests for approval; Discord/X notifications; social-preview concept; OpenAI/Anthropic APIs; Twitter API v2, Discord.js, GitHub Actions, environment-based secrets, Node CLI, and separated services/utilities/logs.
- **Goal stated:** Connect emerging AI-agent and DevOps patterns with a visual brand and social publishing workflow.
- **Links:** [Exo repository](https://github.com/joeldom/exo), [@ecco_exo on X](https://x.com/ecco_exo), [case study](https://joeldom.github.io/redesign/sandbox/prompt/).
- **Next:** Proofread and verify technical details/status.

### R-TYPE 0 — App Toolkit
- **Status:** Viewer exists, but overview, technology bullets, goal, and links appear copied from Exo.
- **Next:** Replace inherited copy with R-TYPE 0-specific details; confirm what “App Toolkit” covers and add its correct destination.

### Portfolio — Visual Identity
- **Status:** Viewer has substantive copy about a flexible portfolio system for different media types, layered interaction, cohesive visual language, exploration, and ongoing iteration.
- **Next:** Confirm approval; add concrete implementation details or links if useful.

## Gallery inventory and gaps

The following inventory follows the visible gallery order in `index.html`. Card comments are the inline reminder for each item.

| # | Entry | Status / suggested next step |
|---:|---|---|
| 1 | Ghost — Emotive Chat feedback | Viewer missing. Add feedback problem, UX approach, testing/learning, outcome. |
| 2 | Ecco — Umbrella brand | Viewer missing. Add brand architecture, relationship to Ghost/Exo, identity system, applications. |
| 3 | JD — Cred | Viewer missing. Add concept, audience/use case, visual direction, status. |
| 4 | S-Tier — Clothing line | Viewer missing. Add apparel concept, audience, brand system, applications. |
| 5 | 2025 — Annual Report | Viewer missing. Add purpose, information hierarchy, visual system, deliverables. |
| 6 | File System — Supplemental Icons | Viewer missing. Add use case, taxonomy, visual rules, applications. |
| 7 | TBD — Brand info byline | Confirm intended project/title; then add purpose, brand context, examples. |
| 8 | R-TYPE 0 — App Toolkit | Replace apparently copied Exo content and links. |
| 9 | Portfolio — Visual Identity | Verify copy; add concrete implementation details/links if useful. |
| 10 | Nothing Sacred — Discord Community | Replace placeholders; add purpose, engagement/moderation patterns, identity, goals. |
| 11 | Creative Assembly — Creative Coalition | Replace placeholders; clarify purpose, audience, identity, deliverables. |
| 12 | JD Profile — Accounts Identity | Verify category/scope; add identity system, applications, rationale. |
| 13 | JD Legacy Logo — v1 | Replace placeholders; explain mark, usage, evolution, later changes. |
| 14 | Tao-Do — App Logo | Replace placeholders; describe app, logo rationale, constraints, applications. |
| 15 | Stairs of Sisyphus — Digital Painting | Replace placeholders; add concept, composition/process, medium/tools, interpretation. |
| 16 | Social Preview — Meta Content | Replace placeholders; document purpose, metadata requirements, image behavior, implementation. |
| 17 | Ecco App — Mockup | Replace placeholders; describe represented flow, screens, UX decisions, concept status. |
| 18 | Progress Report — v1 | Replace placeholders; clarify subject, timeframe, format, audience. |
| 19 | 2001: Space Odyssey — UI Patterns | Replace placeholders; identify studied interface patterns and takeaways. |
| 20 | Type Style Guide — v1 | Replace placeholders; document typography, hierarchy, rules/tokens, applications. |
| 21 | SpaceX Launch: Coco Beach '24 — Photography | Replace placeholders; add capture context, technique/process, selection rationale. |
| 22 | Sandbox Hero — v1 | Replace placeholders; describe experiment, media/interaction, implementation, version. |
| 23 | POV Blood Moon — Photography | Replace placeholders; add capture context, technique, editing; distinguish from other Blood Moon entry. |
| 24 | Persist — Painting | Replace placeholders; add concept, medium, composition/process, intended reading. |
| 25 | Black Hole — Drawing Study | Replace placeholders; add prompt, medium, formal focus, exploration. |
| 26 | Blood Moon — Photography | Replace placeholders; distinguish from POV Blood Moon and add capture details. |
| 27 | Bounce: Keyframes — CSS Animation | Replace placeholders; describe goal, keyframes/timing, implementation, use case. |
| 28 | Chat Help — UI | Replace placeholders; explain support scenario, user need, interaction model, resolution. |
| 29 | Grid Properties — AG Grid JS | Replace placeholders; document grid behavior/configuration, JS/API concepts, outcome. |
| 30 | Trades & Transactions — UI | Replace placeholders; document workflow, user needs, data/interaction patterns, decisions. |
| 31 | Coming Soon — transaction-card image | Identify actual project/feature; viewer title repeats Mellon: Trades & Transactions. |
| 32 | Mellon — Account | Viewer missing. Add account experience, workflow, key information, relationship to other Mellon entries. |
| 33–36 | Four Coming Soon cards | Identify each project/image; replace generic labels, repeated Mellon titles, placeholders. |
| 37 | Working on it — stay tuned | Confirm project identity; replace temporary label and copied Mellon content. |
| 38–45 | Eight Coming Soon cards | Identify each project/image; replace generic labels, repeated Mellon titles, placeholders. |

## Cross-entry cleanup

- **Repeated Mellon content:** Multiple generic cards use the viewer title “Mellon: Trades & Transactions.” Verify each individually; do not assume all belong to Mellon.
- **Category consistency:** Visible labels and viewer categories may disagree (for example, JD Profile / Accounts Identity and logo projects categorized as Community). Confirm before changing.
- **Links:** Many cards use `#` or generic case-study links. Add a real case study, demo, repository, or external destination when available.
- **Images:** Confirm each background image matches the project, especially generic cards and repeated-looking images.
- **Writing:** Prefer concrete problem, contribution, decisions, and outcome over generic design statements.

## New-entry checklist

- [ ] Set visible category/label and title.
- [ ] Verify the image and its relationship to the project.
- [ ] Add/update the hidden `.viewer-content`: category, viewer title, overview, project-specific details, goal/outcome, and destination link where available.
- [ ] Add an HTML follow-up comment if information remains unknown.
- [ ] Update this catalog with known details and open questions.
- [ ] Check for copied titles, categories, descriptions, images, and links.
- [ ] Test the card and viewer on the live page.

---
_Last reviewed: 2026-10-20. This is a manually maintained catalog, not a runtime data source._
