import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <NavBar />
      <div className="h-full w-full bg-black bg-grid-mystic/[0.4] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="inline-block w-full z-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Root;

{
  /* <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p> */
}

{
  /* <div className="w-full h-screen bg-black overflow-hidden">

<div className="z-0 md:left-0 md:absolute md:transform  md:translate-y-[400px] md:w-[300px] md:h-[200px] md:bg-mystic md:rounded-full md:blur-[100px] md:z-0"></div>

<div className="z-20 absolute bottom-0 blur-[3px] mb-1">
  <img className="h-[420px]" src={girl} alt="" />
</div>

best to render this one on mobile devices
<div className="absolute right-0 bottom-0 blur-[2px]">
  <img className="md:h-[500px]" src={man} alt="" />
</div>

<div className=" md:absolute md:right-40 md:transform md:translate-y-[400px] md:translate-x-1/2 md:w-[300px] md:h-[200px] md:bg-tiffany-blue md:rounded-full md:blur-[100px] md:z-0"></div>

<div className="z-20 absolute right-0 bottom-0 blur-[3px] mb-1">
  <img className="md:h-[450px]" src={blueGirl} alt="" />
</div>

<div className="absolute top-0 left-0 w-full z-20">
  <LampEffect />
</div>
</div> */
}
