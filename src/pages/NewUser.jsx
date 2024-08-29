import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setError } from "../feature/authSlice";
import ErrorPopup from "../components/ui/ErrorPopup";
import dbService from "../services/dynamodb";
import authService from "../services/firebase.js";

function NewUser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [profileName, setProfileName] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [errorPopup, setErrorPopup] = useState(false);
  const [constraint, setConstraint] = useState("");
  const location = useLocation();
  const uid = location.state?.uid;
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const userData = {
    username: username,
    SK: "PROFILE",
    uid: uid,
    name: profileName,
  };

  const handleUsernameChange = (e) => {
    const inputValue = e.target.value;
    let newConstraint = "";

    if (inputValue.includes(" ")) {
      newConstraint = "No spaces allowed";
    } else if (/[A-Z]/.test(inputValue)) {
      newConstraint = "Use lowercase only";
    } else if (/^\d/.test(inputValue)) {
      newConstraint = "Cannot start with a number";
    } else if (inputValue.length < 3) {
      newConstraint = "Too short";
    }

    setConstraint(newConstraint);
    setUsername(inputValue);
    setErrorMessage(newConstraint ? "Enter a valid username" : "");
    validateForm(inputValue, profileName, newConstraint);
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    const capitalizedValue =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setProfileName(capitalizedValue);
    validateForm(username, capitalizedValue, constraint);
  };

  const validateForm = (username, profileName, constraint) => {
    const isValid =
      username.length > 0 &&
      profileName.length > 0 &&
      !constraint &&
      isAvailable;
    setIsFormValid(isValid);
  };

  useEffect(() => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    const timeout = setTimeout(() => {
      if (username) {
        checkUsername(username);
      }
    }, 1000);

    setTypingTimeout(timeout);

    return () => clearTimeout(timeout);
  }, [username]);

  const checkUsername = async (username) => {
    const awsResponse = await dbService.checkUsername(username);
    setIsAvailable(awsResponse.available);
    validateForm(username, profileName, constraint);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setErrorMessage("Please fill all fields correctly");
      dispatch(setError(errorMessage));
      setErrorPopup(true);
      return;
    }
    try {
      const awsResponse = await dbService.createUser(userData, isAvailable);
      if (awsResponse.message) {
        authService.saveAwsSession(awsResponse.user);
        navigate(`/${awsResponse.user.username}`);
      } else {
        dispatch(setError(awsResponse));
        setErrorPopup(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ErrorPopup isOpen={errorPopup} onClose={() => setErrorPopup(false)} />
      <div className="flex items-center justify-center min-h-screen bg-black w-full bg-opacity-50">
        <div
          className={`h-auto relative border border-mystic w-auto rounded-2xl p-10 md:mx-36 mx-5 mt-20 mb-5 bg-black`}
        >
          <h1 className="text-white font-kalnia font-light md:text-4xl text-2xl mb-10">
            Almost Done! <br />
            Just a Few More Details
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <p className="text-white font-poppins mb-1 ml-1">
                Choose a username
              </p>
              <div>
                <Input
                  required
                  name="username"
                  color="primary"
                  type="text"
                  placeholder="luxswipe.in/username"
                  size="lg"
                  variant="bordered"
                  radius="md"
                  className="text-white font-poppins font-medium placeholder:font-poppins"
                  onChange={handleUsernameChange}
                  value={username}
                />
              </div>
              {username && (
                <p
                  className={`text-xs pl-2 pt-1 font-poppins tracking-tighter ${
                    constraint
                      ? "text-danger-500"
                      : isAvailable
                      ? "text-green-500"
                      : "text-danger-500"
                  }`}
                >
                  {constraint ||
                    (isAvailable ? "Available" : "Username Already Taken")}
                </p>
              )}
            </div>
            <div className="mb-4">
              <p className="text-white font-poppins mb-1 ml-1">Profile Name</p>
              <Input
                required
                name="profileName"
                color="primary"
                type="text"
                placeholder="Your Display Name"
                size="lg"
                variant="bordered"
                radius="md"
                value={profileName}
                className="text-white font-poppins font-medium placeholder:font-poppins"
                onChange={handleNameChange}
              />
            </div>
            <div className="flex justify-end">
              <Button
                color="primary"
                variant="ghost"
                className="text-center font-poppins"
                type="submit"
                disabled={!username && !profileName}
              >
                Next
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewUser;
