import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Education | Portfolio",
  description: "Educational background and academic research",
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">
          Education
        </h1>

        <div className="space-y-10 text-lg leading-8 text-gray-600 dark:text-gray-400">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Background
            </h2>
            <p className="mb-4">
              I am a Bay Area native who pursued higher education in Germany, by
              leveraging my dual citizenship and German language proficiency. In
              Munich I began on my Bachelors in Bioinformatics in 2022 in a
              program shared between the two large universities in Munich.
            </p>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src="/images/TUM_Logo_PNG.png"
                  alt="TUM Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <a
                  href="https://www.tum.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-colors"
                >
                  Technical University of Munich
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src="/images/LMU_Logo_PNG.png"
                  alt="LMU Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <a
                  href="https://www.lmu.de/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-semibold transition-colors"
                >
                  Ludwig-Maximilians-Universitaet
                </a>
              </div>
            </div>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Bioinformatics Master (TUM/LMU + Helmholtz Institute)
              </h2>
              <Link
                href="/projects/masters-thesis"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
              >
                View Project →
              </Link>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Bioinformatic Analysis of the role of MAFA in Stem Cell-Derived
              Human Pancreatic Islets
            </h3>
            <p>
              In this research collaboration with (Theis Lab Helmholtz and
              Hebrok Lab TUM), I conducted a bioinformatics analysis focusing on
              Type 1 diabetes and stem cell-derived β cell maturation. Using
              Bulk RNA sequencing data from the Transcription Factor MAFA and
              its naturally occurring mutant MAFAS64F cell lines, I employed
              various bioinformatics methods to identify differentially
              expressed genes, as well as Transcription Factors and Pathways of
              interest. Despite the limitations of the available bulkRNA data,
              my work established a solid foundation for future investigations
              into MAFA&apos;s role in β cell maturation and insulin
              production, contributing to the broader goal of developing stable,
              functional stem cell-derived β cells for potential Type 1 diabetes
              treatment. In the future my findings will serve as a comparison
              point for a single-cell RNAseq analysis.
            </p>
            <p className="mt-4">
              I completed my M.Sc. in 2024 and moved back to the United States
              to start my career. If you are interested in my work, you can find
              more information on my LinkedIn.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                Bioinformatics Bachelor (TUM/LMU)
              </h2>
              <Link
                href="/projects/bachelors-thesis"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors"
              >
                View Project →
              </Link>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Search for evidence of recombination in Alternaria solani using
              genomic tools
            </h3>
            <p>
              The fungal pathogen <em>Alternaria solani</em> is known to cause
              early blight in tomatoes and potatoes and causes millions in
              economic losses every year. In my thesis I use genomic tools
              (LDHelmet, clonalframeML) to analyze data from 48 isolates and
              search for evidence that the genomic variation we see across
              isolates is caused by an unknown sexual reproduction phase as
              opposed to asexual reproduction. In addition to the two above
              mentioned tools the data was cleaned, and pre-processed in bash.
              Then the resulting output was visualized in R. I went on to
              continue this work as research assistant for Prof. Stam at the
              Phytopathology chair at TUM and also later at Kiel University.
            </p>
          </section>

          <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Publications
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-800 p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Presence–absence variation of NLRs in Solanum chilense populations is shaped by demography and environment
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Understanding the evolution of pathogen resistance genes (nucleotide-binding site-leucine-rich repeats, NLRs) within a species requires a comprehensive examination of factors that affect gene loss and gain.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  We present a new reference genome of Solanum chilense, which leads to an increased number and more accurate annotation of NLRs. Using a target capture approach, we quantify the presence–absence variation (PAV) of NLR loci across 20 populations from different habitats. We build a rigorous pipeline to validate the identification of PAV of NLRs and then show that PAV is larger within populations than between populations, suggesting that maintenance of NLR diversity is linked to population dynamics.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  The amount of PAV appears not to be correlated with the NLR presence in gene clusters in the genome, but rather with the past demographic history of the species, with loss of NLRs in diverging (smaller) populations at the distribution edges. Finally, using a redundancy analysis, we find limited evidence of PAV being linked to environmental gradients.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Our results suggest that random processes (genetic drift and demography) and weak positive selection for local adaptation shape the evolution of NLRs at the single nucleotide polymorphism and PAV levels in an outcrossing plant with high nucleotide diversity.
                </p>
                <a
                  href="https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.20293"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm transition-colors inline-flex items-center gap-1"
                >
                  View Publication
                  <svg
                    className="h-4 w-4"
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
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}


