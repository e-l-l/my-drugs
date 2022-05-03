import React from "react";

export const Button = (props) => {
  return (
    <button className="bg-[#6262FF] text-white py-2 px-4 rounded md:ml-8 hover:bg-purple-700 duration-300 text-sm">
      {props.name}
    </button>
  );
};
