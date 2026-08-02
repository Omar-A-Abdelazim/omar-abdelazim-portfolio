# Portfolio Clone

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run the dev server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Structure

```
app/
  page.tsx
  layout.tsx
  globals.css
components/
  CustomCursor.tsx
  Navbar.tsx
  Hero.tsx
  About.tsx
  Experience.tsx
  Education.tsx
  Projects.tsx
  Skills.tsx
  Certificates.tsx
  Contact.tsx
  Footer.tsx
  SectionWrapper.tsx
lib/
  data.ts
```

## Customizing your content

All personal info, projects, skills, experience, and education live in `lib/data.ts`.
Edit that single file to replace the placeholder content with your own.

## Replacing images

Images currently use placehold.co placeholders. To use your own images:
1. Add your image files to a `public/images/` folder
2. In `lib/data.ts`, change the image paths (e.g. `profileImage`, `project.image`, `exp.logo`) to `/images/your-file.jpg`
3. If you add other external image domains, update `next.config.js` -> `images.domains`
