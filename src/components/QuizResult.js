import React, { useState } from "react";

const QuizResult = ({ quiz }) => {
  const { newquestion, answers } = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleClick = (isTrue) => {
    if (isTrue) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < newquestion.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {newquestion}
        </div>
      ) : (
        <>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <h5>Question / {newquestion}</h5>
            </figure>
            <div className="card-body items-center text-center">
              <p>{newquestion[currentQuestion]}</p>
              {quiz.answers.map((answer) => {
                return (
                  <li>
                    <button onClick={() => handleClick(answer.isTrue)}>
                      {answer.text}
                    </button>
                  </li>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizResult;
