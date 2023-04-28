import React, { useState } from "react";
import QuestionList from "../assets/data.json";
import Question from "./Question";
import QuizResults from "./QuizResults";

const QuizScreen = ({ retry }) => {
     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
     const [markedAnswers, setMarkedAnswers] = useState(
          new Array(QuestionList.length)
     );
     const isQuestionEnd = currentQuestionIndex === QuestionList.length;
     const calculateResult = () => {
          let correct = 0;
          QuestionList.forEach((question) => {
               if (question.correctOptionIndex == markedAnswers[index]) {
                    correct++;
               }
          });
          return {
               total: QuestionList.length,
               correct,
               percentage: Math.trunc((correct / QuestionList.length) * 100),
          };
     };
     return (
          <div className="quiz-screen">
               {isQuestionEnd ? (
                    <QuizResults result={calculateResult()} retry={retry} />
               ) : (
                    <Question
                         question={QuestionList[currentQuestionIndex]}
                         totalQuestions={QuestionList.length}
                         currentQuestion={currentQuestionIndex}
                         setAnswer={(index) => {
                              setMarkedAnswers((arr) => {
                                   let newArr = [...arr];
                                   newArr[currentQuestionIndex - 1] = index;
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
