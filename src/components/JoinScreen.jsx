import React from "react";

const JoinScreen = ({ start }) => {
     return (
          <div className="join-screen">
               <h2>Join Quiz</h2>
               <p>
                    Come and take this awesome engineering quiz and get hired
                    after.
               </p>
               <button onClick={start}>Start</button>
          </div>
     );
};

export default JoinScreen;
