import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dbService from "../services/dynamodb";
import Error from "../pages/Error";
import ProfileSection from "../components/profile/ProfileSection";
import Links from "../components/profile/Links";
import Nav from "../components/profile/Nav";
import authService from "../services/firebase";
import { useDispatch } from "react-redux";
import { setAuthStatus, setUser } from "../feature/authSlice";

const Dashboard = () => {
  const { username } = useParams();
  const dispatch = useDispatch();
  const [isUser, setIsUser] = useState(false);
  const [userExists, setUserExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [awsResponse, setAwsResponse] = useState(null);

  useEffect(() => {
    //this will fetch all the details of the user if found in the database
    const checkUsername = async () => {
      try {
        const response = await dbService.getUserData(username); //here response is an array with user details at index 0 and post details at index 1 and so on...
        setAwsResponse(response);
        const userDataFromDB = response[0];

        if (userDataFromDB.username === username) {
          setIsLoading(false);
          setUserExists(true);
          const currentUser = authService.getCurrentUser();
          // console.log(currentUsers);

          if (currentUser) {
            dispatch(setAuthStatus(true));
            //it means that there is an account that is already logged in. Here we need to check if he is user or visitor
            if (currentUser.uid === userDataFromDB.uid) {
              //it means the visitor is the actual owner of the account
              //So I am setting the isUser to true
              setIsUser(true);
              dispatch(setUser(currentUser));
            } else {
              // it means the visior is not logged in so I am treating his as the visitor only
              //So I am setting the isUser to false, so if not isUser then definately he is the visitor
              setIsUser(false);
            }
          }
        } else {
          setUserExists(false);
        }
      } catch (error) {
        console.error("Error Checking username:", error);
        setUserExists(false);
      }
    };

    checkUsername();
  }, [username, dispatch]);

  return userExists && awsResponse ? (
    <>
      <ProfileSection apiData={awsResponse} />
      <Links isUser={isUser} />
      <Nav />
    </>
  ) : (
    <Error />
  );
};

export default Dashboard;
