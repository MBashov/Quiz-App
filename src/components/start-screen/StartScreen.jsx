import { useState } from "react";

export default function StartSqreen({ onStart }) {

    const [category, setCategory] = useState('general');

    const handleSubmit = (e) => {
        e.preventDefault();
        onStart(category);
    }

    return (
        <form onSubmit={handleSubmit} className="text-center space-y-6">
            <h1 className="text-3xl font-bold mb-6 text-white">Welcome to the React Quiz</h1>
            <p className="text-lg text-white mb-4">Test your knowledge and see how much you know!</p>
            <p className="text-lg text-white mb-2">Select a category to begin:</p>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-blue-400 border p-2 rounded w-full max-w-xs ms-auto border-white text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="general">General</option>
                <option value="javascript">Javascript</option>
                <option value="react">React</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="python">Python</option>
            </select>
            <button
                type="submit"
                className="bg-fuchsia-500 text-white px-6 py-2 rounded-full hover:bg-fuchsia-600 transition"
            >
                Start Quiz
            </button>
        </form>
    );
}