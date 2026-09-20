import { useNavigate } from 'react-router-dom'
import '../styles/bossBattle.css'

export function BossBattle() {
  const navigate = useNavigate()

  return (
    <main className="boss-page">
      <div className="boss-card">
        <p className="boss-label">Final Boss Battle</p>

        <div className="boss-graphic" aria-label="Myth monster boss illustration">
          <div className="horn horn-left" />
          <div className="horn horn-right" />
          <div className="cheek cheek-left" />
          <div className="cheek cheek-right" />
          <div className="eye eye-left" />
          <div className="eye eye-right" />
          <div className="mouth" />
          <div className="snout" />
        </div>

        <h1 className="boss-title">The Myth Monster Awakens</h1>
        <p className="boss-copy">
          Your journey through the realm has summoned the ancient creature of legend.
          Prepare for the final myth challenge.
        </p>

        <button type="button" className="boss-button" onClick={() => navigate('/myths')}>
          Face the Monster
        </button>
      </div>
    </main>
  )
}
