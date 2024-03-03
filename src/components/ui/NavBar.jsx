import React, { useState } from "react";
import OutlineBtn from "./OutlineBtn";
import SignUpModal from "../SignUpModal";
import LoginModal from "../LoginModal";

const NavBar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);

  return (
    <>
      <nav className="flex justify-between fixed top-0 z-10 left-0 right-0 bg-contrast-3 bg-opacity-10 backdrop-blur-lg shadow-sm rounded-3xl mt-3 mx-3 border border-contrast-1/50">
        <div className="flex items-center">
          <a href="/" className="no-underline">
            <h1 className="font-kalnia-400 font-normal text-3xl md:text-5xl m-5 text-contrast-3 md:ml-16">
              LuxSwipe
            </h1>
          </a>
        </div>
        <div className="flex font-poppins items-center">
          <a href="/" className="mx-4 text-base-1 no-underline hidden md:block">
            Home
          </a>
          <span
            role="button"
            onClick={() => setShowLogIn(true)}
            className="text-contrast-3 hover:text-base-1 md:block"
          >
            Login
          </span>
          <div className="flex items-center ml-5 md:ml-20 md:mr-16 mr-5">
            <OutlineBtn label="Sign-Up" onClick={() => setShowSignUp(true)} />
            {/* pass the event hadler as prop to deal the functionality of the button */}
          </div>
        </div>
      </nav>
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
      {/* this is called conditional rendering and I am passing onClose as a prop to the SignUpModal to give the close button a functioality */}
      {showLogIn && <LoginModal onClose={() => setShowLogIn(false)} />}
    </>
  );
};

export default NavBar;
