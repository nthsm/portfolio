/* nthsm/portfolio/portfolio-1cbbc9c3841a09b2ca11cb0e3961ebe0c769bf6e/app/(posts)/sleeper-research/page.tsx */
import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "Sleeper vs. Competitors: A Usability Benchmark of Social Features — Nathan Smith"
  },
  description: "A comparative usability study analyzing how Sleeper's core social features (chat, media sharing) perform against key competitors. This project identifies key friction points and strategic opportunities to enhance user engagement and solidify Sleeper's mission to connect friends over sports.",
}

export default function SleeperResearchPage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/project5-bg.png')" }}
          className="project-color-navy"
        >
            <h1>Sleeper vs. Competitors: A Usability Benchmark of Social Features</h1>
            <p className="subtitle">A comparative usability study analyzing how Sleeper's core social features (chat, media sharing) perform against key competitors. This project identifies key friction points and strategic opportunities to enhance user engagement and solidify Sleeper's mission to connect friends over sports.</p>
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