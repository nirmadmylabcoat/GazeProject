import React from "react";
import CustomCursor from "../components/Global/CustomCursor";
import Header from "../components/Global/Header";
import modelsaboutus from "/images/modelsaboutus.mp4";
import Transition from "../Transition";

const AboutUs = () => {
  return (
    <>
      <CustomCursor />
      <Header delay={"0"} duration={"0"} />
      <div className="w-full h-screen">
        <div className="flex justify-center">
          <video
            autoPlay
            loop
            muted
            className="w-full h-screen opacity-75 object-cover"
          >
            <source
              src={modelsaboutus}
              type="video/mp4"
              className="w-full h-screen"
            />
            <source
              src={modelsaboutus}
              type="video/ogg"
              className="w-full h-screen"
            />
          </video>
          <div className="text-white flex flex-col  gap-y-4 items-center justify-center z-100 w-[70vw] h-screen absolute">
            <div className="font-semibold text-5xl border-solid border-b py-4 border-white">About Us</div>
            <div className="font-light text-3xl text-center py-10">
              Welcome to Gaze, the epitome of inclusive fashion. Here, we
              believe that style knows no bounds, and our carefully curated
              collection of trendy and chic outfits reflects just that. From the
              streets to the runway, we ensure that every body type is
              celebrated and catered to, empowering individuals to embrace their
              unique style with confidence. Embracing diversity is at the heart
              of what we do, and our commitment to inclusivity shines through in
              our campaigns, where models from every race grace our showcases.
              Whether you're seeking sleek urban designs or elegant evening
              wear, Gaze offers a diverse range of styles to suit every taste
              and occasion. Join us on a journey of self-expression and
              empowerment through fashion, where every individual is not only
              seen but celebrated.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transition(AboutUs);
