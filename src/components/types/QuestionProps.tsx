export type Question = {
  id: number
  question: string
  options: QuizOption[]
}

export type QuestionProps = {
  question: string;
  questionImage?: string;
  options: QuizOption[];
  onAnswerSelected: (option: QuizOption) => void;
  theme?: 1 | 2 | 3 | 4 | 5;
};

export type QuizOption = {
  text: string;
  value?: boolean;
  character?: string;
  image?: string;
};