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
      <ParallaxHeader speedFactor={0.4} className="project-color-gold">
        <h1>FSU Tech Connect</h1>
        <p className="subtitle">
          Researching student needs for a P2P tech marketplace.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Project Overview</h2>
            <p>
              For many students, buying and selling used electronics is a risky
              and frustrating experience. FSU students currently rely on
              impersonal, inconvenient, and often unsafe platforms like Facebook
              Marketplace or eBay. These marketplaces lack community trust,
              making it difficult to trade gear with confidence.
            </p>
            <p>
              This research project explored the viability of a
              university-exclusive mobile app—"FSU Tech Connect"—designed to
              foster safety through an FSU-verified network and streamline the
              entire trading process.
            </p>

            <h2>My Role & Methods</h2>
            <p>
              As a UX Researcher, my responsibilities were to conduct all user
              research, synthesize the findings, and develop a set of{' '}
              data-driven feature recommendations.
            </p>
            <p>
              A mixed-methods study was chosen to get a
              complete picture. I needed to benchmark current student sentiments against existing solutions.
            </p>
            <ul>
              <li>
                User Survey (N=16): Deployed to quickly
                identify and validate core frustrations and test the "trust"
                hypothesis around an @fsu.edu verification.
              </li>
              <li>
                Qualitative Interviews: Conducted to add
                context and empathy to the survey data, allowing me to
                understand the stories behind the frustrations.
              </li>
              <li>
                Persona Development & Journey Mapping: Used to
                synthesize the data into actionable artifacts that defined the
                user and their primary pain points.
              </li>
            </ul>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                The goal is to understand student pain points in P2P
                transactions and identify the core features that would make an
                app a safe, convenient, and trusted alternative.
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Research Summary: The Data-Driven Pivot</h2>
            <h3>User Survey</h3>
            <p>
              My initial hypothesis was that safety was the primary concern for
              students. The quantitative survey data validated this:{' '}
              87.6% of respondents (14 out of 16) rated
              "Safety/Trust" as a 4 or 5 (out of 5) in importance. Furthermore,{' '}
              81.3% said an @fsu.edu email verification would
              increase their trust.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <div className="flex w-full flex-col gap-4 md:flex-row md:gap-8 not-prose">
                <img
                  src="/project1-barsafety.png"
                  alt="Bar chart showing 81.3% of users rate Safety/Trust as a 4 or 5 out of 5."
                  className="md:w-1/2"
                />
                <img
                  src="/project1-barfsuemail.png"
                  alt="Bar chart showing 81.3% of users would trust a platform more with @fsu.edu email verification."
                  className="md:w-1/2"
                />
              </div>
              <figcaption>
                Quantitative data validating the importance of safety and trust.
              </figcaption>
            </figure>
            <p>
              However, the interviews and survey free-responses revealed a more
              universal and immediate pain point: high friction
              . Safety was a major factor, but the{' '}
              significant cognitive load of the process was the
              daily frustration. This discovery served as the Data-Driven Pivot
              for the project's product strategy.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <div className="flex w-full flex-col gap-4 md:flex-row md:gap-8 not-prose">
                <img
                  src="/project1-barconvenience.png"
                  alt="Bar chart showing that users have decided not to go through with a transaction due to inconvenience or safety concerns."
                  className="md:w-1/2"
                />
                <img
                  src="/project1-piecomplication.png"
                  alt="Pie chart showing complications in the P2P process."
                  className="md:w-1/2"
                />
              </div>
              <figcaption>
                Further data illustrating the importance of convenience and user
                motivations.
              </figcaption>
            </figure>
            <p>
              Users expressed deep frustration with pricing uncertainty, tedious
              listing processes, and the fear of being "ghosted" by unreliable
              buyers/sellers. This led to a strategic pivot, expanding the
              project's goals from just "safety" to also include "efficiency and
              convenience."
            </p>
            <h3>User Interviews</h3>
            <p>
              The qualitative interviews provided rich context to the survey
              data. Students shared stories of failed transactions, wasted time,
              and anxiety around meetups. Several recurring themes emerged,
              highlighting the multifaceted nature of the pain points.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project1-interviewquotes.png"
                alt="Quotes from user interviews highlighting key pain points."
              />
              <figcaption>
                Quotes from user interviews highlighting key pain points.
              </figcaption>
            </figure>
            <h3>Key Pain Points</h3>
            <ol>
              <li>
                Lack of Trust & Safety: Students hesitate to
                engage in transactions due to the high risk of scams and the
                anxiety of meeting strangers from unverified platforms.
              </li>
              <li>
                High Friction & Wasted Time: The process of
                listing an item—determining a price, taking photos, writing a
                good description, and communicating—is seen as tedious and
                frustrating.
              </li>
              <li>
                Inconvenient Meetup Logistics: Coordinating a
                safe and convenient on-campus meetup is a significant challenge
                for busy students, many of whom may not have a car.
              </li>
              <li>
                Accessibility Barriers: For students with
                mobility impairments, the lack of information about accessible
                meetup locations creates a major barrier to participation.
              </li>
            </ol>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner">
            <h3>Personas</h3>
            <p>
              From the research, I synthesized several personas to represent the
              core user base. The primary persona, "Joe," guided the feature
              recommendations by focusing on the most common and frustrating
              pain points.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project1-joepersona.png"
                alt="Primary Persona: Joe, The Non-Expert Seller"
              />
              <figcaption>
                Primary Persona: Joe, The Non-Expert Seller
              </figcaption>
            </figure>
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
                <strong>Brenda, The Accessibility Advocate:</strong> Needs a way
                to easily identify and coordinate accessible meetup locations.
              </li>
            </ul>
            <h3>User Journey Mapping</h3>
            <p>
              I also created a user journey map for Joe, outlining his typical
              experience trying to sell a used Steam Deck. This map was critical
              for visualizing the impact of cognitive load on
              the user's emotional state throughout the process.
            </p>
            <figure className="my-4 flex flex-col items-center">
              <img
                src="/project1-joejourneymap.png"
                alt="User Journey Map for Joe, The Non-Expert Seller"
              />
              <figcaption>
                User Journey Map for Joe, The Non-Expert Seller
              </figcaption>
            </figure>
            <p>
              This journey map was instrumental in visualizing where the app
              could intervene to reduce friction and improve the overall user
              experience, informing the final Data-Driven Product Strategy.
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner">
            <h2>Actionable Recommendations</h2>
            <p>
              Synthesizing the user pain points, the survey data, and the
              primary persona (Joe), I developed a set of{' '}
              actionable recommendations. These strategic
              proposals are focused on maximizing efficiency and trust.
            </p>
            <ol>
              <li>
                Mandatory @fsu.edu Verification: This is the
                top priority to establish a baseline of trust and safety
                (quantifiable success: 81.3% of users confirmed this would
                increase trust).
              </li>
              <li>
                AI Price Suggestion Tool: To combat Joe's
                "pricing uncertainty," a feature that suggests a fair market
                price would drastically reduce listing{' '}
                friction and cognitive load.
              </li>
              <li>
                Preset "Meetup Zones": To solve the logistical
                nightmare of meetups, the app should feature a map of
                pre-defined, safe, and well-lit public locations on campus.
              </li>
              <li>
                Accessibility-Labeled Meetups: A simple but
                critical feature. Meetup Zones should be tagged with
                accessibility information (e.g., "Wheelchair Accessible") to
                serve users like Brenda.
              </li>
              <li>
                User Rating & Reporting System: To build
                long-term community trust and weed out "ghosters," a simple
                rating system and a robust reporting feature are essential.
              </li>
            </ol>

            <h2>Reflection</h2>
            <p>
              This project was a fantastic exercise in{' '}
              mixed-methods research. The most valuable insight
              was the Data-Driven Pivot from my initial "safety-first"
              hypothesis. While safety was critical, the qualitative interviews
              revealed that convenience and efficiency were the more immediate
              blockers for users. This finding completely reshaped the feature
              recommendations toward a data-driven product strategy designed to
              reduce mental effort.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}