'use client'

import { useState, useEffect } from 'react'
import QuizStart from '../../components/Quiz/QuizStart'
import QuizQuestion from '../../components/Quiz/QuizQuestions'
import QuizResult from '../../components/Quiz/QuizResult'
import { QuizState, ProficiencyLevel, Question } from '../types'
import { questions } from '../data/questions'
import Link from 'next/link'

const QUESTIONS_PER_QUIZ = 6
const SCORE_THRESHOLDS = {
  beginner: 0,
  intermediate: 25,
  advanced: 50,
  expert: 75
}

export default function QuizPage() {
  const [quizState, setQuizState] = useState<QuizState>({
    started: false,
    finished: false,
    currentLevel: 'beginner' as ProficiencyLevel,
    currentQuestionIndex: 0,
    score: 0,
    questions: [],
  })

  const startQuiz = (level: ProficiencyLevel) => {
    const initialScore = SCORE_THRESHOLDS[level]
    const initialQuestions = generateQuestions(level, initialScore)
    setQuizState({
      started: true,
      finished: false,
      currentLevel: level,
      currentQuestionIndex: 0,
      score: initialScore,
      questions: initialQuestions,
    })
  }

  const generateQuestions = (level: ProficiencyLevel, score: number): Question[] => {
    let newQuestions: Question[] = []
    let currentScore = score

    for (let i = 0; i < QUESTIONS_PER_QUIZ; i++) {
      const questionLevel = getQuestionLevel(currentScore)
      const availableQuestions = questions[questionLevel].filter(
        q => !newQuestions.includes(q)
      )
      
      if (availableQuestions.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableQuestions.length)
        newQuestions.push(availableQuestions[randomIndex])
      } else {
        // If we run out of questions, use questions from the next available level
        const nextLevel = getNextLevel(questionLevel)
        if (nextLevel) {
          const nextLevelQuestions = questions[nextLevel].filter(
            q => !newQuestions.includes(q)
          )
          if (nextLevelQuestions.length > 0) {
            const randomIndex = Math.floor(Math.random() * nextLevelQuestions.length)
            newQuestions.push(nextLevelQuestions[randomIndex])
          }
        }
      }

      // Simulate answering a question to adjust the score for the next question selection
      currentScore += 10 // Assume correct answer for score progression
      currentScore = Math.min(currentScore, 100) // Cap at 100
    }

    return newQuestions
  }

  const getQuestionLevel = (score: number): ProficiencyLevel => {
    if (score >= SCORE_THRESHOLDS.expert) return 'expert'
    if (score >= SCORE_THRESHOLDS.advanced) return 'advanced'
    if (score >= SCORE_THRESHOLDS.intermediate) return 'intermediate'
    return 'beginner'
  }

  const getNextLevel = (level: ProficiencyLevel): ProficiencyLevel | null => {
    const levels: ProficiencyLevel[] = ['beginner', 'intermediate', 'advanced', 'expert']
    const currentIndex = levels.indexOf(level)
    return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null
  }

  const answerQuestion = (answer: string) => {
    const currentQuestion = quizState.questions[quizState.currentQuestionIndex]
    if (!currentQuestion) {
      setQuizState(prevState => ({ ...prevState, finished: true }))
      return
    }

    const isCorrect = answer === currentQuestion.correct_option

    let newScore = quizState.score + (isCorrect ? 10 : -10)
    newScore = Math.max(0, Math.min(newScore, 100))  // Ensure score is between 0 and 100

    const newQuestionIndex = quizState.currentQuestionIndex + 1
    const isFinished = newQuestionIndex >= QUESTIONS_PER_QUIZ

    setQuizState(prevState => ({
      ...prevState,
      score: newScore,
      currentQuestionIndex: newQuestionIndex,
      currentLevel: getQuestionLevel(newScore),
      finished: isFinished,
    }))
  }

  const resetQuiz = () => {
    setQuizState({
      started: false,
      finished: false,
      currentLevel: 'beginner',
      currentQuestionIndex: 0,
      score: 0,
      questions: [],
    })
  }

  useEffect(() => {
    if (quizState.currentQuestionIndex >= QUESTIONS_PER_QUIZ) {
      setQuizState(prevState => ({ ...prevState, finished: true }))
    }
  }, [quizState.currentQuestionIndex])

  if (!quizState.started) {
    return <QuizStart onStart={startQuiz} />
  }

  if (quizState.finished) {
    return <QuizResult score={quizState.score} level={quizState.currentLevel} onReset={resetQuiz} />
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  if (!currentQuestion) {
    return <QuizResult score={quizState.score} level={quizState.currentLevel} onReset={resetQuiz} />
  }

  return (
    <div>
      <Link href="/" className="absolute top-4 left-4 text-blue-500 hover:text-blue-700">
        Back to Home
      </Link>
      <QuizQuestion
        question={currentQuestion}
        onAnswer={answerQuestion}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={QUESTIONS_PER_QUIZ}
        currentScore={quizState.score}
        currentLevel={quizState.currentLevel}
      />
    </div>
  )
}

