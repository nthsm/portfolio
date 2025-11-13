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
        style={{ backgroundImage: "url('/project1-bg.png')" }}
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
            <p>Now in progress...</p>
          </div>
        </div>
      </div>
    </div>
  )
}
