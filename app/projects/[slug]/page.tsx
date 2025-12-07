import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import ImageGallery from '@/components/ImageGallery';
import ProjectStructure from '@/components/ProjectStructure';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  const imageUrl = project.image 
    ? `/images/${project.image}`
    : '/images/profile_picture.png';

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: `${project.title} | Alexander Fastner`,
      description: project.description,
      url: `https://portfolio-3fef6.web.app/projects/${slug}`,
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: [imageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Use images array if available, otherwise fall back to single image
  const projectImages = project.images || (project.image ? [project.image] : []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Back Button */}
        <Link
          href="/projects"
          prefetch={true}
          className="mb-8 inline-flex items-center text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {project.title}
            </h1>
            {project.featured && (
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Featured
              </span>
            )}
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        {/* Project Image */}
        {project.image ? (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center p-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain p-4"
              priority
              quality={90}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 896px"
            />
          </div>
        ) : (
          <div className="relative mb-8 aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 dark:from-blue-600 dark:to-purple-700">
            <div className="flex h-full items-center justify-center">
              <span className="text-6xl font-bold text-white opacity-50">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
        )}

        {/* Project Writeup/Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
          {project.longDescription ? (
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              {project.longDescription.split('\n\n').map((paragraph, index) => {
                // Check if this is a heading (ends with colon and next line starts with bullet or dash)
                const isHeading = paragraph.includes(':') && !paragraph.includes('\n-') && paragraph.split(':').length === 2;
                const [heading, ...rest] = paragraph.split(':');
                
                if (isHeading && rest.length > 0) {
                  return (
                    <div key={index} className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-2">
                        {heading.trim()}
                      </h3>
                      <div className="text-lg leading-8 whitespace-pre-line">
                        {rest.join(':').trim()}
                      </div>
                    </div>
                  );
                }
                
                // Check if it's a bullet list
                if (paragraph.includes('\n-')) {
                  const lines = paragraph.split('\n');
                  const listItems = lines.filter(line => line.trim().startsWith('-'));
                  const beforeList = lines.filter(line => !line.trim().startsWith('-')).join('\n');
                  
                  return (
                    <div key={index} className="space-y-2">
                      {beforeList && (
                        <p className="text-lg leading-8">{beforeList.trim()}</p>
                      )}
                      <ul className="list-disc list-inside space-y-1 text-lg leading-8 ml-4">
                        {listItems.map((item, itemIndex) => (
                          <li key={itemIndex}>{item.trim().substring(1).trim()}</li>
                        ))}
                      </ul>
                    </div>
                  );
                }
                
                // Regular paragraph
                return (
                  <p key={index} className="text-lg leading-8 whitespace-pre-line">
                    {paragraph}
                  </p>
                );
              })}
              {project.slug === 'neon-escape' && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Project Structure
                  </h3>
                  <ProjectStructure />
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-8">
                This project demonstrates my skills in building modern web
                applications. It showcases various technologies and best practices
                in software development.
              </p>
              <p className="text-lg leading-8">
                The project was built with a focus on user experience,
                performance, and maintainability. Each technology was chosen
                carefully to ensure the best possible outcome.
              </p>
            </div>
          )}
        </div>

        {/* Technology Stack */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Technology Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Image Gallery */}
        {projectImages.length > 0 && (
          <ImageGallery images={projectImages} projectTitle={project.title} />
        )}

        {/* Links/Buttons */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-8 flex flex-wrap gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-gray-800 hover:shadow-md hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-500 hover:shadow-md hover:scale-105"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
