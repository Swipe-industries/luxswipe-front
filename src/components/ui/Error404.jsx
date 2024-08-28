import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@nextui-org/react';

const Error404 = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-black/70 min-h-screen flex flex-col items-center font-poppins justify-center text-pink-400">
      <div className="max-w-2xl w-full px-4">
        <h1 className="md:text-5xl text-3xl font-bold mb-8 text-center">404 - Page Not Found</h1>
        <div className="bg-gray-900 rounded-lg p-14 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            {/* <div className="w-20 h-20 bg-mystic rounded-full flex items-center justify-center text-3xl font-bold text-white">
              404
            </div> */}
          </div>
          <p className="md:block hidden text-xl text-center mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="md:hidden  text-xl text-center mb-8">
            Oops! The page doesn't exist.
          </p>
          <div className="flex justify-center">
            <Button onClick={()  => navigate("/")} color='primary' variant='shadow' className='text-white font-semibold
            '>
            Go Back Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error404;