import { Button } from '@/components/ui/button'
import { ProficiencyLevel } from '../../app/types'
import Link from 'next/link'

interface QuizResultProps {
  score: number
  level: ProficiencyLevel
  onReset: () => void
}

export default function QuizResult({ score, level, onReset }: QuizResultProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-xl mb-2">Your final score: {score}</p>
      <p className="text-lg mb-6">Final proficiency level: {level}</p>
      <div className="space-x-4">
        <Button onClick={onReset}>Take Quiz Again</Button>
        <Link href="/" className="inline-block">
          <Button variant="outline">Back to Home</Button>
        </Link>
      </div>
    </div>
  )
}

