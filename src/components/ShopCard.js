import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
const ShopCard = (props) => {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <main>
      <div className="bg-white rounded-md text-black px-3">
        <img src={props.img} alt="medimg" width={200} className="rounded-md" />
        <div className="flex flex-col">
          <div className="text-center font-Montserrat font-bold">
            {props.name}
          </div>
          <div className="text-center font-spacemono">{props.type}</div>
        </div>
        <div className="flex text-white mt-3 font-spacemono">
          <div className="flex items-center flex-col text-xs p-2 bg-dBlue rounded-xl">
            <div>{props.qty} tablets</div>
            <div>cost: {props.price}rs</div>
          </div>
        </div>
        <div className=" flex pb-2 justify-between">
          <BsFillCartPlusFill />
          <div className="flex">
            <AiFillPlusCircle
              size={25}
              color="#13161E"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            />
            <p className="px-1 font-spacemono">{quantity}</p>
            <AiFillMinusCircle
              size={25}
              color="#13161E"
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ShopCard;
