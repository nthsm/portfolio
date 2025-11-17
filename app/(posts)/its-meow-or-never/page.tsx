import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Pivoting for Paws — Nathan Smith',
  },
  description: 'How user data corrected heuristics for a non-profit.',
}

export default function ItsMeowOrNeverPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader
        speedFactor={0.4}
        className="project-color-red"
      >
        <h1>Pivoting for Paws</h1>
        <p className="subtitle">
          How user data corrected heuristics for a non-profit.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Project Overview</h2>
            <p>
              "It's Meow or Never" (IMON) is a non-profit cat rescue with a
              website that, based on an initial heuristic review, appeared to
              have significant usability flaws.
            </p>
            <p>
              This project documents my process of starting with a strong,
              biased hypothesis, testing that hypothesis against real user
              data, and ultimately pivoting to a set of recommendations that
              were far more targeted, effective, and achievable for a
              non-profit client. It serves as a personal case study in
              research humility and the power of data to correct assumptions.
            </p>

            <h2>My Role & Methods</h2>
            <p>
              As the sole UX Researcher, I conducted the end-to-end research
              process. The goal was to identify and validate usability issues
              to provide actionable recommendations.
            </p>
            <p>
              The methods were chosen sequentially to first generate a baseline
              and then systematically challenge it.
            </p>
            <ul>
              <li>
                <strong>Heuristic Evaluation:</strong> I started here to
                quickly identify obvious usability problems based on
                established design principles. This formed my initial hypothesis.
              </li>
              <li>
                <strong>User Survey (N=13):</strong> Deployed to gather broad
                quantitative and qualitative data from real users to see if
                their sentiments matched my expert review.
              </li>
              <li>
                <strong>Usability Testing:</strong> Conducted to get
                observational data. Seeing what users do is the ultimate
                test of any hypothesis, and in this case, it provided the
                clearest evidence for a pivot.
              </li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>The Initial Hypothesis</h2>
            <p>
              Based on my heuristic evaluation, I hypothesized
              that the website required a comprehensive redesign. My
              review identified several usability issues:
            </p>
            <figure className="my-4 flex flex-col items-center">
              <div className="flex gap-2 not-prose">
                <img
                  src="/project2-findings.png"
                  alt="Initial heuristic findings."
                  className="w-1/2"
                />
                <img
                  src="/project2-heuristic.png"
                  alt="Heuristic evaluation screenshot."
                  className="w-1/2"
                />
              </div>
              <figcaption>
                My initial heuristic evaluation identified several potential
                issues.
              </figcaption>
            </figure>
            <p>
              My bias as a designer-minded researcher led me to believe that
              these aesthetic and heuristic flaws would automatically
              translate to a poor user experience and deter users.
            </p>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                "The website's aesthetics, hierarchy, and accessibility flaws 
                create a frustrating user experience that is the primary barrier to
                adoption and donations."
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Challenging My Assumptions with Research</h2>
            <h3>User Survey</h3>
            <p>
              The survey results provided the first wave of data that directly
              contradicted my assumptions.
            </p>
            <ul>
              <li>
                <strong>Navigation Was Not the Problem:</strong> 38% of
                respondents gave the website a perfect 5/5 score on "how easy
                it is to find what you're looking for." The overall sentiment
                was positive.
              </li>
              <li>
                <strong>Aesthetics Were "Just Okay," Not a Blocker:</strong> 54%
                of respondents gave the site a 3/5 aesthetic rating. This told
                me that while it wasn't winning awards, it wasn't the
                critical barrier I assumed it was.
              </li>
              <li>
                <strong>Content Priorities Were Clear:</strong> Users cared most
                about <strong>"how the adoption process works"</strong> and{' '}
                <strong>"clear contact information,"</strong> not the news
                and events I had focused on.
              </li>
            </ul>
            <figure className="my-4 flex flex-col items-center">
              <div className="flex w-full flex-col gap-4 md:flex-row md:gap-8 not-prose">
                <img
                  src="/project2-navigation.png"
                  alt="Chart: 77% of users rated site navigation a 3 or higher (out of 5)."
                  className="md:w-1/2"
                />
                <img
                  src="/project2-aesthetics.png"
                  alt="Chart: 54% of users rated site aesthetics a 3 (out of 5)."
                  className="md:w-1/2"
                />
              </div>
              <figcaption>
                Survey data showing user sentiment on navigation (left) and
                aesthetics (right).
              </figcaption>
            </figure>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project2-content.png"
                alt="Chart: Users rated 'Clear contact info' and 'Info on adoption process' as most important."
              />
              <figcaption>
                Survey data showing what content users rated as most important.
              </figcaption>
            </figure>

            <h3>Usability Testing</h3>
            <p>
              I then conducted usability tests, asking participants to complete
              key tasks. This observational data was the final piece of the
              puzzle.
            </p>
            <ul>
              <li>
                <strong>High Task Success & Efficiency:</strong> Participants
                completed core tasks like "find a cat to adopt" and "donate"
                in <strong>less than 10 seconds</strong>. My perceived
                navigation and hierarchy flaws were not impeding users in
                practice.
              </li>
              <li>
                The most consistent complaint was friction and confusion related to the
                "Shelterluv" <strong>third-party integration</strong> used for
                adoptions and donations. The usability break was not on the
                IMON site itself, but in the handoff to this external tool.
              </li>
            </ul>
            <figure className="my-4 flex flex-col items-center">
            <img
              src="/project2-quote.png"
              alt="A representative quote from usability testing highlighting the Shelterluv friction."
            />
            <figcaption>
              A representative quote from usability testing highlighting the Shelterluv friction.
            </figcaption>
          </figure>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner">
            <h2>The Learning & Revised Recommendations</h2>
            <p>
              This research was a valuable lesson in humility and the power of
              challenging my own assumptions. My heuristic evaluation was a
              starting point, but it was not a substitute for real user data.
            </p>
            <p>
              Instead of an unnecessary redesign, I pivoted to a set
              of targeted, data-driven recommendations that would address
              actual user needs and be far more achievable for a non-profit.
            </p>

            <h3>My Final Recommendations to "It's Meow or Never"</h3>
            <ol>
              <li>
                <strong>Address Accessibility First:</strong> Remove the red
                background that causes poor contrast. Change the red color
                used for text and links to a shade that meets WCAG AA
                standards. This is a high-impact, low-effort fix. I suggested 
                #B30F11 as it meets contrast requirements while maintaining brand color.
              </li>
              <li>
                <strong>Optimize the Homepage (Don't Redesign It):</strong>
                <ul>
                  <li>
                    Remove the "Lost & Found" database link to reduce clutter.
                  </li>
                  <li>
                    Break up large blocks of text to improve scannability. This is key.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Clarify the Adoption Process:</strong> Create a new,
                dedicated page that explains the adoption process step-by-step,
                directly addressing the #1 piece of information users wanted.
              </li>
              <li>
                <strong>Investigate the Shelterluv Integration:</strong>
                <ul>
                  <li>
                    Add "what to expect" text before users click out to the
                    platform to smooth the transition.
                  </li>
                  <li>
                    Research if Shelterluv offers different, more seamless
                    integration methods.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner">
            <h2>Reflection</h2>
            <p>
              As a researcher, it's crucial to acknowledge when your hypothesis
              is wrong. This project was a perfect example. By trusting the
              user data over my own opinion, I was able to move from a
              costly, unnecessary redesign proposal to a set of simple,
              high-impact recommendations that directly address documented user
              needs.
            </p>
            <p>
              This approach not only provides more value to the stakeholder but
              also demonstrates a key research skill: the ability to listen,
              learn, and pivot.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}