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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Bioinformatics Master (TUM/LMU + Helmholtz Institute)
            </h2>
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
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Bioinformatics Bachelor (TUM/LMU)
            </h2>
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
        </div>
      </section>
    </div>
  );
}


