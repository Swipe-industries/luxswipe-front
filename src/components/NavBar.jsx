import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <h1 className="font-kalnia font-normal text-5xl m-5 text-white">LuxSwipe</h1>
      </div>
      <div className="flex font-poppins text-custom-size items-center">
        <a href="#" className="mx-2 text-black no-underline">Home</a>
        <a href="#" className="mx-2 text-white no-underline">About</a>
        <a href="#" className="mx-2 text-white no-underline">Login</a>
      </div>
    </nav>
  );
}

export default NavBar;
