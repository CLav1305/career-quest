import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/info.css'

const LOADING_DURATION_MS = 3200

export function InfoPage() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startTime = performance.now()
    let frameId: number

    const tick = (now: number) => {
      const elapsed = now - startTime
      const nextProgress = Math.min(100, (elapsed / LOADING_DURATION_MS) * 40)
      setProgress(nextProgress)

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(tick)
      } else {
        window.setTimeout(() => navigate('/quiz'), 3000)
      }
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [navigate])

  return (
    <main className="info-page">
      <div></div>
      <div className="info-card">
        <div>
        </div>
        <p className="kongtext info-message">
          The pixel world is loading you in. Several paths lie ahead, every choice you make from here shapes your journey. Time to choose...
        </p>

        <div
          className="info-loading-bar"
          role="progressbar"
          aria-valuenow={Math.round(progress)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="info-loading-bar__fill"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="kongtext info-loading-percent">{Math.round(progress)}%</p>
      </div>
    </main>
  );
}

