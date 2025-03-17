import React, { useState } from 'react';
import './App.css'; // Import styles

const questions = [
  {
    question: "2*2 = ?",
    options: [
      { option: "4", isRight: true },
      { option: "6", isRight: false },
      { option: "8", isRight: false },
      { option: "2", isRight: false },
    ],
  },
  {
    question: "2*6 = ?",
    options: [
      { option: "12", isRight: true },
      { option: "3", isRight: false },
      { option: "8", isRight: false },
      { option: "21", isRight: false },
    ],
  },
  {
    question: "12*2 = ?",
    options: [
      { option: "14", isRight: false },
      { option: "6", isRight: false },
      { option: "8", isRight: false },
      { option: "24", isRight: true },
    ],
  },
];

function App() {
  const [number, setNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = (isRight) => {
    if (isRight) {
      setScore(score + 1);
    }
    const nextQues = number + 1;
    if (nextQues < questions.length) {
      setNumber(nextQues);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      {showResult ? (
        <div className="score-message">
          <h2>🎉 Hey, Congratulations! 🎉</h2>
          <p>Your Score: <span className="score">{score}/{questions.length}</span></p>
          <p>See you again! 👋</p>
        </div>
      ) : (
        <div>
          <div className="question">
            <h2>Question {number + 1}) {questions[number].question}</h2>
          </div>
          {questions[number].options.map((val, index) => (
            <button key={index} onClick={() => handleClick(val.isRight)}>
              {val.option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
