import React, { useState } from "react";
import googleIcon from "../assets/google.svg";
import Eye from "./ui/Eye";
import InputField from "./ui/InputField";

function SignUpModal(props) {
  const { onClose } = props;

  const handleOutsideClick = (event) => {
    if (event.target.id === "container") {
      onClose();
    }
  };

  const prefix = "luxswipe.in/";
  const [inputValue, setInputValue] = useState(prefix);

  const handleFielChange = (event) => {
    setInputValue(event.targer.value);

    if (value.startsWith(prefix)) {
      setInputValue(value);
    } else {
      setInputValue(prefix + value);
    }
  };

  return (
    <>
      <div
        id="container"
        onClick={handleOutsideClick}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-25"
      >
        <div className="bg-tiffany-blue p-8 rounded-xl shadow-md w-80 md:w-auto px-10 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-3xl text-base-1 cursor-pointer hover:text-base-3 focus:outline-none"
          >
            &times;
          </button>

          <div className="flex justify-center items-center">
            <h1 className="text-xl font-kalnia-300 mb-5 md:text-4xl">
              Sign-Up To Continue.
            </h1>
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
              <input
                type="text"
                defaultValue={inputValue}
                placeholder="Username"
                onChange={handleFielChange}
                className="mb-2 w-full placeholder-base-3 hover:border-base-3 bg-transparent border text-base-1 border-base-1 px-4 py-2 rounded-xl focus:outline-none focus:border-mid-1"
              />

              <InputField placeLabel="Email" />

              <div className="relative w-full">
                <InputField placeLabel="Password" />
                <Eye />
              </div>
            </form>

            <button
              type="button"
              className="bg-base-1 font-poppins text-contrast-3 px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
            >
              Sign-Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUpModal;
