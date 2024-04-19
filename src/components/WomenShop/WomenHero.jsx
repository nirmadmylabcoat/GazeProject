import React, { useEffect } from "react";

import WomanHero from "../../img/woman_hero.png";
import leaf from "../../img/leaf.png";
import gsap from "gsap";

// import { Link } from "react-router-dom";

const Hero = () => {
  useEffect(()=>{
    const heroPage = document.querySelector("#womenHeroPage");
    const leafMove = document.querySelectorAll(".leaf");
  
    heroPage.addEventListener("mousemove", function (dets) {
      gsap.to(leafMove, {
        x: -dets.x / 30,
        y: -dets.y / 30,
      });
    });
  })
  return (
    <section
      className="bg-pink-200 h-[760px] bg-Womenhero bg-no-repeat bg-cover bg-center py-24"
      id="womenHeroPage"
    >
      {/* top leaves */}
      <div className="absolute z-10 leaf -mt-[40px] ml-[180px] rotate-90 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>
      <div className="absolute z-10 leaf mt-[50px] ml-[70px] rotate-90 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>

      {/* middle leaves*/}
      <div className="absolute z-10 leaf mt-[380px] ml-[500px] -rotate-90 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>
      <div className="absolute z-10 leaf mt-[420px] ml-[550px] scale-50 -rotate-45 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>

      {/* bottom */}
      <div className="absolute z-10 leaf mt-[560px] ml-[30px] -rotate-90 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>
      <div className="absolute z-10 leaf mt-[490px] ml-[140px] scale-50 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>

      {/* right bottom leaves */}
      <div className="absolute z-10 leaf mt-[490px] ml-[1350px] rotate-180 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>
      <div className="absolute z-10 leaf mt-[560px] ml-[1300px] -rotate-90 scale-75 opacity-55">
        <img src={leaf} alt="leaf" className="w-28" />
      </div>

      {/* bg */}
      <div className="container mx-auto flex justify-around h-full z-20 w-[90vw]">
        <div className="flex flex-col justify-center z-20 ml-[4.5rem]">
          <div className="font-semibold flex items-center uppercase text-[1.5rem]">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-1.1 font-light mb-4 z-20">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold z-20 text-[70px]">WOMENS</span>
          </h1>
        </div>
        <div className="hidden lg:block z-30">
          <img src={WomanHero} alt="womanHero" className="z-30" />
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
