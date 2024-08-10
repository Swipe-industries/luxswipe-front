import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dbService from "../services/dynamodb";
import Error from "../pages/Error";
import {
  IconLayoutDashboardFilled,
  IconBuildingWarehouse,
} from "@tabler/icons-react";
import ProfileSection from "../components/profile/ProfileSection";
import Links from "../components/profile/Links";


const Dashboard = () => {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //this will fetch all the details of the user if found in the database
    const checkUsername = async () => {
      try {
        const awsResponse = await dbService.getUserData(username); //here awsResponse is an array with user details at index 0 and post details at index 1 and so on...
        if (awsResponse[0].username === username) {
          setIsLoading(false);
          setUserExists(true);
        } else {
          setUserExists(false);
        }
      } catch (error) {
        console.error("Error Checking username:", error);
        setUserExists(false);
      }
    };

    checkUsername();
  }, [username]);

  return userExists ? (
    <>
      <ProfileSection />
      <Links />
    </>
  ) : (
    <Error />
  );
};

export default Dashboard;
