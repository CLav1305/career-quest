import type { QuestionProps } from './types/QuestionCharProps'
import './styles/quiz.css'
import { Pixel } from '@react-pixel-ui/react'

export function Quiz ({ question, options, onAnswerSelected, theme = 1 }: QuestionProps) {
  return (
    <div className={`quiz-card quiz-card--theme-${theme}`}>
      <h2 className="quiz-title kongtext">{question}</h2>

      <ul className={`quiz-options ${options.length === 2 ? 'quiz-options--two' : ''}`} id="quiz-options" role="listbox" aria-label="Quiz options">
        {options.map((option) => (
          <li key={`${question}-${option.text}`} className="quiz-option">
            <Pixel size={5}>
            <button
              type="button"
              className={`quiz-button quiz-button--theme-${theme}`}
              onClick={() => onAnswerSelected(option)}
            >
              {option.text}
            </button>
            </Pixel>
          </li>
        ))}
      </ul>
    </div>
  )
}