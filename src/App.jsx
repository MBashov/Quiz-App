import { useState } from 'react'

import StartSqreen from "./components/start-screen/StartScreen"
import Quiz from './components/quiz/Quiz';
import { quizData } from './data/qusetions';
import Results from './components/results/Results';

function App() {
    const [hasStarted, setHasStarted] = useState(false);

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const [category, setCategory] = useState(null);
    const [questions, setQuestions] = useState([]);

    const handleStart = (category) => {
        setCategory(category);
        setQuestions(quizData[category]);
        setHasStarted(true);
        setScore(0);
        setCurrent(0);
    };

    const restartQuiz = () => {
        setShowResults(false);
        setScore(0);
        setCurrent(0);
    };

    const changeCategory = () => {
        setHasStarted(false);
        setShowResults(false);
        setScore(0);
        setCurrent(0);
    };

    const handleAnsewr = (selected) => {

        const correct = questions[current].answer;
        if (correct === selected) {
            setScore((s) => s + 1);
        }

        const next = current + 1;

        if (next < questions.length) {
            setCurrent(next);
        } else {
            setShowResults(true);
        }
    };


    return (
        <div className="min-h-screen flex justify-center items-center p-4"
            style={{
                backgroundImage: "url('background.jpg')",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
            }}
        >
            <div className="p-8 rounded-lg shadow-md w-full max-w-md">
                {!hasStarted ? (<StartSqreen onStart={handleStart} />)
                    : showResults ? (<Results score={score} total={questions.length} onRestart={restartQuiz} onCategoryChange={changeCategory} />)
                        : (<Quiz
                            category={category}
                            questionData={questions[current]}
                            questionIndex={current}
                            totalQuestions={questions.length}
                            onAnswer={handleAnsewr}
                            retry={restartQuiz}
                        />)
                }

            </div>
        </div>
    )
}

export default App
