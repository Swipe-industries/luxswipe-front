import React, { useState } from "react";
import OutlineBtn from "../../../reUseComponets/OutlineBtn";
import SignUpModal from "./SignUpModal";

const NavBar = () => {
  const [showSignUp, setSignUp] = useState(false);
  const openSignUp = () => setSignUp(true);
  const closeSignUp = () => setSignUp(false);

  return (
    <>
      <nav className="flex justify-between fixed top-0 z-10 left-0 right-0 bg-contrast-3 bg-opacity-10 backdrop-blur-lg shadow-sm">
        <div className="flex items-center">
          <a href="/" className="no-underline">
            <h1 className="font-kalnia-400 font-normal text-3xl md:text-5xl m-5 text-contrast-3 ml-16">
              LuxSwipe
            </h1>
          </a>
        </div>
        <div className="flex font-poppins text-custom-size items-center">
          <a href="/" className="mx-4 text-base-1 no-underline hidden md:block">
            Home
          </a>
          <a
            href="#"
            className="mx-4 text-contrast-3 hover:text-base-1 no-underline hidden md:block"
          >
            Login
          </a>
          <div className="flex items-center ml-20 mr-16">
            <OutlineBtn label="Sign-Up" onClick={openSignUp} />
            {/* pass the event hadler as prop to deal the functionality of the button */}
          </div>
        </div>
      </nav>
      {showSignUp && <SignUpModal onClose={closeSignUp} />}
      {/* this is called conditional rendering and I am passing onClose as a prop to the SignUpModal to give the close button a functioality */}
    </>
  );
};

export default NavBar;
