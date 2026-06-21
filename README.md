# Srishti's Portfolio

A personal portfolio website built with **Next.js 14**, **TypeScript**, and **GSAP** animations. It features a cinematic video intro, project showcase, and a certifications gallery.

---

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout — fonts, metadata, global styles
│   ├── page.tsx            # Home page — assembles all sections
│   └── globals.css         # Global CSS variables and resets
│
├── components/
│   ├── VideoIntro.tsx          # Full-screen cinematic video intro
│   ├── VideoIntro.module.css
│   ├── CinematicLayer.tsx      # GSAP-driven scroll animations wrapper
│   ├── Projects.tsx            # Projects grid section
│   ├── Projects.module.css
│   ├── Certificates.tsx        # Certifications gallery — edit this to add/update certs
│   └── Certificates.module.css
│
├── public/
│   ├── srishti-intro.mp4       # Intro video
│   
│
├── next.config.mjs             # Next.js config
├── tsconfig.json               # TypeScript config
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## How to Make Common Changes

### Add a new certification

Open `components/Certificates.tsx` and add a new entry to the `certificates` array:

```ts
{
  name: 'Your Certificate Name',
  issuer: 'Issuer Name',
  date: 'Month Year',          // optional
  href: 'https://link-to-certificate',
  image: '/certificates/your-image.png',  // put the image in public/certificates/
},
```

Then drop the certificate thumbnail image into `public/certificates/`.

### Update an existing certificate link

Find the certificate entry in `components/Certificates.tsx` and update the `href` field.

### Add a new project

Open `components/Projects.tsx` and add a new entry to the `projects` array.

### Change the intro video

Replace `public/srishti-intro.mp4` with your new video (keep the same filename), or update the `src` prop in `components/VideoIntro.tsx`.

### Change fonts or metadata

Edit `app/layout.tsx` — fonts are loaded via `next/font/google` and metadata is defined there too.

---

## Deployment

The site is deployed automatically via **GitHub Actions** on push to `main`. See `.github/workflows/deploy.yml` for the workflow.

To deploy manually, run `npm run build` and host the `.next` output on Vercel, Netlify, or any Node.js host.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| CSS Modules | Scoped component styles |
| GSAP + ScrollTrigger | Scroll animations |
| Three.js | 3D elements |
| GitHub Actions | CI/CD |
