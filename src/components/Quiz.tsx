import type { QuestionProps } from './types/QuestionProps'
import './styles/quiz.css'
import { Pixel } from '@react-pixel-ui/react'
import { resolveAssetUrl } from '../utils/assetUrl'

// Renders a single question card with image and multiple choice answers.
export function Quiz ({ question, questionImage, options, onAnswerSelected, theme = 1 }: QuestionProps) {
  return (
    <div className={`quiz-card quiz-card--theme-${theme}`}>
      <h2 className="quiz-title kongtext">{question}</h2>

      {questionImage && (
        <div
          className="quiz-main-image-wrap"
          style={{ backgroundImage: `url(${resolveAssetUrl(questionImage)})` }}
          aria-label="Question background"
        />
      )}

      <ul className={`quiz-options ${options.length === 2 ? 'quiz-options--two' : ''}`} id="quiz-options" role="listbox" aria-label="Quiz options">
        {options.map((option) => (
          <li key={`${question}-${option.text}`} className="quiz-option">
            <Pixel size={3}>
              <button
                type="button"
                className={`quiz-button quiz-button--theme-${theme}`}
                onClick={() => onAnswerSelected(option)}
              >
                {option.image && (
                  <div className="quiz-option__img-wrap">
                    <img src={resolveAssetUrl(option.image)} alt="" className="quiz-option__img" />
                  </div>
                )}
                <span className="quiz-option__text">{option.text}</span>
              </button>
            </Pixel>
          </li>
        ))}
      </ul>
    </div>
  )
}