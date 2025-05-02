export default function Quiz({
    category,
    questionData,
    questionIndex,
    totalQuestions,
    onAnswer
}) {
    const { question, options } = questionData;

    return (
        <div>
            <h2 className="text-xl text-center font-semibold mb-4">
                You are taking {category} quiz
            </h2>
            <h2 className="text-m font-semibold mb-4">
                Question {questionIndex + 1} of {totalQuestions}
            </h2>
            <p className="mb-4 text-gray-800">
                {question}
            </p>
            <div className="space-y-2">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => onAnswer(opt)}
                        className="w-full py-2 px-4 border rounded hover:bg-blue-100"
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}