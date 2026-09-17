import { useNavigate } from 'react-router-dom'
import { Pixel } from '@react-pixel-ui/react'

export function Start() {
  const navigate = useNavigate()

  return (
    <main className="start-page">
      <div className="start-card">
        <h1 className="pixelify-sans start-title">Career Quest</h1>

        <p className="pixelify-sans start-subtitle">
          Discover your career character!
        </p>

        <Pixel size={5}>
          <button
            type="button"
            className="pixelify-sans start-button"
            onClick={() => navigate('/quiz')}
          >
            START
          </button>
        </Pixel>
      </div>
    </main>
  )
}