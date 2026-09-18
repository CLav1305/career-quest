import type { QuestionProps } from './types/QuestionCharProps'
import './styles/questions.css'

export function Quiz ({ question, options, onAnswerSelected, theme = 1 }: QuestionProps) {
  return (
    <div className={`quiz-card quiz-card--theme-${theme}`}>
      <h2 className="quiz-title">{question}</h2>

      <ul className="quiz-options">
        {options.map((option) => (
          <li key={`${question}-${option.text}`} className="quiz-option">
            <button
              type="button"
              className={`quiz-button quiz-button--theme-${theme}`}
              onClick={() => onAnswerSelected(option)}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}