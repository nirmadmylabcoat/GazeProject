import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import WomenHero from "../components/WomenShop/WomenHero";
import Header from "../components/Global/Header";
import Transition from "../Transition";

const WomenShop = () => {
  return (
    <>
      <CustomCursor />
      <Header bgColor={"#f7d7d2"} delay={"0"} duration={"0"}/>
      <WomenHero />
    </>
  );
};

export default Transition(WomenShop);
