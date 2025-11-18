import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Rocket Money Web — Nathan Smith',
  },
  description:
    'Moderated usability testing of the Rocket Money web application.',
}

export default function RocketMoneyPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader speedFactor={0.4} className="project-color-black">
        <h1>Rocket Money Usability</h1>
        <p className="subtitle">
          Testing the web experience for a mobile-first product.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Project Overview</h2>
            <p>
              Rocket Money (formerly Truebill) began as a mobile-first
              application. While their mobile app is highly polished, web
              interfaces for mobile-first companies often suffer from a lack of
              optimization.
            </p>
            <p>
              As a graduate student project, I conducted a{' '}
              <strong>moderated usability test</strong> to evaluate the
              usability of their web application, specifically focusing on
              workflows relevant to "Premium" users who use the desktop version
              for deeper financial management.
            </p>

            <h2>The Challenge</h2>
            <p>
              My primary hypothesis was that because the service is primarily
              marketed towards mobile users, the web app might contain legacy
              design patterns or friction points not present in the app. Specifically, I wanted to test the
              intuitive nature of their <strong>pop-up based navigation</strong>
              —a pattern that keeps users on the dashboard rather than sending
              them to new pages.
            </p>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Methodology</h2>
            <ul>
              <li>
                <strong>Method:</strong> Moderated "Think Aloud" Usability Testing.
              </li>
              <li>
                <strong>Platform:</strong> Remote via screen sharing.
              </li>
              <li>
                <strong>Participants:</strong> 5-7 users matching "David"
                (Finance-focused professional) and "Sarah" (Busy marketing
                manager) personas.
              </li>
            </ul>

            <h3>Key Scenarios Tested</h3>
            <ol>
              <li>
                <strong>Transaction Management (Logic Rules):</strong> "You
                bought groceries at Walmart, but it was auto-categorized as a
                Restaurant. Change it, and create a 'Rule' so it never happens
                again."
              </li>
              <li>
                <strong>Subscription Cancellation:</strong> "You noticed a
                LinkedIn Premium charge you forgot about. Use Rocket Money to
                cancel it for you without visiting LinkedIn's site."
              </li>
            </ol>

            <div className="hmw-container not-prose">
              <div className="hmw-line"></div>
              <h2 className="hmw-text">
                "Can users intuitively navigate complex logic flows (like creating transaction rules) using Rocket Money's pop-up modal interface?"
              </h2>
              <div className="hmw-line"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <h2>Findings & Analysis</h2>
            <p>
              The study is currently in the synthesis phase. Early observations
              indicate that the "Pop-up" modality is actually highly effective
              for quick edits, preventing the user from losing context of their
              overall dashboard.
            </p>
            <p>
              However, specific friction was observed in the <strong>"Edit Rule"</strong> logic. Users struggled to differentiate between "Editing this transaction" vs "Creating a rule for future transactions," often missing the secondary CTA to apply the logic to *past* transactions.
            </p>

            <h2>Deliverables</h2>
            <p>
              The final output of this project will include a full usability
              report with heatmaps, time-on-task metrics, and a slide deck of
              recommendations to improve the "Rules" UI to make it more
              explicit.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}