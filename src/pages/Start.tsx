import { useNavigate } from 'react-router-dom'
import { Pixel } from '@react-pixel-ui/react'
import '../styles/start.css'


export function Start() {
  const navigate = useNavigate()

  return (
    <main className="start-page">
      <div className="start-card">
        <h1 className="kongtext start-title">Career Quest</h1>
        <br />
        <p className="kongtext">
          Discover your career character!
        </p>
        <br />
        <Pixel size={5}>
          <button
            type="button"
            className="kongtext start-button"
            onClick={() => navigate('/quiz')}
          >
            START
          </button>
        </Pixel>
      </div>
    </main>
  )
}