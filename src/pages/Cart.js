import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../firebase";
import CartElement from "../components/CartElement";
const Cart = () => {
  const [meds, setMeds] = React.useState([]);

  useEffect(() => {
    const fetchMeds = async () => {
      let medList = [];
      const querySnapshot = await getDocs(collection(db, "meds"));
      querySnapshot.forEach((doc) => {
        if (doc.data().c) {
          medList.push({ ...doc.data(), id: doc.id });
        }
      });
      setMeds(medList);
      console.log(medList);
    };
    fetchMeds();
  }, []);
  return (
    <div className="bg-dBlue min-h-screen min-w-full mt-[5.5rem] text-white">
      {meds.length === 0 ? (
        <div className="min-h-screen min-w-full text-5xl font-spacemono">
          NO ITEMS IN CART
        </div>
      ) : (
        <div className="flex min-h-screen justify-center elements-center py-10">
          <div className="w-[50%]">
            {meds.map((med) => (
              <CartElement
                id={med.id}
                name={med.name}
                type={med.type}
                img={med.img}
                price={med.price}
                qty={med.quantity}
              />
            ))}
          </div>
          {/* <div className="w-[50%]">hello</div> */}
        </div>
      )}
    </div>
  );
};

export default Cart;
