import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
const ShopCard = (props) => {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <div classname=" flex flex-col justify-center items-center">
      <div className="bg-white text-dBlue h-[275px] rounded-md m-1 md:m-16">
        <div className="flex justify-center items-center w-[150px] h-[150px] px-2 overflow-hidden">
          <img src={props.img} alt="medimg" />
        </div>
        <div className="flex flex-col">
          <div className="text-center font-Montserrat font-bold">
            {props.name}
          </div>
          <div className="text-center font-spacemono">{props.type}</div>
        </div>
        <div className="flex justify-center text-white mt-3 font-spacemono">
          <div className="flex items-center flex-col text-xs p-1.5 bg-dBlue rounded-xl">
            <div>{props.qty} tablets</div>
            <div>cost: {props.price}rs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
