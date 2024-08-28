import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setError } from "../feature/authSlice";
import ErrorPopup from "../components/ui/ErrorPopup";
import dbService from "../services/dynamodb";
import authService from "../services/firebase.js"

function NewUser() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [profileName, setProfileName] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [errorPopup, setErrorPopup] = useState(false);
  const location = useLocation();
  const uid = location.state?.uid;
  const dispatch = useDispatch();
  const userData = {
    username: username,
    SK: "PROFILE",
    uid: uid,
    name: profileName,
  };

  const handleNameChange = (e) => {
    const inputValue = e.target.value;
    // Capitalize the first letter
    const capitalizedValue =
      inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    setProfileName(capitalizedValue);
  };

  useEffect(() => {
    // Clear previous timeout if user starts typing again
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set a timeout to check username after user stops typing
    const timeout = setTimeout(() => {
      if (username) {
        checkUsername(username);
      }
    }, 1000); // 500ms delay

    // Save the timeout
    setTypingTimeout(timeout);

    // Cleanup function to clear timeout
    return () => clearTimeout(timeout);
  }, [username]);

  const checkUsername = async (username) => {
    const awsResponse = await dbService.checkUsername(username);
    setIsAvailable(awsResponse.available);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const awsResponse = await dbService.createUser(userData, isAvailable);
    if (awsResponse.message) {
      authService.saveAwsSession(awsResponse.user);
      navigate(`/${awsResponse.user.username}`);
    } else {
      dispatch(setError(awsResponse));
      setErrorPopup(true);
    }
  };

  return (
    <>
      <ErrorPopup isOpen={errorPopup} onClose={() => setErrorPopup(false)} />
      <div
        className={`h-auto relative border border-mystic w-auto rounded-2xl p-10 md:mx-36 mx-5 mt-20 mb-5 bg-black`}
      >
        <h1 className="text-white font-kalnia font-light md:text-4xl text-2xl mb-10">
          Almost Done! <br />
          Just a Few More Details
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <p className="text-mystic font-poppins mb-1 ml-1">
              Choose a username
            </p>
            <div>
              <Input
                required
                name="username"
                color="primary"
                type="text"
                placeholder="username"
                size="lg"
                variant="bordered"
                radius="md"
                className="text-white font-poppins font-medium placeholder:font-poppins"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            {username ? (
              <p
                className={`text-xs pl-2 pt-1 font-poppins tracking-tighter ${
                  isAvailable ? "text-green-500" : "text-danger-500"
                }`}
              >
                {isAvailable ? "Available" : "Username Already Taken"}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <p className="text-mystic font-poppins mb-1 ml-1">Profile Name</p>
            <Input
              required
              name="profileName"
              color="primary"
              type="text"
              placeholder="Name"
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
            >
              Next
            </Button>
          </div>
        </form>
        {/* <div className="flex md:flex-col flex-row justify-center gap-52 md:gap-8 md:mb-10 mb-12">
        </div> */}
      </div>
    </>
  );
}

export default NewUser;
