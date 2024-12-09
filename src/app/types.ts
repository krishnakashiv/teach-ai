export type ProficiencyLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert'

export interface Question {
  question: string
  options: string[]
  correct_option: string
}

export interface QuizState {
  started: boolean
  finished: boolean
  currentLevel: ProficiencyLevel
  currentQuestionIndex: number
  score: number
  questions: Question[]
}

