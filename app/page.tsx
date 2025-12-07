import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Alexander Fastner - a bioinformatics researcher and software developer passionate about building innovative solutions at the intersection of coding and biology.",
  openGraph: {
    title: "About | Alexander Fastner",
    description: "Learn about Alexander Fastner - a bioinformatics researcher and software developer passionate about building innovative solutions.",
    url: "https://portfolio-3fef6.web.app",
    images: [
      {
        url: "/images/profile_picture.png",
        width: 1200,
        height: 630,
        alt: "Alexander Fastner",
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Hi, I'm{" "}
            <span className="text-blue-600 dark:text-blue-400">Alexander</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Welcome to my portfolio! I love the challenge of building things -
            especially when it involves a mix of coding and the fascinating
            world of bioinformatics. Here you'll find a collection of projects
            showcasing my passion for creating innovative solutions.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/projects"
              prefetch={true}
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-500 hover:shadow-md hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Projects
            </Link>
            <a
              href="#about"
              className="group text-sm font-semibold leading-6 text-gray-900 transition-colors hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
            >
              Learn more{" "}
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section
        id="about"
        className="mx-auto max-w-10xl px-4 py-20 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Main About Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
                <p>
                  I enjoy spending my free time exploring different hobbies that keep me engaged and curious. 
                  I particularly enjoy working on many different tech-related projects
                  to challenge myself and learn new things. I'm also really passionate about diving I love exploring
                  the underwater world and seeing the beautiful marine life. When I'm not in the water or coding,
                  I'm often tinkering with hardware projects or working on my own apps.
                </p>
                <p>
                  One aspect of programming that has always interested me, but never came up in my studies, was embedded Programming.
                  I've recently enjoyed learning soldering and tinkering with an Arduino board to create a custom physical volume control for my PC.
                </p>
                <p>
                  Another project I've wanted to work on is to make my own app. To this end I took an Android development course
                  and began on designing a mobile version of the game machine strike. This is a board strategy game similar to chess, and I 
                  continuously work on it in my free time getting it closer and closer to a playable version. 
                  I also recreated a small toy game from when I started programming in my free time to practice my skills.
                </p>
                <p>
                 Setting up more of my projects and hosting using Google Cloud products has been a valuable learning experience.
                 I've also been using LLMs for coding and learning how best to leverage it to my advantage.
                </p>
                <p>
                  All of these projects along with many others are linked in my portfolio.
                </p>
              </div>

              {/* Education Section */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Education
                </h3>
                <p className="text-lg leading-8 text-gray-600 dark:text-gray-400">
                  Want to learn more about my academic background and research?
                  Check out the{" "}
                  <Link
                    href="/education"
                    prefetch={true}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold"
                  >
                    Education
                  </Link>{" "}
                  page for details about my Bioinformatics Bachelor&apos;s and
                  Master&apos;s work.
                </p>
              </div>
            </div>

            {/* Profile Picture & Contact Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
                  <div className="mb-6">
                    <Image
                      src="/images/profile_picture.png"
                      alt="Alexander Fastner"
                      width={300}
                      height={300}
                      className="rounded-lg w-full h-auto"
                      priority
                      quality={90}
                      sizes="(max-width: 1024px) 100vw, 300px"
                    />
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-gray-600 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <a
                        href="https://github.com/AlexanderFastner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors"
                      >
                        GitHub
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-gray-600 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <a
                        href="https://www.linkedin.com/in/alexander-fastner/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        className="h-5 w-5 text-gray-600 dark:text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                      <a
                        href="mailto:alexanderfastner@gmail.com"
                        className="text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors"
                      >
                        alexanderfastner@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills/Interests Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-8xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
              Skills & Interests
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Skills Categories */}
              <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Bioinformatics
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Assembly tools (TransPi, Trinity, Abyss, SPAdes)</li>
                  <li>• Alignment tools (Bowtie, HISAT2)</li>
                  <li>• Differential Expression (DESeq2, edgeR)</li>
                  <li>• Transcription Factor Analysis (MAFA, MAFAS64F)</li>
                  <li>• Protein-protein Interaction and Protein Classification</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Backend
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Python (pandas, numpy, scipy)</li>
                  <li>• R (tidyverse, ggplot2, shiny)</li>
                  <li>• SQL</li>
                  <li>• Bash</li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Tools & Others
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• GitHub</li>
                  <li>• Docker</li>
                  <li>• LLMs (Cursor, ChatGPT, Gemini...etc)</li>
                  <li>• Various Google Cloud products</li>
                  <li>• Data visualization (ggplot2, Plotly, matplotlib, seaborn)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-12">
            Get In Touch
          </h2>
          <p className="text-lg leading-8 text-gray-600 dark:text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:alexanderfastner@gmail.com"
              className="flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-gray-800 hover:shadow-md hover:scale-105 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
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
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Email Me
            </a>
            <a
              href="https://github.com/AlexanderFastner"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:scale-105 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
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
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/alexander-fastner/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition-all duration-200 hover:bg-gray-50 hover:shadow-md hover:scale-105 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
