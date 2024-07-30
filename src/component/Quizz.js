import React, { useState, useEffect } from 'react';
import './Css/styles.css';

const Quizz = () => {
    // Define questions for depression quiz
    const depressionQuestions = [
        "Little interest or pleasure in doing things?",
        "Feeling down, depressed, or hopeless?",
        "Trouble falling or staying asleep, or sleeping too much?",
        "Feeling tired or having little energy?",
        "Poor appetite or overeating?",
        "Feeling bad about yourself - or that you are a failure or have let yourself or your family down?",
        "Trouble concentrating on things, such as reading the newspaper or watching television?",
        "Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual?",
        "Thoughts that you would be better off dead or of hurting yourself in some way?"
    ];

    // Define questions for anxiety quiz
    const anxietyQuestions = [
        "Feeling nervous, anxious, or on edge?",
        "Not being able to stop or control worrying?",
        "Worrying too much about different things?",
        "Trouble relaxing?",
        "Being so restless that it is hard to sit still?",
        "Becoming easily annoyed or irritable?",
        "Feeling afraid as if something awful might happen?"
    ];

    // Initialize scores using React state
    const [depressionScore, setDepressionScore] = useState(0);
    const [anxietyScore, setAnxietyScore] = useState(0);

    // State to store user responses
    const [responses, setResponses] = useState({});

    // Function to handle user response change
    const handleResponseChange = (quizId, questionIndex, value) => {
        setResponses(prevResponses => ({
            ...prevResponses,
            [`${quizId}-question-${questionIndex}`]: value
        }));
    };

    // Function to calculate scores based on user responses
    const calculateScores = (questions, quizId) => {
        let score = 0;
        questions.forEach((question, index) => {
            const responseValue = parseInt(responses[`${quizId}-question-${index}`]);
            if (!isNaN(responseValue)) {
                score += responseValue;
            }
        });
        return score;
    };

    // Function to display quiz results
    const displayResults = () => {
        // Display results
        return (
            <div>
                <p>Depression Score: {depressionScore}</p>
                <p>Anxiety Score: {anxietyScore}</p>
            </div>
        );
    };

    // Load quizzes when the component is mounted

    // Function to create quiz questions
    const createQuiz = (questions, quizId) => {
        return questions.map((question, index) => (
            <div className="question" key={index}>
                <p>{question}</p>
                {/* Radio buttons for responses */}
                <div>
                    <input
                        type="radio"
                        id={`${quizId}-question-${index}-0`}
                        name={`${quizId}-question-${index}`}
                        value="0"
                        onChange={() => handleResponseChange(quizId, index, 0)}
                    />
                    <label htmlFor={`${quizId}-question-${index}-0`}>Not at all</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id={`${quizId}-question-${index}-1`}
                        name={`${quizId}-question-${index}`}
                        value="1"
                        onChange={() => handleResponseChange(quizId, index, 1)}
                    />
                    <label htmlFor={`${quizId}-question-${index}-1`}>Several days</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id={`${quizId}-question-${index}-2`}
                        name={`${quizId}-question-${index}`}
                        value="2"
                        onChange={() => handleResponseChange(quizId, index, 2)}
                    />
                    <label htmlFor={`${quizId}-question-${index}-2`}>More than half the days</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id={`${quizId}-question-${index}-3`}
                        name={`${quizId}-question-${index}`}
                        value="3"
                        onChange={() => handleResponseChange(quizId, index, 3)}
                    />
                    <label htmlFor={`${quizId}-question-${index}-3`}>Nearly every day</label>
                </div>
                {/* Repeat similar for other options */}
            </div>
        ));
    };
    useEffect(() => {
        createQuiz(depressionQuestions, 'depression-quiz');
        createQuiz(anxietyQuestions, 'anxiety-quiz');
    }, []);


    // Event handler for submit button
    const handleSubmit = () => {
        // Calculate scores
        const newDepressionScore = calculateScores(depressionQuestions, 'depression-quiz');
        const newAnxietyScore = calculateScores(anxietyQuestions, 'anxiety-quiz');

        // Update state with new scores
        setDepressionScore(newDepressionScore);
        setAnxietyScore(newAnxietyScore);
        console.log(setDepressionScore);
        console.log(setAnxietyScore)
    };

    return (
        <div className='body1'>
            <div className="p-4">
                <h1 className="text-3xl"><u>Depression Quiz</u></h1>
                <div id="depression-quiz" className="quiz">
                    {createQuiz(depressionQuestions, 'depression-quiz')}
                </div>
                <hr class="w-48 h-1 mx-auto my-4 bg-white-100 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                <h1 className="text-3xl"><u>Anxiety Quiz</u></h1>
                <div id="anxiety-quiz" className="quiz">
                    {createQuiz(depressionQuestions, 'depression-quiz')}
                </div>
                {/* Other quiz content */}
                <button id="submit" onClick={handleSubmit}
                    class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
                    Hover me!
                    <span
                        class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
                    <span
                        class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
                    <span
                        class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
                    <span
                        class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Submit!</span>
                </button>
                {/* Display results */}
                <div id="results">
                    {displayResults()}
                </div>
                <div class="scale-container">
                    <h2>PHQ-9 Depression Score Scale</h2>
                    <table class="scale-table">
                        <thead>
                            <tr>
                                <th>Score Range</th>
                                <th>Depression Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0 - 4</td>
                                <td>Minimal or None</td>
                            </tr>
                            <tr>
                                <td>5 - 9</td>
                                <td>Mild</td>
                            </tr>
                            <tr>
                                <td>10 - 14</td>
                                <td>Moderate</td>
                            </tr>
                            <tr>
                                <td>15 - 19</td>
                                <td>Moderately Severe</td>
                            </tr>
                            <tr>
                                <td>20 - 27</td>
                                <td>Severe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="scale-container">
                    <h2>GAD-7 Anxiety Score Scale</h2>
                    <table class="scale-table">
                        <thead>
                            <tr>
                                <th>Score Range</th>
                                <th>Anxiety Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0 - 4</td>
                                <td>Minimal or None</td>
                            </tr>
                            <tr>
                                <td>5 - 9</td>
                                <td>Mild</td>
                            </tr>
                            <tr>
                                <td>10 - 14</td>
                                <td>Moderate</td>
                            </tr>
                            <tr>
                                <td>15 - 21</td>
                                <td>Severe</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Quizz;
