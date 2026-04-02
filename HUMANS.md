<a href="http://joeldom.github.io/redesign/sandbox/" target="_blank">
  <img class="aligncenter" alt="Joel Dombek Design 2022" src="https://raw.githubusercontent.com/joeldom/asset/main/twitter-header.png" width="847" height="120" />
</a>

<!-- 
- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
- Interests
  - Swiss Type
  - H. R. Geiger
- Inspiration
  - Sony Playstation
    - PS1 + PS1 20th Anniversary
  - Resident Evil
    - Requiem - Grace in puzzle building. Color
  - Metal Gear Solid
    - Menus  & Group Symbols
  - Ninja Gaiden
    - UI & Lore / History designs
  - Final Fantasy
    -FFXV - Noctis & Luna. Night Sky Prince. World of Darkness. https://youtu.be/bGKS0q7wl08 [] Etro Godess of Sleep/Dreams/Death. Love after Death. Love & Death
    
- Hero spot visuals
  - iceberg 
  - ocean waves
  - oil rig
  - f35 jet
  - gundam
- References
  - House of Leaves
  - Sphere
  - 3 Body Problem - idealized future tech - post-modern UI
  - HEALTH RAT: WARS, R-TYPE
  - Marilyn Manson - Mechanical Animals - Coma White
  - XBOW - Pen Testing "Dark Mode" theme
  - X / Twitter - Grok - Dark Mode - Chat Prompt
  
- Collaborators
  - tbd
- Shot Plans
 - Ethan Honda - Cemetery - Garage
 - Marchelle GTI -Banksville (passing shot)(from distance to close)
-->

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

### Meta Header

```
<!DOCTYPE html>
<html lang="en-US" prefix="og: https://ogp.me/ns# fb: https://ogp.me/ns/fb#">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <meta property="og:url" content="http://joeldom.github.io/resume/" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Joel Dombek - Multi-Disciplinary Designer & Developer" />
    <meta property="og:description" content="The portfolio of Joel Dombek, a multi-disciplinary designer : developer and brand specialist with a focus on user interaction and design." />
    <meta property="og:image" content="https://joeldom.github.io/asset/images/chip-24.png" />
    <meta name="twitter:card" content="The portfolio of Joel Dombek, a multi-disciplinary designer : developer and brand specialist with a focus on user interaction and design." />
    <meta name="twitter:creator" content="@joeldombek" />
    <link rel='shortlink' href='http://www.joeldombek.com/' />

    <title>Joel Dombek Design</title>

    <!--==============================================================================================================================



           @@@  @@@@@@  @@@@@@@@ @@@       @@@@@@@   @@@@@@  @@@@@@@@@@  @@@@@@@  @@@@@@@@ @@@  @@@       @@@@@@@  @@@@@@  @@@@@@@@@@
           @@@ @@@@@@@@ @@@@@@@@ @@@       @@@@@@@@ @@@@@@@@ @@@@@@@@@@@ @@@@@@@@ @@@@@@@@ @@@  @@@      @@@@@@@@ @@@@@@@@ @@@@@@@@@@@
           @@! @@!  @@@ @@!      @@!       @@!  @@@ @@!  @@@ @@! @@! @@! @@!  @@@ @@!      @@!  !@@      !@@      @@!  @@@ @@! @@! @@!
           !@! !@!  @!@ !@!      !@!       !@!  @!@ !@!  @!@ !@! !@! !@! !@   @!@ !@!      !@!  @!!      !@!      !@!  @!@ !@! !@! !@!
           !!@ @!@  !@! @!!!:!   @!!       @!@  !@! @!@  !@! @!! !!@ @!@ @!@!@!@  @!!!:!   @!@@!@!       !@!      @!@  !@! @!! !!@ @!@
           !!! !@!  !!! !!!!!:   !!!       !@!  !!! !@!  !!! !@!   ! !@! !!!@!!!! !!!!!:   !!@!!!        !!!      !@!  !!! !@!   ! !@!
           !!: !!:  !!! !!:      !!:       !!:  !!! !!:  !!! !!:     !!: !!:  !!! !!:      !!: :!!       :!!      !!:  !!! !!:     !!:
      !!:  :!: :!:  !:! :!:       :!:      :!:  !:! :!:  !:! :!:     :!: :!:  !:! :!:      :!:  !:! :!:  :!:      :!:  !:! :!:     :!:
      ::: : :: ::::: ::  :: ::::  :: ::::   :::: :: ::::: :: :::     ::   :: ::::  :: :::: :::  ::: :::   ::: ::: ::::: :: :::     ::
       : :::    : :  :  : :: ::  : :: : :  :: :  :   : :  :   :      :   :: : ::  : :: ::   :   ::  :::   :: :: :  : :  :   :      :

                                                    ~ ~ ~ ~ ~ ~ v404 ~ ~ ~ ~ ~ ~

     =====================================  Hi, there! Taking a look at my code I see. Nice!  =======================================-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="https://cdn.rawgit.com/konpa/devicon/master/devicon.min.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter&display=swap">
    <link rel="shortlink" href="https://www.joeldombek.com/" />
    <link rel="shortcut icon" href="https://joeldom.github.io/asset/favicon.ico" type="image/x-icon">
    <link rel="icon shortcut" href="https://joeldom.github.io/asset/favicon/64x64.png" sizes="64x64" />
    <link rel="icon shortcut" href="https://joeldom.github.io/asset/favicon/128x128.png" sizes="128x128" />
    <link rel="icon shortcut" href="https://joeldom.github.io/asset/favicon/192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/76x76.png" sizes="76x76" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/120x120.png" sizes="120x120" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/152x152.png" sizes="152x152" />
    <link rel="apple-touch-icon" href="https://joeldom.github.io/asset/favicon/180x180.png" sizes="180x180" />
    <link rel="manifest" href="https://www.redditstatic.com/shreddit/assets/favicon/manifest.json" />
```


### Social Preview

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
