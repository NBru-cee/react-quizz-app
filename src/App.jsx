import React, { useState } from "react";
import Navbar from "./components/Navbar";
import QuizScreen from "./components/QuizScreen";
import JoinScreen from "./components/JoinScreen";

const App = () => {
     const [isQuizStarted, setIsQuizStarted] = useState(false);

     return (
          <div className="bg-[#f5f5f5]">
               <Navbar />
               <div className="quiz-container">
                    {isQuizStarted ? (
                         <QuizScreen retry={() => setIsQuizStarted(false)} />
                    ) : (
                         <JoinScreen start={() => setIsQuizStarted(true)} />
                    )}
               </div>
          </div>
     );
};

export default App;
