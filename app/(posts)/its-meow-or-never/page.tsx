/* nthsm/portfolio/portfolio-1704bb279c5646eb9cac39f25da923cc404ed185/app/(posts)/its-meow-or-never/page.tsx */
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "Redesign: It's Meow or Never — Nathan Smith"
  },
  description: "A UX research case study on challenging initial assumptions and using user data to drive targeted, effective recommendations for a non-profit's website.",
}

export default function ItsMeowOrNeverPage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/project2-bg.png')" }}
        >
            <h1>It's Meow or Never: A UX Research Deep Dive</h1>
            <p className="subtitle">How user data corrected my assumptions and led to targeted recommendations.</p>
        </ParallaxHeader>

        <div className="imon-content-wrapper">
            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <h1>The Initial Hypothesis (And Where I Went Wrong)</h1>
                    <p>
                        Based on an initial heuristic evaluation, I hypothesized that the "It's Meow or Never" website required a comprehensive redesign. I identified several potential usability issues:
                    </p>
                    <ul>
                        <li><strong>Poor Color Contrast:</strong> The prominent red backgrounds created accessibility issues and poor readability.</li>
                        <li><strong>Confusing Hierarchy:</strong> Key calls-to-action seemed buried, and the homepage felt cluttered with redundant information.</li>
                        <li><strong>Fragmented Navigation:</strong> I assumed the site structure was confusing and hindered users from completing key tasks like adopting or donating.</li>
                    </ul>
                    <p>
                        My assumption was that these factors created significant user frustration and that a complete visual and structural overhaul was the only solution. <strong>I was wrong.</strong>
                    </p>

                    <div className="hmw-container not-prose">
                        <div className="hmw-line"></div>
                        <h2 className="hmw-text">
                            Initial (Flawed) Question: "How can we redesign the entire IMON website to make it usable?"
                            <br/><br/>
                            Revised (Data-Driven) Question: "What are the *key* user pain points, and how can we make targeted improvements that *actually* help users and support the shelter's goals?"
                        </h2>
                        <div className="hmw-line"></div>
                    </div>
                </div>
            </div>

            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <h1>Challenging My Assumptions with Research</h1>
                    <p>
                        To validate or challenge my initial hypothesis, I employed a mixed-methods research approach.
                    </p>
                    <figure className="flex flex-col items-center my-4">
                        <img src="/project2-process.png" alt="Process Flow: Understand, Research, Define, Design, Test"/>
                        <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">The research-focused process I followed.</figcaption>
                    </figure>
                    
                    <h2>User Survey (N=13)</h2>
                    <p>
                        I distributed a survey to gather quantitative and qualitative feedback. The results provided the first wave of data that directly contradicted my assumptions.
                    </p>
                    <ul>
                        <li>
                            <strong>Navigation Was Not the Problem:</strong> 5 out of 13 respondents (38%) gave the website a perfect 5/5 score on "how easy it is to find what you're looking for." The overall sentiment was positive, suggesting my concerns about navigation were largely unfounded.
                        </li>
                        <li>
                            <strong>Aesthetics Were "Just Okay," Not a Blocker:</strong> 7 out of 13 respondents (54%) gave the site a 3/5 aesthetic rating. Only one person rated it 2 or lower. This told me that while it wasn't winning design awards, it wasn't the critical barrier I thought it was.
                        </li>
                        <li>
                            <strong>Content Priorities Were Clear:</strong> Users cared most about <strong>"how the adoption process works"</strong> and <strong>"clear contact information."</strong> My initial focus on news and events was a lower priority for them.
                        </li>
                        <li>
                            <strong>The *Real* Culprit:</strong> The most consistent complaint was friction and confusion related to the "Shelterluv" third-party integration.
                        </li>
                    </ul>

                    <h2>Usability Testing</h2>
                    <p>
                        I then conducted usability tests, asking participants to complete key tasks. This observational data was the final piece of the puzzle.
                    </p>
                    <ul>
                        <li>
                            <strong>High Task Success & Efficiency:</strong> Participants completed core tasks like "find a cat to adopt" and "donate via Shelterluv" in less than 5 seconds. This was a stunning revelation—my perceived navigation and hierarchy flaws were not impeding users in practice.
                        </li>
                        <li>
                            <strong>Shelterluv Friction Confirmed:</strong> While users *completed* tasks, the tests confirmed that the journey *involving* Shelterluv was the main source of hesitation or confusion.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="content-section">
                <div className="imon-content-inner">
                    <h1>The Learning & Revised Recommendations</h1>
                    <p>
                        This research was a valuable lesson in challenging my own assumptions. My heuristic evaluation was a fine starting point, but it was not a substitute for real user data. The survey and usability tests proved that a complete overhaul was unnecessary.
                    </p>
                    <p>
                        Instead of a redesign, I pivoted to a set of targeted, data-driven recommendations for IMON that would address *actual* user needs and be far more achievable for a non-profit.
                    </p>
                    <figure className="flex flex-col items-center my-4">
                        <img src="http://googleusercontent.com/image_generation_content/0" alt="A diagram showing a 'Before' concept of a cluttered website and an 'After' concept of a simplified, data-driven layout focused on key user tasks."/>
                        <figcaption className="text-sm text-zinc-600 dark:text-zinc-400 text-center mt-1 mb-4">My process shifted from a total redesign (left) to a focused revision based on research (right).</figcaption>
                    </figure>
                    
                    <h2>My Final Recommendations to "It's Meow or Never"</h2>
                    <ol>
                        <li>
                            <strong>Address Accessibility First:</strong> Remove the red background that causes poor contrast. Change the red color used for text and links to a shade that meets WCAG AA standards. This is a high-impact, low-effort fix.
                        </li>
                        <li>
                            <strong>Optimize the Homepage (Don't Redesign It):</strong>
                            <ul>
                                <li>Remove the "Lost & Found" database link to reduce clutter.</li>
                                <li>Use fewer, more impactful images.</li>
                                <li>Break up large blocks of text to improve scannability.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Clarify the Adoption Process:</strong> Create a new, dedicated page that explains the adoption process step-by-step. This directly addresses the #1 piece of information users wanted.
                        </li>
                        <li>
                            <strong>Investigate the Shelterluv Integration:</strong> Analyze the user journey in and out of the Shelterluv platform. The friction here is the *real* usability problem. Recommendations include:
                            <ul>
                                <li>Providing clearer "what to expect" text before users click out to the platform.</li>
                                <li>Exploring if Shelterluv offers different, more seamless integration methods.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>

            <div className="content-section">
                <div className="imon-content-inner">
                    <h1>Reflection</h1>
                    <p>
                        As a researcher, it's crucial to acknowledge when your hypothesis is wrong. This project was a perfect example of that. By trusting the user data over my own initial "expert" opinion, I was able to move from a costly, unnecessary redesign proposal to a set of simple, high-impact recommendations that directly address documented user needs.
                    </p>
                    <p>
                        This approach not only provides more value to the stakeholder but also demonstrates a key research skill: the ability to listen, learn, and pivot.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}