import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import MenHero from "../components/MenShop/MenHero";
import Header from "../components/Global/Header";
import Transition from "../Transition";


const WomenShop = () => {
  return (
    <>
      <Header bgColor={"#906750"}/>
      <MenHero />
      <CustomCursor />
    </>
  );
};


export default Transition(WomenShop)