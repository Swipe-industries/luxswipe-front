import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex items-center">
        <h1 className="font-kalnia font-normal text-5xl m-0">LuxSwipe</h1>
      </div>
      <div className="flex font-poppins text-custom-size items-center">
        <a href="#" className="mx-2 text-black">Home</a>
        <a href="#" className="mx-2">About</a>
        <a href="#" className="mx-2">Login</a>
      </div>
    </nav>
  );
}

export default NavBar;
