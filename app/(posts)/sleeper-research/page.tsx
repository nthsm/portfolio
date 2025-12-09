import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'
import { ZoomableImage } from '@/components/ui/zoomable-image'

export const metadata: Metadata = {
  title: {
    absolute: 'Sleeper Mobile — Nathan Smith',
  },
  description:
    'Redesigning the messaging architecture to restore the platforms core social promise.',
}

export default function SleeperResearchPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader speedFactor={0.4} className="project-color-teal">
        <h1>Sleeper Mobile</h1>
        <p className="subtitle">
          Redesigning the messaging architecture to restore the platform's core social promise.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Project Overview</h2>
            <p>
              Sleeper positions itself as a social-first fantasy platform,
              aiming to be a 'digital playground' where friends connect over
              sports. While this social focus is its main differentiator, the
              actual mechanics of communication, specifically direct messaging
              and league chats, have become increasingly difficult to navigate
              amidst growing feature density.
            </p>
            <p>
              This study performs a deep-dive analysis of Sleeper's 
              messaging architecture. By identifying the gap between what users
              want to do and what the interface
              allows them to do, I aim to propose a redesigned social flow that
              restores the app's core promise of connection.
            </p>

            <h3>My Background In Fantasy Sports</h3>
            <p>
              I've played fantasy football for over a decade and have been the
              commissioner of my childhood league for almost just as long. Two
              seasons ago, I convinced my league to migrate from ESPN to Sleeper
              because I wanted to test out specific features that ESPN lacked.
            </p>
            <p>
              Sleeper felt new and exciting, whereas ESPN had become stale and
              outdated.
            </p>
            <p>
              As an active commissioner who likes testing new rules every season,
              I needed a platform that offered deep customization. As a frequent
              user, I want the app to be the best it can be.
            </p>

            <h2>Phase 1: Discovery</h2>
            <p>
              I conducted a "triangulation" of data sources to define the
              problem. This involved social listening to validate market
              sentiment, heuristic evaluation to audit the interface, and
              proto-persona development to target the right users before I
              started usability testing.
            </p>

            <h3>1. Social Listening</h3>
            <p>
              I utilized social listening on the r/SleeperApp subreddit. The goal
              was to move beyond my own bias and see if the issues I felt were a
              widespread sentiment.
            </p>
            <p>
              To do this, I created a post asking users about what they'd change,
              add, or remove from the app. Over 150 comments later, it was clear
              what the primary pain points were.
            </p>
            <p>
              Many users expressed frustration with the messaging system, citing
              issues like cluttered UI and difficulty finding conversations.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <ZoomableImage
                src="/project5-sociallistening.png"
                alt="Visualization of Reddit threads complaining about UI clutter."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Social listening highlighted a high volume of posts complaining
                about messaging, the desktop experience, and gambling.
              </figcaption>
            </figure>

            <h3>2. Sentiment Analysis</h3>
            <p>
              I then performed a sentiment analysis to quantify broader user
              sentiment.
            </p>
            <p>
              Reddit allows users to add '.json' to the end of any thread URL to
              access its raw data. I scraped 8 posts (including my own)
              containing plenty of user comments by copying the JSON data into a
              text file.
            </p>
            <p>
              I then wrote a Python script utilizing the VADER sentiment analysis
              library to analyze the comments and generate a sentiment score.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <ZoomableImage
                src="/project5-pythonscript.png"
                alt="Python script utilizing VADER sentiment analysis to quantify user sentiment."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Python script utilizing VADER sentiment analysis to quantify user
                sentiment.
              </figcaption>
            </figure>
            <p>
              My keywords were relating to DMs as that was the focal point of my
              testing. The results showed a substantial negative sentiment
              towards the messaging system, validating my initial hypothesis.
            </p>
            <p>
              There was a large volume of "neutral" comments, likely from users
              stating facts or asking questions without expressing sentiment.
            </p>

            <h3>3. Heuristic Evaluation</h3>
            <p>
              I audited the mobile app using Nielsen’s 10 Usability Heuristics.
              This identified specific violations that could be tested in
              usability sessions.
            </p>
            <p>
              If these screens were found to be problematic during testing, I could begin to consider design solutions.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <ZoomableImage
                src="/project5-heuristics.png"
                alt="Heuristic markup of the Sleeper interface."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Visual audit highlighting areas where messaging features violate
                usability heuristics.
              </figcaption>
            </figure>
            <p>
              While not particularly relevant to messaging, I noted that the app
              also violated Heuristic #10 (Help & Documentation) by lacking any
              information within the app on how to disable the Picks tab. It
              seems that many users on Reddit were unaware that this feature
              could be turned off.
            </p>
            <p>
              From a business perspective, this is likely intentional as the
              Picks tab promotes betting activity, which is a significant revenue
              driver for Sleeper. However, from a usability standpoint, it
              detracts from the user experience for those who do not wish to
              engage with gambling features.
            </p>

            <h3>4. Proto-Personas</h3>
            <p>
              Based on the data and analysis done in the previous steps, I
              developed three proto-personas to guide recruitment for testing.
            </p>
            <figure className="my-8 flex flex-col items-center">
              <ZoomableImage
                src="/project5-personas.png"
                alt="Proto-Personas: The Social Butterfly vs The Power User vs The Social Casual."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                The Social Butterfly vs The Power User vs The Social Casual.
              </figcaption>
            </figure>
            <p>
              These personas helped ensure that I recruited a diverse set of
              users who represented different engagement levels and communication
              styles within Sleeper.
            </p>
            <p>
              I tried to consider different needs of users that I know personally,
              as well as those expressed in Reddit comments. Testing will reveal which personas are accurate, most common, and relevant to the messaging experience.
            </p>
            <p>
              With these insights, I formulated my core hypothesis to be tested in
              the next phase.
            </p>

            <h2>The Hypothesis</h2>
            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                Sleeper's current navigation fragments the social experience,
                burying high-value interactions behind counter-intuitive paths.
                This creates measurable friction that inhibits the very
                interactions the platform was built to foster.
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 2: Initial Testing</h2>
            <p>
              To validate my findings, I designed a usability study focused on
              key tasks related to messaging and social interaction within the
              app. The study employed a mixed-methods approach, combining
              quantitative task completion metrics with qualitative user
              feedback.
            </p>
            <p>
              After testing, I synthesized my findings using empathy mapping and
              journey mapping to identify pain points and opportunities for
              improvement.
            </p>

            <h3>Usability Testing</h3>
            <p>
              I recruited 7 participants in total that matched my proto-personas.
              Five participants were leaguemates of mine, while two were
              recruited via Reddit. All participants were active Sleeper users
              with varying degrees of familiarity with the app's messaging
              features.
            </p>
            <p>
              Each session lasted approximately 30 minutes and included a series
              of three tasks designed to evaluate the messaging experience.
            </p>
            <p>
              My leaguemates were tested in-person, while Reddit recruits were
              tested remotely via Zoom.
            </p>
            <p>
              Participants were encouraged to think aloud as they navigated the
              app, providing insights into their thought processes and
              frustrations.
            </p>
            <p>Here are the tasks I asked participants to complete:</p>
            <ul>
              <li>
                <strong>Task 1:</strong> It's Week 13 and you want to taunt
                your opponent for starting Shedeur Sanders. Send your opponent
                Shedeur's Week 13 stat card, including a cheeky message.
              </li>
              <li>
                <strong>Task 2:</strong> Everyone is discussing bad trades in
                league chat and you want to chime in. From league chat, find the
                worst trade request you've been sent this season.
              </li>
              <li>
                <strong>Task 3:</strong> You've been negotiating a trade with
                me, but I'm not willing to give up the player you originally
                wanted. From our DM, send me a new trade request.
              </li>
            </ul>

            <h4>Task Flow Analysis</h4>
            <p>
              To visualize the interaction cost, I mapped the required click-path for each task. These flows highlight the excessive steps required to perform simple social actions.
            </p>

            <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-task1flow.png"
                  alt="Flow chart for Task 1"
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Task 1: The Stat Card Shuffle
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-task2flow.png"
                  alt="Flow chart for Task 2"
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Task 2: League Chat Labyrinth
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-task3flow.png"
                  alt="Flow chart for Task 3"
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Task 3: Trade DM Detour
                </figcaption>
              </figure>
            </div>

            <h4>Testing Results</h4>
            <p>
              Key metrics collected are as follows:
            </p>
            <ul>
              <li>
                <strong>Time on Task:</strong> Time taken to complete
                each task.
              </li>
              <li>
                <strong>User Satisfaction:</strong> Post-task satisfaction
                ratings on a scale of 1-5.
              </li>
              <li>
                <strong>Error Rate:</strong> Number of misclicks or incorrect
                actions taken during each task. I included switching between manager chats in Task 2 as an error since it indicates confusion.
              </li>
            </ul>
            <p>
              The quantitative data revealed significant friction points:
            </p>
            <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-3">
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-metrics-time.png"
                  alt="Time on Task Metrics"
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Time on Task Metrics
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-metrics-satisfy.png"
                  alt="User Satisfaction Metrics"
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  User Satisfaction Metrics
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-metrics-error.png"
                  alt="Misclick (Error) Rate Metrics"
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Misclick (Error) Rate Metrics
                </figcaption>
              </figure>
            </div>
            <p>
              I was shocked at how many people didn't even know what I was talking about in Task 1.
            </p>
            <p>
              Next time, I believe I could have picked better tasks (2 and 3 weren't as strong) for testing. However, I picked these tasks because I was curious about how users would choose to navigate the app.
            </p>
            <p>
              For example, in Task 2, many users went through DMs instead of navigating to the 'Trades' tab. This revealed that users don't have a clear mental model of where to find certain features.
              Adding a 'search' function to chats would help users who choose this path find what they need faster.
            </p>
            <p>
              In Task 3, I wanted to see if users would instinctively try to create a trade directly from the DM screen by tapping the other manager's name. Most users did, indicating that this is a natural expectation that the app fails to meet.
            </p>
            <p>
              I also considered doing a sentiment score after each task, but with only 7 participants, I felt the qualitative feedback would be more valuable. I was already able to gauge sentiment from the satisfaction ratings and observed frustrations.
            </p>
            <p>
              Overall, the quantitative data confirmed my hypothesis that the messaging architecture creates friction, but the qualitative data
              provided deeper insights into the specific pain points and user expectations.
            </p>
            <h4>Qualitative Synthesis</h4>
            <p>
              After each task, I asked participants a series of follow-up
              questions to gather qualitative feedback on their experience.
            </p>
            <p>
              I determined that there was quite a bit of overlap in pain points
              between the Casual and the Social Butterfly personas, so I bundled
              their feedback into one empathy map.
            </p>
            <p>
              The Power User had a few unique frustrations, so I created a
              separate empathy map for them.
            </p>
            <div className="my-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-empathymap-casual.png"
                  alt="Empathy Map for Social Casual Persona."
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Empathy Map for Social Casual Persona.
                </figcaption>
              </figure>
              <figure className="flex flex-col items-center">
                <ZoomableImage
                  src="/project5-empathymap-power.png"
                  alt="Empathy Map for Power User Persona."
                  className="w-full rounded-lg"
                />
                <figcaption className="mt-2 text-center text-xs text-zinc-500">
                  Empathy Map for Power User Persona.
                </figcaption>
              </figure>
            </div>
            <p>
              Despite their different usage patterns, both personas expressed
              frustration with the discoverability of messaging features and the
              cluttered interface. This lead to a decrease in overall
              satisfaction and engagement, as shown in the task metrics.
            </p>
            <p>
              Journey mapping further highlighted specific pain points along the
              user flow. I chose to map the journey of the Social Casual persona
              as they attempted to complete Task 1 because it seemed that casual
              users struggled the most, but were the most interested in social
              features.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <ZoomableImage
                src="/project5-userjourneymap.png"
                alt="Journey Map for Social Casual Persona Completing Task 1."
                className="w-full rounded-lg"
              />
              <figcaption className="mt-2 text-center text-sm text-zinc-500">
                Journey Map for Social Casual Persona Completing Task 1.
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Phase 3: The Design Solution</h2>
            <p>
              Based on the research, I developed a set of high-fidelity mockups
              to address the core architectural flaws. The goal was not to
              reinvent the wheel, but to align the interface with the user's
              mental model of a "Social-First" app.
            </p>

            <h3>1. The Messaging Hub</h3>
            <p>
              To solve the navigation identity crisis, I elevated "Chats" to the
              bottom navigation, replacing the low-utility Profile tab.
            </p>
            <p>
              Crucially, I separated "League Chats" from "Direct Messages" to
              reduce cognitive load and the risk of taps occasionally not
              registering.
            </p>
            <p>
              I also standardized the top navigation (Hamburger + Settings)
              across all screens for heuristic consistency, while retaining quick
              access to profile customization (flair/avatar) directly within the
              DM view.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <ZoomableImage
                src="/project5-mockup1.png"
                alt="Before and After of the Chat menu."
                className="w-full rounded-lg"
              />
            </figure>

            <h3>2. Signal-Over-Noise Filtering</h3>
            <p>
              Research showed users struggled to find relevant people. I
              redesigned the "New Chat" search logic to prioritize{' '}
              <strong>Mutual Leaguemates</strong> over global users.
            </p>
            <p>
              I also introduced granular filters to the inbox, allowing users to
              instantly view only "Active Trades" or hide inactive threads,
              directly addressing the "buried trade offer" friction point.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <ZoomableImage
                src="/project5-mockup2.png"
                alt="Introducing new features into DMs."
                className="w-full rounded-lg"
              />
            </figure>

            <h3>3. The Social Card</h3>
            <p>
              I transformed the generic User Profile into a context-aware
              "Relationship Card." Now, when viewing another user, the primary
              actions dynamically change based on context: if you share a league,
              you see "Taunt" and "Trade" buttons.
            </p>
            <p>
              I also surfaced "Shared Leagues" and H2H history to gamify the
              relationship and drive engagement.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <ZoomableImage
                src="/project5-mockup3.png"
                alt="Wireframe of the Rivalry History feature inside a DM."
                className="w-full rounded-lg"
              />
            </figure>
            <h2>Reflection</h2>
            <p>
              I didn't iterate on the designs of pages such as "Taunt" or "League Chat"
              as I felt the core architectural changes were more important to
              validate first. I believe real analytical data that Sleeper posess will provide a clearer
              direction for future design iterations.
            </p>
            <p>
              I also didn't conduct a second round of usability testing on the
              new designs due to time constraints. However, I would recommend
              doing so to validate that the proposed changes effectively reduce
              friction and enhance the social experience.
            </p>

            <h2>Next Steps</h2>
            <p>
              Sleeper's competitive advantage is its social layer. However, the
              current architecture creates friction that actively inhibits social
              interaction.
            </p>
            <p>
              By weaving communication into the core gameplay loop, 
              Sleeper can reduce the cognitive load of
              socializing.
            </p>
            <p>
              My recommendation to Sleeper is to <strong>A/B test these changes in the next beta
              release</strong> to measure its impact on Daily Active Users and message
              volume.
            </p>
            <p>
              Check analytics, see how many users engage with the new messaging
              features, and gather feedback through in-app surveys to iterate
              further.
            </p>
            <p>
              Check your subreddit for user feedback post-launch to see if sentiment
              has improved.
            </p>
            <p>
              Research is never truly done, and continuous iteration based on user
              feedback is key to maintaining a user-centric product.
            </p>
            <p>
              This would be my plan if I were to hand off this research to the Sleeper
              product team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}