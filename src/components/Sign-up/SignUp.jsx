import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@nextui-org/react";
import google from "../../assets/google.svg";
import { EyeFilledIcon } from "../ui/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../ui/EyeSlashFilledIcon";
import ErrorPopup from "../ui/ErrorPopup";
import authService from "../../services/firebase";
import SuccessPopup from "../ui/SuccessPopup";
import {
  setStatus,
  setUser,
  setError,
  clearError,
  setEmailVerified,
} from "../../feature/authSlice";
import {
  setEmail,
  setPassword,
  togglePasswordVisibility,
  clearForm,
} from "../../feature/formSlice";
import { useNavigate } from "react-router-dom";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import EmailVerificationPopup from "../ui/EmailVerificationPopup";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, isPasswordVisible } = useSelector(
    (state) => state.form
  );


  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);
  const [emailVerificatioPopup, setEmailVarificationPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Custom Hook
  const handleGoogleSignIn = useGoogleLogin(setIsPopupOpen);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      dispatch(setEmail(e.target.value));
    } else {
      dispatch(setPassword(e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError());
    setSuccessPopup(false);
    try {
      setIsLoading(true);
      const response = await authService.createUser(email, password);
      if (response.providerId) {
        dispatch(setStatus(true));
        dispatch(setUser(response));
        // Open the popup for email verification
        setEmailVarificationPopup(true);

        const emailVerificationPromise = authService.verifyEmail();

        // Wait for the email verification process to complete
        const emailVerificationResult = await emailVerificationPromise;

        if (emailVerificationResult === "Email Verification Link Sent") {
          dispatch(setError(emailVerificationResult));
          setSuccessPopup(true);
        } else {
          dispatch(setError("Can't Sign Up"));
          setIsPopupOpen(true);
        }

        // Listen for email verification state changes
        authService.monitorEmailVerification(() => {
          dispatch(setEmailVerified(true));
          dispatch(clearForm());
          navigate("/auth/newuser", { state: { uid: response.uid } });
          setIsLoading(false);
        });
      } else {
        dispatch(setError(response));
        setIsPopupOpen(true);
      }
    } catch (error) {
      dispatch(setError(error));
      setIsPopupOpen(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="z-10 bg-black p-5 rounded-lg shadow-lg max-w-lg w-full">
      <EmailVerificationPopup
        onClose={() => setEmailVarificationPopup(false)}
        isOpen={emailVerificatioPopup}
      />
      <ErrorPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      <SuccessPopup
        isOpen={successPopup}
        onClose={() => setSuccessPopup(false)}
      />
      <div className="z-10 bg-black p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-white font-kalnia font-light text-3xl mb-6">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              name="email"
              color="primary"
              type="email"
              placeholder="you@email.com"
              size="lg"
              variant="bordered"
              radius="md"
              className="text-white font-poppins font-medium placeholder:font-poppins"
              onChange={handleChange}
            />
          </div>

          <div className="mb-4">
            <Input
              name="password"
              color="primary"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Choose Password"
              size="lg"
              variant="bordered"
              radius="md"
              endContent={
                <button
                  className="focus:outline-none"
                  type="button"
                  onClick={() => dispatch(togglePasswordVisibility())}
                >
                  {isPasswordVisible ? (
                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  ) : (
                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                  )}
                </button>
              }
              className="text-white font-poppins font-medium placeholder:font-poppins"
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full text-white font-poppins rounded-lg"
            isLoading = {isLoading}
          >
            Sign Up
          </Button>
        </form>
        <div className="my-2">
          <h1 className="font-poppins font-light mb-1 text-contrast-2 text-xs">
            Already have an account?
          </h1>
          <Button
            size="sm"
            variant="flat"
            color="primary"
            className="font-poppins"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </Button>
        </div>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-white">
            <span className="bg-black px-4 font-poppins text-sm">Or</span>
          </div>
        </div>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 px-4 bg-black text-white font-medium font-poppins rounded-lg border border-white hover:border-mystic transition-colors duration-300 flex items-center justify-center"
        >
          <img src={google} alt="Google" className="h-5 w-5 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
