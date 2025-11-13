/* nthsm/portfolio/portfolio-1704bb279c5646eb9cac39f25da923cc404ed185/app/(posts)/handheld-analysis/page.tsx */
import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "Voice of the User: A Handheld Gaming Analysis — Nathan Smith"
  },
  description: "Using Python and sentiment analysis to identify user pain points and product opportunities from r/Handhelds community discussions.",
}

export default function HandheldAnalysisPage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/placeholder.png')" }}
        >
            <h1>Voice of the User: A Handheld Gaming Analysis</h1>
            <p className="subtitle">Using Python and sentiment analysis to identify user pain points and product opportunities from r/Handhelds community discussions.</p>
        </ParallaxHeader>

        <div className="imon-content-wrapper">
            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <p>A data analysis project involving the collection, categorization, and visualization of public Reddit data to identify recurring usability issues and feature requests within the handheld gaming community.</p>
                </div>
            </div>
        </div>
    </div>
  )
}