# CLAUDE.md

This file is the AI collaboration reference for the joeldombek.com redesign project. It sits alongside `AGENTS.md` (agent workflow rules) and `HUMANS.md` (project intent and history) as the third doc in the trio — specifically focused on how Claude participates in the design and development process, what's currently in flight, and how work moves from idea to tested feature to shipped code.

The project runs on a parallel track: **Joel builds, tests, and pushes. Claude codes, implements, and extends.** Both happen at the same time. New ideas get collected while existing ones are being tested. The sandbox is always open. The pipeline is the process.

---

## Content Map

- Port > [joeldombek.com](http://www.joeldombek.com)
- [joeldom.github.com/redesign](http://joeldom.github.io/redesign) `repo` `page`
- [joeldom.github.com/resume](http://joeldom.github.io/resume) `repo` `page`
- [joeldom.github.io/redesign/sandbox](http://joeldom.github.io/redesign/sandbox) `joel` `temp` — Joel's active work, files in progress, features being hand-tested
- [joeldom.github.io/sandbox](http://joeldom.github.io/sandbox) `agent` `new` — new projects initiated or extended by agent coding
- [joeldom.github.com/work/writing](https://chatgpt.com/share/6800e003-3fe8-800b-8e18-66c83498ee0d) `gpt` `claude`
- [joeldom.github.com/asset](http://joeldom.github.io/asset) `repo` `api`

---

## Two Sandboxes, One Pipeline

This project uses two distinct sandbox environments that serve different purposes and feed into each other.

### `joeldom.github.io/redesign/sandbox` — Joel's Sandbox
This is where Joel works by hand. Files here are actively being built, styled, or tested. They represent work in progress — interactions being tuned, layouts being validated, features being compared against the live site. Treat anything here as **in review**, not ready to promote.

### `joeldom.github.io/sandbox` — Agent Sandbox
This is where new Claude-initiated or Claude-extended projects land. When Claude is asked to build something new, prototype a feature, or implement a design spec, output goes here first. Files here are **agent-generated or agent-assisted** and need Joel's review before they move anywhere.

### The Pipeline

```
Idea / Issue
    ↓
Claude codes → joeldom.github.io/sandbox
    ↓
Joel reviews → look, feel, functionality compared against redesign/sandbox
    ↓
Joel tests + adjusts → joeldom.github.io/redesign/sandbox
    ↓
Promoted → /site (portable build)
    ↓
FTP deploy → joeldombek.com
```

The comparison step is intentional. Features in `sandbox` (agent output) should be evaluated side-by-side with what's in `redesign/sandbox` (Joel's current build) before anything is merged or promoted. This keeps the two environments in conversation with each other rather than diverging.

---

## Running the Site

### Local / Development
The redesign environment is a static site. Open any `.html` file directly or serve from repo root:

```bash
npx serve .
# or
python3 -m http.server
```

Both sandbox directories are self-contained. Each subdirectory can be opened and tested independently.

### Production / FTP Deploy
The `/site` directory is the portable production build — cleaned and ready to upload. No build step required.

```
/site  →  FTP  →  joeldombek.com
```

Sync `/site` with promoted changes from the redesign repo before each deploy.

---

## Claude's Role in This Project

Claude is a coding and implementation collaborator — not a gatekeeper and not an autonomous deployer. The division of responsibility looks like this:

| Joel | Claude |
|------|--------|
| Design decisions and taste | Code generation and implementation |
| Hand-testing and QA | Feature prototyping in agent sandbox |
| Pushing to production | Extending, refactoring, documenting |
| Final say on promoting work | Surfacing options and tradeoffs |
| Creative direction | Pattern-matching to established conventions |

When Claude writes code for this project, it should:
- Output to `joeldom.github.io/sandbox` or clearly indicate it's scoped there
- Follow naming conventions from `AGENTS.md` (kebab-case, brief top-of-file notes with date)
- Reference the live redesign environment and known issues when relevant
- Never push, deploy, or promote work without explicit instruction from Joel

---

## Todo List

Items are grouped by area. Add updates inline as work progresses — each item can carry a note, a link, or a status tag.

### Pipeline & Infrastructure
- [ ] Define formal handoff convention between `sandbox` (agent) and `redesign/sandbox` (Joel) — what does "ready for Joel review" look like?
- [ ] Establish a "ready to promote" checklist before anything moves from either sandbox to `/site`
- [ ] Document how agent-generated files should be named and annotated so they're identifiable at a glance
- [ ] Explore visual regression workflow — screenshot diffs between sandbox and production before promoting

### Active Features
- [ ] Grey Box layout system — interaction-first templates, content-agnostic; continue refinement and document final layout specs
- [ ] Night Mode parity audit — confirm all components are consistent across dark/light in both sandbox environments
- [ ] Payment icon strip — confirm component is portable and renders correctly in `/site` build
- [ ] EXO content manager — brand, identity, and off-platform link refresh; needs feature scope before agent work resumes

### New Projects (Agent Sandbox)
- [ ] Prototype a "what I'm working on now" live status block for the portfolio landing page
- [ ] Writing section — connect GPT/Claude session exports to the `writing` content path; needs pipeline definition
- [ ] Performance profiling pass on key layout/interaction templates — define scope before starting
- [ ] Asset repo API (`joeldom.github.io/asset`) — consolidate with live component references; map current endpoints

### Documentation
- [ ] Prompt library — dedicated file or section linking active prompts to GitHub issues
- [ ] Concept → prototype → sandbox flow — document clearly so agent work follows a consistent path
- [ ] Update `HUMANS.md` and `CLAUDE.md` each time a version is tagged

---

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.0 | July 2025 | Initial environment setup, asset repo, EXO project init, S-Tier links |
| v1.1 | August 2025 | Landing page refresh, Sandbox + App `_temp_` consistency pass |
| v1.2 | September 2025 | Night Mode design pass, footer componentization, top-level `_temp_` pages |
| v1.3 | October 2025 | Work section expanded (brand, interface, photography, writing, all), image enlarge on tiles, footer link refinement |
| v1.4 | November 2025 | Theme toggle sync across dark/light modes |
| v1.5 | January 2026 | Sandbox flow consolidation, Night Mode audit and fixes |
| v1.6 | March 2026 | Grey Box layout refinement, `AGENTS.md` workflow documentation |

---

## Changelog

### March 2026
- Continued refinement of Grey Box layouts for interaction-first testing
- Documented agent workflows in `AGENTS.md` for sandbox and repo operations

### January 2026
- Began consolidating redesign experiments into sandbox flows
- Audited Night Mode styles across top-level templates

### November 2025
- Adjusted theme dark/light modes for main navigation and landing
- Synced theme toggles across `_temp_` pages (Sandbox, Gallery, Landing)

### October 2025
- Added pages/directories for `brand`, `interface`, `photography`, `writing`, `all`
- Added `img` enlarge function to tile
- Refined footer `links` with `title`
- Navbar-brand `night-mode`
- Added [strings](https://joeldom.github.io/asset/array/strings.json) to assets

### September 2025
- Night Mode designs across remaining main visual components
- Footer links sizing and parallax componentization
- Top-level `_temp_` pages → Sandbox, Gallery, Landing
- Clothing links on: Twitch, Facebook, LinkedIn

### August 2025
- Landing page updated to show more relevant info
- Sandbox + App page consistency pass (`_temp_`)
- Pages made portable for FTP deploy to [joeldombek.com](http://www.joeldombek.com)

### July 2025
- Asset repo and contents added for features
- Off-platform refresh of links
- EXO project `-init`
- Environment changes `github.com/pages`
- S-Tier clothing line assets added
- Go-live notification messages and prompts set up for OBS, Twitch, and Discord status — [Project + issue](https://github.com/users/joeldom/projects/9/views/1?pane=issue&itemId=123799890&issue=joeldom%7CEXO%7C1)