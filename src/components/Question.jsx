import React, { useState, useEffect, useRef } from "react";
import { flushSync } from "react-dom";

const Question = ({ question, totalQuestions, currentQuestion, setAnswer }) => {
     const [selectedOption, setSelectedOption] = useState(null);
     const timer = useRef(null);
     const progressBar = useRef(null);

     const gotoNextQuestion = () => {
          if (timer.current) {
               clearTimeout(timer.current);
          }
          const answer = selectedOption;
          setSelectedOption(null);
          const updateAnswer = () => setAnswer(answer);
          requestAnimationFrame(() => {
               flushSync(updateAnswer);
          });
     };

     useEffect(() => {
          progressBar.current.classList.remove("active");
          setTimeout(() => {
               progressBar.current.classList.add("active");
          }, 0);
          timer.current = setTimeout(gotoNextQuestion, 10 * 1000); // 10 seconds
          return gotoNextQuestion;
     }, [question]);

     return (
          <div className="question">
               <div className="progress-bar w-0 h-1" ref={progressBar}></div>
               <div className="my-[20px] mx-0 text-center text-[15px] text-[#555]">
                    <b>{currentQuestion - 1}</b> of <b>{totalQuestions - 1}</b>
               </div>
               <div className="px-[40px] py-[20px]">
                    <div className="title">
                         <span className="text-[15px] text-[#555] font-semibold">
                              Question:
                         </span>
                         <p className="mt-[5px] text-[#111]">
                              {question.title}
                         </p>
                    </div>
                    <div className="mx-0 my-[30px] flex justify-between flex-wrap gap-[]20px">
                         {question.options.map((option, index) => {
                              return (
                                   <div
                                        className={
                                             index == selectedOption
                                                  ? "option active"
                                                  : "option"
                                        }
                                        key={index}
                                        onClick={() => setSelectedOption(index)}
                                   >
                                        {option}
                                   </div>
                              );
                         })}
                    </div>
               </div>
               <div className="px-[20px] py-[10px] flex justify-end border-t border-t-[#eee]">
                    <button
                         onClick={gotoNextQuestion}
                         className="px-3 py-2 bg-[#111] text-white cursor-pointer rounded-sm text-xl"
                    >
                         Next
                    </button>
               </div>
          </div>
     );
};

export default Question;
