import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import WomenHero from "../components/WomenShop/WomenHero";
import Header from "../components/Global/Header";
import Transition from "../Transition";
import ProductList from "../components/ProductList/ProductList";

const WomenShop = () => {
  return (
    <>
      <CustomCursor />
      <Header bgColor={"#f7d7d2"} delay={"0"} duration={"0"}/>
      <WomenHero />
      <ProductList />
    </>
  );
};

export default Transition(WomenShop);
