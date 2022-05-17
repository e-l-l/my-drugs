import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import ShopCard from "../components/ShopCard";
import { db } from "../firebase";
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
          <div className="md:text-4xl font-Montserrat font-bold text-center md:text-left text-2xl px-10 pt-10">
            Our Products:
          </div>
          <div className="min-h-screen flex flex-wrap justify-evenly pt-10">
            {/* <ShopCard/> */}
            {meds.map((med) => (
              <ShopCard
                name={med.name}
                type={med.type}
                img={med.img}
                price={med.price}
                qty={med.quantity}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Shop;
