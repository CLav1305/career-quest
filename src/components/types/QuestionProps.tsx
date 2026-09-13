export type QuestionProps = {
id: number;
category: 'character' | 'myth';
question: string;
options: string[];
onAnswerSelected: (option: string) => void;
};