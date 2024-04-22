import React, { useState } from "react";
import CustomCursor from "../components/Global/CustomCursor";
import Header from "../components/Global/Header";
import Transition from "../Transition";
import CartItems from "./CartItems";
import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Checkout() {

  const [total, setTotal] = useState("0");

  const handleTotal = (data) => {
    setTotal(data);
  };

  const notify = () => {
    toast.success('Order Placed', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
      });
  }

  const placeOrder = () =>{
    // localStorage.removeItem("cart")
    notify();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const address = document.getElementById("address")

    // setTimeout(() => {
    //   location.reload();
    // }, 180000);
  }

  return (
    <>
      <CustomCursor />
      <Header delay={"0"} duration={"0"} />
      <div className="w-[100vw] flex justify-center">
        <div className="w-[90vw] flex flex-col justify-center mt-20 mb-20">
          {/* heading */}
          <div className="mb-[40px] text-7xl font-bold text-gray-800">
            Shopping Cart
          </div>

          {/* product header */}
          <div className="w-[90vw] justify-between px-20 py-10 bg-gray-200 hidden md:flex">
            <div className="text-2xl font-medium text-gray-700 w-[60%]">
              PRODUCT
            </div>
            <div className="flex justify-between w-[40%]">
              <div className="text-2xl font-medium text-gray-700">PRICE</div>
              <div className="flex justify-between w-[55%]">
                <div className=" text-2xl font-medium text-gray-700">
                  QUANTITY
                </div>
                <div className=" text-2xl font-medium text-gray-700">
                  SUBTOTAL
                </div>
              </div>
            </div>
          </div>
          <CartItems updateTotal={handleTotal} />

          <div className="flex flex-col justify-between w-[90vw] md:flex-row">
            {/* form */}
            <div className="mt-20 md:w-[44vw] py-20 flex flex-col gap-y-5 bg-gray-200 justify-center items-center w-[90vw]">
              <p className="text-3xl text-gray-700 font-medium mb-5">
                Please Fill In Your Details
              </p>
              <div className="flex w-[90%] gap-x-2 items-center">
                <input
                  type="text"
                  className=" w-full h-[5rem] px-5 py-5 rounded-md text-2xl border-2 border-gray-300"
                  placeholder="Name"
                  id = "name"
                />
              </div>
              <div className="flex w-[90%] gap-x-2 items-center">
                <input
                  type="email"
                  className=" w-full h-[5rem] px-5 py-5 rounded-md text-2xl border-2 border-gray-300"
                  placeholder="Email ID"
                  id = "email"
                />
              </div>
              <div className="flex w-[90%] gap-x-2 items-center">
                <input
                  type="text"
                  className=" w-full h-[5rem] px-5 py-5 rounded-md text-2xl border-2 border-gray-300"
                  placeholder="Address"
                  id = "address"
                />
              </div>
            </div>

            {/* order */}
            <div className="mt-20 md:w-[44vw] px-20 py-20 flex flex-col gap-y-[3vh] bg-gray-200 justify-center w-[90vw]">
              <div className="flex justify-between">
                <div className="text-xl">Subtotal</div>
                <div className="text-xl">Rs. {total}</div>
              </div>
              <div className="border-b border-solid border-gray-300"></div>
              <div className="flex justify-between">
                <div className="text-xl">Shipping</div>
                <div className="text-xl">Free Shipping</div>
              </div>
              <div className="border-b border-solid border-gray-300"></div>
              <div className="flex justify-between">
                <div className="text-xl">Total</div>
                <div className="text-xl">Rs. {total}</div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center items-center w-[100%] border-[4px] bg-black text-white text-[1.3rem] px-20 py-7 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500" onClick={placeOrder}>
                  Place Order Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Transition(Checkout);
