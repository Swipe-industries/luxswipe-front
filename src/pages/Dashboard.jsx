import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dbService from "../services/dynamodb";
import LoadingState from "../components/ui/LoadingState";
import Error404 from "../components/ui/Error404";
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
  const [userData, setUserData] = useState(null);
  const [linkData, setLinkData] = useState([]);
  const [postData, setPostData] = useState([]);
  
  

  useEffect(() => {
    //this will fetch all the details of the user if found in the database
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const response = await dbService.getUserData(username);
        //here response is an array with user details at index 0 and links details at index 1 and so on...

        // setAwsResponse(response); Instead of setting all the array data at once I am setting it in chunks

        // const userDataFromDB = response[0]; //now no need of this thing

        if (response && response.length > 0) {
          const userProfile = response.find(item => !item.SK.startsWith("PROFILELINK"));

          if (userProfile && userProfile.username === username) {
            setUserData(userProfile);
            setUserExists(true);

            //Extracting all items with SK starting with PROFILELINK
            const links = response.filter(item => item.SK.startsWith("PROFILELINK"));
            setLinkData(links);

            //Extracting all items with SK starting with PROFILEPOST
            const posts = response.filter(item => item.SK.startsWith("PROFILEPOST"));
            setPostData(posts);

            const currentUser = authService.getCurrentUser(); //fetching currently singed in user from local storage

            // console.log(currentUser);

            if (currentUser) {
              dispatch(setAuthStatus(true));
              //it means that there is an account that is already logged in. Here we need to check if he is user or visitor
              if (currentUser.uid === userProfile.uid) {
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
        } else {
          setUserExists(false);
        }
      } catch (error) {
        console.error("Error Checking username:", error);
        setUserExists(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [username, dispatch]);

  return (
    <>
      {isLoading && <LoadingState />}
      {!isLoading && userExists && userData && (
        <>
          <ProfileSection isUser={isUser} userData={userData} />
          {(linkData.length > 0 || isUser) && <Links isUser={isUser} userData={userData} linkDataProp={linkData} />}
          {/* { <Nav />} */}
        </>
      )}
      {!isLoading && (!userExists || !userData) && <Error404 />}
    </>
  );
};

export default Dashboard;