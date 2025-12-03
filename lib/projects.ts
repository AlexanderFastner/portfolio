import { Project } from './types';

// Helper function to get a project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

// Helper function to get all project slugs (for static generation)
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}

// Sample projects data - replace with your actual projects
export const projects: Project[] = [
  {
    slug: 'example-project-1',
    title: 'Example Project 1',
    description:
      'A brief description of your first project. This could be a web app, mobile app, or any other project you want to showcase.',
    longDescription:
      'This is a more detailed description of the project. You can include information about the problem it solves, technologies used, challenges faced, and outcomes achieved.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/AlexanderFastner/example-project',
    liveUrl: 'https://example-project.vercel.app',
    featured: true,
  },
  {
    slug: 'example-project-2',
    title: 'Example Project 2',
    description:
      'Another project description. Showcase your diverse skills and interests through different types of projects.',
    technologies: ['Python', 'Flask', 'PostgreSQL'],
    githubUrl: 'https://github.com/AlexanderFastner/example-project-2',
  },
  {
    slug: 'example-project-3',
    title: 'Example Project 3',
    description:
      'A third project to demonstrate the variety of work you do. Each project tells a story about your journey as a developer.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    featured: true,
  },
];

