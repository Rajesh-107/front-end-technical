import React, { useEffect, useState } from "react";
import QuizResult from "./QuizResult";

const QuestionCard = () => {
  const [quizs, setQuizs] = useState([]);


  useEffect(() => {
    fetch("http://localhost:3333/Newquestions")
      .then((res) => res.json())
      .then((data) => setQuizs(data));
  }, []);

// console.log(quizs)
  return (
  
				<>
					<div className='question-section'>
						<div className='question-count'>
							
						</div>
            <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary text-xl font-bold uppercase'>Wellcome to our Quiz app</h3>
                <h2 className='text-4xl'>Here is some Question</h2>
            </div>
            <div className='grid sm:grid=cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    quizs.map(quiz => <QuizResult
                    key={quiz._id}
                      quiz={quiz}
                      ></QuizResult>)
                }
            </div>
        </div>
                        
					</div>
				
				</>
			)}
		
  


export default QuestionCard;
