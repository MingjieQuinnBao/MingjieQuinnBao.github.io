# Between Signals

Mingjie Quinn Bao's personal research archive and studio. Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion. Entirely static, with no backend, runtime secrets, or audio test datasets.

## Development and verification

Use Node.js 24 LTS.

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

The production build generates `out/`. Serve that directory using any static HTTP server. All routes use directory indexes and trailing slashes. Do not use `next start` for this static export.

Run `npm run preview` to serve the export at `http://127.0.0.1:4173`. For browser checks, run `npx playwright install chromium` once, then `npm test`. Tests cover all nine routes at three screen widths, navigation, filtering, pause, and reduced motion. Screenshots are saved in the ignored `test-results/` directory. Use `npm run og` to regenerate the sharing image after changing its source in `scripts/make-og.mjs`.

## GitHub Pages

Select **GitHub Actions** in **Settings → Pages → Build and deployment**. `.github/workflows/deploy.yml` checks, builds, and deploys pushes to `main`. The user-site repository runs at the domain root without a `basePath`. When moving to a project repository, update `basePath`, public asset URLs, and the site URL.

`audio` preserves the original audio studies. A branch does not create a second Pages site; public audio experiments require a separate deployment.

## Editing

- `data/site.ts`: identity, contact links, projects, engineering areas, writing metadata, and tracks.
- `app/`: pages, page metadata, sitemap, and robots.
- `components/`: navigation, project entries, filtering, reveals, and signal canvas.
- `styles/globals.css`: editorial design system and responsive layouts.
- `public/`: favicon, sharing image, and future public materials.

Add research records to `projects` to generate detail routes automatically. Empty resource URLs render as availability labels; empty contact URLs are hidden. Only add verified URLs.

`writings` is intentionally empty. Entries support category, tags, Draft/Final status, date, reading time, and URL. Add a full essay route under `app/writing/<slug>/page.tsx` and point its `href` there. The visible topic index is an editorial plan, not fabricated articles.

`tracks` is intentionally empty. Add title, Track/Sketch kind, note, and a real public audio `src` to render native accessible audio controls. Build categories describe working areas, not verified completed projects. No releases, publications, employment, results, or contact addresses have been invented.

## Accessibility and motion

Navigation hover and keyboard focus change the signal mode. Pointer position changes amplitude. The canvas draws at most 25 frames per second with capped pixel density, skips drawing off screen and in hidden tabs, and honors reduced-motion preferences. A pause control stops motion manually. Content remains available without animation or JavaScript. System font stacks avoid external font requests.

Before publishing, check desktop and mobile layouts, keyboard focus, research filters, direct detail-route loads, and reduced motion.
