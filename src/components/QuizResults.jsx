import React from "react";

const QuizResults = ({ result, retry }) => {
     return (
          <div className="w-full h-[350px] flex flex-col justify-center items-center gap-[20px]">
               <h2 className="text-lg font-bold">
                    Result: {result.percentage}%
               </h2>
               <p>
                    Selected {result.correct} correct options out of
                    {result.total} questions.
               </p>
               <button
                    onClick={retry}
                    className="px-3 py-2 bg-[#111] text-white cursor-pointer rounded-sm text-xl"
               >
                    Retry
               </button>
          </div>
     );
};

export default QuizResults;
