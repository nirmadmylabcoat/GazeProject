import React, {useEffect} from "react";
import gsap from "gsap";

const CustomCursor = () => {
  useEffect(()=>{
    const cursorDot = document.getElementById("cursor-dot");
    const cursorOutline = document.getElementById("cursor-outline");
  
    window.addEventListener("mousemove", function (e) {
      cursorDot.style.left = e.x+"px"
      cursorDot.style.top = e.y+"px"
      gsap.to(cursorOutline, {
        x: e.x,
        y: e.y,
      });
    });
  })
  return (
    <>
      <div
        className="w-[5px] h-[5px] bg-black fixed translate-x-[-50%] translate-y-[-50%] rounded-full z-40 pointer-events-none"
        id="cursor-dot"
      ></div>
      <div
        className="w-[30px] h-[30px] border-2 border-solid border-gray-500 fixed translate-x-[-50%] translate-y-[-50%] rounded-full z-40 pointer-events-none"
        id="cursor-outline"
      ></div>
    </>
  );
};


export default CustomCursor;
