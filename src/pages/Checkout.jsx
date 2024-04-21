import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import Header from "../components/Global/Header";
import Transition from "../Transition";

function Checkout() {
  return (
    <>
    <CustomCursor />
      <Header bgColor={"#906750"} delay={"0"} duration={"0"}/>
      
    </>
  )
}


export default Transition(Checkout)