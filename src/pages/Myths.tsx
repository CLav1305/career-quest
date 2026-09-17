import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Quiz } from '../components/Quiz'
import mythQuestionsData from '../data/mythQuestions.json'

type MythOption = {
  text: string
  value: boolean
}

type MythQuestion = {
  question: string
  correctAnswer: boolean
  options: MythOption[]
}

const mythQuestions = (mythQuestionsData as { mythsQuestions: MythQuestion[] }).mythsQuestions

export function Myths() {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Array<{ question: string; selected: string; isCorrect: boolean }>>([])

  const currentQuestion = mythQuestions[currentQuestionIndex]

  const handleAnswer = (selectedOption: { text: string; value?: boolean; character?: string }) => {
    const selectedValue = typeof selectedOption.value === 'boolean'
      ? selectedOption.value
      : selectedOption.character === 'true'

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

    if (currentQuestionIndex === mythQuestions.length - 1) {
      navigate('/results')
      return
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (!currentQuestion) {
    return <p>Loading myths...</p>
  }

  return (
    <div>
      <h1>Myth Check</h1>
      <p>
        Question {currentQuestionIndex + 1} of {mythQuestions.length}
      </p>
      <Quiz
        question={currentQuestion.question}
        options={currentQuestion.options.map((option) => ({
          text: option.text,
          value: option.value,
        }))}
        onAnswerSelected={handleAnswer}
      />
    </div>
  )
}
