import React from "react";
import user from "../assets/user.svg";

const NavBar = () => {
  return (
      <nav className="flex  justify-between fixed top-0 z-10 left-0 right-0 bg-white bg-opacity-10 backdrop-blur-lg shadow-sm ">
        <div className="flex items-center">
          <a href="/" className="no-underline">
            <h1 className="font-kalnia-400 font-normal text-3xl md:text-5xl m-5 text-contrast-3 ml-16">
              LuxSwipe
            </h1>
          </a>
        </div>
        <div className="flex font-poppins text-custom-size items-center">
          <a href="/" className="mx-4 text-base-2 no-underline hidden md:block">
            Home
          </a>
          <a
            href="#"
            className="mx-4 text-contrast-3 no-underline hidden md:block"
          >
            Login
          </a>
          <div className="flex items-center ml-20 mr-16">
            <a href="#">
              <img src={user} alt="user logo" />{" "}
              {/* This will be specailly handled after the backend is written using if-else blocks */}
            </a>
          </div>
        </div>
      </nav> 
  );
};

export default NavBar;
