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
      <ParallaxHeader speedFactor={0.4} className="project-color-teal">
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
              I saw the potential of Sleeper years ago. As a fantasy football
              commissioner for over a decade, I’ve always taken pleasure in
              keeping the league fresh—changing rules, tweaking scoring, and
              keeping engagement high. In 2024, after two years of advocating
              for it, I finally migrated my league of 10+ years to Sleeper.
            </p>
            <p>
              However, this transition highlighted a key UX challenge: balancing
              Sleeper's "digital playground" philosophy with the utilitarian
              needs of die-hard sports fans.
            </p>
            <p>
              This comparative study focuses on the mobile app experience,
              rigorously benchmarking the performance of these social
              features against key competitors like ESPN Fantasy. The goal is to
              determine if Sleeper's core differentiator—connecting friends over
              sports—is truly enhancing engagement metrics or
              contributing to a higher cognitive load for users trying to
              manage their teams.
            </p>

            <h2>Research Goals</h2>
            <p>
              The primary goal is to find the optimal balance between social
              "delight" and core "utility" in the mobile experience.
            </p>
            <ul>
              <li>
                Measure Social Accessibility (Discoverability):{' '}
                Compare the task success rate and time-on-task for users trying
                to locate and use social features (e.g., in-chat reactions,
                trash-talking).
              </li>
              <li>
                Evaluate Cognitive Load: Assess whether
                non-utility elements (mascots, complex UI layers) slow down core
                tasks like setting a lineup or adding a free agent.
              </li>
              <li>
                Benchmark Competition: Provide a quantitative
                and qualitative comparison against the traditional,
                utility-focused ESPN Fantasy app.
              </li>
            </ul>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                Does Sleeper's focus on gamification and social features result
                in a measurably faster and more delightful mobile experience
                than its competitors?
              </h2>
              <div className="hmw-line"></div>
            </div>

            <h2>Methodology</h2>
            <p>
              Method: Moderated Remote Comparative Usability
              Testing (N=7).
            </p>
            <p>
              The study utilizes a "Think Aloud" protocol to uncover user
              expectations, confusion, and delight while performing high-value
              tasks on both the Sleeper and ESPN apps.
            </p>

            <h3>Key Scenarios & Metrics</h3>
            <ol>
              <li>
                Utility Task: Free Agent Acquisition.
                <ul>
                  <li>
                    Metric: Time-on-Task, Task Success Rate.
                  </li>
                </ul>
              </li>
              <li>
                Social Task: Public Interaction/Roast.
                <ul>
                  <li>
                    Metric: Task Success Rate (Ability to
                    locate feature), Qualitative Satisfaction (Delight Factor).
                  </li>
                </ul>
              </li>
            </ol>

            <h3>Alignment to Sleeper UXR</h3>
            <p>This study specifically highlights the required skills:</p>
            <ul>
              <li>
                Competitive Benchmarking (Full comparative
                study).
              </li>
              <li>
                Usability Tests (Moderated remote mobile
                testing).
              </li>
              <li>
                Synthesize Findings (Translating raw observation into strategy).
              </li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Tools & Modern UXR Workflow</h2>
            <p>
              This project leverages a hybrid approach to ensure rigor and
              efficiency in a fast-paced environment:
            </p>
            <ul>
              <li>
                Remote Testing Tools: Zoom for session
                recording and screen sharing, capturing authentic mobile usage.
              </li>
              <li>
                AI for Synthesis: Leveraging LLMs to cluster
                raw transcript data and accelerate thematic analysis, allowing
                more time for deep insight generation.
              </li>
              <li>
                Figma: Used for creating visual artifacts,
                journey maps, and flow diagrams based on testing observations.
              </li>
            </ul>

            <h2>Next Steps</h2>
            <p>
              I am currently in the recruitment and scheduling phase of the
              study, with testing set to conclude shortly. The final
              deliverables will include a comprehensive presentation slide deck
              and a detailed findings report.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}