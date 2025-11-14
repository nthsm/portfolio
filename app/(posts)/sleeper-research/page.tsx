import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: 'Sleeper vs. Competitors — Nathan Smith',
  },
  description:
    "Usability benchmark comparing Sleeper's social features to competitors.",
}

export default function SleeperResearchPage() {
  return (
    <div className="imon-parallax-container">
      <ParallaxHeader
        speedFactor={0.4}
        className="project-color-navy"
      >
        <h1>Sleeper vs. Competitors</h1>
        <p className="subtitle">
          Usability benchmark comparing Sleeper's social features to
          competitors.
        </p>
      </ParallaxHeader>

      <div className="imon-content-wrapper">
        <div className="content-section">
          <div className="imon-content-inner clearfix">
            <p>Now in progress...</p>
          </div>
        </div>
      </div>
    </div>
  )
}