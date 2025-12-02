import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Sleeper Mobile Usability — Nathan Smith',
  },
  description:
    'Benchmarking the impact of "bloat" on core utility: A mixed-methods study.',
}

export default function SleeperResearchPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader speedFactor={0.4} className="project-color-teal">
        <h1>Sleeper Mobile Usability</h1>
        <p className="subtitle">
          Benchmarking the impact of "bloat" on core utility: A mixed-methods study.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Project Overview</h2>
            <p>
              Sleeper differentiates itself by positioning its app as a "digital
              playground" to connect friends over sports. This
              strategy relies heavily on integrated social features. However,
              recent aggressive expansion into sport betting, news posting, and more has introduced significant interface complexity. 
            </p>
            <p>
              While it may be profitable in the short term, this approach risks alienating core users who prioritize utility and ease of use.
            </p>
            <p>
              Is this business model sustainable without compromising the user experience? Are these users against the new features a majority or a niche segment?
            </p>
            <p>
              This study aims to benchmark the impact of these features on the app's core utility through a mixed-methods usability evaluation.
            </p>

            <h3>My Background In Fantasy Sports</h3>
            <p>
              I've played fantasy football for over a decade and have been the
              commissioner of my childhood league for almost just as long. Two
              seasons ago, I convinced my league to migrate from ESPN to Sleeper
              because I wanted to test out specific features that ESPN lacked.
            </p>
            <p>
              Sleeper felt new and exciting, whereas ESPN had become stale and outdated.
            </p>
            <p>
              As an active commissioner who likes testing new rules every season,
              I needed a platform that offered deep customization. As a frequent user, I want
              the app to be the best it can be.
            </p>

            <h2>Phase 1: Discovery & Definition</h2>
            <p>
              I conducted a "triangulation" of data sources to define the problem.
              This involved social listening to validate market sentiment, heuristic evaluation
              to audit the interface, and proto-persona development to target
              the right users before I started usability testing.
            </p>

            <h3>1. Social Listening</h3>
            <p>
              I utilized social listening on the r/SleeperApp subreddit.
              The goal was to move beyond my own bias and
              see if the "bloat" I felt was a widespread sentiment.
            </p>
            <p>
              To do this, I created a post asking users about what they'd change, add, or remove from the app.
              Over 150 comments later, it was clear what the primary pain points were.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/project5-sociallistening.png"
                alt="Visualization of Reddit threads complaining about UI clutter."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Social listening highlighted a high volume of posts complaining
                about messaging, the desktop experience, and gambling.
              </figcaption>
            </figure>

            <h3>2. Heuristic Evaluation</h3>
            <p>
              I audited the mobile app using Nielsen’s 10
              Usability Heuristics. This identified specific violations
              that served as the basis for my usability test script.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/project5-heuristics.png"
                alt="Heuristic markup of the Sleeper interface."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Visual audit highlighting areas where monetization features
                obstruct core utility.
              </figcaption>
            </figure>

            <h3>3. Proto-Personas</h3>
            <p>
              Based on the social listening data and my domain knowledge, I
              developed two proto-personas to guide recruitment for testing.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/project5-personas.png"
                alt="Proto-Personas: The Social Butterfly vs The Power User vs The Social Casual."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                The Social Butterfly vs The Power User vs The Social Casual.
              </figcaption>
            </figure>
            <p>
              I expect to uncover other user segments during testing. But these steps helped guide my initial hypotheses below.
            </p>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                The messaging system is a major pain point for users of the mobile app, and it needs a substantial rework.
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 2: Usability Testing</h2>
            <p>
              To validate the heuristic violations, I am currently conducting
              moderated remote usability testing through Zoom as well as in-person testing.
            </p>
            <ul>
              <li>
                <strong>Participants:</strong> N=6.
              </li>
              <li>
                <strong>Protocol:</strong> "Think Aloud" method.
              </li>
            </ul>

            <h3>Key Scenarios Tested</h3>
            <ol>
              <li>
                <strong>The Utility Benchmark:</strong> "Find a Free Agent RB
                with the highest projected points." (Tests if gambling overlays
                create visual noise).
              </li>
              <li>
                <strong>The Dark Pattern Hunt:</strong> "Find the setting to
                hide the 'Picks' tab." (Tests discoverability/deceptive
                patterns).
              </li>
              <li>
                <strong>The "Recall" Test:</strong> Users close their eyes and
                describe the gambling features they just saw. (Tests Cognitive
                Load vs. Banner Blindness).
              </li>
            </ol>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 3: Sentiment Analysis</h2>
            <p>
              Following the qualitative phase, I performed a sentiment analysis to quantify broader user sentiment.
            </p>
            <p>
              Reddit allows users to add '.json' to the end of any thread URL to access its raw data. I scraped 8 posts (including my own) containing plenty of user comments by copying the JSON data into a text file.
            </p>
            <p>
              I then wrote a Python script utilizing the VADER sentiment analysis library to analyze the comments and generate a sentiment score.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/project5-pythonscript.png"
                alt="Placeholder for Python Sentiment Analysis Charts."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Python script utilizing VADER sentiment analysis to quantify
                user sentiment.
              </figcaption>
            </figure>
            <p>
              My keywords were relating to DMs as that was the focal point of my testing. The results showed a substantial negative sentiment towards the messaging system, validating my initial hypothesis.
            </p>
            <p>
              There was a large volume of "neutral" comments, likely from users stating facts or asking questions without expressing sentiment.
            </p>

            <h2>Next Steps & Recommendation Strategy</h2>
            <p>
              The final goal is to provide Sleeper with a data-driven roadmap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}