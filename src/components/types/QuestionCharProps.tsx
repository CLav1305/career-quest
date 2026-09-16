export type QuestionCharacterOption = {
  text: string;
  character: string;
};


export type QuestionProps = {
  question: string;
  options: QuestionCharacterOption[];
  onAnswerSelected: (option: QuestionCharacterOption) => void;
  theme?: 1 | 2 | 3 | 4 | 5
};