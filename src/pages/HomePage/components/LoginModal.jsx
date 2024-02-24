import React, { useState } from "react";
import googleIcon from "../assets/Google.svg";
import Eye from "../../../reUseComponets/Eye";
import InputField from "../../../reUseComponets/InputField";
import OutlineBtn from "../../../reUseComponets/OutlineBtn";

function LoginModal() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25">
        <div className="bg-tiffany-blue p-8 rounded-xl shadow-md w-80 md:w-1/3">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl font-kalnia-300 mb-5">Login</h1>
          </div>
          <div className="flex justify-center items-center">
            <a href="#">
              <img
                className="mb-3"
                src={googleIcon}
                alt="sign-in with google icon"
              />
            </a>
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
              className="bg-black font-poppins text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
            >
              Login
            </button>

            <a href="#" className="font-poppins text-xs underline text-mid-1">
              Forgot Your Passord?
            </a>

            <p className="mt-5 mb-1 text-sm font-poppins text-base-3">
              Don't have an account?
            </p>

            <OutlineBtn label= "Sign-Up"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginModal;
