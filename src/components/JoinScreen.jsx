import React from "react";

const JoinScreen = ({ start }) => {
     return (
          <div className="w-full h-[350px] flex flex-col items-center justify-center gap-[20px] text-center p-[20px]">
               <h2 className="text-[25px] text-[#111]">Join Quiz</h2>
               <p className="max-w-[350px] text-[#555]">
                    Come and take this awesome engineering quiz and get hired
                    after.
               </p>
               <button
                    onClick={start}
                    className="px-3 py-2 bg-black text-white cursor-pointer rounded-sm text-xl"
               >
                    Start
               </button>
          </div>
     );
};

export default JoinScreen;
