import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button } from "@nextui-org/react";
import google from "../../assets/google.svg";
import { EyeFilledIcon } from "../ui/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../ui/EyeSlashFilledIcon";
import authService from "../../services/firebase";
import {
  setStatus,
  setUser,
  setError,
  clearError,
} from "../../feature/authSlice";
import { useNavigate } from "react-router-dom";
import ErrorPopup from "../ui/ErrorPopup";

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearError(""));
    try {
      const response = await authService.createUser(
        formData.email,
        formData.password
      );
      if (response.providerId) {
        dispatch(setStatus(true));
        dispatch(setUser(response));
        navigate("/auth/newuser");
        // Redirect to the next page or perform any other necessary actions
      } else {
        dispatch(setError(response));
        setIsPopupOpen(true);
      }
    } catch (error) {
      dispatch(setError(error));
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="z-10 bg-black p-8 rounded-lg shadow-lg max-w-lg w-full">
      <ErrorPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
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
                  onClick={togglePasswordVisibility}
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
          >
            Sign Up
          </Button>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-white">
            <span className="bg-black px-4 font-poppins text-sm">Or</span>
          </div>
        </div>
        <button className="w-full py-2 px-4 bg-black text-white font-medium font-poppins rounded-lg border border-white hover:border-mystic transition-colors duration-300 flex items-center justify-center">
          <img src={google} alt="Google" className="h-5 w-5 mr-2" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
