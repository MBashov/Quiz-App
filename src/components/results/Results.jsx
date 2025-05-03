export default function Results({ score, total, onRestart, onCategoryChange }) {
    return (
        <div className="text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-3">Your score {score} outh of {total}</p>
            {score < 5 && <p className="mb-5 text-3xl">😟</p> }
            {(score >= 5 && score < 8) && <p className="mb-5 text-3xl">😊</p> }
            {score >= 8 && <p className="mb-5 text-3xl">🤩</p> }
            <div className="flex justify-center sky-500 space-x-4">
            <button
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
                onClick={onRestart}
            >
                Restart Quiz
            </button>
            <button
                className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600"
                onClick={onCategoryChange}  
            >
                New Category
            </button>   
            </div>
        </div>
    );
}