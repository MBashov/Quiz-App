export default function Results({ score, total, onRestart, onCategoryChange }) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-6">Your score {score} outh of {total}</p>
            <div className="flex justify-center space-x-4">
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={onRestart}
            >
                Restart Quiz
            </button>
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={onCategoryChange}
            >
                New Category
            </button>   
            </div>
          
        </div>
    );
}