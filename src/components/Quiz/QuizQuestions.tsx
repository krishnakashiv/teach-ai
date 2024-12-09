import { Button } from '@/components/ui/button'
import { Question, ProficiencyLevel } from '../../app/types'

interface QuizQuestionProps {
  question: Question
  onAnswer: (answer: string) => void
  questionNumber: number
  totalQuestions: number
  currentScore: number
  currentLevel: ProficiencyLevel
}

export default function QuizQuestion({ 
  question, 
  onAnswer, 
  questionNumber, 
  totalQuestions, 
  currentScore, 
  currentLevel 
}: QuizQuestionProps) {
  if (!question) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-2xl font-bold mb-4">Error: No question available</h2>
        <p className="text-lg mb-6">Please try restarting the quiz.</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Question {questionNumber} of {totalQuestions}</h2>
      <p className="text-lg mb-2">Current Score: {currentScore}</p>
      <p className="text-lg mb-2">Current Level: {currentLevel}</p>
      <p className="text-sm mb-6 text-gray-600">+10 points for correct answer, -10 for incorrect</p>
      <p className="text-lg mb-6">{question.question}</p>
      <div className="space-y-2 w-full max-w-md">
        {question.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => onAnswer(String.fromCharCode(97 + index))}
            className="w-full text-left justify-start"
          >
            {String.fromCharCode(97 + index)}. {option}
          </Button>
        ))}
      </div>
    </div>
  )
}

