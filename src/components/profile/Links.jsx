import React from "react";
import { motion } from "framer-motion";
import {
  LinkIcon,
  PlusIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid"

const LinkCard = ({
  title,
  icon,
  link,
  glowColor = "rgba(214, 78, 134, 0.5)",
  showButton = true,
}) => {
  const handleClick = () => {
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      className="w-28 h-36 md:w-36 md:h-44 rounded-xl flex flex-col items-center justify-center cursor-pointer relative overflow-hidden bg-mystic/15 border-1 border-mystic"
      onClick={handleClick}
      style={{
        boxShadow: `0 0 27px ${glowColor}`,
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
    
      <div className="mb-2 md:w-20 w-12 overflow-hidden md:rounded-xl rounded-md">
        <div className="flex items-center justify-center ">{icon}</div>
      </div>
      <div className="text-white text-xs md:text-sm font-poppins font-medium mb-2 text-center px-1">
        {title}
      </div>
      {showButton ? (
        <button
          className="absolute bottom-2 px-2 py-0.5 rounded-full text-xs font-medium 
                   bg-mystic text-white bg-opacity-100 hover:bg-opacity-90 transition-colors duration-200"
        >
          Discover
        </button>
      ) : null}
    </motion.div>
  );
};
const Links = ({isUser}) => {
  return (
    <div className="bg-black text-white py-6 px-4 md:px-8 lg:px-12 font-poppins">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 flex items-center md:mx-12">
          <LinkIcon className="h-6 w-6 mr-2" />
          Explore My Links
        </h2>

        <div className="relative">
          <div className="flex items-center justify-start space-x-10 overflow-x-auto py-4 scrollbar-hide md:mx-12 h-48 md:h-56 pl-6">
            {isUser? <LinkCard
              showButton={false}
              icon={<PlusIcon className="h-10 w-10 text-mystic" />}
            /> : null }
            <LinkCard
              title="Github"
              icon={
                <img
                  src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-8173947-6491025.png?f=webp"
                  alt="GitHub"
                />
              }
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
