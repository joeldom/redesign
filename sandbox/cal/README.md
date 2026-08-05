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

## Data Storage Thoughts (Static → Dynamic)

**Current**: Pure in-memory JavaScript array (lost on refresh).

**Simple static options**
- Hard-coded seed array (present).
- External `events.json` loaded with `fetch()`.
- Base64-encoded data blob inside the HTML.

**Simple dynamic options**
- `localStorage` / `sessionStorage` (easiest next step — survives refresh, still single-file).
- Download / export as JSON file.
- Clipboard copy of the data.
- IndexedDB later if the dataset grows.
- Creative / experimental: encode data as a short “data song” (Base64 or even Web Audio tones) for fun sandbox demos.

Recommended immediate upgrade: keep the in-memory array as source of truth and sync it to `localStorage` on every Save + on page load.

## Expanding the Calendar

### Month View
- Classic 7-column day grid.
- Show colored dots or mini event bars per day.
- Click a day → switch to Day view or open the create modal for that date.
- Requires upgrading the data model to full dates (`YYYY-MM-DDTHH:mm`).
- Navigation arrows + “Today” button.

### Year View
- Twelve mini-month calendars (or a vertical month list).
- High-level overview only (event count dots).
- Click month → Month view; click day → Day view.
- Same underlying event array; just aggregate by month/day.

Suggested build order: finish Day view polish → add localStorage + full dates → Month view → Year view.

## Changelog (latest)
- Labels are now single-select only.
- Selected label determines the event block color on the day view.
- Email updated to `me@joeldombek.com`.
- Added privacy note: never use personal information.
- Added demo link at the top of the README.

## Next Steps
- Fix overlapping of times, currently overwrites previous entries
- Add button to start a timer that will add an entry on the day for time tracking
- Currently it goes from 7 AM to 8 PM → it should be an actual 24 hr day
- Date in top right should reflect the current day (currently hard-coded as August 5th)
- Add selection functionality to have a notification (will not actually work but should save in entry if set and show what kind of notification would trigger)
- Location should allow to be set and then have a free text input to add a description or able to handle a link added to it so it should render the input as the output as formatted
- Explore simple persistence (localStorage) and full-date data model
- Begin planning Month view layout

Collect further feedback and continue iterating in the sandbox.

## Related
- Reference: Google Calendar mobile create-event UI (dark mode)
- Agent workflow: https://joeldom.github.io/redesign/AGENTS.md