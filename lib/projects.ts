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
    slug: 'rosalind-challenges',
    title: 'Rosalind Bioinformatics Challenges',
    description:
      'A collection of solutions to bioinformatics problems from Rosalind, a platform for learning computational biology through problem-solving.',
    longDescription:
      `Rosalind is a platform for learning Bioinformatics by working through a collection of problems. I've been working through various challenges covering topics like alignment, combinatorics, computational mass spectrometry, divide and conquer, dynamic programming, genomic assembly, graph algorithms, phylogeny, and string algorithms.

Some examples of challenges I've completed include:
- SGRA: Using the Spectrum Graph to Infer Peptides - transforming a list of positive real numbers corresponding to the spectrum graph of a protein sequence into the longest protein string that matches the spectrum graph.
- NKEW: Newick Format with Edge Weights - receiving a weighted newick tree and returning a collection of numbers that represents the distances between the nodes.

The project covers many bioinformatics topics including Alignment, Combinatorics, Computational Mass Spectrometry, Divide and Conquer, Dynamic Programming, Genomic Assembly, Genome Rearrangements, Graph Algorithms, Graphs, Heredity, Phylogeny, Population Dynamics, Probability, Set Theory, Sorting, and String Algorithms.`,
    technologies: ['Python', 'Bioinformatics', 'Algorithm Design', 'Data Structures'],
    githubUrl: 'https://github.com/AlexanderFastner/Rosalind',
    liveUrl: 'https://rosalind.info/users/Alex.Fastner/',
    image: '/images/Rosalind_logo.png',
    featured: true,
  },
  {
    slug: 'bachelors-thesis',
    title: "Bachelor's Thesis: Search for evidence of recombination in Alternaria solani",
    description:
      'Bioinformatics analysis investigating genetic recombination in the fungal pathogen Alternaria solani using genomic tools (ClonalFrameML and LDHelmet) to understand its reproductive biology.',
    longDescription:
      `Alternaria solani is a fungal pathogen responsible for early blight in tomatoes and potatoes, two globally important crops. The disease typically begins as small, dark lesions with characteristic concentric rings on older leaves, but can spread to stems and fruit, causing significant defoliation and yield loss. As a necrotrophic pathogen, A. solani kills host tissue and feeds on the resulting dead material. Notably, it reproduces asexually via conidia and has no known sexual stage, although some genetic evidence suggests recombination may occur.

Fungicides, particularly succinate dehydrogenase inhibitors (SDHIs), are commonly used to manage early blight. However, resistance to these fungicides is emerging, with highly resistant strains now reported in parts of Europe. This resistance appears to have developed independently in different regions, hinting at possible genetic recombination within the pathogen population.

To investigate this, I analyzed 48 A. solani samples from various European regions and the United States using recombination detection tools ClonalFrameML and LDHelmet. These tools help assess whether genetic exchange occurs, which is important for designing robust, cost-effective integrated pest management strategies. Understanding the pathogen's reproductive biology can inform how we approach disease control, especially as resistance to chemical controls grows.

ClonalFrameML:
ClonalFrameML is a maximum likelihood-based software tool designed for detecting and quantifying recombination events in bacterial genomes. It analyzes aligned whole-genome sequence data to reconstruct phylogenies that account for recombination, estimate key recombination parameters, and map where recombination has occurred across the genome.

LDHelmet:
LDHelmet is a statistical tool used to infer fine-scale crossover recombination rates from population genetic data, particularly from phased and aligned DNA sequences. It uses advanced population genetic models and Markov Chain Monte Carlo (MCMC) methods to generate detailed recombination maps, identifying recombination hotspots with high accuracy.

The results from LDHelmet showed 14 regions that show evidence of recombination, many of which upon visual inspection line up with results from ClonalFrameML. This work was continued as a research assistant for Prof. Stam at the Phytopathology chair at TUM and also later at Kiel University.`,
    technologies: ['Python', 'R', 'Bash', 'ClonalFrameML', 'LDHelmet', 'Bioinformatics', 'Genomics'],
    githubUrl: 'https://github.com/AlexanderFastner/Alternaria-Solani-Recombination',
    image: '/images/alternaria_solani.jpg',
    images: [
      '/images/alternaria_solani.jpg',
      '/images/bachelor_map.png',
      '/images/bachelor_chr1_clonalframeml.png',
      '/images/bachelor_chr7_LDhelmet.png',
      '/images/bachelor_chr1_comparison.png',
    ],
    featured: true,
  },
  {
    slug: 'masters-thesis',
    title: "Master's Thesis: Bioinformatic Analysis of the role of MAFA in Stem Cell-Derived Human Pancreatic Islets",
    description:
      'Research collaboration analyzing the role of transcription factor MAFA in β-cell maturation and insulin production using bulk RNA sequencing, contributing to Type 1 diabetes treatment research.',
    longDescription:
      `This project is a collaboration between the Theis Lab at the Helmholtz Institute of Munich and Hebrok Lab at Technical University of Munich (TUM).

Abstract:
Type 1 diabetes (T1D) is an autoimmune disorder characterized by immune-mediated destruction of insulin-producing pancreatic β-cells, leading to lifelong dependence on exogenous insulin. Current stem cell-based therapies aim to restore endogenous insulin production by generating functional β-cells from pluripotent stem cells, though challenges remain in achieving functional maturity comparable to primary β-cells.

The transcription factor MAFA plays a pivotal role in maintaining β-cell identity and regulating insulin production, with human β-cells showing developmental-stage-specific MAFA expression patterns – low activity in juvenile cells and higher expression in mature adult cells. A naturally occurring MAFAS64F mutation initially enhances insulin production through elevated MAFA activity, but this effect proves transient, highlighting MAFA's dual role in promoting β-cell function and its susceptibility to instability.

Bulk RNA sequencing of MAFAWT and MAFAS64F cell lines revealed heightened differential gene expression in the mutant, particularly in pathways related to β-cell maturation and insulin biosynthesis. Surprisingly, control cell lines showed greater activation scores in key metabolic pathways despite lower MAFA expression, suggesting compensatory mechanisms in unmodified cells. While the study faced limitations from sparse temporal data, it established an analytical framework to investigate MAFA's role in stabilizing stem cell-derived β-cells – a critical step toward developing durable cell replacement therapies for T1D. These findings underscore the need to balance MAFA-driven insulin production with mechanisms ensuring long-term β-cell survival and function.

The general strategy for generating β cells from human pluripotent stem cells (hPSCs) is to closely recapitulate the path that hPSCs take during embryogenesis. They are directed from the initial starting hPSCs through various intermediary stages to finally become pancreatic islet β cells.`,
    technologies: ['Python', 'R', 'RNA-seq', 'Bioinformatics', 'Differential Expression Analysis', 'Pathway Analysis', 'Bioconductor'],
    githubUrl: 'https://github.com/AlexanderFastner/MAFA_functional_analysis',
    image: '/images/hpsc_progression.png',
    images: [
      '/images/hpsc_progression.png',
      '/images/master_dataflow.png',
      '/images/master_gsis.png',
    ],
    featured: true,
  },
  {
    slug: 'cantata',
    title: 'CANTATA: Community-based Non-bilaterian Transcriptome Archive',
    description:
      'A web tool for comparing BUSCO genes from aquatic specimens to a standardized dataset, allowing biologists to analyze and interpret their sequencing data with various visualizations.',
    longDescription:
      `CANTATA is a Community-based Non-bilaterian Transcriptome Archive. The aim of this project is to provide an archive of non-bilaterian transcriptomic resources assembled and annotated in a standardized manner. It is intended to serve as a resource for Biologists to analyze and interpret their sequencing data for aquatic life.

I solo developed this web tool and built it with Python Dash, containerized as a Docker image, and originally hosted on Heroku (Now Google CLoud Run). It allows a user to compare their aquatic specimens BUSCO genes (Benchmarking Universal Single-Copy Orthologs) to our dataset. These genes are selected because they are expected to be found in at least 90% of species in a lineage, and in a single copy in 90% of those species. BUSCO genes serve as a standard set of markers for assessing the completeness and quality of genome assemblies, gene sets, and transcriptomes.

Different visualizations are generated to show differences between transcriptomes as well as the biases introduced by different assembly programs (Trinity, TransPi). TransPi is an assembly made by combining results from several other assemblers with stringent filtering criteria.`,
    technologies: ['Python', 'Dash', 'Docker', 'Heroku', 'Bioinformatics', 'Data Visualization', 'Google Cloud Platform'],
    githubUrl: 'https://github.com/AlexanderFastner/cantata_frontend',
    liveUrl: 'https://cantatadb-8f2293883fc5.herokuapp.com/',
    image: '/images/cantata_heatmap.png',
    images: [
      '/images/cantata_heatmap.png',
      '/images/cantata_stacked_area.png',
      '/images/cantata_raincloud.png',
      '/images/cantata_alignment.png',
    ],
  },
  {
    slug: 'cyclistic-case-study',
    title: 'Cyclistic Case Study: Google Data Analyst Capstone',
    description:
      'A comprehensive data analysis project exploring user behavior patterns in a rideshare company to identify opportunities for converting casual users into subscribing members.',
    longDescription:
      `The Cyclistic Case Study is a comprehensive exploration into the user data of a fictional rideshare company, Cyclistic. This Google Data Analysis Capstone Project aims to uncover valuable insights about user behavior patterns and devise a strategic approach for converting casual users into subscribing members.

Through meticulous data analysis this study unveils key findings that can reshape the company's operational and marketing strategies:

Uncovering User Behavior Patterns:
The study delves deep into the user data, identifying distinct patterns and trends in how customers interact with the Cyclistic platform. This includes understanding the preferences and usage habits of both casual and annual members.

Identifying Conversion Opportunities:
By analyzing the factors that drive user engagement and loyalty, the study pinpoints the most promising opportunities for converting casual riders into subscribing members. This information can inform targeted marketing campaigns and product enhancements to better meet the needs of the target audience.

Informing Strategic Decision-Making:
The insights gathered from this comprehensive analysis provide a solid foundation for Cyclistic to make data-driven decisions. This can lead to the development of more effective operational and marketing strategies, strengthening the company's position in the competitive rideshare market.`,
    technologies: ['R', 'Data Analysis', 'Data Visualization', 'Statistical Analysis', 'ggplot2'],
    githubUrl: 'https://github.com/AlexanderFastner/Cyclystic_Case_Study',
    image: '/images/Cyclistic_logo.png',
    images: [
      '/images/Cyclistic_logo.png',
      '/images/cyclistic_compared_stacked_bar.png',
      '/images/cyclistic_comparative_daily_usage.png',
      '/images/cyclistic_ride_duration_distribution.png',
      '/images/cyclistic_monthly_usage.png',
    ],
  },
  {
    slug: 'dysregnetweb',
    title: 'DysRegNetWeb: Gene Regulation Network Analysis',
    description:
      'A web interface for DysRegNet that allows users to check for dysregulation of specific genes and compare to GTEx tissue data, displayed through an intuitive Neo4j graphical database.',
    longDescription:
      `Gene regulation is frequently altered in diseases in unique and patient-specific ways. Hence, personalised strategies have been proposed to infer patient-specific gene-regulatory networks. However, existing methods do not scale well because they often require recomputing the entire network per sample. Moreover, they do not account for clinically important confounding factors such as age, sex or treatment history. Finally, a user-friendly implementation for the analysis and interpretation of such networks is missing.

DysRegNetWeb:
We built a web interface for the pre-existing DysRegNet to allow users to easily check for dysregulation of specific genes and compare to GTEx tissue data. The constructed biological network information is contained in a neo4j graphical database and displayed in an intuitive way.

Use:
After selecting a cancer and target genes a network is shown with the levels of dysregulation shown as red percentages on the arrows connecting them. This can then be filtered and compared to the regulation in other cancer types. Additional parameter sliders are available for adjusting what to display.`,
    technologies: ['Python', 'Neo4j', 'Web Development', 'Bioinformatics', 'Network Analysis'],
    liveUrl: 'https://exbio.wzw.tum.de/dysregnet/',
    image: '/images/dysregnet_1.png',
    images: [
      '/images/dysregnet_1.png',
      '/images/dysregnet_2.png',
      '/images/dysregnet_3.png',
      '/images/dysregnet_4.png',
    ],
  },
  {
    slug: 'protein-embeddings-phylogenies',
    title: 'Protein Embeddings to Phylogenies',
    description:
      'Research project using protein sequence embeddings to build phylogenetic trees without multiple sequence alignments, reducing computational time while maintaining accuracy.',
    longDescription:
      `Phylogenetic trees are a vital tool in evolutionary biology used to visualize the relationships between different organisms based on their genetic sequences. The process of constructing phylogenetic trees involves comparing the genetic sequences of different organisms and identifying the similarities and differences between them. Traditionally, multiple sequence alignments (MSAs) are used to align the protein sequences to find conserved regions. The proteins are then clustered by these regions to build phylogenetic trees.

Although MSAs are currently the most reliable way to create trees, it is a very time consuming method. In order to reduce time, we used protein sequence embeddings to cluster them without doing MSAs first.

TLDR: We take a vector representation of a protein sequence, calculate how different it is from others, and build a tree with those relationships and evaluate.

We first try to establish that there is information contained in the dataset at all. Then we use dimensionality reduction to try and filter only those dimensions that contain the most information and hopefully reduce the noise. To this end we use a VAE (Variational Autoencoder). We tested various distance metrics, clustering algorithms and activation functions and hidden layer depths. In the end we find that the training needed is minimal and that further epochs end up making worse trees.

Result:
In the end we find that the protein embeddings alone with minimal training, even without additional dimensionality reduction were substantial support for building trees.`,
    technologies: ['Python', 'Machine Learning', 'VAE', 'Bioinformatics', 'Phylogenetics', 'Protein Analysis'],
    image: '/images/protein_embeddings_trees.png',
    images: [
      '/images/protein_embeddings_trees.png',
      '/images/protein_embeddings_general_structure.png',
      '/images/protein_embeddings_parameters.png',
      '/images/protein_embeddings_distances.png',
    ],
  },
  {
    slug: 'machine-strike',
    title: 'Machine Strike: Android Game',
    description:
      'A mobile version of the board strategy game Machine Strike, similar to chess, developed in Kotlin for Android as a personal project to practice app development skills.',
    longDescription:
      `Machine Strike is a board strategy game similar to chess. I took an Android development course and began designing a mobile version of this game. I continuously work on it in my free time getting it closer and closer to a playable version. This project allows me to practice my Android development skills and game design principles.`,
    technologies: ['Kotlin', 'Android', 'Game Development', 'Mobile Development'],
    githubUrl: 'https://github.com/AlexanderFastner/Machine_Strike',
  },
  {
    slug: 'arduino-volume-control',
    title: 'Arduino Physical Volume Control',
    description:
      'A custom physical volume control for PC built with Arduino, involving soldering and embedded programming to create a hardware interface for system audio control.',
    longDescription:
      `One aspect of programming that has always interested me, but never came up in my studies, was embedded Programming. I've recently enjoyed learning soldering and tinkering with an Arduino board to create a custom physical volume control for my PC. This project combines hardware and software development, allowing me to explore embedded systems and physical computing.`,
    technologies: ['Arduino', 'C++', 'Embedded Systems', 'Hardware', 'Electronics'],
  },
  {
    slug: 'raspberry-pi-web-hosting',
    title: 'Raspberry Pi Web Hosting',
    description:
      'Setting up a Raspberry Pi as a web host, learning about Linux OS, networking, security, and port forwarding to host personal projects and services.',
    longDescription:
      `The versatile Raspberry Pi has become another favorite platform for my experiments. Most recently I wanted to set it up as a web host for this site. Figuring out the ins and outs of the OS as well as setting up networking, security and port forwarding was quite the interesting challenge. From this I learned some valuable skills that I can continue to use for various projects in the future.`,
    technologies: ['Raspberry Pi', 'Linux', 'Networking', 'System Administration', 'Security'],
  },
  {
    slug: 'othello',
    title: 'Othello Game',
    description:
      'A recreation of the classic Othello (Reversi) board game, developed as a personal project to practice game development and algorithm implementation.',
    longDescription:
      `Othello, also known as Reversi, is a classic strategy board game. This project involves recreating the game with proper game logic, move validation, and potentially AI opponents. The game features the classic 8x8 board where players take turns placing discs and flipping opponent pieces. This project allows me to practice game development, algorithm design, and user interface implementation.`,
    technologies: ['Game Development', 'Algorithms', 'UI/UX'],
  },
  {
    slug: 'spongedb-v2',
    title: 'SpongeDB v2',
    description:
      'An updated version of a database project, building upon previous work to create an improved data management and query system.',
    longDescription:
      `SpongeDB v2 is an updated version of a database project. This project involves building and improving upon database functionality, query systems, and data management capabilities. The version 2 indicates significant improvements and new features over the original implementation.`,
    technologies: ['Database', 'Data Management', 'Backend Development'],
  },
  {
    slug: 'neon-escape',
    title: 'Neon Escape',
    description:
      'A Flutter-based mobile game inspired by Two Cars, featuring a neon-themed endless runner where players control two cars simultaneously to avoid obstacles and collect power-ups.',
    longDescription:
      `Neon Escape is a cross-platform mobile game built with Flutter, inspired by the classic Two Cars game. The game features a sleek neon-themed aesthetic with smooth gameplay mechanics.

Gameplay:
Players control two cars simultaneously - one on the left side and one on the right side of the screen. The objective is to navigate through obstacles by switching lanes, collecting power-ups (stars), and achieving the highest score possible. The game includes multiple difficulty levels and tracks high scores locally.

Features:
- Dual car control system with lane switching
- Multiple difficulty levels
- Power-up collection system with immunity effects
- High score tracking with persistent storage
- Settings management with theme support
- Cross-platform support (Android, iOS, Web, Windows, Linux, macOS)
- Firebase Hosting deployment for web version

Technical Implementation:
The game is built using Flutter and Dart, with a clean architecture separating screens, services, and widgets. It uses SharedPreferences for local data persistence, includes a theme service for customizable appearance, and features smooth animations using Flutter's animation controllers. The project structure follows Flutter best practices with organized screens, services, and reusable widgets.

The game can be deployed to multiple platforms, with Firebase Hosting configured for web deployment.`,
    technologies: ['Flutter', 'Dart', 'Mobile Development', 'Game Development', 'Firebase', 'Cross-platform'],
    image: '/images/neon_escape_icon.png',
  },
  {
    slug: '3d-printing',
    title: '3D Printing Projects',
    description:
      'A collection of 3D printing projects showcasing various designs, from functional parts to creative models, demonstrating skills in CAD design and additive manufacturing.',
    longDescription:
      `This collection features various 3D printing projects I've worked on, ranging from functional parts to creative designs. Each project demonstrates different aspects of 3D printing, including CAD design, material selection, and post-processing techniques.

Project 1:
[Placeholder description for first 3D printing project]

Project 2:
[Placeholder description for second 3D printing project]

Project 3:
[Placeholder description for third 3D printing project]

Project 4:
[Placeholder description for fourth 3D printing project]`,
    technologies: ['3D Printing', 'CAD Design', 'Additive Manufacturing', 'Product Design'],
    image: '/images/3d_printing_placeholder.png',
    images: [
      '/images/3d_printing_placeholder.png',
      '/images/3d_printing_project1_placeholder.png',
      '/images/3d_printing_project2_placeholder.png',
      '/images/3d_printing_project3_placeholder.png',
      '/images/3d_printing_project4_placeholder.png',
    ],
  },
];

