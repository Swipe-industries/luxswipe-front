import React from "react";
import StartBtn from "./ui/StartBtn";


function Hero1() {

  return (
    <>
      <div className="pt-24 md:pt-16 md:pb-2 px-4 md:px-8 lg:px-16 mb-5">
        <div className="max-w-7xl mt-16 mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:-mt-[80px] md:mb-0 md:mr-0">
            {/* Left Div Content Goes Here */}
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-4">
              Hey, Creators! Let's create magic <br /> together
            </h3>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-0">
              Monetize your audience with <br /> personalized storefronts
            </h3>
            <p className="text-xs text-contrast-3 font-poppins mb-4">
              Stop creating web of stores and product links
            </p>
            <h3 className="text-2xl md:text-2xl lg:text-3xl font-kalnia-300 text-contrast-3 mb-0">
              Create a digital shop
            </h3>
            <p className="text-xs text-contrast-3 font-poppins mb-4">
              Where creativity meets connection <br />
              Join us and elevate your online presence today!
            </p>
            <div className="">
              <StartBtn label="Start Creating" />
            </div>
          </div>

          {/* Right Div Content Goes Here */}
          <div className="items-center justify-center md:w-auto md:h-auto relative w-96">
            <img src="https://ik.imagekit.io/luxswipe/phone-stack?updatedAt=1709037511739" alt="image of stack of phones" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero1;
