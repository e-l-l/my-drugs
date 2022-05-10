import React from "react";
import DButton from "../DButton";
const PowderScreen = () => {
  return (
    <div className="bg-explode min-w-screen min-h-screen bg-center bg-no-repeat">
      <div className="flex flex-col justify-center items-center min-w-screen min-h-screen text-white">
        {/* <div className="md:text-4xl font-Montserrat font-bold text-center text-2xl text-[#fff56c]">
          <div className="text-6xl">Our explosive new lineup.</div>
          <div> For the best Medicine experience Ever.</div>
        </div> */}
        <div className="md:text-4xl font-Montserrat font-bold text-center text-2xl">
          SAVE 20 % on your first order!
        </div>
        <div className="mt-10">
          <DButton title="SHOP NOW" href="/shop" />
        </div>
      </div>
    </div>
  );
};

export default PowderScreen;
