import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Quiz } from '../components/Quiz'
import type { QuestionCharacterOption } from '../components/types/QuestionCharProps'
import characterQuestionsData from '../data/characterQuestions.json'


type Question = {
  id: number
  question: string
  options: QuestionCharacterOption[]
}

const questions = (characterQuestionsData as { characterQuestions: Question[] }).characterQuestions
const themes: Array<1 | 2 | 3 | 4 | 5> = [1, 2, 3, 4, 5]

function getTopCharacter(scores: Record<string, number>) {
  return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
}

export function QuizPage() {
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [scores, setScores] = useState<Record<string, number>>({
    connector: 0,
    explorer: 0,
    builder: 0,
    problemSolver: 0,
  })
  const [answers, setAnswers] = useState<Array<{ question: string; choice: string; character: string }>>([])

  const currentQuestion = questions[currentQuestionIndex]

  const handleAnswer = (selectedOption: QuestionCharacterOption) => {
    const nextScores = {
      ...scores,
      [selectedOption.character]: (scores[selectedOption.character] ?? 0) + 1,
    }

    const nextAnswers = [
      ...answers,
      {
        question: currentQuestion.question,
        choice: selectedOption.text,
        character: selectedOption.character,
      },
    ]

    setScores(nextScores)
    setAnswers(nextAnswers)
    localStorage.setItem('careerQuestAnswers', JSON.stringify(nextAnswers))

    if (currentQuestionIndex === questions.length - 1) {
      const topCharacter = getTopCharacter(nextScores)
      localStorage.setItem('careerQuestResult', topCharacter)
      navigate('/myths')
      return
    }

    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  if (!currentQuestion) {
    return <p>Loading questions...</p>
  }

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-600">Career Quest</h1>
      <p>
        Question {currentQuestionIndex + 1} of {questions.length}
      </p>
      <Quiz
        question={currentQuestion.question}
        options={currentQuestion.options}
        onAnswerSelected={handleAnswer}
        theme={themes[currentQuestionIndex]}
      />
    </>
  )
}

