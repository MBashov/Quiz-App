export default function Quiz({
    questionData,
    questionIndex,
    totalQuestions,
    onAnswer
}) {
    const { question, options } = questionData;

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
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