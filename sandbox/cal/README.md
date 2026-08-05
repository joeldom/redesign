# Google Calendar-Style Day View + Event Modal Prototype

**Experiment**: Single-page day-view calendar with complex event scheduler modal  
**Date**: August 5, 2026  
**Author / Agent context**: Built following [joeldom.github.io/redesign/AGENTS.md](https://joeldom.github.io/redesign/AGENTS.md) sandbox guidelines  
**Files**:
- `index.html` — complete self-contained prototype (HTML + CSS + JS)
- `README.md` — this file

## Purpose
A self-contained single-page prototype that mimics the core interaction of Google Calendar (dark-mode mobile style):
- A day-view grid with hourly time blocks.
- Clicking any time slot or an existing event opens a rich “Add event / Task / Birthday” modal.
- The modal contains every major input shown in the reference screenshot.

This serves as a UI/UX interaction experiment and test bed, aligned with the agent workflow for concept → prototype → sandbox promotion.

## Specs (as provided)

### Calendar View
- **Day view only** with hourly rows (7 AM – 8 PM).
- Time blocks can overlap (grid supports multiple simultaneous events).
- One sample event pre-populated: **“Lunch”**, 12:00–1:00 PM (1 hour), fully editable.
- Temporary / in-memory data only — **no localStorage, no persistence, no real save**.
- Mobile-first layout with reasonable responsive behavior for desktop.
- Simple logo / branding area in the sticky header that the modal covers when opened.

### Modal (matches the provided dark-mode screenshot)
**Working features** (functional):
- Title input
- Start & end date/time pickers (`datetime-local`)
- Save button (updates the visual sample event only)
- Close button + overlay click to dismiss

**Visual-only features** (present and interactive for look & feel, but no real output or side effects):
- Event / Task / Birthday type pills
- Account / calendar selector row
- Color / label chips (Family, Friends, Sports, Time, To Do)
- All-day toggle
- Time zone display
- Repeat (“Does not repeat”)
- Add people + “View schedules” button
- Add video conferencing
- Add location
- Add notification

### Design & Tech
- Dark theme matching the reference screenshot.
- Material Icons (via Google Fonts CDN) used throughout.
- Vanilla HTML / CSS / JS only — single self-contained file.
- No external frameworks or build step.

## How to Run
1. Open `index.html` in any modern browser.
2. Click any hour row to create a new event, or click the “Lunch” block to edit it.
3. Change the title or times and hit **Save** to see the visual update.
4. Close via the X or by clicking outside the modal.

## Technical Notes
- Hours rendered dynamically (7 AM–8 PM).
- Event positioning calculated in pixels (`top` + `height`) so overlapping works naturally.
- Save only mutates the single in-memory sample event and re-renders the block.
- All other controls are purely presentational.

## Next Steps / Promotion Path (per AGENTS.md)
1. Validate interaction fidelity against the original screenshot.
2. Summarize findings or requested changes.
3. If approved, promote from sandbox into a more permanent location following the agent workflow guidelines.

## Related
- Reference UI: Google Calendar mobile “Add event” screen (dark mode, Aug 5 2026 screenshot)
- Agent workflow: https://joeldom.github.io/redesign/AGENTS.md