import React from "react";
import gsap from "gsap";

const CustomCursor = () => {
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

window.addEventListener("mousemove", function (e) {
  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");
  cursorDot.style.left = e.x+"px"
  cursorDot.style.top = e.y+"px"
  gsap.to(cursorOutline, {
    x: e.x,
    y: e.y,
  });
});

export default CustomCursor;
