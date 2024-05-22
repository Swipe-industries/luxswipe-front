import React from "react";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const {username} = useParams();
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center items-center h-screen">
          <h1 className="font-kalnia text-white md:text-4xl">Hello {username[0].toUpperCase() + username.slice(1)} Your Dashbord Will Be Displayed Here In Near Future</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
