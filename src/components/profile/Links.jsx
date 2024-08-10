import React from 'react';
import { LinkIcon, PlusIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

const LinkCard = ({ icon, bgColor, borderColor }) => (
  <div className={`w-24 h-32 md:w-32 md:h-40 rounded-xl ${bgColor} ${borderColor} border-2 flex items-center justify-center`}>
    {icon}
  </div>
);

const Links = () => {
  return (
    <div className="bg-black text-white py-8 px-4 md:px-8 lg:px-12 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 flex items-center md:mx-12">
          <LinkIcon className="h-6 w-6 mr-2" />
          Explore My Links
        </h2>
        
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide md:mx-12">
            <LinkCard 
              icon={<PlusIcon className="h-10 w-10 text-mystic" />}
              bgColor="bg-gray-900"
              borderColor="border-transparent"
            />
            <LinkCard 
              icon={<img src="/path-to-github-icon.png" alt="GitHub" className="h-12 w-12" />}
              bgColor="bg-gray-800"
              borderColor="border-pink-500"
            />
            {/* Add more LinkCards as needed */}
          </div>
          
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hidden md:block">
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 rounded-full p-2 hidden md:block">
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Links;