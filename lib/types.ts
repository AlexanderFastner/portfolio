// Project type definition
export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  images?: string[]; // Additional images for gallery
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

