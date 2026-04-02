# HUMANS.md

This is the human-facing companion to `AGENTS.md`. Where that file instructs AI agents on workflow and conventions, this one captures intent — what the project is, where it lives, how to run it, and what's been built so far.

The project runs on a simple principle: **iteration and creation happen at the same time.** New ideas get collected while existing ones are being tested. Nothing waits for everything else to be ready. The redesign environment is live, the sandbox is always open, and the changelog is the roadmap.

---

## Content Map

- Port > [joeldombek.com](http://www.joeldombek.com)
- [joeldom.github.com/redesign](http://www.joeldom.github.com/redesign) `repo` `page`
- [joeldom.github.com/resume](http://www.joeldom.github.com/resume) `repo` `page`
- [joeldom.github.com/redesign/sandbox](http://www.joeldom.github.com/redesign/sandbox) `temp`
- [joeldom.github.com/work/writing](https://chatgpt.com/share/6800e003-3fe8-800b-8e18-66c83498ee0d) `gpt` `claude`
- [joeldom.github.com/asset](http://www.joeldom.github.com/asset) `repo` `api`

---

## Running the Site

### Local / Development
The redesign environment runs as a static site. Open any `.html` file directly in a browser, or serve from the repo root:

```bash
npx serve .
# or
python3 -m http.server
```

Sandbox experiments live under `redesign/sandbox/` and run the same way. Each subdirectory is self-contained.

### Production / FTP Deploy
The `/site` directory holds the portable production build — cleaned, self-contained, and ready to FTP directly to the host at [joeldombek.com](http://www.joeldombek.com). No build step required. Upload the contents of `/site` to the server root.

```
/site  →  FTP  →  joeldombek.com
```

Keep `/site` in sync with promoted changes from the redesign repo before each deploy.

---

## Version History

| Version | Date | Notes |
|---------|------|-------|
| v1.0 | July 2025 | Initial environment setup, asset repo, EXO project init, S-Tier links |
| v1.1 | August 2025 | Landing page refresh, Sandbox + App `_temp_` consistency pass |
| v1.2 | September 2025 | Night Mode design pass, footer componentization, top-level `_temp_` pages |
| v1.3 | October 2025 | Work section expanded, image enlarge on tiles, footer link refinement |
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
- Pages made consistent and portable for FTP to [joeldombek.com](http://www.joeldombek.com)

### July 2025
- Asset repo and contents added for features
- Off-platform refresh of links
- EXO project `-init`
- Environment changes `github.com/pages`
- S-Tier clothing line assets added
- Go-live notification messages and prompts set up for OBS, Twitch, and Discord status — [Project + issue](https://github.com/users/joeldom/projects/9/views/1?pane=issue&itemId=123799890&issue=joeldom%7CEXO%7C1)
