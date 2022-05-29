import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import ShopCard from "../components/ShopCard";
import { db } from "../firebase";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Shop = () => {
  const [meds, setMeds] = React.useState([]);

  useEffect(() => {
    const fetchMeds = async () => {
      let medList = [];
      const querySnapshot = await getDocs(collection(db, "meds"));
      querySnapshot.forEach((doc) => {
        medList.push({ ...doc.data(), id: doc.id });
      });
      setMeds(medList);
      // console.log(medList);
    };
    fetchMeds();
  }, []);
  console.log(meds);
  return (
    <div className="bg-dBlue min-w-full mt-[5.5rem] text-white">
      {meds.length === 0 ? (
        <div className="flex min-h-screen min-w-full justify-center items-center bg-loading"></div>
      ) : (
        <div>
          {/* {meds[0].name} */}
          <div className="flex justify-between md:text-4xl font-Montserrat font-bold text-center md:text-left text-2xl px-16 pt-10">
            <div>Our Products:</div>{" "}
            <div className="flex">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive ? "text-[#f47983] text-xl duration-100" : ""
                }
              >
                <AiOutlineShoppingCart />
              </NavLink>
            </div>
          </div>
          <div className="min-h-screen flex flex-wrap justify-center pt-10">
            {meds.map((med) => (
              <ShopCard
                id={med.id}
                name={med.name}
                type={med.type}
                img={med.img}
                price={med.price}
                qty={med.quantity}
                c={med.c}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Shop;
