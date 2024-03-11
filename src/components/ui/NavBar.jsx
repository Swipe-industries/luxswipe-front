import React, { useState } from "react";
import OutlineBtn from "./OutlineBtn";
import LoginModal from "../LoginModal";
import ModalContainer from "../ModalContainer";

const NavBar = () => {

  const [showModalContainer, setShowModalContainer] = useState(false);
  const [showLogIn, setShowLogIn] = useState(false);
  const [loginColor, setLoginColor] = useState("contrast-3");
  const [homeColor, setHomeColor] = useState("base-1");

  const openLogin = () => {
    setShowLogIn(true);
    setLoginColor("base-1");
    setHomeColor("contrast-3")
  };

  const closeLogin = () => {
    setShowLogIn(false);
    setLoginColor("contrast-3");
    setHomeColor("base-1")
  };

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
          <a href="/" className={`mx-4 text-${homeColor} no-underline hidden md:block`}>
            Home
          </a>
          <span
            role="button"
            onClick={openLogin}
            className={`text-${loginColor} hover:text-base-1 md:block`}
          >
            Login
          </span>
          <div className="flex items-center ml-5 md:ml-20 md:mr-16 mr-5">
            <OutlineBtn label="Sign-Up" onClick={() => setShowModalContainer(true)} />
            {/* pass the event hadler as prop to deal the functionality of the button */}
          </div>
        </div>
      </nav>
      {showModalContainer && <ModalContainer onClose={() => setShowModalContainer(false)} />}
      {/* this is called conditional rendering and I am passing onClose as a prop to the SignUpModal to give the close button a functioality */}
      {showLogIn && <LoginModal onClose={closeLogin} handleContainer={() => setShowModalContainer(false)} />}
    </>
  );
};

export default NavBar;
