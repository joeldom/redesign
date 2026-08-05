# Google Calendar-Style Day View + Event Modal Prototype

**Experiment**: Single-page day-view calendar with complex event scheduler modal  
**Date**: August 5, 2026 (updated later same day)  
**Author / Agent context**: Built following [joeldom.github.io/redesign/AGENTS.md](https://joeldom.github.io/redesign/AGENTS.md) sandbox guidelines  
**Files**:
- `index.html` — complete self-contained prototype (HTML + CSS + JS)
- `README.md` — this file

## Purpose
A self-contained single-page prototype that mimics the core interaction of Google Calendar (dark-mode mobile style):
- A day-view grid with hourly time blocks.
- Clicking any time slot or an existing event opens a rich “Add event / Task / Birthday” modal.
- Supports multiple overlapping events (seed + newly created).

## Specs

### Calendar View
- **Day view only** with hourly rows (7 AM – 8 PM).
- Time blocks support overlapping events.
- Seed data: one “Lunch” event (12:00–1:00 PM).
- Users can create additional events by clicking any hour row.
- Soft limit of **48 events** (24 × 2) for testing the UI.
- Temporary / in-memory data only — no localStorage or persistence.
- Mobile-first with reasonable desktop responsiveness.
- Simple logo/branding area in the sticky header (covered by the modal when open).

### Modal (matches the provided dark-mode screenshot)
**Working features**:
- Title input
- Start & end date/time pickers (`datetime-local`)
- Save button (creates new or updates existing event)
- Close button + overlay click to dismiss
- Proper create vs edit handling via event IDs

**Visual-only features** (present and lightly interactive):
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
- Material Icons (Google Fonts CDN).
- Vanilla HTML / CSS / JS only — single self-contained file.
- No external frameworks or build step.

## How to Run
1. Open `index.html` in any modern browser.
2. Click any hour row → creates a new event.
3. Click an existing event block → edits it.
4. Change title or times and hit **Save**.
5. Close via the X or by clicking outside the modal.

## Technical Notes
- Events stored in a simple in-memory array.
- Each event has a unique `id`.
- Positioning calculated in pixels so overlapping works naturally.
- Soft cap of 48 events with a simple alert when reached.
- Save validates that end time is after start time.

## Changelog (latest)
- Replaced single static event with a multi-event array.
- Added create + edit support (up to 48 events).
- Improved re-rendering of all blocks after save.
- Added basic validation on save.

## Next Steps / Promotion Path (per AGENTS.md)
1. Validate interaction fidelity and multi-event behavior.
2. Collect further feedback.
3. Summarize findings and promote from sandbox if approved.

## Related
- Reference UI: Google Calendar mobile “Add event” screen (dark mode)
- Agent workflow: https://joeldom.github.io/redesign/AGENTS.md