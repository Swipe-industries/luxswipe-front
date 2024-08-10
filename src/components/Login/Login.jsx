import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import google from "../../assets/google.svg";
import { EyeFilledIcon } from "../ui/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../ui/EyeSlashFilledIcon";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../services/firebase";
import { useDispatch, useSelector } from "react-redux";
import ErrorPopup from "../ui/ErrorPopup";
import ResetPasswordPopup from "./ResetPasswordPopup";
import useGoogleLogin from "../../hooks/useGoogleLogin";
import dbService from "../../services/dynamodb";
import {
  clearError,
  setError,
  setStatus,
  setUser,
} from "../../feature/authSlice";
import {
  clearForm,
  setEmail,
  setPassword,
  togglePasswordVisibility,
} from "../../feature/formSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { email, password, isPasswordVisible } = useSelector(
    (state) => state.form
  );

  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);
  const [isResetPasswordPopupOpen, setIsResetPasswordPopupOpen] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  //Custom Hook
  const handleGoogleSignIn = useGoogleLogin(setIsErrorPopupOpen);

  const handleChange = (e) => {
    if (e.target.name === "email") {
      dispatch(setEmail(e.target.value));
    } else {
      dispatch(setPassword(e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError(""));
    try {
      setIsLoading(true);
      const response = await authService.login(email, password);

      if (response.providerId) {
        dispatch(setStatus(true));
        dispatch(setUser(response));

        const awsResponse = await dbService.getUserInfo(response.uid);
        if (awsResponse.username) {
          dispatch(clearForm());
          navigate(`/${awsResponse.username}`);
          setIsLoading(false);
        }else{
          //it means in response we reveive an error
          dispatch(setError("Can't fetch the details try again later"))
          setIsErrorPopupOpen(true);
        }
      } else {
        dispatch(setError(response));
        setIsErrorPopupOpen(true);
      }
    } catch (error) {
      dispatch(setError(error));
      setIsErrorPopupOpen(true);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="z-10 bg-black p-5 rounded-lg shadow-lg max-w-lg w-full">
        <ErrorPopup
          isOpen={isErrorPopupOpen}
          onClose={() => setIsErrorPopupOpen(false)}
        />
        <ResetPasswordPopup
          isOpen={isResetPasswordPopupOpen}
          onClose={() => setIsResetPasswordPopupOpen(false)}
        />
        <div className="z-10 bg-black p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-white font-kalnia font-light text-3xl mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                name="email"
                color="primary"
                type="email"
                placeholder="Email"
                size="lg"
                variant="bordered"
                radius="md"
                className="text-white font-poppins font-medium placeholder:font-poppins"
                onChange={handleChange}
              />
            </div>
            <div className="mb-1">
              <Input
                name="password"
                color="primary"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
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
            <div className="mb-4 text-right">
              <Link
                onClick={() => setIsResetPasswordPopupOpen(true)}
                className="font-poppins text-contrast-2 text-xs underline mr-1 hover:text-blue-400"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              color="primary"
              className="w-full py-2 px-4 text-white font-poppins"
              isLoading={isLoading}
            >
              Login
            </Button>
          </form>

          <div className="my-2">
            <h1 className="font-poppins font-light mb-1 text-contrast-2 text-xs">
              Don't have an account?
            </h1>
            <Button
              size="sm"
              variant="flat"
              color="primary"
              className="font-poppins"
              onClick={() => navigate("/auth/signup")}
            >
              Sign Up
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
    </>
  );
}

export default Login;
