import { useState } from 'react'

import StartSqreen from "./components/start-screen/StartScreen"
import Quiz from './components/quiz/Quiz';

function App() {
    const [hasStarted, setHasStarted] = useState(false);

    const handleStart = () => setHasStarted(true);


    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

                {!hasStarted ? (<StartSqreen onStart={handleStart} />)
                    : (<Quiz />)
                }

            </div>

        </div>
    )
}

export default App
