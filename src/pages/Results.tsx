import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const resultLabels: Record<string, string> = {
  connector: 'Connector',
  explorer: 'Explorer',
  builder: 'Builder',
  problemSolver: 'Problem Solver',
}

export function Results() {
  const [searchParams] = useSearchParams()
  const [result, setResult] = useState('builder')
  const [answers, setAnswers] = useState<Array<{ question: string; choice: string; character: string }>>([])
  const [isLoading, setIsLoading] = useState(searchParams.get('loading') === 'true')

  useEffect(() => {
    const savedResult = localStorage.getItem('careerQuestResult')
    const savedAnswers = localStorage.getItem('careerQuestAnswers')

    if (savedResult) {
      setResult(savedResult)
    }

    if (savedAnswers) {
      try {
        setAnswers(JSON.parse(savedAnswers))
      } catch {
        setAnswers([])
      }
    }

    if (searchParams.get('loading') === 'true') {
      const timer = window.setTimeout(() => {
        setIsLoading(false)
      }, 2500)

      return () => window.clearTimeout(timer)
    }
  }, [searchParams])

  if (isLoading) {
    return (
      <div className="result-loading">
        <div className="pixel-loader">
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
          <span className="pixel-loader__segment" />
        </div>
        <p>Summoning your final character...</p>
      </div>
    )
  }

  return (
    <div>
      <h1>Your Career Character</h1>
      <h2>{resultLabels[result]}</h2>

      <p>
        <Link to="/">Start again</Link>
      </p>
    </div>
  )
}
