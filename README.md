# Jamia Tul Madina Khanqah Sharif — Official Website

Official multi-page website for **Jamia Tul Madina Faizan e Madina, K.L.P Road, Khanqah Sharif, Bahawalpur** — an Islamic educational institute operating under the **Dawat-e-Islami Education Department** since **2010**.

Built with **TanStack Start v1 + React 19 + Tailwind CSS v4 + TypeScript + Nitro**.

**Live reference:** https://muzammilmudarsa.lovable.app

---

## ⚠️ REQUIRED IMAGES (READ THIS FIRST)

All images must be placed inside the **`public/`** folder with the **exact filenames listed below**. If any file is missing, the corresponding image will simply not render — the site will still work but that spot will show a broken-image icon.

| Filename (in `public/`) | Where it appears | What it should show |
|---|---|---|
| `logo.jpeg` | Header, Footer, Hero overlay | Jamia official logo (square, high resolution) |
| `favicon.png` | Browser tab icon | Small square version of the logo (32×32 or 64×64) |
| `campus-front.jpeg` | Home hero slider, About, Admissions, Campus, Contact, Courses, Gallery | Full front view of the Jamia building with courtyard and lawn |
| `teachers-group.jpeg` | Home hero slider, Campus, Faculty, Events, Gallery | Group photo of all Mudarse standing at the Jamia entrance |
| `ijtema-1.jpeg` | Home hero slider, Events, Gallery | Night ijtema gathering (large crowd) |
| `ijtema-2.jpeg` | Campus, Events, Gallery | Ijtema main stage with scholars addressing the gathering |
| `ijtema-3.jpeg` | Events, Gallery | Aerial/wide view of the ijtema gathering |
| `result-2023-poster.jpeg` | Board Positions page, Gallery | Official 9th class 2023 position holders poster |
| `position-holder-muzammil.jpeg` | Home featured achievement, Board Positions, Awards | Muhammad Muzammil Nawaz receiving his certificate of merit |
| `position-holder-ceremony.jpeg` | Board Positions | Award ceremony photo of the position holder |
| `award-banner-2019.jpeg` | Awards | 2019 "Position across Pakistan" banner/announcement |
| `award-news.jpeg` | Awards | National TV news coverage of an award |
| `best-teacher.jpeg` | Awards, Faculty, Gallery | Best Teacher Award 2024 recipient photo |
| `principal-zulfaqar.jpeg` | Home leadership card, Administration, Faculty | Portrait of Allama Zulfaqar Madani (Principal) |

**Not yet available — placeholders will show automatically:**
- Vice Principal (Allama Zubair Madani) photo
- Old historical photos (History page)
- Additional faculty photos

If you add these later, drop the files in `public/` and update `src/data/images.ts` + the relevant route file.

---

## Getting Started

```sh
git clone <this-repository-url>
cd <repository-name>
bun install        # or: npm install
bun dev            # or: npm run dev
```

Open [http://localhost:3000](http://localhost:3000/).

## Scripts

| Command ↕▾ | Purpose ↕▾ |
|---|---|
| −`bun dev` | Start dev server |
| −`bun build` | Production build |
| −`bun preview` | Preview production build |
| −`bun lint` | ESLint |
| −`bun format` | Prettier format |
⚙

## Project Structure

```
public/                  ← all images live here (see table above)
src/
├── routes/              ← one file = one page (TanStack file-based routing)
├── components/site/     ← Header, Footer, shared UI primitives
├── data/
│   ├── site.ts          ← Jamia info, nav, courses, stats, ayah/hadith
│   └── images.ts        ← Central image path registry
├── lib/                 ← utils, error handling
├── hooks/               ← use-mobile
├── styles.css           ← Tailwind v4 theme (Islamic green + gold)
├── router.tsx
├── routeTree.gen.ts     ← auto-generated, do not edit
├── server.ts
└── start.ts
```

## Pages

| Route ↕▾ | File ↕▾ |
|---|---|
| −`/` | `routes/index.tsx` |
| −`/about` | `routes/about.tsx` |
| −`/history` | `routes/history.tsx` |
| −`/administration` | `routes/administration.tsx` |
| −`/faculty` | `routes/faculty.tsx` |
| −`/courses` | `routes/courses.tsx` |
| `/board-positions` | `routes/board-positions.tsx` |
| `/awards` | `routes/awards.tsx` |
| `/campus` | `routes/campus.tsx` |
| `/events` | `routes/events.tsx` |
| `/gallery` | `routes/gallery.tsx` |
| `/admissions` | `routes/admissions.tsx` |
| `/contact` | `routes/contact.tsx` |
⚙

## Editing Content

Most text lives in **`src/data/site.ts`**. Update the `jamia` object, `courses`, `facilities`, `stats`, `featuredPosition`, or `navItems` and every page reflects it automatically.

## Adding shadcn/ui Components (Optional)

This project does **not** ship the full shadcn/ui component set (nothing currently imports them). If you need one:

```
npx shadcn@latest add button card input label textarea
```

The `components.json` config is already in place.

## Brand Notes

- **Primary color:** Islamic green `oklch(0.446 0.093 164)` ≈ `#005533`
- **Accent:** Subtle gold
- **Fonts:** Cormorant Garamond (headings), Inter (body), Noto Nastaliq Urdu (Urdu text)
- **Motion:** All animations respect `prefers-reduced-motion`

## Deployment

Configured for Cloudflare Pages via Nitro. Push to `main` and let the pipeline handle it, or run `bun build` and deploy the `.output/` directory.

## Credits

**Curated & developed by Muzammil Nawaz**

- WhatsApp: [https://wa.me/+923057954200/](https://wa.me/+923057954200/)
- Facebook: [https://www.facebook.com/themuzammilnawaz/](https://www.facebook.com/themuzammilnawaz/)
- Instagram: [https://www.instagram.com/themuzammilnawaz/](https://www.instagram.com/themuzammilnawaz/)
- X: [https://x.com/themuzammilnawaz/](https://x.com/themuzammilnawaz/)
- GitHub: [https://www.github.com/themuzammilnawaz/](https://www.github.com/themuzammilnawaz/)

---

© Jamia Tul Madina Khanqah Sharif. All rights reserved.

