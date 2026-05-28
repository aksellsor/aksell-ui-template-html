# AGENTS.md

## Project Type
Zero-build HTML/CSS/JS. No bundler. Open `index.html` directly in browser.

## File Roles
- `index.html` — entry point, loads all CDN styles and main.js
- `style.css` — project-specific styles only
- `main.js` — JS entry point (ESM)

## @aksell/ui CDN Stylesheets
All available via `https://unpkg.com/@aksell/ui/src/styles/<file>`:

> **Versioning:** URLs below resolve to the latest published version. To pin, add a version:
> `https://unpkg.com/@aksell/ui@0.4.1/src/styles/resets.css`

- `resets.css`
- `colors.css` — CSS custom properties for brand colors
- `typography.css`
- `buttons.css`
- `forms.css`
- `utilities.css` — utility classes (spacing, display helpers)
- `components/toast.css`
- `components/pillarrowbtn.css`

Already loaded in `index.html`: resets, colors, typography, buttons.
Add more `<link>` tags in `index.html` head as needed.

## @aksell/ui Standalone JS Components
Available via CDN as ES modules:
- `https://unpkg.com/@aksell/ui/src/components/PillArrowBtn/standalone/PillArrowBtn.standalone.js`
- `https://unpkg.com/@aksell/ui/src/components/Toast/toast.js`

Import in `main.js`:
```js
import 'https://unpkg.com/@aksell/ui/src/components/PillArrowBtn/standalone/PillArrowBtn.standalone.js';
```

After importing, use the web component in HTML:
```html
<!-- PillArrowBtn -->
<pill-arrow-btn href="/path">Label</pill-arrow-btn>
```

> **Note:** When using the standalone JS, the separate `components/pillarrowbtn.css` link is not needed — styles are bundled in the standalone file.

## What NOT to Do
- Don't add node_modules or npm install unless the developer asks
- Don't add a bundler
- Don't copy CSS from @aksell/ui into this project
- Don't add a CSS framework
