export type QuestionCharacterOption = {
  text: string;
  character: string;
};

export type QuizOption = {
  text: string;
  value?: boolean;
  character?: string;
  image?: string;
};

export type QuestionProps = {
  question: string;
  questionImage?: string;
  options: QuizOption[];
  onAnswerSelected: (option: QuizOption) => void;
  theme?: 1 | 2 | 3 | 4 | 5;
};