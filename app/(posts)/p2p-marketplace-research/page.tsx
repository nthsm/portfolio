/* nthsm/portfolio/portfolio-1704bb279c5646eb9cac39f25da923cc404ed185/app/(posts)/p2p-marketplace-research/page.tsx */
import type { Metadata } from 'next'
import { ParallaxHeader } from '@/components/ui/ParallaxHeader'

export const metadata: Metadata = {
  title: {
    absolute: "FSU P2P Tech Marketplace: A User Research Deep Dive — Nathan Smith"
  },
  description: "A mixed-methods research study analyzing FSU student behaviors, needs, and pain points regarding peer-to-peer tech marketplaces, culminating in data-driven feature recommendations.",
}

export default function P2PMarketplacePage() {
  return (
    <div className="imon-parallax-container">
        <ParallaxHeader 
          speedFactor={0.4} 
          style={{ backgroundImage: "url('/placeholder.png')" }}
        >
            <h1>FSU P2P Tech Marketplace: A User Research Deep Dive</h1>
            <p className="subtitle">A mixed-methods research study analyzing FSU student behaviors, needs, and pain points regarding peer-to-peer tech marketplaces, culminating in data-driven feature recommendations.</p>
        </ParallaxHeader>

        <div className="imon-content-wrapper">
            <div className="content-section">
                <div className="imon-content-inner clearfix">
                    <p>A mixed-methods research study using surveys and interviews to understand the pain points, behaviors, and needs of the FSU student community when trading used tech.</p>
                </div>
            </div>
        </div>
    </div>
  )
}