import { Button } from '@/components/ui/button'
import { ProficiencyLevel } from '../../app/types'

interface QuizStartProps {
  onStart: (level: ProficiencyLevel) => void
}

export default function QuizStart({ onStart }: QuizStartProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Python Proficiency Quiz</h1>
      <p className="mb-4">Select your proficiency level:</p>
      <div className="space-y-2">
        {(['beginner', 'intermediate', 'advanced', 'expert'] as ProficiencyLevel[]).map((level) => (
          <Button
            key={level}
            onClick={() => onStart(level)}
            className="w-full capitalize"
          >
            {level}
          </Button>
        ))}
      </div>
    </div>
  )
}