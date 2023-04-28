import React, { useState } from "react";
import QuestionList from "../assets/data.json";

const QuizScreen = () => {
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
     const [markedAnswers, setMarkedAnswers] = useState(
          new Array(QuestionList.length)
     );
     const isQuestionEnd = currentQuestionIndex === QuestionList.length;
     return (
          <div className="quiz-screen">
               {isQuestionEnd ? (
                    <QuizResults />
               ) : (
                    <Question
                         question={QuestionList[currentQuestionIndex]}
                         totalQuestions={QuestionList.length}
                         currentQuestion={currentQuestionIndex}
                         setAnswer={(index) => {
                              setMarkedAnswers((arr) => {
                                   let newArr = [...arr];
                                   newArr[currentQuestionIndex] = index;
                                   return newArr;
                              });
                              setCurrentQuestionIndex[currentQuestionIndex + 1];
                         }}
                    />
               )}
          </div>
     );
};

export default QuizScreen;
