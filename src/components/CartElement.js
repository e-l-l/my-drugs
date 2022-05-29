import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";

const CartElement = (props) => {
  const [count, setCount] = React.useState(1);
  console.log(props.name);
  return (
    <div>
      <div className="flex">
        <div className="flex justify-center items-center w-[150px] h-[150px] px-2 overflow-hidden">
          <img src={props.img} alt="medimg" />
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col justify-center items-start">
            <div className="text-center font-Montserrat font-bold">
              {props.name}
            </div>
            <div className="text-center font-spacemono">{props.type}</div>
          </div>
          <div className="flex flex-col justify-center items-end font-spacemono text-xs">
            <div>price: {props.price}</div>
            <div>quantity: {props.qty}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <AiFillMinusCircle
          size={25}
          className="mx-1"
          onClick={() => {
            if(count > 0){
            setCount(count - 1);}
          }}
        />
        {count}
        <AiFillPlusCircle
          size={25}
          className="mx-1"
          onClick={() => {
            setCount(count + 1);
          }}
        />
      </div>
    </div>
  );
};

export default CartElement;
