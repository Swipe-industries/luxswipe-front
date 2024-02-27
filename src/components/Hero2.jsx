import React from "react";
import Marquee from "./Marquee";

function Hero2() {
  return (
    <>
      <div className="mt-14">
        <div className="flex items-center justify-center pb-10">
          <p className="text-contrast-3 font-poppins text-2xl md:text-3xl leading-tight tracking-tighter">
            Grab One For Yourself
          </p>
        </div>
        <div className="mx-auto mb-10 text-contrast-3 flex items-center justify-center font-poppins rounded-2xl w-80 h-44 md:w-[500px] md:h-64 bg-contrast-3 bg-opacity-10 backdrop-blur-lg shadow-lg border border-contrast-1/50 hover:border-contrast-1 overflow-hidden">
          <h6 className="mr-1 text-lg md:text-2xl">luxswipe.in/</h6>
          <Marquee>
            <span>rahul</span>
            <span>aditya</span>
            <span>adarsh</span>
            <span>siddarth</span>
            <span>vikram</span>
            <span>rahul</span>
            <span>aditya</span>
            <span>adarsh</span>
            <span>siddarth</span>
            <span>vikram</span>
            <span>rahul</span>
            <span>aditya</span>
            <span>adarsh</span>
            <span>siddarth</span>
            <span>vikram</span>
            <span>rahul</span>
            <span>aditya</span>
            <span>adarsh</span>
            <span>siddarth</span>
            <span>vikram</span>
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default Hero2;
