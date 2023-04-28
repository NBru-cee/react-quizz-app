import React, { useState } from "react";
import Navbar from "./components/Navbar";
import QuizScreen from "./components/QuizScreen";
import JoinScreen from "./components/JoinScreen";

const App = () => {
     const [isQuizStarted, setIsQuizStarted] = useState(false);

     return (
          <>
               <Navbar />
               <div className="relative m-auto w-[95%] mt-[50px] max-w-[650px] min-h-[350px] bg-white border shadow-md shadow-black">
                    {isQuizStarted ? (
                         <QuizScreen retry={() => setIsQuizStarted(false)} />
                    ) : (
                         <JoinScreen start={() => setIsQuizStarted(true)} />
                    )}
               </div>
          </>
     );
};

export default App;
