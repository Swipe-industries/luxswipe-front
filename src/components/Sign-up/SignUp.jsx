import { useState } from "react";
import React from "react";
import { Input } from "@nextui-org/react";
import google from "../../assets/google.svg";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="z-10 bg-black p-8 rounded-lg shadow-lg max-w-md w-full">
      <h2 className="text-white font-kalnia font-light text-3xl mb-6">
        Create Account
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          {/* <label htmlFor="username" className="text-white font-poppins text-sm ml-3">
            Email
          </label> */}
          <Input
            color="primary"
            type="email"
            placeholder="you@email.com"
            size="lg"
            variant="bordered"
            radius="md"
            className="text-white font-poppins font-medium placeholder:font-poppins"
          />
          {/* <input
            placeholder="someone@example.com"
            type="email"
            id="email"
            name="email"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-gray-800 text-white font-poppins focus:outline-none focus:ring-2 focus:ring-mystic"
          /> */}
        </div>

        <div className="mb-4">
          <Input
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
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-mystic text-white font-poppins rounded-lg hover:bg-mystic/80 transition-colors duration-300"
        >
          Sign Up
        </button>

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
      </form>
    </div>
  );
}

export default SignUp;