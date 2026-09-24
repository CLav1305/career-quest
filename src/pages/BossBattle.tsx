import { useNavigate } from 'react-router-dom'
import '../styles/bossBattle.css'
import { Pixel } from '@react-pixel-ui/react'

export function BossBattle() {
  const navigate = useNavigate()

  return (
    <main className="boss-page">
      <div className="boss-card">
        <p className="boss-label kongtext">Final Boss Battle</p>
        <div className="boss-arena">
          <div className="boss-graphic" role="img" aria-label="Myth Monster">
          <div className="monster monster-helmet">
            <span className="helmet-crest" />
            <span className="helmet-brim" />
            <span className="monster-face">
              <i className="monster-eye monster-eye-left"/>
              <i className="monster-eye monster-eye-right"/>
              <i className="monster-teeth"/>
            </span>
            </div>
            <div className="monster monster-body">
              <span className="monster-shoulder shoulder-left"/>
              <span className="monster-shoulder shoulder-right"/>
              <span className="monster-belt"/>
              <span className="monster-arm monster-arm-left"/>
              <span className="monster-arm monster-arm-right"/>
            </div>
            <div className="monster monster-legs">
              <span className="monster-boot monster-boot-left"/>
              <span className="monster-boot monster-boot-right"/>
            </div>
            <div className="monster-sword" aria-hidden="true">
              <span className="sword-blade"/>
              <span className="sword-hilt"/>
              <span className="sword-grip"/>
            </div>
          </div>
          <div className="boss-background" />
        </div>
        <h1 className="boss-title kongtext">The Myth Monster Awakens</h1>
        <p className="boss-copy kongtext">
          Your journey through the realm has summoned the ancient creature of legend.
          Prepare for the final myth challenge.
        </p>
        <Pixel size={5}>
        <button type="button" className="boss-button kongtext"  onClick={() => navigate('/myths')}>
          Face the Monster
        </button>
        </Pixel>
      </div>
    </main>
  )
}
