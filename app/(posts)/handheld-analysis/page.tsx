import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "The Gamer's Voice: A Reddit Data Analysis — Nathan Smith"
  },
  description: "A data-driven analysis using Python to scrape and analyze community discussions on Reddit, identifying key user pain points and feature opportunities for handheld gaming.",
}

export default function HandheldAnalysisPage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/project3-bg.png')" }}
          className="project-color-purple"
        >
            <h1>The Gamer's Voice: A Reddit Data Analysis</h1>
            <p className="subtitle">A data-driven analysis using Python to scrape and analyze community discussions on Reddit, identifying key user pain points and feature opportunities for handheld gaming.</p>
        </ParallaxHeader>

        <div className="imon-content-wrapper">
            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <p>A data-driven analysis using Python to scrape and analyze community discussions on Reddit, identifying key user pain points and feature opportunities for handheld gaming.</p>
                </div>
            </div>
        </div>
    </div>
  )
}