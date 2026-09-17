import type { QuestionProps } from './types/QuestionCharProps'
import './styles/answer.css'

export function Quiz ({ question, options, onAnswerSelected, theme }: QuestionProps) {
  return (
    <div className={`quiz-card--${theme}`}>
      <h2 className="quiz-title">{question}</h2>

      <ul className="quiz-options">
        {options.map((option) => (
          <li key={`${question}-${option.text}`} className="quiz-option">
            <button
              type="button"
              className={`quiz-button--${theme}`}
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