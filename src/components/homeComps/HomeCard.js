import React from "react";

export const Card = () => {
  return (
    <div className="w-[70%] h-[200px] bg-dBlue bg-no-repeat text-white rounded-md flex flex-col justify-center items-center mt-5 md:mt-0 md:w-[30rem] md:h-[30rem] ">
      <div className="font-mono text-xs text-center">
        For legal reasons, we sell medicines
      </div>
      <div className="font-spacemono text-2xl">Best quality.</div>
      <div className="font-spacemono text-2xl">Best delivery.</div>
      <div className="font-spacemono text-2xl">Best security.</div>
    </div>
  );
};
