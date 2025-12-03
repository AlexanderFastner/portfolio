# Next.js Portfolio Site Migration Plan

## Overview
Migrate your Python Dash personal website to a modern Next.js static site hosted on Firebase Hosting. The site will include an About page and project showcase pages with writeups and images.

## Technology Stack
- **Next.js 14+** (App Router) - React framework with static site generation
- **Tailwind CSS** - Utility-first CSS framework (performant, simple, no custom CSS files needed)
- **TypeScript** - Type safety (optional but recommended)
- **Firebase Hosting** - Static site hosting
- **Next.js Image Optimization** - Built-in image optimization

## Step-by-Step Implementation

### Phase 1: Project Setup

1. **Create Next.js Project**
   - Create a new directory for the portfolio project (separate from Flutter game)
   - Initialize Next.js with TypeScript and Tailwind CSS using `create-next-app`
   - Configure project structure

2. **Install Dependencies**
   - Next.js core dependencies (included)
   - Tailwind CSS and PostCSS (included with create-next-app)
   - Firebase CLI tools (if not already installed)

3. **Project Structure Setup**
   ```
   portfolio/
   ├── app/                    # Next.js App Router
   │   ├── layout.tsx         # Root layout
   │   ├── page.tsx            # Home/About page
   │   ├── projects/          # Projects pages
   │   │   ├── page.tsx       # Projects listing
   │   │   └── [slug]/        # Individual project pages
   │   └── globals.css        # Global styles (Tailwind)
   ├── public/                 # Static assets
   │   ├── images/            # Project images
   │   └── ...
   ├── components/            # Reusable components
   │   ├── Navigation.tsx
   │   ├── ProjectCard.tsx
   │   └── ...
   ├── lib/                   # Utilities
   ├── firebase.json          # Firebase config
   └── next.config.js         # Next.js config
   ```

### Phase 2: Core Pages & Components

4. **Create Navigation Component**
   - Header with navigation links (About, Projects)
   - Responsive mobile menu
   - Active route highlighting

5. **Build Home/About Page** (`app/page.tsx`)
   - About me section
   - Hero section with introduction
   - Skills/interests section
   - Contact information

6. **Build Projects Listing Page** (`app/projects/page.tsx`)
   - Grid/list of project cards
   - Project preview with image, title, description
   - Links to individual project pages

7. **Build Individual Project Pages** (`app/projects/[slug]/page.tsx`)
   - Dynamic routing for each project
   - Project writeup/content
   - Image gallery
   - Technology stack used
   - Links/buttons if applicable

8. **Create Reusable Components**
   - `ProjectCard` - Card component for project listings
   - `ImageGallery` - Component for displaying project images
   - `Layout` wrapper (if needed beyond root layout)

### Phase 3: Styling & Content

9. **Apply Tailwind CSS Styling**
   - Design responsive layout
   - Style navigation, cards, and pages
   - Ensure mobile responsiveness
   - Add hover effects and transitions

10. **Content Migration**
    - Extract content from Dash app
    - Structure project data (consider JSON or TypeScript data files)
    - Add images to `public/images/` directory
    - Write project descriptions and writeups

11. **Image Optimization**
    - Use Next.js `Image` component for optimized images
    - Configure image domains if using external images
    - Add alt text for accessibility

### Phase 4: Firebase Hosting Setup

12. **Configure Next.js for Static Export**
    - Update `next.config.js` to enable static export
    - Configure output: 'export' for static site generation
    - Test build locally

13. **Initialize Firebase Hosting**
    - Run `firebase init hosting` in project directory
    - Configure public directory to `out` (Next.js static export output)
    - Set up as single-page app: Yes (for client-side routing)
    - Configure redirects and headers

14. **Update Firebase Configuration**
    - Modify `firebase.json` for Next.js static export
    - Add proper rewrites for client-side routing
    - Configure cache headers for static assets

### Phase 5: Deployment & Testing

15. **Create Deployment Scripts**
    - Build script: `npm run build` (generates static files)
    - Deploy script: `firebase deploy --only hosting`
    - Combine into single deploy script (similar to your Flutter deploy scripts)

16. **Test Locally**
    - Run `npm run build` to generate static files
    - Test static export in `out` directory
    - Verify all routes work correctly
    - Check responsive design on different screen sizes

17. **Deploy to Firebase**
    - Run deployment script
    - Verify site is live
    - Test all pages and navigation
    - Check image loading and optimization

### Phase 6: Optimization & Polish

18. **SEO Optimization**
    - Add metadata to each page (title, description, Open Graph)
    - Create `metadata` exports in Next.js App Router
    - Add sitemap generation

19. **Performance Optimization**
    - Verify Lighthouse scores
    - Optimize images further if needed
    - Add loading states if needed
    - Ensure fast page transitions

20. **Final Testing**
    - Cross-browser testing
    - Mobile device testing
    - Accessibility checks
    - Content review

## Key Files to Create/Modify

- `app/layout.tsx` - Root layout with navigation
- `app/page.tsx` - Home/About page
- `app/projects/page.tsx` - Projects listing
- `app/projects/[slug]/page.tsx` - Individual project pages
- `components/Navigation.tsx` - Navigation component
- `components/ProjectCard.tsx` - Project card component
- `next.config.js` - Next.js configuration for static export
- `firebase.json` - Firebase Hosting configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Dependencies and scripts
- `deploy.sh` / `deploy.bat` / `deploy.ps1` - Deployment scripts

## Implementation Todos

1. ✅ Create Next.js project with TypeScript and Tailwind CSS in a new directory
2. ✅ Set up project structure (app directory, components, public/images)
3. ✅ Create Navigation component with responsive menu
4. ✅ Build About/Home page with hero section and personal information
5. ✅ Create projects listing page with project cards
6. ✅ Build dynamic project detail pages with routing
7. ✅ Apply Tailwind CSS styling for responsive, modern design
8. ✅ Configure Next.js for static export (output: export)
9. ✅ Initialize and configure Firebase Hosting for Next.js static export
10. ✅ Create deployment scripts (build + deploy) for all platforms
11. ✅ Add SEO metadata and sitemap generation

## Advantages of This Approach

- **Performance**: Static site = fast loading, CDN distribution
- **Cost**: Firebase Hosting free tier is generous for static sites
- **Simplicity**: No server needed, just static files
- **SEO**: Static HTML is great for search engines
- **Maintainability**: Modern React/Next.js ecosystem
- **Scalability**: Easy to add more projects/pages

## Disadvantages vs. Python Dash + Cloud Run

- **No Python Backend**: Can't run Python code server-side (but you don't need it for static content)
- **Build Step Required**: Need to rebuild and redeploy for content changes (vs. live Python updates)
- **No Server-Side Logic**: Can't do server-side processing, database queries, etc. (but you don't need it)
- **Learning Curve**: Need to learn React/Next.js if not familiar (but Tailwind makes styling easy)

## Quick Start Commands

### Initial Setup
```bash
# Create Next.js project
npx create-next-app@latest portfolio --typescript --tailwind --app --no-src-dir

# Navigate to project
cd portfolio

# Install Firebase CLI (if not already installed)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize Firebase Hosting
firebase init hosting
# Select: Use an existing project or create a new one
# Public directory: out
# Single-page app: Yes
# Set up automatic builds: No (or Yes if you want)
```

### Development
```bash
# Run development server
npm run dev

# Build for production (static export)
npm run build

# Test static export locally
npx serve out
```

### Deployment
```bash
# Build and deploy
npm run build
firebase deploy --only hosting
```

## Notes

- The plan assumes you'll create the project in a separate directory from your Flutter game
- Tailwind CSS is recommended for simplicity and performance
- All pages will be statically generated at build time
- Images should be placed in `public/images/` directory
- Project data can be stored in JSON files or TypeScript data files
- The site will be fully static, so no server-side rendering at runtime

