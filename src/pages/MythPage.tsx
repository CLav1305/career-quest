import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Quiz } from '../components/Quiz'
import mythQuestionsData from '../data/mythQuestions.json'
import '../styles/myth.css'
import type { MythQuestion } from '../components/types/MythProps'
import { Pixel } from '@react-pixel-ui/react'

function shuffleOptions<T>(items: T[]) {
  const nextItems = [...items]

  for (let index = nextItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[nextItems[index], nextItems[randomIndex]] = [nextItems[randomIndex], nextItems[index]]
  }

  return nextItems
}


const mythQuestions = (mythQuestionsData as { mythsQuestions: MythQuestion[] }).mythsQuestions

export function Myths() {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Array<{ question: string; selected: string; isCorrect: boolean }>>([])
  const [feedback, setFeedback] = useState<{ isCorrect: boolean; selected: string; correctAnswer: boolean } | null>(null)

  const currentQuestion = mythQuestions[currentQuestionIndex]
  const shuffledOptions = useMemo(
    () => shuffleOptions(currentQuestion?.options ?? []),
    [currentQuestionIndex],
  )

  const handleAnswer = (selectedOption: { text: string; value?: boolean; character?: string }) => {
    if (feedback) {
      return
    }

    const selectedValue = typeof selectedOption.value === 'boolean'
      ? selectedOption.value
      : false

    const isCorrect = selectedValue === currentQuestion.correctAnswer

    const nextAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        selected: selectedOption.text,
        isCorrect,
      },
    ]

    setAnswers(nextAnswers)
    localStorage.setItem('careerQuestMythAnswers', JSON.stringify(nextAnswers))
    setFeedback({
      isCorrect,
      selected: selectedOption.text,
      correctAnswer: currentQuestion.correctAnswer,
    })
  }

  const handleNext = () => {
    if (currentQuestionIndex === mythQuestions.length - 1) {
      navigate('/results?loading=true')
      return
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1)
    setFeedback(null)
  }

  if (!currentQuestion) {
    return <p className="loading-myth kongtext">Loading myths...</p>
  }

  return (
    <div className="myth-page">
      <h1 className="myth-title kongtext">Myth Check</h1>
      <p className="question-counter kongtext">
        Question {currentQuestionIndex + 1} of {mythQuestions.length}
      </p>
      <div style={{ height: '1rem' }} />
      <div style={{ height: '1.5rem' }} />
      <div style={{ height: '1.5rem' }} />
      {feedback ? (
        <div className="feedback-card">
          <div className={`feedback-mark ${feedback.isCorrect ? 'correct' : 'wrong'}`}>
            {feedback.isCorrect ? '✓' : '✕'}
          </div>

          <h2 className="feedback-title kongtext">{feedback.isCorrect ? 'Correct!' : 'Not quite...'}</h2>
          <p className="feedback-copy kongtext">
            You chose <strong>{feedback.selected}</strong>.
            {feedback.isCorrect
              ? ' That was the right answer.'
              : ` The correct answer was ${feedback.correctAnswer ? 'True' : 'False'}.`}
          </p>
          <Pixel size={4}>
          <button type="button" className="feedback-button kongtext" onClick={handleNext}>
            {currentQuestionIndex === mythQuestions.length - 1 ? 'RESULTS' : 'NEXT'}
          </button>
          </Pixel>
        </div>
      ) : (
        <Quiz
          question={currentQuestion.question}
          options={shuffledOptions.map((option) => ({
            text: option.text,
            value: option.value,
          }))}
          onAnswerSelected={handleAnswer}
        />
      )}
    </div>
  )
}
