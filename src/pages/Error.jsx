import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen relative">
        <div className="absolute top-1/2 transform -translate-y-1/2">
          <img
            className="rounded-2xl h-[500px]"
            src="https://ik.imagekit.io/luxswipe/version-2.0/under-construction.png?updatedAt=1711688335017"
            alt=""
          />
        </div>
        <div className="text-black font-poppins font-semibold text-2xl absolute translate translate-y-32">
          <h1 className="text-center">This Page Is Under Construction</h1>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 m-10">
        <Link
          to="https://pngtree.com/freepng/website-under-construction_5184706.html"
          className="text-white text-lg"
        >
          png image from pngtree.com
        </Link>
      </div>
    </>
  );
}

export default Error;
