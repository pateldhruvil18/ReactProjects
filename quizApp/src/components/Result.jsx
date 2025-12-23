export default function Result ({score, total, restartQuiz}) {
    return(
        <div className="text-center">
            <h2 className="text-xl font-semibold mb-4">
                Your Score: {score} / {total}
            </h2>
            <button
            onClick={restartQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
                Restart Quiz
            </button>
        </div>
    );
}