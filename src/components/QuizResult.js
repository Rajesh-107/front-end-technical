import React, { useState } from "react";

const QuizResult = ({ quiz }) => {
  const { newquestion, answers } = quiz;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currentAns, setCurrentAns] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let find = answers.find((answer) => answer._id === e.target.id);
    console.log(find);
    if (find.isTrue) {
      console.log("correct");
      setCurrentAns("True");
    } else {
      console.log("false");
      setCurrentAns("False");
    }
  };
  console.log(answers);

  return (
    <div>
      {quiz && (
        <>
          <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <h5>Question / {newquestion}</h5>
              <p className="text-green-600">Answer: {currentAns} </p>
            </figure>
            
            <div className="grid grid-cols-2">
              {/* <p>{newquestion[currentQuestion]}</p> */}
              {quiz.answers.map((answer) => {
                return (
                  <li className="m-7">
                    <button id={answer._id} onClick={handleClick}>
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
