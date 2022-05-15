import { increment } from "firebase/firestore";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
const ShopCard = () => {
  const [quantity, setQuantity] = React.useState(0);
  return (
    <main>
      <div className="bg-white rounded-md text-black p-5">
        <img
          src="https://www.netmeds.com/images/product-v1/600x600/918299/crocin_advance_tablet_20s_1_0.jpg"
          alt="medimg"
          width={200}
        />
        <div className=" text-black flex justify-end">
          <button
            className="px-1"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            <AiFillPlusCircle size={25} color="#13161E" />
          </button>
          <p>{quantity}</p>
          <button className="px-1">
            <AiFillMinusCircle
              size={25}
              color="#13161E"
              onClick={() => {
                if (quantity > 0) {
                  setQuantity(quantity - 1);
                }
              }}
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ShopCard;
