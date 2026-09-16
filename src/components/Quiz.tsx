import type { QuestionProps } from './types/QuestionProps'
import './styles/questions.css'

export function Quiz ({ question, options, onAnswerSelected }: QuestionProps) {
  return (
    <div className="question">
      <h2>{question}</h2>
      <ul>
        {options.map((option) => (
          <li key={`${question}-${option.text}`}>
            <button type="button" onClick={() => onAnswerSelected(option)}>
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
