import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import MenHero from "../components/MenShop/MenHero";
import Header from "../components/Global/Header";
import Transition from "../Transition";
import ProductList from "../components/ProductList/ProductList";


const WomenShop = () => {
  return (
    <>
    <CustomCursor />
      <Header bgColor={"#906750"} delay={"0"} duration={"0"}/>
      <MenHero />
      <ProductList gender={"men"}/>
    </>
  );
};


export default Transition(WomenShop)