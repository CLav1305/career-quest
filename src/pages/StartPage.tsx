import { useNavigate } from 'react-router-dom'
import { Pixel } from '@react-pixel-ui/react'
import '../styles/start.css'


export function Start() {
  const navigate = useNavigate()

  return (
    <main className="start-page">
      <div className="stars" aria-hidden="true">
      </div>

      <div className="start-card">
        <h1 className="kongtext start-title">Career Quest</h1>
        <p className="kongtext start-subtitle">Discover your career character!</p>

        <Pixel size={5}>
          <button
            type="button"
            className="kongtext start-button"
            onClick={() => navigate('/info')}
          >
            START
          </button>
        </Pixel>
      </div>
    </main>
  )
}