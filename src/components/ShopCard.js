import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { db } from "../firebase";
const ShopCard = (props) => {
  const [toggle, setToggle] = React.useState(false);
  const addToCart = async () => {
    await setDoc(doc(db, "meds", props.id), {
      c: !toggle,
      img: props.img,
      name: props.name,
      price: props.price,
      quantity: props.qty,
      type: props.type,
    });
    setToggle(!toggle);
  };
  return (
    <div classname=" flex flex-col justify-center items-center">
      <div className="bg-white text-dBlue h-[300px] rounded-md m-1 md:m-16">
        <div className="flex justify-center items-center w-[150px] h-[150px] px-2 overflow-hidden">
          <img src={props.img} alt="medimg" />
        </div>
        <div>
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
        <div className="flex justify-center items-center mt-3"><button
          className="text-dBlue font-spacemono text-sm"
          onClick={addToCart}
        >
          {toggle? "remove from cart" : "add to cart"}
        </button></div>
      </div>
    </div>
  );
};

export default ShopCard;
