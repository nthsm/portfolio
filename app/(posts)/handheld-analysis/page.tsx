import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "The Handheld Gamer's Voice — Nathan Smith"
  },
  description: "Analyzing Reddit discussions for handheld gaming pain points.",
}

export default function HandheldAnalysisPage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/project3-bg.png')" }}
          className="project-color-purple"
        >
            <h1>The Handheld Gamer's Voice</h1>
            <p className="subtitle">Analyzing Reddit discussions for handheld gaming pain points.</p>
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