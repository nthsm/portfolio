import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Sleeper Mobile Usability — Nathan Smith',
  },
  description:
    'Benchmarking the impact of "Gamification" on core utility: A mixed-methods study.',
}

export default function SleeperResearchPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader speedFactor={0.4} className="project-color-teal">
        <h1>Sleeper Mobile Usability</h1>
        <p className="subtitle">
          Benchmarking the impact of "Gamification" on core utility: A mixed-methods study.
        </p>
      </ParallaxHeader>

<div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Executive Summary</h2>
            <p>
              Sleeper has disrupted the fantasy sports market by positioning itself as a social "digital playground." However, recent aggressive monetization strategies—specifically the integration of "Sleeper Picks" (Daily Fantasy Sports/Gambling)—have introduced significant UI clutter.
            </p>
            <p>
              This study investigates the tension between Sleeper's <strong>Business Goal</strong> (Revenue via Gambling) and its <strong>User Experience Goal</strong> (Social Connection & Utility). Using a mixed-methods approach, I benchmarked the Sleeper mobile experience against competitors to determine if feature bloat is driving user churn.
            </p>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                "Does the aggressive integration of gambling features create enough cognitive load to degrade the core social experience for fantasy users?"
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 1: Discovery & Definition</h2>
            <p>
              Before conducting primary research, I performed a heuristic evaluation and social listening audit to establish "probable cause" for the study.
            </p>
            
            <h3>Heuristic Evaluation</h3>
            <p>
              I audited the app against Nielsen's Usability Heuristics, identifying critical violations related to "User Control" and "Aesthetic Integrity."
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/placeholder.png"
                alt="Heuristic Evaluation: Annotated screenshots showing the Picks tab clutter and buried settings."
              />
              <figcaption>
                Violation of Heuristic #8: Irrelevant betting information competes with fantasy utility data.
              </figcaption>
            </figure>

            <h3>Market Signals (Social Listening)</h3>
            <p>
              I utilized Reddit to gauge sentiment, finding a consistent pattern of "power users" complaining about performance latency and navigation issues.
            </p>
            <ul>
              <li>
                <em>"I hate having to scroll past the betting odds just to set my lineup."</em> — r/SleeperApp User
              </li>
              <li>
                <em>"The app is getting so bloated, I miss the old simple version."</em> — r/FantasyFootball User
              </li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 2: Methodology & AI Workflow</h2>
            <p>
              To validate these qualitative signals at scale, I designed a study that leveraged AI tools to accelerate synthesis.
            </p>
            <ul>
              <li>
                <strong>Evaluative Research:</strong> Moderated Remote Usability Testing (N=6) using Zoom to observe "Time-on-Task" and navigation errors.
              </li>
              <li>
                <strong>Quantitative Validation:</strong> Programmatic Sentiment Analysis using the <strong>Reddit API</strong> (Python/PRAW) to scrape and classify 500+ user comments.
              </li>
              <li>
                <strong>AI Synthesis:</strong> Utilized <strong>Gemini 3</strong> to process raw transcripts and categorize feedback into "Usability Friction" vs. "Sentiment/Preference" clusters.
              </li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 3: Qualitative Findings</h2>
            <p>
              The usability sessions revealed that while users *could* complete tasks, the "Picks" feature acted as a significant distraction.
            </p>
            
            <h3>The "Dark Pattern" Friction</h3>
            <p>
              When asked to "Hide the Picks tab," <strong>4 out of 6 users failed</strong> to find the setting within 60 seconds. The setting is buried under "Responsible Gaming," a location users did not intuitively associate with UI customization.
            </p>

            <h3>Banner Blindness vs. Cognitive Load</h3>
            <p>
              Users exhibited "Resigned Indifference." When asked to recall the betting offers they had just seen, 5/6 users could not, indicating severe banner blindness. However, they consistently rated the "clutter" of the app as a negative factor compared to ESPN.
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 4: Quantitative Validation</h2>
            <p>
              To ensure my N=6 sample wasn't an outlier, I validated the findings with a broader dataset scraped from r/SleeperApp.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/placeholder.png"
                alt="Bar Chart: Sentiment Analysis of 'Picks' feature (Negative vs Positive)."
              />
              <figcaption>
                Sentiment analysis of 500+ comments revealed an 82% negative sentiment regarding the Picks tab integration.
              </figcaption>
            </figure>
            <p>
              The data confirmed that "Feature Bloat" is the primary driver of negative sentiment for the app's core user base, validating the qualitative findings.
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Strategic Recommendations</h2>
            <p>
              Sleeper cannot be the "Super App" of sports if the foundation (Fantasy Football) cracks under the weight of the extensions (Betting).
            </p>
            <ol>
              <li>
                <strong>Implement "Context-Aware" Navigation:</strong> Separate the "Global" app state (Betting/News) from the "Local" league state. When a user is inside a League, the bottom navigation should be exclusively League-focused.
              </li>
              <li>
                <strong>Remove Dark Patterns:</strong> Move the "Hide Picks" toggle to the main "Appearance" settings. Respecting user intent builds trust and ensures that engagement metrics for Picks are genuine, not accidental misclicks.
              </li>
              <li>
                <strong>Optimized "Lite" Mode:</strong> Create a preset for "Commissioners" that automatically disables animations and overlays to prioritize speed and utility on gameday.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}