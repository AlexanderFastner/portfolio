import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/lib/types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-gray-800"
    >
      {/* Project Image */}
      {project.image ? (
        <div className="relative h-48 w-full overflow-hidden bg-gray-200 dark:bg-gray-700">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700">
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-white opacity-50">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {project.title}
          </h3>
          {project.featured && (
            <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Featured
            </span>
          )}
        </div>

        <p className="mt-2 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Links */}
        <div className="mt-4 flex items-center gap-4 text-sm">
          <span className="font-medium text-blue-600 transition-colors group-hover:text-blue-700 dark:text-blue-400 dark:group-hover:text-blue-300">
            View details →
          </span>
        </div>
      </div>
    </Link>
  );
}

