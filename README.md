## Portfolio (Next.js + Vercel)

Personal portfolio site for **Sylas Omondi** with:
- Live preview + code links for projects
- Dark mode toggle
- Blog section
- Contact form (mailto)
- Résumé page (print / save as PDF)

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Customize

- Update contact email/phone in `src/app/page.tsx` and `src/app/resume/page.tsx`
- Replace the headshot in `public/` (currently a placeholder `headshot.svg`)
- Add more projects by editing `src/app/page.tsx`

### Deploy (Vercel)

Push to GitHub then import the repo on Vercel, or run:

```bash
npx vercel --yes
```
