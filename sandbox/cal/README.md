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

## Changelog (latest)
- Labels are now single-select only.
- Selected label determines the event block color on the day view.
- Email updated to `me@joeldombek.com`.
- Added privacy note: never use personal information.
- Added demo link at the top of the README.

## Next Steps
Collect further feedback and continue iterating in the sandbox.

## Related
- Reference: Google Calendar mobile create-event UI (dark mode)
- Agent workflow: https://joeldom.github.io/redesign/AGENTS.md