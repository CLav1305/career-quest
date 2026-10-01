export type MythOption = {
  text: string
  value: boolean
}

export type MythQuestion = {
  question: string
  correctAnswer: boolean
  options: MythOption[]
}