import React from "react";

export const TabText = (props) => {
  return (
    <div className="bg-dBlue rounded-full text-white p-4 md:p-6 md:text-base my-1 text-center font-spacemono text-xs">
      {props.content}
    </div>
  );
};
