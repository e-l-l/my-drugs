import React from "react";
import DButton from "../components/DButton.js";

const Safety = () => {
  return (
    <div>
      <div className='bg-[#13161E] min-h-screen flex flex-col justify-evenly md:items-center md:justify-around pt-20 text-white font-spacemono text-3xl'>
        <div>please do not buy medecines without prescription.</div>
        <DButton title="MORE INFORMATION" href="https://medlineplus.gov/ency/patientinstructions/000619.htm"/>
      </div>
       
    </div>
  );
};

export default Safety;
