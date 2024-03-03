import React from "react";
import NavBar from "../components/ui/NavBar";

const Dashboard = () => {
  return (
    <>
      <div className="h-screen">
        <NavBar />

        <div className="flex justify-center items-center h-screen">
          <h1 className="font-kalnia-400 text-contrast-3 md:text-4xl">Your Dashbord Will Be Displayed Here In Near Future</h1>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
