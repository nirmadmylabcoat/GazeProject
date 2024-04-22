import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import Header from "../components/Global/Header";
import Transition from "../Transition";

function Checkout() {
  return (
    <>
      <CustomCursor />
      <Header delay={"0"} duration={"0"} />
      <div className="w-[100vw] flex justify-center">
        <div className="w-[90vw] flex flex-col justify-center mt-20 mb-20">
          {/* heading */}
          <div className="mb-[40px] text-7xl font-bold ">
            Shopping Cart
          </div>

          {/* product header */}
          <div className="w-[90vw] flex justify-between px-20 py-10 bg-gray-200">
            <div className="text-2xl font-medium w-[60%]">
              PRODUCT
            </div>
            <div className="flex justify-between w-[40%]">
              <div className="text-2xl font-medium ">PRICE</div>
              <div className="flex justify-between w-[55%]">
                <div className=" text-2xl font-medium ">
                  QUANTITY
                </div>
                <div className=" text-2xl font-medium ">
                  SUBTOTAL
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between w-[90vw]">
            {/* form */}
            <div className="mt-20 w-[44vw] py-20 flex flex-col gap-y-5 bg-gray-200 justify-center items-center">
              <p className="text-3xl font-medium mb-5">
                Please Fill In Your Details
              </p>
              <div className="flex w-[90%] gap-x-2 items-center">
                <input
                  type="text"
                  className=" w-full h-[5rem] px-5 py-5 rounded-md text-2xl border-2 border-gray-300"
                  placeholder="Name"
                />
              </div>
              <div className="flex w-[90%] gap-x-2 items-center">
                <input
                  type="text"
                  className=" w-full h-[5rem] px-5 py-5 rounded-md text-2xl border-2 border-gray-300"
                  placeholder="Email ID"
                />
              </div>
              <div className="flex w-[90%] gap-x-2 items-center">
                <input
                  type="text"
                  className=" w-full h-[5rem] px-5 py-5 rounded-md text-2xl border-2 border-gray-300"
                  placeholder="Address"
                />
              </div>
            </div>

            {/* order */}
            <div className="mt-20 text-xl w-[44vw] px-20 py-20 flex flex-col gap-y-[3vh] bg-gray-200 justify-center">
                <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>Rs.</div>
                </div>
                <div className="border-b border-solid border-gray-300"></div>
                <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>Free Shipping :3 </div>
                </div>
                <div className="border-b border-solid border-gray-300"></div>
                <div className="flex justify-between">
                    <div>Total</div>
                    <div>Rs.</div>
                </div>
                <div className="flex justify-center">
                <div className="flex justify-center items-center w-[100%] border-[4px] bg-black text-white text-[1.3rem] px-20 py-7 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500">
                        Place Order Now
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition(Checkout);
