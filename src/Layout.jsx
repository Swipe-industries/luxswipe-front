import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="min-h-screen w-full bg-black bg-grid-mystic/[0.3] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="w-full z-0 justify-center items-center flex">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Layout;
