import { projects } from '@/lib/projects';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore a collection of projects by Alexander Fastner including bioinformatics tools, web applications, data analysis, and software development projects.',
  openGraph: {
    title: 'Projects | Alexander Fastner',
    description: 'Explore a collection of projects including bioinformatics tools, web applications, and software development.',
    url: 'https://portfolio-3fef6.web.app/projects',
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            My Projects
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">
            A collection of projects I've worked on, showcasing my skills and
            interests in software development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* Empty State (if no projects) */}
        {projects.length === 0 && (
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects to display yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
