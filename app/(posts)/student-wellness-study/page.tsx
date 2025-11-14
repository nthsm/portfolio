import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Student Wellness Report — Nathan Smith',
  },
  description: 'Analyzing student survey data on sleep and stress.',
}

export default function StudentWellnessPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader
        speedFactor={0.4}
        className="project-color-green"
      >
        <h1>Student Wellness Report</h1>
        <p className="subtitle">
          Analyzing student survey data on sleep and stress.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h1>Project Overview</h1>
            <p>
              This project originated in an undergraduate Data Science course
              and served as my first deep dive into the full data analysis
              lifecycle. The goal was to analyze survey data collected from
              ~90 FSU students to find potential correlations between sleep
              habits and self-reported stress levels during midterms.
            </p>
            <p>
              This project is a showcase of my foundational data analysis
              skills, including data cleaning, preparation, and visualization.
              More importantly, it's a transparent look at the realities of
              working with imperfect data and drawing honest conclusions.
            </p>

            <h2>My Role & Methods</h2>
            <p>
              As the Data Analyst for this project, I was responsible for the
              entire process: defining the research question, cleaning and
              preparing the raw data, analyzing it for correlations, and
              visualizing the findings.
            </p>
            <p>
              The methods were chosen to suit a purely quantitative analysis of
              pre-existing survey data.
            </p>
            <ul>
              <li>
                <strong>Data Cleaning (Excel):</strong> This was the most
                critical method. The raw Qualtrics data was filled with
                inconsistent text, duplicates, and irrelevant entries. Excel
                was the ideal tool for meticulous, cell-by-cell
                standardization.
              </li>
              <li>
                <strong>Data Analysis (Excel):</strong> Pivot Tables were used
                as the primary analysis tool to quickly segment the data
                (Strategy vs. No Strategy) and compare descriptive statistics
                across multiple metrics.
              </li>
              <li>
                <strong>Data Visualization (Looker Studio):</strong> While
                Excel can create charts, Looker Studio was chosen to build a
                more dynamic, professional, and shareable dashboard to
                present the final findings.
              </li>
            </ul>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                My Hypothesis: "Do students with a defined sleep strategy
                report significantly different sleep duration, stress levels,
                and daily productivity indicators compared to students without a
                strategy?"
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Methodology</h2>
            <p>
              My approach followed a standard data analysis process: Gather,
              Question, Identify, Model, and Conclude.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project4-process.png"
                alt="Data Analysis Process Flowchart"
              />
              <figcaption className="mt-1 mb-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
                General process flow followed for this data analysis project.
              </figcaption>
            </figure>

            <h3>Data Cleaning & Preparation</h3>
            <p>
              Preparing the raw survey data for analysis was crucial. This
              involved several steps using Microsoft Excel:
            </p>
            <ul>
              <li>
                <strong>Standardization:</strong> Used "Find and Replace" and{' '}
                <code>IF</code> functions to convert text-based responses (e.g.,
                "Like (Thumbs up)", "no water") into numerical or consistent
                categorical values (e.g., 1, 0).
              </li>
              <li>
                <strong>Duplicate Removal:</strong> Used the <code>EXACT</code>{' '}
                function and conditional formatting to identify and remove
                duplicate submissions.
              </li>
              <li>
                <strong>Filtering:</strong> Removed irrelevant data, such as
                entries outside the collection window and participants with
                fewer than 3 daily submissions, to ensure a baseline of data
                quality.
              </li>
              <li>
                <strong>Segmentation:</strong> Created the two primary analysis
                groups ("Sleep Strategy" vs. "No Sleep Strategy") based on
                closing survey responses.
              </li>
            </ul>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project4-datachanges.png"
                alt="Data Standardization Examples"
              />
              <figcaption className="mt-1 mb-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
                Examples of text responses standardized into numerical or
                simplified categorical values.
              </figcaption>
            </figure>

            <h3>Analysis & Visualization</h3>
            <p>
              I used Excel Pivot Tables for initial comparative analysis and
              Looker Studio for the final dashboard visualizations. The
              analysis focused on comparing descriptive statistics for the two
              core segments (Sleep Strategy vs. No Strategy) across key daily
              metrics.
            </p>

            <h2>Key Findings & Visualizations</h2>
            <p>
              The analysis revealed some interesting patterns, but ultimately
              did not support my initial hypothesis with strong, conclusive
              evidence.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project4-lookerstudio.png"
                alt="Looker Studio Dashboard showing Wellness Study Visualizations"
              />
              <figcaption className="mt-1 mb-4 text-center text-sm text-zinc-600 dark:text-zinc-400">
                Dashboard summarizing key comparisons.
              </figcaption>
            </figure>
            <ol>
              <li>
                <strong>Low Adoption:</strong> Only <strong>32%</strong> of
                students reported using a consistent sleep strategy.
              </li>
              <li>
                <strong>Minor Stress Level Differences:</strong> Students with a
                sleep strategy reported *slightly* lower average stress (5.21
                vs. 5.31), but the difference is not statistically
                significant.
              </li>
              <li>
                <strong>Slightly Higher Performance:</strong> Similarly,
                students with a strategy self-reported *slightly* higher
                daily performance (3.44 vs. 3.30).
              </li>
            </ol>

            <h2>Conclusion & Key Limitations</h2>
            <p>
              The data suggests a weak positive correlation between having a
              sleep strategy and reporting lower stress or higher performance.
              However, the findings were not conclusive.
            </p>
            <p>
              This project's most valuable outcome was not the finding itself,
              but the lesson in data integrity. The primary limitation, which
              I identified during reflection, was the reliance on{' '}
              <strong>self-reported data</strong>.
            </p>
            <ul>
              <li>
                <strong>Subjectivity:</strong> "Stress level" is deeply
                subjective. A "5" for one student is not the same as a "5" for
                another. This introduces significant noise into the data.
              </li>
              <li>
                <strong>Recall Bias:</strong> The data was collected during
                midterms, a period of high stress for everyone, which likely
                skewed the results and made it difficult to isolate the
                effect of a sleep strategy.
              </li>
            </ul>

            <h2>Reflection</h2>
            <p>
              As my first formal data analysis project, this was an
              irreplaceable learning experience. It taught me that the data
              cleaning phase is arguably the most important, as "garbage in,
              garbage out."
            </p>
            <p>
              Most importantly, it taught me to be critical of my data sources
              and to acknowledge when findings are inconclusive. Recognizing
              that my hypothesis was not strongly supported due to flawed data
              collection (i.e., relying on self-reported stress) was a key
              insight. A stronger future study would need to incorporate more
              objective measures of stress or performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}