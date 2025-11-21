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
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/placeholder.png"
                alt="Visualization of Reddit threads complaining about UI clutter."
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Social listening highlighted a high volume of posts complaining
                about UI clutter and feature bloat.
              </figcaption>
            </figure>

            <h3>2. Heuristic Evaluation</h3>
            <p>
              I audited the mobile app using Nielsen’s 10
              Usability Heuristics. This identified specific violations
              that served as the basis for my usability test script.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <h3 className="mt-0 mb-2 text-lg font-bold">
                  1. Navigation Identity Crisis
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Violates: Consistency & Standards.</strong>
                  <br />
                  The app attempts to be a Chat App, a Fantasy Tool, and a
                  Sportsbook simultaneously. High-value real estate (Bottom Nav)
                  is occupied by low-utility pages like "Profile," while
                  essential "Chats" are fragmented.
                </p>
              </div>
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <h3 className="mt-0 mb-2 text-lg font-bold">
                  2. Task Friction
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Violates: Flexibility & Efficiency.</strong>
                  <br />
                  When adding players, the default view is "Trending" rather
                  than "Available." This forces an extra tap for every
                  transaction, prioritizing discovery over the user's primary
                  intent (utility).
                </p>
              </div>
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <h3 className="mt-0 mb-2 text-lg font-bold">
                  3. "Mystery Meat" Navigation
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Violates: Match Between System & Real World.</strong>
                  <br />
                  Terms like "Minis" are system-oriented jargon with no semantic
                  meaning to the user. High-value tools (Research) are hidden
                  under these ambiguous labels, killing discoverability.
                </p>
              </div>
              <div className="rounded-lg bg-zinc-50 p-6 dark:bg-zinc-900">
                <h3 className="mt-0 mb-2 text-lg font-bold">
                  4. Goal Interference
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Violates: User Control & Freedom.</strong>
                  <br />
                  The "Picks" integration physically obstructs fantasy data. It
                  is a secondary business goal (Monetization) that actively
                  impedes the primary user goal (Team Management).
                </p>
              </div>
            </div>
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/placeholder.png"
                alt="Heuristic markup of the Sleeper interface."
                className="w-full rounded-lg shadow-md"
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
                src="/placeholder.png"
                alt="Proto-Personas: The Commissioner (Power User) vs The Social Casual."
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Targeting both "Power Users" and "Casuals" ensures the study
                covers the full spectrum of friction.
              </figcaption>
            </figure>
            <p>
              I expect to uncover other user segments during testing. But these steps helped guide my initial hypotheses below.
            </p>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                The aggressive integration of new features
                is creating friction that degrades the Social and
                Utility experience for core users.
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
            <h2>Phase 3: Programmatic Sentiment Analysis</h2>
            <p>
              <em>Currently In Progress.</em> Following the qualitative phase, I
              will perform a sentiment analysis to quantify broader user sentiment.
            </p>
            <p>
              Using Python (PRAW library), I will scrape recent discussion
              threads to quantify the sentiment around specific features
              identified in Phase 2. This will allow me to validate if the
              friction points observed in 6 users are representative of the
              broader 10M+ user base.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <img
                src="/placeholder.png"
                alt="Placeholder for Python Sentiment Analysis Charts."
                className="w-full rounded-lg shadow-md"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                (Upcoming) Sentiment distribution comparing "Social Features"
                vs. "Gambling Features."
              </figcaption>
            </figure>

            <h2>Next Steps & Recommendation Strategy</h2>
            <p>
              The final goal is to provide Sleeper with a data-driven roadmap.
              This will likely focus on decoupling the "Betting" experience from
              the "Fantasy" experience through Context-Aware Navigation,
              ensuring that revenue goals do not cannibalize user retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}