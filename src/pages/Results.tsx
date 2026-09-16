import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const resultLabels: Record<string, string> = {
  connector: 'Connector',
  explorer: 'Explorer',
  builder: 'Builder',
  problemSolver: 'Problem Solver',
}

export function Results() {
  const [result, setResult] = useState('builder')
  const [answers, setAnswers] = useState<Array<{ question: string; choice: string; character: string }>>([])

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
  }, [])

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
