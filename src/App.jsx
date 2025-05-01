import { useState } from 'react'

import StartSqreen from "./components/start-screen/StartScreen"
import Quiz from './components/quiz/Quiz';
import { quizData } from './data/qusetions';

function App() {
    const [hasStarted, setHasStarted] = useState(false);

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);

    const handleStart = () => setHasStarted(true);

    const handleAnsewr = (selected) => {

        const correct = quizData[current].answer;
        if (correct === selected) {
            setScore((s) => s + 1);
        }

        const next = current + 1;

        if (next < quizData.length) {
            setCurrent(next);
        }
    }


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                {!hasStarted ? (<StartSqreen onStart={handleStart} />)
                    : (
                        <Quiz
                            questionData={quizData[current]}
                            questionIndex={current}
                            totalQuestions={quizData.length}
                            onAnswer={handleAnsewr}
                        />
                    )
                }

            </div>

        </div>
    )
}

export default App
