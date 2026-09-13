// reusable answer component for quiz and myths pages
import type { AnswerProps } from './types/AnswerProps';

export function Answer({ answer, onAnswerSelected }: AnswerProps) {
  return (
    <div className="answer">
      <button onClick={() => onAnswerSelected(answer)}>{answer}</button>
    </div>
  );
}