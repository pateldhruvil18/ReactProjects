import React from 'react'
import useQuiz from './hooks/useQuiz'
import Quiz from './components/Quiz';
import Result from './components/Result';

export default function App() {
  const {
    questions,
    loading,
    currentIndex,
    score,
    showResult,
    handleAnswerClick,
    restartQuiz,
  } = useQuiz();

  if(loading)
    return <h2 className='text-center text-xl mt-10'>Loading Quiz...</h2>

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-lg'>
        <h1 className='text-2xl font-bold text-center mb-6'>React Quiz App</h1>
        {showResult ? (
          <Result 
           score={score} 
           total= {questions.length} 
           restartQuiz={restartQuiz}
          />
        ) : (
          <Quiz
           questions={questions}
           currentindex={currentIndex}
           handleAnswerClick={handleAnswerClick}
          />
        )}
      </div>
    </div>
  )
}