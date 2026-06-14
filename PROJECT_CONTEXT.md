# PrimeNest Global — Project Context

## Live Site
- **URL:** https://www.primenestglobal.com.my
- **Host:** Netlify
- **GitHub:** https://github.com/shereenkong28/primenest-website

## Source of Truth
The live site is built from **`primenest-react/`** — a Vite + React app.

> `primenest-nextjs/` and the root `index.html` are NOT deployed. Never edit these for production changes.

## Deploy Workflow

Netlify builds from source on every push:
1. Edit source files in `primenest-react/src/`
2. Run `npm run build` inside `primenest-react/`
3. Force-add the built output: `git add -f primenest-react/dist/`
4. Commit and push to `main`

### netlify.toml (repo root)
```toml
[build]
  base    = "primenest-react"
  command = "npm run build"
  publish = "dist"
```
- `base` sets the working directory for the build
- `publish = "dist"` is relative to `base` — do NOT prefix with `primenest-react/`

## Key Files

| File | Purpose |
|------|---------|
| `primenest-react/index.html` | Vite HTML template — GA4 tag lives here in `<head>` |
| `primenest-react/src/data/products.js` | All product data (images, names, specs) |
| `primenest-react/src/components/WholesalePricing.jsx` | Wholesale Products section |
| `primenest-react/src/components/Hero.jsx` | Hero video section |
| `primenest-react/src/components/Compliance.jsx` | Certifications section |
| `primenest-react/src/components/Analytics.jsx` | Global image/video protection listeners |
| `primenest-react/src/index.css` | Global styles incl. image protection CSS |
| `primenest-react/public/` | Static assets (images, videos) — copied to dist as-is |
| `primenest-react/dist/` | Built output — must be committed to git |

## Google Analytics 4
- **Measurement ID:** G-2BFKYCF30X
- Injected as a static script tag directly in `primenest-react/index.html`
- Must be static (not dynamic JS injection) for Google's scanner to detect it

## Product Images
Images live in `primenest-react/public/` and are referenced in `primenest-react/src/data/products.js`.

| Product | Image File |
|---------|-----------|
| Dry-Picked Bird's Nest | `/dry-picked-v3.jpg` |
| Semi Dry-Picked Bird's Nest | `/semi-dry-picked-house-nest.jpg` |
| Wet-Picked Bird's Nest | `/Wet Picked Bird's Nest.jpeg` |
| Sabah Cave Nest | `/Sabah Cave Nest.jpeg` |
| Sarawak Cave Nest | `/Sarawak Cave Nest.jpeg` |

## Common Pitfalls
- **Wrong folder:** Never edit `primenest-nextjs/` or root `index.html` for production
- **netlify.toml publish path:** Must be `"dist"` not `"primenest-react/dist"` (base already sets the directory)
- **dist/ in .gitignore:** The `.gitignore` does NOT ignore `dist/`. Use `git add -f primenest-react/dist/` to stage it
- **Netlify not updating:** If the site looks stale, trigger a manual deploy from app.netlify.com
- **Browser cache:** After deploy, hard refresh with Ctrl+Shift+R or close/reopen on mobile

## Image Protection (Mobile)
- CSS: `-webkit-touch-callout: none`, `user-select: none`, `-webkit-user-drag: none` on all `img`
- Videos: `pointer-events: none`, `disablePictureInPicture`, `disableRemotePlayback`, `controlsList="nodownload"`
- JS: Global `contextmenu` and `dragstart` listeners in `Analytics.jsx`

## Certifications Layout
- Desktop: 3-column grid (`repeat(3, 1fr)`)
- Row 1: Source Transparency, Quality Control, Lab Test Reports
- Row 2: Export Documentation, SSM Registered, Certification Support
- Defined in `Compliance.jsx` and styled in `index.css` under `.cert-grid`
