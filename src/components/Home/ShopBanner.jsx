import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";

const ShopBanner = () => {
  return (
    <motion.div
      className="shopbanner"
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.8, delay: 0 }}
    >
      <div className="flex justify-center w-[100vw] mt-10">
      <div className="flex justify-between w-[90vw]">
        {/* men */}
        <div className="w-[44vw] flex flex-col items-center relative">
          <div>
            <img src="/images/modelman.jpg" alt="men" />
          </div>
          <div className="z-10 border-4 top-[80%] md:top-[80%] absolute border-solid border-white text-white text-2xl md:text-3xl px-8 md:px-20 py-4 md:py-8 transition-all hover:bg-white hover:border-white hover:text-black">
            <Link to="/menshop">Shop Men</Link>
          </div>
        </div>

        {/* women */}
        <div className="w-[44vw] flex flex-col items-center relative">
          <div>
            <img src="/images/modelwoman.jpg" alt="women" />
          </div>
          <div className="z-10 border-4 top-[80%] md:top-[80%] absolute border-solid border-white text-white text-2xl md:text-3xl px-8 md:px-20 py-4 md:py-8 transition-all hover:bg-white hover:border-white hover:text-black">
            <Link to="/womenshop">Shop Women</Link>
          </div>
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default ShopBanner;
