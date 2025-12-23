export default function Quiz({questions, currentindex, handleAnswerClick}){
    return(
        <div>
            <h2 className="text-lg font-semibold mb-2">
                Question {currentindex + 1}/{questions.length}
            </h2>
            <p
            className="mb-4"
            dangerouslySetInnerHTML={{
                __html : questions[currentindex].questionText,
            }}
            />
            <div className="grid grid-cols-2 gap-3">
                {questions[currentindex].answerOption.map((option,i) => (
                    <button
                    key={i}
                    onClick={()=>handleAnswerClick(option.isCorrect)}
                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
                    dangerouslySetInnerHTML={{__html: option.answerText}}
                    />
                ))}
            </div>
                
            

        </div>
    )
}