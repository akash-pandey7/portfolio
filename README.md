# ML Engineer Portfolio

A fast, modern, single-page portfolio for machine-learning engineers — built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. Dark/light themes, scroll animations, auto-generated favicon and social-share image, and **all content lives in one file** so you never have to touch the components.

> Everything you see is placeholder content. Swap it for your own in `src/lib/content.ts` and you're done.

## Features

- **One-file content** — name, bio, skills, projects, certifications, education, and links all come from [`src/lib/content.ts`](src/lib/content.ts).
- **ML-focused sections** — projects with demo/code links and a date range, a grouped skills matrix, certifications & achievements, and education.
- **Dark & light mode** — respects the system preference, remembers the user's choice, and switches with no flash.
- **Responsive** — collapses to a mobile menu; every section reflows down to phone width.
- **SEO + social ready** — Open Graph / Twitter meta tags, plus a favicon and a 1200×630 share image generated automatically from your name and role.
- **Accessible & robust** — keyboard-friendly, reduced-motion aware, and fully visible even with JavaScript disabled.

## Quick start

Requires **Node.js 18.18+** (20+ recommended).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The page hot-reloads as you edit.

Other scripts:

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # check code style
```

## Make it yours

### 1. Edit your content

Open [`src/lib/content.ts`](src/lib/content.ts) — this is the **only file you need to change**. Search for `TODO` to find the must-change items. It's plain data (no framework knowledge needed):

| What | Where in `content.ts` |
| --- | --- |
| Name, role, tagline, email, location | `profile` |
| "Open to work" pill (show/hide + text) | `profile.availableForWork`, `profile.availabilityText` |
| Social links (GitHub, LinkedIn, Kaggle, X, Scholar, HF) | `socials` — set any `url` to `""` to hide it |
| Deployed URL + SEO title/description/keywords | `site` |
| Bio paragraphs and stat tiles | `about` |
| Skills, grouped by category | `skillGroups` |
| Projects (period, metric, tags, links, `featured`) | `projects` |
| Certifications & achievements | `certifications` |
| Degrees | `education` |

Changes appear instantly while `npm run dev` is running.

### 2. Add your resume

Drop a PDF at `public/resume.pdf` (the path `profile.resumeUrl` points to). To use a different name or an external link, change `profile.resumeUrl`. Set it to `""` to hide the Resume button entirely.

### 3. Change the accent colors (optional)

Colors are CSS variables in [`src/app/globals.css`](src/app/globals.css). Edit the accent tokens under `:root` (light) and `.dark` (dark):

```css
:root {
  --accent: #6d28d9;    /* primary accent (buttons, links) */
  --accent-2: #0e7490;  /* gradient partner */
}
.dark {
  --accent: #a78bfa;
  --accent-2: #22d3ee;
}
```

The favicon and social image use these too — no other edits needed.

### 4. Favicon & social preview (automatic)

Both are generated from your content — the favicon in [`src/app/icon.tsx`](src/app/icon.tsx) (your initials on a gradient) and the share image in [`src/app/opengraph-image.tsx`](src/app/opengraph-image.tsx) (name, role, description). Update your name in `content.ts` and they follow. Tweak those files only if you want a different design.

> For correct absolute share-image URLs, set `site.url` to your real deployed domain.

### 5. Add or remove a section

Sections are composed in [`src/app/page.tsx`](src/app/page.tsx). To drop one (e.g. Certifications): remove `<Certifications />` there **and** delete its entry from `navLinks` in `content.ts`. To reorder, just move the components around.

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx            # <html>, fonts, metadata, theme script
│  ├─ page.tsx              # composes the sections (edit to add/remove/reorder)
│  ├─ globals.css           # design tokens, dark mode, utilities
│  ├─ icon.tsx              # generated favicon
│  └─ opengraph-image.tsx   # generated social-share image
├─ components/              # Hero, About, Skills, Projects, … (rarely need edits)
└─ lib/
   ├─ content.ts            # ← YOUR CONTENT LIVES HERE
   └─ cn.ts                 # tiny className helper
public/
└─ resume.pdf               # ← add your résumé here
```

## Deploy

### Vercel (recommended)

Push the repo to GitHub and import it at [vercel.com/new](https://vercel.com/new) — it detects Next.js and needs zero configuration. Or from the CLI:

```bash
npx vercel
```

After deploying, set `site.url` in `content.ts` to your final domain and redeploy so the meta tags and share image use the right URLs.

### Netlify

Import the repo, or run `npx netlify deploy`. Build command `npm run build`, and Netlify's Next.js runtime handles the rest.

### Static hosting (GitHub Pages, S3, any CDN)

This site has no server-side code, so it can be exported to plain files. Add one line to `next.config.ts`:

```ts
const nextConfig = {
  output: "export",
};
```

Then `npm run build` emits a static site to `out/`. Upload that folder anywhere.

> Deploying to a GitHub Pages **project** page (`username.github.io/repo`)? Also set `basePath: "/repo"` in `next.config.ts` so assets resolve correctly. A user/organization page (`username.github.io`) needs no `basePath`.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) · [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config)
- [TypeScript](https://www.typescriptlang.org)
- [Geist](https://vercel.com/font) font via `next/font`

No UI or icon libraries — the icons are hand-rolled SVGs in `src/components/Icons.tsx`, so the bundle stays small.

## License

Yours to use for your own portfolio. Attribution appreciated but not required.
