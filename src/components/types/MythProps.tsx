export type MythQuestion = {
  question: string
  correctAnswer: boolean
  options: [
    { text: 'True', value: true },
    { text: 'False', value: false }
  ]
}