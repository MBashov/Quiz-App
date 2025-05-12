export default function Quiz({
    category,
    questionData,
    questionIndex,
    totalQuestions,
    onAnswer
}) {
    const { question, options } = questionData;

    return (
        <div className="text-slate-100">
            <h2 className="text-xl text-center text-white font-semibold mb-14">
                You are taking {['html', 'css'].includes(category) ? category.toUpperCase() : category[0].toUpperCase() + category.slice(1)} quiz
            </h2>
            <p className="mb-4 text-xl">
                {question}
            </p>
            <div className="space-y-2">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => onAnswer(opt)}
                        className="w-full py-2 px-4 border rounded hover:bg-sky-500"
                    >
                        {opt}
                    </button>
                ))}
            </div>
            <h3 className="text-m font-semibold mt-14">
                Question {questionIndex + 1} of {totalQuestions}
            </h3>
        </div>
    );
}