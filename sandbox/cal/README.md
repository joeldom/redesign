# Google Calendar-Style Day View + Event Modal Prototype

[Demo](http://joeldom.github.io/redesign/sandbox/cal/)

**Experiment**: Single-page day-view calendar with complex event scheduler modal  
**Date**: August 5, 2026 (iteratively updated)  
**Author / Agent context**: Built following [joeldom.github.io/redesign/AGENTS.md](https://joeldom.github.io/redesign/AGENTS.md) sandbox guidelines  

**Files**:
- `index.html` — complete self-contained prototype (HTML + CSS + JS)
- `README.md` — this file

> **Privacy Note**  
> Never use real personal information (emails, names, phone numbers, etc.) in prototypes, demos, or documentation.  
> Always use placeholder or generic data (e.g. `me@joeldombek.com`).

## Purpose
A self-contained single-page prototype that mimics the core interaction of Google Calendar (dark-mode mobile style):
- Day-view grid with hourly time blocks.
- Clicking any time slot or existing event opens a rich create/edit modal.
- Supports multiple overlapping events (up to 48 for testing).

## Specs

### Calendar View
- Day view only (7 AM – 8 PM).
- Events can overlap.
- Seed event: “Lunch” 12:00–1:00 PM (labeled “To Do”).
- Create new events by clicking any hour row.
- Soft limit of 48 events.
- In-memory only (no persistence).
- Mobile-first + reasonable desktop layout.
- Logo/branding area in sticky header (covered by modal).

### Modal
**Working features**:
- Title
- Start / End datetime pickers
- **Label chips** — single selection only. The selected label sets the color of the event block on the day view.
- Save (create or update)
- Close (X or overlay click)

**Visual-only**:
- Event / Task / Birthday pills
- Account row (`me@joeldombek.com`)
- All-day toggle
- Time zone, Repeat, Add people, Video, Location, Notification

### Label → Color Mapping
| Label   | Background | Border   |
|---------|------------|----------|
| Family  | #c5221f    | #ea4335  |
| Friends | #f9ab00    | #fbbc04  |
| Sports  | #1a73e8    | #4285f4  |
| Time    | #d93025    | #ea4335  |
| To Do   | #188038    | #34a853  |

### Design & Tech
- Dark theme matching the reference screenshot.
- Material Icons.
- Vanilla HTML/CSS/JS — single file.
- No frameworks or build step.

## How to Run
1. Open `index.html` in a modern browser.
2. Click an hour → create new event.
3. Click an existing block → edit it (including changing its label/color).
4. Select exactly one label chip — it controls the event’s color.
5. Save or close.

---

## Data Storage – Deep Thoughts (Static vs Dynamic)

### Current State
Everything lives in a plain JavaScript array in memory. Perfect for a quick prototype, but it disappears on refresh.

### Static Approaches (no real persistence, still easy to ship)
- Keep the seed data as a hardcoded JS constant (what we have now).
- Move the initial data into a separate `events.json` file and `fetch()` it on load. Still static, but cleaner separation.
- Embed the data as a big Base64 string or even as a data-URI inside the HTML (extreme but fully self-contained).

### Dynamic / Simple Persistence Options

| Method                    | Score (1 = best, 10 = worst) | Complexity | Pros                                      | Cons                                      | Best for                          |
|---------------------------|------------------------------|------------|-------------------------------------------|-------------------------------------------|-----------------------------------|
| **localStorage**          | **2**                        | Very low   | Survives refresh, zero backend, dead simple | ~5 MB limit, synchronous, string-only     | Quick prototype persistence       |
| **sessionStorage**        | **4**                        | Very low   | Cleared when tab closes                   | Same limits as localStorage               | Temporary sessions                |
| **IndexedDB**             | **5**                        | Medium     | Larger storage, structured, async         | More boilerplate                          | Future multi-month / year data    |
| **Download JSON**         | **3**                        | Low        | User can save/export a real file          | Manual step required                      | Sharing or backup                 |
| **Clipboard copy**        | **6**                        | Lowest     | Instant                                   | Easy to lose, not automatic               | Debugging / quick transfer        |
| **File System Access API**| **7**                        | Medium     | Real file read/write in supporting browsers | Chrome-centric, permission prompts      | Power-user local tools            |

**“Writing to a song” / ultra-simple creative ideas**  
- Encode the JSON as a short Base64 string and treat it like a “data song” the user can copy-paste.  
- Generate a tiny downloadable `.json` or even a `.txt` file on Save.  
- For pure fun: convert event data into a simple tone sequence (Web Audio API) — more art than practical storage, but memorable for a sandbox experiment.

**Recommended next step for this project**  
Add optional `localStorage` persistence right away (score 2). Keep the in-memory array as the source of truth, and sync to/from localStorage on load and after every Save. It is the simplest reliable dynamic method that still fits the single-file constraint.

**Data model upgrade needed soon**:
```js
{
  id: number,
  title: string,
  start: "2026-08-05T12:00",  // full ISO-like string
  end:   "2026-08-05T13:00",
  label: "To Do",
  // future fields
  notification: null | "10min" | "1hour" | ...,
  location: string | null
}