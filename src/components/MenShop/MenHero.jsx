import React from "react";

import menHero from "../../img/men_hero.png";

// import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="bg-[#906750] h-[760px] bg-no-repeat bg-cover bg-center py-24 bg-Menhero overflow-hidden"
      id="menHeroPage"
    >

      {/* bg */}
      <div className="container mx-auto flex justify-around h-full z-20 w-[90vw]">
        <div className="flex flex-col justify-center z-20 ml-[4.5rem]">
          <div className="font-semibold flex items-center uppercase text-[1.5rem]">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-1.1 font-light mb-4 z-20">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold z-20 text-[70px]">MENS</span>
          </h1>
        </div>
        <div className="hidden lg:block z-30">
          <img src={menHero} alt="womanHero" className="z-30 h-[800px]" />
        </div>
      </div>

      <section id="section05" className="demo">
        <a href="#products">
          <span></span>
        </a>
      </section>
    </section>
  );
};


export default Hero;
