import React from "react";
import { TabText } from "../TabText";

export const HomeComps = () => {
  return (
    <div className="flex flex-col">
      <TabText content="Fresh from our factory." />
      <TabText content="Constantly quality-checked by our experts." />
      <TabText content="Medicine in its purest from." />
      <TabText content="Delivery guaranteed within 2 days." />
    </div>
  );
};
