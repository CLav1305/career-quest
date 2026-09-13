// 5 personality questions to  find out what career character you are - multiple choice
import { Question } from '../components/Question.tsx'

export function Quiz() {

    return (
        <>
            <h1>Quiz</h1>
              <Question
                question="PICK ONE?"
                options={["A", "B", "C"]}
                onAnswerSelected={() => {}}
              />
        </>
            )
            
}