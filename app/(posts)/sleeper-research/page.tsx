import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Sleeper Mobile Usability — Nathan Smith',
  },
  description:
    'Comparative usability study benchmarking the social features of fantasy sports applications.',
}

export default function SleeperResearchPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader speedFactor={0.4} className="project-color-navy">
        <h1>Sleeper Mobile Usability</h1>
        <p className="subtitle">
          Gamification vs. Utility: Benchmarking the "Social Glue" of fantasy
          sports apps.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Project Overview & Motivation</h2>
            <p>
              Sleeper differentiates itself in the crowded fantasy sports market by positioning its app as a "digital playground" to <strong>connect friends over sports</strong>. This strategy relies heavily on gamification and integrated social features (chat, reactions, Minis).
            </p>
            <p>
              This comparative study focuses on the <strong>mobile app experience</strong>, rigorously benchmarking the performance of these social features against key competitors like ESPN Fantasy. The motivation is to determine if Sleeper's core differentiator is truly enhancing user engagement or contributing to a higher cognitive load. This project directly addresses the need for **competitive benchmarking** and <strong>mobile usability expertise</strong> requested by the Sleeper User Research Intern job description.
            </p>

            <h2>Research Goals</h2>
            <p>
              The primary goal is to find the optimal balance between social "delight" and core "utility" in the mobile experience.
            </p>
            <ul>
              <li>
                <strong>Measure Social Accessibility (Discoverability):</strong> Compare the task success rate and time-on-task for users trying to locate and use social features (e.g., in-chat reactions, trash-talking).
              </li>
              <li>
                <strong>Evaluate Cognitive Load:</strong> Assess whether non-utility elements (mascots, complex UI layers) slow down core tasks like setting a lineup or adding a free agent.
              </li>
              <li>
                <strong>Benchmark Competition:</strong> Provide a quantitative and qualitative comparison against the traditional, utility-focused ESPN Fantasy app.
              </li>
            </ul>
            
             <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                Does Sleeper's focus on gamification and social features result in a measurably faster and more delightful mobile experience than its competitors?
              </h2>
              <div className="hmw-line"></div>
            </div>

            <h2>Methodology</h2>
            <p>
              <strong>Method:</strong> Moderated Remote Comparative Usability Testing (N=7).
            </p>
            <p>
              The study utilizes a "Think Aloud" protocol to uncover user expectations, confusion, and delight while performing high-value tasks on both the Sleeper and ESPN apps.
            </p>
            
            <h3>Key Scenarios & Metrics</h3>
            <ol>
                <li><strong>Utility Task: Free Agent Acquisition.</strong>
                    <ul>
                        <li>**Metric:** Time-on-Task, Task Success Rate.</li>
                    </ul>
                </li>
                <li><strong>Social Task: Public Interaction/Roast.</strong>
                    <ul>
                        <li>**Metric:** Task Success Rate (Ability to locate feature), Qualitative Satisfaction (Delight Factor).</li>
                    </ul>
                </li>
            </ol>
            
            <h3>Alignment to Sleeper JD</h3>
            <p>This study specifically highlights the required UXR skills:</p>
            <ul>
                <li>**Competitive Benchmarking** (Full comparative study).</li>
                <li>**Usability Tests** (Moderated remote mobile testing).</li>
                <li>**Synthesize Findings** (The goal of the final report).</li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Tools & Modern UXR Workflow</h2>
            <p>
               This project leverages a hybrid approach to ensure rigor and efficiency:
            </p>
             <ul>
                <li>**Remote Testing Tools:** Zoom for session recording and screen sharing, capturing authentic mobile usage.</li>
                <li>**AI for Synthesis:** Utilizing AI transcription and initial clustering of qualitative data to accelerate the thematic analysis process, allowing more time for deep insight generation.</li>
                <li>**Figma:** Used for creating visual artifacts, journey maps, and flow diagrams based on testing observations.</li>
            </ul>
            
            <h2>Next Steps</h2>
            <p>
              I am currently in the recruitment and scheduling phase of the study, with testing set to conclude shortly to meet the course deadline. The final deliverables will include a comprehensive presentation slide deck and a detailed findings report.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}