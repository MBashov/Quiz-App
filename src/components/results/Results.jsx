export default function Results({ score, total, onRestart }) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-6">Your score {score} outh of {total}</p>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hoover:bg-blue-600"
                onClick={onRestart}
            >
                Restart Quiz
            </button>
        </div>
    );
}