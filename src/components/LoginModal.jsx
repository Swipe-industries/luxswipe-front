import React, { useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import googleIcon from "../assets/google.svg";
import InputField from "./ui/InputField";
import { signInWithEmailAndPassword } from "firebase/auth";
import useGoogleLogin from "../hooks/useGoogleLogin";
import usePasswordEye from "../hooks/usePasswordEye";

function LoginModal({ onClose, handleContainer }) {
  //Hooks
  const [fieldType, isPasswordVisible, passwordVisibility] = usePasswordEye();
  const logInWithGoogle = useGoogleLogin();
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOutsideClick = (event) => {
    if (event.target.id === "container") {
      onClose();
      handleContainer();
    }
  };

  const handleCloseButtonClick = () => {
    onClose();
    handleContainer();
  }

  const logIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //login successful
        const user = userCredential.user;
        console.log(user);
        navigateTo("/username");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
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
            onClick={handleCloseButtonClick}
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
              onClick={logInWithGoogle}
            />
          </div>

          <div className="flex items-center">
            <div className="w-1/2 h-px border border-base-3"></div>
            <p className="px-2 font-poppins text-base-1">or</p>
            <div className="w-1/2 h-px border border-base-3"></div>
          </div>

          <div className="py-2 w-full">
            <InputField
              fieldId={"email"}
              fieldType={"text"}
              isRequired
              placeholder={"Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative w-full">
              <InputField
                fieldId={"password"}
                fieldType={fieldType}
                isRequired
                placeholder={"Password"}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="absolute inset-y-0 right-0 flex items-center px-3 text-base-1"
                onClick={passwordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <button
              onClick={logIn}
              type="button"
              className="bg-base-1 font-poppins text-contrast-3 px-4 py-2 rounded-md w-full focus:ring-2 focus:ring-base-3 hover:shadow-md"
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
