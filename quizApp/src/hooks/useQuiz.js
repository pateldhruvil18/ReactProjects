import { useState, useEffect } from "react"

export default function useQuiz(){
    const [questions, setQuestions] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(true)

    const fetchQuestion = () => {
        setLoading(true)
        fetch("https://opentdb.com/api.php?amount=5&category=18&type=multiple")
        .then((res) => res.json())
        .then((data) => {
            const formattedQuestion = data.results.map((q) => {
                const incorrectAnswers = q.incorrect_answers.map((answer) => (
                    {
                    answerText : answer,
                    isCorrect : false
                    }
                ));
                const correctAnswers = {
                    answerText: q.correct_answer,
                    isCorrect : true
                };
                const allAnswers = [...incorrectAnswers,correctAnswers].sort(
                    () => Math.random() - 0.5
                );

                return {
                    questionText : q.question,
                    answerOption : allAnswers,
                };
            });
            setQuestions(formattedQuestion);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchQuestion();
    },[]);

    const handleAnswerClick = (isCorrect) => {
        if(isCorrect) setScore(score+1);

        const nextindex = currentIndex + 1;
        if(nextindex < questions.length) {
            setCurrentIndex(nextindex);
        } else{
            setShowResult(true)
        }
    };

    const restartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setShowResult(false);
        fetchQuestion();
    };

    return {
        questions,
        currentIndex,
        score,
        showResult,
        loading,
        handleAnswerClick,
        restartQuiz,
    };
}
