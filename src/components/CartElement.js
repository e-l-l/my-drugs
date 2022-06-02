import { reload } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";

const CartElement = (props) => {
  // let navigate = useNavigate();
  const [count, setCount] = React.useState(1);
  const noCart = async () => {
    await setDoc(doc(db, "meds", props.id), {
      c: false,
      img: props.img,
      name: props.name,
      price: props.price,
      quantity: props.qty,
      type: props.type,
    });
    console.log("removed");
  };
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
            if (count > 1) {
              setCount(count - 1);
            } else if (count === 1) {
              setCount(count - 1);
              noCart();
              // navigate("/cart");
              window.location.reload();
            }
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
