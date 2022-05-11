import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
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
    <div className="bg-dBlue min-w-full min-h-screen mt-20 text-white">
      {meds.length === 0 ? (
        <div>data not there</div>
      ) : (
        <div>{meds[0].name}</div>
      )}
    </div>
  );
};
export default Shop;
