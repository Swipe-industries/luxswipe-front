import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/Footer";

function Root() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow">
        <div className="w-full bg-grid-mystic/[0.4] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="w-full z-0">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Root;