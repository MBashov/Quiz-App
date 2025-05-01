export default function Results({ score, total }) {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
            <p className="text-lg mb-6">Your score {score} outh of {total}</p>
        </div>
    );
}