import React, { useState } from "react";
import googleIcon from "../assets/Google.svg";
import Eye from "./ui/Eye";
import InputField from "./ui/InputField";
import OutlineBtn from "./ui/OutlineBtn";
import SignUpModal from "./SignUpModal";

function LoginModal(props) {
  const { onClose } = props;

  const handleOutsideClick = (event) => {
    if (event.target.id === "container") {
      onClose();
    }
  };


  return (
    <>
      <div
        id="container"
        onClick={handleOutsideClick}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25"
      >
        <div className="bg-tiffany-blue p-8 rounded-xl shadow-md w-80 md:w-[500px] px-10 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-3xl text-base-1 cursor-pointer hover:text-base-3 focus:outline-none"
          >
            &times;
          </button>

          <div className="flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-kalnia-300 mb-5">Login</h1>
          </div>

          <div className="flex justify-center items-center">
            <img
              role="button"
              className="mb-3 hover:scale-[1.01]"
              src={googleIcon}
              alt="sign-in with google icon"
            />
          </div>

          <div className="flex items-center">
            <div className="w-1/2 h-px border border-base-3"></div>
            <p className="px-2 font-poppins text-base-1">or</p>
            <div className="w-1/2 h-px border border-base-3"></div>
          </div>

          <div className="py-2 w-full">
            <form action="">
              <InputField placeLabel="Email" />
              <div className="relative w-full">
                <InputField placeLabel="Password" />
                <Eye />
              </div>
            </form>

            <button
              type="button"
              className="bg-base-1 font-poppins text-contrast-3 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-mystic w-full"
            >
              Login
            </button>

            <a
              href="#"
              className="font-poppins text-xs underline text-mid-1 hover:text-base-2"
            >
              Forgot Your Passord?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
