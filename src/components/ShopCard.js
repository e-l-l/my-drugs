
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
const ShopCard = () => {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <main>
      <div className="bg-white rounded-md text-black px-3">
        <img
          src="https://www.netmeds.com/images/product-v1/600x600/918299/crocin_advance_tablet_20s_1_0.jpg"
          alt="medimg"
          width={200}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <div className="text-center font-Montserrat font-bold">crocin500</div>
          <div className="text-center font-spacemono">paracetamol</div>
        </div>
        <div className="flex text-white mt-3 font-spacemono">
          <div className="flex items-center flex-col text-xs p-2 bg-dBlue rounded-xl">
            <div>20 tablets</div>
            <div>cost: 20rs</div>
          </div>
        </div>
        <div className=" flex justify-end pb-2">
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
    </main>
  );
};

export default ShopCard;
