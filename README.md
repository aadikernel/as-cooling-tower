# A.S. Cooling Tower — Corporate Website

A professional corporate website for **A.S. Cooling Tower**, built with React + Vite + Tailwind CSS v4.

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Lucide React icons

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Production Build

```bash
npm run build
npm run preview
```

## Adding Images

Place photographs extracted from the company profile PDF into `public/images/`.
See `public/images/README.md` for the full list of required filenames.

Recommended export settings: JPEG, 1200px wide, 80% quality.

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Click **Deploy**.

`vercel.json` is already configured for SPA routing.

## Contact Details (verified from company profile)

| Role              | Name        | Phone            | Email                        |
|-------------------|-------------|------------------|------------------------------|
| Managing Director | Anuj Kumar  | +91 92866 03689  | anujkumar10910@gmail.com     |
| Site Engineer     | Shyam Babu  | +91 90583 76491  | —                            |
| Company           | —           | —                | ascoolingtower@gmail.com     |
| WhatsApp          | —           | +91 92581 20029  | —                            |

## SEO

- Unique `<title>` and `<meta description>`
- Open Graph and Twitter Card tags
- JSON-LD structured data (Organization)
- `robots.txt` and `sitemap.xml` in `/public`
- Semantic HTML with correct heading hierarchy
- Descriptive `alt` text on all images

Update the canonical URL in `index.html` once the production domain is confirmed.
