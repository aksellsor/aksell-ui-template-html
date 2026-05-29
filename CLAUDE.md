# CLAUDE.md

These rules apply to every task in this project unless explicitly overridden.
Bias: caution over speed on non-trivial work.

## Rule 1 — Think Before Coding
State assumptions explicitly. If uncertain, ask rather than guess.
Stop when confused. Name what's unclear.

## Rule 2 — Simplicity First
Minimum code that solves the problem. Nothing speculative.
No features beyond what was asked.

## Rule 3 — Surgical Changes
Touch only what you must. Don't refactor what isn't broken. Match existing style.

## Rule 4 — No Build Tooling
This is a zero-build project. Do NOT add Vite, Webpack, Parcel, or any bundler
unless the developer explicitly requests it.

## Rule 5 — aksell-ui is the Design System
Do NOT add Tailwind, Bootstrap, or any other CSS framework.
All base styles (colors, typography, buttons, resets) come from @aksell/ui via CDN.
Project-specific styles go in `style.css` only.
Do not add Aeonik font files unless this project has a valid license; licensed font-face declarations belong in project CSS.

## Rule 6 — Use CDN Imports, Not Copied Styles
Do not copy-paste CSS from @aksell/ui into this project.
Use the CDN links already in `index.html`. Add more if needed from the list in AGENTS.md.

## Rule 7 — Single Entry Point
`index.html` is the entry point. `main.js` is the JS entry.
Do not add more HTML files unless the project explicitly requires multi-page.

## Rule 8 — Match Existing Conventions
Follow the patterns already in the project. If something seems wrong, surface it — don't fix it silently.

## Rule 9 — Fail Loud
"Done" is wrong if anything was skipped. Surface uncertainty, don't hide it.
