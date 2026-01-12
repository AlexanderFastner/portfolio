# 🧬 Alexander Fastner - Portfolio Website

A modern, responsive portfolio website showcasing my work in bioinformatics, software development, and various tech projects. Built with Next.js and deployed on Firebase Hosting.

🌐 **Live Site:** [portfolio-3fef6.web.app](https://portfolio-3fef6.web.app/)

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Language:** TypeScript
- **Hosting:** Firebase Hosting
- **Deployment:** Static export for optimal performance

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── education/         # Education page
│   └── projects/          # Project pages
│       ├── page.tsx       # Projects listing
│       └── [slug]/        # Individual project pages
├── components/            # React components
│   ├── Navigation.tsx    # Main navigation
│   ├── ProjectCard.tsx    # Project card component
│   ├── ImageGallery.tsx   # Image gallery component
│   └── PageLayout.tsx     # Page layout wrapper
├── lib/                   # Utility functions
│   ├── projects.ts        # Project data
│   └── types.ts           # TypeScript types
├── public/                # Static assets
│   └── images/            # Project and profile images
└── scripts/               # Build scripts
    └── generate-sitemap.mjs
```

3. Run the development server for local testing:
```bash
npm run dev
```

Available here: [http://localhost:3000](http://localhost:3000)

### Adding Projects

Projects are defined in `lib/projects.ts`. Add new projects to the `projects` array with the following structure:

```typescript
{
  slug: 'project-slug',
  title: 'Project Title',
  description: 'Short description',
  longDescription: 'Detailed description...',
  technologies: ['Tech1', 'Tech2'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://example.com',
  image: '/images/project-image.png',
  images: ['/images/img1.png', '/images/img2.png'], // Optional gallery
  featured: true // Optional
}
```

## 🚢 Deployment

The site is configured for static export and deployed to Firebase Hosting.

### Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

### Deploy to Firebase

```bash
# Option 1: Using npm script
npm run deploy

# Option 2: Manual deployment
firebase deploy --only hosting
```

## 📄 License

This project is private and proprietary. 

---
