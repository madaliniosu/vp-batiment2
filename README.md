# VP Bâtiment

Bilingual (French/English) presentation website for a construction and renovation company based in Île-de-France. Built with Astro as a fast, zero-JS static site.

**Live:** _coming soon_

---

## Pages

- **Home** — hero, stats, about, services preview, contact form
- **Services** — full service breakdown with process steps
- **Projects** — portfolio of completed renovations

---

## Tech Stack

| | |
|---|---|
| Framework | Astro 6 |
| i18n | Custom translations (FR/EN) via single source-of-truth file |
| Styling | Global CSS |
| Deployment | Static export |

---

## i18n

All copy lives in `src/i18n/translations.js` — a single file exporting `fr` and `en` objects. Adding a new language means copying one block and translating the values. No third-party i18n library needed.

---

## Getting Started

```bash
git clone https://github.com/madaliniosu/vp-batiment.git
cd vp-batiment
npm install
npm run dev
```

Build for production:

```bash
npm run build
```
