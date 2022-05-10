import React from "react";

import { Card } from "../components/homeComps/HomeCard";
import { HomeComps } from "../components/homeComps/HomeComps";
import PowderScreen from "../components/homeComps/PowderScreen";
const Home = () => {
  return (
    <div>
      <div className="bg-backgif min-w-screen min-h-screen bg-cover">
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-evenly md:items-center md:justify-around pt-20">
          <Card />
          <HomeComps />
        </div>
      </div>
      <PowderScreen />
    </div>
  );
};

export default Home;
