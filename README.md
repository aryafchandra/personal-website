# Arya F Chandra — Portfolio

Sports-themed, player-card portfolio site. Built with React + Vite.

## Getting started

```
npm install
npm run dev
```

Opens a local dev server with hot reload (default: http://localhost:5173).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run oxlint

## Project structure

```
src/
  components/   one component per section (Hero, Playbook, Contact, ...)
  data/         portfolio content (history, skills, projects) as plain data
  assets/       images, bundled via Vite
```

To update content — job history, skills, or projects — edit the arrays in
`src/data/portfolio.js` and `src/data/projects.js`; the page renders from
them automatically.

`legacy/` holds the original static HTML/CSS/JS version of the site, kept
for reference.
