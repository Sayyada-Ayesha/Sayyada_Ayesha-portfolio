# Sayyada Ayesha — Portfolio

Premium animated personal portfolio built with React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

## Editing content

All real content (name, experience, education, skills, projects, certifications,
achievements, social links, etc.) lives in **`src/data/content.ts`**. Edit that
file to update anything on the site — no need to touch components.

Fields left as empty strings (`''`) mean that piece of information was not
supplied yet (e.g. exact dates, email, some social links, profile photo).
Fill them in as they become available.

## Adding real assets

Drop files into these folders (paths already wired into `content.ts`):

- `public/assets/resume/Sayyada-Ayesha-Resume.pdf` — resume download button
- `public/assets/portfolio/Sayyada-Ayesha-Portfolio.pdf` — Creative Work section fallback viewer
- `public/assets/profile/` — profile photo
- `public/assets/certificates/` — certificate images/PDFs
- `public/assets/publications/` — book covers / publication assets
- `public/assets/projects/` — project screenshots
- `public/assets/branding/` — logo / brand assets

To show individual portfolio gallery images instead of the PDF fallback,
populate the `galleryItems` array in `src/data/content.ts` with
`{ title, category, image }` entries pointing at files in `public/assets/`.

## Deploying to GitHub Pages

A ready-made GitHub Actions workflow lives at `.github/workflows/deploy.yml`.
It builds and deploys automatically on every push to `main`.

1. Push this project to a GitHub repository.
2. In the repo settings, go to **Settings → Pages** and set the source to
   **GitHub Actions**.
3. Push to `main` — the workflow builds the site and deploys it.
4. Your site will be live at `https://<username>.github.io/<repository-name>/`.

The workflow automatically sets the Vite base path to
`/<repository-name>/`. If you instead publish this as a root
`<username>.github.io` Pages site, change `VITE_BASE_PATH` in
`.github/workflows/deploy.yml` to `/`.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4
- Framer Motion (animations, scroll reveals, magnetic/hover interactions)
- lucide-react (icons)

## Content Management System (Decap CMS)

This project ships with a Git-backed admin dashboard at **`/admin`** so
content (projects, portfolio work, publications/books, certificates,
achievements, profile, and social links) can be updated from a browser
after deployment — no code editing required.

Live admin: **https://sayyada-ayesha.github.io/Sayyada_Ayesha-portfolio/admin/**

- Everything you publish is committed as JSON files under `/content/`
  and uploaded files land under `public/assets/{projects,portfolio,publications,certificates,profile,resume,branding}/`
  — all stored in this Git repository, not a database or third-party service.
- Publishing in the CMS = a normal commit to `main`, so it triggers the
  **same** `deploy.yml` GitHub Actions workflow that already builds and
  deploys the site. There is no second deployment mechanism, and hosting
  stays on GitHub Pages.
- Existing content (all 5 projects, all 7 certifications, all 3
  achievements, and all 3 publications) has already been migrated into
  `/content/*.json` — nothing was deleted. If a whole collection is ever
  emptied out, the site falls back to the original static defaults in
  `src/data/content.ts` so it can never render blank.

**One-time setup required before `/admin` can be used** — a GitHub
OAuth App plus Netlify's built-in OAuth provider (no custom server code;
public hosting stays on GitHub Pages, Netlify is only used for the login
handshake). Full step-by-step instructions: **`docs/CMS-SETUP.md`**.

Until that one-time setup is done, `/admin` will load but login will
not work — the rest of the site is completely unaffected either way.

### Updating the Portfolio

1. Open `/admin` and log in with your GitHub account.
2. Pick a content type from the sidebar (Projects, Portfolio, Books &
   Publications, Certifications, Achievements, or Site Settings).
3. Click **New [item]**, fill in the fields, and upload any
   image/PDF directly in the field (thumbnail vs. gallery, cover vs.
   preview pages, etc. are labeled).
4. Click **Publish**.
5. Wait 1–2 minutes for the **Deploy to GitHub Pages** Action to finish
   (visible under the repo's **Actions** tab).
6. Refresh the live site — the new content is there.

To feature something on top, toggle its **Featured** switch — no code
change needed.
