import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'FSU Tech Connect — Nathan Smith',
  },
  description: 'Researching student needs for a P2P tech marketplace.',
}

export default function P2PMarketplacePage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader
        speedFactor={0.4}
        className="project-color-blue"
      >
        <h1>FSU Tech Connect</h1>
        <p className="subtitle">
          Researching student needs for a P2P tech marketplace.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h1>Project Overview</h1>
            <p>
              For many students, buying and selling used electronics is a risky
              and frustrating experience. FSU students currently rely on
              impersonal, inconvenient, and often unsafe platforms like
              Facebook Marketplace or eBay. These marketplaces lack community
              trust, making it difficult to trade gear with confidence.
            </p>
            <p>
              This research project explored the viability of a
              university-exclusive mobile app—"FSU Tech Connect"—designed to
              foster safety through an FSU-verified network and streamline the
              entire trading process.
            </p>

            <h2>My Role & Methods</h2>
            <p>
              As the sole <strong>UX Researcher</strong> on this project, my
              responsibilities were to conduct all user research, synthesize
              the findings, and develop a set of data-driven feature
              recommendations.
            </p>
            <p>
              A <strong>mixed-methods study</strong> was chosen to get a
              complete picture. The quantitative survey would quickly gather
              broad sentiment and validate assumptions, while the qualitative
              interviews were essential for uncovering the "why" behind those
              sentiments and discovering unexpected pain points.
            </p>
            <ul>
              <li>
                <strong>Quantitative Survey (N=16):</strong> Deployed to
                quickly identify and validate core frustrations and test the
                "trust" hypothesis around an @fsu.edu verification.
              </li>
              <li>
                <strong>Qualitative Interviews:</strong> Conducted to add
                context and empathy to the survey data, allowing me to
                understand the stories behind the frustrations.
              </li>
              <li>
                <strong>Persona Development & Journey Mapping:</strong> Used to
                synthesize the data into actionable artifacts that defined the
                user and their primary pain points.
              </li>
            </ul>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                The Goal: To understand student pain points in P2P transactions
                and identify the core features that would make a
                university-exclusive app a safe, convenient, and trusted
                alternative.
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Understanding the User</h2>
            <h3>Research Summary: A Pivot from "Safety" to "Efficiency"</h3>
            <p>
              My initial hypothesis was that <strong>safety</strong> was the
              primary concern for students. The quantitative survey data
              validated this: <strong>81.3%</strong> of respondents (13 out of
              16) rated "Safety/Trust" as a 4 or 5 (out of 5) in importance.
              Furthermore, <strong>81.3%</strong> said an @fsu.edu email
              verification would increase their trust.
            </p>
            <p>
              However, the interviews and survey free-responses revealed a
              more universal and immediate pain point: <strong>friction</strong>
              . Safety was a major factor, but the{' '}
              <strong>significant mental workload</strong> of the process was
              the daily frustration.
            </p>
            <p>
              Users expressed deep frustration with pricing uncertainty,
              tedious listing processes, and the fear of being "ghosted" by
              unreliable buyers/sellers. This led to a strategic pivot,
              expanding the project's goals from just "safety" to also include
              "efficiency and convenience."
            </p>

            <h3>Key Pain Points</h3>
            <ol>
              <li>
                <strong>Lack of Trust & Safety:</strong> Students hesitate to
                engage in transactions due to the high risk of scams and the
                anxiety of meeting strangers from unverified platforms.
              </li>
              <li>
                <strong>High Friction & Wasted Time:</strong> The process of
                listing an item—determining a price, taking photos, writing a
                good description, and communicating—is seen as tedious and
                frustrating.
              </li>
              <li>
                <strong>Inconvenient Meetup Logistics:</strong> Coordinating a
                safe and convenient on-campus meetup is a significant
                challenge for busy students, many of whom may not have a car.
              </li>
              <li>
                <strong>Accessibility Barriers:</strong> For students with
                mobility impairments, the lack of information about accessible
                meetup locations creates a major barrier to participation.
              </li>
            </ol>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner">
            <h2>Defining the User: Personas</h2>
            <p>
              From the research, I synthesized several personas to represent
              the core user base. The primary persona, "Joe," guided the
              feature recommendations by focusing on the most common and
              frustrating pain points.
            </p>
            <h3>Primary Persona: Joe, The Non-Expert Seller</h3>
            <ul>
              <li>
                <strong>Bio:</strong> A 19-year-old full-time student living on
                campus.
              </li>
              <li>
                <strong>Goal:</strong> Wants to sell his old Steam Deck for
                extra cash with minimal time and effort. He needs a fair price
                without doing hours of research and wants to meet a buyer
                conveniently on campus.
              </li>
              <li>
                <strong>Frustrations:</strong> He feels overwhelmed by the
                "blank page" of creating a listing. He has no idea how to
                price his item fairly and dreads the back-and-forth messaging.
              </li>
            </ul>
            <blockquote>
              "I know my old Steam Deck is worth something, but I have no idea
              how to price it or what to write in the description."
            </blockquote>

            <h3>Other Key Personas</h3>
            <ul>
              <li>
                <strong>Rebecca, The Urgent Buyer:</strong> Needs a fast,
                trustworthy way to find a replacement for a broken device.
              </li>
              <li>
                <strong>Erica, The Motivated Mover:</strong> Needs an efficient
                process and reliable buyers to sell items before moving out.
              </li>
              <li>
                <strong>Brenda, The Accessibility Advocate:</strong> Needs a
                way to easily identify and coordinate accessible meetup
                locations.
              </li>
            </ul>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner">
            <h2>Research-Driven Recommendations</h2>
            <p>
              Synthesizing the user pain points, the survey data, and the
              primary persona (Joe), I developed a set of feature
              recommendations. These are not design mockups, but strategic
              proposals focused on addressing the validated user needs.
            </p>
            <ol>
              <li>
                <strong>Mandatory @fsu.edu Verification:</strong> This is the
                top priority to establish a baseline of trust and safety, which
                81.3% of users confirmed would increase their trust.
              </li>
              <li>
                <strong>AI Price Suggestion Tool:</strong> To combat Joe's
                "pricing uncertainty," a feature that suggests a fair market
                price based on the item, condition, and recent listings would
                drastically reduce friction.
              </li>
              <li>
                <strong>Preset "Meetup Zones":</strong> To solve the logistical
                nightmare of meetups, the app should feature a map of
                pre-defined, safe, and well-lit public locations on campus
                (e.g., Strozier Library, Student Union).
              </li>
              <li>
                <strong>Accessibility-Labeled Meetups:</strong> A simple but
                critical feature. Meetup Zones should be tagged with
                accessibility information (e.g., "Wheelchair Accessible") to
                serve users like Brenda.
              </li>
              <li>
                <strong>User Rating & Reporting System:</strong> To build
                long-term community trust and weed out "ghosters," a simple
                rating system and a robust reporting feature are essential.
              </li>
            </ol>

            <h2>Reflection</h2>
            <p>
              This project was a fantastic exercise in mixed-methods research.
              The most valuable insight was the pivot from my initial
              "safety-first" hypothesis. While safety was critical, the
              qualitative interviews revealed that convenience and efficiency
              were the more immediate blockers for users. This finding
              completely reshaped the feature recommendations from a simple
              verification system to a suite of tools designed to reduce
              mental effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}