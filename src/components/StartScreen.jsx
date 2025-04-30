export default function StartSqreen() {
   return (
    <div className="text-center mt-20">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the React Quiz</h1>
        <p className="text-lg text-gray-600 mb-8">Test your knowledge and see how much you know!</p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-200">
            Start Quiz
        </button>
    </div>
   );
}