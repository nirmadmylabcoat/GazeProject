import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Global/Header.jsx";
import itemData from "../components/ProductList/Data.jsx";
import CustomCursor from "../components/Global/CustomCursor";
import Transition from "../Transition";
import { FaStoreAlt } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { ToastContainer, toast,Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDisplay = () => {  

  const notify = () => {
    toast.success('Added to cart', {
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

  function addToCart(productId,productSize){
    let prevCart = localStorage.getItem("cart")
    if(prevCart){
      prevCart = JSON.parse(prevCart)
      if(productId in prevCart)
      {
        if(prevCart[productId].includes(productSize) ){
          console.log("check");
        }
        else{
          prevCart[productId] = [...prevCart[productId],productSize]
        }
      }
      else{
        prevCart[productId] = [productSize]
      }
      localStorage.setItem("cart",JSON.stringify(prevCart));

    }
    else{
      let cart = {}
      cart[productId] = [productSize]
      localStorage.setItem("cart",JSON.stringify(cart));
    }
    notify();
  }
  


  const { id } = useParams();
  // const [hovered, setHovered] = useState(null);
  const item = itemData.find((item) => {
    return item.id === parseInt(id);
  });

  const [size, setSize] = useState("XS");

  return (
    <>
      <CustomCursor />
      <Header delay={"0"} duration={"0"} />
      <div className="w-[100vw] flex justify-center">
        <div className="w-[90vw] flex lg:flex-row gap-x-20 mt-10 mb-10 flex-col sm:gap-10">
          <div
            className="h-[75vh] flex gap-x-2"
            // onMouseEnter={() => setHovered(index)} // Set this item as hovered
            // onMouseLeave={() => setHovered(null)} // Reset when not hovered
          >
            <img
              // src={hovered === index ? item.imageHover : item.image}
              src={item.image}
              alt={item.name}
              className="h-full w-[400px] object-cover"
            />
            <img
              // src={hovered === index ? item.imageHover : item.image}
              src={item.imageHover}
              alt={item.name}
              className="h-full w-[400px] object-cover hidden md:block"
            />
          </div>
          <div className="flex flex-col gap-y-8 lg:w-[30vw] sm:w-[55vw]">
            <div className="flex flex-col gap-y-[0.25rem]">
              <div className="font-semibold text-[3rem] text-gray-800">
                {item.name}
              </div>
              <div>
                <p className="text-gray-500 font-light">
                  MRP inclusive of all taxes
                </p>
                <p className="font-medium text-gray-800 text-3xl">
                  Rs. {item.price}
                </p>
              </div>
            </div>
            <div className="font-medium text-gray-800 text-2xl flex ">
              {item.description}
            </div>
            <div className="flex flex-col gap-y-2">
              <div>
                <p className="text-xl">Sizes</p>
              </div>
              <div className="flex gap-x-[1rem] w-[43.5rem]">
                <div
                  className={`text-2xl border-solid border-gray-400 hover:border-gray-600 transition-all duration-300 border-[1px] px-[32px] py-[10px] ${
                    size == "XS" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize("XS")}
                >
                  XS
                </div>
                <div
                  className={`text-2xl border-solid border-gray-400 hover:border-gray-600 transition-all duration-300 border-[1px] px-[32px] py-[10px] ${
                    size == "S" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize("S")}
                >
                  {" "}
                  S
                </div>
                <div
                  className={`text-2xl border-solid border-gray-400 hover:border-gray-600 transition-all duration-300 border-[1px] px-[32px] py-[10px] ${
                    size == "M" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize("M")}
                >
                  {" "}
                  M
                </div>
                <div
                  className={`text-2xl border-solid border-gray-400 hover:border-gray-600 transition-all duration-300 border-[1px] px-[32px] py-[10px] ${
                    size == "L" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize("L")}
                >
                  {" "}
                  L
                </div>
                <div
                  className={`text-2xl border-solid border-gray-400 hover:border-gray-600 transition-all border-[1px] px-[32px] py-[10px] ${
                    size == "XL" ? "bg-black text-white" : ""
                  }`}
                  onClick={() => setSize("XL")}
                >
                  {" "}
                  XL
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center w-[43.5rem] border-[4px] bg-black text-white text-[1.5rem] px-20 py-8 hover:shadow-2xl hover:scale-[1.01] transition-all duration-500" onClick={() => addToCart(item.id,size)}>
              <div>
                <LiaShoppingBagSolid className="w-20 h-10" />
              </div>
              <div>Add To Cart</div>
            </div>
            <div className="flex flex-col gap-y-2">
              <div className="text-xl flex items-center gap-x-4">
                <div>
                  <FaStoreAlt />
                </div>
                <div>Available in stores</div>
              </div>
              <div className="text-xl flex items-center gap-x-4">
                <div className="text-2xl">
                  <TbTruckDelivery />
                </div>
                <div>Delivery Time : 2-7 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Transition(ProductDisplay);
