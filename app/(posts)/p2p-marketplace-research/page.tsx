import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "FSU Tech Connect: A P2P Marketplace Study — Nathan Smith"
  },
  description: "A mixed-methods study to uncover student needs for a peer-to-peer tech marketplace, translating research insights into actionable feature recommendations.",
}

export default function P2PMarketplacePage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/project1-bg.png')" }}
          className="project-color-blue"
        >
            <h1>FSU Tech Connect: A P2P Marketplace Study</h1>
            <p className="subtitle">A mixed-methods study to uncover student needs for a peer-to-peer tech marketplace, translating research insights into actionable feature recommendations.</p>
        </ParallaxHeader>

        <div className="imon-content-wrapper">
            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <p>A mixed-methods study to uncover student needs for a peer-to-peer tech marketplace, translating research insights into actionable feature recommendations.</p>
                </div>
            </div>
        </div>
    </div>
  )
}