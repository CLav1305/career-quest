// reusable question component for quiz and myths pages
import type { QuestionProps } from './types/QuestionProps';
import './styles/questions.css';
import { characterQuestions } from '../data/characterQuestions.json';
import { mythQuestions } from '../data/mythQuestions.json';

export function Question({ question, options, onAnswerSelected }: QuestionProps) {
  return (
    <div className="question">
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSelected(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}   