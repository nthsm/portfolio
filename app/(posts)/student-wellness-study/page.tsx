import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "Student Wellness Report — Nathan Smith"
  },
  description: "Analyzing student survey data on sleep and stress.",
}

export default function StudentWellnessPage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/project4-bg.png')" }}
          className="project-color-green"
        >
            <h1>Student Wellness Report</h1>
            <p className="subtitle">Analyzing student survey data on sleep and stress.</p>
        </ParallaxHeader>

        <div className="imon-content-wrapper">
            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <p>This project explored potential relationships between FSU students' sleep habits, particularly the use of a sleep strategy, and their self-reported stress levels and daily performance during a two-week period coinciding with midterms.</p>
                    
                    <h2>Background & Objective</h2>
                    <p>Originating from a Data Science Activity (DSA) course project during my time as an undergraduate student in the Management Information Systems program at FSU, the primary goal set by my professor was to analyze survey data collected from every FSU student taking the course, which was around 90 students total between all classes.</p>
                    <p>The specific objective I focused on was to identify potential correlations between having a defined sleep strategy and outcomes like stress levels and daily activities, hypothesizing that students employing a consistent sleep strategy might report lower stress and higher performance.</p>
                    
                    <h2>Research Question</h2>
                    <figure className="flex flex-col items-center my-4">
                      <img src="/project4-business-question.png" alt="Research Question."/>
                    </figure>
                    <p>This question evolved after initial data exploration in Excel.</p>
                    <p>My hypothesis, based on personal experience, was that students with a plan (like a sleep strategy) might exhibit lower stress and higher performance metrics, aligning with the idea that consistency and planning often lead to better outcomes.</p>
                    
                    <h2>Methodology</h2>
                    <p>My approach followed a standard data analysis process:</p>
                    <figure className="flex flex-col items-center my-4">
                      <img src="/project4-process.png" alt="Data Analysis Process Flowchart"/>
                      <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">General process flow followed for this data analysis project.</figcaption>
                    </figure>

                    <h3>Data Source & Collection</h3>
                    <p>Data was gathered over two weeks (October 3rd - 16th, 2023) via Qualtrics surveys administered to FSU students in the course:</p>
                    <ol>
                        <li><strong>Baseline Survey (Oct 3rd):</strong> Captured initial sleep strategy use, stress levels, and various preference data points intended for segmentation.</li>
                        <figure className="flex flex-col items-center my-4">
                              <img src="/project4-baseline.png" alt="Baseline Survey Attributes"/>
                              <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">Attributes collected in the initial baseline survey.</figcaption>
                            </figure>
                        <li><strong>Daily Survey (Oct 3rd - 16th, Weekdays):</strong> Logged daily metrics including stress, sleep hours, water intake, self-rated performance, exercise, social interactions, and study hours.</li>
                        <figure className="flex flex-col items-center my-4">
                              <img src="/project4-daily.png" alt="Daily Survey Attributes"/>
                              <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">Attributes collected in the daily check-in survey.</figcaption>
                            </figure>
                        <li><strong>Closing Survey (Oct 16th):</strong> Re-captured baseline questions to track changes and added reflection questions.</li>
                        <figure className="flex flex-col items-center my-4">
                              <img src="/project4-closeout.png" alt="Closeout Survey Attributes"/>
                              <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">Attributes collected in the final closing survey.</figcaption>
                            </figure>
                    </ol>

                    <h3>Data Cleaning & Preparation</h3>
                    <p>Preparing the raw survey data for analysis was crucial and involved several steps using Microsoft Excel:</p>
                    <ul>
                        <li><strong>Dataset Selection:</strong> Decided to primarily use the combined Closing and Daily datasets, omitting the Baseline data due to a significantly higher response rate in the Closing survey for baseline-type questions.</li>
                        <li><strong>Column Renaming:</strong> Standardized and shortened column names for easier reference.</li>
                        <li><strong>Filtering:</strong> Applied filters to columns for easier sorting and analysis.</li>
                        <li><strong>Duplicate Removal:</strong> Used the <code>EXACT</code> function with conditional formatting to identify and remove duplicate submissions.</li>
                        <li><strong>Segmentation:</strong> Used the <code>IF</code> function to identify participants based on their reported use ('Yes'/'No') of a sleep strategy, creating lists for filtering pivot tables.</li>
                        <li><strong>Timestamp Splitting:</strong> Utilized the "Text to Columns" feature to separate date and time data.</li>
                        <li><strong>Value Standardization:</strong> Employed "Find and Replace" to convert text-based responses into numerical or consistent categorical values (e.g., water bottle counts, emoticons, Yes/No).</li>
                        <figure className="flex flex-col items-center my-4">
                              <img src="/project4-datachanges.png" alt="Data Standardization Examples"/>
                              <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">Examples of text responses standardized into numerical or simplified categorical values.</figcaption>
                            </figure>
                        <li><strong>Outlier/Irrelevant Data Removal:</strong>
                            <ul>
                                <li>Removed participants with fewer than 3 daily submissions.</li>
                                <li>Filtered out any entries recorded outside the official Oct 3-16 data collection window.</li>
                                <li>Cleaned free-text numeric fields ('People interacted with', 'Hours studied') by removing non-numeric characters and addressing non-answers.</li>
                            </ul>
                        </li>
                        <li><strong>Summary of Changes:</strong> Ultimately, 406 rows were removed, 12 key columns were selected for analysis, and data quality issues (like potential retroactive entries and inconsistent free-text inputs) were noted.</li>
                    </ul>
                    
                    <h3>Analysis Approach & Tools</h3>
                    <ul>
                        <li><strong>Primary Tool:</strong> <strong>Microsoft Excel</strong> was used for data cleaning, preparation, pivot tables, and initial analysis.</li>
                        <li><strong>Visualization Tool:</strong> <strong>Looker Studio</strong> was used for creating the final dashboard visualizations.</li>
                        <li><strong>Core Technique:</strong> The analysis focused on <strong>comparative descriptive statistics</strong>.</li>
                        <li>The central approach involved segmenting the student participants into two groups based on their response to the "Sleep Strategy" question (Yes/No) from the closing survey.</li>
                        <li><strong>Metrics Compared:</strong> To answer the research question, key daily metrics such as <strong>hours of sleep</strong>, <strong>exercise frequency</strong>, <strong>study hours</strong>, <strong>social interactions</strong>, <strong>stress level</strong>, and self-rated <strong>performance</strong> were compared between these two groups, often aggregated by day of the week, to identify potential differences or patterns.</li>
                    </ul>
                    
                    <h2>Key Findings & Visualizations</h2>
                    <p>The comparative analysis highlighted consistent, though often modest, differences between students who reported using a sleep strategy versus those who did not:</p>
                    <figure className="flex flex-col items-center my-4">
                      <img src="/project4-lookerstudio.png" alt="Looker Studio Dashboard showing Wellness Study Visualizations"/>
                      <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">Dashboard summarizing key comparisons between students with and without a sleep strategy.</figcaption>
                    </figure>
                    <ol>
                        <li><strong>Low Adoption Rate:</strong> Only <strong>32%</strong> of surveyed students reported using a consistent sleep strategy.</li>
                        <li><strong>Stress Level Differences:</strong> Students <em>with</em> a sleep strategy reported slightly lower average stress levels overall (Avg: 5.21 vs 5.31) and on most individual days compared to those without.</li>
                        <li><strong>Daily Activity Levels:</strong> Across measured daily metrics (social interactions, hours slept, hours studied, exercise frequency), students <em>with</em> a sleep strategy demonstrated slightly higher average activity levels.</li>
                        <li><strong>Self-Perceived Performance:</strong> Students <em>with</em> a sleep strategy consistently rated their daily performance higher on average (Avg: 3.44 vs 3.30).</li>
                    </ol>
                    
                    <h2>Conclusion</h2>
                    <p>The data suggests a potential positive correlation between employing a sleep strategy and student wellness indicators like lower stress and higher self-perceived performance, along with increased daily activity levels within this cohort.</p>
                    <p>While the observed differences were modest, their consistency implies potential benefits of intentional sleep planning, supporting the initial hypothesis.</p>
                    
                    <h2>Limitations</h2>
                    <ul>
                        <li>Reliance on self-reported data carries inherent subjectivity and potential recall bias.</li>
                        <li>Data quality issues, including possible retroactive survey completion, could affect accuracy.</li>
                        <li>The two-week study period coincided with midterms, likely increasing stress levels for all students.</li>
                        <li>The findings indicate correlation, not causation; numerous other factors influence student stress and performance.</li>
                    </ul>
                    
                    <h2>Potential Application</h2>
                    <p>While primarily a descriptive analysis, these findings hold potential for prescriptive applications aimed at improving student well-being at FSU.</p>
                    <p>The identified correlations, though modest, suggest that promoting awareness around the benefits of consistent sleep schedules could be valuable.</p>
                    <p>Insights from this study could be condensed and shared with the FSU student body, perhaps through targeted emails or wellness program communications, to encourage students to consider implementing their own sleep strategies as a tool for managing stress and potentially enhancing daily performance. Similar to how FSU ITS regularly sends out emails about tech safety.</p>
                    
                    <h2>Reflection</h2>
                    <p>This project provided valuable hands-on experience in the end-to-end process of cleaning, analyzing, and visualizing real-world survey data.</p>
                    <p>It underscored the challenges of imperfect datasets and the importance of documenting the methodology.</p>
                    <p>Experimenting with both Excel and Looker Studio offered insights into different visualization tools.</p>
                    <p>The findings, though limited, suggest promoting consistent sleep habits could be a beneficial avenue for student wellness initiatives.</p>
                    <p>Future research could explore these correlations over longer periods or use qualitative methods to understand the <em>types</em> of strategies employed.</p>
                </div>
            </div>
        </div>
    </div>
  )
}