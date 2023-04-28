import React from "react";

const QuizResults = ({ result }) => {
     return (
          <div className="result-screeen">
               <h2>Result: {result.percentage}%</h2>
               <p>
                    Selected {result.correct} correct options out of
                    {result.total}questions
               </p>
          </div>
     );
};

export default QuizResults;
