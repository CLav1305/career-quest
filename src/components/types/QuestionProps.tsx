export type QuestionOption = {
  text: string;
  character?: string;
};

export type QuestionProps = {
  question: string;
  options: QuestionOption[];
  onAnswerSelected: (option: QuestionOption) => void;
};