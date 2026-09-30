import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CharacterCard from '../components/CharacterCard'
import charactersData from '../data/characters.json'
import { resolveAssetUrl } from '../utils/assetUrl'

const resultLabels: Record<string, string> = {
  connector: 'Connector',
  explorer: 'Explorer',
  builder: 'Builder',
  problemSolver: 'Problem Solver',
}

const resultKeyToName: Record<string, string> = {
  connector: 'Connector',
  explorer: 'Explorer',
  builder: 'Builder',
  problemSolver: 'Problem Solver',
}

const characterIcons: Record<string, string> = {
  Builder: '/hammer.png',
  'Problem Solver': '/book.png',
  Explorer: '/tree.png',
  Connector: '/heart.png',
}

export function Results() {
  const [searchParams] = useSearchParams()
  const [result, setResult] = useState('builder')
  const [, setAnswers] = useState<Array<{ question: string; choice: string; character: string }>>([])
  const [isLoading, setIsLoading] = useState(searchParams.get('loading') === 'true')

  useEffect(() => {
    const savedResult = localStorage.getItem('careerQuestResult')
    console.log('savedResult=', savedResult, 'characters=', charactersData)
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
        <div className="result-card">
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
          <p className="kongtext">Matching your final character...</p>
        </div>
      </div>
    )
  }

  // Find matching character data from JSON using the result key
  const targetName = resultKeyToName[result] ?? resultLabels[result]
  const characters: Array<any> = charactersData as any
  const matched = characters.find((c) => c.name === targetName) ?? characters[0]

  const characterForCard = {
    ...matched,
    icon: <img src={resolveAssetUrl(characterIcons[matched.name])} alt="" />,
  }

  // Debug: log what we resolved so it's easy to inspect in the browser console
  // (remove these logs once you've confirmed the data is correct)
  // eslint-disable-next-line no-console
  console.debug('Results resolved character', { result, targetName, matched, characterForCard, charactersLength: characters.length })

  return (
    <main className="character-result">
      <CharacterCard character={characterForCard} />
    </main>
  )
}
